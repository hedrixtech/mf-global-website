import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { 
  ChevronDown, 
  ChevronUp, 
  ChevronRight, 
  HelpCircle, 
  Layers, 
  Check 
} from 'lucide-react';

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
      monthlyEquivalent: "~$12.50",
      discount: null,
      period: "٤ أشهر",
      subtitle: "أولوية تنفيذ عادية",
      gradient: "from-slate-700/20 via-slate-800/10 to-slate-900/30",
      border: "border-slate-700/30",
      glow: "shadow-slate-500/5",
      accent: "text-slate-400",
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
      monthlyEquivalent: "~$11.24",
      discount: "وفر 10% عند اختيار 8 أشهر",
      period: "٨ أشهر",
      subtitle: "أولوية دعم وتحديثات متوسطة",
      gradient: "from-amber-600/20 via-amber-800/5 to-[#000000]/80",
      border: "border-amber-500/30",
      glow: "shadow-amber-500/10",
      accent: "text-amber-400",
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
      monthlyEquivalent: "~$10.83",
      discount: "وفر 15% · أفضل قيمة للتوفير",
      period: "١٢ شهرًا",
      subtitle: "أولوية برمجية مطلقة وقصوى",
      gradient: "from-purple-600/20 via-indigo-950/10 to-[#020108]/90",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/15",
      accent: "text-purple-400",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-almarai" dir="rtl">
        
        {/* Elegant Minimal Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-purple-400/40 mb-12 select-none">
          <Link to="/" className="hover:text-purple-300 transition-colors">الرئيسية</Link>
          <ChevronRight className="w-3 h-3 text-purple-500/20" />
          <Link to="/partners" className="hover:text-purple-300 transition-colors">برنامج الشراكات</Link>
          <ChevronRight className="w-3 h-3 text-purple-500/20" />
          <span className="text-purple-300/80">خطط الشراكة والأسعار</span>
        </div>

        {/* Luxury Corporate Header */}
        <section className="relative text-center py-16 md:py-24">
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/10 bg-purple-500/5 text-purple-400/80 text-[10px] font-extrabold uppercase tracking-widest mb-6">
            <span>OFFICIAL PARTNERSHIP · وثيقة الشراكة الرسمية</span>
          </div>

          <h2 className="relative text-3xl md:text-5xl font-light leading-tight text-white mb-6 tracking-tight">
            باقات الشراكة البرمجية
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-purple-300 to-indigo-200">
              والدعم التشغيلي المتكامل
            </span>
          </h2>

          <p className="relative text-xs md:text-sm text-purple-200/50 max-w-2xl mx-auto leading-relaxed font-light">
            نظام شراكة برمجية منظم وواضح لدعم نمو واستقرار مجتمعك الرقمي. جميع الخطط تتضمن نسخة خاصة مستضافة مستقلة بالكامل، مهندساً تقنياً مخصصاً، وفترة حصرية تضمن تميز سيرفرك.
          </p>
        </section>

        {/* Plans Grid - Luxury Metallic Theme */}
        <section className="relative mb-24">
          <div className="text-center mb-16 select-none">
            <h3 className="text-xs uppercase tracking-widest text-purple-400/50 mb-2">PARTNERSHIP PLANS</h3>
            <p className="text-lg font-bold text-white">اختر باقة الشراكة المناسبة لخادمك</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${plan.border} bg-gradient-to-b ${plan.gradient} p-8 flex flex-col justify-between relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] shadow-2xl ${plan.glow}`}
              >
                {/* Highlight/Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-full shadow-lg shadow-amber-500/20 select-none">
                    شراكة موصى بها
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-purple-300/40 block mb-1">
                        دورة تفعيل {plan.period}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight">{plan.title}</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                      <Layers className={`w-4 h-4 ${plan.accent}`} />
                    </div>
                  </div>

                  {/* Card Pricing */}
                  <div className="mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                      <span className="text-purple-300/40 text-xs font-light">/ {plan.period}</span>
                    </div>
                    
                    {/* Monthly equivalent and discount info */}
                    <div className="flex flex-col gap-1.5 mt-2.5">
                      <div className="text-[10px] text-purple-300/70 font-light">
                        (يعادل <span className="text-white font-mono font-medium">{plan.monthlyEquivalent}</span> شهرياً)
                      </div>
                      {plan.discount && (
                        <div className="self-start px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold">
                          {plan.discount}
                        </div>
                      )}
                    </div>

                    <p className="text-purple-200/50 text-[10px] leading-relaxed mt-4 font-light">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-purple-200/70 font-light leading-relaxed">
                        <Check className={`w-3.5 h-3.5 ${plan.accent} shrink-0 mt-0.5`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA & Suitable Section */}
                <div className="space-y-4">
                  <a
                    href="https://discord.gg/weg5eGG5cr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button 
                      variant={plan.highlight ? "primary" : "secondary"} 
                      className="w-full py-3 text-xs font-black uppercase tracking-widest font-almarai rounded-lg"
                    >
                      {plan.linkText}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons Section - Luxury Table style */}
        <section className="border-t border-purple-500/10 pt-16 mb-20">
          <div className="text-right mb-8">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Layers className="w-4 h-4 text-purple-400" />
              </div>
              <span>إضافات وتحديثات اختيارية (Add-ons)</span>
            </h3>
            <p className="text-xs text-purple-300/40">باقات ترقية وثوابت لتوسيع إمكانيات خادمك وتمديد فترات الحصرية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-b from-purple-950/5 via-black/40 to-[#020108]/60 p-8 rounded-2xl border border-purple-500/10 shadow-xl">
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4 pb-2 border-b border-white/5">Feature Add-ons</h4>
                <ul className="space-y-3">
                  {addons.features.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-purple-200/70 font-light">{item.name}</span>
                      <span className="text-amber-400 font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4 pb-2 border-b border-white/5">Integration Add-ons</h4>
                <ul className="space-y-3">
                  {addons.integrations.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-purple-200/70 font-light">{item.name}</span>
                      <span className="text-amber-400 font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4 pb-2 border-b border-white/5">System Add-ons</h4>
                <ul className="space-y-3">
                  {addons.systems.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-purple-200/70 font-light">{item.name}</span>
                      <span className="text-amber-400 font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4 pb-2 border-b border-white/5">Exclusivity Extensions</h4>
                <ul className="space-y-3">
                  {addons.exclusivity.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-purple-200/70 font-light">{item.name}</span>
                      <span className="text-amber-400 font-mono font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Collapsible FAQ Section */}
        <section className="border-t border-purple-500/10 pt-16 mb-16">
          <h3 className="text-lg font-bold text-white text-right mb-8 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-purple-400" />
            </div>
            <span>الأسئلة الشائعة حول الشراكات</span>
          </h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq[idx] || false;
              return (
                <div
                  key={idx}
                  className="border border-purple-500/10 rounded-xl overflow-hidden bg-black/20 hover:border-purple-500/20 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 flex justify-between items-center text-right text-xs font-bold text-white hover:bg-white/5 transition-colors focus:outline-none gap-4"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-purple-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-2 text-[11px] text-purple-200/50 leading-relaxed border-t border-purple-500/10 bg-purple-950/5 font-light">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer Policy Link */}
        <div className="text-center border-t border-purple-500/10 pt-10 text-xs select-none">
          <Link
            to="/partners/policy"
            className="text-purple-300 hover:text-white transition-colors border-b border-purple-500/40 hover:border-white pb-0.5 font-semibold"
          >
            اضغط هنا للاطلاع على وثيقة سياسة الشراكات البرمجية والالتزامات الفنية المعتمدة
          </Link>
        </div>

      </div>
    </Layout>
  );
};

export default PartnershipPlans;
