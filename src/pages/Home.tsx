import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from 'framer-motion';
import {
  Shield,
  Sparkles,
  Coins,
  Users,
  Landmark,
  AlertTriangle,
  ArrowRightLeft,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface DiscordMessage {
  sender: 'user' | 'bot';
  name: string;
  avatar: string;
  content: string | React.ReactNode;
  time: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const botAvatar =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop';
const userAvatar =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop';

// ─── Purple palette tokens ─────────────────────────────────────────────────────
const P = {
  bg:          '#09061a',        // deepest bg — purple theme matching other pages
  bgMid:       '#0e0820',
  bgCard:      '#130d28',
  border:      'rgba(139,92,246,0.10)',   // very subtle purple border
  borderHover: 'rgba(139,92,246,0.20)',
  glow:        'rgba(139,92,246,0.06)',
  glowStrong:  'rgba(139,92,246,0.12)',
  accent:      '#a78bfa',        // violet-400
  accentMid:   '#7c3aed',
  muted:       'rgba(196,181,253,0.45)',
  dimmed:      'rgba(196,181,253,0.25)',
};

// ─── Animation helper ─────────────────────────────────────────────────────────
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

// ─── Glass style (purple-tinted) ──────────────────────────────────────────────
const glassStyle: React.CSSProperties = {
  background: 'rgba(109,40,217,0.03)',   // near-invisible — dark bg shows through
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: `1px solid ${P.border}`,
  boxShadow: `inset 0 1px 0 rgba(196,181,253,0.04), 0 2px 16px ${P.glow}`,
  position: 'relative',
  overflow: 'hidden',
};

const glassStyleStrong: React.CSSProperties = {
  ...glassStyle,
  background: 'rgba(109,40,217,0.05)',
  border: `1px solid rgba(139,92,246,0.14)`,
  boxShadow: `inset 0 1px 0 rgba(196,181,253,0.06), 0 4px 28px rgba(139,92,246,0.08)`,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const GlassButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}> = ({ children, className = '', onClick, href }) => {
  const base =
    'rounded-full px-7 py-3 text-sm font-medium text-white/80 cursor-pointer inline-flex items-center gap-2 transition-all hover:text-white';
  const style: React.CSSProperties = {
    ...glassStyle,
    border: `1px solid ${P.border}`,
  };
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`} style={style}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={`${base} ${className}`} style={style}>
      {children}
    </button>
  );
};

const SolidButton: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <motion.span
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={`inline-flex items-center gap-2 rounded-full text-sm font-bold tracking-wide px-7 py-3 cursor-pointer ${className}`}
    style={{
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      boxShadow: '0 0 24px rgba(139,92,246,0.45), inset 0 1px 0 rgba(255,255,255,0.15)',
      color: '#fff',
    }}
  >
    {children}
  </motion.span>
);

const LogoMark: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'sm' }) => {
  const outer = size === 'lg' ? 'w-10 h-10' : 'w-7 h-7';
  const inner = size === 'lg' ? 'w-5 h-5' : 'w-3 h-3';
  const borderColor = P.accent;
  return (
    <span
      className={`${outer} rounded-full flex items-center justify-center shrink-0`}
      style={{ border: `2px solid ${borderColor}60` }}
    >
      <span className={`${inner} rounded-full`} style={{ border: `1px solid ${borderColor}60` }} />
    </span>
  );
};

const ScrollRevealWord: React.FC<{
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
}> = ({ word, index, totalWords, scrollYProgress }) => {
  const op = useTransform(
    scrollYProgress,
    [index / totalWords, (index + 6) / totalWords],
    [0.15, 1]
  );
  return (
    <motion.span style={{ opacity: op, display: 'inline-block', marginLeft: 6 }}>
      {word}
    </motion.span>
  );
};

// ─── Simulation steps ─────────────────────────────────────────────────────────
const makeCardStyle = (borderAlpha = 0.18): React.CSSProperties => ({
  background: 'rgba(109,40,217,0.12)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: `1px solid rgba(139,92,246,${borderAlpha})`,
  boxShadow: `0 4px 20px rgba(109,40,217,0.20)`,
});

const simulationSteps = [
  {
    sender: 'user' as const,
    name: 'أحمد',
    avatar: userAvatar,
    content: '/register',
    delayBefore: 1000,
    typingDuration: 800,
  },
  {
    sender: 'bot' as const,
    name: 'Majestic Flux',
    avatar: botAvatar,
    content: (
      <div className="rounded-2xl p-4 max-w-sm mt-1" style={makeCardStyle(0.25)}>
        <div className="flex justify-between items-center border-b pb-2 mb-2" style={{ borderColor: 'rgba(139,92,246,0.2)' }}>
          <span className="text-xs font-semibold" style={{ color: P.muted }}>وزارة الداخلية • الهوية الوطنية</span>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: P.accent }} />
        </div>
        <p className="text-sm font-semibold text-white mb-1">الاسم: أحمد بن خالد</p>
        <p className="text-xs" style={{ color: P.dimmed }}>الرقم المدني: #19883492</p>
        <p className="text-xs" style={{ color: P.dimmed }}>الحالة: مواطن نشط</p>
        <div className="mt-3 text-xs px-2 py-1 rounded text-center font-medium"
          style={{ background: 'rgba(139,92,246,0.15)', color: P.muted }}>
          تم حفظ المستند بنجاح في السجل المدني
        </div>
      </div>
    ),
    delayBefore: 600,
    typingDuration: 1200,
  },
  {
    sender: 'user' as const,
    name: 'أحمد',
    avatar: userAvatar,
    content: '/balance',
    delayBefore: 1500,
    typingDuration: 600,
  },
  {
    sender: 'bot' as const,
    name: 'Majestic Flux',
    avatar: botAvatar,
    content: (
      <div className="rounded-2xl p-4 max-w-sm mt-1" style={makeCardStyle(0.20)}>
        <div className="flex items-center gap-2 mb-2">
          <Coins className="w-4 h-4" style={{ color: P.accent }} />
          <span className="text-xs font-semibold" style={{ color: P.muted }}>البنك المركزي • المحفظة</span>
        </div>
        <div className="flex justify-between text-sm py-1 border-b" style={{ borderColor: 'rgba(139,92,246,0.12)' }}>
          <span style={{ color: P.dimmed }}>الرصيد الأساسي:</span>
          <span className="font-mono text-white">14,000 فلكس</span>
        </div>
        <div className="flex justify-between text-sm py-1">
          <span style={{ color: P.dimmed }}>المكافأة النشطة:</span>
          <span className="font-mono" style={{ color: P.accent }}>+3,000 فلكس</span>
        </div>
      </div>
    ),
    delayBefore: 500,
    typingDuration: 1000,
  },
  {
    sender: 'user' as const,
    name: 'أحمد',
    avatar: userAvatar,
    content: '/license check',
    delayBefore: 1800,
    typingDuration: 900,
  },
  {
    sender: 'bot' as const,
    name: 'Majestic Flux',
    avatar: botAvatar,
    content: (
      <div className="rounded-2xl p-4 max-w-sm mt-1" style={makeCardStyle(0.30)}>
        <div className="flex items-center gap-2 mb-2 font-bold text-xs" style={{ color: P.muted }}>
          <AlertTriangle className="w-4 h-4 animate-bounce" style={{ color: P.accent }} />
          <span>إدارة المرور والأنظمة المدنية</span>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: P.dimmed }}>
          تنبيه أمني: رخصة القيادة للمواطن أحمد منتهية الصلاحية منذ 12 يوماً. تم قيد غرامة مرورية بقيمة 150 فلكس. يرجى تجديد الرخصة عبر البوابة الإلكترونية.
        </p>
      </div>
    ),
    delayBefore: 700,
    typingDuration: 1500,
  },
];

// ─── Feature data ─────────────────────────────────────────────────────────────
const features = [
  {
    title: 'السجل المدني الرقمي',
    desc: 'بنية تحتية متكاملة لإصدار الهويات الوطنية وإدارة الحالات المدنية للأعضاء داخل السيرفر بمرونة تامة.',
    icon: Users,
  },
  {
    title: 'وزارة الداخلية والبلديات',
    desc: 'حزمة أمنية وهندسية متطورة لتنظيم القوانين وتتبع التراخيص والمخالفات المرورية لحفظ استقرار السيرفر.',
    icon: Shield,
  },
  {
    title: 'الأسواق والمزايدات الذكية',
    desc: 'محرك اقتصادي تفاعلي يتيح للأعضاء إنشاء المزادات، تداول العناصر النادرة، وإبرام الصفقات التجارية الناجحة.',
    icon: ArrowRightLeft,
  },
  {
    title: 'البنك المركزي والمحفظة',
    desc: 'نظام مالي متكامل لإدارة الحسابات البنكية بـ Flux، وتتبع عمليات الإيداع، السحب، وخدمات التمويل الذكي.',
    icon: Landmark,
  },
];

const stats = [
  { value: '+12,000', label: 'عضو نشط' },
  { value: '99.9%', label: 'وقت التشغيل' },
  { value: '+400', label: 'سيرفر متصل' },
];

// ─── Main component ───────────────────────────────────────────────────────────
const Home: React.FC = () => {
  const navItems = [
    { label: 'الرئيسية', target: 'hero' },
    { label: 'كيف يعمل', target: 'how-it-works' },
    { label: 'الفلسفة', target: 'philosophy' },
    { label: 'حالات الاستخدام', target: 'use-cases' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [activeStep, setActiveStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<DiscordMessage[]>([]);
  const [email, setEmail] = useState('');

  const missionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: missionRef,
    offset: ['start end', 'end start'],
  });

  // Simulation loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const step = simulationSteps[activeStep];
    timer = setTimeout(() => {
      setIsTyping(true);
      timer = setTimeout(() => {
        setIsTyping(false);
        const newMsg: DiscordMessage = {
          sender: step.sender,
          name: step.name,
          avatar: step.avatar,
          content: step.content,
          time: 'اليوم في ' + new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, newMsg]);
        if (activeStep < simulationSteps.length - 1) {
          setActiveStep((prev) => prev + 1);
        } else {
          timer = setTimeout(() => { setMessages([]); setActiveStep(0); }, 6000);
        }
      }, step.typingDuration);
    }, step.delayBefore);
    return () => clearTimeout(timer);
  }, [activeStep]);

  const missionWords1 =
    'اجعل سيرفرك الرقمي بيئة تفاعلية نابضة بالحياة مع أنظمة محاكاة متطورة تشمل السجلات المدنية والمحافظ البنكية والأسواق الحرة'.split(' ');
  const missionWords2 =
    'منصة يلتقي فيها المحتوى والمجتمع معاً بأقل قدر من الفوضى وأكثر قدر من المعنى لكل الأعضاء'.split(' ');
  const totalWords = missionWords1.length + missionWords2.length;

  return (
    <div
      dir="rtl"
      style={{
        background: P.bg,
        color: '#fff',
        fontFamily: "'Almarai', sans-serif",
        minHeight: '100vh',
      }}
    >
      {/* ── Ambient background orbs ── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', left: '-15%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', top: '60%', right: '30%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        }} />
      </div>

      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '16px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'transparent',
        borderBottom: 'none',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark />
          <span style={{ fontWeight: 700, fontSize: 15, color: '#fff', letterSpacing: '-0.3px' }}>
            Majestic Flux
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
          {navItems.map((item, i) => {
            const linkStyle: React.CSSProperties = {
              color: P.muted,
              textDecoration: 'none',
              transition: 'color 0.2s',
              cursor: 'pointer',
            };
            return (
              <React.Fragment key={item.label}>
                {i > 0 && <span style={{ color: P.border, margin: '0 4px' }}>•</span>}
                <span
                  onClick={() => scrollToSection(item.target)}
                  style={linkStyle}
                  onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                  onMouseOut={e => (e.currentTarget.style.color = P.muted)}
                >
                  {item.label}
                </span>
              </React.Fragment>
            );
          })}
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 8 }}>
          {[Instagram, Linkedin, Twitter].map((Icon, i) => (
            <motion.a key={i} href="#" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
              style={{
                width: 40, height: 40, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                ...glassStyle,
              }}
            >
              <Icon style={{ width: 16, height: 16, color: P.muted }} />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        {/* Underlay purple glow */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(circle at center, rgba(139,92,246,0.25) 0%, transparent 70%)'
        }} />
        
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          autoPlay loop muted playsInline
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.45, zIndex: 1,
            mixBlendMode: 'screen'
          }}
        />
        {/* Vignette overlay to fade video to background purple */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'radial-gradient(circle at center, transparent 35%, #09061a 90%), linear-gradient(to bottom, #09061a 0%, rgba(9,6,26,0.2) 20%, rgba(9,6,26,0.2) 80%, #09061a 100%)'
        }} />

        <div style={{ position: 'relative', zIndex: 3, maxWidth: 900, margin: '0 auto', padding: '128px 24px 96px' }}>
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 999, fontSize: 12, fontWeight: 600,
              color: P.accent,
              ...glassStyle,
              border: `1px solid rgba(139,92,246,0.30)`,
            }}>
              <Sparkles style={{ width: 13, height: 13 }} />
              نظام التشغيل الأكثر تقدماً لمحاكاة المجتمعات
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.2)} style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            color: '#fff',
            margin: '0 0 24px',
          }}>
            اجعل سيرفرك الرقمي
            <br />
            <span style={{
              background: `linear-gradient(135deg, ${P.accent} 0%, #c4b5fd 50%, #818cf8 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              نابضاً بالحياة
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p {...fadeUp(0.35)} style={{
            fontSize: 17, color: P.muted, maxWidth: 600, margin: '0 auto 40px',
            lineHeight: 1.8,
          }}>
            ارتقِ بتفاعل أعضائك من خلال دمج أنظمة محاكاة متطورة تشمل السجلات المدنية والمحافظ البنكية والأسواق الحرة.
          </motion.p>

          {/* Email CTA */}
          <motion.div {...fadeUp(0.5)} style={{ maxWidth: 480, margin: '0 auto 48px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', borderRadius: 999, padding: 6,
              ...glassStyle,
              border: `1px solid rgba(139,92,246,0.30)`,
            }}>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني…"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1, background: 'transparent', color: '#fff',
                  border: 'none', outline: 'none', fontSize: 14, padding: '0 16px',
                  fontFamily: "'Almarai', sans-serif",
                }}
                dir="rtl"
              />
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                  color: '#fff', fontWeight: 700, fontSize: 13,
                  borderRadius: 999, padding: '12px 28px', border: 'none', cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(139,92,246,0.4)',
                  fontFamily: "'Almarai', sans-serif",
                  whiteSpace: 'nowrap',
                }}
              >
                ابدأ الآن
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.65)} style={{ display: 'flex', justifyContent: 'center', gap: 48 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: P.dimmed, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── "سيرفرك تغيّر" section ── */}
      <section id="philosophy" style={{ padding: '128px 48px 48px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.h2 {...fadeUp(0)} style={{
          fontSize: 'clamp(36px, 6vw, 80px)',
          fontWeight: 800, letterSpacing: '-1.5px',
          color: '#fff', marginBottom: 20,
        }}>
          سيرفرك تغيّر.{' '}
          <span style={{ color: P.accent }}>أعضاؤك أيضاً؟</span>
        </motion.h2>

        <motion.p {...fadeUp(0.15)} style={{ color: P.muted, fontSize: 17, maxWidth: 580, margin: '0 auto 80px', lineHeight: 1.7 }}>
          الأعضاء يتوقعون اليوم تجربة حقيقية — محاكاة كاملة للمجتمع المدني داخل ديسكورد.
        </motion.p>

        {/* 3 pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto 64px' }}>
          {[
            { icon: Users, name: 'الهوية المدنية', desc: 'سجلات وطنية حقيقية لكل عضو داخل السيرفر' },
            { icon: Coins, name: 'الاقتصاد الحي', desc: 'محافظ وأسواق ومزايدات بعملة Flux المتكاملة' },
            { icon: Shield, name: 'الحوكمة والأنظمة', desc: 'قوانين وتراخيص ومخالفات تُدار آلياً بدقة' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.name} {...fadeUp(i * 0.12)}
                style={{ padding: '32px 24px', borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, ...glassStyle }}
              >
                <div style={{
                  width: 60, height: 60, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(139,92,246,0.15)',
                  border: `1px solid rgba(139,92,246,0.30)`,
                }}>
                  <Icon style={{ width: 26, height: 26, color: P.accent }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 6 }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: P.dimmed, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p {...fadeUp(0.3)} style={{ color: P.dimmed, fontSize: 13 }}>
          إذا لم تقدم التجربة، سيجد أعضاؤك سيرفراً آخر يقدمها.
        </motion.p>
      </section>

      {/* ── Mission / scroll reveal ── */}
      <section ref={missionRef} style={{ padding: '128px 48px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: 560, margin: '0 auto 64px', borderRadius: 24, overflow: 'hidden', border: `1px solid ${P.border}`, boxShadow: `0 0 60px ${P.glow}` }}>
          {/* Underlay glow */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 80%)' }} />
          
          <motion.video
            {...fadeUp(0)}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
            autoPlay loop muted playsInline
            style={{ width: '100%', display: 'block', aspectRatio: '1/1', objectFit: 'cover', zIndex: 1, mixBlendMode: 'screen' }}
          />

          {/* Vignette overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 40%, #09061a 95%), linear-gradient(to bottom, #09061a 0%, transparent 20%, transparent 80%, #09061a 100%)' }} />
        </div>

        <p style={{ fontSize: 'clamp(22px, 3.5vw, 48px)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.5, marginBottom: 40 }}>
          {missionWords1.map((word, i) => (
            <ScrollRevealWord
              key={i}
              word={word}
              index={i}
              totalWords={totalWords}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>

        <p style={{ fontSize: 'clamp(18px, 2.5vw, 30px)', fontWeight: 600, lineHeight: 1.6, color: P.muted }}>
          {missionWords2.map((word, i) => {
            const gi = missionWords1.length + i;
            return (
              <ScrollRevealWord
                key={i}
                word={word}
                index={gi}
                totalWords={totalWords}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </p>
      </section>

      {/* ── Discord simulation ── */}
      <section id="how-it-works" style={{ padding: '80px 48px', borderTop: `1px solid ${P.border}`, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: P.dimmed, marginBottom: 16 }}>LIVE DEMO</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-1px', color: '#fff', margin: '0 0 12px' }}>
              شاهد <span style={{ color: P.accent }}>البوت في عمله</span>
            </h2>
            <p style={{ color: P.dimmed, fontSize: 13 }}>محاكاة تفاعلية حية لأوامر Majestic Flux داخل ديسكورد</p>
          </motion.div>

          <motion.div {...fadeUp(0.15)}
            style={{
              borderRadius: 24, overflow: 'hidden',
              display: 'flex', height: 440,
              ...glassStyleStrong,
            }}
            dir="ltr"
          >
            {/* Sidebar */}
            <div style={{
              width: 180, padding: 12, flexShrink: 0,
              borderRight: `1px solid ${P.border}`,
              display: 'flex', flexDirection: 'column', gap: 0,
              background: 'rgba(9,6,26,0.15)',
            }}>
              <div style={{
                fontWeight: 700, fontSize: 12, color: 'rgba(196,181,253,0.7)',
                padding: '6px 8px 10px', marginBottom: 8,
                borderBottom: `1px solid ${P.border}`,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>Majestic Server</span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: P.accent }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{
                  padding: '6px 8px', borderRadius: 6, fontSize: 12, fontWeight: 600,
                  background: 'rgba(139,92,246,0.18)', color: P.accent,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <span>#</span><span>flux-simulation</span>
                </div>
                {['welcome', 'announcements', 'general'].map((ch) => (
                  <div key={ch} style={{ padding: '6px 8px', borderRadius: 6, fontSize: 12, color: P.dimmed, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
                    <span>#</span><span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              {/* Header */}
              <div style={{
                padding: '12px 16px', borderBottom: `1px solid ${P.border}`,
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'rgba(9,6,26,0.10)',
              }}>
                <span style={{ color: P.dimmed, fontSize: 18 }}>#</span>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>flux-simulation</span>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: P.border, margin: '0 4px' }} />
                <span style={{ fontSize: 11, color: P.dimmed }}>قناة محاكاة الأنظمة</span>
              </div>

              {/* Messages */}
              <div style={{ flex: 1, padding: 16, overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 16 }}>
                <AnimatePresence>
                  {messages.map((msg, idx) => (
                    <motion.div key={idx}
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ display: 'flex', gap: 12, padding: 4, borderRadius: 8 }}
                    >
                      <img src={msg.avatar} alt="avatar" style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0, opacity: 0.85 }} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: msg.sender === 'bot' ? P.accent : 'rgba(255,255,255,0.7)' }}>
                            {msg.name}
                          </span>
                          {msg.sender === 'bot' && (
                            <span style={{ background: 'rgba(139,92,246,0.25)', color: P.accent, fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 4 }}>BOT</span>
                          )}
                          <span style={{ fontSize: 10, color: P.dimmed }}>{msg.time}</span>
                        </div>
                        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>{msg.content}</div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isTyping && (
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 12, color: P.dimmed, padding: '0 4px' }}>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {[0, 150, 300].map((d) => (
                        <span key={d} className="animate-bounce" style={{
                          width: 6, height: 6, borderRadius: '50%', background: P.accent, display: 'block',
                          animationDelay: `${d}ms`,
                        }} />
                      ))}
                    </div>
                    <span>{simulationSteps[activeStep].name} يكتب الآن...</span>
                  </div>
                )}
              </div>

              {/* Input */}
              <div style={{ padding: 12, flexShrink: 0 }}>
                <div style={{
                  borderRadius: 10, padding: '10px 14px', fontSize: 13,
                  color: P.dimmed, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  ...glassStyle,
                }}>
                  <span>إرسال رسالة إلى #flux-simulation</span>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', border: `1px solid ${P.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>+</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Solution / features ── */}
      <section id="use-cases" style={{ padding: '96px 48px', borderTop: `1px solid ${P.border}`, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: P.dimmed, marginBottom: 16 }}>SOLUTION</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-1px', color: '#fff', margin: 0 }}>
              المنصة لـ<span style={{ color: P.accent }}>المحتوى الحقيقي</span>
            </h2>
          </motion.div>

          <div style={{ position: 'relative', width: '100%', borderRadius: 20, marginBottom: 48, overflow: 'hidden', border: `1px solid ${P.border}`, boxShadow: `0 0 60px ${P.glow}` }}>
            {/* Underlay glow */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 80%)' }} />
            
            <motion.video
              {...fadeUp(0.1)}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
              autoPlay loop muted playsInline
              style={{ width: '100%', objectFit: 'cover', zIndex: 1, mixBlendMode: 'screen', aspectRatio: '3/1', display: 'block' }}
            />

            {/* Vignette overlay */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to right, #09061a 0%, transparent 15%, transparent 85%, #09061a 100%), linear-gradient(to bottom, #09061a 0%, transparent 20%, transparent 80%, #09061a 100%)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp(i * 0.1)}
                  style={{ padding: 24, borderRadius: 18, ...glassStyle, transition: 'transform 0.2s' }}
                  whileHover={{ y: -4 }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%', marginBottom: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(139,92,246,0.15)', border: `1px solid rgba(139,92,246,0.25)`,
                  }}>
                    <Icon style={{ width: 20, height: 20, color: P.accent }} />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 8 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: P.dimmed, lineHeight: 1.7 }}>{f.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '128px 48px', borderTop: `1px solid ${P.border}`, position: 'relative', overflow: 'hidden', textAlign: 'center', zIndex: 1 }}>
        {/* Glow orb behind */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700, height: 700, borderRadius: '50%', pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 65%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <motion.div {...fadeUp(0)}>
            <LogoMark size="lg" />
          </motion.div>

          <motion.h2 {...fadeUp(0.1)} style={{
            fontSize: 'clamp(36px, 6vw, 68px)',
            fontWeight: 800, letterSpacing: '-1.5px', color: '#fff', margin: 0,
          }}>
            ابدأ <span style={{ color: P.accent }}>رحلتك</span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)} style={{ color: P.muted, fontSize: 16, maxWidth: 440, lineHeight: 1.8, margin: 0 }}>
            بضع نقرات فقط وتتحول تجربة اللعب داخل ديسكورد إلى واقع هندسي منظم وممتع لجميع الأعضاء.
          </motion.p>

          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/plans" style={{ textDecoration: 'none' }}>
              <SolidButton>اشترك الآن</SolidButton>
            </Link>
            <GlassButton href="https://discord.gg/weg5eGG5cr">
              جرب مجاناً على ديسكورد
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        padding: '40px 48px',
        borderTop: `1px solid ${P.border}`,
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        position: 'relative', zIndex: 1,
        flexWrap: 'wrap',
      }}>
        <p style={{ color: P.dimmed, fontSize: 13, margin: 0 }}>© 2026 Majestic Flux. جميع الحقوق محفوظة.</p>
        <div style={{ display: 'flex', gap: 24, fontSize: 13, color: P.dimmed }}>
          <Link to="/privacy" style={{ color: P.dimmed, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = P.accent)}
            onMouseOut={e => (e.currentTarget.style.color = P.dimmed)}
          >
            الخصوصية
          </Link>
          <Link to="/terms" style={{ color: P.dimmed, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = P.accent)}
            onMouseOut={e => (e.currentTarget.style.color = P.dimmed)}
          >
            الشروط
          </Link>
          <Link to="/plans" style={{ color: P.dimmed, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = P.accent)}
            onMouseOut={e => (e.currentTarget.style.color = P.dimmed)}
          >
            الاشتراكات
          </Link>
          <Link to="/partners" style={{ color: P.dimmed, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = P.accent)}
            onMouseOut={e => (e.currentTarget.style.color = P.dimmed)}
          >
            الشراكات
          </Link>
          <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer" style={{ color: P.dimmed, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = P.accent)}
            onMouseOut={e => (e.currentTarget.style.color = P.dimmed)}
          >
            الدعم الفني
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
