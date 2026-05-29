import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Shield, Sparkles, Coins, Users, Landmark, AlertTriangle, ArrowRightLeft } from 'lucide-react';

interface DiscordMessage {
  sender: 'user' | 'bot';
  name: string;
  avatar: string;
  content: string | React.ReactNode;
  time: string;
}

const botAvatar = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop";
const userAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop";

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
      <div className="glass-panel rounded-2xl p-4 border border-purple-500/30 max-w-sm mt-1 animate-float shadow-lg bg-purple-950/30">
        <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
          <span className="text-xs font-bold text-purple-300">وزارة الداخلية • الهوية الوطنية</span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        </div>
        <p className="text-sm font-semibold text-white mb-1">الاسم: أحمد بن خالد</p>
        <p className="text-xs text-purple-200">الرقم المدني: #19883492</p>
        <p className="text-xs text-purple-200">الحالة: مواطن نشط</p>
        <div className="mt-3 text-xs bg-purple-500/20 px-2 py-1 rounded text-purple-200 text-center font-medium">
          💳 تم حفظ المستند بنجاح في السجل المدني
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
      <div className="glass-panel rounded-2xl p-4 border border-indigo-500/30 max-w-sm mt-1 shadow-lg bg-indigo-950/30">
        <div className="flex items-center gap-2 mb-2">
          <Coins className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-indigo-300">البنك المركزي • المحفظة</span>
        </div>
        <div className="flex justify-between text-sm py-1 border-b border-white/5">
          <span>الرصيد الأساسي:</span>
          <span className="font-mono text-emerald-400">14,000 فلكس</span>
        </div>
        <div className="flex justify-between text-sm py-1">
          <span>المكافأة النشطة:</span>
          <span className="font-mono text-purple-300">+3,000 فلكس</span>
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
      <div className="glass-panel rounded-2xl p-4 border border-red-500/40 max-w-sm mt-1 shadow-lg bg-red-950/20">
        <div className="flex items-center gap-2 text-red-400 mb-2 font-bold text-xs">
          <AlertTriangle className="w-4 h-4 text-red-500 animate-bounce" />
          <span>إدارة المرور والأنظمة المدنية</span>
        </div>
        <p className="text-xs text-red-200 leading-relaxed">
          ⚠️ تنبيه أمني: رخصة القيادة للمواطن أحمد منتهية الصلاحية منذ 12 يوماً. تم قيد غرامة مرورية بقيمة 150 فلكس. يرجى تجديد الرخصة عبر البوابة الإلكترونية لتفادي تراكم الغرامات.
        </p>
      </div>
    ),
    delayBefore: 700,
    typingDuration: 1500,
  }
];

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<DiscordMessage[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const runSimulation = () => {
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
          setMessages(prev => [...prev, newMsg]);

          // Move to next step
          if (activeStep < simulationSteps.length - 1) {
            setActiveStep(prev => prev + 1);
          } else {
            // Loop reset
            timer = setTimeout(() => {
              setMessages([]);
              setActiveStep(0);
            }, 6000);
          }
        }, step.typingDuration);
      }, step.delayBefore);
    };

    runSimulation();
    
    return () => clearTimeout(timer);
  }, [activeStep]);

  const features = [
    {
      title: 'السجل المدني الرقمي',
      desc: 'بنية تحتية متكاملة لإصدار الهويات الوطنية وإدارة الحالات المدنية للأعضاء داخل السيرفر بمرونة تامة.',
      icon: Users,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'وزارة الداخلية والبلديات',
      desc: 'حزمة أمنية وهندسية متطورة لتنظيم القوانين وتتبع التراخيص والمخالفات المرورية لحفظ استقرار السيرفر.',
      icon: Shield,
      color: 'from-red-500 to-rose-600'
    },
    {
      title: 'الأسواق والمزايدات الذكية',
      desc: 'محرك اقتصادي تفاعلي يتيح للأعضاء إنشاء المزادات، تداول العناصر النادرة، وإبرام الصفقات التجارية الناجحة.',
      icon: ArrowRightLeft,
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'البنك المركزي والمحفظة',
      desc: 'نظام مالي متكامل لإدارة الحسابات البنكية بـ Flux، وتتبع عمليات الإيداع، السحب، وخدمات التمويل الذكي.',
      icon: Landmark,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <Layout>
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-8 select-none">
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-sm font-semibold animate-pulse">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>نظام التشغيل الأكثر تقدماً لمحاكاة المجتمعات</span>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-tight">
              اجعل سيرفرك الرقمي
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 drop-shadow-sm">
                بيئة تفاعلية نابضة بالحياة
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed font-medium">
              ارتقِ بتفاعل أعضائك من خلال دمج أنظمة محاكاة متطورة تشمل السجلات المدنية، المحافظ البنكية، الأسواق الحرة، والمزايدات الذكية التي تخلق مجتمعاً مترابطاً وتجارب تفاعلية استثنائية.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
            <Link to="/plans" className="w-full sm:w-auto">
              <Button primary>اشترك الآن</Button>
            </Link>
            <a href="https://majesticflux-dashboard.vercel.app/guilds" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="bg-purple-600/20 hover:bg-purple-600/40 text-purple-200 border border-purple-500/30 shadow-lg shadow-purple-500/10">
                لوحة التحكم
              </Button>
            </a>
            <a href="https://discord.gg/weg5eGG5cr" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button>جرب مجاناً</Button>
            </a>
          </div>
        </section>

        {/* Interactive Discord Client Simulation */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">شاهد البوت في عمله</h3>
            <p className="text-sm text-purple-300/70">محاكاة تفاعلية حية لأوامر Majestic Flux داخل ديسكورد</p>
          </div>

          {/* Discord client wrap */}
          <div className="glass-panel rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[420px] select-none text-left" dir="ltr">
            {/* Discord sidebar */}
            <div className="hidden md:flex flex-col w-48 bg-[#2b2d31] p-3 text-sm text-slate-400 shrink-0 select-none">
              <div className="font-bold text-white mb-4 px-2 py-1.5 border-b border-white/5 flex justify-between items-center">
                <span>Majestic Server</span>
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
              </div>
              <div className="space-y-1.5">
                <div className="px-2 py-1 rounded bg-white/5 text-white font-medium flex items-center gap-2">
                  <span>#</span>
                  <span>flux-simulation</span>
                </div>
                <div className="px-2 py-1 hover:text-slate-200 cursor-pointer flex items-center gap-2">
                  <span>#</span>
                  <span>welcome</span>
                </div>
                <div className="px-2 py-1 hover:text-slate-200 cursor-pointer flex items-center gap-2">
                  <span>#</span>
                  <span>announcements</span>
                </div>
              </div>
            </div>

            {/* Discord chat area */}
            <div className="flex-grow bg-[#313338] flex flex-col justify-between overflow-hidden">
              {/* Header */}
              <div className="px-4 py-3 bg-[#313338] border-b border-black/20 flex items-center gap-2 shrink-0">
                <span className="text-[#80848e] text-xl font-medium">#</span>
                <span className="text-white font-bold text-sm">flux-simulation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mx-1" />
                <span className="text-xs text-[#949ba4]">قناة محاكاة الأنظمة وتوليد المستندات</span>
              </div>

              {/* Messages space */}
              <div className="flex-grow p-4 space-y-4 overflow-y-auto flex flex-col justify-end min-h-0 scrollbar-none">
                {messages.map((msg, index) => (
                  <div key={index} className="flex gap-3 hover:bg-black/5 p-1 rounded transition-colors group">
                    <img src={msg.avatar} alt="avatar" className="w-10 h-10 rounded-full shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold cursor-pointer hover:underline ${msg.sender === 'bot' ? 'text-purple-300' : 'text-slate-100'}`}>
                          {msg.name}
                        </span>
                        {msg.sender === 'bot' && (
                          <span className="bg-[#5865f2] text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">BOT</span>
                        )}
                        <span className="text-[10px] text-[#949ba4]">{msg.time}</span>
                      </div>
                      <div className="text-sm text-[#dbdee1] mt-1 select-text">
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3 items-center text-xs text-[#949ba4] px-1 select-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-[#949ba4] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-[#949ba4] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-[#949ba4] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span>{simulationSteps[activeStep].name} يكتب الآن...</span>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 shrink-0 bg-[#313338]">
                <div className="w-full bg-[#383a40] rounded-lg px-4 py-2.5 text-[#949ba4] text-sm flex justify-between items-center">
                  <span>إرسال رسالة إلى #flux-simulation</span>
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center font-bold text-xs select-none">+</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="space-y-12">
          <div className="text-center select-none">
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3">أنظمة لعب متكاملة</h3>
            <p className="text-purple-300/70 max-w-xl mx-auto">صُممت كل ميزة وتفاعل لتقديم تجربة غامرة ومحاكاة ممتعة للأعضاء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" dir="rtl">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="glass-panel-glow rounded-3xl p-8 border border-white/5 flex gap-5 items-start hover:-translate-y-1 transition-transform"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/10`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2 select-none">
                    <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                    <p className="text-purple-300/70 leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dynamic CTA */}
        <section className="glass-panel rounded-3xl p-10 md:p-14 border border-white/10 text-center relative overflow-hidden select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">هل أنت جاهز لتحديث سيرفرك؟</h3>
          <p className="text-purple-200/70 text-base max-w-lg mx-auto mb-8">
            بضع نقرات فقط وتتحول تجربة اللعب داخل ديسكورد إلى واقع هندسي منظم وممتع لجميع الأعضاء.
          </p>
          <div className="flex justify-center">
            <Link to="/plans">
              <Button primary>عرض باقات الاشتراك</Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;