import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ChevronDown, ChevronUp, CreditCard, ChevronRight, HelpCircle, Layers } from 'lucide-react';

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
        "حتى ٣ طلبات ميزات مخصصة ومستقلة",
        "حتى ٦ تعديلات وصيانة هيكلية",
        "نسخة خاصة فنية محدودة",
        "دعم فني أساسي ومتابعة تذاكر",
        "أولوية تنفيذ قياسية"
      ],
      linkText: "بدء خطة Starter"
    },
    {
      title: "Growth Partnership",
      price: "$89.99",
      period: "٨ أشهر",
      subtitle: "أولوية دعم وتحديثات متوسطة",
      features: [
        "حتى ٧ طلبات ميزات مخصصة ومستقلة",
        "حتى ١٥ تعديل وصيانة شاملة",
        "نسخة خاصة كاملة بالهوية والاسم",
        "خادم استضافة سحابي مخصص ومستقل",
        "دعم مباشر وسريع وقنوات اتصال مفضلة",
        "أولوية تنفيذ متوسطة"
      ],
      linkText: "بدء خطة Growth",
      highlight: true
    },
    {
      title: "Elite Partnership",
      price: "$129.99",
      period: "١٢ شهرًا",
      subtitle: "أولوية برمجية مطلقة وقصوى",
      features: [
        "طلبات ميزات وتعديلات غير محدودة (وفق التقييم الفني)",
        "تعديلات وصيانة غير محدودة للنسخة",
        "نسخة خاصة متكاملة ومستقلة تماماً",
        "خادم تشغيل سحابي عالي الأداء ومحمي",
        "مشاركة في خارطة تطوير المنصة (Roadmap)",
        "أولوية برمجية وتطويرية قصوى ومباشرة"
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
      a: 'نعم، يمكنك الترقية إلى باقة شراكة أعلى في أي وقت. سيتم احتساب المدة المتبقية من باقتك الحالية وتعديل الرسوم والحدود الفنية والميزات فوراً.',
    },
    {
      q: 'ما المقصود بـ "حصرية الميزات لمدة 14 يومًا"؟',
      a: 'أي ميزة برمجية مخصصة يتم تصميمها وتطويرها خصيصًا لخادمك تظل حصرية لنسختك الخاصة لمدة 14 يومًا من تاريخ إطلاقها الفعلي. بعد انقضاء هذه المدة، تمتلك الإدارة الحق الكامل في إتاحة الميزة للنسخة العامة أو خوادم الشركاء الآخرين.',
    },
    {
      q: 'كيف يتم احتساب دورة تطوير الميزات؟',
      a: 'تستغرق دورة التطوير للميزات أو التعديلات الكبرى حداً أدنى قدره 14 يوم عمل لضمان التصميم البرمجي السليم، الفحص الفني واختبارات الأمان قبل إطلاقها على نسختك.',
    },
    {
      q: 'هل الأسعار تشمل تكاليف الاستضافة والخوادم؟',
      a: 'نعم، نوفر لكل شريك خادم تشغيل مستقل مخصص لنسخته الخاصة، وتتحمل Hedrix Technology تكاليف الاستضافة والصيانة الأساسية للخادم طوال فترة الشراكة النشطة.',
    },
    {
      q: 'كيف يمكنني البدء بالاشتراك؟',
      a: 'يرجى الدخول إلى سيرفر Discord الرسمي الخاص بنا وفتح تذكرة شراكة جديدة (Partnership Ticket). سيتواصل معك مهندس مخصص لمناقشة المتطلبات وتفعيل خطة الشراكة الخاصة بك.',
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12 font-almarai" dir="rtl">
        
        {/* Formal Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-500 mb-10 select-none">
          <Link to="/" className="hover:text-slate-300 transition-colors">الرئيسية</Link>
          <span className="text-slate-700">/</span>
          <Link to="/partners" className="hover:text-slate-300 transition-colors">برنامج الشراكات</Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-400">خطط الشراكة</span>
        </div>

        {/* Corporate Header */}
        <div className="border-b border-slate-800 pb-10 mb-16 text-right">
          <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2">خطط الشراكة والأسعار</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            باقات الشراكة البرمجية والتشغيلية
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
            نظام شراكة برمجية منظم وواضح لدعم نمو مجتمعك. جميع الخطط تتضمن نسخة خاصة مستضافة مستقلة ومهندساً مخصصاً وفترة حصرية لتطوير ميزاتك.
          </p>
        </div>

        {/* Plans Grid - Clean Border Layout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`border rounded-xl p-6 flex flex-col justify-between transition-colors duration-300 bg-[#000000]/10 ${
                plan.highlight 
                  ? 'border-purple-500/30 shadow-lg' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-sm font-bold text-white">{plan.title}</h3>
                  {plan.highlight && (
                    <span className="text-[9px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">الخيار الموصى به</span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-xs text-slate-500">/ {plan.period}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 font-light">{plan.subtitle}</p>
                </div>

                <div className="h-px bg-slate-800/80 my-4" />

                <ul className="space-y-3 text-[11px] text-slate-300 font-light">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-500 select-none">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60">
                <a
                  href="https://discord.gg/weg5eGG5cr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center"
                >
                  <Button variant={plan.highlight ? "primary" : "secondary"} className="w-full py-2.5 text-xs font-bold font-almarai">
                    {plan.linkText}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Add-ons Section - Minimal Table style */}
        <section className="border-t border-slate-800 pt-16 mb-20">
          <div className="text-right mb-8">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <span>إضافات وتحديثات اختيارية (Add-ons)</span>
            </h3>
            <p className="text-xs text-slate-400">باقات ترقية ثابتة لتوسيع إمكانيات خادمك وتمديد فترات الحصرية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#000000]/10 p-6 rounded-xl border border-slate-800/60">
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800">Feature Add-ons</h4>
                <ul className="space-y-2.5">
                  {addons.features.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-light">{item.name}</span>
                      <span className="text-white font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800">Integration Add-ons</h4>
                <ul className="space-y-2.5">
                  {addons.integrations.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-light">{item.name}</span>
                      <span className="text-white font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800">System Add-ons</h4>
                <ul className="space-y-2.5">
                  {addons.systems.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-light">{item.name}</span>
                      <span className="text-white font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 pb-2 border-b border-slate-800">Exclusivity Extensions</h4>
                <ul className="space-y-2.5">
                  {addons.exclusivity.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-light">{item.name}</span>
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
          <h3 className="text-lg font-bold text-white text-right mb-8 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-purple-400" />
            <span>الأسئلة الشائعة حول الشراكات</span>
          </h3>
          <div className="space-y-3 max-w-3xl">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq[idx] || false;
              return (
                <div
                  key={idx}
                  className="border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 flex justify-between items-center text-right text-xs font-bold text-white hover:bg-slate-900/40 transition-colors focus:outline-none gap-4"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-[11px] text-slate-400 leading-relaxed border-t border-slate-800 bg-slate-900/5 font-light">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer Policy Link */}
        <div className="text-center border-t border-slate-800 pt-10 text-xs select-none">
          <Link
            to="/partners/policy"
            className="text-slate-400 hover:text-white transition-colors border-b border-slate-700 hover:border-white pb-0.5 font-semibold"
          >
            اضغط هنا للاطلاع على وثيقة سياسة الشراكات البرمجية والالتزامات الفنية المعتمدة
          </Link>
        </div>

      </div>
    </Layout>
  );
};

export default PartnershipPlans;
