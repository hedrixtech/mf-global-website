import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Subscription: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Freemium Highlight Section */}
        <div className="relative overflow-hidden">
          <div className="backdrop-blur-sm bg-green-900/30 p-8 rounded-xl border border-green-500/30 shadow-lg relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-green-400/10 to-green-600/20 animate-pulse"></div>
            <h2 className="text-3xl font-bold text-center text-green-200 mb-4">التجربة المجانية</h2>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-green-300">5000</span>
              <span className="text-xl text-green-200 mr-2">فلكس مجاني</span>
            </div>
            <p className="text-green-100 text-center text-lg">
              نرحب بكل سيرفر جديد مع رصيد مجاني رائع للبدء في تجربة قوة Majestic Flux
            </p>
          </div>
        </div>

{/* Saving Packs Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
  {[
    {
      name: 'الباقة الأساسية',
      price: '2.99',
      credits: '10,500',
      bonus: '2,500',
      highlight: false,
    },
    {
      name: 'الباقة القياسية',
      price: '3.99',
      credits: '14,000',
      bonus: '3,000',
      highlight: false,
    },
    {
      name: 'الباقة الملحمية',
      price: '5.99',
      credits: '21,000',
      bonus: '4,000',
      highlight: false,
    },
    {
      name: 'الباقة الملكية',
      price: '9.99',
      credits: '35,000',
      bonus: '7,500',
      highlight: true,
    },
  ].map((pack, index) => (
    <div
      key={index}
      className={`flex flex-col justify-between rounded-2xl p-6 border transition-all duration-300 text-center shadow-md relative overflow-hidden ${
        pack.highlight
          ? 'bg-gradient-to-br from-purple-900 to-purple-700 border-yellow-400 scale-105 text-yellow-200 shadow-2xl'
          : 'bg-purple-900/10 border-purple-500/10 hover:border-purple-500/30 text-purple-200'
      }`}
      style={{ minHeight: pack.highlight ? '300px' : '250px' }}
    >
      {pack.highlight && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-purple-900 text-sm font-bold px-3 py-1 rounded-full">
          الأفضل قيمة
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 mt-5">{pack.name}</h3>
      <p className="text-3xl font-extrabold mb-1">${pack.price}</p>
      <p className="text-lg font-semibold mb-2">{pack.credits} فلكس</p>

      {pack.bonus !== '0' && (
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
<div className="backdrop-blur-sm bg-purple-900/20 rounded-xl p-8 border border-purple-500/20">
  <h2 className="text-2xl font-bold text-purple-200 mb-4 text-center">شراء فلكس مخصص</h2>
  <p className="text-lg text-purple-100 text-center mb-6">
    يمكنك تخطي الحزم وشراء عدد الفلكس الذي تحتاجه بالضبط. السعر الحالي:
    <br />
    <span className="font-semibold">3,500 فلكس = 1 دولار</span>
  </p>
  <div className="flex justify-center">
    <Button primary>اشترِ الآن</Button>
  </div>
</div>

        {/* Flux Consumption Rules Section */}
        <div className="backdrop-blur-sm bg-purple-900/20 rounded-xl p-6 border border-purple-500/20" dir='rtl'>
          <h2 className="text-xl font-bold text-purple-200 mb-4">نظام استهلاك الفلكس</h2>
          <ul className="space-y-3 text-purple-100 text-right">
            <li className="flex items-center justify-start" dir='rtl'>
              <span className="w-2 h-2 bg-purple-400 rounded-full ml-2"></span>
              كل تفاعل مع البوت يستهلك على الأقل 1 فلكس
            </li>
            <li className="flex items-center justify-start">
              <span className="w-2 h-2 bg-purple-400 rounded-full ml-2"></span>
              الأوامر المعقدة قد تستهلك فلكس أكثر حسب الموارد المطلوبة
            </li>
            <li className="flex items-center justify-start">
              <span className="w-2 h-2 bg-purple-400 rounded-full ml-2"></span>
              يمكنك متابعة رصيد الفلكس واستهلاكه مباشرة من داخل البوت
            </li>
          </ul>
        </div>

        {/* Payment System Policy */}
       {/* Payment Policy Warning and Instructions */}
<div className="mt-12 p-6 rounded-xl border border-red-500/30 bg-red-900/20 backdrop-blur-sm text-red-100 space-y-4 text-sm text-right" dir="rtl">
  <h2 className="text-lg font-bold text-red-300">سياسة الدفع الرسمية</h2>
  <p>
    نُحذّر بشدة من محاولة الدفع أو الشراء خارج القنوات الرسمية. جميع عمليات الدفع يجب أن تتم فقط عبر 
    <span className="font-semibold text-white"> الدعم الفني الرسمي داخل سيرفر البوت</span>.
  </p>
  <p>
    للدخول إلى الدعم الفني الرسمي، استخدم هذا الرابط:
    <a
      href="https://discord.gg/weg5eGG5cr"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-300 underline ml-1"
    >
      https://discord.gg/weg5eGG5cr
    </a>
  </p>
  <p>
    بعد الدخول، افتح تذكرة دعم واختر نوع الخدمة التي ترغب بها. سيوجهك الفريق خطوة بخطوة لاتمام الدفع بأمان.
  </p>
  <p className="text-yellow-200 font-semibold">
    ⚠️ لا نتحمل مسؤولية أي مبالغ يتم دفعها خارج هذا النظام الرسمي.
  </p>
</div>


{/* Purchase Policies Section */}
<div className="mt-12 p-6 rounded-xl border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm text-purple-100 space-y-4 text-sm text-right" dir="rtl">
  <h2 className="text-lg font-bold text-purple-200">سياسات الشراء</h2>
  <ul className="list-disc pr-5 space-y-2">
    <li>
      جميع المشتريات نهائية، ولا يمكن استرجاع أو استرداد الرصيد بعد إتمام الدفع.
    </li>
    <li>
      الرصيد (فلكس) صالح للاستخدام فقط داخل نظام Majestic Flux ولا يمكن تحويله لخدمات خارجية.
    </li>
    <li>
      أي محاولة للغش، أو الاستغلال غير المشروع، قد تؤدي إلى إيقاف الحساب أو إلغاء الرصيد بدون إشعار مسبق.
    </li>
    <li>
      يُمنع مشاركة الرصيد بين السيرفرات المختلفة، ويعتبر كل سيرفر كيانًا مستقلاً.
    </li>
    <li>
      الأسعار قد تتغير حسب السياسات التشغيلية أو العروض المؤقتة، وسيتم الإعلان عنها داخل البوت أو السيرفر الرسمي.
    </li>
  </ul>
</div>



        {/* Branding Note */}
        <div className="text-center text-purple-300 text-sm">
          <p>
            نسخ البوت المعدلة أو ذات العلامة التجارية الخاصة متوفرة مقابل <span className="font-semibold">$2.99</span> شهريًا.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Subscription;
