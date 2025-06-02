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
            <h2 className="text-3xl font-bold text-center text-purple-200 mb-4">التجربة المجانية</h2>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-purple-300">150</span>
              <span className="text-xl text-purple-200 mr-2">فلكس مجاني</span>
            </div>
            <p className="text-purple-100 text-center text-lg">
              نرحب بكل سيرفر جديد مع رصيد مجاني رائع للبدء في تجربة قوة Majestic Flux
            </p>
          </div>
        </div>

        {/* Saving Packs Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
  {[
    {
      name: 'الباقة الأساسية',
      price: '0.99',
      credits: '500',
      bonus: '0',
      highlight: false,
    },
    {
      name: 'الباقة القياسية',
      price: '1.99',
      credits: '1,500',
      bonus: '500',
      highlight: false,
    },
    {
      name: 'الباقة الملحمية',
      price: '3.99',
      credits: '4,000',
      bonus: '1,500',
      highlight: false,
    },
    {
      name: 'الباقة الملكية',
      price: '9.99',
      credits: '12,000',
      bonus: '4,000',
      highlight: true,
    },
  ].map((pack, index) => (
    <div
      key={index}
      className={`flex flex-col justify-between rounded-xl p-6 border transition-all duration-300 text-center ${
        pack.highlight
          ? 'bg-purple-800 border-yellow-400 shadow-lg scale-105 text-yellow-300'
          : 'bg-purple-900/20 border-purple-500/20 hover:border-purple-500/40 text-purple-200'
      }`}
      style={{ minHeight: pack.highlight ? '320px' : '260px' }}
    >
      <h3 className="text-2xl font-bold mb-4">{pack.name}</h3>
      <p className="text-4xl font-extrabold mb-3">${pack.price}</p>
      <p className="text-xl mb-2">{pack.credits} فلكس</p>
      <p className="text-lg mb-6">+ {pack.bonus}</p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded w-full">
        اختر الباقة
      </button>
    </div>
  ))}
</div>


        {/* Flexible Custom Flux Purchase Section */}
        <div className="backdrop-blur-sm bg-purple-900/20 rounded-xl p-8 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-purple-200 mb-4 text-center">شراء فلكس مخصص</h2>
          <p className="text-lg text-purple-100 text-center mb-6">
            يمكنك تخطي الحزم وشراء عدد الفلكس الذي تحتاجه بالضبط. السعر ثابت:
            <br />
            <span className="font-semibold">1,000 فلكس = 1 دولار</span>
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

        {/* Branding and Special Versions Note */}
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
