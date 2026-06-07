import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { 
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
  Terminal,
  Binary,
  Check
} from 'lucide-react';

const Privacy: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('collect');
  const [terminalLog, setTerminalLog] = useState<string>('INIT_DECRYPTION_SEQ...');

  useEffect(() => {
    setVisible(true);

    const logs = [
      'INIT_DECRYPTION_SEQ...',
      'CONNECTING TO MAJESTIC_FLUX_OS...',
      'SECURITY PROTOCOL: SECURE_LINK_OK',
      'COMPLIANCE STANDARD: SAAS_V2_GDPR',
      'DECRYPTING PRIVACY MANIFEST... DONE'
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length - 1) {
        currentLogIndex++;
        setTerminalLog(logs[currentLogIndex]);
      } else {
        clearInterval(interval);
      }
    }, 1200);

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
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
    { id: 'collect', code: 'DATA_01', label: 'البيانات التي نقوم بجمعها', icon: Database },
    { id: 'usage', code: 'DATA_02', label: 'كيف نستخدم البيانات', icon: Eye },
    { id: 'interactive', code: 'SYS_03', label: 'الهوية الرقمية والخدمات التفاعلية', icon: UserCheck },
    { id: 'billing', code: 'PAY_04', label: 'المدفوعات والاشتراكات', icon: CreditCard },
    { id: 'sharing', code: 'OUT_05', label: 'مشاركة البيانات', icon: Share2 },
    { id: 'security', code: 'SEC_06', label: 'حماية البيانات والمسؤولية', icon: Lock },
    { id: 'cookies', code: 'TKN_07', label: 'ملفات تعريف الارتباط', icon: Cookie },
    { id: 'rights', code: 'RGT_08', label: 'حقوق المستخدم وحق المسح', icon: Scale },
    { id: 'retention', code: 'RET_09', label: 'الاحتفاظ بالبيانات وتصفيتها', icon: Clock },
    { id: 'thirdparty', code: 'API_10', label: 'خدمات الطرف الثالث', icon: Cpu },
    { id: 'children', code: 'AGE_11', label: 'خصوصية الأطفال والقصر', icon: ShieldAlert },
    { id: 'updates', code: 'REV_12', label: 'التعديلات على السياسة', icon: HelpCircle },
    { id: 'contact', code: 'MSG_13', label: 'التواصل والدعم الفني', icon: Mail }
  ];

  return (
    <Layout>
      {/* Decorative Cyberpunk Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1a3a_1px,transparent_1px),linear-gradient(to_bottom,#1f1a3a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.07] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10" dir="rtl">
        {/* Header Section */}
        <section
          className={`text-center py-16 md:py-24 transition-all duration-1000 ease-out relative ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Cyber scanner lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-mono mb-6 uppercase tracking-widest select-none">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Link Status: Encrypted // V2</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 mb-6 tracking-tight font-mono uppercase">
            PRIVACY_MANIFEST.sys
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400/80 text-xs md:text-sm mb-8 font-mono">
            <span className="flex items-center gap-2 border border-white/5 bg-white/5 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>آخر تحديث: يونيو 2026</span>
            </span>
            <span className="flex items-center gap-2 border border-white/5 bg-white/5 px-3 py-1.5 rounded-lg">
              <Binary className="w-4 h-4 text-purple-400" />
              <span>SEC_LEVEL: 05</span>
            </span>
          </div>

          <p className="text-slate-300/80 max-w-2xl mx-auto leading-relaxed text-sm md:text-base pr-4 border-r-2 border-purple-500/30 text-right">
            مرحبًا بك في البوابة التنظيمية لـ Majestic Flux. نحن نضع سرية وحماية بياناتك التشغيلية في طليعة أولوياتنا الهندسية. توضح هذه الوثيقة بأسلوب تقني شفاف كيف نقوم بمعالجة وتأمين بياناتك الرقمية عبر منصتنا السحابية.
          </p>
        </section>

        {/* Live Security Console / Decryption simulation */}
        <div className="mb-12 max-w-4xl mx-auto glass-panel rounded-tr-3xl rounded-bl-3xl p-6 border-l-2 border-t-2 border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-2xl relative overflow-hidden font-mono text-left" dir="ltr">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>SECURE PROTOCOL TERMINAL v2.0.1</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
          </div>
          <div className="space-y-1.5 text-xs md:text-sm text-cyan-300/90 leading-relaxed font-semibold">
            <p className="text-slate-500 font-bold">// SYSTEM LOGS:</p>
            <p>&gt; {terminalLog}</p>
            <p className="text-purple-400/90">&gt; DECRYPTION_KEYS: Verified [Dodo Payments // Core/Prime/Nexus Access]</p>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Cybernetic Navigation Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 border border-purple-500/15 shadow-xl bg-purple-950/10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-sm font-extrabold text-cyan-300/90 mb-4 border-b border-purple-500/10 pb-3 flex items-center justify-between font-mono tracking-wider">
                <span className="flex items-center gap-2">
                  <Layers className="w-4.5 h-4.5 text-purple-400" />
                  MANIFEST_INDEX
                </span>
                <span className="text-xs text-purple-400/50">SEC_LEVEL_05</span>
              </h3>
              
              <nav className="space-y-1.5 max-h-[55vh] overflow-y-auto custom-scrollbar pr-1">
                {sectionsList.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-3.5 text-right text-xs rounded-xl transition-all duration-300 ${
                        active 
                          ? 'bg-gradient-to-l from-cyan-950/30 to-purple-950/20 text-cyan-300 border-r-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)] font-bold font-mono' 
                          : 'text-slate-400/60 hover:text-slate-200 hover:bg-white/5 border-r-2 border-transparent font-mono'
                      }`}
                    >
                      <span className={`text-[10px] tracking-widest opacity-60 font-mono ${active ? 'text-cyan-400' : 'text-slate-600'}`}>
                        {item.code}
                      </span>
                      <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-cyan-400' : 'text-slate-500/30'}`} />
                      <span className="truncate flex-grow font-tajawal">{item.label}</span>
                      {active && <ChevronLeft className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Left Column: Asymmetric Glowing Section Cards */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Data Collection */}
            <div 
              id="collect" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full blur-[2px]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest">MANIFEST_FILE // 01</span>
                  <h3 className="text-xl font-extrabold text-white">البيانات التي نقوم بجمعها</h3>
                </div>
              </div>
              
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base mb-6 font-tajawal">
                من أجل تشغيل المنصة وربط البوت وتوفير باقات الاشتراك المخصصة بأعلى فاعلية، نقوم بجمع مجموعة من البيانات الفنية والتشغيلية المحدودة:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'الحساب والتعريف',
                    desc: 'معرف Discord الرقمي (User ID)، اسم المستخدم العام، الصورة الشخصية العامة، ومعرف السيرفر (Server ID) لربط الأنظمة تلقائياً.'
                  },
                  {
                    title: 'تفاصيل الخدمة والخطط',
                    desc: 'نوع الباقة والاشتراك الحالي (Core Access, Prime Access, Nexus Access) وإعدادات التشغيل الفنية المسجلة من قبلك.'
                  },
                  {
                    title: 'بيانات التفاعل والهاتف',
                    desc: 'المدخلات والمستندات الافتراضية المرفوعة داخل واجهات الهاتف التفاعلي ونظام الهوية الافتراضية داخل اللعبة.'
                  },
                  {
                    title: 'إحصاءات الاستخدام والأداء',
                    desc: 'الصفحات التي تم زيارتها بلوحة التحكم، الأوامر المنفذة، معلومات الجهاز والمتصفح وسجلات تشخيص الأخطاء.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/5 bg-slate-950/40 relative overflow-hidden hover:border-purple-500/10 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/20" />
                    <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                      <span className="text-cyan-400 text-xs font-mono">[{i+1}]</span>
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400/90 leading-relaxed font-tajawal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. How We Use Data */}
            <div 
              id="usage" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full blur-[2px]" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400/70 tracking-widest">MANIFEST_FILE // 02</span>
                  <h3 className="text-xl font-bold text-white">كيف نستخدم البيانات</h3>
                </div>
              </div>
              
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base mb-6 font-tajawal">
                تُعالج البيانات الفنية والتشغيلية المجمعة من أجل ضمان الأداء والاستقرار وتحسين تجربة اللعب والفوترة السحابية:
              </p>
              
              <div className="space-y-3">
                {[
                  'توفير ودعم وإدارة البنية التحتية والمنصات السحابية بشكل كامل ودون انقطاع.',
                  'تخصيص المزايا بناءً على فئة الاشتراك المفعلة (Core Access, Prime Access, Nexus Access).',
                  'إجراء عمليات التحقق المبرمجة للمدفوعات عبر بوابات الدفع الخارجية وتوثيقها لمنع تضارب الفواتير.',
                  'مراقبة جودة الاتصال وتتبع الأخطاء البرمجية لإصلاحها وتأمين السيرفر من هجمات الإغراق.',
                  'حماية وسلامة السيرفرات والتأكد من مطابقة شروط الاستخدام وقوانين منصة ديسكورد.'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-slate-950/20 font-tajawal">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-slate-300/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Digital Identity */}
            <div 
              id="interactive" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest">MANIFEST_FILE // 03</span>
                  <h3 className="text-xl font-bold text-white">الهوية الرقمية والخدمات التفاعلية</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed mb-4 font-tajawal">
                تتيح المنصة إمكانية تخصيص هويات رقمية وملفات تعريف افتراضية ورخص قيادة تخيلية داخل بيئة اللعب التفاعلية. 
              </p>
              <p className="text-slate-400/90 leading-[1.8] text-xs md:text-sm font-tajawal">
                هذه الهويات والملفات هي **تخيلية وترفيهية بالكامل** ومخصصة للاستخدام البرمجي الداخلي فقط. لا تعبر ولا تمثل مستندات ثبوتية أو حكومية واقعية مطلقاً. يتحمل المستخدم المسؤولية الفردية التامة عن كافة البيانات والصور التي يختار إدخالها أو رفعها داخل هذه الأنظمة.
              </p>
            </div>

            {/* 4. Payments & Billing */}
            <div 
              id="billing" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400/70 tracking-widest">MANIFEST_FILE // 04</span>
                  <h3 className="text-xl font-bold text-white">المدفوعات والاشتراكات</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed mb-4 font-tajawal">
                تتم معالجة وتسجيل كافة معاملات الاشتراكات السحابية عن طريق مزودي وبوابات دفع معتمدين دولياً (مثل Dodo Payments) لتوفير أقصى معايير الأمان. 
              </p>
              <div className="p-4 rounded-2xl border border-purple-500/10 bg-purple-500/5 font-mono text-xs text-purple-300/80 space-y-2">
                <p>&gt; STORAGE_STATUS: NO_SENSITIVE_CREDIT_CARD_DATA_STORED</p>
                <p>&gt; KEEP_METADATA: [payment_status, tx_id, subscription_tier, renew_date]</p>
              </div>
            </div>

            {/* 5. Sharing Data */}
            <div 
              id="sharing" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest">MANIFEST_FILE // 05</span>
                  <h3 className="text-xl font-bold text-white">مشاركة البيانات</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed mb-4 font-tajawal">
                نحن لا نقوم ببيع أو مشاركة بيانات المشتركين لأغراض تسويقية أو دعائية. تُشارك البيانات الفنية فقط في الحالات الضرورية المحددة أدناه:
              </p>
              <ul className="space-y-2 text-slate-400 text-xs md:text-sm list-decimal list-inside pr-2 leading-relaxed font-tajawal">
                <li>مع مزودي الاستضافة والبنية الأساسية لتسهيل تشغيل الخوادم.</li>
                <li>لتطبيق شروط الخدمة وكشف عمليات التلاعب والقرصنة الرقمية.</li>
                <li>عند الاستجابة لطلبات قضائية ملزمة بموجب الأنظمة والقوانين المعمول بها.</li>
              </ul>
            </div>

            {/* 6. Security and Liability */}
            <div 
              id="security" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400/70 tracking-widest">MANIFEST_FILE // 06</span>
                  <h3 className="text-xl font-bold text-white">حماية البيانات والمسؤولية</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed mb-4 font-tajawal">
                نلتزم بتشفير كافة اتصالات البنية الأساسية (SSL/TLS) ووضع قيود صارمة على وصول البيانات لقواعد البيانات. ومع ذلك، يُقر المستخدم فوتوغرافياً بأن البيئة الرقمية ليست آمنة بنسبة مطلقة، وأننا نبذل قصارى جهدنا التقني لمنع حدوث ثغرات، ولا نتحمل المسؤولية القانونية في حال تسرب البيانات نتيجة عوامل طارئة خارجة عن سلطتنا الفنية.
              </p>
            </div>

            {/* 7. Cookies */}
            <div 
              id="cookies" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest">MANIFEST_FILE // 07</span>
                  <h3 className="text-xl font-bold text-white">ملفات تعريف الارتباط (Cookies)</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed font-tajawal">
                نستخدم ملفات تعريف الارتباط وتقنيات التخزين المحلية في المتصفح لتوثيق جلسة تسجيل دخولك للوحة التحكم وحفظ الخيارات التفضيلية وتسهيل التنقل. يمكنك التحكم بها بالكامل أو إلغاؤها عبر إعدادات المتصفح.
              </p>
            </div>

            {/* 8. User Rights */}
            <div 
              id="rights" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400/70 tracking-widest">MANIFEST_FILE // 08</span>
                  <h3 className="text-xl font-bold text-white">حقوق المستخدم وحق المسح</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed mb-4 font-tajawal">
                يحق لكل مشترك الاطلاع على كافة بياناته وتعديلها أو طلب حذفها نهائياً من سجلات قواعد البيانات من خلال فتح تذكرة دعم فني.
              </p>
              <div className="p-4 rounded-xl border border-red-500/10 bg-red-500/5">
                <p className="text-xs text-red-300/90 leading-relaxed font-tajawal">
                  ⚠️ تنبيه: إتمام طلب مسح البيانات كلياً يؤدي فوراً إلى إلغاء باقاتك النشطة وتصفير إعدادات السيرفر دون إمكانية استرجاعها.
                </p>
              </div>
            </div>

            {/* 9. Data Retention */}
            <div 
              id="retention" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest">MANIFEST_FILE // 09</span>
                  <h3 className="text-xl font-bold text-white">الاحتفاظ بالبيانات وتصفيتها</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed font-tajawal">
                نحتفظ بالبيانات فقط للمدة اللازمة لتوفير الخدمة والفوترة السحابية ومكافحة التلاعب الفني. نقوم بعمليات تصفية دورية وممنهجة لحذف سجلات الأداء والأوامر والعمليات التاريخية غير اللازمة لضمان خفة واستقرار قواعد البيانات.
              </p>
            </div>

            {/* 10. Third-Party API */}
            <div 
              id="thirdparty" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400/70 tracking-widest">MANIFEST_FILE // 10</span>
                  <h3 className="text-xl font-bold text-white">خدمات الطرف الثالث</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed font-tajawal">
                تتكامل خدماتنا مع واجهات خارجية تابعة لمنصات أخرى مثل Discord API ومزودي خوادم الاستضافة السحابية ومزود معالجة المدفوعات Dodo Payments. ننوه بأن تلك الخدمات تخضع لسياسات خصوصية وشروط خدمة منفصلة ومستقلة تماماً عنا.
              </p>
            </div>

            {/* 11. Children's Privacy */}
            <div 
              id="children" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest">MANIFEST_FILE // 11</span>
                  <h3 className="text-xl font-bold text-white">خصوصية الأطفال والقصر</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed font-tajawal">
                المنصة وجميع الأنظمة التابعة غير موجهة للأطفال أو القصر الذين لا يسمح لهم قانونياً باستخدام الخدمات الرقمية وفق التشريعات المحلية المعمول بها (أقل من 13 عاماً). نحن لا نجمع بيانات خاصة بالبنات أو الأولاد القصر بشكل متعمد.
              </p>
            </div>

            {/* 12. Updates */}
            <div 
              id="updates" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-purple-950/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-400/70 tracking-widest">MANIFEST_FILE // 12</span>
                  <h3 className="text-xl font-bold text-white">التعديلات على السياسة</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed font-tajawal">
                نحتفظ بكامل الصلاحية لتحديث أو تعديل وثيقة الخصوصية هذه في أي وقت تزامناً مع التغيرات التقنية أو التنظيمية للشركة. نوصي بمراجعة الصفحة دورياً، ويشكل استمرار استخدام خدماتنا بعد تحديثها قبولاً ضمنياً بها.
              </p>
            </div>

            {/* 13. Contact & Support */}
            <div 
              id="contact" 
              className="glass-panel rounded-tr-3xl rounded-bl-3xl p-6 md:p-8 border border-cyan-500/30 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/50 bg-cyan-950/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/35 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest">MANIFEST_FILE // 13</span>
                  <h3 className="text-xl font-bold text-white">التواصل والدعم الفني</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-sm md:text-base leading-relaxed mb-6 font-tajawal">
                إذا كانت لديك أي أسئلة متعلقة ببياناتك الخاصة أو الخصوصية، يرجى التوجه لسيرفر الدعم الفني وفتح تذكرة مباشرة مع الإدارة:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
                <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <div className="px-6 py-3.5 rounded-xl border border-cyan-500/30 bg-cyan-950/30 text-cyan-200 text-xs font-mono font-bold hover:bg-cyan-900/20 hover:border-cyan-400 transition-all duration-300 text-center">
                    &gt; OPEN_SUPPORT_TICKET
                  </div>
                </a>
                <Link to="/" className="w-full sm:w-auto">
                  <div className="px-6 py-3.5 rounded-xl border border-white/5 bg-white/5 text-slate-300 text-xs font-mono hover:bg-white/10 transition-all duration-300 text-center">
                    &gt; GO_TO_HOMEPAGE
                  </div>
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="text-center py-12 mt-12 border-t border-purple-500/10 text-xs text-slate-500 font-mono">
          <p className="font-semibold text-cyan-400/40 mb-2">MAJESTIC FLUX // AN INTERACTIVE PLATFORM</p>
          <p>HEDRIX TECHNOLOGY · ALL RIGHTS RESERVED © {new Date().getFullYear()}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
