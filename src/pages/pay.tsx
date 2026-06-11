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
    amount: "8.99",
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
                  <h3 className="text-2xl font-extrabold text-white">تفعيل العضوية المميزة</h3>
                  <p className="text-xs text-purple-300/60 mt-0.5">Majestic Flux Infrastructure</p>
                </div>
              </div>

              {/* Integrated Billing Notice */}
              <div className="rounded-2xl border border-purple-500/25 bg-purple-900/15 p-4 mb-6 flex items-start gap-3">
                <Zap className="w-5.5 h-5.5 text-purple-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-purple-200">الترقية التلقائية والمدفوعات المتكاملة</h4>
                  <p className="text-xs md:text-sm text-purple-200/80 leading-relaxed">
                    تمت ترقية نظام المدفوعات لدينا بنجاح ودمجه بالكامل داخل لوحة التحكم الرسمية لتفعيل الباقات وتجديدها بشكل فوري وبشكل مؤتمت بالكامل.
                  </p>
                </div>
              </div>

              {/* Current Procedure Steps */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-white mb-2">خطوات تفعيل وترقية الاشتراك:</h4>
                
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">١</div>
                  <p className="text-xs md:text-sm text-purple-200/70 leading-relaxed">
                    التوجه إلى <strong>لوحة التحكم (الداشبورد)</strong> بالضغط على الزر أدناه.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">٢</div>
                  <p className="text-xs md:text-sm text-purple-200/70 leading-relaxed">
                    اختيار السيرفر أو الخادم الذي تريد ترقية خطته أو تفعيلها.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">٣</div>
                  <p className="text-xs md:text-sm text-purple-200/70 leading-relaxed">
                    الذهاب إلى قسم <strong>الفوترة والمدفوعات (Billing & Payments)</strong> داخل إعدادات السيرفر.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">٤</div>
                  <p className="text-xs md:text-sm text-purple-200/70 leading-relaxed">
                    اختيار الترقية أو تجديد خطتك الحالية مباشرة وبطريقة آمنة.
                  </p>
                </div>
              </div>

              {/* Dashboard CTA Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="https://majesticflux-dashboard.vercel.app/guilds" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto"
                >
                  <Button primary>
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-300" />
                      الانتقال إلى لوحة التحكم
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
                    <Zap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-purple-200/70 leading-relaxed">
                      بإمكانك تفعيل أو ترقية باقتك مباشرة وبشكل آلي عبر الانتقال إلى لوحة التحكم واختيار السيرفر ثم قسم الفوترة والمدفوعات.
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
