import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const PartnershipPlans: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

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

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0" dir="rtl">

        {/* Header */}
        <section
          className={`text-center py-12 md:py-20 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-200 via-white to-purple-300 mb-6">
            خطط الشراكة
          </h2>
          <p className="text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto leading-relaxed mb-4">
            ثلاث مدد متاحة. كل خطة تمنحك مهندسًا مخصصًا ونسخة خاصة من
            Majestic Flux. الأولوية والمرونة تزداد مع الالتزام.
          </p>

          {/* Limited Offer Banner */}
          <div
            className={`inline-flex items-center gap-3 mt-4 px-6 py-3 rounded-full border transition-all duration-500 ${
              pulse
                ? 'bg-red-500/15 border-red-400/40 shadow-lg shadow-red-900/20'
                : 'bg-red-500/10 border-red-500/20'
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-red-300 text-sm font-medium">
              عرض لفترة محدودة — خصومات تصل إلى 33%
            </span>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">

          {/* ─── Plan 1: 3 Months ─── */}
          <div
            className={`relative backdrop-blur-md bg-gradient-to-b from-purple-900/20 to-purple-800/10 rounded-2xl border border-purple-500/15 shadow-lg p-8 md:p-10 transition-all duration-700 ease-out flex flex-col ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Duration */}
            <div className="text-center mb-6">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-bold text-purple-100">3</span>
                <span className="text-xl text-purple-300/60">أشهر</span>
              </div>
              <div className="mt-2 text-sm font-medium text-purple-300">أولوية عادية</div>
            </div>

            {/* Price */}
            <div className="text-center mb-6 py-5 bg-purple-900/20 rounded-xl border border-purple-500/10">
              <div className="text-purple-400/50 text-base line-through mb-1">$44.99</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-white">$34.9</span>
              </div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium">
                وفّر 22%
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full mb-6 bg-gradient-to-l from-transparent via-purple-500/20 to-transparent" />

            {/* Features */}
            <div className="space-y-4 flex-1 text-base">
              {[
                { label: 'نسخة خاصة بعلامتك التجارية', available: true },
                { label: 'مهندس مخصص', available: true },
                { label: 'خادم مخصص مقدم مجانًا من Hedrix Technology', available: true },
                { label: 'أولوية الدعم', value: 'عادية' },
                { label: 'طلبات ميزات جديدة', value: 'حتى 3' },
                { label: 'طلبات تعديل', value: 'حتى 5' },
                { label: 'ميزات مخصصة', value: 'محدودة' },
              ].map((f, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-purple-200/70">{f.label}</span>
                  {f.available !== undefined ? (
                    <span className="text-green-400/80 text-lg">✓</span>
                  ) : (
                    <span className="font-medium text-purple-100">{f.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-5 text-xs text-purple-400/40 leading-relaxed border-t border-purple-500/10 pt-4">
              تطبق سياسة الشراكة وحدود الاستخدام العادل
            </p>

            {/* CTA */}
            <a
              href="https://discord.gg/weg5eGG5cr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center py-4 rounded-xl text-base font-medium bg-purple-900/40 hover:bg-purple-900/60 text-purple-200 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              ابدأ الآن
            </a>
          </div>

          {/* ─── Plan 2: 6 Months (Most Popular) ─── */}
          <div
            className={`relative backdrop-blur-md bg-gradient-to-b from-indigo-900/25 to-purple-800/15 rounded-2xl border border-indigo-500/25 shadow-xl shadow-indigo-900/10 p-8 md:p-10 transition-all duration-700 ease-out flex flex-col lg:scale-[1.03] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold shadow-lg shadow-indigo-900/40 whitespace-nowrap">
              الأكثر طلبًا
            </div>

            {/* Duration */}
            <div className="text-center mb-6 mt-2">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-bold text-indigo-100">6</span>
                <span className="text-xl text-indigo-300/60">أشهر</span>
              </div>
              <div className="mt-2 text-sm font-medium text-indigo-300">أولوية متوسطة</div>
            </div>

            {/* Price */}
            <div className="text-center mb-6 py-5 bg-indigo-900/20 rounded-xl border border-indigo-500/15">
              <div className="text-indigo-400/50 text-base line-through mb-1">$89.99</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-white">$69.9</span>
              </div>
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium">
                وفّر 22%
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full mb-6 bg-gradient-to-l from-transparent via-indigo-500/25 to-transparent" />

            {/* Features */}
            <div className="space-y-4 flex-1 text-base">
              {[
                { label: 'نسخة خاصة بعلامتك التجارية', available: true },
                { label: 'مهندس مخصص', available: true },
                { label: 'خادم مخصص مقدم مجانًا من Hedrix Technology', available: true },
                { label: 'أولوية الدعم', value: 'متوسطة' },
                { label: 'طلبات ميزات جديدة', value: 'حتى 7' },
                { label: 'طلبات تعديل', value: 'حتى 15' },
                { label: 'ميزات مخصصة', value: 'متاحة' },
                { label: 'ميزات كبرى', value: 'متاحة' },
              ].map((f, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-purple-200/70">{f.label}</span>
                  {f.available !== undefined ? (
                    <span className="text-green-400/80 text-lg">✓</span>
                  ) : (
                    <span className="font-medium text-indigo-100">{f.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-5 text-xs text-purple-400/40 leading-relaxed border-t border-indigo-500/10 pt-4">
              تطبق سياسة الشراكة وحدود الاستخدام العادل
            </p>

            {/* CTA */}
            <a
              href="https://discord.gg/weg5eGG5cr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center py-4 rounded-xl text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all duration-300 shadow-lg shadow-indigo-900/30 hover:shadow-indigo-800/40"
            >
              ابدأ الآن — الأفضل قيمة
            </a>
          </div>

          {/* ─── Plan 3: 12 Months (Best Value) ─── */}
          <div
            className={`relative backdrop-blur-md bg-gradient-to-b from-amber-900/15 to-purple-900/15 rounded-2xl border border-amber-500/20 shadow-xl shadow-amber-900/10 p-8 md:p-10 transition-all duration-700 ease-out flex flex-col ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-black text-sm font-bold shadow-lg shadow-amber-900/40 whitespace-nowrap">
              أعلى توفير
            </div>

            {/* Duration */}
            <div className="text-center mb-6 mt-2">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-bold text-amber-100">12</span>
                <span className="text-xl text-amber-300/60">شهرًا</span>
              </div>
              <div className="mt-2 text-sm font-medium text-amber-200">أولوية عالية</div>
            </div>

            {/* Price */}
            <div className="text-center mb-6 py-5 bg-amber-900/15 rounded-xl border border-amber-500/10">
              <div className="text-amber-400/50 text-base line-through mb-1">$179.99</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-white">$119.9</span>
              </div>
              <div className="inline-flex items-center gap-2 mt-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-200 text-xs font-bold">
                  وفّر 33%
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full mb-6 bg-gradient-to-l from-transparent via-amber-500/25 to-transparent" />

            {/* Features */}
            <div className="space-y-4 flex-1 text-base">
              {[
                { label: 'نسخة خاصة بعلامتك التجارية', available: true },
                { label: 'مهندس مخصص', available: true },
                { label: 'خادم مخصص مقدم مجانًا من Hedrix Technology', available: true },
                { label: 'أولوية الدعم', value: 'عالية' },
                { label: 'طلبات ميزات جديدة', value: 'غير محدودة' },
                { label: 'طلبات تعديل', value: 'غير محدودة' },
                { label: 'ميزات مخصصة', value: 'كاملة' },
                { label: 'ميزات كبرى', value: 'كاملة' },
                { label: 'أولوية مطلقة في التنفيذ', available: true },
              ].map((f, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-purple-200/70">{f.label}</span>
                  {f.available !== undefined ? (
                    <span className="text-amber-400/90 text-lg">✓</span>
                  ) : (
                    <span className="font-medium text-amber-100">{f.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="mt-5 text-xs text-purple-400/40 leading-relaxed border-t border-amber-500/10 pt-4">
              تطبق سياسة الشراكة وحدود الاستخدام العادل
            </p>

            {/* CTA */}
            <a
              href="https://discord.gg/weg5eGG5cr"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full text-center py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-600/90 to-amber-500/90 hover:from-amber-500 hover:to-amber-400 text-black transition-all duration-300 shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40"
            >
              ابدأ الآن — وفّر $60
            </a>
          </div>

        </section>

        {/* Comparison: Partner vs Regular User */}
        <section
          className={`mb-12 transition-all duration-1000 delay-[800ms] ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="backdrop-blur-md bg-purple-900/12 rounded-2xl p-8 md:p-10 border border-purple-500/10">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-100 mb-8 text-center">
              الشريك مقابل المستخدم العادي
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-purple-500/15">
                    <th className="text-right py-4 pr-4 text-purple-300/60 font-medium">الميزة</th>
                    <th className="text-center py-4 text-purple-300/60 font-medium">مستخدم عادي</th>
                    <th className="text-center py-4 pl-4 text-amber-300/80 font-medium">شريك</th>
                  </tr>
                </thead>
                <tbody className="text-purple-200/70">
                  {[
                    { feature: 'البوت', regular: 'نسخة عامة مشتركة', partner: 'نسخة خاصة بعلامتك' },
                    { feature: 'الخادم', regular: 'مشترك', partner: 'خادم مخصص مجاني' },
                    { feature: 'الدعم الفني', regular: 'تذاكر عامة', partner: 'مهندس مخصص' },
                    { feature: 'ميزات مخصصة', regular: 'غير متاح', partner: 'متاح حسب الخطة' },
                    { feature: 'أولوية التنفيذ', regular: 'لا يوجد', partner: 'حسب مدة الشراكة' },
                    { feature: 'تعديل الهوية البصرية', regular: 'غير متاح', partner: 'كامل' },
                    { feature: 'تقارير الأداء', regular: 'أساسية', partner: 'تفصيلية' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-purple-500/5">
                      <td className="py-4 pr-4 font-medium text-purple-100">{row.feature}</td>
                      <td className="py-4 text-center text-purple-400/50">{row.regular}</td>
                      <td className="py-4 text-center pl-4 text-amber-200/80 font-medium">{row.partner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Money-back Guarantee */}
        <section
          className={`mb-12 transition-all duration-1000 delay-[900ms] ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="backdrop-blur-sm bg-gradient-to-l from-green-900/10 to-purple-900/10 rounded-2xl p-8 md:p-10 border border-green-500/15 text-center">
            <div className="text-4xl mb-4">🛡</div>
            <h3 className="text-xl md:text-2xl font-bold text-green-200 mb-3">
              ضمان الرضا — 7 أيام
            </h3>
            <p className="text-purple-200/60 text-base max-w-xl mx-auto leading-relaxed">
              إذا لم تكن راضيًا عن الخدمة خلال أول 7 أيام من بدء الشراكة،
              نضمن لك استرداد كامل المبلغ دون أي أسئلة.
            </p>
          </div>
        </section>

        {/* FAQ Highlights */}
        <section
          className={`mb-12 transition-all duration-1000 delay-[1000ms] ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-purple-100 mb-8 text-center">
            أسئلة شائعة
          </h3>
          <div className="space-y-4">
            {[
              {
                q: 'هل يمكنني الترقية من خطة لأخرى؟',
                a: 'نعم، يمكنك الترقية في أي وقت. يتم احتساب الفرق فقط من المبلغ المتبقي.',
              },
              {
                q: 'ماذا يحدث بعد انتهاء مدة الشراكة؟',
                a: 'تبقى الميزات المبنية لك فعالة، لكن يتوقف التطوير المخصص والأولوية الخاصة بالدعم. يمكنك التجديد في أي وقت.',
              },
              {
                q: 'هل يوجد رسوم إضافية؟',
                a: 'لا. السعر المعلن يشمل كل شيء: النسخة الخاصة، الخادم المخصص، المهندس، والميزات حسب الخطة.',
              },
              {
                q: 'ما المقصود بحدود طلبات الميزات والتعديلات؟',
                a: 'هي الحد الأقصى لعدد طلبات التطوير والتعديل خلال مدة الشراكة. الخطة السنوية تمنحك طلبات غير محدودة.',
              },
              {
                q: 'كيف أبدأ؟',
                a: 'تواصل معنا عبر سيرفر Discord الرسمي وافتح تذكرة شراكة. سيتواصل معك فريقنا خلال 24 ساعة.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-sm bg-purple-900/10 rounded-xl p-6 border border-purple-500/10"
              >
                <h4 className="text-base font-bold text-purple-100 mb-2">{item.q}</h4>
                <p className="text-purple-300/60 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Philosophy */}
        <section
          className={`mb-8 transition-all duration-1000 delay-[1100ms] ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="backdrop-blur-sm bg-purple-900/10 rounded-2xl p-10 md:p-14 border border-purple-500/10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-100 mb-5">
              الالتزام هو الأساس
            </h3>
            <p className="text-purple-200/60 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              لا نبحث عن أكبر عدد من الشركاء. نبحث عن الشركاء الذين يفهمون أن
              بناء منتج مخصص يحتاج وقتًا، وأن الجودة لا تأتي من الاستعجال.
            </p>
            <Link
              to="/partners/policy"
              className="text-purple-400/80 hover:text-purple-300 text-base transition-colors duration-300 border-b border-purple-500/30 hover:border-purple-400/50 pb-1"
            >
              اطّلع على سياسة الشراكات
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default PartnershipPlans;
