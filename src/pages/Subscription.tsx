import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { 
  Zap, 
  Coins, 
  Check, 
  X, 
  PlusCircle, 
  Sparkles, 
  Cpu, 
  ShieldAlert, 
  Activity, 
  ChevronRight,
  Info,
  ShoppingBag
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Subscription: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Pricing plans
  const plans = [
    {
      key: "core",
      name: "Flux Core",
      tagline: "الخيار المثالي للمجتمعات المتنامية والواعدة",
      price: "1.99",
      period: "شهريًا",
      features: [
        "70,000 Flux شهريًا للعمليات الأساسية والتقدمية",
        "طابور معالجة أسرع (Fast Queue) لسرعة استجابة فائقة",
        "سرعة تنفيذ مضاعفة لكافة تفاعلات الأعضاء",
        "تقليل ظهور العلامة التجارية لبناء هويتك الخاصة",
        "فتح أنظمة البلديات والتحكم المتكاملة",
        "نظام سجلات (Logs) محسن لتتبع دقيق",
        "دعم فني هندسي متكامل وسريع",
        "نسخ احتياطي (Backup) دوري للبيانات"
      ],
      suitable: "مناسب لـ: السيرفرات في مرحلة النمو، والمجتمعات التي تبحث عن استقرار تشغيلي متطور.",
      isPopular: false,
      color: "border-purple-500/20 bg-purple-950/10 hover:border-purple-500/40"
    },
    {
      key: "elite",
      name: "Flux Elite",
      tagline: "الأداء الأقصى والتحكم الكامل بلا حدود",
      price: "4.99",
      period: "شهريًا",
      features: [
        "250,000 Flux شهريًا لتشغيل أضخم العمليات",
        "أولوية تنفيذ مطلقة (Highest Priority) بدون أي تأخير",
        "طابور معالجة فائق السرعة مخصص للنظام الكثيف",
        "تكامل جزئي مع أنظمة الذكاء الاصطناعي (AI Core)",
        "لوحة تحليلات وإحصائيات متقدمة لنشاط خادمك",
        "نظام اقتصاد واستثمارات متقدم متكامل",
        "طبقات حماية أمنية إضافية ضد أي استغلال",
        "وصول مبكر وتجريبي لكافة الأنظمة الجديدة قبل الجميع",
        "أعلى درجات الاستقرار والثبات التقني",
        "أولوية صيانة ودعم هندسي خاص"
      ],
      suitable: "مناسب لـ: الشبكات الضخمة، السيرفرات الاحترافية، والمجتمعات التي تتطلب أعلى أداء وقوة معالجة.",
      isPopular: true,
      color: "border-amber-500/30 bg-amber-950/10 hover:border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.05)]"
    }
  ];

  // Add-ons
  const addons = [
    { key: "addon_50k", amount: "50,000 Flux", price: "1.99" },
    { key: "addon_150k", amount: "150,000 Flux", price: "3.99" },
    { key: "addon_400k", amount: "400,000 Flux", price: "7.99" }
  ];

  // Exclusive features
  const exclusiveFeatures = [
    "أنظمة الذكاء الاصطناعي (AI)",
    "أنظمة المدن المتقدمة (Cities System)",
    "الأنظمة الموسمية والفعاليات",
    "الأنظمة الحكومية وإدارة الدول",
    "الأنظمة التجريبية (Experimental Features)",
    "أنظمة الجيل الجديد الذكية"
  ];

  const handleSelectPlan = (key: string) => {
    if (key === "free") {
      window.open("https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID", "_blank");
    } else {
      navigate(`/pay?plan=${key}`);
    }
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-purple-300/60 mb-8 select-none">
          <Link to="/" className="hover:text-purple-300 transition-colors">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5 text-purple-500/40" />
          <span className="text-purple-300">الاشتراكات والأسعار</span>
        </div>

        {/* Hero Section */}
        <section
          className={`relative text-center py-12 md:py-20 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-900/15 text-purple-300 text-xs font-semibold mb-6">
            <Zap className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>نظام التشغيل المبتكر</span>
          </div>

          <h2 className="relative text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-purple-100 via-white to-purple-300 mb-6 tracking-tight">
            باقات التشغيل والـ Flux
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              المشغّل الرسمي لمجتمعاتكم
            </span>
          </h2>

          <p className="relative text-lg md:text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
            لم يعد Flux مجرد رصيد أو عملة داخلية. لقد تحول بالكامل إلى <span className="text-purple-300 font-bold">نظام تشغيل ذكي للسيرفرات</span> يمنح خادمك استقراراً هائلاً، مرونة استثنائية في الأداء، وبنية تحتية متكاملة للنمو.
          </p>
        </section>

        {/* Core Concept: Consumption Model */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-panel rounded-3xl p-8 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/10">
                <Activity className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
              </div>
              
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">آلية التوزيع ونظام الاستهلاك الذكي</h3>
                <p className="text-purple-200/70 leading-relaxed text-sm md:text-base">
                  كل سيرفر يحصل الآن على رصيد Flux شهري مخصص يتجدد تلقائياً بحسب نوع الخطة المحددة. 
                  لقد استغنينا عن طريقة الحساب الثابتة القديمة واستبدلناها بنظام استهلاك ذكي يعتمد على قوة العملية وصعوبة تنفيذها تقنياً لضمان عدالة الاستخدام ورفع كفاءة الخوادم.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Access Badge */}
        <section
          className={`relative mb-12 transition-all duration-1000 delay-250 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-panel-glow-green rounded-3xl p-6 md:p-8 border border-emerald-500/30 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-right">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-8 h-8 text-emerald-300 animate-pulse" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>تفعيل مجاني فوري لكافة السيرفرات</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">باقة الوصول الحر - Free Access</h3>
                  <p className="text-emerald-100/80 text-sm max-w-xl leading-relaxed">
                    ابدأ رحلتك فوراً بـ <span className="text-emerald-300 font-bold">15,000 Flux شهرياً مجاناً</span>. مناسبة تماماً لتجربة الأنظمة الأساسية وتشغيل خادمك وتدشين البنية الأولى لمجتمعك بدون أي تكاليف تشغيلية.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center shrink-0 bg-white/5 border border-white/10 rounded-2xl p-5 min-w-[220px] text-center backdrop-blur-md w-full lg:w-auto">
                <span className="text-xs text-emerald-300/80 mb-1">الرصيد الشهري المجاني</span>
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-white">15,000</span>
                <span className="text-[10px] text-emerald-300/60 uppercase tracking-wider font-bold mb-4">Flux / شهرياً</span>
                <Button 
                  variant="primary" 
                  className="w-full py-2 px-4 text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20"
                  onClick={() => handleSelectPlan("free")}
                >
                  إضافة البوت مجاناً
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">خطط الاشتراك الشهرية</h3>
            <p className="text-purple-300/60 text-sm">اختر الخطة المناسبة لحجم ونشاط مجتمعك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`glass-panel rounded-3xl p-6 border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${plan.color}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-md shadow-amber-500/20 select-none">
                    خطة احترافية موصى بها
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                    <p className="text-purple-400 text-xs mt-1">{plan.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/5">
                    <span className="text-3xl md:text-4xl font-extrabold text-white">${plan.price}</span>
                    <span className="text-purple-300/60 text-xs font-medium">{plan.period}</span>
                  </div>

                  {/* Included features */}
                  <div className="space-y-3 mb-6">
                    <p className="text-purple-300 text-xs font-bold mb-1">الميزات المتاحة:</p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-purple-200/80">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Exclusions or notes */}
                  {plan.limits && (
                    <div className="space-y-3 pt-4 border-t border-white/5 mb-6">
                      <p className="text-red-400/80 text-xs font-bold mb-1">الحدود والقيود:</p>
                      {plan.limits.map((lim, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-red-200/60">
                          <X className="w-3.5 h-3.5 text-red-500/60 shrink-0 mt-0.5" />
                          <span>{lim}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {plan.suitable && (
                    <div className="mt-4 p-3 rounded-2xl bg-purple-950/20 border border-purple-500/10 text-purple-300/80 text-xs leading-relaxed">
                      {plan.suitable}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4">
                  <Button 
                    variant={plan.isPopular ? "primary" : "secondary"} 
                    className="w-full py-2.5 text-sm"
                    onClick={() => handleSelectPlan(plan.key)}
                  >
                    {plan.price === "0" ? "إضافة البوت مجاناً" : "اشترك الآن"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons Section */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-400 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-panel-glow rounded-3xl p-8 border border-white/5 relative overflow-hidden text-center md:text-right">
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="max-w-xl text-right">
                <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                  <PlusCircle className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">إضافات رصيد Flux (Add-ons)</h3>
                </div>
                <p className="text-purple-200/70 text-sm md:text-base leading-relaxed">
                  إذا انتهى رصيد سيرفرك الشهري، فلست بحاجة لترقية خطتك الحالية بالكامل. يمكنك زيادة رصيدك فوراً في أي وقت بشراء إضافات Flux المخصصة لتكفي سيرفرك حتى موعد التجديد التلقائي القادم.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 shrink-0 w-full lg:w-auto">
                {addons.map((add, idx) => (
                  <div 
                    key={idx} 
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/pay?plan=${add.key}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") navigate(`/pay?plan=${add.key}`);
                    }}
                    className="glass-panel rounded-2xl p-4 border border-white/10 text-center min-w-[130px] bg-purple-950/20 shadow-md shadow-black/10 hover:border-purple-500/30 hover:scale-[1.02] cursor-pointer transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-center gap-1.5 text-purple-300 mb-1">
                        <Coins className="w-4.5 h-4.5 text-amber-400" />
                        <span className="font-bold text-sm">{add.amount}</span>
                      </div>
                      <span className="text-xs text-white/40 block">بسعر</span>
                      <span className="text-lg font-extrabold text-white">${add.price}</span>
                    </div>
                    <div className="mt-3 text-[10px] text-purple-300 flex items-center justify-center gap-1">
                      <ShoppingBag className="w-3 h-3 text-purple-400" />
                      <span>شراء سريع</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive & Partnerships Grid */}
        <section
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Exclusive Systems */}
          <div className="glass-panel rounded-3xl p-8 border border-purple-500/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">المزايا والأنظمة الحصرية</h3>
              </div>
              <p className="text-purple-200/70 text-xs md:text-sm leading-relaxed mb-6">
                بعض الأنظمة والفعاليات الجديدة المتقدمة التي يتم تطويرها بشكل مستمر تتطلب معالجة عالية وقدرات ذكاء اصطناعي متطورة. ستكون هذه الأنظمة متاحة حصرياً لمشتركي <span className="text-amber-400 font-semibold">Flux Elite</span> أو للشركاء الرسميين.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {exclusiveFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-purple-200/80 bg-white/5 border border-white/5 rounded-xl px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/5 pt-4">
              <span className="text-[10px] text-purple-400/60 block">تطبق شروط الاستهلاك على جميع العمليات الحصرية حسب نوعها.</span>
            </div>
          </div>

          {/* Infrastructure Partnerships */}
          <div className="glass-panel rounded-3xl p-8 border border-indigo-500/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">Infrastructure Partnerships</h3>
              </div>
              <p className="text-purple-200/70 text-xs md:text-sm leading-relaxed mb-6">
                الشراكات لم تعد مجرد حزمة اشتراك أعلى بل أصبحت شراكة بنية تحتية هندسية كاملة لدعم نمو مجتمعك. يحصل الشريك الرسمي على حلول متكاملة تضمن له أقصى استقرار وتميز.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "نسخة بوت خاصة (Private Instance) تحمل هويتك بالكامل.",
                  "مهندس تطوير مخصص ومتاح لحل المشكلات وتركيب الأنظمة.",
                  "خادم (Dedicated Server) مخصص ومستقل لمعالجة بيانات سيرفرك.",
                  "إمكانية التطوير البرمجي وتخصيص المزايا حسب الطلب.",
                  "أولوية تنفيذ مطلقة لكافة طلبات وقوائم الانتظار.",
                  "وصول مبكر وتجريبي لكافة الأنظمة الجديدة قبل إطلاقها."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-purple-200/80">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-4 flex justify-between items-center">
              <span className="text-[10px] text-indigo-400/60">تخضع الشراكات لمراجعة وقبول الطلبات رسمياً.</span>
              <Link to="/partners" className="text-xs text-indigo-300 font-bold hover:underline">
                معرفة المزيد عن الشراكات ←
              </Link>
            </div>
          </div>
        </section>

        {/* Why the new system is better */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-600 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">لماذا يعتبر النظام الجديد أفضل؟</h3>
            <p className="text-purple-300/60 text-sm">مقارنة بين الجيل القديم والجيل الجديد من Majestic Flux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "تجربة استخدام مجانية حقيقية ومستدامة",
                desc: "يمنح السيرفرات رصيداً كافياً للبدء وتجربة البوت بشكل كامل دون الحاجة للدفع فوراً، مما يسهل على الخوادم المتوسطة والجديدة الانطلاق والنمو بشكل طبيعي."
              },
              {
                title: "استقرار هائل للبنية التحتية",
                desc: "عن طريق توزيع العمليات واستخدام الاستهلاك الذكي بدلاً من الطلبات العشوائية، نضمن ثبات سرعة معالجة الأوامر واستجابة البوت تحت أي ظرف دون انقطاع."
              },
              {
                title: "بيئة عادلة تضمن تطور مجتمعك",
                desc: "توزيع الموارد والقدرات حسب نشاط واستهلاك السيرفر يمنع استئثار بعض المجتمعات بموارد الخوادم العامة على حساب الخوادم الأخرى."
              },
              {
                title: "خيارات دفع ودعم مرن للتوسع",
                desc: "نظام إضافات (Add-ons) سهل وموثوق يوفر للسيرفرات مرونة تامة لتأمين رصيد إضافي عند الحاجة وبأقل تكلفة دون إجبارهم على ترقيات باهظة غير مستخدمة."
              }
            ].map((why, idx) => (
              <div key={idx} className="glass-panel rounded-2xl p-6 border border-white/5">
                <h4 className="text-sm md:text-base font-bold text-purple-300 mb-2">{why.title}</h4>
                <p className="text-xs md:text-sm text-purple-200/70 leading-relaxed">{why.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Command Consumption Rates Table */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-purple-500/20 relative overflow-hidden bg-purple-950/5">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-purple-400 to-indigo-500 shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-white">جدول تفاصيل أسعار استهلاك العمليات</h3>
            </div>

            <div className="mb-6 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0" />
                <p className="text-xs md:text-sm text-purple-200">
                  <span className="font-bold text-purple-300">ملاحظة تنظيمية:</span> نظام الاستهلاك الجديد يعتمد على حجم وقوة المعالجة لكل أمر. سنقوم بنشر جدول استهلاك العمليات التفصيلي والدقيق هنا فور صدوره رسمياً.
                </p>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-bold text-purple-300 uppercase tracking-wider select-none shrink-0 animate-pulse">
                قريباً - سيتم التحديث فوراً
              </div>
            </div>

            {/* Table Mockup / Placeholder */}
            <div className="overflow-x-auto scrollbar-custom border border-white/5 rounded-2xl">
              <table className="w-full text-right text-xs md:text-sm">
                <thead>
                  <tr className="bg-white/5 text-purple-200 font-bold border-b border-white/10">
                    <th className="px-4 py-3">فئة العمليات</th>
                    <th className="px-4 py-3">مثال على الأوامر</th>
                    <th className="px-4 py-3">مستوى المعالجة</th>
                    <th className="px-4 py-3 text-left">التكلفة المتوقعة (Flux)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-purple-200/80">
                  <tr>
                    <td className="px-4 py-3.5 font-semibold text-white">العمليات الأساسية</td>
                    <td className="px-4 py-3.5 font-mono text-purple-300/70">/balance, /register, /profile</td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px]">خفيفة جداً</span>
                    </td>
                    <td className="px-4 py-3.5 text-left font-mono text-emerald-400">1 - 2 Flux</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5 font-semibold text-white">العمليات التجارية والتحويل</td>
                    <td className="px-4 py-3.5 font-mono text-purple-300/70">/transfer, /market buy, /bank deposit</td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px]">متوسطة</span>
                    </td>
                    <td className="px-4 py-3.5 text-left font-mono text-emerald-400">3 - 5 Flux</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5 font-semibold text-white">عمليات المحاكاة الكبيرة</td>
                    <td className="px-4 py-3.5 font-mono text-purple-300/70">/auctions, /jail system, /companies</td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px]">ثقيلة</span>
                    </td>
                    <td className="px-4 py-3.5 text-left font-mono text-amber-400">8 - 15 Flux</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3.5 font-semibold text-white">الأنظمة الحكومية والمدن</td>
                    <td className="px-4 py-3.5 font-mono text-purple-300/70">/city create, /law enforce, /gov treasury</td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px]">عالية الحساب</span>
                    </td>
                    <td className="px-4 py-3.5 text-left font-mono text-rose-400">متاحة لـ Elite / شركاء</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Rules & Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none mb-12">
          {/* Refund policies */}
          <section className="glass-panel rounded-3xl border border-white/5 p-8 shadow-md">
            <h2 className="text-xl font-bold text-purple-200 mb-5 flex items-center gap-2 border-b border-white/5 pb-3">
              <Info className="w-5 h-5 text-purple-400" />
              <span>سياسات الشراء والرصيد</span>
            </h2>
            <ul className="space-y-3.5 text-purple-300/80 text-sm list-inside list-disc">
              <li>جميع مشتريات الفلكس نهائية ولا تدعم استرداد المبالغ بعد شحنها بنجاح.</li>
              <li>الرصيد لا يمكن تصديره أو تحويله لأموال واقعية أو استخدامه بخدمات خارج نطاق البوت.</li>
              <li>السيرفرات والشبكات تعتبر جهات مستقلة تماماً، ولا يمكن مشاركة الرصيد بين سيرفر وآخر.</li>
              <li>تعديل الأسعار خاضع لتكاليف البنية التشغيلية وصيانة الخوادم وسيتم الإعلان مسبقاً قبل التعديل.</li>
            </ul>
          </section>

          {/* Payment Warning Policy Banner */}
          <section className="glass-panel rounded-3xl border border-red-500/30 bg-red-950/10 p-8 shadow-md">
            <h2 className="text-xl font-bold text-red-400 mb-5 flex items-center gap-2 border-b border-red-500/10 pb-3">
              <ShieldAlert className="w-5 h-5 text-red-500 animate-pulse" />
              <span>سياسة الدفع والأمان الرسمية</span>
            </h2>
            <div className="text-red-200/80 text-sm leading-relaxed space-y-3">
              <p>
                تخلي إدارة Majestic Flux مسؤوليتها الكاملة عن أي عمليات شراء أو تحويل مالي تتم خارج النظام البنكي المدمج في الموقع أو بعيداً عن{' '}
                <span className="font-bold text-white underline">قنوات الدعم الفني الرسمي داخل سيرفرنا</span>.
              </p>
              <p>
                للوصول المباشر للدعم الفني والحصول على مساعدة مالية، تفضل بزيارة الرابط التالي:{' '}
                <a
                  href="https://discord.gg/weg5eGG5cr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline font-semibold hover:text-blue-300 transition-colors"
                >
                  https://discord.gg/weg5eGG5cr
                </a>
              </p>
              <p className="font-bold text-yellow-400">
                ⚠️ تنبيه: لا يتم تعويض أو إرجاع أي مبالغ تم سدادها عبر أفراد أو وسطاء يدعون تمثيل فريق Majestic Flux.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <section className="text-center text-xs text-purple-400/50 pb-8">
          <p>Majestic Flux ليس مجرد بوت دسكورد عادي. هو نظام تشغيل متكامل لسيرفرات الحياة الواقعية مصمم للنمو، الاستقرار، والبنية التحتية الاحترافية.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Subscription;
