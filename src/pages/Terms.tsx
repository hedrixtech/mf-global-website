import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
  Compass,
  MessageSquare,
  Settings,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Zap,
  Home,
} from 'lucide-react';

/* ─────────────── design tokens ─────────────── */
const C = {
  surface:   '#070713',
  surface2:  '#0B0B1A',
  surface3:  '#12122A',
  primary:   '#724FFF',
  glow:      '#8B6CFF',
  on:        '#E9ECF5',
  muted:     '#9AA4B2',
  success:   '#22C55E',
  warning:   '#FBBF24',
  error:     '#FF4D4D',
};

/* ─────────────── section list ─────────────── */
const SECTIONS = [
  { id: 'intro',         code: 'TOS·00', label: 'مقدمة الاتفاقية',                     icon: FileText   },
  { id: 'fairuse',       code: 'TOS·01', label: 'الاستخدام العادل والقيود',             icon: Scale      },
  { id: 'copyright',     code: 'TOS·02', label: 'الملكية الفكرية وحظر الهندسة العكسية', icon: Copyright  },
  { id: 'wallet',        code: 'TOS·03', label: 'نظام الاشتراكات والمحفظة',             icon: Wallet     },
  { id: 'updates',       code: 'TOS·04', label: 'التحديثات والتغييرات',                 icon: RefreshCw  },
  { id: 'refunds',       code: 'TOS·05', label: 'سياسة استرداد المبالغ',               icon: CornerUpLeft },
  { id: 'liability',     code: 'TOS·06', label: 'إخلاء المسؤولية',                     icon: AlertTriangle },
  { id: 'commercial',    code: 'TOS·07', label: 'التخصيص التجاري',                     icon: Cpu        },
  { id: 'support',       code: 'TOS·08', label: 'الدعم الفني وشروط الخدمة',            icon: HelpCircle },
  { id: 'simulation',    code: 'TOS·09', label: 'المحتوى القائم على المحاكاة',          icon: Gamepad2   },
  { id: 'safeuse',       code: 'TOS·10', label: 'حظر الاستخدام غير الآمن',             icon: Lock       },
  { id: 'similarity',    code: 'TOS·11', label: 'إقرار عدم التعدي والتشابه',           icon: Compass    },
  { id: 'usercontent',   code: 'TOS·12', label: 'المحتوى المولد من المستخدم',          icon: MessageSquare },
  { id: 'regulation',    code: 'TOS·13', label: 'الرقابة وحظر الخدمة',                icon: Settings   },
  { id: 'compatibility', code: 'TOS·14', label: 'التوافق مع Discord',                  icon: ShieldCheck },
];

/* ─────────────── sub-components ─────────────── */

function StatusBar() {
  const [, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => p + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const now = new Date();
  const ts = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
  return (
    <div style={{ background: C.surface2, borderBottom: `1px solid ${C.primary}33` }}
      className="sticky top-0 z-50 flex items-center justify-between px-5 py-2 text-[11px] font-mono select-none">
      <div className="flex items-center gap-4">
        <span style={{ color: C.primary }} className="flex items-center gap-1.5 font-semibold">
          <Terminal className="w-3.5 h-3.5" />
          MAJESTIC·FLUX
        </span>
        <span style={{ color: C.muted }}>DOC_TYPE: TERMS_OF_SERVICE</span>
        <span style={{ color: C.muted }}>REV: 2025.1</span>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <span className="flex items-center gap-1" style={{ color: C.success }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
          SYSTEM ACTIVE
        </span>
        <span style={{ color: C.muted }}>{ts}</span>
      </div>
    </div>
  );
}

interface SectionCardProps {
  id: string;
  code: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  accent?: 'warning' | 'error' | 'success' | 'default';
}

function SectionCard({ id, code, icon: Icon, title, children, accent = 'default' }: SectionCardProps) {
  const accentColor = accent === 'warning' ? C.warning : accent === 'error' ? C.error : accent === 'success' ? C.success : C.primary;
  return (
    <div
      id={id}
      style={{
        background: C.surface2,
        borderLeft: `2px solid ${accentColor}`,
        borderTop: `1px solid ${C.surface3}`,
        borderRight: `1px solid ${C.surface3}`,
        borderBottom: `1px solid ${C.surface3}`,
        borderRadius: '10px',
        scrollMarginTop: '80px',
      }}
      className="relative overflow-hidden transition-all duration-150 group hover:border-l-4"
    >
      {/* Corner accent */}
      <div
        style={{ background: `${accentColor}08`, borderBottom: `1px solid ${C.surface3}` }}
        className="flex items-center justify-between px-5 py-3"
      >
        <div className="flex items-center gap-3">
          <div style={{ background: `${accentColor}15`, borderRadius: '6px', padding: '6px' }}>
            <Icon className="w-4 h-4" style={{ color: accentColor }} />
          </div>
          <div>
            <span style={{ color: accentColor, fontSize: '10px', fontFamily: 'monospace', fontWeight: 700 }}
              className="block tracking-widest opacity-70">
              {code}
            </span>
            <h3 style={{ color: C.on, fontSize: '15px', fontWeight: 600 }}>{title}</h3>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 opacity-20 group-hover:opacity-60 transition-opacity" style={{ color: accentColor }} />
      </div>
      <div className="px-5 py-5">
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2 mt-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3"
          style={{ background: `${C.primary}08`, borderRadius: '6px', padding: '10px 12px', border: `1px solid ${C.primary}18` }}>
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: C.primary }} />
          <span style={{ color: C.muted, fontSize: '13px', lineHeight: '1.7' }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function WarningBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex items-start gap-3 rounded-md px-4 py-3"
      style={{ background: `${C.error}10`, border: `1px solid ${C.error}30` }}>
      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: C.error }} />
      <p style={{ color: `${C.on}99`, fontSize: '13px', lineHeight: '1.7' }}>{children}</p>
    </div>
  );
}

/* ─────────────── main page ─────────────── */
const Terms: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [mounted, setMounted] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const ids = SECTIONS.map(s => s.id);
    const onScroll = () => {
      const pos = window.scrollY + 160;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) { window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' }); setActiveSection(id); }
  };

  return (
    <div style={{ background: C.surface, minHeight: '100vh', color: C.on, fontFamily: 'Inter, sans-serif' }} dir="rtl">

      {/* grid noise texture */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(${C.primary} 1px, transparent 1px), linear-gradient(90deg, ${C.primary} 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />

      {/* purple glow blobs */}
      <div className="pointer-events-none fixed top-0 right-0 w-[600px] h-[600px] opacity-[0.04] rounded-full blur-[120px] z-0"
        style={{ background: C.primary }} />
      <div className="pointer-events-none fixed bottom-0 left-0 w-[500px] h-[500px] opacity-[0.03] rounded-full blur-[120px] z-0"
        style={{ background: C.glow }} />

      <div className="relative z-10">
        <StatusBar />

        {/* ── Page Header ── */}
        <header className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-10">
          <div className="flex items-center gap-2 mb-6" style={{ color: C.muted, fontSize: '12px', fontFamily: 'monospace' }}>
            <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              الرئيسية
            </Link>
            <span>/</span>
            <span style={{ color: C.primary }}>شروط الاستخدام</span>
          </div>

          <div style={{ borderLeft: `3px solid ${C.primary}`, paddingRight: '20px' }}
            className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <div className="flex items-center gap-3 mb-3">
              <div style={{ background: `${C.primary}20`, borderRadius: '8px', padding: '8px' }}>
                <Scale className="w-5 h-5" style={{ color: C.primary }} />
              </div>
              <span style={{ color: C.primary, fontSize: '11px', fontFamily: 'monospace', fontWeight: 700 }}
                className="tracking-widest">LEGAL · TERMS OF SERVICE · V2025.1</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, color: C.on, lineHeight: 1.15 }}>
              شروط الاستخدام
            </h1>
            <p style={{ color: C.muted, fontSize: '14px', marginTop: '10px', maxWidth: '560px', lineHeight: 1.7 }}>
              اتفاقية قانونية ملزمة بين المستخدم وشركة Hedrix Technology. استخدامك للخدمة يعني موافقتك الكاملة على هذه البنود.
            </p>
            <div className="flex items-center gap-4 mt-5 flex-wrap">
              <div style={{ background: `${C.success}15`, border: `1px solid ${C.success}40`, borderRadius: '6px' }}
                className="flex items-center gap-1.5 px-3 py-1.5">
                <Zap className="w-3 h-3" style={{ color: C.success }} />
                <span style={{ color: C.success, fontSize: '11px', fontWeight: 600, fontFamily: 'monospace' }}>14 SECTIONS ACTIVE</span>
              </div>
              <div style={{ background: `${C.primary}15`, border: `1px solid ${C.primary}40`, borderRadius: '6px' }}
                className="flex items-center gap-1.5 px-3 py-1.5">
                <span style={{ color: C.primary, fontSize: '11px', fontFamily: 'monospace' }}>آخر تحديث: 2025</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── Body ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ─ Sidebar ─ */}
          <aside ref={sidebarRef} className="hidden lg:block lg:col-span-4 sticky top-16 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div style={{ background: C.surface2, border: `1px solid ${C.surface3}`, borderRadius: '10px', padding: '6px' }}>
              <div style={{ borderBottom: `1px solid ${C.surface3}`, padding: '12px 14px', marginBottom: '4px' }}
                className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" style={{ color: C.primary }} />
                <span style={{ color: C.muted, fontSize: '11px', fontFamily: 'monospace', fontWeight: 700 }} className="tracking-wider">
                  SECTION INDEX
                </span>
              </div>
              <nav className="space-y-0.5">
                {SECTIONS.map(s => {
                  const Icon = s.icon;
                  const active = activeSection === s.id;
                  return (
                    <button key={s.id} onClick={() => scrollTo(s.id)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '9px 12px', borderRadius: '7px', textAlign: 'right',
                        background: active ? `${C.primary}18` : 'transparent',
                        borderRight: active ? `2px solid ${C.primary}` : '2px solid transparent',
                        transition: 'all 0.15s ease', cursor: 'pointer', border: 'none',
                      }}
                      className="hover:bg-white/5 group"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: active ? C.primary : C.muted, opacity: active ? 1 : 0.5 }} />
                      <span style={{ color: active ? C.on : C.muted, fontSize: '12px', flex: 1, fontWeight: active ? 600 : 400 }}
                        className="truncate text-right">{s.label}</span>
                      <span style={{ color: active ? C.primary : 'transparent', fontSize: '9px', fontFamily: 'monospace', fontWeight: 700 }}
                        className="shrink-0">{s.code}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ─ Content ─ */}
          <div className="lg:col-span-8 space-y-4">

            <SectionCard id="intro" code="TOS·00" icon={FileText} title="مقدمة الاتفاقية">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                تعتبر هذه الشروط والبنود اتفاقية قانونية ملزمة بالكامل وثنائية الطرف تسري مباشرة بين المستخدم وإدارة Majestic Flux وشركة Hedrix Technology.
                بمجرد تفعيل البوت أو استخدامه بأي شكل من الأشكال، فإنك تقر إقراراً تاماً بموافقتك الكاملة على كافة البنود الواردة هنا.
              </p>
              <WarningBlock>إذا كنت لا توافق على هذه البنود أو أي جزء منها، فيتعين عليك فوراً إيقاف الاستخدام وإزالة البوت من خادمك.</WarningBlock>
            </SectionCard>

            <SectionCard id="fairuse" code="TOS·01" icon={Scale} title="الاستخدام العادل والقيود">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يُحظر تماماً استخدام البوت في أي أنشطة تنتهك قوانين مكافحة الجرائم المعلوماتية أو شروط خدمة منصة Discord الرسمية.
              </p>
              <BulletList items={[
                'يُمنع إرسال الرسائل المزعجة (Spamming) أو محاولات إغراق الخوادم بأوامر متكررة (DDoS).',
                'يُمنع استغلال الثغرات الفنية والبرمجية (Exploits) بدلاً من الإبلاغ عنها للفريق.',
                'أي محاولة للتلاعب بنظام البوت تؤدي إلى حظر دائم دون سابق إنذار.',
              ]} />
            </SectionCard>

            <SectionCard id="copyright" code="TOS·02" icon={Copyright} title="الملكية الفكرية وحظر الهندسة العكسية">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8, marginBottom: '12px' }}>
                كافة الحقوق الفكرية والأكواد المصدرية والتصاميم والعلامات التجارية الخاصة ببوت Majestic Flux هي ملكية حصرية لشركة Hedrix Technology.
              </p>
              <BulletList items={[
                'يُمنع نسخ أو إعادة توزيع أو فك تشفير أو إجراء هندسة عكسية على النظام.',
                'يُمنع تشغيل نسخ معدلة شبيهة أو موازية من البوت.',
                'أي تعدٍّ على حقوق الملكية الفكرية يُواجه بإجراءات قانونية وتعويضات مالية.',
              ]} />
            </SectionCard>

            <SectionCard id="wallet" code="TOS·03" icon={Wallet} title="نظام الاشتراكات، المحفظة والعملة الافتراضية">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يقدم Majestic Flux نظاماً رقمياً يعتمد على رصيد افتراضي يسمى «Flux». يُقر المستخدم ويوافق على:
              </p>
              <BulletList items={[
                'رصيد Flux هو أصل افتراضي مخصص للترفيه فقط داخل منصة Discord.',
                'لا يحمل رصيد Flux أي قيمة مالية حقيقية ولا يعتبر عملة قابلة للبيع أو التبادل خارج النطاق الرسمي.',
                'يحق للشركة تعديل أو إلغاء أرصدة Flux دون أي التزام مالي بالتعويض.',
                'يتم خصم الرصيد تلقائياً عند تنفيذ الأوامر بنجاح بناءً على استهلاك الموارد.',
              ]} />
            </SectionCard>

            <SectionCard id="updates" code="TOS·04" icon={RefreshCw} title="التحديثات والتغييرات أحادية الجانب">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                تحتفظ شركة Hedrix Technology بالحق المطلق في تعديل أو إيقاف أو استبدال أي من ميزات البوت أو باقات الأسعار أو هذه الاتفاقية في أي وقت دون الحاجة لإشعار مسبق.
                يسري مفعول التعديلات فور نشرها، واستمرارك في الاستخدام يمثل موافقة صريحة عليها.
              </p>
            </SectionCard>

            <SectionCard id="refunds" code="TOS·05" icon={CornerUpLeft} title="سياسة استرداد المبالغ الصارمة" accent="error">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                تخضع كافة عمليات الدفع والاشتراكات وشحن أرصدة Flux لسياسة عدم الاسترداد المطلقة.
              </p>
              <WarningBlock>
                بمجرد إتمام عملية الشراء يُعتبر الدفع نهائياً وغير قابل للإلغاء أو الاسترجاع تحت أي ظرف — بما في ذلك توقف الخدمة المؤقت أو حظر الحساب بسبب مخالفة الشروط. لا توجد استثناءات لهذه السياسة إلا إذا قررت الشركة وجود خطأ تقني جسيم مؤكد من جهتنا.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="liability" code="TOS·06" icon={AlertTriangle} title="إخلاء المسؤولية المطلق" accent="warning">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يُقدم بوت Majestic Flux «كما هو» (As Is) و«حسب توفره» (As Available)، دون أي ضمانات من أي نوع.
              </p>
              <WarningBlock>
                لا تتحمل شركة Hedrix Technology أي مسؤولية قانونية أو مالية عن أي أضرار ناتجة عن استخدام البوت، بما في ذلك فقدان البيانات أو تلف إعدادات السيرفر أو انقطاع الخدمة. يقع كامل عبء المخاطرة على عاتق المستخدم.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="commercial" code="TOS·07" icon={Cpu} title="التخصيص التجاري والنسخ الخاصة">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يتطلب الحصول على نسخة مخصصة من البوت تحمل هوية وشعار خادم محدد تسديد رسوم دورية ثابتة تحددها الشركة.
              </p>
              <BulletList items={[
                'يُحظر فك الترابط بين النسخة المخصصة والخادم الأصلي للشركة.',
                'يُحظر بيع أو تأجير النسخة المخصصة لأطراف ثالثة.',
                'تحتفظ الشركة بحق إلغاء ترخيص أي نسخة مخصصة فوراً عند مخالفة الشروط.',
              ]} />
            </SectionCard>

            <SectionCard id="support" code="TOS·08" icon={HelpCircle} title="الدعم الفني وشروط الخدمة">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                تلتزم إدارة Majestic Flux بتقديم الدعم الفني عبر خادم Discord الرسمي حصرياً. لا تُقدم الشركة ضمانات بشأن وقت الاستجابة.
              </p>
              <WarningBlock>
                أي إساءة أو تطاول أو تهديد يوجَّه لفريق الدعم يعرض صاحبه للحظر الدائم مع إلغاء جميع أرصدته واشتراكاته دون أي تعويض.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="simulation" code="TOS·09" icon={Gamepad2} title="المحتوى القائم على المحاكاة والأنظمة الافتراضية">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يشتمل البوت على ميزات تحاكي سيناريوهات واقعية كأنظمة السجل المدني والمحاكم الافتراضية والأسواق.
              </p>
              <WarningBlock>
                يُقر المستخدم بأن كل هذه الميزات هي للتسلية الافتراضية فقط ولا تمثل أي جهة حكومية أو أمنية حقيقية. يُحظر استخدامها لإيهام العامة بصلة البوت بجهات رسمية.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="safeuse" code="TOS·10" icon={Lock} title="حظر الاستخدام غير الآمن والاحتيالي">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يُحظر استخدام أنظمة المحاكاة في البوت للقيام بأي عمليات احتيال أو خداع أو الترويج لخدمات غير قانونية.
              </p>
              <BulletList items={[
                'يُمنع كتابة أسماء شخصيات حقيقية أو رموز وطنية في البطاقات الافتراضية بغرض التشهير.',
                'يتحمل مالك السيرفر والمستخدم المسؤولية الجنائية الكاملة عن أي محتوى مسيء.',
              ]} />
            </SectionCard>

            <SectionCard id="similarity" code="TOS·11" icon={Compass} title="إقرار عدم التعدي والتشابه البرمجي">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                قد تتشابه أفكار البوت مع بعض أنظمة ألعاب المحاكاة الشهيرة، إلا أن Majestic Flux هو نظام برمجي مستقل مطور بالكامل من الصفر لمنصة Discord.
                كافة الأكواد والخوارزميات والواجهات تم إنشاؤها بشكل فريد وحصري.
              </p>
            </SectionCard>

            <SectionCard id="usercontent" code="TOS·12" icon={MessageSquare} title="المسؤولية المطلقة للمحتوى المولد من المستخدم">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يتحمل المستخدمون وإدارات خوادم Discord المسؤولية الكاملة عن كافة النصوص والبيانات التي يقومون بإدخالها عبر البوت.
                تمتلك الشركة الصلاحية المطلقة في حذف أي محتوى مخالف أو حظر الخادم المخالف بالكامل.
              </p>
            </SectionCard>

            <SectionCard id="regulation" code="TOS·13" icon={Settings} title="الرقابة وحظر الخدمة المطلق" accent="error">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                تحتفظ إدارة Majestic Flux بالحق المطلق في فرض الرقابة وتقييد أو حظر أي مستخدم أو سيرفر في أي وقت لأي سبب.
              </p>
              <WarningBlock>
                لا تلتزم الإدارة بتقديم تبريرات أو إشعارات مسبقة قبل اتخاذ قرار الحظر، ولا يحق للمحظور المطالبة بأي تعويض أو استرداد للمبالغ المدفوعة.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="compatibility" code="TOS·14" icon={ShieldCheck} title="التوافق التام مع سياسات منصة Discord" accent="success">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يعتمد تشغيل Majestic Flux على بيئة Discord API. يقر المستخدم بأن أي تغييرات في سياسات Discord قد تؤثر على عمل البوت.
                في حال حدوث ذلك، لا تتحمل الشركة أي مسؤولية، ويُحظر استغلال البوت لتخطي قيود Discord.
              </p>
            </SectionCard>

            {/* ── Consent Block ── */}
            <div style={{ background: `${C.primary}12`, border: `1px solid ${C.primary}30`, borderRadius: '10px', padding: '24px' }}
              className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5" style={{ color: C.primary }} />
                <span style={{ color: C.primary, fontWeight: 700, fontSize: '14px', fontFamily: 'monospace' }}>CONSENT REQUIRED</span>
              </div>
              <p style={{ color: C.muted, fontSize: '13px', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
                باستخدامك المستمر لخدمات وبوت Majestic Flux، فإنك تؤكد اطلاعك التام وموافقتك الصريحة على كافة شروط الخدمة أعلاه.
                أي إخلال بها سيعرض حسابك أو سيرفرك للحظر الدائم مع التنازل عن كافة مستحقاتك الافتراضية.
              </p>
              <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
                <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer"
                  style={{ background: C.primary, color: '#fff', fontWeight: 600, fontSize: '13px', borderRadius: '8px', padding: '10px 20px', textDecoration: 'none' }}
                  className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <HelpCircle className="w-4 h-4" />
                  استفسر في Discord
                </a>
                <Link to="/privacy"
                  style={{ background: 'transparent', color: C.muted, fontWeight: 500, fontSize: '13px', borderRadius: '8px', padding: '10px 20px', border: `1px solid ${C.surface3}` }}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </div>
            </div>

            {/* footer */}
            <div style={{ borderTop: `1px solid ${C.surface3}`, paddingTop: '20px' }}
              className="flex items-center justify-between flex-wrap gap-3">
              <span style={{ color: C.muted, fontSize: '11px', fontFamily: 'monospace' }}>
                HEDRIX TECHNOLOGY · MAJESTIC FLUX · TOS V2025.1
              </span>
              <span style={{ color: `${C.muted}60`, fontSize: '11px', fontFamily: 'monospace' }}>
                © {new Date().getFullYear()} ALL RIGHTS RESERVED
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
