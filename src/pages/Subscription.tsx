import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { 
  Sparkles, 
  Check, 
  ChevronRight,
  ShieldAlert,
  Info,
  Layers,
  ArrowRightLeft
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Subscription: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const plans = [
    {
      key: "free",
      name: "الفئة الفضية · Silver",
      price: "0",
      tierLabel: "العضوية المجانية / FREE",
      tagline: "نظام تجريبي أساسي لاستكشاف بيئة العمل الأساسية",
      gradient: "from-slate-700/20 via-slate-800/10 to-slate-900/30",
      border: "border-slate-700/30",
      glow: "shadow-slate-500/5",
      accent: "text-slate-400",
      features: [
        "نظام اتصال محدود ومراقب (Limited phone system)",
        "البوت الأساسي فقط (Basic bot only)",
        "حدود استهلاك صارمة على العمليات (Hard caps)",
        "معالجة اعتيادية للأوامر والطلبات"
      ],
      suitable: "مناسب للمجتمعات الجديدة والتجارب الفردية الأولى.",
      isPopular: false
    },
    {
      key: "core",
      name: "الفئة الذهبية · Gold Core",
      price: "3.99",
      tierLabel: "بوابة الانطلاق الرسمية / CORE",
      tagline: "تفعيل الخدمة الفعالة وتدشين النظام المتكامل لسيرفرك",
      gradient: "from-amber-600/20 via-amber-800/5 to-[#000000]/80",
      border: "border-amber-500/30",
      glow: "shadow-amber-500/10",
      accent: "text-amber-400",
      features: [
        "تفعيل نظام الاتصال الأساسي بالكامل (Full basic phone system)",
        "جميع ميزات ديسكورد القياسية بلا أي قيود استهلاك",
        "عمق اقتصادي وأنشطة تداول قياسية ومستقرة",
        "أولوية معالجة عادية وسريعة للطلبات",
        "لوحة ويب أساسية لمراقبة الخادم والتحكم",
        "استخدام غير محدود (تطبق سياسة الاستهلاك العادل)"
      ],
      suitable: "أوصت به الإدارة: الباقة المثالية لبدء تشغيل وتأسيس سيرفر تفاعلي حقيقي متكامل.",
      isPopular: true
    },
    {
      key: "pro",
      name: "الفئة البلاتينية · Platinum Pro",
      price: "8.99",
      tierLabel: "القوة المطلقة والتحكم الكامل / PRO",
      tagline: "التجربة الفاخرة والأرقى للتحكم بمجتمعك الرقمي الكريستالي",
      gradient: "from-purple-600/20 via-indigo-950/10 to-[#020108]/90",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/15",
      accent: "text-purple-400",
      features: [
        "نظام الاتصال المتقدم بكافة ميزاته وحصرياته (Full phone system)",
        "لوحة ويب متطورة بتصميم استثنائي وحصري (Advanced web UI)",
        "أنظمة الدول والبلديات والمدن والاقتصاد والفعاليات الكبرى",
        "طابور معالجة فائق السرعة والأولوية التشغيلية المطلقة",
        "وصول مبكر وتجريبي لكافة الأنظمة والتحديثات المستقبلية",
        "استخدام غير محدود (تطبق سياسة الاستهلاك العادل)"
      ],
      suitable: "مناسب للمجتمعات الضخمة، الشبكات الكبرى، والخوادم الاحترافية التي تبحث عن أقصى تميز.",
      isPopular: false
    }
  ];

  const handleSelectPlan = (key: string) => {
    if (key === "free") {
      window.open("https://discord.com/oauth2/authorize?client_id=1214227361661685780&permissions=8&scope=bot%20applications.commands", "_blank");
    } else {
      navigate(`/pay?plan=${key}`);
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-almarai" dir="rtl">
        
        {/* Elegant Minimal Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-purple-400/40 mb-12 select-none">
          <Link to="/" className="hover:text-purple-300 transition-colors">الرئيسية</Link>
          <ChevronRight className="w-3 h-3 text-purple-500/20" />
          <span className="text-purple-300/80">العضويات المميزة</span>
        </div>

        {/* Luxury Header */}
        <section
          className={`relative text-center py-16 md:py-24 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/10 bg-amber-500/5 text-amber-400/80 text-[10px] font-extrabold uppercase tracking-widest mb-6">
            <span>LUXURY EDITION · الجيل الجديد</span>
          </div>

          <h2 className="relative text-4xl md:text-6xl font-light leading-tight text-white mb-6 tracking-tight">
            العضوية الفاخرة
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-purple-300 to-indigo-200">
              ارتقِ بمجتمعك الرقمي بلا حدود
            </span>
          </h2>

          <p className="relative text-sm md:text-base text-purple-200/45 max-w-2xl mx-auto leading-relaxed font-light">
            استكشف الفئة الفاخرة لنظام تشغيل السيرفرات الأكثر ذكاءً. لقد استغنينا بالكامل عن طريقة الدفع بالعملات أو الاستهلاك ورصيد الفلكس، ووحدنا قوة النظام في فئات اشتراك غير محدودة تليق بتطلعات مجتمعك.
          </p>
        </section>

        {/* Premium Membership Card Stack */}
        <section
          className={`relative mb-24 transition-all duration-1000 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16 select-none">
            <h3 className="text-xs uppercase tracking-widest text-purple-400/50 mb-2">MEMBERSHIP PLANS</h3>
            <p className="text-lg font-bold text-white">اختر فئة العضوية الفاخرة لخادمك</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${plan.border} bg-gradient-to-b ${plan.gradient} p-8 flex flex-col justify-between relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] shadow-2xl ${plan.glow}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-full shadow-lg shadow-amber-500/20 select-none">
                    العضوية الموصى بها
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-purple-300/40 block mb-1">
                        {plan.tierLabel}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight">{plan.name}</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                      <Layers className={`w-4 h-4 ${plan.accent}`} />
                    </div>
                  </div>

                  {/* Card Pricing */}
                  <div className="mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white tracking-tight">${plan.price}</span>
                      <span className="text-purple-300/40 text-xs font-light">/ شهرياً</span>
                    </div>
                    <p className="text-purple-200/50 text-[10px] leading-relaxed mt-2.5 font-light">
                      {plan.tagline}
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
                  {plan.suitable && (
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-purple-300/60 text-[10px] leading-relaxed font-light">
                      {plan.suitable}
                    </div>
                  )}
                  <Button 
                    variant={plan.isPopular ? "primary" : "secondary"} 
                    className="w-full py-3 text-xs font-black uppercase tracking-widest font-almarai rounded-lg"
                    onClick={() => handleSelectPlan(plan.key)}
                  >
                    {plan.price === "0" ? "تفعيل مجاني" : "بدء التفعيل الفاخر"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unified Luxury Charter (Fair Consumption & Safety) */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto rounded-2xl border border-purple-500/10 bg-gradient-to-b from-purple-950/10 to-transparent p-8 md:p-12 shadow-2xl">
            <div className="flex items-center gap-3.5 mb-6 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">ميثاق التفعيل وسياسة الاستهلاك العادل</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-light leading-relaxed text-purple-200/60">
              
              {/* Clause 1 */}
              <div className="space-y-2 border-r border-white/5 pr-4 text-right">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-purple-400" />
                  <span>ضوابط سياسة الاستهلاك العادل</span>
                </h4>
                <p>
                  يخضع استخدام الميزات والاتصالات في كافة الباقات لسياسة الاستهلاك العادل للبنية التحتية. يهدف هذا الضابط التشغيلي الفني إلى توزيع موارد الشبكة الحسابية بعدالة تامة ومنع أي استهلاك مفرط أو عشوائي قد يؤثر سلباً على استقرار الخدمة وسرعة المعالجة للخوادم الأخرى.
                </p>
              </div>

              {/* Clause 2 */}
              <div className="space-y-2 pr-2 text-right">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-purple-400" />
                  <span>تأمين عمليات السداد والتفعيل الرسمي</span>
                </h4>
                <p>
                  تخلي إدارة Majestic Flux مسؤوليتها الكاملة عن أي عمليات تفعيل، شراء، أو وساطة تتم بعيداً عن القنوات البنكية المدمجة في الموقع أو خارج نطاق <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">سيرفر الدعم الفني الرسمي</a>. لا توجد أي جهات خارجية مخولة لتمثيل الفريق المالي أو الفني.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center text-[10px] text-purple-400/35">
              <span>جميع فئات العضوية تخضع للاتفاقية والسياسة البرمجية والتشغيلية المعتمدة لعام ٢٠٢٦.</span>
            </div>
          </div>
        </section>

        {/* Footer Brand Note */}
        <section className="text-center text-[10px] text-purple-400/30 pb-8 tracking-widest uppercase">
          <p>Majestic Flux · Luxury Infrastructure Systems · Hedrix Technology</p>
        </section>
      </div>
    </Layout>
  );
};

export default Subscription;
