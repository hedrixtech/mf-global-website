import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { 
  BookOpen, 
  Sliders, 
  Terminal, 
  ShieldCheck, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Shield, 
  Clock, 
  Info,
  Layers,
  Scale
} from 'lucide-react';

const PartnershipPolicy: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('philosophy');

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const isExpanded = (id: string) => activeAccordion === id;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
        {/* Header */}
        <section
          className={`text-center py-16 md:py-20 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-900/15 text-purple-300 text-xs font-semibold tracking-wider mb-6">
            <Scale className="w-3.5 h-3.5 text-purple-400" />
            <span>OFFICIAL POLICY · وثيقة السياسات</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-purple-100 via-white to-purple-300 mb-6">
            سياسة الشراكات
          </h2>
          <p className="text-base md:text-lg text-purple-200/70 max-w-xl mx-auto leading-relaxed">
            الوثيقة الرسمية الحاكمة للعلاقة التعاقدية بين Majestic Flux وشركائها المعتمدين.
            يُشترط الاطلاع الكامل على هذه السياسة والموافقة عليها قبل الدخول في أي شراكة.
          </p>
          <div className="mt-6 h-px w-32 mx-auto bg-gradient-to-l from-transparent via-purple-500/30 to-transparent" />
        </section>

        {/* Accordions Container */}
        <div className={`space-y-4 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section 1: Philosophy */}
          <div className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded('philosophy') ? 'border-purple-500/30 shadow-lg shadow-purple-950/20' : 'border-white/5'}`}>
            <button
              onClick={() => toggleAccordion('philosophy')}
              className="w-full flex items-center justify-between p-6 md:p-8 text-right hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-purple-500/60 bg-purple-950/40 border border-purple-500/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono">01</span>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg md:text-xl font-bold text-purple-100">فلسفة الشراكة</h3>
                </div>
              </div>
              {isExpanded('philosophy') ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5 text-purple-400" />}
            </button>

            <div className={`transition-all duration-300 ease-in-out ${isExpanded('philosophy') ? 'max-h-[1000px] border-t border-white/5 p-6 md:p-8 bg-purple-950/10' : 'max-h-0 overflow-hidden'}`}>
              <div className="space-y-4 text-purple-200/80 leading-[1.9] text-base">
                <p>
                  تُعرَّف الشراكة في إطار Majestic Flux بوصفها علاقة هندسية ذات طابع استراتيجي،
                  تقوم على الالتزام المتبادل طويل الأمد. لا تُصنَّف الشراكة بأي حال من الأحوال
                  كاشتراك خدمي أو عقد مقاولات تقنية مؤقت.
                </p>
                <p>
                  تلتزم Hedrix Technology بتوفير بيئة تطوير مستقرة ومحمية لكل شريك، بما يشمل
                  نسخة مستقلة من المنتج، ومهندسًا مخصصًا، وخادمًا مستقلًا. في المقابل، يُتوقَّع
                  من الشريك الالتزام بالمدة المتفق عليها واحترام السياسات التشغيلية المعمول بها.
                </p>
                <p>
                  التخصيص قصير المدى محدود بشكل مقصود. بناء ميزات حقيقية ومستقرة يتطلب
                  وقتًا كافيًا للتصميم المعماري، والتنفيذ، والمراجعة الأمنية، واختبارات الجودة.
                </p>
                <div className="mt-6 py-4 px-5 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-start gap-3">
                  <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <p className="text-purple-300/80 text-sm leading-relaxed">
                    سلامة النظام الأساسي وأمنه أولوية غير قابلة للتفاوض. لن يتم
                    تجاوز هذا المبدأ لأي طلب تخصيص مهما كانت طبيعته أو مصدره.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Custom Features & Limits */}
          <div className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded('features') ? 'border-purple-500/30 shadow-lg shadow-purple-950/20' : 'border-white/5'}`}>
            <button
              onClick={() => toggleAccordion('features')}
              className="w-full flex items-center justify-between p-6 md:p-8 text-right hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-purple-500/60 bg-purple-950/40 border border-purple-500/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono">02</span>
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-lg md:text-xl font-bold text-purple-100">سياسة الميزات المخصصة وحدود الطلبات</h3>
                </div>
              </div>
              {isExpanded('features') ? <ChevronUp className="w-5 h-5 text-indigo-400" /> : <ChevronDown className="w-5 h-5 text-indigo-400" />}
            </button>

            <div className={`transition-all duration-300 ease-in-out ${isExpanded('features') ? 'max-h-[1200px] border-t border-white/5 p-6 md:p-8 bg-purple-950/10' : 'max-h-0 overflow-hidden'}`}>
              <div className="space-y-6 text-purple-200/80 leading-[1.9] text-base">
                <p>
                  يحق لكل شريك معتمد تقديم طلبات لميزات مخصصة وتعديلات على نسخته الخاصة،
                  وفقًا للحدود المحددة في خطة الشراكة المتفق عليها. تخضع جميع الطلبات للتقييم
                  الفني وفق المعايير التالية:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  {[
                    {
                      title: 'مدة الشراكة',
                      desc: 'الشراكات ذات المدد الأطول تتمتع بأولوية تنفيذ أعلى وسقف طلبات أوسع.',
                    },
                    {
                      title: 'التأثير على البنية الأساسية',
                      desc: 'الطلبات التي تمس الجوهر المعماري للنظام تخضع لمراجعة هندسية موسّعة.',
                    },
                    {
                      title: 'التوافق مع خارطة الطريق',
                      desc: 'تُمنح الأفضلية للطلبات المتسقة مع الرؤية التطويرية لـ Majestic Flux.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                      <span className="text-purple-100 font-bold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        {item.title}
                      </span>
                      <span className="text-purple-300/70 text-sm leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Limits Table */}
                <div className="mt-6 overflow-hidden rounded-xl border border-purple-500/20 bg-purple-950/30">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right">
                      <thead>
                        <tr className="border-b border-purple-500/20 bg-purple-950/60 text-purple-300">
                          <th className="py-4 px-6 font-semibold">الخطة</th>
                          <th className="py-4 px-6 text-center font-semibold">طلبات ميزات</th>
                          <th className="py-4 px-6 text-center font-semibold">طلبات تعديل</th>
                          <th className="py-4 px-6 text-center font-semibold">الأولوية</th>
                        </tr>
                      </thead>
                      <tbody className="text-purple-200/80 divide-y divide-purple-500/10">
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-4 px-6 font-bold text-purple-100">3 أشهر</td>
                          <td className="py-4 px-6 text-center">حتى 3</td>
                          <td className="py-4 px-6 text-center">حتى 5</td>
                          <td className="py-4 px-6 text-center">عادية</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-4 px-6 font-bold text-purple-100">6 أشهر</td>
                          <td className="py-4 px-6 text-center">حتى 7</td>
                          <td className="py-4 px-6 text-center">حتى 15</td>
                          <td className="py-4 px-6 text-center">متوسطة</td>
                        </tr>
                        <tr className="bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
                          <td className="py-4 px-6 font-bold text-amber-200">12 شهرًا</td>
                          <td className="py-4 px-6 text-center text-amber-200/80">غير محدودة</td>
                          <td className="py-4 px-6 text-center text-amber-200/80">غير محدودة</td>
                          <td className="py-4 px-6 text-center text-amber-200/80 font-semibold">عالية</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 py-5 px-6 rounded-xl bg-purple-950/40 border border-purple-500/20">
                  <p className="text-purple-300 font-semibold mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>الحالات التي تستوجب موافقة الإدارة العليا:</span>
                  </p>
                  <ul className="space-y-2 text-purple-300/70 text-sm">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>الأنظمة ذات الحجم الكبير أو التعقيد المعماري العالي</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>أي تعديل يطال المنطق الأساسي (Core Logic) للنظام</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>الميزات ذات الحساسية الأمنية أو التي تتطلب صلاحيات متقدمة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Engineer & Server */}
          <div className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded('infra') ? 'border-purple-500/30 shadow-lg shadow-purple-950/20' : 'border-white/5'}`}>
            <button
              onClick={() => toggleAccordion('infra')}
              className="w-full flex items-center justify-between p-6 md:p-8 text-right hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-purple-500/60 bg-purple-950/40 border border-purple-500/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono">03</span>
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-purple-300" />
                  <h3 className="text-lg md:text-xl font-bold text-purple-100">المهندس المخصص والبنية التحتية</h3>
                </div>
              </div>
              {isExpanded('infra') ? <ChevronUp className="w-5 h-5 text-purple-300" /> : <ChevronDown className="w-5 h-5 text-purple-300" />}
            </button>

            <div className={`transition-all duration-300 ease-in-out ${isExpanded('infra') ? 'max-h-[1000px] border-t border-white/5 p-6 md:p-8 bg-purple-950/10' : 'max-h-0 overflow-hidden'}`}>
              <div className="space-y-4 text-purple-200/80 leading-[1.9] text-base">
                <p>
                  يُخصَّص لكل شريك معتمد مهندس من الكادر الفني لـ Majestic Flux. يتولى
                  هذا المهندس فهم السياق التشغيلي للمشروع، وتنفيذ الميزات المعتمدة،
                  والتواصل المباشر بشأن التحديثات والتقدم التقني.
                </p>
                <p>
                  تتوفر لكل شريك بنية تحتية مستقلة تشمل خادمًا مخصصًا مقدّمًا مجانًا
                  من شركة Hedrix Technology، يعمل عليه نسخة البوت الخاصة بالشريك بشكل
                  منفصل تمامًا عن النسخة العامة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { plan: '3 أشهر', level: 'أولوية عادية', border: 'border-purple-500/10', glow: 'shadow-purple-950/20' },
                    { plan: '6 أشهر', level: 'أولوية متوسطة', border: 'border-indigo-500/20', glow: 'shadow-indigo-950/20' },
                    { plan: '12 شهرًا', level: 'أولوية عالية', border: 'border-amber-500/20', glow: 'shadow-amber-950/20 bg-amber-500/5' },
                  ].map((item) => (
                    <div
                      key={item.plan}
                      className={`text-center py-6 px-4 rounded-xl bg-purple-950/25 border ${item.border} ${item.glow} shadow-md`}
                    >
                      <div className="text-purple-100 font-bold text-base mb-1.5">{item.plan}</div>
                      <div className="text-purple-400 text-xs font-semibold flex items-center justify-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.level}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 py-4 px-5 rounded-xl bg-purple-950/40 border border-purple-500/20">
                  <p className="text-purple-300/80 text-sm leading-relaxed">
                    المهندس المخصص هو عضو رسمي في فريق Majestic Flux، يعمل وفق المعايير
                    الهندسية والسياسات التشغيلية المعتمدة داخليًا. لا يُعتبَر مقاولًا خارجيًا
                    أو مستقلًا خاصًا، ويبقى مسؤولًا أمام الإدارة الفنية عن جودة كل مخرج
                    وسلامة النظام.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Terms & Continuity */}
          <div className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded('terms') ? 'border-purple-500/30 shadow-lg shadow-purple-950/20' : 'border-white/5'}`}>
            <button
              onClick={() => toggleAccordion('terms')}
              className="w-full flex items-center justify-between p-6 md:p-8 text-right hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-purple-500/60 bg-purple-950/40 border border-purple-500/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono">04</span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-300" />
                  <h3 className="text-lg md:text-xl font-bold text-purple-100">المدة والاستمرارية والملكية الفكرية</h3>
                </div>
              </div>
              {isExpanded('terms') ? <ChevronUp className="w-5 h-5 text-indigo-300" /> : <ChevronDown className="w-5 h-5 text-indigo-300" />}
            </button>

            <div className={`transition-all duration-300 ease-in-out ${isExpanded('terms') ? 'max-h-[1200px] border-t border-white/5 p-6 md:p-8 bg-purple-950/10' : 'max-h-0 overflow-hidden'}`}>
              <div className="space-y-4 text-purple-200/80 leading-[1.9] text-base">
                <p>
                  تُحدَّد مدة الشراكة وفق الخطة المختارة (3 أشهر، 6 أشهر، أو 12 شهرًا).
                  تبدأ المدة من تاريخ إتمام الدفع والتفعيل الرسمي.
                </p>

                <div className="space-y-3 mt-4">
                  {[
                    'يمتلك الشريك حقوق الاستخدام الحصري للميزات المخصصة المبنية لصالحه طوال مدة الشراكة الفعّالة. تشمل هذه الحقوق استخدام الميزات وتشغيلها والاستفادة منها تجاريًا.',
                    'تظل الشيفرة البرمجية (Source Code) والبنية المعمارية الأساسية ملكًا فكريًا حصريًا لـ Hedrix Technology و Majestic Flux. لا يحق للشريك الوصول إلى الكود المصدري أو نسخه أو توزيعه بأي شكل.',
                    'عند انتهاء مدة الشراكة دون تجديد: تنتقل حقوق استخدام الميزات المخصصة بالكامل إلى Hedrix Technology، ويحق للشركة إعادة استخدامها أو دمجها في المنتج العام.',
                    'في حال التجديد: تبقى جميع حقوق الاستخدام سارية دون انقطاع، ويُعاد تفعيل التطوير المخصص والأولوية الخاصة بالدعم الفني.',
                    'لن يتم ضمان تنفيذ أي ميزة ما لم تحصل على موافقة رسمية مكتوبة من الإدارة الفنية.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                      <Shield className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Fair Use */}
          <div className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded('fairuse') ? 'border-purple-500/30 shadow-lg shadow-purple-950/20' : 'border-white/5'}`}>
            <button
              onClick={() => toggleAccordion('fairuse')}
              className="w-full flex items-center justify-between p-6 md:p-8 text-right hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-purple-500/60 bg-purple-950/40 border border-purple-500/20 w-8 h-8 rounded-lg flex items-center justify-center font-mono">05</span>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg md:text-xl font-bold text-purple-100">الاستخدام العادل والإنفاذ</h3>
                </div>
              </div>
              {isExpanded('fairuse') ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5 text-purple-400" />}
            </button>

            <div className={`transition-all duration-300 ease-in-out ${isExpanded('fairuse') ? 'max-h-[1000px] border-t border-white/5 p-6 md:p-8 bg-purple-950/10' : 'max-h-0 overflow-hidden'}`}>
              <div className="space-y-4 text-purple-200/80 leading-[1.9] text-base">
                <p>
                  تخضع جميع الشراكات لسياسة الاستخدام العادل. تحتفظ Hedrix Technology
                  بالحق في مراجعة أنماط الاستخدام واتخاذ الإجراءات المناسبة في حالة
                  رصد أي من المخالفات التالية:
                </p>
                <div className="space-y-2 mt-4">
                  {[
                    'تقديم طلبات متكررة بهدف استنزاف الموارد الهندسية دون غرض تشغيلي حقيقي.',
                    'محاولة الحصول على صلاحيات تتجاوز نطاق الخطة المتفق عليها.',
                    'إعادة توزيع النسخة الخاصة أو أي جزء منها لأطراف ثالثة.',
                    'أي استخدام يتعارض مع شروط خدمة Discord أو القوانين المعمول بها.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/10">
                      <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0 animate-pulse" />
                      <span className="text-sm md:text-base text-purple-200/70">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-5 rounded-xl bg-red-950/25 border border-red-500/20 flex items-start gap-3.5">
                  <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-300 font-bold mb-1.5 text-sm md:text-base">تحذير قانوني وإجرائي</h4>
                    <p className="text-red-200/70 text-sm leading-relaxed">
                      تحتفظ Hedrix Technology بالحق في تعليق أو إنهاء الشراكة فورًا، دون
                      إشعار مسبق، في حال ثبوت مخالفة جوهرية لأي من بنود هذه السياسة.
                      القرارات المتخذة في هذا الشأن نهائية وغير قابلة للطعن.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <section
          className={`mb-8 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '950ms' }}
        >
          <div className="text-center py-12">
            <div className="h-px w-24 mx-auto bg-gradient-to-l from-transparent via-purple-500/20 to-transparent mb-8" />
            <p className="text-purple-400/50 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
              هذه السياسة سارية المفعول اعتبارًا من تاريخ نشرها وتنطبق على جميع الشراكات
              القائمة والمستقبلية. تحتفظ Hedrix Technology بحق تعديل هذه السياسة في أي وقت.
              يُعتبر استمرار الشراكة بعد أي تعديل موافقةً ضمنية على البنود المحدّثة.
            </p>
            <p className="text-purple-500/40 text-xs mt-6 tracking-wider font-mono">
              Hedrix Technology · Majestic Flux · {new Date().getFullYear()}
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default PartnershipPolicy;
