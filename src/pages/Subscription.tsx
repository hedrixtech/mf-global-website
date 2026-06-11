import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { 
  Zap, 
  Check, 
  X, 
  Sparkles, 
  Cpu, 
  ShieldAlert, 
  Activity, 
  ChevronRight,
  Info
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
      name: "العضوية المجانية (Free)",
      price: "0",
      tagline: "نظام تجريبي أساسي لاستكشاف الأساسيات",
      features: [
        "نظام اتصال محدود جداً (Very limited phone system)",
        "البوت الأساسي فقط (Basic bot only)",
        "حدود صارمة على الاستخدام والأعضاء (Hard caps)",
        "معالجة عادية للأوامر والطلبات"
      ],
      suitable: "مناسب للمجتمعات الجديدة والتجارب الفردية الأولى.",
      isPopular: false,
      color: "border-purple-500/10 bg-[#000000]/40 hover:border-purple-500/20"
    },
    {
      key: "core",
      name: "باقة النواة (Core)",
      price: "3.99",
      tagline: "تفعيل الخدمة الحقيقية وإطلاق قوة النظام لخادمك",
      features: [
        "الوصول الكامل لنظام الاتصال الأساسي (Full basic phone system)",
        "جميع ميزات ديسكورد القياسية بدون قيود الاستخدام",
        "عمق اقتصادي وألعاب قياسي ومستقر",
        "طابور معالجة سريع ومتناسق للطلبات",
        "لوحة ويب أساسية للتحكم بالأنظمة",
        "استخدام غير محدود (تطبق سياسة الاستهلاك العادل)"
      ],
      suitable: "مناسب لـ: السيرفرات المتنامية التي تبحث عن تفعيل المنتج الفعلي واستقراره الكامل.",
      isPopular: true,
      color: "border-purple-500/35 bg-[#000000]/70 hover:border-purple-500/60 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
    },
    {
      key: "pro",
      name: "الباقة الاحترافية (Pro)",
      price: "7.99",
      tagline: "القوة المطلقة وتجربة التفاعل الأرقى والتحكم الكامل",
      features: [
        "نظام الاتصال المتقدم بكافة ميزاته وتفاصيله (Full phone system)",
        "لوحة ويب متطورة بتصميم استثنائي وحصري (Advanced web UI)",
        "أنظمة الدول والبلديات والمدن والاقتصاد والفعاليات",
        "طابور معالجة فائق الأولوية والسرعة القصوى",
        "وصول مبكر وتجريبي لكافة الأنظمة والتحديثات المستقبلية",
        "استخدام غير محدود (تطبق سياسة الاستهلاك العادل)"
      ],
      suitable: "مناسب لـ: المجتمعات الضخمة، الشبكات الكبرى، والخوادم الاحترافية التي تتطلب تفاعلاً لا حدود له.",
      isPopular: false,
      color: "border-amber-500/20 bg-[#000000]/40 hover:border-amber-500/40"
    }
  ];

  const exclusiveFeatures = [
    "أنظمة الذكاء الاصطناعي (AI Core)",
    "أنظمة المدن والبلديات المتقدمة (Cities)",
    "الأنظمة الموسمية والفعاليات الكبرى",
    "الأنظمة الحكومية وإدارة الدول",
    "الأنظمة التجريبية (Experimental Features)",
    "أنظمة الجيل الجديد الذكية"
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
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-purple-300/40 mb-8 select-none">
          <Link to="/" className="hover:text-purple-300 transition-colors">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5 text-purple-500/20" />
          <span className="text-purple-300/80">الاشتراكات والأسعار</span>
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
            <span>عصر التشغيل غير المحدود</span>
          </div>

          <h2 className="relative text-3xl md:text-5xl font-extrabold leading-tight text-white mb-6 tracking-tight">
            باقات التشغيل والاشتراكات
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              المحرك الموثوق لمجتمعاتكم الرقمية
            </span>
          </h2>

          <p className="relative text-base md:text-lg text-purple-200/60 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
            لقد انتقلنا بالكامل إلى نظام <span className="text-white font-bold">الاستخدام غير المحدود (Unlimited Usage)</span> بدلاً من التكلفة المعتمدة على استهلاك رصيد Flux. استمتع بتشغيل سيرفرك واستكشاف كافة تفاعلات أعضائك بحرية تامة وبخطط اشتراك واضحة.
          </p>
        </section>

        {/* Fair Consumption Policy Banner */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-3xl p-6 md:p-8 border border-purple-500/10 bg-[#000000]/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-7 h-7 text-purple-400" />
              </div>
              
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-lg font-bold text-white mb-2">سياسة الاستهلاك العادل (Fair Consumption)</h3>
                <p className="text-purple-200/50 leading-relaxed text-xs md:text-sm">
                  لتوفير سرعة معالجة استثنائية وثبات كامل لكافة الخوادم النشطة، تطبق سياسة الاستهلاك العادل على جميع الباقات. تضمن هذه السياسة حماية موارد النظام التشغيلية من أي استغلال مفرط أو عشوائي قد يؤثر على استقرار الشبكة.
                </p>
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
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">خطط الاشتراك الشهرية</h3>
            <p className="text-purple-300/40 text-xs md:text-sm">اختر الباقة المناسبة لحجم ونشاط مجتمعك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-3xl p-6 border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${plan.color}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-[10px] uppercase tracking-wider font-extrabold px-4.5 py-1 rounded-full shadow-md shadow-purple-500/20 select-none">
                    الباقة الأكثر تفعيلاً
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h4 className="text-base font-bold text-white">{plan.name}</h4>
                    <p className="text-purple-400/80 text-[11px] mt-1">{plan.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/5">
                    <span className="text-3xl md:text-4xl font-extrabold text-white">${plan.price}</span>
                    <span className="text-purple-300/40 text-xs font-medium">/ شهرياً</span>
                  </div>

                  {/* Included features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-purple-200/70">
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {plan.suitable && (
                    <div className="mt-4 p-3 rounded-2xl bg-purple-950/20 border border-purple-500/10 text-purple-300/60 text-[11px] leading-relaxed">
                      {plan.suitable}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Button 
                    variant={plan.isPopular ? "primary" : "secondary"} 
                    className="w-full py-2.5 text-xs font-bold font-almarai"
                    onClick={() => handleSelectPlan(plan.key)}
                  >
                    {plan.price === "0" ? "إضافة البوت مجاناً" : "بدء التفعيل"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exclusive & Partnerships Grid */}
        <section
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-400 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Exclusive Systems */}
          <div className="rounded-3xl p-8 border border-purple-500/10 bg-[#000000]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white">المزايا والأنظمة الحصرية</h3>
              </div>
              <p className="text-purple-200/50 text-xs md:text-sm leading-relaxed mb-6">
                بعض الأنظمة والفعاليات المتقدمة التي يتم تطويرها بشكل مستمر تتطلب معالجة عالية وقدرات ذكاء اصطناعي متطورة. ستكون هذه الأنظمة متاحة حصرياً لمشتركي باقة <span className="text-purple-300 font-semibold">Pro</span> أو للشركاء الشرفيين.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {exclusiveFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-purple-200/60 bg-white/5 border border-white/5 rounded-xl px-3 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-white/5 pt-4">
              <span className="text-[10px] text-purple-400/40 block">تطبق شروط الاستهلاك على جميع العمليات الحصرية حسب نوعها.</span>
            </div>
          </div>

          {/* Infrastructure Partnerships */}
          <div className="rounded-3xl p-8 border border-indigo-500/10 bg-[#000000]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white">شراكة البنية التحتية الهندسية</h3>
              </div>
              <p className="text-purple-200/50 text-xs md:text-sm leading-relaxed mb-6">
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
                  <div key={idx} className="flex items-start gap-2 text-xs text-purple-200/60">
                    <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-4 flex justify-between items-center">
              <span className="text-[10px] text-indigo-400/40">تخضع الشراكات لمراجعة وقبول الطلبات رسمياً.</span>
              <Link to="/partners" className="text-xs text-indigo-300 font-bold hover:underline">
                تفاصيل الشراكات ←
              </Link>
            </div>
          </div>
        </section>

        {/* Why the new system is better */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">لماذا يعتبر نظام الاستخدام المفتوح أفضل؟</h3>
            <p className="text-purple-300/40 text-xs md:text-sm">مقارنة بين الجيل القديم والجيل الجديد من Majestic Flux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "استخدام بلا قيود شهرية أو حواجز مادية",
                desc: "استمتع بإجراء كافة أوامر الاتصال، والأنظمة الأساسية، وأنشطة أعضائك دون القلق بشأن نفاد رصيد الفلكس أو توقف البوت في منتصف الشهر."
              },
              {
                title: "سرعة معالجة وثبات كامل للبنية التحتية",
                desc: "تخصيص معالجة الطلبات وترتيب الأولويات يضمن ثبات سرعة البوت واستجابته اللحظية للأوامر تحت الضغط التشغيلي المكثف."
              },
              {
                title: "بيئة تشغيلية آمنة ومستقرة للأعضاء",
                desc: "توزيع الموارد والقدرات بشكل منظم يمنع تعطل العمليات ويضمن تجربة لعب ومحاكاة ممتعة وخالية من المشاكل البرمجية."
              },
              {
                title: "أسعار ثابتة وخيارات ترقية واضحة",
                desc: "لم تعد بحاجة للتفكير في شراء حزم فلكس إضافية. حدد الباقة التي تلائم رؤيتك واحتياجات مجتمعك وقم بالدفع مرة واحدة شهرياً فقط."
              }
            ].map((why, idx) => (
              <div key={idx} className="rounded-2xl p-6 border border-white/5 bg-[#000000]/40">
                <h4 className="text-xs md:text-sm font-bold text-purple-300 mb-2">{why.title}</h4>
                <p className="text-[11px] md:text-xs text-purple-200/50 leading-relaxed">{why.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rules & Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none mb-12">
          {/* Refund policies */}
          <section className="rounded-3xl border border-white/5 bg-[#000000]/40 p-8 shadow-md">
            <h2 className="text-lg font-bold text-purple-200 mb-5 flex items-center gap-2 border-b border-white/5 pb-3">
              <Info className="w-5 h-5 text-purple-400" />
              <span>سياسات الباقات والأمان</span>
            </h2>
            <ul className="space-y-3.5 text-purple-300/60 text-xs list-inside list-disc">
              <li>جميع عمليات تفعيل الباقات التشغيلية نهائية ولا تدعم استرداد المبالغ بعد اكتمال التفعيل بنجاح.</li>
              <li>الاستخدام غير المحدود للباقات يخضع لسياسة الاستهلاك العادل لمنع إساءة الاستخدام وحماية موارد الشبكة.</li>
              <li>الباقة تفعل لخادم (سيرفر) محدد ولا يمكن مشاركة الباقة أو نقلها لخادم آخر إلا بالتواصل مع الدعم الفني.</li>
              <li>تعديل الأسعار يخضع لتكاليف البنية التشغيلية وصيانة الخوادم وسيتم الإعلان مسبقاً قبل التعديل بوقت كافٍ.</li>
            </ul>
          </section>

          {/* Payment Warning Policy Banner */}
          <section className="rounded-3xl border border-red-500/20 bg-red-950/5 p-8 shadow-md">
            <h2 className="text-lg font-bold text-red-400 mb-5 flex items-center gap-2 border-b border-red-500/10 pb-3">
              <ShieldAlert className="w-5 h-5 text-red-500 animate-pulse" />
              <span>سياسة الدفع والأمان الرسمية</span>
            </h2>
            <div className="text-red-200/60 text-xs leading-relaxed space-y-3">
              <p>
                تخلي إدارة Majestic Flux مسؤوليتها الكاملة عن أي عمليات تفعيل أو سداد تتم خارج النظام البنكي المدمج في الموقع أو بعيداً عن{' '}
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
              <p className="font-bold text-yellow-400/80">
                ⚠️ تنبيه: لا يتم تعويض أو إرجاع أي مبالغ تم سدادها عبر أفراد أو وسطاء يدعون تمثيل فريق Majestic Flux.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <section className="text-center text-xs text-purple-400/35 pb-8">
          <p>Majestic Flux ليس مجرد بوت دسكورد عادي. هو نظام تشغيل متكامل لسيرفرات الحياة الواقعية مصمم للنمو، الاستقرار، والبنية التحتية الاحترافية.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Subscription;
