import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const PartnershipPolicy: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0" dir="rtl">

        {/* Header */}
        <section
          className={`text-center py-16 md:py-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-900/20 text-purple-300/60 text-xs font-medium tracking-wider mb-6">
            OFFICIAL POLICY
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-200 via-white to-purple-300 mb-6">
            سياسة الشراكات
          </h2>
          <p className="text-base text-purple-300/50 max-w-xl mx-auto leading-relaxed">
            الوثيقة الرسمية الحاكمة للعلاقة التعاقدية بين Majestic Flux وشركائها المعتمدين.
            يُشترط الاطلاع الكامل على هذه السياسة والموافقة عليها قبل الدخول في أي شراكة.
          </p>
          <div className="mt-6 h-px w-32 mx-auto bg-gradient-to-l from-transparent via-purple-500/30 to-transparent" />
        </section>

        {/* Section A: Philosophy */}
        <section
          className={`mb-6 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="backdrop-blur-md bg-purple-900/10 rounded-2xl p-8 md:p-10 border border-purple-500/8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-purple-500/50 tracking-widest">01</span>
              <h3 className="text-xl md:text-2xl font-bold text-purple-100">
                فلسفة الشراكة
              </h3>
            </div>
            <div className="space-y-4 text-purple-200/65 leading-[1.9] text-[15px]">
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
              <div className="mt-6 py-4 px-5 rounded-xl bg-purple-950/40 border border-purple-500/8">
                <p className="text-purple-300/45 text-sm">
                  سلامة النظام الأساسي وأمنه أولوية غير قابلة للتفاوض. لن يتم
                  تجاوز هذا المبدأ لأي طلب تخصيص مهما كانت طبيعته أو مصدره.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: Custom Features */}
        <section
          className={`mb-6 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <div className="backdrop-blur-md bg-purple-900/10 rounded-2xl p-8 md:p-10 border border-purple-500/8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-purple-500/50 tracking-widest">02</span>
              <h3 className="text-xl md:text-2xl font-bold text-purple-100">
                سياسة الميزات المخصصة وحدود الطلبات
              </h3>
            </div>
            <div className="space-y-4 text-purple-200/65 leading-[1.9] text-[15px]">
              <p>
                يحق لكل شريك معتمد تقديم طلبات لميزات مخصصة وتعديلات على نسخته الخاصة،
                وفقًا للحدود المحددة في خطة الشراكة المتفق عليها. تخضع جميع الطلبات للتقييم
                الفني وفق المعايير التالية:
              </p>

              <div className="space-y-3 pr-2 mt-2">
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
                  <div key={i} className="flex items-start gap-3 py-3 px-4 rounded-lg bg-purple-950/20 border border-purple-500/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/40 mt-2.5 shrink-0" />
                    <div>
                      <span className="text-purple-100 font-medium">{item.title}</span>
                      <span className="text-purple-300/50 mx-2">—</span>
                      <span className="text-purple-200/55">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Limits Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-purple-500/10">
                      <th className="text-right py-3 pr-4 text-purple-300/50 font-medium">الخطة</th>
                      <th className="text-center py-3 text-purple-300/50 font-medium">طلبات ميزات</th>
                      <th className="text-center py-3 text-purple-300/50 font-medium">طلبات تعديل</th>
                      <th className="text-center py-3 pl-4 text-purple-300/50 font-medium">الأولوية</th>
                    </tr>
                  </thead>
                  <tbody className="text-purple-200/60">
                    <tr className="border-b border-purple-500/5">
                      <td className="py-3 pr-4 text-purple-100 font-medium">3 أشهر</td>
                      <td className="py-3 text-center">حتى 3</td>
                      <td className="py-3 text-center">حتى 5</td>
                      <td className="py-3 text-center pl-4">عادية</td>
                    </tr>
                    <tr className="border-b border-purple-500/5">
                      <td className="py-3 pr-4 text-purple-100 font-medium">6 أشهر</td>
                      <td className="py-3 text-center">حتى 7</td>
                      <td className="py-3 text-center">حتى 15</td>
                      <td className="py-3 text-center pl-4">متوسطة</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-amber-200/80 font-medium">12 شهرًا</td>
                      <td className="py-3 text-center text-amber-200/70">غير محدودة</td>
                      <td className="py-3 text-center text-amber-200/70">غير محدودة</td>
                      <td className="py-3 text-center pl-4 text-amber-200/70">عالية</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 py-4 px-5 rounded-xl bg-purple-950/40 border border-purple-500/8">
                <p className="text-purple-300/45 text-sm font-medium mb-2">
                  الحالات التي تستوجب موافقة الإدارة العليا:
                </p>
                <div className="space-y-1.5 text-purple-300/40 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-500/30 mt-2 shrink-0" />
                    <span>الأنظمة ذات الحجم الكبير أو التعقيد المعماري العالي</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-500/30 mt-2 shrink-0" />
                    <span>أي تعديل يطال المنطق الأساسي (Core Logic) للنظام</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-500/30 mt-2 shrink-0" />
                    <span>الميزات ذات الحساسية الأمنية أو التي تتطلب صلاحيات متقدمة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: Engineer & Server */}
        <section
          className={`mb-6 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="backdrop-blur-md bg-purple-900/10 rounded-2xl p-8 md:p-10 border border-purple-500/8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-purple-500/50 tracking-widest">03</span>
              <h3 className="text-xl md:text-2xl font-bold text-purple-100">
                المهندس المخصص والبنية التحتية
              </h3>
            </div>
            <div className="space-y-4 text-purple-200/65 leading-[1.9] text-[15px]">
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                {[
                  { plan: '3 أشهر', level: 'أولوية عادية', border: 'border-purple-500/10' },
                  { plan: '6 أشهر', level: 'أولوية متوسطة', border: 'border-indigo-500/15' },
                  { plan: '12 شهرًا', level: 'أولوية عالية', border: 'border-amber-500/15' },
                ].map((item) => (
                  <div
                    key={item.plan}
                    className={`text-center py-5 px-4 rounded-xl bg-purple-950/25 border ${item.border}`}
                  >
                    <div className="text-purple-100 font-medium text-sm mb-1">{item.plan}</div>
                    <div className="text-purple-400/45 text-xs">{item.level}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 py-4 px-5 rounded-xl bg-purple-950/40 border border-purple-500/8">
                <p className="text-purple-300/45 text-sm">
                  المهندس المخصص هو عضو رسمي في فريق Majestic Flux، يعمل وفق المعايير
                  الهندسية والسياسات التشغيلية المعتمدة داخليًا. لا يُعتبَر مقاولًا خارجيًا
                  أو مستقلًا خاصًا، ويبقى مسؤولًا أمام الإدارة الفنية عن جودة كل مخرج
                  وسلامة النظام.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: Terms & Continuity */}
        <section
          className={`mb-6 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '650ms' }}
        >
          <div className="backdrop-blur-md bg-purple-900/10 rounded-2xl p-8 md:p-10 border border-purple-500/8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-purple-500/50 tracking-widest">04</span>
              <h3 className="text-xl md:text-2xl font-bold text-purple-100">
                المدة والاستمرارية والملكية الفكرية
              </h3>
            </div>
            <div className="space-y-4 text-purple-200/65 leading-[1.9] text-[15px]">
              <p>
                تُحدَّد مدة الشراكة وفق الخطة المختارة (3 أشهر، 6 أشهر، أو 12 شهرًا).
                تبدأ المدة من تاريخ إتمام الدفع والتفعيل الرسمي.
              </p>

              <div className="space-y-3 pr-2">
                {[
                  'يمتلك الشريك حقوق الاستخدام الحصري للميزات المخصصة المبنية لصالحه طوال مدة الشراكة الفعّالة. تشمل هذه الحقوق استخدام الميزات وتشغيلها والاستفادة منها تجاريًا.',
                  'تظل الشيفرة البرمجية (Source Code) والبنية المعمارية الأساسية ملكًا فكريًا حصريًا لـ Hedrix Technology و Majestic Flux. لا يحق للشريك الوصول إلى الكود المصدري أو نسخه أو توزيعه بأي شكل.',
                  'عند انتهاء مدة الشراكة دون تجديد: تنتقل حقوق استخدام الميزات المخصصة بالكامل إلى Hedrix Technology، ويحق للشركة إعادة استخدامها أو دمجها في المنتج العام.',
                  'في حال التجديد: تبقى جميع حقوق الاستخدام سارية دون انقطاع، ويُعاد تفعيل التطوير المخصص والأولوية الخاصة بالدعم الفني.',
                  'لن يتم ضمان تنفيذ أي ميزة ما لم تحصل على موافقة رسمية مكتوبة من الإدارة الفنية.',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 px-4 rounded-lg bg-purple-950/20 border border-purple-500/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/40 mt-2.5 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Fair Use & Enforcement */}
        <section
          className={`mb-6 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="backdrop-blur-md bg-purple-900/10 rounded-2xl p-8 md:p-10 border border-purple-500/8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-purple-500/50 tracking-widest">05</span>
              <h3 className="text-xl md:text-2xl font-bold text-purple-100">
                الاستخدام العادل والإنفاذ
              </h3>
            </div>
            <div className="space-y-4 text-purple-200/65 leading-[1.9] text-[15px]">
              <p>
                تخضع جميع الشراكات لسياسة الاستخدام العادل. تحتفظ Hedrix Technology
                بالحق في مراجعة أنماط الاستخدام واتخاذ الإجراءات المناسبة في حالة
                رصد أي من المخالفات التالية:
              </p>
              <div className="space-y-2 mt-2 text-purple-200/55 text-sm">
                {[
                  'تقديم طلبات متكررة بهدف استنزاف الموارد الهندسية دون غرض تشغيلي حقيقي.',
                  'محاولة الحصول على صلاحيات تتجاوز نطاق الخطة المتفق عليها.',
                  'إعادة توزيع النسخة الخاصة أو أي جزء منها لأطراف ثالثة.',
                  'أي استخدام يتعارض مع شروط خدمة Discord أو القوانين المعمول بها.',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2 py-2 px-4 rounded-lg bg-purple-950/15 border border-purple-500/5">
                    <span className="w-1 h-1 rounded-full bg-red-400/40 mt-2 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 py-4 px-5 rounded-xl bg-red-950/20 border border-red-500/10">
                <p className="text-red-300/50 text-sm">
                  تحتفظ Hedrix Technology بالحق في تعليق أو إنهاء الشراكة فورًا، دون
                  إشعار مسبق، في حال ثبوت مخالفة جوهرية لأي من بنود هذه السياسة.
                  القرارات المتخذة في هذا الشأن نهائية وغير قابلة للطعن.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section
          className={`mb-8 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '950ms' }}
        >
          <div className="text-center py-8">
            <div className="h-px w-24 mx-auto bg-gradient-to-l from-transparent via-purple-500/20 to-transparent mb-8" />
            <p className="text-purple-400/35 text-xs leading-relaxed max-w-lg mx-auto">
              هذه السياسة سارية المفعول اعتبارًا من تاريخ نشرها وتنطبق على جميع الشراكات
              القائمة والمستقبلية. تحتفظ Hedrix Technology بحق تعديل هذه السياسة في أي وقت.
              يُعتبر استمرار الشراكة بعد أي تعديل موافقةً ضمنية على البنود المحدّثة.
            </p>
            <p className="text-purple-500/25 text-xs mt-4 tracking-wider">
              Hedrix Technology · Majestic Flux · {new Date().getFullYear()}
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default PartnershipPolicy;
