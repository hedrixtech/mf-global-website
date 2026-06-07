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
  ChevronLeft,
  CreditCard,
  Share2,
  Cookie,
  Mail,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

const Privacy: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('collect');

  useEffect(() => {
    setVisible(true);

    const handleScroll = () => {
      const sections = [
        'collect', 'usage', 'interactive', 'billing', 
        'sharing', 'security', 'cookies', 'rights', 
        'retention', 'thirdparty', 'children', 'updates', 'contact'
      ];
      
      const scrollPosition = window.scrollY + 250;

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
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const sectionsList = [
    { id: 'collect', label: '1. البيانات التي نقوم بجمعها', icon: Database },
    { id: 'usage', label: '2. كيف نستخدم البيانات', icon: Eye },
    { id: 'interactive', label: '3. الهوية الرقمية والخدمات التفاعلية', icon: UserCheck },
    { id: 'billing', label: '4. المدفوعات والاشتراكات', icon: CreditCard },
    { id: 'sharing', label: '5. مشاركة البيانات', icon: Share2 },
    { id: 'security', label: '6. حماية البيانات', icon: Lock },
    { id: 'cookies', label: '7. ملفات تعريف الارتباط', icon: Cookie },
    { id: 'rights', label: '8. حقوق المستخدم', icon: Scale },
    { id: 'retention', label: '9. الاحتفاظ بالبيانات', icon: Clock },
    { id: 'thirdparty', label: '10. خدمات الطرف الثالث', icon: Cpu },
    { id: 'children', label: '11. خصوصية الأطفال', icon: ShieldAlert },
    { id: 'updates', label: '12. التعديلات على السياسة', icon: HelpCircle },
    { id: 'contact', label: '13. التواصل معنا', icon: Mail }
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
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>وثيقة الخصوصية المحدثة · الجيل الجديد V2</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-purple-100 via-white to-purple-300 mb-4 tracking-tight">
            سياسة الخصوصية
          </h2>
          
          <div className="flex items-center justify-center gap-4 text-purple-400/60 text-xs md:text-sm mb-6">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-purple-500/80" />
              آخر تحديث: يونيو 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/30" />
            <span className="flex items-center gap-1 font-semibold text-purple-300/80">
              <Sparkles className="w-4 h-4 text-purple-400" />
              SaaS Compliance
            </span>
          </div>

          <p className="text-purple-200/70 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            مرحبًا بك في Majestic Flux. نحن ملتزمون تماماً بحماية خصوصية مستخدمينا وتوفير أعلى مستويات الأمان والشفافية حول كيفية معالجة البيانات وإدارتها عبر باقة خدماتنا ومنصاتنا التفاعلية.
          </p>

          <div className="mt-8 h-px w-48 mx-auto bg-gradient-to-l from-transparent via-purple-500/30 to-transparent" />
        </section>

        {/* Introduction Panel */}
        <div className="mb-8 glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden bg-purple-950/5 hover:border-purple-500/15 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-4.5 h-4.5 text-purple-400" />
            شمولية السياسة وتطبيقاتها
          </h3>
          <p className="text-purple-200/80 leading-[1.8] text-sm md:text-base">
            تنطبق هذه السياسة على كافة خدمات وأنظمة Majestic Flux التابعة لشركة Hedrix Technology، ويشمل ذلك الموقع الإلكتروني، لوحة التحكم السحابية، الهاتف التفاعلي، نظام الهوية الرقمية، التطبيقات البرمجية المصاحبة، وبوت Discord التابع للمنصة. باستخدامك لأي من هذه الخدمات، فإنك تقر وتوافق صراحة على البنود والممارسات الموضحة في هذه الوثيقة.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Sticky Navigation Index (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="glass-panel rounded-3xl p-6 border border-white/5 shadow-xl bg-purple-950/10 backdrop-blur-md">
              <h3 className="text-base font-bold text-purple-200 mb-4 border-b border-purple-500/10 pb-3 flex items-center gap-2">
                <Layers className="w-4.5 h-4.5 text-purple-400" />
                أقسام وثيقة الخصوصية
              </h3>
              <nav className="space-y-1 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
                {sectionsList.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-3 text-right text-xs rounded-xl transition-all duration-300 ${
                        active 
                          ? 'bg-purple-500/15 text-purple-200 border-r-4 border-purple-500 font-bold shadow-[0_0_15px_rgba(168,85,247,0.15)]' 
                          : 'text-purple-300/50 hover:text-purple-200 hover:bg-white/5 border-r-4 border-transparent'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-purple-400' : 'text-purple-500/30'}`} />
                      <span className="truncate flex-grow">{item.label}</span>
                      {active && <ChevronLeft className="w-3.5 h-3.5 text-purple-400" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Left Column: Content Panels */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Data Collection */}
            <div 
              id="collect" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">1. البيانات التي نقوم بجمعها</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base mb-6">
                نقوم بجمع البيانات اللازمة تقنيًا لتوفير خدماتنا وتقديم أداء مستقر وتجربة مستخدم متكاملة. تنقسم البيانات المجمعة إلى الفئات التالية:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                  <h4 className="text-sm font-bold text-purple-200 mb-2">👤 بيانات الحساب الأساسية</h4>
                  <p className="text-xs text-purple-300/70 leading-relaxed">
                    تتضمن معرف Discord الرقمي الخاص بك (Discord User ID)، اسم المستخدم، الصورة الشخصية العامة، ومعرف السيرفر (Server/Guild ID) عند تفعيل الخدمات للمجتمعات.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                  <h4 className="text-sm font-bold text-purple-200 mb-2">⚙️ بيانات تكوين الخدمة</h4>
                  <p className="text-xs text-purple-300/70 leading-relaxed">
                    تتضمن تفضيلات وإعدادات الحساب الخاصة بك، تفضيلات تهيئة السيرفر، بيانات الاشتراك والخطة المفعلة حاليًا (مثل Core Access أو Prime Access أو Nexus Access)، والسجلات التشغيلية التي تضمن دقة تزامن الخدمات.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                  <h4 className="text-sm font-bold text-purple-200 mb-2">🆔 بيانات الهوية الرقمية</h4>
                  <p className="text-xs text-purple-300/70 leading-relaxed">
                    تشمل المدخلات والنصوص العامة التي تقوم بمشاركتها وكتابتها داخل أنظمة الهوية التفاعلية في الهاتف الافتراضي، أو الصور والملفات المرفوعة لغرض تخصيص واجهتك.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                  <h4 className="text-sm font-bold text-purple-200 mb-2">📊 بيانات التحليل والاستخدام</h4>
                  <p className="text-xs text-purple-300/70 leading-relaxed">
                    تشمل عناوين الصفحات التي يتم تصفحها داخل لوحة التحكم، نوعية الأوامر والعمليات البرمجية المنفذة، معلومات المتصفح الأساسية ونوع الجهاز، وسجلات تشخيص الأداء والأخطاء البرمجية.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Data Usage */}
            <div 
              id="usage" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">2. كيف نستخدم البيانات</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base mb-4">
                يتم توجيه ومعالجة البيانات التي نجمعها بشكل هادف للوفاء بالالتزامات الفنية والخدمية التالية:
              </p>
              <ul className="space-y-2.5 text-purple-300/70 text-xs md:text-sm list-disc list-inside pr-2 leading-relaxed">
                <li>تشغيل وإدارة البنية الأساسية للمنصة وتقديم الخدمات للمستخدمين دون مشاكل فنية.</li>
                <li>إدارة الاشتراكات وتتبع فئات الوصول لضمان تفعيل مزايا الخطط المفعلة بشكل دقيق وتلقائي.</li>
                <li>التحقق من صحة العمليات التشغيلية وتوثيقها لمنع التلاعب وحماية البنية التحتية من الغش.</li>
                <li>تطوير وتحسين الميزات البرمجية وتشخيص أداء الأكواد ورفع استقرار الخوادم.</li>
                <li>تأمين حسابات المشتركين والكشف المبكر عن الهجمات البرمجية أو الاستخدامات المخالفة للسياسات.</li>
              </ul>
              <div className="mt-6 p-4 rounded-2xl border border-purple-500/10 bg-purple-500/5">
                <p className="text-xs text-purple-300 leading-relaxed font-semibold">
                  🛡️ التزام صارم: نحن لا نبيع، لا نؤجر، ولا نتاجر مطلقًا ببيانات المشتركين أو السيرفرات لأي جهات تسويقية أو أطراف خارجية تحت أي ظرف.
                </p>
              </div>
            </div>

            {/* 3. Digital Identity & Interactive Services */}
            <div 
              id="interactive" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">3. الهوية الرقمية والخدمات التفاعلية</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed">
                تشتمل منصة Majestic Flux على ميزات محاكاة متطورة مثل أنظمة الهوية الافتراضية، ورخص القيادة وبطاقات العمل الرقمية في الهاتف التفاعلي. 
                يُقر المستخدم إقراراً كاملاً بأن هذه المستندات والبيانات ذات طابع ترفيهي وتفاعلي بالكامل داخل بيئة المنصة، ولا تمثل أو تحاكي أي وثائق مدنية أو قانونية حقيقية. 
                يتحمل المستخدمون منفردين المسؤولية الكاملة عن طبيعة ومحتوى البيانات المدخلة في هذه الأنظمة الفرعية، ويُحظر تماماً استخدام معلومات واقعية حساسة تخص الغير دون إذن.
              </p>
            </div>

            {/* 4. Payments and Subscriptions */}
            <div 
              id="billing" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">4. المدفوعات والاشتراكات</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed mb-4">
                نعتمد على بوابات دفع خارجية موثوقة ومعتمدة (مثل Dodo Payments) لمعالجة وتأمين جميع عمليات الاشتراك والفوترة الرقمية للخطط (Core Access, Prime Access, Nexus Access). 
              </p>
              <p className="text-purple-300/70 text-xs md:text-sm leading-relaxed">
                نحن لا نقوم بتخزين أو معالجة أي بيانات بطاقات ائتمانية حساسة أو أرقام سرية على خوادمنا الخاصة. يتم تخزين معلومات فوترة تشغيلية وتاريخية محدودة تشمل:
              </p>
              <ul className="space-y-1.5 text-purple-300/60 text-xs mt-3 list-disc list-inside pr-2 leading-relaxed">
                <li>حالة تفعيل ونوع الباقة المشترك بها.</li>
                <li>معرف العملية وتاريخ بدئها وانتهاء صلاحية الباقة.</li>
                <li>العملة والمبلغ المدفوع لغرض التحقق والتأصيل المحاسبي والدعم الفني.</li>
              </ul>
            </div>

            {/* 5. Sharing Data */}
            <div 
              id="sharing" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">5. مشاركة البيانات</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed mb-4">
                قد نشارك جزءاً محدوداً من البيانات الفنية عند الضرورة وفي ظروف تشغيلية ضيقة تشمل فقط:
              </p>
              <ul className="space-y-2 text-purple-300/70 text-xs md:text-sm list-decimal list-inside pr-2 leading-relaxed">
                <li><strong>مزودي الخدمات الفنية:</strong> مثل استضافة الخوادم وإدارة قواعد البيانات المشفرة ومزودي بوابات الدفع لإكمال الخدمة بشكل آمن.</li>
                <li><strong>الامتثال للمتطلبات القانونية:</strong> عند وجود طلبات قضائية رسمية ملزمة أو لمكافحة وإيقاف الأنشطة التخريبية.</li>
                <li><strong>حفظ سلامة النظام:</strong> لحماية خوادم Majestic Flux والشركاء والمستخدمين من مخاطر الاحتيال والجرائم المعلوماتية.</li>
              </ul>
            </div>

            {/* 6. Data Protection */}
            <div 
              id="security" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">6. حماية البيانات</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed mb-4">
                نحن نعتمد تقنيات حماية متطورة وندير بيئات وقواعد بيانات مشفرة لضمان سرية وسلامة البيانات ومنع الوصول غير المصرح به. تتضمن تدابيرنا الأمنية:
              </p>
              <ul className="space-y-1.5 text-purple-300/70 text-xs md:text-sm list-disc list-inside pr-2 leading-relaxed">
                <li>تشفير البيانات والاتصالات الفنية الحساسة (SSL/TLS).</li>
                <li>تطبيق مستويات صارمة من الصلاحيات وقيود الوصول البرمجية للمطورين.</li>
                <li>أنظمة حماية متقدمة ومراقبة مستمرة لرصد ومكافحة التهديدات.</li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-red-950/15 border border-red-500/20">
                <p className="text-xs text-red-200/80 leading-relaxed flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                  إقرار بالمسؤولية: يقر المستخدم بأن الفضاء الرقمي لا يمكن ضمان أمانه بنسبة 100%، وأننا نبذل قصارى جهدنا التشغيلي لحماية البيانات، ولا نتحمل مسؤولية الظروف القهرية الناتجة عن اختراقات خارجة عن إرادتنا.
                </p>
              </div>
            </div>

            {/* 7. Cookies */}
            <div 
              id="cookies" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">7. ملفات تعريف الارتباط (Cookies)</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed">
                قد تستخدم لوحة التحكم السحابية الخاصة بنا ملفات تعريف ارتباط فنية أو ملفات تخزين متصفح محلية لتذكر تسجيل دخولك وتوثيق جلستك وتفضيلات استخدامك وتحسين سرعة استجابة المنصة. يمكن للمستخدم تعطيل هذه الملفات من خلال إعدادات المتصفح، مما قد يؤثر على تفعيل بعض خيارات لوحة التحكم.
              </p>
            </div>

            {/* 8. User Rights */}
            <div 
              id="rights" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">8. حقوق المستخدم</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed mb-4">
                تمنح القوانين المشتركين حقوقاً متعددة لإدارة وحفظ خصوصيتهم، ويشمل ذلك:
              </p>
              <ul className="space-y-2 text-purple-300/70 text-xs md:text-sm list-disc list-inside pr-2 leading-relaxed">
                <li>حق الاطلاع والحصول على نسخة من بياناتك الأساسية المسجلة.</li>
                <li>حق طلب تعديل أو تحديث المعلومات الخاطئة أو الناقصة.</li>
                <li>حق طلب إيقاف مؤقت أو دائم لمعالجة البيانات أو مسحها نهائياً.</li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
                <p className="text-xs text-purple-300/70 leading-relaxed">
                  * قد يؤدي طلب حذف الحساب أو البيانات نهائياً إلى إنهاء وصولك إلى الخطط النشطة وتصفير إعدادات السيرفر دون إمكانية استرجاعها.
                </p>
              </div>
            </div>

            {/* 9. Data Retention */}
            <div 
              id="retention" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">9. الاحتفاظ بالبيانات</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed">
                نحتفظ بالبيانات الفنية والتشغيلية فقط طوال الفترة اللازمة لتقديم الخدمة الفعالة أو لإتمام المتطلبات التنظيمية والمحاسبية. نقوم بعمليات تصفية وحذف دورية للسجلات التشغيلية التي لا تتطلب الحفظ الدائم، ويتم التخلص منها بشكل آمن ومشفر.
              </p>
            </div>

            {/* 10. Third-Party Services */}
            <div 
              id="thirdparty" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">10. خدمات الطرف الثالث</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed">
                تعتمد منصتنا في التشغيل على تكاملات وخدمات مقدمة من أطراف ثالثة تشمل ديسكورد (Discord API)، مزودي الاستضافة السحابية ومراكز البيانات السحابية، بوابات الدفع (مثل Dodo Payments)، وخدمات تحليل الأداء. يخضع تعاملك مع هذه الخدمات الخارجية لشروط خدمة وسياسات خصوصية مستقلة تابعة لتلك الشركات مباشرة، ونوصي بالاطلاع عليها.
              </p>
            </div>

            {/* 11. Children's Privacy */}
            <div 
              id="children" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">11. خصوصية الأطفال</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed">
                منصة وخدمات Majestic Flux غير موجهة للأطفال أو القصر الذين تقل أعمارهم عن الحد القانوني المسموح به لاستخدام الخدمات الإلكترونية وفقاً للأنظمة والتشريعات المحلية المعمول بها (عادة 13 عاماً فما فوق). نحن لا نجمع عن عمد أي بيانات تخص الأطفال دون السن القانوني.
              </p>
            </div>

            {/* 12. Policy Changes */}
            <div 
              id="updates" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">12. التعديلات على السياسة</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed">
                نحتفظ بكامل الصلاحية لتحديث أو تعديل وثيقة سياسة الخصوصية هذه دوريًا لمواكبة التغييرات التقنية أو التعديلات القانونية للخدمات السحابية. يتم نشر التحديثات مباشرة على هذه الصفحة وتصبح سارية فور نشرها. يلتزم المستخدم بمراجعة البنود بشكل دوري، ويعتبر الاستخدام المستمر للمنصة إقراراً بالموافقة على ما تم تحديثه.
              </p>
            </div>

            {/* 13. Contact Us */}
            <div 
              id="contact" 
              className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">13. التواصل معنا</h3>
              </div>
              <p className="text-purple-200/75 leading-[1.8] text-sm md:text-base leading-relaxed mb-6">
                إذا كانت لديك استفسارات حول سياسة الخصوصية، أو رغبت في الاستعلام أو تعديل البيانات المرتبطة بحسابك، يمكنك فتح تذكرة دعم فني أو التواصل مباشرة معنا من خلال القنوات الرسمية التالية:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
                <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <div className="px-5 py-3 rounded-xl border border-purple-500/20 bg-purple-950/40 text-purple-200 text-xs font-bold hover:bg-purple-900/20 transition-all duration-300 text-center">
                    خادم Discord الرسمي للدعم
                  </div>
                </a>
                <Link to="/" className="w-full sm:w-auto">
                  <div className="px-5 py-3 rounded-xl border border-white/5 bg-white/5 text-purple-300 text-xs hover:bg-white/10 transition-all duration-300 text-center">
                    الموقع الرئيسي للمنصة
                  </div>
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="text-center py-12 mt-12 border-t border-purple-500/10 text-xs text-purple-400/40">
          <p className="font-semibold text-purple-300/30 mb-2">Majestic Flux • A New Generation Interactive Platform</p>
          <p>Hedrix Technology · All Rights Reserved © {new Date().getFullYear()}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
