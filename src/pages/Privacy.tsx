import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Cpu, 
  Layers, 
  Scale, 
  HelpCircle,
  Clock,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

const Privacy: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    setVisible(true);

    const handleScroll = () => {
      const sections = [
        'intro', 'collect', 'usage', 'protection', 
        'profiles', 'third-party', 'rights', 
        'disclosure', 'changes', 'consent'
      ];
      
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const sectionsList = [
    { id: 'intro', label: 'مقدمة وثيقة الخصوصية', icon: Shield },
    { id: 'collect', label: '1. جمع المعلومات', icon: Database },
    { id: 'usage', label: '2. استخدام المعلومات', icon: Eye },
    { id: 'protection', label: '3. حماية البيانات', icon: Lock },
    { id: 'profiles', label: '4. ملفات تعريف المستخدم', icon: UserCheck },
    { id: 'third-party', label: '5. ملفات الطرف الثالث', icon: Cpu },
    { id: 'rights', label: '6. حقوق المستخدم', icon: Scale },
    { id: 'disclosure', label: '7. الإفصاح القانوني', icon: Layers },
    { id: 'changes', label: '8. التغييرات على السياسة', icon: HelpCircle },
    { id: 'consent', label: '9. موافقة المستخدم', icon: CheckCircle2 }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
        {/* Header */}
        <section
          className={`text-center py-12 md:py-16 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-900/15 text-purple-300 text-xs font-semibold mb-4">
            <Lock className="w-3.5 h-3.5 text-purple-400" />
            <span>خصوصيتك بأمان معنا</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-purple-100 via-white to-purple-300 mb-4">
            سياسة الخصوصية
          </h2>
          <div className="flex items-center justify-center gap-2 text-purple-400/60 text-xs md:text-sm mb-6">
            <Clock className="w-4 h-4" />
            <span>آخر تحديث: 22 مايو 2026</span>
          </div>
          <div className="h-px w-32 mx-auto bg-gradient-to-l from-transparent via-purple-500/30 to-transparent" />
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Sticky Navigation Index (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="glass-panel rounded-2xl p-6 border border-white/5 shadow-md">
              <h3 className="text-lg font-bold text-purple-200 mb-4 border-b border-purple-500/10 pb-3 flex items-center gap-2">
                <Layers className="w-4.5 h-4.5 text-purple-400" />
                فهرس وثيقة الخصوصية
              </h3>
              <nav className="space-y-1">
                {sectionsList.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-right text-sm rounded-xl transition-all duration-300 ${
                        active 
                          ? 'bg-purple-500/15 text-purple-200 border-r-4 border-purple-500 font-bold' 
                          : 'text-purple-300/60 hover:text-purple-200 hover:bg-white/5 border-r-4 border-transparent'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-purple-400' : 'text-purple-500/40'}`} />
                      <span className="truncate">{item.label}</span>
                      {active && <ArrowLeft className="w-3.5 h-3.5 mr-auto text-purple-400" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Left Column: Content Panels */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Intro Section */}
            <div 
              id="intro" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">مقدمة وثيقة الخصوصية</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  تحدد هذه الوثيقة سياسة الخصوصية المطبقة لدى إدارة Majestic Flux وشركة Hedrix Technology (ويشار إليها بـ «الشركة» أو «الإدارة»). نحن نولي حماية البيانات اهتماماً بالغاً ونلتزم بالشفافية الكاملة حول نوعية البيانات الفنية والتشغيلية التي يتم جمعها وكيفية معالجتها. باستخدامك للبوت وتفعيله في خادمك، فإنك تمنح الإدارة موافقة صريحة، نهائية وغير قابلة للإلغاء على معالجة وحفظ البيانات الفنية وفق الأطر والضوابط المحددة أدناه.
                </p>
              </div>
            </div>

            {/* 1. Collection */}
            <div 
              id="collect" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">1. البيانات الفنية والتشغيلية المجمعة</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base mb-4">
                  لا يقوم Majestic Flux بجمع أو تخزين أي بيانات شخصية حساسة أو وثائق هوية حقيقية خارج النطاق الفني الممنوح للبوت عبر صلاحيات منصة Discord الرسمية. تنحصر البيانات المجمعة في الآتي:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {[
                    'معرف المستخدم (User ID) الخاص بـ Discord لربط إعدادات حسابك الافتراضية.',
                    'معرف الخادم (Guild ID) لحفظ إعدادات السيرفر وتفضيلات التشغيل الفنية.',
                    'سجلات التفاعل البرمجية والتشغيلية (Command logs, Telemetry metadata) وتاريخ ووقت الاستخدام ونوع الأوامر المنفذة.',
                    'إحصاءات وحركات استهلاك عملة Flux والاشتراكات لضمان دقة المحاسبة ومنع الغش.',
                    'البيانات التكوينية المسجلة للأدوار الافتراضية داخل خادمك لتسهيل التشغيل.'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-purple-950/20 border border-purple-500/10 text-purple-200/70 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Usage */}
            <div 
              id="usage" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">2. الاستخدام التشغيلي والرقابي للبيانات</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base mb-4">
                  تتم معالجة البيانات الفنية والتشغيلية المجمعة بشكل حصري من أجل تحقيق الأغراض التالية:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {[
                    'تحليل أداء البوت الفني ورفع تقارير الأخطاء البرمجية للمطورين لإصلاح المشاكل.',
                    'إدارة الباقات والتحقق الفني من أرصدة محفظة FLUX ومنع عمليات التلاعب أو التحايل.',
                    'توفير تجربة تقمص أدوار تفاعلية وديناميكية مخصصة وآمنة داخل السيرفر.',
                    'الكشف التلقائي عن الأنشطة غير المشروعة ومحاولات اختراق أو إغراق النظام وحظرها فوراً.'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-purple-950/20 border border-purple-500/10 text-purple-200/70 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-purple-300/80 text-sm mt-4 font-semibold">
                  * نحن لا نبيع، أو نؤجر، أو نشارك أيًا من هذه البيانات الفنية مع أطراف ثالثة أو شركات إعلانية لأي غرض تجاري أو تسويقي.
                </p>
              </div>
            </div>

            {/* 3. Protection */}
            <div 
              id="protection" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">3. التدابير الأمنية وحدود المسؤولية للبيانات</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  نلتزم بتطبيق إجراءات أمنية صارمة ومحكمة لحماية البيانات الفنية المخزنة بالاعتماد على قواعد البيانات المشفرة وعبر واجهات Discord الرسمية. ومع ذلك، يُقر المستخدم بأن الفضاء الرقمي ليس آمناً بشكل مطلق، وأن الشركة لا تضمن عدم حدوث اختراقات نتيجة ثغرات غير مكتشفة (Zero-day exploits) أو اختراق خوادم الاستضافة التابعة لأطراف ثالثة. بموجب هذا البند، يتنازل المستخدم عن أي حق في مقاضاة الشركة أو طلب تعويضات في حال تسرب أو فقدان البيانات الفنية أو التكوينية الناتجة عن عوامل خارجة عن إرادتنا.
                </p>
              </div>
            </div>

            {/* 4. Profiles */}
            <div 
              id="profiles" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">4. ملفات تعريف الهوية الافتراضية والترفيهية (Profiles)</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يُنشئ البوت ملف تعريف رقمي افتراضي لكل مستخدم لغرض إدارة مستويات الخبرة، السجلات المدنية الافتراضية، ورخص القيادة والبطاقات الشخصية التخيلية داخل السيرفر. هذه الملفات لا ترتبط بأي شكل من الأشكال بهويتك الواقعية أو معلوماتك المدنية أو الحكومية الحقيقية في العالم الحقيقي، ويُحظر تماماً إدخال بيانات حقيقية حساسة تخص أفراد أو مؤسسات داخل هذه الأنظمة.
                </p>
              </div>
            </div>

            {/* 5. Third-Party */}
            <div 
              id="third-party" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">5. تكاملات الطرف الثالث وإقرار Discord APIs</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يعمل البوت كلياً بالاعتماد على البنية التحتية لمنصة Discord وواجهاتها البرمجية الرسمية (Discord API). نحن لا نقوم بنقل أو بيع أي بيانات فنية أو إحصائية لأي جهات إعلانية أو أطراف خارجية. ومع ذلك، قد تخضع بعض العمليات لسياسات مزودي الاستضافة السحابية أو خدمات البنية التحتية الأساسية التي نستخدمها لتخزين البيانات. إن استخدامك للبوت يعني موافقتك على شروط الخصوصية التابعة لـ Discord أيضاً.
                </p>
              </div>
            </div>

            {/* 6. Rights */}
            <div 
              id="rights" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">6. حقوق المستخدم وحدود حذف البيانات</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يحق للمستخدم طلب مسح كافة البيانات الفنية وسجلات التقدم المرتبطة بمعرفه الرقمي (User ID) من قواعد بيانات البوت نهائياً من خلال تقديم تذكرة دعم فني في سيرفر Discord الرسمي الخاص بنا. يُقر المستخدم بأن تفعيل خيار الحذف سيؤدي إلى مسح فوري وتام لكافة أرصدة Flux الافتراضية والاشتراكات المرتبطة بحسابه، ولا يحق له المطالبة بأي تعويض مالي أو استرجاع نقدي بعد إتمام عملية الحذف.
                </p>
              </div>
            </div>

            {/* 7. Disclosure */}
            <div 
              id="disclosure" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">7. الإفصاح القانوني الاستثنائي</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  تحتفظ شركة Hedrix Technology بالحق الكامل في الإفصاح عن البيانات الفنية أو سجلات التفاعل المتاحة لدينا للجهات القضائية أو السلطات الأمنية الرسمية المختصة في حال صدور أمر قضائي ملزم، أو عند الضرورة القصوى لمكافحة أنشطة احتيالية أو تخريبية أو تهديدات إلكترونية موجهة تمس سلامة البوت أو المجتمع العام.
                </p>
              </div>
            </div>

            {/* 8. Changes */}
            <div 
              id="changes" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">8. التعديل المستمر على وثيقة السياسة</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  نحتفظ بكامل الصلاحية لتعديل أو تحديث وثيقة سياسة الخصوصية هذه في أي وقت لمواكبة التغيرات القانونية أو البرمجية. تصبح أي تعديلات سارية المفعول فور نشرها على موقعنا الإلكتروني أو خادم Discord الرسمي. تقع على عاتق المستخدم مسؤولية مراجعة هذه الصفحة بشكل دوري، ويعتبر استمرار استخدام البوت بعد التعديل إقراراً بالموافقة عليه.
                </p>
              </div>
            </div>

            {/* 9. Consent */}
            <div 
              id="consent" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/10"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">9. إقرار الموافقة والالتزام التام والنهائي</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  باستخدامك المستمر لبوت Majestic Flux وتفعيله، فإنك تقر بأنك قرأت وفهمت كافة بنود سياسة الخصوصية هذه، وتوافق دون قيد أو شرط على قيام البوت بجمع البيانات ومعالجتها وفق القواعد المذكورة، وتتفهم الطبيعة الترفيهية والتخيلية بالكامل لجميع العمليات والملفات الرقمية التفاعلية داخل النظام.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="text-center py-10 mt-8 border-t border-purple-500/10 text-xs text-purple-400/40">
          Hedrix Technology · Majestic Flux Privacy Policy · {new Date().getFullYear()}
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
