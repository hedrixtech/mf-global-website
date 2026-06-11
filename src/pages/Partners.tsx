import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { Cpu, ShieldCheck, Terminal, HelpCircle, FileText, BarChart } from "lucide-react";

const Partners: React.FC = () => {

  const SLAFeatures = [
    {
      icon: Cpu,
      title: "بنية مستقلة وخوادم مخصصة (Private Instance)",
      desc: "تشغيل نسخة منفصلة تماماً من البوت على خوادم سحابية مخصصة ومستقلة، مما يضمن أقصى درجات الأمان وحماية البيانات وتجنب أي تعارض في موارد المعالجة."
    },
    {
      icon: Terminal,
      title: "مهندس تطوير وإدارة مخصص (Dedicated Lead Developer)",
      desc: "تعيين مهندس مخصص من فريقنا الفني لمتابعة خادمك، وفهم طبيعة واحتياجات مجتمعك، والعمل بشكل مباشر على دمج وتخصيص الأنظمة والبرمجيات."
    },
    {
      icon: ShieldCheck,
      title: "تطوير برمي مخصص وحصري (Exclusive Custom Systems)",
      desc: "إمكانية طلب تصميم وتطوير خصائص حصرية لخادمك، مع فترة حصرية تشغيلية تضمن تميز مجتمعك قبل دمج وتعميم الفكرة فحصاً وتدقيقاً."
    }
  ];

  const workflowPhases = [
    {
      num: "٠١",
      phase: "التقييم الفني المبدئي (Technical Evaluation)",
      detail: "نقوم بدراسة متطلبات خادمك، وحجم الأعضاء، والأنظمة المخصصة التي تبحث عن تفعيلها للتأكد من ملاءمتها الفنية لبنية Majestic Flux."
    },
    {
      num: "٠٢",
      phase: "تجهيز البنية التحتية (Infrastructure Setup)",
      detail: "يتم حجز وتكوين خادم تشغيل سحابي مستقل (Dedicated Server) وربطه بقاعدة بيانات منفصلة وإطلاق نسخة البوت الخاصة التي تحمل شعار خادمك."
    },
    {
      num: "٠٣",
      phase: "بدء التطوير البرمجي (Custom Development Cycle)",
      detail: "يبدأ مهندس التطوير المخصص بتصميم وبناء الميزات والخصائص المطلوبة واختبارها أمنياً وتقنياً في بيئة تجريبية قبل إطلاقها الفعلي."
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12 font-almarai" dir="rtl">
        
        {/* Formal Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-500 mb-10 select-none">
          <Link to="/" className="hover:text-slate-300 transition-colors">الرئيسية</Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-400">برنامج الشراكات</span>
        </div>

        {/* Corporate Header */}
        <div className="border-b border-slate-800 pb-12 mb-16 text-right">
          <p className="text-purple-400 text-xs font-semibold tracking-wider uppercase mb-2">Majestic Flux Enterprise</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            برنامج الشراكات البرمجية والتطويرية
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
            شراكات هندسية متكاملة مصممة للخوادم والمجتمعات الرقمية الكبرى. نلتزم بتقديم حلول تشغيلية مخصصة، خوادم مستقلة فائقة الأداء، ودورة تطوير برمجية متطورة لتنفيذ رؤيتكم التشغيلية بأعلى درجات الاستقرار الفني.
          </p>
        </div>

        {/* Technical Value Proposition Section */}
        <section className="mb-20 text-right">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <BarChart className="w-5 h-5 text-purple-400" />
            <span>ما الذي تقدمه الشراكة لمجتمعك؟</span>
          </h3>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-10 max-w-3xl">
            المجتمعات الضخمة والشبكات الرائدة تحتاج إلى بنية تكنولوجية مرنة وتكاملية تتعدى الحلول العامة الجاهزة. برنامج الشراكة يوفر لك الإمكانيات والحلول الفنية التي تضمن بقاء خادمك في طليعة الخوادم الرقمية بفضل خوادم مستقلة وفريق تطوير مخصص لحل المشاكل وتصميم الأنظمة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SLAFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="border border-slate-800/80 bg-[#000000]/10 rounded-xl p-6 hover:border-slate-700 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center justify-center mb-4">
                      <Icon className="w-4.5 h-4.5 text-purple-400" />
                    </div>
                    <h4 className="text-xs font-bold text-white mb-3 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 leading-relaxed text-[11px] font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Workflow / Roadmap Section */}
        <section className="mb-20 border-t border-slate-800 pt-16 text-right">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-purple-400" />
            <span>خارطة تفعيل الشراكة والعمل الفني</span>
          </h3>
          <p className="text-slate-400 text-xs mb-8">
            ضوابط وخطوات تنظيمية نتبعها لضمان التركيب السليم للنسخة وإدارة الميزات بكفاءة عالية:
          </p>

          <div className="space-y-6">
            {workflowPhases.map((phase, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-800/60 bg-[#000000]/20"
              >
                <div className="font-mono text-xs font-bold text-purple-400/60 bg-purple-500/5 border border-purple-500/10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                  {phase.num}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white mb-1.5">{phase.phase}</h4>
                  <p className="text-slate-400 text-[11px] font-light leading-relaxed">{phase.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Call To Action Box */}
        <section className="border-t border-slate-800 pt-16 text-center">
          <div className="border border-slate-800/80 p-8 rounded-2xl bg-[#000000]/30 max-w-xl mx-auto">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span>هل خادمك مؤهل لبرنامج الشراكة؟</span>
            </h3>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed max-w-md mx-auto">
              للاطلاع على التكاليف والخيارات المتاحة، أو لقراءة وثيقة الشراكة الرسمية والالتزامات الهندسية المحددة قبل التقديم:
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/partners/plans" className="w-full sm:w-auto">
                <Button primary className="px-6 py-2.5 text-[11px] font-bold font-almarai">
                  <span>عرض خطط الشراكة</span>
                </Button>
              </Link>
              <Link to="/partners/policy" className="w-full sm:w-auto">
                <Button className="border border-slate-800 hover:bg-[#000000]/20 text-white px-6 py-2.5 text-[11px] font-bold font-almarai flex items-center gap-1.5 justify-center">
                  <FileText className="w-3.5 h-3.5" />
                  <span>وثيقة سياسة الشراكات</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Organization Detail */}
        <div className="mt-16 pt-8 border-t border-slate-800/40 text-center text-[10px] text-slate-500 tracking-wider">
          <span>HEDRIX TECHNOLOGY · ENTERPRISE DIVISION</span>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
