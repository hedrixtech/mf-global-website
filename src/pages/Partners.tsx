import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { Cpu, Users, RefreshCw, Handshake, HelpCircle } from "lucide-react";

const Partners: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
        {/* Hero Section */}
        <section
          className={`relative text-center py-16 md:py-24 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Ambient background glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/4 right-10 w-48 h-48 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-900/15 text-purple-300 text-xs font-semibold mb-6">
            <Handshake className="w-3.5 h-3.5 animate-pulse" />
            <span>نظام الشراكات الرسمي</span>
          </div>

          <h2 className="relative text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-purple-100 via-white to-purple-300 mb-8 tracking-tight">
            شراكات تُبنى للمستقبل،
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">لا للتجربة</span>
          </h2>

          <p className="relative text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed mb-6">
            الشراكة ليست مجرد اشتراك تقليدي. هي التزام مشترك طويل الأمد بين فريقك وفريقنا،
            لبناء نسخة خاصة من Majestic Flux تخدم رؤيتك وتلبي احتياجات مجتمعك بدقة.
          </p>

          <p className="relative text-base text-purple-400/70 max-w-xl mx-auto leading-relaxed">
            نختار شركاءنا بعناية، ونعمل معهم على مدى أشهر لتطوير حلول مصممة
            خصيصًا — لا نسخ عشوائية جاهزة، ولا وعود مبالغ فيها.
          </p>
        </section>

        {/* Philosophy Section */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-panel-glow rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
            {/* Corner glowing elements inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-purple-400 to-indigo-500 shrink-0" />
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-300">
                  لماذا نظام الشراكات؟
                </h3>
              </div>
              
              <div className="space-y-6 text-purple-200/80 text-lg leading-relaxed">
                <p>
                  بعض المشاريع الكبيرة والفريدة تحتاج أكثر من مجرد بوت محاكاة تقليدي جاهز. 
                  تحتاج نسخة مخصصة، بنية تحتية منفصلة، مهندسًا متفرغًا للتطوير، ودعمًا مستمرًا يواكب نمو مجتمعك.
                </p>
                <p>
                  نظام الشراكة يمنحك كل ذلك — مع ضمان أن كل ميزة تُبنى لك تمر عبر
                  معايير الجودة والأمان الصارمة الخاصة بنا، وتبقى متوافقة تمامًا مع النظام الأساسي.
                </p>
                <div className="flex items-center gap-2 pt-2 text-purple-400 font-medium">
                  <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>نحن لا نبيع خدمات عابرة. نحن نبني علاقات هندسية طويلة الأمد.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-purple-100 mb-8 text-center">مزايا حصرية للشركاء</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "نسخة خاصة مستقلة",
                desc: "بوت كامل يحمل هويتك، اسمك وعلامتك التجارية وعلامة الحالة الخاصة بك، منفصل تمامًا عن النسخة العامة.",
                color: "from-purple-500/20 to-indigo-500/5",
                iconColor: "text-purple-400"
              },
              {
                icon: Users,
                title: "مهندس مخصص لمشروعك",
                desc: "مهندس متخصص من فريقنا يعمل على مشروعك، يفهم سياق مجتمعك، ويبني التعديلات المطلوبة مباشرة.",
                color: "from-indigo-500/20 to-pink-500/5",
                iconColor: "text-indigo-400"
              },
              {
                icon: RefreshCw,
                title: "تطوير مستمر وأولوية",
                desc: "تطوير ميزات جديدة وحصريات تُصمم حسب رغبتك، مع أولوية تشغيلية ودعم فني يتناسب مع خطتك.",
                color: "from-purple-500/20 to-fuchsia-500/5",
                iconColor: "text-purple-300"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-panel hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/40 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h4 className="text-xl font-bold text-purple-100 mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-purple-300/70 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`relative mb-8 transition-all duration-1000 delay-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-panel-glow rounded-3xl p-10 md:p-14 border border-white/5 text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-purple-100 mb-4">هل أنت مستعد للانتقال لمستوى آخر؟</h3>
              <p className="text-purple-200/70 text-base md:text-lg mb-8 leading-relaxed">
                استكشف خطط الشراكة المتوفرة حالياً، أو تصفح وثيقة سياسة الشراكات وتفاصيل العمل قبل تقديم طلبك.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/partners/plans" className="w-full sm:w-auto">
                  <Button primary>
                    <span>عرض خطط الشراكة</span>
                  </Button>
                </Link>
                <Link to="/partners/policy" className="w-full sm:w-auto">
                  <Button>
                    <span>سياسة الشراكات</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Partners;
