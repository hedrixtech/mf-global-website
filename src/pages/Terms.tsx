import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { 
  FileText, 
  Scale, 
  Copyright, 
  Wallet, 
  RefreshCw, 
  CornerUpLeft, 
  AlertTriangle, 
  Cpu, 
  HelpCircle, 
  Gamepad2, 
  Lock, 
  ShieldCheck, 
  MessageSquare, 
  Settings, 
  Compass,
  ArrowLeft,
  CheckCircle2,
  Clock
} from 'lucide-react';

const Terms: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    setVisible(true);

    const handleScroll = () => {
      const sections = [
        'intro', 'fairuse', 'copyright', 'wallet', 
        'updates', 'refunds', 'liability', 'commercial', 
        'support', 'simulation', 'safeuse', 'similarity', 
        'usercontent', 'regulation', 'compatibility'
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
    { id: 'intro', label: 'شروط الخدمة العامة', icon: FileText },
    { id: 'fairuse', label: '1. الاستخدام العادل', icon: Scale },
    { id: 'copyright', label: '2. الملكية الفكرية', icon: Copyright },
    { id: 'wallet', label: '3. الاشتراكات والمحفظة', icon: Wallet },
    { id: 'updates', label: '4. التحديثات والتغييرات', icon: RefreshCw },
    { id: 'refunds', label: '5. استرداد المبالغ', icon: CornerUpLeft },
    { id: 'liability', label: '6. مسؤولية الاستخدام', icon: AlertTriangle },
    { id: 'commercial', label: '7. التخصيص التجاري', icon: Cpu },
    { id: 'support', label: '8. الدعم الفني', icon: HelpCircle },
    { id: 'simulation', label: '9. المحتوى والأنظمة الواقعية', icon: Gamepad2 },
    { id: 'safeuse', label: '10. الاستخدام الآمن للمحتوى', icon: Lock },
    { id: 'similarity', label: '11. التشابه مع الأنظمة', icon: Compass },
    { id: 'usercontent', label: '12. المحتوى المولد من المستخدم', icon: MessageSquare },
    { id: 'regulation', label: '13. الرقابة والتعديلات', icon: Settings },
    { id: 'compatibility', label: '14. التوافق مع Discord', icon: ShieldCheck }
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
            <Scale className="w-3.5 h-3.5 text-purple-400" />
            <span>اتفاقية الاستخدام والبنود القانونية</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-purple-100 via-white to-purple-300 mb-4">
            شروط الاستخدام
          </h2>
          <div className="flex items-center justify-center gap-2 text-purple-400/60 text-xs md:text-sm mb-6">
            <Clock className="w-4 h-4" />
            <span>يرجى قراءتها بدقة قبل البدء باستخدام خدماتنا</span>
          </div>
          <div className="h-px w-32 mx-auto bg-gradient-to-l from-transparent via-purple-500/30 to-transparent" />
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Sticky Navigation Index (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 max-h-[80vh] overflow-y-auto scrollbar-custom pr-1">
            <div className="glass-panel rounded-2xl p-6 border border-white/5 shadow-md">
              <h3 className="text-lg font-bold text-purple-200 mb-4 border-b border-purple-500/10 pb-3 flex items-center gap-2">
                <FileText className="w-4.5 h-4.5 text-purple-400" />
                البنود والأقسام
              </h3>
              <nav className="space-y-1">
                {sectionsList.map((item) => {
                  const Icon = item.icon;
                  const active = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-right text-sm rounded-xl transition-all duration-300 ${
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
                  <FileText className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">مقدمة الاتفاقية</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  تعتبر هذه الشروط والبنود اتفاقية قانونية ملزمة بالكامل وثنائية الطرف تسري مباشرة بين المستخدم (ويشار إليه بـ «المستخدم» أو «المستفيد») وإدارة Majestic Flux وشركة Hedrix Technology (ويشار إليها بـ «الإدارة» أو «الشركة»). بمجرد تفعيل البوت أو استخدامه بأي شكل من الأشكال، فإنك تقر إقراراً تاماً وباتااً وبدون أي تحفظ باطلاعك وموافقتك الكاملة على كافة البنود والشروط الواردة في هذه الوثيقة. إذا كنت لا توافق على هذه البنود أو أي جزء منها، فيتعين عليك فوراً إيقاف استخدام الخدمة وإزالة البوت من خادمك.
                </p>
              </div>
            </div>

            {/* 1. Fair Use */}
            <div 
              id="fairuse" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">1. الاستخدام العادل والقيود</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يُحظر تماماً وبشكل قطعي استخدام البوت في أي أنشطة تنتهك قوانين مكافحة الجرائم المعلوماتية أو شروط خدمة منصة Discord الرسمية. يلتزم المستخدم التزاماً مطلقاً بعدم استغلال البوت لإرسال الرسائل المزعجة (Spamming)، أو محاولات إغراق خوادم الاستضافة بأوامر متكررة (DDoS)، أو استغلال الثغرات الفنية والبرمجية (Exploits) بدلاً من الإبلاغ عنها. أي محاولة للتلاعب بنظام البوت أو إدخال برمجيات خبيثة ستؤدي إلى حظر المستخدم والمنشأة أو الخادم (Guild) بالكامل بشكل دائم ومباشر دون سابق إنذار، مع الاحتفاظ بكامل الحقوق القانونية في المقاضاة والمطالبة بالتعويضات.
                </p>
              </div>
            </div>

            {/* 2. Intellectual Property */}
            <div 
              id="copyright" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Copyright className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">2. الملكية الفكرية وحظر الهندسة العكسية</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  كافة الحقوق الفكرية، وحقوق الطبع والنشر، والأكواد المصدرية (Source Code)، والتصاميم الرسومية، والواجهات، وقواعد البيانات، والعلامات التجارية والأسماء والشعارات الخاصة ببوت Majestic Flux هي ملكية حصرية وخالصة لشركة Hedrix Technology. يُمنع منعاً باتاً تحت طائلة المسؤولية القانونية الكاملة: نسخ، أو إعادة توزيع، أو محاولة فك تشفير، أو إجراء هندسة عكسية (Reverse Engineering)، أو تفكيك (Decompiling)، أو سرقة أفكار أو خوارزميات النظام، أو تشغيل نسخ معدلة شبيهة أو موازية. أي محاولة لتقليد الخدمات أو بيع كود البوت بدون ترخيص كتابي صريح ومبرم بعقد رسمي ستواجه بإجراءات قانونية صارمة وطلب تعويضات مالية طائلة.
                </p>
              </div>
            </div>

            {/* 3. Subscription & Wallet */}
            <div 
              id="wallet" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Wallet className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">3. نظام الاشتراكات، المحفظة والعملة الافتراضية</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base mb-4">
                  يقدم Majestic Flux نظاماً رقمياً لتقمص الأدوار وإدارة استهلاك الأوامر يعتمد على رصيد افتراضي يسمى «Flux». يُقر المستخدم ويوافق على ما يلي:
                </p>
                <div className="space-y-3">
                  {[
                    'رصيد Flux هو أصل افتراضي مخصص للترفيه واللعب التخيلي فقط داخل منصة Discord.',
                    'لا يحمل رصيد Flux أي قيمة مالية حقيقية، ولا يعتبر شكلاً من أشكال العملات الحقيقية أو السندات المالية، ويُحظر تماماً بيعه، أو شراؤه، أو مبادلته بأموال حقيقية خارج النطاق الرسمي.',
                    'يحق للشركة تعديل، أو إعادة تعيين، أو خصم، أو إلغاء أرصدة Flux في أي وقت لأغراض الصيانة، أو تغيير هيكلية التسعير، أو عند الاشتباه بوجود تلاعب أو غش، وذلك دون أن يترتب على الشركة أي التزام مالي أو قانوني بالتعويض.',
                    'يتم خصم رصيد Flux تلقائياً عند تنفيذ الأوامر بنجاح بناءً على استهلاك موارد الخادم ونوع العملية الفنية المطلوبة.'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/20 border border-purple-500/10 text-purple-200/70 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Updates */}
            <div 
              id="updates" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">4. التحديثات والتغييرات أحادية الجانب</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  تحتفظ شركة Hedrix Technology بالحق المطلق وغير المقيد في تعديل، أو إيقاف، أو استبدال، أو تحديث أي من ميزات البوت، أو باقات الأسعار، أو قيم استهلاك الأوامر لعملة Flux، أو هذه الاتفاقية في أي وقت تراه مناسباً ودون الحاجة لإرسال إشعار مسبق. يسري مفعول التعديلات فور نشرها على الموقع الرسمي أو خادم الدعم. استمرارك في استخدام البوت بعد إجراء هذه التعديلات يمثل موافقة صريحة ونهائية من قبلك عليها.
                </p>
              </div>
            </div>

            {/* 5. Refunds */}
            <div 
              id="refunds" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <CornerUpLeft className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">5. سياسة استرداد المبالغ الصارمة والنهائية</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  تخضع كافة عمليات الدفع، والاشتراكات، وشحن أرصدة Flux لسياسة عدم الاسترداد المطلقة (Strict Zero-Refund Policy). بمجرد إتمام عملية الشراء أو الشحن، يُعتبر الدفع نهائياً وقطيعاً وغير قابل للإلغاء أو الاسترجاع تحت أي ظرف من الظروف، بما في ذلك: توقف الخدمة المؤقت، أو حظر حساب المستخدم أو سيرفره بسبب مخالفة الشروط، أو رغبة المستخدم في التراجع. لا توجد استثناءات لهذه السياسة إلا إذا قررت الشركة بمحض إرادتها المنفردة والخاصة وجود خطأ تقني جسيم ومؤكد من جهتنا لا يمكن حله.
                </p>
              </div>
            </div>

            {/* 6. Liability */}
            <div 
              id="liability" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">6. إخلاء المسؤولية المطلق وحدود المسؤولية القانونية</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يُقدم بوت Majestic Flux «كما هو» (As Is) و«حسب توفره» (As Available)، دون أي ضمانات من أي نوع، سواء كانت صريحة أو ضمنية. لا تتحمل شركة Hedrix Technology أو مطوروها أي مسؤولية قانونية أو مالية أو أدبية عن أي أضرار مباشرة، أو غير مباشرة، أو عرضية، أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام البوت، بما في ذلك: فقدان البيانات، أو تلف إعدادات السيرفر، أو تعطل خوادم البوت، أو التغييرات المفاجئة في سياسات شركة Discord، أو انقطاع الخدمة الكهربائية أو الفنية لخوادم الاستضافة. يقع كامل عبء المخاطرة والتشغيل على عاتق المستخدم.
                </p>
              </div>
            </div>

            {/* 7. Commercial */}
            <div 
              id="commercial" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">7. التخصيص التجاري والنسخ الخاصة</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يتطلب الحصول على نسخة مخصصة من البوت تحمل هوية وشعار خادم محدد (Rebranding/Custom Bot) تسديد رسوم دورية ثابتة تحددها الشركة، وتخضع البوتات المخصصة لكافة الشروط والأحكام الواردة هنا. يُحظر تماماً فك الترابط بين النسخة المخصصة والخادم الأصلي للشركة، كما يُحظر بيع أو تأجير النسخة المخصصة لأطراف ثالثة. تحتفظ الشركة بحق إلغاء ترخيص أي نسخة مخصصة فوراً إذا ثبت استخدامها في أغراض تضر بسمعة Majestic Flux أو تخالف هذه الشروط.
                </p>
              </div>
            </div>

            {/* 8. Support */}
            <div 
              id="support" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">8. الدعم الفني وشروط الخدمة</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  تلتزم إدارة Majestic Flux بتقديم الدعم الفني لحل المشكلات التقنية المتعلقة بالبنية التحتية للبوت حصرياً عبر خادم Discord الرسمي التابع للشركة. لا تقدم الشركة أي ضمانات بشأن وقت الاستجابة (SLA) أو حل المشكلات في وقت محدد. يُشترط للحصول على الدعم الفني التزام العضو بالاحترام والآداب العامة؛ وأي إساءة، أو تطاول، أو تهديد يوجه لفريق الدعم أو الإدارة سيعرض صاحبه للحظر المباشر والدائم من البوت ومن خادم الدعم مع إلغاء كافة أرصدته واشتراكاته دون أي تعويض أو حق في المطالبة.
                </p>
              </div>
            </div>

            {/* 9. Simulation */}
            <div 
              id="simulation" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-purple-500/10 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20 bg-purple-950/10"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">9. المحتوى القائم على المحاكاة والأنظمة الافتراضية</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يشتمل البوت على ميزات وأوامر برمجية تحاكي سيناريوهات واقعية وتفاعلية مثل: أنظمة السجل المدني، البطاقات الشخصية الافتراضية، وزارة الداخلية والشرطة الافتراضية، المحاكم والأنظمة البنكية، والأسواق المفتوحة والمزايدات. يُقر المستخدم إقراراً تاماً بأن كل هذه الميزات هي للتسلية واللعب الافتراضي فقط داخل خوادم Discord، ولا تمثل بأي حال من الأحوال أي جهة حكومية، أو أمنية، أو عسكرية، أو مصرفية حقيقية. يُحظر تماماً استخدام هذه الواجهات لإشاعة الفوضى أو الإيحاء للعامة بصلة البوت بجهات رسمية واقعية.
                </p>
              </div>
            </div>

            {/* 10. Safe Use */}
            <div 
              id="safeuse" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">10. حظر الاستخدام غير الآمن والاحتيالي للمحتوى</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يُحظر تماماً استخدام أنظمة المحاكاة الترفيهية في البوت للقيام بأي عمليات احتيال، أو خداع للأعضاء، أو الترويج لخدمات غير قانونية في العالم الواقعي. يُمنع منعاً باتاً كتابة أسماء شخصيات حقيقية، أو رموز وطنية، أو علامات تجارية محمية في بطاقات الهوية الافتراضية أو القضايا الافتراضية بغرض التشهير، أو المضايقة، أو الابتزاز، أو التحرش. يتحمل مالك السيرفر والمستخدم المسؤولية الجنائية الكاملة عن أي محتوى مسيء يتم إنشاؤه عبر البوت.
                </p>
              </div>
            </div>

            {/* 11. Similarity */}
            <div 
              id="similarity" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">11. إقرار عدم التعدي والتشابه البرمجي</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  قد تتشابه أفكار البوت مع بعض أنظمة ألعاب المحاكاة الشهيرة (مثل FiveM أو GTA Roleplay)، إلا أن Majestic Flux هو نظام برمجي مستقل ومطور بالكامل من الصفر. كافة الأكواد، والخوارزميات، والواجهات النصية، وقواعد البيانات تم إنشاؤها وتطويرها بشكل فريد وحصري لمنصة Discord. أي تشابه في المصطلحات أو المفاهيم هو لغرض محاكاة الطابع العام لتقمص الأدوار فقط ولا يمثل تعدياً على حقوق أي طرف ثالث.
                </p>
              </div>
            </div>

            {/* 12. User Content */}
            <div 
              id="usercontent" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">12. المسؤولية المطلقة للمحتوى المولد من المستخدم</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يتحمل المستخدمون وإدارات خوادم Discord المسؤولية الكاملة والمنفردة عن كافة النصوص، والبيانات، والأخبار، والجرائم الافتراضية، والمعلومات التي يقومون بإدخالها وتداولها عبر البوت. لا تقوم شركة Hedrix Technology بمراقبة البيانات المدخلة بشكل استباقي، ولكنها تمتلك الصلاحية المطلقة في حذف أو تعديل أي محتوى مخالف، أو حظر الخادم المخالف بالكامل من الوصول إلى خدمات البوت عند تلقي بلاغات مؤكدة بوجود انتهاكات قانونية أو أخلاقية.
                </p>
              </div>
            </div>

            {/* 13. Regulation */}
            <div 
              id="regulation" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">13. الرقابة وحظر الخدمة المطلق ودون سابق إنذار</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  تحتفظ إدارة Majestic Flux بالحق المطلق وبمحض إرادتها في فرض الرقابة، وتقييد، أو إلغاء، أو تعليق، أو حظر أي مستخدم أو سيرفر (Blacklist) من استخدام البوت بشكل جزئي أو كلي، في أي وقت ولأي سبب تراه مناسباً لحماية سلامة واستقرار النظام ومصالح الشركة. لا تلتزم الإدارة بتقديم أي تبريرات، أو أدلة، أو إشعارات مسبقة للمستخدم أو مالك السيرفر قبل اتخاذ قرار الحظر، ولا يحق للمحظور المطالبة بأي تعويض مالي أو استرداد للمبالغ المدفوعة.
                </p>
              </div>
            </div>

            {/* 14. Compatibility */}
            <div 
              id="compatibility" 
              className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-purple-500/20"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-100">14. التوافق التام مع سياسات منصة Discord</h3>
                </div>
                <p className="text-purple-200/80 leading-[1.8] text-base">
                  يعتمد تشغيل Majestic Flux كلياً على بيئة وتوافق واجهات برمجة تطبيقات Discord (Discord API). يقر المستخدم بأن أي تغييرات في سياسات Discord أو قيودها البرمجية قد تؤثر على عمل البوت أو تؤدي إلى توقف بعض ميزاته أو الخدمة بأكملها بشكل مؤقت أو دائم. في حال حدوث ذلك، لا تتحمل الشركة أي مسؤولية تجاه المستخدمين أو المشتركين، ويُحظر استغلال البوت في أي محاولات لتخطي قيود Discord أو انتهاك شروطهم الرسمية.
                </p>
              </div>
            </div>

            {/* Closing consent */}
            <div className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/10 text-center">
              <p className="text-purple-200/80 text-sm md:text-base leading-[1.8]">
                باستخدامك المستمر لخدمات وبوت Majestic Flux، فإنك تؤكد اطلاعك التام وموافقتك الصريحة والنهائية على كافة شروط الخدمة المذكورة أعلاه، وتتفهم أن أي إخلال بها سيعرض حسابك أو سيرفرك للحظر الدائم والإدراج في القائمة السوداء للنظام مع التنازل عن كافة مستحقاتك الافتراضية.
              </p>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="text-center py-10 mt-8 border-t border-purple-500/10 text-xs text-purple-400/40">
          Hedrix Technology · Majestic Flux Terms of Service · {new Date().getFullYear()}
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
