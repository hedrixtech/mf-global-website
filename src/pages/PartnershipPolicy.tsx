import React from 'react';
import Layout from '../components/Layout';
import { ChevronRight, FileText, Shield, Clock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnershipPolicy: React.FC = () => {

  const sections = [
    {
      id: "definition",
      num: "٠١",
      title: "تعريف البرنامج",
      content: (
        <div className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            برنامج الشراكة في Majestic Flux هو نظام تعاون هندسي متقدم بين Hedrix Technology وشركاء مختارين، يهدف إلى تشغيل وتطوير نسخ مخصصة مستقلة تمامًا من البوت والنظام داخل بيئة تشغيل سحابية منفصلة وخوادم مخصصة.
          </p>
          <p className="text-slate-400">
            يحصل كل شريك على ترخيص نسخة خاصة (Private Instance)، خادم تشغيل مستقل ومحمي، مهندس شراكات مخصص لمتابعة متطلبات المشروع، أولوية في التنفيذ والدعم البرمجي، وإمكانية طلب تعديلات وميزات مخصصة تناسب رؤيته.
          </p>
        </div>
      )
    },
    {
      id: "development-nature",
      num: "٠٢",
      title: "طبيعة التطوير الفني",
      content: (
        <div className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            تخضع كافة طلبات التطوير والميزات المخصصة التي يقدمها الشركاء لتقييم ودراسة هندسية موسعة من قبل فريق Hedrix Technology قبل اعتمادها والبدء في تنفيذها.
          </p>
          <p>
            لا يوجد أي التزام أو تفعيل تلقائي لأي طلب تطوير ما لم تتم الموافقة الفنية والكتابية عليه من قبل الإدارة الفنية للمنصة لضمان توافقه التام مع البنية الأساسية للنظام وعدم تسببه في مشكلات برمجية.
          </p>
        </div>
      )
    },
    {
      id: "development-cycle",
      num: "٠٣",
      title: "دورة التطوير والمدد الزمنية",
      content: (
        <div className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            لضمان الجودة البرمجية، الفحص الأمني، وخلو الميزات من الثغرات، تم تحديد حد أدنى لدورة التطوير والاختبار لأي ميزة أو تعديل مخصص:
          </p>
          <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-lg text-xs flex items-center gap-2">
            <Clock className="w-4.5 h-4.5 text-purple-400 shrink-0" />
            <span className="font-bold text-white">الحد الأدنى لدورة التطوير لأي ميزة مخصصة هو ١٤ يوم عمل.</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            * يشمل هذا الحد الأدنى: الأنظمة الجديدة، التعديلات الهيكلية، والتحسينات البرمجية الكبرى. يمكن تسريع دورة التنفيذ فقط بموافقة الفريق الهندسي وبناءً على تعقيد الميزة وضغط العمل التشغيلي الحالي للبنية التحتية.
          </p>
        </div>
      )
    },
    {
      id: "exclusivity",
      num: "٠٤",
      title: "حصرية الميزات المخصصة",
      content: (
        <div className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            أي ميزة برمجية يتم تصميمها وتطويرها خصيصًا للشريك تمنح له ميزة تشغيلية حصرية على نسخته المستقلة:
          </p>
          <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-lg text-xs flex items-center gap-2">
            <Shield className="w-4.5 h-4.5 text-purple-400 shrink-0" />
            <span className="font-bold text-white">فترة حصرية تشغيلية كاملة قدرها ١٤ يومًا من تاريخ الإطلاق الفعلي.</span>
          </div>
          <p>
            بعد انتهاء فترة الحصرية (14 يومًا من تاريخ الإطلاق الفعلي)، تمتلك Hedrix Technology الحق الكامل في دمج الميزة وإضافتها للنسخة العامة أو إتاحتها لشركاء آخرين لتعميم الفائدة وتطوير النظام ككل.
          </p>
        </div>
      )
    },
    {
      id: "addons",
      num: "٠٥",
      title: "نظام الإضافات والترقيات الثابتة (Add-ons)",
      content: (
        <div className="space-y-4 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            يمكن للشركاء طلب إضافات أو أنظمة أو خدمات ربط متقدمة بأسعار ثابتة ومحددة بوضوح خارج حدود الباقات الأساسية:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
            <div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">Feature Add-ons</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• ميزة جديدة مخصصة: <strong>$4.99</strong></li>
                <li>• تعديل برمي متوسط: <strong>$2.99</strong></li>
                <li>• تحسين أو تعديل بسيط: <strong>$1.99</strong></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-[10px] uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">System Add-ons</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• نظام صغير إضافي: <strong>$9.99</strong></li>
                <li>• نظام متوسط إضافي: <strong>$14.99</strong></li>
                <li>• نظام كبير إضافي: <strong>$24.99</strong></li>
              </ul>
            </div>

            <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div>
                <h4 className="text-white font-bold text-[10px] uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">Integration Add-ons</h4>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li>• ربط خدمة خارجية / API: <strong>$4.99 - $9.99</strong></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-[10px] uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">Exclusivity Extensions</h4>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li>• تمديد الحصرية 7 أيام إضافية: <strong>$2.99</strong></li>
                  <li>• تمديد الحصرية 14 يومًا إضافية: <strong>$4.99</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "plans",
      num: "٠٦",
      title: "خطط وباقات الشراكة الحالية",
      content: (
        <div className="space-y-4 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            تتوفر الشراكات عبر ثلاثة مستويات محددة المدة والتكاليف التشغيلية:
          </p>
          <div className="space-y-4 border-r border-slate-800 pr-4">
            <div>
              <h4 className="text-white font-bold text-xs mb-1">Starter Partnership ($49.99 / ٤ أشهر)</h4>
              <p className="text-slate-400 text-[11px]">حتى 3 طلبات ميزات، 6 تعديلات، أولوية تنفيذ عادية، نسخة خاصة محدودة، دعم فني أساسي.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs mb-1">Growth Partnership ($89.99 / ٨ أشهر)</h4>
              <p className="text-slate-400 text-[11px]">حتى 7 طلبات ميزات، 15 تعديلاً، أولوية متوسطة، نسخة خاصة كاملة، خادم مخصص مستقل، دعم فني مباشر وسريع.</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs mb-1">Elite Partnership ($129.99 / ١٢ شهراً)</h4>
              <p className="text-slate-400 text-[11px]">طلبات ميزات وتعديلات غير محدودة (وفق التقييم الهندسي)، أولوية تنفيذ عالية وقصوى، خادم عالي الأداء، مشاركة مباشرة في خارطة تطوير المنصة.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "fairuse",
      num: "٠٧",
      title: "سياسة الاستهلاك العادل للبنية التحتية",
      content: (
        <div className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            تخضع جميع الخوادم الخاصة لشركائنا لسياسة الاستهلاك العادل للموارد الفنية. تحتفظ Hedrix Technology بالحق الكامل في حماية استقرار البنية التحتية من خلال:
          </p>
          <ul className="space-y-2 text-slate-400 text-xs list-disc list-inside pr-2">
            <li>إعادة جدولة أو تأجيل طلبات الميزات التي قد تؤثر على استقرار النظام العام.</li>
            <li>رفض أو تأجيل أي طلب تعديل غير عملي أو يشكل خطورة على الأمان الفني.</li>
            <li>
              <strong>فواتير التكلفة التشغيلية الإضافية:</strong> في حال تجاوز استهلاك الخادم للإنترنت والباندويدث (Internet Usage) أو مساحة التخزين (Storage Usage) المعدلات الطبيعية المحددة للباقة، يحق للإدارة إصدار فواتير لتغطية التكلفة التشغيلية الفعلية.
            </li>
            <li>
              <strong>طبيعة الفواتير غير الربحية:</strong> يُقر الشريك بأن الفواتير الناتجة عن زيادة الاستهلاك هي **ليست ربحية للإدارة**، بل هي مجرد تكاليف فعلية يتم سدادها لمزودي الخوادم السحابية ومراكز البيانات لمواصلة تشغيل النسخة بنفس الجودة وبدون مشاكل.
            </li>
            <li>
              <strong>التعليق الفوري للخدمة:</strong> في حال رفض الشريك سداد هذه الفواتير التشغيلية المباشرة، يحق للإدارة تعليق أو إيقاف الخدمة فوراً.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "ip-rights",
      num: "٠٨",
      title: "حقوق الملكية الفكرية والأكواد",
      content: (
        <div className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            تظل كافة الأكواد المصدرية، التصاميم الهندسية، والواجهات البرمجية المطورة للشريك ملكاً فكرياً حصرياً وخاصاً لـ Hedrix Technology.
          </p>
          <p>
            يمنح الشريك حق استخدام تشغيلي حصري مؤقت للميزات المطورة له خلال فترة الشراكة الفعالة. لا يحق للشريك بيع، تأجير، نسخ، توزيع، أو فك تشفير النسخة الخاصة أو كود البوت بأي شكل من الأشكال.
          </p>
        </div>
      )
    },
    {
      id: "termination",
      num: "٠٩",
      title: "إنهاء وتعليق الشراكة",
      content: (
        <div className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            تلتزم الإدارة بتقديم بيئة عمل احترافية، ولكن يحق لـ Hedrix Technology إنهاء أو تعليق الشراكة والخدمة فوراً ودون سابق إنذار في الحالات التالية:
          </p>
          <ul className="space-y-2 text-slate-400 text-xs list-disc list-inside pr-2">
            <li>إساءة استخدام البوت أو استخدامه في أغراض تخالف القوانين أو شروط خدمة Discord.</li>
            <li>انتهاك سياسات وشروط الاستخدام لـ Majestic Flux.</li>
            <li>الاستخدام غير العادل أو محاولات إغراق واستهلاك موارد البنية التحتية بشكل ضار ومستمر.</li>
          </ul>
        </div>
      )
    },
    {
      id: "philosophy",
      num: "١٠",
      title: "فلسفة البرنامج والتعاون الفني",
      content: (
        <div className="p-5 rounded-xl bg-[#000000]/30 border border-slate-800 text-slate-300 text-xs md:text-sm leading-relaxed">
          <p className="italic font-medium">
            "برنامج الشراكة هو نموذج تطوير تعاوني مستدام بين Majestic Flux وشركائه لبناء ميزات مخصصة ومبتكرة يتم تطويرها تدريجياً، مع إمكانية دمج الأفضل منها مستقبلاً في النسخة العامة لتعميم الفائدة وتطوير مجتمعنا الرقمي بأعلى جودة تشغيلية."
          </p>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12 font-almarai" dir="rtl">
        
        {/* Formal Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-500 mb-10 select-none">
          <Link to="/" className="hover:text-slate-300 transition-colors">الرئيسية</Link>
          <span className="text-slate-700">/</span>
          <Link to="/partners" className="hover:text-slate-300 transition-colors">برنامج الشراكات</Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-400">سياسة الشراكات</span>
        </div>

        {/* Corporate Header */}
        <div className="border-b border-slate-800 pb-10 mb-16 text-right">
          <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2">وثيقة السياسات والضوابط</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 flex items-center gap-2.5">
            <FileText className="w-8 h-8 text-purple-400" />
            <span>سياسة الشراكات الرسمية</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
            الوثيقة المنظمة والضوابط الفنية المعتمدة لبرنامج الشركاء لعام ٢٠٢٦. يرجى الاطلاع الكامل والموافقة عليها قبل تفعيل باقة الشراكة الخاصة بك.
          </p>
        </div>

        {/* Clean, Non-glowing Article Sections */}
        <div className="space-y-16">
          {sections.map((section) => (
            <section 
              key={section.id} 
              id={section.id}
              className="border-t border-slate-800 pt-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-right">
                {/* Section Number & Title */}
                <div className="md:col-span-4 flex items-center md:flex-col md:items-start gap-3 md:gap-2">
                  <span className="text-purple-400/60 font-mono text-xs font-bold tracking-wider">{section.num}</span>
                  <h2 className="text-sm font-bold text-white tracking-tight">{section.title}</h2>
                </div>
                {/* Section Content */}
                <div className="md:col-span-8">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Elegant Footer Details */}
        <div className="border-t border-slate-800 mt-20 pt-12 pb-6 text-center text-slate-500 text-[10px] tracking-wider select-none">
          <p className="font-bold text-slate-400 mb-1">Hedrix Technology</p>
          <p className="mb-4">Majestic Flux • Enterprise Partnership Policy Document</p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </Layout>
  );
};

export default PartnershipPolicy;
