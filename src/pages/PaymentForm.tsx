import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

declare global {
  interface Window {
    paypal?: any;
  }
}

interface PlanData {
  name: string;
  amount: number;
  credits: string;
  bonus?: string;
}

interface PaymentFormProps {
  onPaymentSuccess: (details: any) => void;
  fixedAmount?: number; // in dollars
  fixedPlanName?: string;
  allowAmountEdit?: boolean; // if false, disable amount input
  planFromRoute?: PlanData | null;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  onPaymentSuccess,
  fixedAmount,
  fixedPlanName,
  allowAmountEdit = true,
  planFromRoute = null,
}) => {
  const [serverId, setServerId] = useState("");
  const [amount, setAmount] = useState(
    fixedAmount ? fixedAmount.toFixed(2) : ""
  );
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // form locked, show invoice
  const paypalRef = useRef<HTMLDivElement>(null);
  const [paymentOnlySuccess, setPaymentOnlySuccess] = useState(true);


  const minDollarAmount = 1;

  // Load plan data from route if available
  useEffect(() => {
    if (planFromRoute) {
      setAmount(planFromRoute.amount.toFixed(2));
      setIsLocked(false);
    }
  }, [planFromRoute]);

  // Sync fixedAmount and allowAmountEdit changes
  useEffect(() => {
    if (fixedAmount) {
      setAmount(fixedAmount.toFixed(2));
    } else if (!allowAmountEdit) {
      setAmount("");
    }
  }, [fixedAmount, allowAmountEdit]);

  const [isCrediting, setIsCrediting] = useState(false);


  // Load PayPal SDK and render buttons only when showPayPal is true
  useEffect(() => {
    if (!showPayPal) return;

    if (!window.paypal) {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AbuSk-fOxPY3ABOYISD9w9bb0cuXbJuBmXspSIH00ayGBk4fZwCDipMN1nsHkDg9pIAJElNnK9QNYk5h&currency=USD`;
      script.async = true;
      script.onload = () => renderButtons();
      document.body.appendChild(script);
    } else {
      renderButtons();
    }
  }, [showPayPal]);

const renderButtons = () => {
  if (!paypalRef.current) return;
  paypalRef.current.innerHTML = "";

  window.paypal
    .Buttons({
      style: {
        shape: "rect",
        color: "blue",
        layout: "vertical",
        label: "pay",
        height: 45,
      },

      createOrder: async (_data: any, actions: any) => {
        setIsProcessing(true);
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
              description:
                fixedPlanName || planFromRoute?.name || "شراء فلكس مخصص",
            },
          ],
          application_context: {
            shipping_preference: "NO_SHIPPING",
            user_action: "PAY_NOW",
          },
        });
      },

onApprove: async (_data: any, actions: any) => {
  try {
    setIsProcessing(true);
    const details = await actions.order.capture();

    setIsCrediting(true);
    const resp = await fetch("https://685ac01f001658d52d80.fra.appwrite.run/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentId: details.id,
        serverId,
        planName: fixedPlanName || planFromRoute?.name,
        amount,
      }),
    });

    const json = await resp.json();
    setIsCrediting(false);

    if (json.success) {
      setPaymentSuccess(true);
      setPaymentDetails({ id: details.id });
      onPaymentSuccess(json.details);
    } else {
      setPaymentOnlySuccess(true); // payment done but flux failed
      setPaymentDetails({ id: details.id });
    }
  } catch (err) {
    console.error("Error in onApprove:", err);
    setIsCrediting(false);
    setPaymentFailure(true);
  }
},


      onError: (_err: any) => {
        setPaymentFailure(true);
        setShowPayPal(false);
        setIsProcessing(false);
      },
    })
    .render(paypalRef.current);
};




const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  const parsedAmount = parseFloat(amount);
  if (!serverId.trim()) {
    setError("يرجى إدخال معرف السيرفر");
    return;
  }
  if (isNaN(parsedAmount) || parsedAmount < minDollarAmount) {
    setError(`يجب أن يكون المبلغ $${minDollarAmount} أو أكثر`);
    return;
  }

  setCanShowForm(false); // hide form
  setTimeout(() => {
    setIsLocked(true);
    setCanShowBill(true);
    setShowPayPal(true);
  }, 600); // wait for form animation to finish
};

const handleEdit = () => {
  setCanShowBill(false); // hide bill
  setTimeout(() => {
    setIsLocked(false);
    setCanShowForm(true); // show form after bill exits
    setShowPayPal(false);
    setError("");
  }, 600); // match animation timeout
};

const [canShowForm, setCanShowForm] = useState(true); // Controls form entry
const [canShowBill, setCanShowBill] = useState(false); // Controls bill entry


const [paymentSuccess, setPaymentSuccess] = useState(false);
const [paymentFailure, setPaymentFailure] = useState(false);
const [paymentDetails, setPaymentDetails] = useState<any>(null);



  return (
    <>
      <style>{`
      /* Animations for CSSTransition */
      .fade-enter {
        opacity: 0;
        transform: translateY(15px);
      }
      .fade-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 500ms ease, transform 500ms ease;
      }
      .fade-exit {
        opacity: 1;
        transform: translateY(0);
      }
      .fade-exit-active {
        opacity: 0;
        transform: translateY(15px);
        transition: opacity 500ms ease, transform 500ms ease;
      }
.fade-height-enter {
  opacity: 0;
  transform: translateY(20px);
  max-height: 0;
  overflow: hidden;
}
.fade-height-enter-active {
  opacity: 1;
  transform: translateY(0);
  max-height: 1000px;
  transition: all 600ms ease;
}
.fade-height-exit {
  opacity: 1;
  transform: translateY(0);
  max-height: 1000px;
}
.fade-height-exit-active {
  opacity: 0;
  transform: translateY(20px);
  max-height: 0;
  overflow: hidden;
  transition: all 600ms ease;
}


      `}</style>

    <div className="fixed inset-0 overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-6 z-50">
  <div className="relative max-w-xl w-full bg-slate-900/95 rounded-3xl shadow-2xl border border-teal-500/40 p-8 min-h-[460px] flex flex-col">

<div className="flex items-center space-x-2 mb-6 justify-center select-none">
  <svg
    className="w-6 h-6 text-teal-400"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2l8 4v6c0 5.25-3.25 9.75-8 11-4.75-1.25-8-5.75-8-11V6l8-4z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4"
    />
  </svg>
  <span className="text-teal-300 font-medium text-sm pr-1 items-center justify-center pt-1">اتصال آمن ومشفر</span>
</div>



{!paymentSuccess && !paymentFailure && (
    <>
   
<CSSTransition
  in={canShowForm}
  timeout={600}
  classNames="fade-height"
  unmountOnExit
>
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
              {/* Server ID */}
              <div>
   <label
  htmlFor="serverId"
  className="block mb-1 text-sm font-medium text-slate-300 select-none"
>
  معرف السيرفر
</label>

                <input
                  id="serverId"
                  type="text"
className="w-full rounded-md px-4 py-3 bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
                  value={serverId}
                  onChange={(e) => setServerId(e.target.value)}
                  placeholder="مثال: 123456789012345678"
                  required
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>


              {/* Amount input or plan info */}
              {planFromRoute || fixedPlanName ? (
                           <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-teal-600 select-none ">
  <h3 className="text-xl font-extrabold text-teal-400 mb-4 text-center tracking-wide">
    {planFromRoute?.name || fixedPlanName}
  </h3>

  <div className="space-y-3 text-slate-200">
    <p className="flex justify-between border-b border-slate-700 pb-2">
      <span className="font-semibold text-slate-300">المبلغ:</span>
      <span className="font-mono">${(planFromRoute?.amount || fixedAmount)?.toFixed(2)}</span>
    </p>

    <p className="flex justify-between border-b border-slate-700 pb-2">
      <span className="font-semibold text-slate-300">رصيد الفلكس:</span>
      <span>{planFromRoute?.credits || "غير متوفر"}</span>
    </p>

    {planFromRoute?.bonus && (
      <p className="flex justify-between border-b border-slate-700 pb-2">
        <span className="font-semibold text-slate-300">مكافأة:</span>
        <span className="text-teal-400 font-semibold">{planFromRoute.bonus}</span>
      </p>
    )}
  </div>
</div>
              ) : (
                <div>
                  <label
                    htmlFor="amount"
  className="block mb-1 text-sm font-medium text-slate-300 select-none"

                  >
                    المبلغ بالدولار
                  </label>
                  <input
                    id="amount"
                    type="number"
                    min={minDollarAmount}
                    step="0.01"
className="w-full rounded-md px-4 py-3 bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="أدخل المبلغ بالدولار"
                    required
                    disabled={!allowAmountEdit}
                    autoComplete="off"
                  />
                </div>
              )}

              {error && (
                <p className="text-red-400 font-semibold text-center">{error}</p>
              )}

   <button
  type="submit"
  disabled={isProcessing}
  className="w-full bg-teal-600 hover:bg-teal-700 transition-all text-white font-bold py-3 rounded-md disabled:opacity-60"
>
  {isProcessing ? "جارٍ التحضير..." : "اشترِ الآن"}
</button>

            </form>
          </CSSTransition>


<CSSTransition
 in={canShowBill}
  timeout={600}
  classNames="fade-height"
  unmountOnExit
>
            <div className="space-y-8 text-center text-purple-100 select-none flex flex-col items-center">
<div className="space-y-8 text-center text-slate-100 select-none flex flex-col w-full max-w-md items-center">
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg w-full max-w-md">
    <h3 className="text-xl font-semibold mb-5 text-teal-400 tracking-wide text-center">
      فاتورة الدفع
    </h3>

    <div className="text-left space-y-4 text-sm">
      {/* Server ID */}
      <div className="flex justify-between border-b border-slate-600 pb-2">
        <span className="text-slate-300 font-medium">معرف السيرفر</span>
        <span className="text-slate-200 font-mono">{serverId}</span>
      </div>

      {/* Plan details */}
      {(planFromRoute || fixedPlanName) && (
        <>
          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="text-slate-300 font-medium">الخطة</span>
            <span>{planFromRoute?.name || fixedPlanName}</span>
          </div>

          <div className="flex justify-between border-b border-slate-600 pb-2">
            <span className="text-slate-300 font-medium">رصيد الفلكس</span>
            <span>{planFromRoute?.credits || "-"}</span>
          </div>

 
            <div className="flex justify-between border-b border-slate-600 pb-2">
              <span className="text-slate-300 font-medium">مكافأة</span>
              <span>{planFromRoute ? planFromRoute.bonus : 0}</span>
            </div>
          
        </>
      )}

      {/* Custom amount - calculate flux */}
      {!planFromRoute && !fixedPlanName && (
        <div className="flex justify-between border-b border-slate-600 pb-2">
          <span className="text-slate-300 font-medium">فلكس المتوقع</span>
          <span className="text-amber-400 font-semibold">
            {parseFloat(amount) > 0 ? `${(parseFloat(amount) * 3500).toLocaleString()} فلكس` : "-"}
          </span>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between pt-3 text-base font-bold text-teal-400 border-t border-slate-600">
        <span>المبلغ الإجمالي</span>
        <span>${parseFloat(amount).toFixed(2)}</span>
      </div>
    </div>
  </div>
</div>


        <button
  onClick={handleEdit}
  className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-2 w-full max-w-md  rounded-md"
>
  تعديل البيانات
</button>


              <div
                ref={paypalRef}
                className="mt-4 inline-block w-full max-w-md"
                style={{ minHeight: "75px" }}
            
              />
            </div>
          </CSSTransition>
          </>
)}

{paymentSuccess && (
  <div className="flex flex-col items-center justify-center space-y-6 text-center text-slate-200">
    <svg className="w-20 h-20 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <h2 className="text-2xl font-bold text-green-400">تم الدفع بنجاح</h2>
    <p className="text-sm">تمت العملية بنجاح وسيتم تفعيل رصيدك قريبًا.</p>
    <pre className="bg-slate-800 text-slate-400 text-xs p-3 rounded-lg w-full max-w-sm overflow-auto">
      معرف العملية: {paymentDetails?.id || "غير متوفر"}
    </pre>
    <a href="/" className="text-teal-400 underline hover:text-teal-300 transition">العودة للرئيسية</a>
  </div>
)}

{isCrediting && (
  <div className="flex flex-col items-center justify-center space-y-6 text-center text-slate-200">
    <svg className="w-16 h-16 animate-spin text-teal-400" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
    <h2 className="text-xl font-bold">جاري إضافة الرصيد...</h2>
    <p className="text-sm">يرجى الانتظار حتى يتم التأكيد من الخادم</p>
  </div>
)}


{paymentFailure && (
  <div className="flex flex-col items-center justify-center space-y-6 text-center text-slate-200">
    <svg className="w-20 h-20 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <h2 className="text-2xl font-bold text-red-400">فشلت عملية الدفع</h2>
    <p className="text-sm">حدث خطأ أثناء محاولة الدفع. الرجاء المحاولة مرة أخرى أو التواصل معنا.</p>
    <button
      onClick={() => {
        setPaymentFailure(false);
        setCanShowForm(true);
      }}
      className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-2 px-5 rounded-md"
    >
      إعادة المحاولة
    </button>
  </div>
)}

{paymentOnlySuccess && (
  <div className="flex flex-col items-center justify-center space-y-6 text-center text-slate-200">
    <svg className="w-20 h-20 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
    </svg>
    <h2 className="text-2xl font-bold text-yellow-400">تم الدفع بنجاح</h2>
    <p className="text-sm max-w-md">
      تمت عملية الدفع ولكن حدث خطأ أثناء إضافة الفلكس إلى حساب السيرفر. الرجاء التواصل مع الدعم الفني ومشاركة معرف العملية.
    </p>
    <pre className="bg-slate-800 text-slate-400 text-xs p-3 rounded-lg w-full max-w-sm overflow-auto">
      معرف العملية: {paymentDetails?.id || "غير متوفر"}
    </pre>
    <a href="/" className="text-teal-400 underline hover:text-teal-300 transition">العودة للرئيسية</a>
  </div>
)}


        </div>
      </div>
    </>
  );
};

export default PaymentForm;
