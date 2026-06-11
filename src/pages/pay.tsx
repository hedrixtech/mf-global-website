import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import {
  AlertCircle,
  ChevronRight,
  Coins,
  Zap,
  Clock,
  ArrowRight,
  CreditCard,
  Layers,
  MessageSquare
} from "lucide-react";

// Pricing and plans mapping to show selected package details
const plans = {
  free: {
    name: "العضوية المجانية (Free)",
    amount: "0.00",
    features: "نظام اتصال محدود جداً • البوت الأساسي فقط • حدود استهلاك صارمة",
    type: "subscription",
  },
  core: {
    name: "باقة النواة (Core)",
    amount: "3.99",
    features: "تفعيل نظام الاتصال الأساسي بالكامل • ميزات ديسكورد القياسية • طابور معالجة سريع • استخدام غير محدود • لوحة ويب أساسية",
    type: "subscription",
  },
  pro: {
    name: "الباقة الاحترافية (Pro)",
    amount: "7.99",
    features: "نظام الاتصال المتقدم بالكامل • لوحة ويب متطورة • أنظمة المدن والدول الكبرى • أولوية تنفيذ قصوى • استخدام غير محدود",
    type: "subscription",
  },
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Pay: React.FC = () => {
  const query = useQuery();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const planKey = query.get("plan") as keyof typeof plans | null;
  const planInfo = planKey && plans[planKey] ? plans[planKey] : null;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-purple-300/60 mb-8 select-none">
          <Link to="/" className="hover:text-purple-300 transition-colors">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5 text-purple-500/40" />
          <Link to="/plans" className="hover:text-purple-300 transition-colors">الاشتراكات والأسعار</Link>
          <ChevronRight className="w-3.5 h-3.5 text-purple-500/40" />
          <span className="text-purple-300">بوابة التفعيل</span>
        </div>

        {/* Outer animations container */}
        <div 
          className={`grid grid-cols-1 ${planInfo ? "lg:grid-cols-12" : "max-w-2xl mx-auto"} gap-8 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main info card */}
          <div className={`${planInfo ? "lg:col-span-7" : "w-full"} flex flex-col gap-6`}>
            
            {/* Header info */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 bg-purple-950/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3.5 mb-6 text-purple-400">
                <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/25 shadow-lg shadow-purple-500/15">
                  <CreditCard className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">تحديث نظام المدفوعات</h3>
                  <p className="text-xs text-purple-300/60 mt-0.5">Majestic Flux Infrastructure</p>
                </div>
              </div>

              {/* PayPal Removal Notice */}
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5.5 h-5.5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-amber-200">تم إيقاف الدفع عبر PayPal مؤقتاً</h4>
                  <p className="text-xs md:text-sm text-purple-200/80 leading-relaxed">
                    نظراً لعملنا على تطوير وتوسيع خيارات الدفع لتوفير السرعة والمرونة القصوى، قمنا بالاستغناء عن منصة PayPal.
                  </p>
                </div>
              </div>

              {/* LemonSqueezy Integration Promise */}
              <div className="rounded-2xl border border-purple-500/25 bg-purple-900/15 p-4 mb-6 flex items-start gap-3">
                <Clock className="w-5.5 h-5.5 text-purple-400 shrink-0 mt-0.5 animate-pulse" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-purple-200">الدمج الجاري لمنصة</h4>
                  <p className="text-xs md:text-sm text-purple-200/80 leading-relaxed">
                    نحن نعمل حالياً على دمج نظام <span className="text-purple-300 font-bold">LemonSqueezy</span> لتوفير عمليات دفع آلية وفورية مباشرة بالبطاقات الائتمانية دون أي تأخير. سنطلقها قريباً فور اكتمال الاختبارات.
                  </p>
                </div>
              </div>

              {/* Current Procedure Steps */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-white mb-2">كيفية إتمام التفعيل حالياً؟</h4>
                
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">١</div>
                  <p className="text-xs md:text-sm text-purple-200/70 leading-relaxed">
                    اضغط على زر <strong>"الانتقال إلى الدعم الفني"</strong> بالأسفل ليتم توجيهك لخادم الديسكورد الرسمي.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">٢</div>
                  <p className="text-xs md:text-sm text-purple-200/70 leading-relaxed">
                    قم بفتح تذكرة دعم فني جديدة (Ticket) من خلال قسم الدعم المخصص في السيرفر.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">٣</div>
                  <p className="text-xs md:text-sm text-purple-200/70 leading-relaxed">
                    زود فريق الدعم باسم الباقة التي اخترتها، وسيتم إرشادك لإتمام الدفع وتفعيل الباقة لسيرفرك يدوياً فوراً.
                  </p>
                </div>
              </div>

              {/* Discord Support CTA Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="https://discord.gg/weg5eGG5cr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto"
                >
                  <Button primary>
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58 1.334 18.061a.066.066 0 0 0 .038.035c1.282.946 2.513 1.51 3.738 1.884a.07.07 0 0 0 .078-.034c.18-.374.387-.866.53-1.246a11.16 11.16 0 0 0 5.584 0c.143.38.35.872.53 1.246a.07.07 0 0 0 .078.034c1.225-.374 2.456-.938 3.738-1.884a.066.066 0 0 0 .038-.035c1.472-3.953 1.055-7.533-.305-9.664a.07.07 0 0 0-.032-.027ZM8.02 15.33c-1.18 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.104 2.157 2.418 0 1.334-.956 2.419-2.157 2.419Zm7.975 0c-1.18 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.104 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z" />
                      </svg>
                      الانتقال إلى الدعم الفني
                    </span>
                  </Button>
                </a>
                <Link to="/plans" className="w-full sm:w-auto">
                  <Button>
                    <span className="flex items-center gap-1">
                      <ArrowRight className="w-4 h-4" />
                      عرض باقات الاشتراك
                    </span>
                  </Button>
                </Link>
              </div>

            </div>
          </div>

          {/* Sidebar with chosen plan details */}
          {planInfo && (
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6 border border-white/5 bg-[#000000]/40 relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5 text-purple-300">
                    <Layers className="w-4.5 h-4.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">تفاصيل الطلب المحدد</span>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full border border-purple-500/20 bg-purple-900/10 text-purple-300 text-xs font-semibold mb-4">
                    🚀 تفعيل باقة تشغيلية غير محدودة
                  </div>

                  <h4 className="text-xl md:text-2xl font-extrabold text-white mb-2">
                    {planInfo.name}
                  </h4>
                  
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200 mb-6">
                    ${planInfo.amount}
                    <span className="text-xs text-purple-300/50 font-normal mr-1">
                      / شهرياً
                    </span>
                  </div>

                  <div className="space-y-3 bg-black/10 rounded-2xl p-4 border border-white/5 mb-6 font-almarai">
                    <div className="text-purple-300/80 text-xs font-bold mb-2">المزايا المشمولة:</div>
                    <div className="text-xs text-purple-200/70 leading-relaxed">
                      {planInfo.features}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-purple-500/5 border border-purple-500/10 p-3.5">
                  <div className="flex gap-2.5">
                    <MessageSquare className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-purple-200/70 leading-relaxed">
                      انسخ اسم الباقة المحددة أعلاه (<span className="text-purple-300 font-bold">{planInfo.name}</span>) وزوّد به موظف الدعم الفني لمباشرة التفعيل الفوري لسيرفرك.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Pay;
