import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Partners: React.FC = () => {

  const features = [
    {
      title: "نسخة خاصة مستقلة",
      desc: "بوت كامل يحمل هويتك، اسمك، علامتك التجارية وعلامة الحالة الخاصة بك، يعمل بشكل منفصل تمامًا عن النسخة العامة."
    },
    {
      title: "مهندس مخصص لمشروعك",
      desc: "مهندس متخصص من فريقنا يعمل على مشروعك، يفهم سياق مجتمعك، ويبني التعديلات المطلوبة مباشرة."
    },
    {
      title: "تطوير مستمر وأولوية",
      desc: "تطوير ميزات جديدة وحصريات تُصمم حسب رغبتك، مع أولوية تشغيلية ودعم فني يتناسب مع خطتك."
    }
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12" dir="rtl">
        {/* Apple-style Header */}
        <div className="border-b border-slate-800 pb-10 mb-12 text-right">
          <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2">برنامج الشراكات</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            نظام الشراكات الرسمي
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            شراكات تُبنى للمستقبل. التزام مشترك طويل الأمد لتطوير نسخ مستقلة وخاصة تخدم رؤيتك وتلبي احتياجات مجتمعك بدقة.
          </p>
        </div>

        {/* Philosophy Section */}
        <section className="mb-16 text-right">
          <h3 className="text-xl font-bold text-white mb-4">لماذا برنامج الشراكة؟</h3>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              بعض المشاريع الكبيرة والفريدة تحتاج أكثر من مجرد بوت محاكاة تقليدي جاهز. تحتاج نسخة مخصصة، بنية تحتية منفصلة، مهندسًا متفرغًا للتطوير، ودعمًا مستمرًا يواكب نمو مجتمعك.
            </p>
            <p>
              نظام الشراكة يمنحك كل ذلك — مع ضمان أن كل ميزة تُبنى لك تمر عبر معايير الجودة والأمان الصارمة الخاصة بنا، وتبقى متوافقة تمامًا مع النظام الأساسي لـ Majestic Flux.
            </p>
          </div>
        </section>

        {/* Key Features Grid - Minimalist */}
        <section className="mb-16 border-t border-slate-800 pt-10">
          <h3 className="text-lg font-bold text-white mb-8">مزايا حصرية للشركاء</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors duration-300"
              >
                <h4 className="text-sm font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed text-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Action Callbox - Minimalist */}
        <section className="border-t border-slate-800 pt-10 text-center">
          <div className="border border-slate-800 p-8 rounded-2xl bg-slate-900/10 max-w-xl mx-auto">
            <h3 className="text-base font-bold text-white mb-2">هل أنت مستعد لتطوير خادمك الخاص؟</h3>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed">
              استكشف باقات الشراكة المتوفرة حالياً، أو تصفح وثيقة سياسة الشراكات وتفاصيل العمل قبل تقديم طلبك.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/partners/plans" className="w-full sm:w-auto">
                <Button primary className="px-6 py-2.5 text-xs">
                  <span>عرض خطط الشراكة</span>
                </Button>
              </Link>
              <Link to="/partners/policy" className="w-full sm:w-auto">
                <Button className="border border-slate-800 hover:bg-slate-900 text-white px-6 py-2.5 text-xs">
                  <span>وثيقة سياسة الشراكات</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Partners;
