import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  Cpu, 
  Scale, 
  HelpCircle,
  Clock,
  ChevronLeft,
  CreditCard,
  Share2,
  Cookie,
  Mail,
  ShieldAlert,
  Compass,
  Check
} from 'lucide-react';

const Privacy: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('collect');
  const [integrityHash, setIntegrityHash] = useState<string>('SHA256-4f7c89b2...');
  const [systemLoad, setSystemLoad] = useState<number>(0.05);

  useEffect(() => {
    setVisible(true);

    // Dynamic hash & system load simulation
    const interval = setInterval(() => {
      const hex = '0123456789abcdef';
      let newHash = 'SHA256-';
      for (let i = 0; i < 8; i++) {
        newHash += hex[Math.floor(Math.random() * hex.length)];
      }
      newHash += '...';
      setIntegrityHash(newHash);
      setSystemLoad(parseFloat((0.02 + Math.random() * 0.08).toFixed(4)));
    }, 4000);

    const handleScroll = () => {
      const sections = [
        'collect', 'usage', 'interactive', 'billing', 
        'sharing', 'security', 'cookies', 'rights', 
        'retention', 'thirdparty', 'children', 'updates', 'contact'
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
    { id: 'collect', code: 'COL_01', label: 'البيانات التي نقوم بجمعها', icon: Database },
    { id: 'usage', code: 'USE_02', label: 'كيف نستخدم البيانات', icon: Eye },
    { id: 'interactive', code: 'IDN_03', label: 'الهوية الرقمية والخدمات التفاعلية', icon: UserCheck },
    { id: 'billing', code: 'BIL_04', label: 'المدفوعات والاشتراكات', icon: CreditCard },
    { id: 'sharing', code: 'SHR_05', label: 'مشاركة البيانات والحدود', icon: Share2 },
    { id: 'security', code: 'SEC_06', label: 'حماية البيانات والمسؤولية', icon: Lock },
    { id: 'cookies', code: 'COK_07', label: 'ملفات تعريف الارتباط', icon: Cookie },
    { id: 'rights', code: 'RGT_08', label: 'حقوق المستخدم وحق المسح', icon: Scale },
    { id: 'retention', code: 'RET_09', label: 'الاحتفاظ بالبيانات وتصفيتها', icon: Clock },
    { id: 'thirdparty', code: 'API_10', label: 'خدمات الطرف الثالث', icon: Cpu },
    { id: 'children', code: 'AGE_11', label: 'خصوصية الأطفال والقصر', icon: ShieldAlert },
    { id: 'updates', code: 'REV_12', label: 'التعديلات على السياسة', icon: HelpCircle },
    { id: 'contact', code: 'MSG_13', label: 'التواصل والدعم الفني', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-[#070709] text-slate-200 font-mono overflow-x-hidden relative selection:bg-amber-500 selection:text-black">
      
      {/* Stark background details: Scanline overlays & Warm amber particles */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none z-10 opacity-30" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-slate-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Custom Header: Brutally Minimalist Tech Header */}
      <header className="border-b border-white/10 py-6 relative z-20 bg-[#070709]/80 backdrop-blur-md sticky top-0 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 select-none">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-amber-500 bg-amber-500/10 flex items-center justify-center font-extrabold text-[10px] text-amber-400">
            M
          </div>
          <span className="font-extrabold text-sm tracking-wider uppercase text-white">
            Majestic Flux // Archive
          </span>
        </div>

        {/* Custom Navigation */}
        <nav className="flex items-center gap-2 flex-wrap justify-center text-[10px] uppercase font-bold">
          <Link to="/" className="px-3 py-1.5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-slate-400 hover:text-amber-400">
            [01] الرئيسية
          </Link>
          <Link to="/plans" className="px-3 py-1.5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-slate-400 hover:text-amber-400">
            [02] الاشتراكات
          </Link>
          <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-slate-400 hover:text-amber-400">
            [03] الدعم الفني
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-20">
        
        {/* Document Title Banner */}
        <section
          className={`py-8 mb-12 border-b border-white/10 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="max-w-3xl">
            <span className="text-[10px] text-amber-500 font-bold tracking-widest uppercase mb-2 block">// CLASSIFICATION: PRIVACY POLICY</span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4 font-serif">
              سياسة الخصوصية والأمان
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-xl">
              الوثيقة الحاكمة لحقوق البيانات الشخصية وحماية المعطيات الفنية والفوترة. يرجى الاطلاع على ضوابط معالجة البيانات قبل تفعيل خيارات الجيل الجديد.
            </p>
          </div>
        </section>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Live Integrity Scanner sidebar */}
          <aside className="lg:col-span-4 sticky top-24 space-y-6">
            
            {/* System Status Display widget */}
            <div className="border-2 border-white/10 bg-[#0c0c0e] p-6 rounded-none shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-xs font-bold text-white mb-4 border-b border-white/10 pb-3 flex items-center justify-between tracking-wider">
                <span>SYSTEM INSPECTOR</span>
                <span className="text-amber-500 text-[10px]">LIVE</span>
              </h3>

              <div className="space-y-3.5 text-[10px] text-slate-400 font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>INTEGRITY_HASH:</span>
                  <span className="text-amber-400 font-bold">{integrityHash}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>SYSTEM_LOAD:</span>
                  <span className="text-slate-300 font-bold">{(systemLoad * 100).toFixed(2)}%</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>SSL_CONNECTION:</span>
                  <span className="text-emerald-400 font-bold">ACTIVE // TLS1.3</span>
                </div>
                <div className="flex justify-between">
                  <span>DATA_COMPLIANCE:</span>
                  <span className="text-amber-500 font-bold">GDPR // SAAS V2</span>
                </div>
              </div>
            </div>

            {/* Monospace Sidebar Links */}
            <div className="border border-white/10 bg-[#0c0c0e] p-5 shadow-lg">
              <h3 className="text-xs font-bold text-slate-300 mb-3 border-b border-white/10 pb-3 uppercase tracking-widest flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-500" />
                فهرس الوثائق الفنية
              </h3>
              
              <nav className="space-y-1 max-h-[40vh] overflow-y-auto custom-scrollbar pr-1">
                {sectionsList.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-3 text-right text-xs transition-all duration-300 border-r-2 ${
                        active 
                          ? 'bg-amber-500/5 text-amber-400 border-amber-500 font-bold shadow-[inset_3px_0_0_0_#f59e0b]' 
                          : 'text-slate-500 hover:text-slate-300 hover:bg-white/5 border-transparent'
                      }`}
                    >
                      <span className={`text-[9px] font-bold ${active ? 'text-amber-500' : 'text-slate-600'}`}>
                        {item.code}
                      </span>
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-amber-400' : 'text-slate-700'}`} />
                      <span className="truncate flex-grow font-sans font-semibold text-[11px]">{item.label}</span>
                      {active && <ChevronLeft className="w-3 h-3 text-amber-400" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Left Column: Asymmetric Editorial Cards */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Data Collection */}
            <div 
              id="collect" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-amber-500" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-amber-500" />
              
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // COL_01</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">1. البيانات التي نقوم بجمعها</h3>
                </div>
              </div>
              
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans mb-6">
                يقوم النظام تلقائياً وبشكل مبرمج بحفظ ومعالجة المعطيات الفنية الضرورية لتفعيل الاشتراكات والتواصل السحابي:
              </p>
              
              <div className="space-y-4 font-sans">
                <div className="p-4 bg-black/40 border border-white/5">
                  <h4 className="text-xs font-bold text-amber-400 mb-1 font-mono">&gt; USER_IDENTIFIERS</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    معرف المستخدم (Discord User ID)، اسم الحساب العام، الصورة الشخصية، ومعرفات السيرفر لتفعيل البوت.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5">
                  <h4 className="text-xs font-bold text-amber-400 mb-1 font-mono">&gt; SUBSCRIBER_TIER_DATA</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    فئة الاشتراك الحالي (مثل Core Access أو Prime Access أو Nexus Access)، وإعدادات التخصيص التفضيلية الخاصة بك.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5">
                  <h4 className="text-xs font-bold text-amber-400 mb-1 font-mono">&gt; INTERACTIVE_PHONE_DATA</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    النصوص والملفات المرفوعة والمدخلة اختيارياً من قبلك داخل واجهات الهاتف الافتراضية وأنظمة الهوية.
                  </p>
                </div>

                <div className="p-4 bg-black/40 border border-white/5">
                  <h4 className="text-xs font-bold text-amber-400 mb-1 font-mono">&gt; TELEMETRY_LOGS</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    نوع الأوامر والعمليات البرمجية المنفذة، معلومات المتصفح، وسجلات تشخيص الأخطاء البرمجية للموقع.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. How We Use Data */}
            <div 
              id="usage" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-amber-500" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-amber-500" />

              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // USE_02</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">2. كيف نستخدم البيانات</h3>
                </div>
              </div>
              
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans mb-4">
                يتم استخدام البيانات المجمعة حصرياً لتحقيق الالتزامات التقنية والفوترة وتأمين السيرفرات:
              </p>
              
              <div className="space-y-3 font-sans">
                {[
                  'توفير ودعم وإدارة الخوادم الخاصة وتأمينها وضمان استجابة النظام.',
                  'التحقق التلقائي من حالة الدفع وتزامن خطط الاشتراك (Core, Prime, Nexus Access).',
                  'تحليل ومراجعة سجلات الأخطاء البرمجية لرفع الاستقرار وحظر محاولات إساءة الاستخدام.',
                  'التحقق الأمني للأنظمة لمنع عمليات القرصنة والتعدي على البنية التحتية.'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-black/20 border border-white/5 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Digital Identity */}
            <div 
              id="interactive" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // IDN_03</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">3. الهوية الرقمية والخدمات التفاعلية</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans leading-relaxed mb-4">
                تتضمن المنصة أنظمة محاكاة ترفيهية مثل الهويات ورخص القيادة والبطاقات التفاعلية. 
              </p>
              <p className="text-slate-400 leading-[1.8] text-[11px] font-sans">
                يقر المستخدم بأن هذه البيانات هي **افتراضية تماماً ولغرض الترفيه واللعب فقط** داخل المنصة، ولا تحمل أي مرجعية رسمية أو قانونية في العالم الحقيقي. يلتزم المستخدم بعدم إدخال بيانات حقيقية حساسة.
              </p>
            </div>

            {/* 4. Payments */}
            <div 
              id="billing" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // BIL_04</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">4. المدفوعات والاشتراكات</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans mb-4">
                تتم معالجة وتأمين المدفوعات والفوترة السحابية عبر بوابات معتمدة متوافقة مع معايير الأمان (مثل Dodo Payments).
              </p>
              <p className="text-slate-400 text-xs font-sans mb-4">
                لا تحتفظ خوادمنا بأرقام بطاقات الدفع أو البيانات المصرفية الحساسة. يُخزن فقط سجل تكويني للتحقق الفني يشمل حالة الاشتراك، رقم الفاتورة المشفر، والمبلغ لغرض المراجعة.
              </p>
            </div>

            {/* 5. Sharing Data */}
            <div 
              id="sharing" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Share2 className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // SHR_05</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">5. مشاركة البيانات والحدود</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans mb-4">
                لا نبيع بيانات المستخدمين أو السيرفرات لأي طرف ثالث. قد نشارك أجزاء تقنية محدودة فقط مع:
              </p>
              <ul className="space-y-2 text-slate-400 text-xs font-sans list-disc list-inside pr-2 leading-relaxed">
                <li>مزودي خدمات الاستضافة السحابية ومزودي بوابات الدفع لإتمام عمليات التشغيل.</li>
                <li>السلطات الأمنية الرسمية عند استلام مذكرات أو أوامر قضائية ملزمة بموجب القانون.</li>
                <li>فرق الفحص الأمني لمنع وكشف محاولات التلاعب وإساءة استخدام المنصة.</li>
              </ul>
            </div>

            {/* 6. Security */}
            <div 
              id="security" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // SEC_06</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">6. حماية البيانات والمسؤولية</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans mb-4">
                تطبق Hedrix Technology تشفيراً شاملاً وجدراناً نارية لحماية قواعد البيانات وتراسل البيانات.
              </p>
              <div className="p-4 bg-red-950/20 border border-red-500/20 text-red-200/90 text-xs font-sans rounded-none flex items-start gap-2.5">
                <ShieldAlert className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                <span>إقرار بعدم الضمان المطلق: يُقر المستخدم بأن الأنظمة الرقمية معرضة للاختراق دائماً، ويتنازل عن مقاضاة الشركة أو طلب تعويضات في حال فقدان أو تسرب البيانات نتيجة اختراقات برمجية غير متوقعة خارجة عن إرادتنا.</span>
              </div>
            </div>

            {/* 7. Cookies */}
            <div 
              id="cookies" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // COK_07</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">7. ملفات تعريف الارتباط</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans leading-relaxed">
                نستخدم ملفات تعريف الارتباط (Cookies) وملفات التخزين المحلية في لوحة التحكم لتذكر جلسة تسجيل الدخول وتوثيق هويتك. يمكنك تعطيلها عبر إعدادات المتصفح، ولكن قد تفقد بعض الميزات الفنية.
              </p>
            </div>

            {/* 8. User Rights */}
            <div 
              id="rights" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // RGT_08</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">8. حقوق المستخدم وحق المسح</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans mb-4">
                يحق للمشترك طلب الحصول على نسخة من بياناته، تعديلها، أو مسحها نهائياً من خوادمنا عبر فتح تذكرة دعم فني.
              </p>
              <div className="p-4 bg-slate-900 border border-white/5 text-xs text-slate-400 font-sans">
                * تنويه: طلب حذف البيانات يؤدي فوراً إلى تصفير أرصدتك وإلغاء باقاتك النشطة وإعدادات السيرفر كلياً ودون إمكانية للاسترجاع.
              </div>
            </div>

            {/* 9. Data Retention */}
            <div 
              id="retention" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // RET_09</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">9. الاحتفاظ بالبيانات وتصفيتها</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans leading-relaxed">
                نحتفظ بالبيانات فقط للمدة المطلوبة لتقديم خدماتنا والوفاء بالمتطلبات التشغيلية والتأصيل المحاسبي. نقوم بعمليات فلترة دورية لحذف سجلات التفاعل المنتهية الصلاحية بشكل آمن.
              </p>
            </div>

            {/* 10. Third-Party API */}
            <div 
              id="thirdparty" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // API_10</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">10. خدمات الطرف الثالث</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans leading-relaxed">
                يعتمد البوت والموقع على تكاملات خارجية تشمل واجهات Discord API الرسمية، بوابات الفوترة (مثل Dodo Payments)، ومزودي الاستضافة السحابية. تخضع جميع هذه المنصات لسياسات خصوصية مستقلة تماماً لا نتحمل مسؤوليتها الفنية.
              </p>
            </div>

            {/* 11. Children's Privacy */}
            <div 
              id="children" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // AGE_11</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">11. خصوصية الأطفال والقصر</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans leading-relaxed">
                خدمات Majestic Flux غير موجهة للأطفال أو القصر دون السن القانوني المسموح به لاستخدام التطبيقات الرقمية محلياً (عادة 13 عاماً فما دون). نحن لا نجمع عن عمد أي بيانات تخص القصر.
              </p>
            </div>

            {/* 12. Updates */}
            <div 
              id="updates" 
              className="border border-white/10 bg-[#0a0a0c] p-6 md:p-8 relative hover:border-amber-500/20 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500/70 tracking-widest block font-bold">SUB_SECTION // REV_12</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">12. التعديلات على السياسة</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans leading-relaxed">
                نحتفظ بكامل الصلاحية لتحديث أو تعديل وثيقة سياسة الخصوصية هذه في أي وقت لمواكبة التغيرات القانونية والبرمجية. يتم نشر النسخة المحدثة على هذا الرابط وتصبح سارية فوراً، ويعتبر استمرارك باستخدام الخدمات قبولاً بها.
              </p>
            </div>

            {/* 13. Contact & Support */}
            <div 
              id="contact" 
              className="border-2 border-amber-500 bg-amber-500/5 p-6 md:p-8 relative shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-amber-500 tracking-widest block font-bold">SUB_SECTION // MSG_13</span>
                  <h3 className="text-lg font-bold text-white uppercase font-serif">13. التواصل والدعم الفني</h3>
                </div>
              </div>
              <p className="text-slate-300/80 leading-[1.8] text-xs md:text-sm font-sans leading-relaxed mb-6">
                إذا كان لديك أي استفسار بخصوص هذه السياسة أو رغبت في تعديل أو مراجعة بياناتك المسجلة، يرجى فتح تذكرة دعم فني في سيرفرنا الرسمي:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
                <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <div className="px-5 py-3 border border-amber-500 bg-amber-500 text-black text-xs font-mono font-bold hover:bg-transparent hover:text-amber-400 transition-all duration-300 text-center">
                    &gt; OPEN_DISCORD_TICKET
                  </div>
                </a>
                <Link to="/" className="w-full sm:w-auto">
                  <div className="px-5 py-3 border border-white/10 bg-transparent text-slate-400 text-xs font-mono hover:text-white hover:border-white/20 transition-all duration-300 text-center">
                    &gt; EXIT_TO_MAIN
                  </div>
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="text-center py-12 mt-16 border-t border-white/10 text-slate-600 text-xs font-mono">
          <p className="font-semibold text-slate-400/40 mb-2">MAJESTIC FLUX // SECURE ARCHIVE PLATFORM</p>
          <p>HEDRIX TECHNOLOGY · ALL RIGHTS RESERVED © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
