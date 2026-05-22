import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import {
  Gift,
  Users,
  Calendar,
  ChevronRight,
  Coins,
  Info,
  ShieldAlert,
  Sparkles,
  Share2
} from "lucide-react";

const Affiliate: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in" dir="rtl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-purple-300/60 mb-8 select-none">
          <Link to="/" className="hover:text-purple-300 transition-colors">الرئيسية</Link>
          <ChevronRight className="w-3.5 h-3.5 text-purple-500/40" />
          <span className="text-purple-300">نظام الدعوات (Invite System)</span>
        </div>

        {/* Hero Banner */}
        <section
          className={`relative text-center py-12 md:py-16 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-900/15 text-purple-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>نظام مكافآت الدعوات الحصري V2</span>
          </div>

          <h2 className="relative text-3xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-purple-100 via-white to-purple-300 mb-4 tracking-tight">
            ضاعف نمو مجتمعك الرقمي
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              واحصل على 2,000 Flux مجاناً!
            </span>
          </h2>

          <p className="relative text-base md:text-lg text-purple-200/80 max-w-3xl mx-auto leading-relaxed mb-8">
            بصفتك مستخدما لـ Majestic Flux، يمكنك توليد كود الدعوة المخصص لخادمك ونشره. احصل على مكافأة فورية ولا نهائية تضاف لرصيدك عن كل خادم جديد يتم تفعيله من خلالك، بينما يستمتع المدعوون بـ Flux مجاني للبدء!
          </p>
        </section>

        {/* 2,000 + 2,000 Reward Display Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Card 1: Inviter */}
          <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-purple-950/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl border border-purple-500/20 flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">صاحب كود الدعوة (أنت)</h3>
              <p className="text-sm text-purple-200/65 leading-relaxed mb-6">
                اربح **2,000 Flux** عن **كل عملية استخدام ناجحة** لكود الدعوة الخاص بك. لا يوجد حد أقصى للربح؛ كلما دعوت خوادم أكثر مؤهلة، زادت حصيلة خادمك من Flux لتشغيل الأنظمة والخصائص المتقدمة.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-purple-300">
              <span className="text-sm font-semibold">المكافأة الترويجية (لكل تفعيل)</span>
              <span className="text-2xl font-extrabold flex items-center gap-1">
                <Coins className="w-5 h-5 text-amber-400" />
                +2,000 <span className="text-xs font-medium">Flux</span>
              </span>
            </div>
          </div>

          {/* Card 2: Invitee */}
          <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-purple-950/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">الخادم الجديد (المدعو)</h3>
              <p className="text-sm text-purple-200/65 leading-relaxed mb-6">
                احصل على مكافأة ترحيبية فورية قدرها **2,000 Flux** مجانًا عند تفعيلك لكود الدعوة لأول مرة. يمكن للخادم الجديد استخدام **كود واحد فقط** للحصول على هذه المكافأة الترحيبية لتساعده في إعداد خادمه.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-indigo-300">
              <span className="text-sm font-semibold">المكافأة الترحيبية (لمرة واحدة)</span>
              <span className="text-2xl font-extrabold flex items-center gap-1">
                <Coins className="w-5 h-5 text-amber-400" />
                +2,000 <span className="text-xs font-medium">Flux</span>
              </span>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-white mb-2">كيف تعمل منظومة الدعوات؟</h3>
            <p className="text-sm text-purple-200/60">بضع خطوات بسيطة لتأمين رصيد تشغيل خادمك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-purple-950/5 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-4xl font-extrabold text-purple-500/20 mb-4 block">01</span>
                <h4 className="text-base font-bold text-white mb-2">احصل على الكود</h4>
                <p className="text-xs text-purple-200/60 leading-relaxed">
                  بمجرد تفعيل البوت في خادمك، يتم تلقائياً تعيين كود دعوة فريد وعشوائي مكون من 5 أحرف وأرقام (مثال: `F3X9A`) خاص بخادمك.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-purple-950/5 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-4xl font-extrabold text-purple-500/20 mb-4 block">02</span>
                <h4 className="text-base font-bold text-white mb-2">استخدم كود الدعوة الأول</h4>
                <p className="text-xs text-purple-200/60 leading-relaxed">
                  إذا كان خادمك جديداً، يمكنك إدخال كود دعوة نشط لمرة واحدة فقط لتقوم بمكافأة صاحب الكود والحصول على **2,000 Flux** ترحيبية فوراً.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-purple-950/5 relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-4xl font-extrabold text-purple-500/20 mb-4 block">03</span>
                <h4 className="text-base font-bold text-white mb-2">انشر كودك واكسب باستمرار</h4>
                <p className="text-xs text-purple-200/60 leading-relaxed">
                  بعد حصولك على الهدية الترحيبية، انشر كود الدعوة الخاص بك للخوادم والمجتمعات الأخرى لتكسب **2,000 Flux** إضافية عن كل تفعيل ناجح!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rules & Eligibility Section */}
        <section className="mb-16">
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 bg-purple-950/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-6">
              <ShieldAlert className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl md:text-2xl font-extrabold text-white">شروط الاستحقاق ومكافحة التلاعب (V2)</h3>
            </div>

            <p className="text-sm md:text-base text-purple-200/70 mb-8 leading-relaxed">
              للحفاظ على عدالة النظام وضمان مكافأة الخوادم والمالكين الحقيقيين والنشطين، يتم فحص وتطبيق القواعد التالية تلقائياً عند إدخال وتفعيل أي كود دعوة:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Rule 1 */}
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <h4 className="text-sm font-bold text-white">عمر السيرفر الجديد</h4>
                </div>
                <div className="text-3xl font-extrabold text-purple-300 mb-2">14 يوم+</div>
                <p className="text-xs text-purple-200/60 leading-relaxed">
                  يجب أن يكون قد مضى على إنشاء السيرفر الجديد 14 يوماً على الأقل في ديسكورد، لضمان استقرار الخادم وعدم كونه مؤقتاً.
                </p>
              </div>

              {/* Rule 2 */}
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <h4 className="text-sm font-bold text-white">عدد أعضاء السيرفر</h4>
                </div>
                <div className="text-3xl font-extrabold text-purple-300 mb-2">100 عضو+</div>
                <p className="text-xs text-purple-200/60 leading-relaxed">
                  يجب أن يحتوي السيرفر على 100 عضو بشري حقيقي على الأقل. لا يتم احتساب حسابات البوتات مطلقاً لضمان وجود مجتمع فعلي.
                </p>
              </div>

              {/* Rule 3 */}
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="w-5 h-5 text-purple-400" />
                  <h4 className="text-sm font-bold text-white">عمر حساب المالك</h4>
                </div>
                <div className="text-3xl font-extrabold text-purple-300 mb-2">30 يوم+</div>
                <p className="text-xs text-purple-200/60 leading-relaxed">
                  يجب ألا يقل عمر حساب مالك السيرفر في منصة ديسكورد عن 30 يوماً لمنع إنشاء حسابات وسيرفرات وهمية بهدف تجميع رصيد غير شرعي.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <p className="text-xs text-purple-300/80 leading-relaxed">
                <strong>تنويه أمني:</strong> يمتلك نظام الدعوات خوارزمية ذكاء اصطناعي تفحص تلقائياً نمط الخوادم وتصفي حسابات السبام والحسابات البديلة. أي محاولات استغلال للنظام ستؤدي إلى حظر السيرفر والمالك بشكل نهائي من منصة Majestic Flux بالكامل دون سابق إنذار.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Call to action */}
        <section className="text-center py-8">
          <div className="glass-panel rounded-3xl p-8 border border-white/5 bg-purple-950/10 relative overflow-hidden max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">مستعد لزيادة رصيدك من الـ Flux؟</h3>
            <p className="text-xs text-purple-300/60 leading-relaxed mb-6">
              ابدأ الآن بدعوة خادم Majestic Flux لمجتمعك، واحصل على كود الدعوة الخاص بك لتنشره بين مجتمعات ديسكورد الأخرى.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer">
                <Button primary className="px-8 py-3">
                  تواصل مع الدعم الفني لدعوة البوت
                </Button>
              </a>
              <Link to="/plans">
                <Button className="border border-white/10 hover:bg-white/5 text-white px-8 py-3">
                  استكشف خطط الـ Flux
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Affiliate;
