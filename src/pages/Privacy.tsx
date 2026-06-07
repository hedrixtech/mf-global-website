import React, { useEffect, useRef, useState } from 'react';
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
  CreditCard,
  Share2,
  Cookie,
  Mail,
  ShieldAlert,
  Compass,
  Check,
  Terminal,
  Zap,
  Home,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react';

/* ─────────────── design tokens ─────────────── */
const C = {
  surface:  '#070713',
  surface2: '#0B0B1A',
  surface3: '#12122A',
  primary:  '#724FFF',
  glow:     '#8B6CFF',
  on:       '#E9ECF5',
  muted:    '#9AA4B2',
  success:  '#22C55E',
  warning:  '#FBBF24',
  error:    '#FF4D4D',
};

/* ─────────────── section list ─────────────── */
const SECTIONS = [
  { id: 'collect',     code: 'PRI·01', label: 'البيانات التي نقوم بجمعها',             icon: Database    },
  { id: 'usage',       code: 'PRI·02', label: 'كيف نستخدم البيانات',                   icon: Eye         },
  { id: 'interactive', code: 'PRI·03', label: 'الهوية الرقمية والخدمات التفاعلية',     icon: UserCheck   },
  { id: 'billing',     code: 'PRI·04', label: 'المدفوعات والاشتراكات',                 icon: CreditCard  },
  { id: 'sharing',     code: 'PRI·05', label: 'مشاركة البيانات والحدود',               icon: Share2      },
  { id: 'security',    code: 'PRI·06', label: 'حماية البيانات والمسؤولية',             icon: Lock        },
  { id: 'cookies',     code: 'PRI·07', label: 'ملفات تعريف الارتباط',                  icon: Cookie      },
  { id: 'rights',      code: 'PRI·08', label: 'حقوق المستخدم وحق المسح',               icon: Scale       },
  { id: 'retention',   code: 'PRI·09', label: 'الاحتفاظ بالبيانات وتصفيتها',           icon: Clock       },
  { id: 'thirdparty',  code: 'PRI·10', label: 'خدمات الطرف الثالث',                    icon: Cpu         },
  { id: 'children',    code: 'PRI·11', label: 'خصوصية الأطفال والقصر',                 icon: ShieldAlert },
  { id: 'updates',     code: 'PRI·12', label: 'التعديلات على السياسة',                 icon: HelpCircle  },
  { id: 'contact',     code: 'PRI·13', label: 'التواصل والدعم الفني',                  icon: Mail        },
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
        <span style={{ color: C.muted }}>DOC_TYPE: PRIVACY_POLICY</span>
        <span style={{ color: C.muted }}>REV: 2025.1</span>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <span className="flex items-center gap-1" style={{ color: C.success }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
          TLS 1.3 ENCRYPTED
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
      <div style={{ background: `${accentColor}08`, borderBottom: `1px solid ${C.surface3}` }}
        className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <div style={{ background: `${accentColor}15`, borderRadius: '6px', padding: '6px' }}>
            <Icon className="w-4 h-4" style={{ color: accentColor }} />
          </div>
          <div>
            <span style={{ color: accentColor, fontSize: '10px', fontFamily: 'monospace', fontWeight: 700 }}
              className="block tracking-widest opacity-70">{code}</span>
            <h3 style={{ color: C.on, fontSize: '15px', fontWeight: 600 }}>{title}</h3>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 opacity-20 group-hover:opacity-60 transition-opacity" style={{ color: accentColor }} />
      </div>
      <div className="px-5 py-5">{children}</div>
    </div>
  );
}

function DataBlock({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: `${C.primary}08`, border: `1px solid ${C.primary}18`, borderRadius: '6px' }}
      className="flex items-start gap-3 p-3">
      <span style={{ color: C.primary, fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap', paddingTop: '1px' }}>
        &gt; {label}
      </span>
      <span style={{ color: C.muted, fontSize: '13px', lineHeight: 1.7 }}>{value}</span>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2 mt-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3"
          style={{ background: `${C.primary}08`, borderRadius: '6px', padding: '10px 12px', border: `1px solid ${C.primary}18` }}>
          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: C.primary }} />
          <span style={{ color: C.muted, fontSize: '13px', lineHeight: 1.7 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function WarningBlock({ children, error }: { children: React.ReactNode; error?: boolean }) {
  const col = error ? C.error : C.warning;
  return (
    <div className="mt-4 flex items-start gap-3 rounded-md px-4 py-3"
      style={{ background: `${col}10`, border: `1px solid ${col}30` }}>
      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: col }} />
      <p style={{ color: `${C.on}99`, fontSize: '13px', lineHeight: 1.7 }}>{children}</p>
    </div>
  );
}

/* ─────────────── live metrics widget ─────────────── */
function LiveMetrics() {
  const [hash, setHash] = useState('SHA256-4f7c89b2...');
  const [load, setLoad] = useState(0.05);
  useEffect(() => {
    const t = setInterval(() => {
      const h = '0123456789abcdef';
      let nh = 'SHA256-';
      for (let i = 0; i < 8; i++) nh += h[Math.floor(Math.random() * h.length)];
      setHash(nh + '...');
      setLoad(parseFloat((0.02 + Math.random() * 0.08).toFixed(4)));
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const rows = [
    { k: 'INTEGRITY_HASH', v: hash, col: C.primary },
    { k: 'SYSTEM_LOAD', v: `${(load * 100).toFixed(2)}%`, col: C.on },
    { k: 'SSL_CONNECTION', v: 'ACTIVE // TLS1.3', col: C.success },
    { k: 'DATA_COMPLIANCE', v: 'GDPR // SAAS V2', col: C.warning },
  ];

  return (
    <div style={{ background: C.surface2, border: `1px solid ${C.surface3}`, borderRadius: '10px', padding: '16px', marginBottom: '16px' }}>
      <div className="flex items-center justify-between mb-3" style={{ borderBottom: `1px solid ${C.surface3}`, paddingBottom: '10px' }}>
        <span style={{ color: C.muted, fontSize: '11px', fontFamily: 'monospace', fontWeight: 700 }} className="tracking-wider">
          SYSTEM INSPECTOR
        </span>
        <span className="flex items-center gap-1.5" style={{ color: C.success, fontSize: '10px', fontFamily: 'monospace' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
          LIVE
        </span>
      </div>
      <div className="space-y-2.5">
        {rows.map(r => (
          <div key={r.k} className="flex items-center justify-between">
            <span style={{ color: `${C.muted}80`, fontSize: '10px', fontFamily: 'monospace' }}>{r.k}:</span>
            <span style={{ color: r.col, fontSize: '10px', fontFamily: 'monospace', fontWeight: 700 }}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── main page ─────────────── */
const Privacy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('collect');
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

      {/* grid noise */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(${C.primary} 1px, transparent 1px), linear-gradient(90deg, ${C.primary} 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />

      {/* glow blobs */}
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
            <span style={{ color: C.primary }}>سياسة الخصوصية</span>
          </div>

          <div style={{ borderLeft: `3px solid ${C.primary}`, paddingRight: '20px' }}
            className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <div className="flex items-center gap-3 mb-3">
              <div style={{ background: `${C.primary}20`, borderRadius: '8px', padding: '8px' }}>
                <Lock className="w-5 h-5" style={{ color: C.primary }} />
              </div>
              <span style={{ color: C.primary, fontSize: '11px', fontFamily: 'monospace', fontWeight: 700 }}
                className="tracking-widest">LEGAL · PRIVACY POLICY · V2025.1</span>
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, color: C.on, lineHeight: 1.15 }}>
              سياسة الخصوصية والأمان
            </h1>
            <p style={{ color: C.muted, fontSize: '14px', marginTop: '10px', maxWidth: '560px', lineHeight: 1.7 }}>
              الوثيقة الحاكمة لحقوق البيانات الشخصية وحماية المعطيات الفنية والفوترة. يرجى الاطلاع قبل تفعيل الخدمة.
            </p>
            <div className="flex items-center gap-4 mt-5 flex-wrap">
              <div style={{ background: `${C.success}15`, border: `1px solid ${C.success}40`, borderRadius: '6px' }}
                className="flex items-center gap-1.5 px-3 py-1.5">
                <Zap className="w-3 h-3" style={{ color: C.success }} />
                <span style={{ color: C.success, fontSize: '11px', fontWeight: 600, fontFamily: 'monospace' }}>13 SECTIONS ACTIVE</span>
              </div>
              <div style={{ background: `${C.primary}15`, border: `1px solid ${C.primary}40`, borderRadius: '6px' }}
                className="flex items-center gap-1.5 px-3 py-1.5">
                <span style={{ color: C.primary, fontSize: '11px', fontFamily: 'monospace' }}>GDPR COMPLIANT</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── Body ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ─ Sidebar ─ */}
          <aside ref={sidebarRef} className="hidden lg:block lg:col-span-4 sticky top-16 max-h-[calc(100vh-80px)] overflow-y-auto space-y-4">
            <LiveMetrics />

            <div style={{ background: C.surface2, border: `1px solid ${C.surface3}`, borderRadius: '10px', padding: '6px' }}>
              <div style={{ borderBottom: `1px solid ${C.surface3}`, padding: '12px 14px', marginBottom: '4px' }}
                className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" style={{ color: C.primary }} />
                <span style={{ color: C.muted, fontSize: '11px', fontFamily: 'monospace', fontWeight: 700 }} className="tracking-wider">
                  DOCUMENT INDEX
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
                      className="hover:bg-white/5"
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

            <SectionCard id="collect" code="PRI·01" icon={Database} title="البيانات التي نقوم بجمعها">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8, marginBottom: '12px' }}>
                يقوم النظام تلقائياً بحفظ ومعالجة المعطيات الفنية الضرورية لتفعيل الاشتراكات والتواصل السحابي:
              </p>
              <div className="space-y-2">
                <DataBlock label="USER_IDENTIFIERS" value="معرف المستخدم (Discord User ID)، اسم الحساب العام، الصورة الشخصية، ومعرفات السيرفر لتفعيل البوت." />
                <DataBlock label="SUBSCRIBER_TIER" value="فئة الاشتراك الحالي (Core / Prime / Nexus Access) وإعدادات التخصيص التفضيلية الخاصة بك." />
                <DataBlock label="INTERACTIVE_DATA" value="النصوص والملفات المُدخلة اختيارياً داخل واجهات الهاتف الافتراضية وأنظمة الهوية." />
                <DataBlock label="TELEMETRY_LOGS" value="نوع الأوامر المنفذة، معلومات المتصفح، وسجلات تشخيص الأخطاء البرمجية للموقع." />
              </div>
            </SectionCard>

            <SectionCard id="usage" code="PRI·02" icon={Eye} title="كيف نستخدم البيانات">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يتم استخدام البيانات المجمعة حصرياً لتحقيق الالتزامات التقنية والفوترة وتأمين السيرفرات:
              </p>
              <CheckList items={[
                'توفير ودعم وإدارة الخوادم الخاصة وتأمينها وضمان استجابة النظام.',
                'التحقق التلقائي من حالة الدفع وتزامن خطط الاشتراك (Core, Prime, Nexus Access).',
                'تحليل سجلات الأخطاء البرمجية لرفع الاستقرار وحظر محاولات إساءة الاستخدام.',
                'التحقق الأمني للأنظمة لمنع عمليات القرصنة والتعدي على البنية التحتية.',
              ]} />
            </SectionCard>

            <SectionCard id="interactive" code="PRI·03" icon={UserCheck} title="الهوية الرقمية والخدمات التفاعلية">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                تتضمن المنصة أنظمة محاكاة ترفيهية مثل الهويات ورخص القيادة والبطاقات التفاعلية.
              </p>
              <WarningBlock>
                يُقر المستخدم بأن هذه البيانات افتراضية تماماً ولغرض الترفيه فقط داخل المنصة، ولا تحمل أي مرجعية رسمية أو قانونية في العالم الحقيقي. يلتزم المستخدم بعدم إدخال بيانات حقيقية حساسة.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="billing" code="PRI·04" icon={CreditCard} title="المدفوعات والاشتراكات">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8, marginBottom: '12px' }}>
                تتم معالجة وتأمين المدفوعات عبر بوابات معتمدة متوافقة مع معايير الأمان (مثل Dodo Payments).
              </p>
              <DataBlock label="STORED_DATA" value="سجل تكويني للتحقق الفني يشمل: حالة الاشتراك، رقم الفاتورة المشفر، والمبلغ لغرض المراجعة فقط." />
              <div className="mt-2">
                <DataBlock label="NOT_STORED" value="لا تحتفظ خوادمنا بأرقام بطاقات الدفع أو البيانات المصرفية الحساسة." />
              </div>
            </SectionCard>

            <SectionCard id="sharing" code="PRI·05" icon={Share2} title="مشاركة البيانات والحدود">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                لا نبيع بيانات المستخدمين أو السيرفرات لأي طرف ثالث. قد نشارك أجزاء تقنية محدودة فقط مع:
              </p>
              <CheckList items={[
                'مزودي خدمات الاستضافة السحابية ومزودي بوابات الدفع لإتمام عمليات التشغيل.',
                'السلطات الأمنية الرسمية عند استلام أوامر قضائية ملزمة بموجب القانون.',
                'فرق الفحص الأمني لمنع وكشف محاولات التلاعب وإساءة استخدام المنصة.',
              ]} />
            </SectionCard>

            <SectionCard id="security" code="PRI·06" icon={Lock} title="حماية البيانات والمسؤولية" accent="warning">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                تطبق Hedrix Technology تشفيراً شاملاً وجدراناً نارية لحماية قواعد البيانات وتراسل البيانات.
              </p>
              <WarningBlock error>
                إقرار بعدم الضمان المطلق: يُقر المستخدم بأن الأنظمة الرقمية معرضة للاختراق دائماً، ويتنازل عن مقاضاة الشركة في حال فقدان أو تسرب البيانات نتيجة اختراقات برمجية غير متوقعة خارجة عن إرادتنا.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="cookies" code="PRI·07" icon={Cookie} title="ملفات تعريف الارتباط">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                نستخدم ملفات تعريف الارتباط (Cookies) وملفات التخزين المحلية في لوحة التحكم لتذكر جلسة تسجيل الدخول وتوثيق هويتك.
                يمكنك تعطيلها عبر إعدادات المتصفح، ولكن قد تفقد بعض الميزات الفنية.
              </p>
              <DataBlock label="SESSION_COOKIE" value="ضرورية للتحقق من هوية المستخدم وجلسة لوحة التحكم. غير قابلة للتعطيل." />
              <div className="mt-2">
                <DataBlock label="ANALYTICS_COOKIE" value="اختيارية، تُستخدم لقياس أداء الموقع وتحسين تجربة المستخدم." />
              </div>
            </SectionCard>

            <SectionCard id="rights" code="PRI·08" icon={Scale} title="حقوق المستخدم وحق المسح" accent="success">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يحق للمشترك طلب الحصول على نسخة من بياناته، تعديلها، أو مسحها نهائياً من خوادمنا عبر فتح تذكرة دعم فني.
              </p>
              <WarningBlock>
                تنويه: طلب حذف البيانات يؤدي فوراً إلى تصفير أرصدتك وإلغاء باقاتك النشطة وإعدادات السيرفر كلياً ودون إمكانية للاسترجاع.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="retention" code="PRI·09" icon={Clock} title="الاحتفاظ بالبيانات وتصفيتها">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                نحتفظ بالبيانات فقط للمدة المطلوبة لتقديم خدماتنا والوفاء بالمتطلبات التشغيلية والتأصيل المحاسبي.
                نقوم بعمليات فلترة دورية لحذف سجلات التفاعل المنتهية الصلاحية بشكل آمن.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  { label: 'بيانات الحساب', value: 'طوال فترة النشاط' },
                  { label: 'سجلات الأوامر', value: '90 يوماً' },
                  { label: 'بيانات الفوترة', value: '7 سنوات (قانوني)' },
                  { label: 'سجلات الأخطاء', value: '30 يوماً' },
                ].map(item => (
                  <div key={item.label}
                    style={{ background: `${C.primary}08`, border: `1px solid ${C.primary}18`, borderRadius: '6px', padding: '10px 12px' }}>
                    <div style={{ color: C.primary, fontSize: '10px', fontFamily: 'monospace', fontWeight: 700 }}>{item.label}</div>
                    <div style={{ color: C.on, fontSize: '13px', marginTop: '2px' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard id="thirdparty" code="PRI·10" icon={Cpu} title="خدمات الطرف الثالث">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                يعتمد البوت والموقع على تكاملات خارجية تشمل واجهات Discord API الرسمية، بوابات الفوترة (مثل Dodo Payments)، ومزودي الاستضافة السحابية.
              </p>
              <WarningBlock>
                جميع هذه المنصات تخضع لسياسات خصوصية مستقلة تماماً لا نتحمل مسؤوليتها الفنية. يرجى مراجعة سياساتها منفردة.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="children" code="PRI·11" icon={ShieldAlert} title="خصوصية الأطفال والقصر" accent="error">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                خدمات Majestic Flux غير موجهة للأطفال أو القصر دون السن القانوني المسموح به لاستخدام التطبيقات الرقمية محلياً (عادة 13 عاماً فما دون).
              </p>
              <WarningBlock error>
                نحن لا نجمع عن عمد أي بيانات تخص القصر. إذا تبين لنا أن حساباً يعود لقاصر، سيتم حذفه فوراً.
              </WarningBlock>
            </SectionCard>

            <SectionCard id="updates" code="PRI·12" icon={HelpCircle} title="التعديلات على السياسة">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8 }}>
                نحتفظ بكامل الصلاحية لتحديث هذه السياسة في أي وقت لمواكبة التغيرات القانونية والبرمجية.
                يتم نشر النسخة المحدثة على هذا الرابط وتصبح سارية فوراً، ويُعتبر استمرارك بالاستخدام قبولاً بها.
              </p>
            </SectionCard>

            <SectionCard id="contact" code="PRI·13" icon={Mail} title="التواصل والدعم الفني" accent="success">
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: 1.8, marginBottom: '16px' }}>
                إذا كان لديك أي استفسار بخصوص هذه السياسة أو رغبت في تعديل أو مراجعة بياناتك، يرجى فتح تذكرة دعم فني في سيرفرنا الرسمي:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer"
                  style={{ background: C.primary, color: '#fff', fontWeight: 600, fontSize: '13px', borderRadius: '8px', padding: '10px 20px', textDecoration: 'none' }}
                  className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity justify-center">
                  <Mail className="w-4 h-4" />
                  فتح تذكرة دعم فني
                </a>
                <Link to="/terms"
                  style={{ background: 'transparent', color: C.muted, fontWeight: 500, fontSize: '13px', borderRadius: '8px', padding: '10px 20px', border: `1px solid ${C.surface3}` }}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors justify-center">
                  شروط الاستخدام
                </Link>
              </div>
            </SectionCard>

            {/* footer */}
            <div style={{ borderTop: `1px solid ${C.surface3}`, paddingTop: '20px' }}
              className="flex items-center justify-between flex-wrap gap-3">
              <span style={{ color: C.muted, fontSize: '11px', fontFamily: 'monospace' }}>
                HEDRIX TECHNOLOGY · MAJESTIC FLUX · PRIVACY V2025.1
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

export default Privacy;
