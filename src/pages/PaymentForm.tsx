import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ShieldCheck, ArrowRight, Loader2, CheckCircle2, AlertOctagon, RefreshCw } from 'lucide-react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  onPaymentSuccess: (details: unknown) => void;
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
  const paypalRef = useRef<HTMLDivElement>(null);
  
  // BUG FIX: Set default to false instead of true
  const [paymentOnlySuccess, setPaymentOnlySuccess] = useState(false);
  const [isCrediting, setIsCrediting] = useState(false);
  const [canShowForm, setCanShowForm] = useState(true); // Controls form entry
  const [canShowBill, setCanShowBill] = useState(false); // Controls bill entry
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFailure, setPaymentFailure] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<{ id: string } | null>(null);

  const minDollarAmount = 1;

  // Load plan data from route if available
  useEffect(() => {
    if (planFromRoute) {
      setAmount(planFromRoute.amount.toFixed(2));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            setIsProcessing(false);

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
            setIsProcessing(false);
            setPaymentFailure(true);
          }
        },

        onError: () => {
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
      setCanShowBill(true);
      setShowPayPal(true);
    }, 600); // wait for form animation to finish
  };

  const handleEdit = () => {
    setCanShowBill(false); // hide bill
    setTimeout(() => {
      setCanShowForm(true); // show form after bill exits
      setShowPayPal(false);
      setError("");
    }, 600); // match animation timeout
  };

  return (
    <>
      <style>{`
        /* Animations for CSSTransition */
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
          transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
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
          transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <div className="fixed inset-0 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 z-50">
        {/* Glow Effects in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-lg w-full bg-slate-900/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-500/25 p-6 md:p-8 min-h-[460px] flex flex-col justify-between overflow-hidden" dir="rtl">
          
          {/* Header Secure Badge */}
          <div className="flex items-center space-x-2 space-x-reverse mb-6 justify-center select-none bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20 w-fit mx-auto">
            <ShieldCheck className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-bold text-xs">اتصال آمن ومشفر بالكامل</span>
          </div>

          {!paymentSuccess && !paymentFailure && !paymentOnlySuccess && !isCrediting && (
            <>
              {/* Form Input Phase */}
              <CSSTransition
                in={canShowForm}
                timeout={600}
                classNames="fade-height"
                unmountOnExit
              >
                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Server ID */}
                    <div className="space-y-1">
                      <label htmlFor="serverId" className="block text-sm font-bold text-purple-200">
                        معرف السيرفر (Discord Server ID)
                      </label>
                      <input
                        id="serverId"
                        type="text"
                        className="w-full rounded-2xl px-4 py-3.5 bg-purple-950/40 text-white placeholder-purple-300/40 border border-white/5 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all outline-none text-sm font-medium"
                        value={serverId}
                        onChange={(e) => setServerId(e.target.value)}
                        placeholder="مثال: 123456789012345678"
                        required
                        autoComplete="off"
                        spellCheck={false}
                      />
                    </div>

                    {/* Amount Input or Fixed Plan */}
                    {planFromRoute || fixedPlanName ? (
                      <div className="bg-purple-950/30 rounded-2xl p-5 border border-purple-500/30 select-none space-y-3">
                        <h3 className="text-lg font-black text-purple-300 text-center tracking-wide border-b border-white/5 pb-2">
                          {planFromRoute?.name || fixedPlanName}
                        </h3>

                        <div className="space-y-2.5 text-sm text-purple-200">
                          <div className="flex justify-between">
                            <span className="text-purple-400 font-semibold">المبلغ:</span>
                            <span className="font-bold text-white">${(planFromRoute?.amount || fixedAmount)?.toFixed(2)}</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-purple-400 font-semibold">رصيد الفلكس:</span>
                            <span className="font-bold text-white">{planFromRoute?.credits || "غير متوفر"}</span>
                          </div>

                          {planFromRoute?.bonus && (
                            <div className="flex justify-between">
                              <span className="text-purple-400 font-semibold">المكافأة المضافة:</span>
                              <span className="text-emerald-400 font-bold">🎁 {planFromRoute.bonus}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <label htmlFor="amount" className="block text-sm font-bold text-purple-200">
                          المبلغ المطلوب شحنه بالدولار ($)
                        </label>
                        <input
                          id="amount"
                          type="number"
                          min={minDollarAmount}
                          step="0.01"
                          className="w-full rounded-2xl px-4 py-3.5 bg-purple-950/40 text-white placeholder-purple-300/40 border border-white/5 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all outline-none text-sm font-medium"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="أدخل القيمة المطلوبة بالدولار"
                          required
                          disabled={!allowAmountEdit}
                          autoComplete="off"
                        />
                      </div>
                    )}
                  </div>

                  {error && (
                    <p className="text-red-400 font-bold text-center text-sm bg-red-950/20 border border-red-500/20 py-2 rounded-xl">
                      ⚠️ {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-purple-500/10 active:scale-95 disabled:opacity-55 flex items-center justify-center gap-2 mt-4"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>جاري إعداد الدفعة...</span>
                      </>
                    ) : (
                      <>
                        <span>متابعة الفاتورة</span>
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </>
                    )}
                  </button>
                </form>
              </CSSTransition>

              {/* Bill Invoice Phase */}
              <CSSTransition
                in={canShowBill}
                timeout={600}
                classNames="fade-height"
                unmountOnExit
              >
                <div className="space-y-6 flex-grow flex flex-col justify-between">
                  <div className="bg-purple-950/30 p-5 rounded-2xl border border-white/5 shadow-inner space-y-4">
                    <h3 className="text-lg font-black text-purple-300 text-center border-b border-white/5 pb-2">
                      مراجعة فاتورة الشراء
                    </h3>

                    <div className="space-y-3 text-sm text-purple-200">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-purple-400">معرف السيرفر</span>
                        <span className="font-mono text-white select-all">{serverId}</span>
                      </div>

                      {(planFromRoute || fixedPlanName) && (
                        <>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-purple-400">الباقة المختارة</span>
                            <span className="font-bold text-white">{planFromRoute?.name || fixedPlanName}</span>
                          </div>

                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-purple-400">رصيد الفلكس</span>
                            <span className="font-bold text-white">{planFromRoute?.credits || "-"}</span>
                          </div>

                          {planFromRoute?.bonus && (
                            <div className="flex justify-between border-b border-white/5 pb-2">
                              <span className="text-purple-400">الهدية الإضافية</span>
                              <span className="font-bold text-emerald-400">{planFromRoute.bonus}</span>
                            </div>
                          )}
                        </>
                      )}

                      {!planFromRoute && !fixedPlanName && (
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-purple-400">الفلكس المتوقع</span>
                          <span className="text-amber-400 font-bold">
                            {parseFloat(amount) > 0 ? `${(parseFloat(amount) * 3500).toLocaleString()} فلكس` : "-"}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between pt-2 text-base font-extrabold text-teal-400">
                        <span>إجمالي المبلغ المطلوب</span>
                        <span>${parseFloat(amount).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleEdit}
                      className="w-full bg-white/5 hover:bg-white/10 text-purple-200 font-semibold py-2.5 rounded-xl border border-white/15 transition-colors text-sm"
                    >
                      تعديل البيانات السابقة
                    </button>

                    {/* PayPal Button Container */}
                    <div
                      ref={paypalRef}
                      className="mt-2 w-full"
                      style={{ minHeight: "75px" }}
                    />
                  </div>
                </div>
              </CSSTransition>
            </>
          )}

          {/* Processing and Crediting States */}
          {isCrediting && (
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-12 flex-grow select-none">
              <Loader2 className="w-16 h-16 animate-spin text-purple-400" />
              <h2 className="text-xl font-bold text-white">جاري إضافة الرصيد لحسابك...</h2>
              <p className="text-purple-300/70 text-sm max-w-xs leading-relaxed">
                يرجى عدم إغلاق الصفحة أو تحديثها حتى يتم تأكيد العملية وتسجيل الرصيد في السيرفر بنجاح.
              </p>
            </div>
          )}

          {/* Success screen */}
          {paymentSuccess && (
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-8 flex-grow select-none">
              <CheckCircle2 className="w-20 h-20 text-emerald-400" />
              <h2 className="text-2xl font-black text-emerald-400">تم الشحن بنجاح!</h2>
              <p className="text-purple-200/80 text-sm max-w-sm leading-relaxed">
                تم استلام قيمة العملية وتمت إضافة الرصيد إلى خادم الديسكورد الخاص بك بنجاح. يمكنك استخدامه فوراً.
              </p>
              
              <div className="bg-purple-950/40 p-4 rounded-2xl border border-white/5 w-full max-w-sm text-right space-y-2">
                <p className="text-xs text-purple-300">
                  معرف العملية المالي:
                </p>
                <code className="text-xs text-purple-200 font-mono select-all block bg-black/20 p-2 rounded-lg border border-white/5 text-center">
                  {paymentDetails?.id || "غير متوفر"}
                </code>
              </div>

              <a href="/" className="text-purple-300 font-bold underline hover:text-white transition-colors text-sm pt-4">
                العودة للرئيسية
              </a>
            </div>
          )}

          {/* Failure screen */}
          {paymentFailure && (
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-8 flex-grow select-none">
              <AlertOctagon className="w-20 h-20 text-red-500 animate-bounce" />
              <h2 className="text-2xl font-black text-red-400">فشلت عملية الدفع</h2>
              <p className="text-purple-200/80 text-sm max-w-xs leading-relaxed">
                حدث خطأ أثناء إجراء المعاملة المالية عبر البوابة الإلكترونية. يرجى إعادة المحاولة أو التواصل مع الدعم.
              </p>
              
              <button
                onClick={() => {
                  setPaymentFailure(false);
                  setCanShowForm(true);
                }}
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2.5 px-6 rounded-2xl border border-purple-500/30 transition-colors text-sm active:scale-95"
              >
                إعادة المحاولة
              </button>
            </div>
          )}

          {/* Payment successful, but bot failed to credit server screen */}
          {paymentOnlySuccess && (
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-8 flex-grow select-none">
              <RefreshCw className="w-20 h-20 text-amber-400 animate-spin-slow" />
              <h2 className="text-2xl font-black text-amber-400">تم الدفع بنجاح</h2>
              <p className="text-purple-200/80 text-sm max-w-sm leading-relaxed">
                تم دفع المبلغ المالي بنجاح، ولكن خادم البوت واجه مشكلة أثناء محاولة إضافة الرصيد إلى سيرفرك في الوقت الحالي.
              </p>
              <p className="text-xs text-yellow-400 font-bold bg-yellow-950/20 border border-yellow-500/20 px-4 py-2 rounded-xl leading-relaxed">
                يرجى فتح تذكرة دعم فني في سيرفر الديسكورد الرسمي ومشاركة الكود التالي ليتم إضافة الرصيد لك يدوياً فوراً.
              </p>

              <div className="bg-purple-950/40 p-4 rounded-2xl border border-white/5 w-full max-w-sm text-right space-y-2">
                <p className="text-xs text-purple-300">كود العملية اليدوي:</p>
                <code className="text-xs text-purple-200 font-mono select-all block bg-black/20 p-2 rounded-lg border border-white/5 text-center">
                  {paymentDetails?.id || "غير متوفر"}
                </code>
              </div>

              <a href="/" className="text-purple-300 font-bold underline hover:text-white transition-colors text-sm pt-4">
                العودة للرئيسية
              </a>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default PaymentForm;
