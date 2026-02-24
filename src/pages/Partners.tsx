import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Partners: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0" dir="rtl">
        {/* Hero Section */}
        <section
          className={`relative text-center py-20 md:py-32 transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

          <h2 className="relative text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-purple-200 via-white to-purple-300 mb-8">
            شراكات تُبنى للمستقبل،
            <br />
            لا للتجربة
          </h2>

          <p className="relative text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed mb-6">
            الشراكة ليست اشتراكًا. هي التزام مشترك طويل الأمد بين فريقك وفريقنا،
            لبناء نسخة خاصة من Majestic Flux تخدم رؤيتك بدقة.
          </p>

          <p className="relative text-base text-purple-400/70 max-w-xl mx-auto leading-relaxed">
            نختار شركاءنا بعناية، ونعمل معهم على مدى أشهر لتطوير حلول مصممة
            خصيصًا — لا نسخ جاهزة، ولا وعود مبالغ فيها.
          </p>
        </section>

        {/* Philosophy Section */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="backdrop-blur-md bg-purple-900/15 rounded-2xl p-10 md:p-14 border border-purple-500/10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-100 mb-6">
              لماذا نظام الشراكات؟
            </h3>
            <div className="space-y-5 text-purple-200/80 text-lg leading-relaxed">
              <p>
                بعض المشاريع تحتاج أكثر من مجرد بوت جاهز. تحتاج نسخة مخصصة،
                مهندسًا مخصصًا، وتطويرًا مستمرًا يواكب نمو المشروع.
              </p>
              <p>
                الشراكة تمنحك كل ذلك — مع ضمان أن كل ميزة تُبنى لك تمر عبر
                معايير الجودة والأمان الخاصة بنا، وتبقى متوافقة مع النظام
                الأساسي.
              </p>
              <p className="text-purple-300/60 text-base">
                نحن لا نبيع خدمات. نحن نبني علاقات هندسية طويلة الأمد.
              </p>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section
          className={`relative mb-16 transition-all duration-1000 delay-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "نسخة خاصة",
                desc: "بوت يحمل هويتك وعلامتك التجارية، منفصل تمامًا عن النسخة العامة.",
              },
              {
                title: "مهندس مخصص",
                desc: "مهندس من فريقنا يعمل على مشروعك، يفهم سياقك، ويبني لك مباشرة.",
              },
              {
                title: "تطوير مستمر",
                desc: "ميزات جديدة تُبنى حسب احتياجاتك، مع أولوية تتناسب مع مدة شراكتك.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-sm bg-purple-900/10 rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-500"
              >
                <h4 className="text-xl font-bold text-purple-100 mb-3">
                  {item.title}
                </h4>
                <p className="text-purple-300/70 leading-relaxed">
                  {item.desc}
                </p>
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
          <div className="backdrop-blur-md bg-gradient-to-l from-purple-900/20 to-purple-800/10 rounded-2xl p-10 md:p-14 border border-purple-500/15 text-center">
            <p className="text-purple-200/70 text-lg mb-8">
              استكشف الخطط المتاحة، أو اطّلع على سياسة الشراكات قبل التواصل
              معنا.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/partners/plans">
                <button className="px-8 py-4 rounded-xl text-lg font-medium bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white transition-all duration-300 shadow-lg shadow-purple-900/30 hover:shadow-purple-800/40 min-w-[200px]">
                  عرض الخطط
                </button>
              </Link>
              <Link to="/partners/policy">
                <button className="px-8 py-4 rounded-xl text-lg font-medium bg-purple-900/30 hover:bg-purple-900/50 text-purple-200 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 min-w-[200px]">
                  سياسة الشراكات
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Partners;
