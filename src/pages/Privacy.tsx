import React from 'react';
import Layout from '../components/Layout';

const Privacy: React.FC = () => {

  const sections = [
    {
      id: "data-collection",
      num: "٠١",
      title: "البيانات التي نقوم بجمعها",
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            قد نقوم بجمع بعض البيانات الضرورية لتشغيل المنصة وتقديم الخدمات، وتشمل:
          </p>
          <div className="space-y-6 border-r border-slate-800 pr-4">
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">بيانات الحساب</h4>
              <ul className="space-y-1.5 text-slate-400 text-sm">
                <li>• معرف Discord.</li>
                <li>• اسم المستخدم.</li>
                <li>• الصورة الشخصية العامة.</li>
                <li>• معرف الخادم عند استخدام خدمات السيرفرات.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">بيانات الخدمة</h4>
              <ul className="space-y-1.5 text-slate-400 text-sm">
                <li>• إعدادات الحساب.</li>
                <li>• إعدادات السيرفرات.</li>
                <li>• بيانات الاشتراك والخطة الحالية.</li>
                <li>• سجلات التشغيل اللازمة لضمان استقرار العمليات.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">بيانات الهوية الرقمية</h4>
              <ul className="space-y-1.5 text-slate-400 text-sm">
                <li>• المعلومات المدخلة من قبل المستخدم داخل أنظمة الهوية الرقمية أو الخدمات التفاعلية.</li>
                <li>• الصور أو المستندات المرفوعة ضمن الخدمات والواجهات المتاحة.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">بيانات الاستخدام</h4>
              <ul className="space-y-1.5 text-slate-400 text-sm">
                <li>• الصفحات والواجهات التي يتم الوصول إليها.</li>
                <li>• العمليات التشغيلية التي يتم تنفيذها.</li>
                <li>• معلومات الجهاز والمستعرض وسجلات الأداء والأخطاء.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "data-usage",
      num: "٠٢",
      title: "كيف نستخدم البيانات",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            نستخدم البيانات المجمعة للأغراض التشغيلية والرقابية التالية:
          </p>
          <ul className="space-y-2 text-slate-400 text-sm border-r border-slate-800 pr-4">
            <li>• تشغيل المنصة الأساسية وتقديم الخدمات التفاعلية.</li>
            <li>• إنشاء وإدارة الحسابات الرقمية والتحقق من العمليات.</li>
            <li>• تحسين أداء استقرار النظام واكتشاف المشكلات الفنية.</li>
            <li>• حماية أمن المنصة ومنع التلاعب وإساءة الاستخدام.</li>
            <li>• تطوير وتدشين ميزات وخدمات جديدة للمجتمع.</li>
          </ul>
          <p className="text-xs text-slate-500 font-semibold mt-4">
            * لا نقوم ببيع أو مشاركة بيانات المستخدمين لأي أطراف ثالثة لأغراض تسويقية أو تجارية.
          </p>
        </div>
      )
    },
    {
      id: "digital-identity",
      num: "٠٣",
      title: "الهوية الرقمية والخدمات التفاعلية",
      content: (
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            تتضمن بعض أنظمة Majestic Flux إمكانية إنشاء هويات رقمية، أو ملفات تعريف شخصية، أو مستندات إلكترونية ترفيهية داخل بيئات المحاكاة.
          </p>
          <p>
            هذه البيانات مخصصة للاستخدام الداخلي فقط داخل المنصة، وهي **لا تمثل مستندات حكومية أو قانونية حقيقية** على الإطلاق، ويتحمل المستخدم وحده مسؤولية صحة وجودة البيانات التي يدخلها.
          </p>
        </div>
      )
    },
    {
      id: "payments",
      num: "٠٤",
      title: "المدفوعات والاشتراكات",
      content: (
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            تتم معالجة كافة المدفوعات والاشتراكات المالية بأمان كامل من خلال مزودي دفع خارجيين معتمدين.
          </p>
          <p>
            لا نقوم بتخزين أو معالجة أي بيانات بطاقات ائتمانية حساسة داخل خوادمنا الخاصة. نحتفظ فقط بالمعلومات التشغيلية الأساسية المرتبطة بالعملية (مثل: حالة الدفع، رقم المعاملة، نوع الاشتراك، وتاريخ التجديد) لأغراض الفوترة والدعم الفني وإدارة حسابك.
          </p>
        </div>
      )
    },
    {
      id: "data-sharing",
      num: "٠٥",
      title: "مشاركة البيانات",
      content: (
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            لا نبيع أو نؤجر بياناتك الشخصية لأي طرف ثالث. تتم مشاركة البيانات الفنية حصراً في الحالات التشغيلية التالية:
          </p>
          <ul className="space-y-1.5 text-slate-400 text-sm border-r border-slate-800 pr-4">
            <li>• عند الحاجة لتقديم الخدمات الأساسية (مثل إرسال إشعارات Discord).</li>
            <li>• مع مزودي خوادم البنية التحتية والاستضافة لضمان استمرارية التشغيل.</li>
            <li>• عند وجود التزامات أو متطلبات قانونية معتمدة من جهات حكومية رسمية.</li>
            <li>• لحماية أمن المنصة أو مستخدمينا من الأنشطة الضارة والاحتيال.</li>
          </ul>
        </div>
      )
    },
    {
      id: "security",
      num: "٠٦",
      title: "حماية البيانات والأمن",
      content: (
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            نحن نعتمد مجموعة متكاملة من التدابير الأمنية الحديثة لحماية البيانات، ويشمل ذلك تشفير الاتصالات وصلاحيات التحقق المقيدة ومراقبة الأنشطة التشغيلية غير الطبيعية.
          </p>
          <p>
            ومع ذلك، يُرجى العلم بأنه لا يمكن ضمان أمان الاتصال أو التخزين الرقمي بنسبة 100%.
          </p>
        </div>
      )
    },
    {
      id: "cookies",
      num: "٠٧",
      title: "ملفات تعريف الارتباط (Cookies)",
      content: (
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            قد نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لحفظ حالات تسجيل الدخول للوحة التحكم، وتذكر تفضيلات المستخدم الخاصة، وتحليل أنماط استخدام المنصة لرفع مستوى الكفاءة.
          </p>
          <p>
            يمكنك إيقاف أو التحكم في ملفات تعريف الارتباط عبر إعدادات المستعرض الخاص بك في أي وقت.
          </p>
        </div>
      )
    },
    {
      id: "user-rights",
      num: "٠٨",
      title: "حقوق المستخدم",
      content: (
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            يحق لك الاطلاع على بياناتك المخزنة لدينا، وطلب تعديلها، أو طلب حذف حسابك نهائياً من أنظمتنا وفق الأطر التشغيلية المعتمدة.
          </p>
          <p className="text-slate-400 text-xs">
            * يرجى ملاحظة أن حذف الحساب قد يترتب عليه فقدان الوصول للبيانات والاشتراكات والخصائص الرقمية المرتبطة بحسابك بشكل نهائي.
          </p>
        </div>
      )
    },
    {
      id: "retention",
      num: "٠٩",
      title: "الاحتفاظ بالبيانات",
      content: (
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            نحتفظ بالبيانات فقط للمدة الزمنية اللازمة لتقديم الخدمات أو للوفاء بالالتزامات القانونية والتشغيلية المعمول بها.
          </p>
          <p>
            نقوم دورياً بمراجعة قواعد البيانات وإخفاء أو مسح البيانات التي لم نعد بحاجة إليها لضمان الحماية والخصوصية.
          </p>
        </div>
      )
    },
    {
      id: "third-party-services",
      num: "١٠",
      title: "خدمات الطرف الثالث",
      content: (
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            تعتمد المنصة على تكاملات وخدمات خارجية تشمل منصة Discord، ومزودي الاستضافة السحابية، وخدمات التحليلات والمدفوعات.
          </p>
          <p>
            يخضع تفاعلك مع هذه الخدمات لشروط الاستخدام وسياسات الخصوصية التابعة لمزوديها الخارجيين مباشرة.
          </p>
        </div>
      )
    },
    {
      id: "children-privacy",
      num: "١١",
      title: "خصوصية الأطفال",
      content: (
        <p className="text-slate-300 text-sm leading-relaxed">
          خدمات Majestic Flux غير موجهة للأطفال أو الأشخاص دون السن القانونية المحددة لاستخدام المنصات الرقمية وفق القوانين المحلية السارية في دولتكم.
        </p>
      )
    },
    {
      id: "policy-changes",
      num: "١٢",
      title: "التعديلات على سياسة الخصوصية",
      content: (
        <p className="text-slate-300 text-sm leading-relaxed">
          قد نقوم بتحديث هذه الوثيقة دورياً تماشياً مع التطويرات الفنية أو التغييرات القانونية التنظيمية. يتم نشر النسخ المحدثة فوراً على الموقع الإلكتروني لتصبح سارية المفعول من تاريخ النشر الموضح بأعلى الصفحة.
        </p>
      )
    },
    {
      id: "contact-us",
      num: "١٣",
      title: "التواصل معنا",
      content: (
        <div className="space-y-2 text-slate-300 text-sm leading-relaxed">
          <p>إذا كانت لديك استفسارات حول بياناتك أو بنود هذه السياسة، يمكنك التواصل معنا عبر:</p>
          <ul className="space-y-1 text-slate-400">
            <li>• نموذج الاتصال بالموقع الإلكتروني.</li>
            <li>• تذاكر الدعم الفني في خادم Discord الرسمي.</li>
            <li>• قنوات الدعم المعتمدة الأخرى التابعة لـ Hedrix Technology.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12" dir="rtl">
        {/* Apple-style minimalist header */}
        <div className="border-b border-slate-800 pb-10 mb-12 text-right">
          <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2">وثيقة الخصوصية</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-slate-400 text-sm">
            آخر تحديث: يونيو ٢٠٢٦
          </p>
        </div>

        {/* Minimalist Intro */}
        <div className="text-slate-300 text-base leading-relaxed mb-16 space-y-4">
          <p>
            مرحبًا بك في Majestic Flux.
          </p>
          <p>
            نحن ملتزمون بحماية خصوصية مستخدمينا وتوفير أعلى مستويات الشفافية حول كيفية جمع البيانات واستخدامها وحمايتها أثناء استخدامك لمنصتنا وخدماتنا الرقمية.
          </p>
          <p className="text-slate-400 text-sm">
            تنطبق هذه السياسة على جميع خدمات Majestic Flux بما في ذلك: الموقع الإلكتروني، لوحة التحكم، الهاتف التفاعلي، نظام الهوية الرقمية، التطبيقات والخدمات الإلكترونية، وبوت Discord، والأنظمة والواجهات المرتبطة بالمنصة. بافتتاحك واستخدامك لأي من خدماتنا فإنك توافق على الممارسات التشغيلية الموضحة في هذه الوثيقة.
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Section Number & Title */}
                <div className="md:col-span-4 flex items-center md:flex-col md:items-start gap-3 md:gap-2">
                  <span className="text-slate-600 font-mono text-sm font-semibold tracking-wider">{section.num}</span>
                  <h2 className="text-lg font-bold text-white tracking-tight">{section.title}</h2>
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
        <div className="border-t border-slate-800 mt-20 pt-12 pb-6 text-center text-slate-500 text-xs">
          <p className="font-bold text-slate-400 mb-1">Majestic Flux</p>
          <p className="mb-4">A New Generation Interactive Platform</p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
