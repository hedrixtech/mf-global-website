import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PartnershipPlans: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const plans = [
    {
      title: "Starter Partnership",
      price: "$49.99",
      period: "٤ أشهر",
      subtitle: "أولوية تنفيذ عادية",
      features: [
        "حتى ٣ طلبات ميزات مخصصة",
        "حتى ٦ تعديلات وصيانة",
        "أولوية تنفيذ عادية",
        "نسخة خاصة محدودة",
        "دعم أساسي ومتابعة تذاكر"
      ],
      linkText: "ابدأ خطة Starter"
    },
    {
      title: "Growth Partnership",
      price: "$89.99",
      period: "٨ أشهر",
      subtitle: "أولوية دعم وتحديثات متوسطة",
      features: [
        "حتى ٧ طلبات ميزات مخصصة",
        "حتى ١٥ تعديل وصيانة",
        "أولوية تنفيذ متوسطة",
        "نسخة خاصة كاملة بالهوية",
        "خادم استضافة مخصص ومستقل",
        "دعم مباشر وسريع"
      ],
      linkText: "ابدأ خطة Growth",
      highlight: true
    },
    {
      title: "Elite Partnership",
      price: "$129.99",
      period: "١٢ شهرًا",
      subtitle: "أولوية برمجية مطلقة وقصوى",
      features: [
        "طلبات ميزات غير محدودة (وفق التقييم الفني)",
        "تعديلات وصيانة غير محدودة",
        "أولوية تنفيذ عالية وقصوى",
        "خادم تشغيل عالي الأداء",
        "مشاركة في خارطة تطوير المنصة (Roadmap)",
        "دعم فني وتطويري مباشر متكامل"
      ],
      linkText: "تفعيل خطة Elite"
    }
  ];

  const addons = {
    features: [
      { name: "ميزة جديدة مخصصة", price: "$4.99" },
      { name: "تعديل برمي متوسط", price: "$2.99" },
      { name: "تحسين أو تعديل بسيط", price: "$1.99" }
    ],
    systems: [
      { name: "نظام صغير إضافي", price: "$9.99" },
      { name: "نظام متوسط إضافي", price: "$14.99" },
      { name: "نظام كبير إضافي", price: "$24.99" }
    ],
    integrations: [
      { name: "ربط خدمة خارجية / API", price: "$4.99 - $9.99" }
    ],
    exclusivity: [
      { name: "تمديد حصرية ميزة لمدة 7 أيام", price: "$2.99" },
      { name: "تمديد حصرية ميزة لمدة 14 يومًا", price: "$4.99" }
    ]
  };

  const faqItems = [
    {
      q: 'هل يمكنني الترقية من باقة إلى أخرى؟',
      a: 'نعم، يمكنك الترقية إلى باقة أعلى في أي وقت. سيتم احتساب المدة المتبقية من باقتك الحالية وتعديل الرسوم والحدود الفنية فوراً.',
    },
    {
      q: 'ما المقصود بـ "حصرية الميزات لمدة 14 يومًا"؟',
      a: 'أي ميزة مخصصة يتم تطويرها خصيصًا لخادمك تظل حصرية لنسختك الخاصة لمدة 14 يومًا من تاريخ إطلاقها. بعد انقضاء هذه المدة، يحق لفريق التطوير إتاحة الميزة للنسخة العامة أو خوادم الشركاء الآخرين.',
    },
    {
      q: 'كيف يتم احتساب دورة تطوير الميزات؟',
      a: 'تستغرق دورة التطوير للميزات أو التعديلات الكبرى حدًا أدنى قدره 14 يوم عمل لضمان التصميم البرمجي السليم، الفحص الفني واختبارات الأمان قبل إطلاقها على نسختك.',
    },
    {
      q: 'هل الأسعار تشمل تكاليف الاستضافة؟',
      a: 'نعم، نوفر لكل شريك خادم تشغيل مستقل مخصص لنسخته الخاصة، وتتحمل Hedrix Technology تكاليف الاستضافة والصيانة الأساسية للخادم طوال فترة الشراكة النشطة.',
    },
    {
      q: 'كيف يمكنني البدء بالاشتراك؟',
      a: 'يرجى الدخول إلى سيرفر Discord الرسمي الخاص بنا وفتح تذكرة شراكة جديدة. سيتواصل معك مهندس مخصص لمناقشة المتطلبات وتفعيل خطة الشراكة الخاصة بك.',
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12" dir="rtl">
        
        {/* Apple-style minimalist header */}
        <div className="border-b border-slate-800 pb-10 mb-16 text-right">
          <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2">خطط الشراكة والأسعار</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            باقات الشراكة البرمجية
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            اختر الباقة المناسبة لمجتمعك. جميع الخطط تتضمن نسخة خاصة مستضافة مستقلة ومهندساً مخصصاً وفترة حصرية لتطوير ميزاتك.
          </p>
        </div>

        {/* Plans Grid - Clean Border Layout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`border rounded-2xl p-6 flex flex-col justify-between transition-colors duration-300 ${
                plan.highlight 
                  ? 'border-purple-500/40 bg-purple-950/5' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-base font-bold text-white">{plan.title}</h3>
                  {plan.highlight && (
                    <span className="text-[10px] font-black text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded-full">الأكثر طلباً</span>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-xs text-slate-500 mr-1">/ {plan.period}</span>
                  <p className="text-[11px] text-slate-400 mt-1">{plan.subtitle}</p>
                </div>

                <div className="h-px bg-slate-800 my-4" />

                <ul className="space-y-2.5 text-xs text-slate-300">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-500 select-none">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://discord.gg/weg5eGG5cr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-2.5 rounded-xl text-xs font-bold transition-colors ${
                    plan.highlight
                      ? 'bg-purple-600 hover:bg-purple-500 text-white'
                      : 'border border-slate-800 hover:bg-slate-900 text-slate-200'
                  }`}
                >
                  {plan.linkText}
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Add-ons Section - Minimal Table style */}
        <section className="border-t border-slate-800 pt-16 mb-20">
          <div className="text-right mb-8">
            <h3 className="text-xl font-bold text-white mb-2">إضافات وتحديثات اختيارية (Add-ons)</h3>
            <p className="text-xs text-slate-400">باقات ترقية ثابتة لتوسيع إمكانيات خادمك وتمديد فترات الحصرية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800">Feature Add-ons</h4>
                <ul className="space-y-2">
                  {addons.features.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-white font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800">Integration Add-ons</h4>
                <ul className="space-y-2">
                  {addons.integrations.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-white font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800">System Add-ons</h4>
                <ul className="space-y-2">
                  {addons.systems.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-white font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800">Exclusivity Extensions</h4>
                <ul className="space-y-2">
                  {addons.exclusivity.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-white font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Collapsible FAQ Section */}
        <section className="border-t border-slate-800 pt-16 mb-16">
          <h3 className="text-xl font-bold text-white text-right mb-8">الأسئلة الشائعة حول الشراكات</h3>
          <div className="space-y-3 max-w-2xl">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq[idx] || false;
              return (
                <div
                  key={idx}
                  className="border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 flex justify-between items-center text-right text-xs font-bold text-white hover:bg-slate-900 transition-colors focus:outline-none gap-4"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-800 bg-slate-900/5">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer Policy Link */}
        <div className="text-center border-t border-slate-800 pt-10 text-xs">
          <Link
            to="/partners/policy"
            className="text-slate-400 hover:text-white transition-colors border-b border-slate-700 hover:border-white pb-0.5 font-semibold"
          >
            اطّلع على وثيقة سياسة الشراكات الرسمية للحصول على كل التفاصيل والالتزامات
          </Link>
        </div>

      </div>
    </Layout>
  );
};

export default PartnershipPlans;
