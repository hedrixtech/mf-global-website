import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Shield, Sparkles, Award, ChevronDown, ChevronUp } from 'lucide-react';

const PartnershipPlans: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [openFaq, setOpenFaq] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      q: 'هل يمكنني الترقية من خطة لأخرى؟',
      a: 'نعم، يمكنك الترقية في أي وقت من خلال التواصل مع الدعم الفني، حيث يتم احتساب الفرق المالي المتبقي من مدة اشتراكك الحالي وتعديل الباقة فوراً.',
    },
    {
      q: 'ماذا يحدث بعد انتهاء مدة الشراكة؟',
      a: 'تظل جميع الميزات المخصصة التي تم بناؤها وتطبيقها على نسختك فعالة وتعمل، ولكن يتوقف الدعم الفني المخصص وأولوية التطوير والتحديثات. يمكنك التجديد في أي وقت للحفاظ على استمرارية الدعم الهندسي.',
    },
    {
      q: 'هل يوجد رسوم إضافية مخفية؟',
      a: 'لا، السعر المعلن شامل ومغطي لكافة المتطلبات: نسخة البوت الخاصة، الخادم المخصص، صيانة البنية التحتية، والدعم البرمجي المباشر حسب خصائص باقتك.',
    },
    {
      q: 'ما المقصود بحدود طلبات الميزات والتعديلات؟',
      a: 'هو الحد الأقصى لعدد الميزات الكبرى أو التعديلات الهيكلية التي تطلب من المهندس المخصص برمجتها لنسختك خلال فترة الشراكة. الباقة السنوية تمنحك سقفاً مفتوحاً لجميع طلباتك البرمجية.',
    },
    {
      q: 'كيف أبدأ الدفع والتفعيل؟',
      a: 'ادخل إلى سيرفر Discord الرسمي الخاص بنا وافتح تذكرة دعم فني جديدة (شراكة). سيتواصل معك أحد المهندسين خلال 24 ساعة لبدء تهيئة الخادم وتجهيز النسخة الخاصة بك.',
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 space-y-16" dir="rtl">

        {/* Header */}
        <section
          className={`text-center py-12 transition-all duration-1000 ease-out select-none ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/30 text-purple-300 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            <span>خطة التوسع البرمجية</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-white to-indigo-200 mb-6 drop-shadow-sm">
            خطط الشراكة البرمجية
          </h2>
          
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto leading-relaxed mb-6">
            اختر الخطة المناسبة لسيرفرك البرمجي. جميع خطط الشراكة تمنحك نسخة بوت خاصة وخادماً مخصصاً مستقلاً ومهندساً برمجياً لتنفيذ متطلباتك.
          </p>

          {/* Limited Offer Banner */}
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500
              ${pulse
                ? 'bg-red-500/15 border-red-500/40 shadow-lg shadow-red-900/10'
                : 'bg-red-500/10 border-red-500/25'
              }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-red-300 text-sm font-semibold">
              عرض خاص ولفترة محدودة — خصومات تصل إلى 33% على الشراكات
            </span>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">

          {/* Plan 1: 3 Months */}
          <div
            className={`glass-panel rounded-3xl p-8 border border-white/5 transition-all duration-700 ease-out flex flex-col justify-between relative select-none
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-6xl font-extrabold text-white">3</span>
                  <span className="text-lg text-purple-300">أشهر</span>
                </div>
                <div className="mt-1.5 text-xs font-semibold text-purple-400">أولوية عادية بالدعم والتنفيذ</div>
              </div>

              <div className="text-center py-4 bg-purple-950/30 rounded-2xl border border-white/5">
                <div className="text-purple-400/50 text-sm line-through">$44.99</div>
                <div className="text-3xl font-extrabold text-white">$34.90</div>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                  توفير 22%
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="space-y-3.5 text-sm">
                {[
                  { label: 'نسخة خاصة بعلامتك التجارية', ok: true },
                  { label: 'مهندس مخصص لمشروعك', ok: true },
                  { label: 'خادم مخصص مجاني من Hedrix', ok: true },
                  { label: 'أولوية الدعم الفني', value: 'عادية' },
                  { label: 'طلبات الميزات المخصصة', value: 'حتى 3 ميزات' },
                  { label: 'تعديلات وصيانة برمجية', value: 'حتى 5 تعديلات' },
                ].map((f, idx) => (
                  <div key={idx} className="flex justify-between items-center text-purple-200/80">
                    <span>{f.label}</span>
                    {f.ok ? (
                      <span className="text-emerald-400 font-bold">✓</span>
                    ) : (
                      <span className="text-white font-bold text-xs bg-white/5 px-2 py-0.5 rounded">{f.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 space-y-4">
              <a
                href="https://discord.gg/weg5eGG5cr"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-2xl text-sm font-bold bg-white/5 hover:bg-white/10 text-purple-200 border border-white/10 transition-colors"
              >
                ابدأ الشراكة الآن
              </a>
            </div>
          </div>

          {/* Plan 2: 6 Months (Most Popular) */}
          <div
            className={`glass-panel rounded-3xl p-8 border border-purple-500/30 transition-all duration-700 ease-out flex flex-col justify-between relative lg:scale-[1.04] shadow-xl shadow-purple-500/5 select-none
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '350ms' }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-black shadow-md flex items-center gap-1 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5" />
              <span>الباقة الأكثر طلباً</span>
            </div>

            <div className="space-y-6">
              <div className="text-center mt-3">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-6xl font-extrabold text-white">6</span>
                  <span className="text-lg text-purple-300">أشهر</span>
                </div>
                <div className="mt-1.5 text-xs font-semibold text-purple-300">أولوية متوسطة بالتحديثات والمهام</div>
              </div>

              <div className="text-center py-4 bg-purple-950/50 rounded-2xl border border-purple-500/20">
                <div className="text-purple-400/50 text-sm line-through">$89.99</div>
                <div className="text-3xl font-extrabold text-white">$69.90</div>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                  توفير 22%
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="space-y-3.5 text-sm">
                {[
                  { label: 'نسخة خاصة بعلامتك التجارية', ok: true },
                  { label: 'مهندس مخصص لمشروعك', ok: true },
                  { label: 'خادم مخصص مجاني من Hedrix', ok: true },
                  { label: 'أولوية الدعم الفني', value: 'متوسطة' },
                  { label: 'طلبات الميزات المخصصة', value: 'حتى 7 ميزات' },
                  { label: 'تعديلات وصيانة برمجية', value: 'حتى 15 تعديل' },
                  { label: 'مراجعة أمنية متكاملة للوظائف', ok: true },
                ].map((f, idx) => (
                  <div key={idx} className="flex justify-between items-center text-purple-200/80">
                    <span>{f.label}</span>
                    {f.ok ? (
                      <span className="text-emerald-400 font-bold">✓</span>
                    ) : (
                      <span className="text-white font-bold text-xs bg-white/5 px-2 py-0.5 rounded">{f.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-purple-500/10">
              <a
                href="https://discord.gg/weg5eGG5cr"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 border border-purple-400/25 transition-colors"
              >
                تواصل للتفعيل الفوري
              </a>
            </div>
          </div>

          {/* Plan 3: 12 Months */}
          <div
            className={`glass-panel rounded-3xl p-8 border border-amber-500/30 transition-all duration-700 ease-out flex flex-col justify-between relative shadow-lg shadow-amber-500/5 select-none
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black shadow-md flex items-center gap-1 whitespace-nowrap">
              <Award className="w-3.5 h-3.5" />
              <span>أعلى نسبة توفير</span>
            </div>

            <div className="space-y-6">
              <div className="text-center mt-3">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-6xl font-extrabold text-white">12</span>
                  <span className="text-lg text-purple-300">شهراً</span>
                </div>
                <div className="mt-1.5 text-xs font-semibold text-amber-300">أولوية برمجية مطلقة وقصوى</div>
              </div>

              <div className="text-center py-4 bg-purple-950/30 rounded-2xl border border-amber-500/20">
                <div className="text-purple-400/50 text-sm line-through">$179.99</div>
                <div className="text-3xl font-extrabold text-white">$119.90</div>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                  توفير 33%
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="space-y-3.5 text-sm">
                {[
                  { label: 'نسخة خاصة بعلامتك التجارية', ok: true },
                  { label: 'مهندس مخصص لمشروعك', ok: true },
                  { label: 'خادم مخصص مجاني من Hedrix', ok: true },
                  { label: 'أولوية الدعم الفني', value: 'قصوى' },
                  { label: 'طلبات الميزات المخصصة', value: 'غير محدودة' },
                  { label: 'تعديلات وصيانة برمجية', value: 'غير محدودة' },
                  { label: 'أولوية تنفيذ الوظائف والأفكار', ok: true },
                ].map((f, idx) => (
                  <div key={idx} className="flex justify-between items-center text-purple-200/80">
                    <span>{f.label}</span>
                    {f.ok ? (
                      <span className="text-amber-400 font-bold">✓</span>
                    ) : (
                      <span className="text-amber-200 font-bold text-xs bg-amber-500/10 px-2 py-0.5 rounded">{f.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5">
              <a
                href="https://discord.gg/weg5eGG5cr"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-2xl text-sm font-bold bg-white/5 hover:bg-white/10 text-amber-300 border border-amber-500/30 hover:border-amber-500/50 transition-colors"
              >
                تفعيل الباقة السنوية
              </a>
            </div>
          </div>

        </section>

        {/* Comparison: Partner vs Regular User */}
        <section className="glass-panel rounded-3xl border border-white/5 p-8 md:p-10 shadow-lg select-none">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-white">الفرق بين الشريك والمستخدم العادي</h3>
            <p className="text-sm text-purple-300/70">ميزات وامتيازات نظام الشركاء البرمجي</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm md:text-base border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-purple-300 font-bold">
                  <th className="py-4 px-4">الميزة</th>
                  <th className="py-4 px-4 text-center">المستخدم العادي</th>
                  <th className="py-4 px-4 text-center text-amber-300">الشريك البرمجي</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-purple-200/85">
                {[
                  { feature: 'إصدار البوت المستخدم', normal: 'نسخة عامة مشتركة لجميع السيرفرات', partner: 'نسخة مخصصة تماماً باسمك وشعارك وهويتك' },
                  { feature: 'خادم التشغيل والاستضافة', normal: 'خوادم مشتركة (قد تتأثر بضغط الاستخدام)', partner: 'خادم سحابي مخصص ومستقل مجاناً من Hedrix' },
                  { feature: 'فريق الدعم الهندسي', normal: 'نظام التذاكر العام حسب الأولوية وتوفر الفريق', partner: 'مهندس برمجي مخصص متاح لك وملم بمتطلباتك' },
                  { feature: 'طلبات الميزات وتعديل الكود', normal: 'غير متاح (تلتزم بنظام الميزات المتاحة عامة)', partner: 'متاح ومكفول برمجياً وتطويرياً حسب خطتك' },
                  { feature: 'أولوية التنفيذ والصيانة', normal: 'تخضع لتوقيت التحديثات الشهرية العامة', partner: 'فورية وأولوية برمجية قصوى تتماشى مع خطتك' },
                  { feature: 'تقارير الأداء واستهلاك الرصيد', normal: 'تقارير عامة وأساسية ضمن لوحة تحكم بسيطة', partner: 'تقارير تفصيلية دورية وإحصائيات مخصصة' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-purple-300/50">{row.normal}</td>
                    <td className="py-4 px-4 text-center text-amber-200/90 font-medium">{row.partner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Money-back Guarantee */}
        <section className="glass-panel rounded-3xl border border-emerald-500/20 bg-emerald-950/5 p-8 text-center select-none space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-emerald-300">
            ضمان الرضا وتأمين الشراكة — 7 أيام
          </h3>
          <p className="text-purple-200/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            نحن ملتزمون بتقديم أعلى مستويات الخدمة البرمجية. إذا لم تكن راضياً عن كفاءة البوت أو سرعة استجابة المهندس المخصص خلال الـ 7 أيام الأولى من التفعيل، يمكنك طلب إلغاء الشراكة واسترداد كامل المبلغ المسدد فوراً ودون تعقيد.
          </p>
        </section>

        {/* Collapsible FAQ Section */}
        <section className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8">أسئلة شائعة حول الشراكات</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq[idx] || false;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex justify-between items-center text-right font-bold text-white hover:bg-white/5 transition-colors focus:outline-none gap-4"
                  >
                    <span>{item.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5 text-purple-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 text-sm text-purple-200/80 leading-relaxed border-t border-white/5 bg-purple-950/10">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Commitment Philosophy */}
        <section className="glass-panel rounded-3xl p-10 md:p-14 border border-white/5 text-center select-none space-y-5">
          <h3 className="text-2xl font-bold text-white">الالتزام المتبادل هو حجر الأساس</h3>
          <p className="text-purple-200/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            نحن نحد من عدد الشراكات المفتوحة شهرياً لنضمن حصول كل شريك على الدعم الهندسي الكافي والتطوير الفوري لأفكاره. الجودة البرمجية والاستقرار التشغيلي لشبكتك هو ما نضعه نصب أعيننا دائماً.
          </p>
          <div className="pt-2">
            <Link
              to="/partners/policy"
              className="text-purple-300 hover:text-purple-200 text-sm font-semibold transition-colors border-b border-purple-500/30 hover:border-purple-300 pb-0.5"
            >
              اطّلع على وثيقة سياسة الشراكات الرسمية
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default PartnershipPlans;
