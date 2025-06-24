import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom'; // or your routing lib


const Subscription: React.FC = () => {
    const navigate = useNavigate();

const plans = {
  basic: {
    name: "الباقة الأساسية",
    price: 2.99,
    credits: "10,500",
    bonus: "2,500",
    highlight: false,
  },
  standard: {
    name: "الباقة القياسية",
    price: 3.99,
    credits: "14,000",
    bonus: "3,000",
    highlight: false,
  },
  epic: {
    name: "الباقة الملحمية",
    price: 5.99,
    credits: "21,000",
    bonus: "4,000",
    highlight: false,
  },
  royal: {
    name: "الباقة الملكية",
    price: 9.99,
    credits: "35,000",
    bonus: "7,500",
    highlight: true,
  },
};


  // Handle when user clicks a plan card
const handleSelectPack = (packKey: string) => {
  navigate(`/pay?plan=${packKey}`);
};

    const handleFlexiblePurchase = () => {
    navigate("/pay", {
      state: {
        planFromRoute: {
          name: "فلكس مخصص",
          amount: 0,
          credits: "حسب المبلغ المدفوع",
          bonus: undefined,
        },
        fixedAmount: undefined,
        fixedPlanName: undefined,
        allowAmountEdit: true,
      },
    });
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-16 px-4 sm:px-6 lg:px-0" dir="rtl">

        {/* Freemium Highlight Section */}
        <section className="relative overflow-hidden rounded-xl border border-teal-600 bg-teal-900/10 backdrop-blur-sm p-8 shadow-md">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700/40 via-teal-500/20 to-teal-700/40 animate-pulse rounded-xl"></div>
          <h2 className="relative text-3xl font-extrabold text-teal-300 text-center mb-3">
            التجربة المجانية
          </h2>
          <div className="relative flex justify-center space-x-2 text-center mb-6">
            <span className="text-5xl font-extrabold text-teal-400">5000</span>
            <span className="text-2xl font-semibold text-teal-200 self-end mb-1">فلكس مجاني</span>
          </div>
          <p className="relative max-w-xl mx-auto text-center text-teal-100 text-lg leading-relaxed">
            نرحب بكل سيرفر جديد مع رصيد مجاني رائع للبدء في تجربة قوة Majestic Flux
          </p>
        </section>

    {/* Saving Packs Section */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
{Object.entries(plans).map(([key, pack]) => (
        <div
          key={key}
          role="button"
          tabIndex={0}
          onClick={() => handleSelectPack(key)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSelectPack(pack.name);
          }}
          className={`relative flex flex-col justify-between rounded-2xl p-6 border transition-all duration-300 text-center cursor-pointer shadow-md overflow-hidden ${
            pack.highlight
              ? "bg-gradient-to-br from-purple-900 to-purple-700 border-yellow-400 scale-105 text-yellow-200 shadow-2xl"
              : "bg-purple-900/10 border-purple-500/10 hover:border-purple-500/30 text-purple-200"
          }`}
          style={{ minHeight: "250px" }}
          aria-label={`${pack.name} بسعر ${pack.price} دولار مع ${pack.credits} فلكس و${pack.bonus} مكافأة`}
        >
          {/* Card Content */}
          <h3 className="text-xl font-bold mb-2 mt-5">{pack.name}</h3>
          <p className="text-3xl font-extrabold mb-1">${pack.price}</p>
          <p className="text-lg font-semibold mb-2">{pack.credits} فلكس</p>
          {pack.bonus !== "0" && (
            <div className="mb-4">
              <span className="inline-block bg-purple-700 text-white text-sm px-3 py-1 rounded-full">
                🎁 {pack.bonus} إضافي
              </span>
            </div>
          )}
        </div>
      ))}
    </div>

        {/* Flexible Custom Flux Purchase Section */}
        <section className="rounded-xl border border-slate-700 bg-slate-900/40 backdrop-blur-md p-10 shadow-lg text-center">
          <h2 className="text-3xl font-extrabold text-slate-200 mb-4">
            شراء فلكس مخصص
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            يمكنك تخطي الحزم وشراء عدد الفلكس الذي تحتاجه بالضبط. السعر الحالي:
            <br />
            <span className="font-semibold text-teal-400">
              3,500 فلكس = 1 دولار
            </span>
          </p>
          <div className="flex justify-center">
            <Button primary onClick={handleFlexiblePurchase}>
              اشترِ الآن
            </Button>
          </div>
        </section>


        {/* Flux Consumption Rules Section */}
        <section
          className="rounded-xl border border-slate-700 bg-slate-900/30 backdrop-blur-md p-8 shadow-md text-right"
          dir="rtl"
          aria-label="نظام استهلاك الفلكس"
        >
          <h2 className="text-2xl font-extrabold text-slate-300 mb-5">نظام استهلاك الفلكس</h2>
          <ul className="space-y-4 text-slate-400 text-lg list-disc pr-6">
            <li>كل تفاعل مع البوت يستهلك على الأقل 1 فلكس</li>
            <li>الأوامر المعقدة قد تستهلك فلكس أكثر حسب الموارد المطلوبة</li>
            <li>يمكنك متابعة رصيد الفلكس واستهلاكه مباشرة من داخل البوت</li>
          </ul>
        </section>

        {/* Payment System Policy */}
        <section
          className="rounded-xl border border-red-600 bg-red-900/20 backdrop-blur-sm p-6 shadow-md text-right space-y-4 text-red-200 text-sm"
          dir="rtl"
          aria-label="سياسة الدفع الرسمية"
        >
          <h2 className="text-xl font-bold text-red-400">سياسة الدفع الرسمية</h2>
          <p>
            نُحذّر بشدة من محاولة الدفع أو الشراء خارج القنوات الرسمية. جميع عمليات الدفع يجب أن تتم فقط عبر{' '}
            <span className="font-semibold text-white">الدعم الفني الرسمي داخل سيرفر البوت</span>.
          </p>
          <p>
            للدخول إلى الدعم الفني الرسمي، استخدم هذا الرابط:{' '}
            <a
              href="https://discord.gg/weg5eGG5cr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              https://discord.gg/weg5eGG5cr
            </a>
          </p>
          <p>بعد الدخول، افتح تذكرة دعم واختر نوع الخدمة التي ترغب بها. سيوجهك الفريق خطوة بخطوة لاتمام الدفع بأمان.</p>
          <p className="font-semibold text-yellow-300">⚠️ لا نتحمل مسؤولية أي مبالغ يتم دفعها خارج هذا النظام الرسمي.</p>
        </section>

        {/* Purchase Policies Section */}
        <section
          className="rounded-xl border border-slate-700 bg-slate-900/20 backdrop-blur-sm p-6 shadow-md text-right space-y-4 text-sm text-slate-400"
          dir="rtl"
          aria-label="سياسات الشراء"
        >
          <h2 className="text-xl font-bold text-slate-300">سياسات الشراء</h2>
          <ul className="list-disc pr-5 space-y-2 leading-relaxed">
            <li>جميع المشتريات نهائية، ولا يمكن استرجاع أو استرداد الرصيد بعد إتمام الدفع.</li>
            <li>الرصيد (فلكس) صالح للاستخدام فقط داخل نظام Majestic Flux ولا يمكن تحويله لخدمات خارجية.</li>
            <li>أي محاولة للغش، أو الاستغلال غير المشروع، قد تؤدي إلى إيقاف الحساب أو إلغاء الرصيد بدون إشعار مسبق.</li>
            <li>يُمنع مشاركة الرصيد بين السيرفرات المختلفة، ويعتبر كل سيرفر كيانًا مستقلاً.</li>
            <li>الأسعار قد تتغير حسب السياسات التشغيلية أو العروض المؤقتة، وسيتم الإعلان عنها داخل البوت أو السيرفر الرسمي.</li>
          </ul>
        </section>

        {/* Branding Note */}
        <footer className="text-center text-slate-400 text-sm mb-8">
          <p>
            نسخ البوت المعدلة أو ذات العلامة التجارية الخاصة متوفرة مقابل{' '}
            <span className="font-semibold text-teal-400">$2.99</span> شهريًا.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default Subscription;
