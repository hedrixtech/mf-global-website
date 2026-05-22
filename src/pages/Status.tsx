import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { 
  ChevronDown, 
  ChevronUp, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Server,
  AlertOctagon,
  RefreshCw
} from 'lucide-react';

interface TimelineEvent {
  time: string;
  description: string;
}

interface ServiceData {
  name: string;
  status: string;
  timeline?: TimelineEvent[];
}

interface StatusData {
  overallStatus: string;
  updatedAt: string;
  issueBanner?: {
    show: boolean;
    severity: string;
    message: string;
  };
  services: ServiceData[];
}

const StatusPage = () => {
  const [statusData, setStatusData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedServices, setExpandedServices] = useState<{ [key: string]: boolean }>({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-emerald-400';
      case 'warning':
        return 'text-amber-400';
      case 'down':
        return 'text-rose-500';
      default:
        return 'text-purple-300/60';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-emerald-500/10 border-emerald-500/20';
      case 'warning':
        return 'bg-amber-500/10 border-amber-500/20';
      case 'down':
        return 'bg-rose-500/10 border-rose-500/20';
      default:
        return 'bg-purple-950/20 border-purple-500/10';
    }
  };

  const getPulseColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-emerald-400';
      case 'warning':
        return 'bg-amber-400';
      case 'down':
        return 'bg-rose-500';
      default:
        return 'bg-purple-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 animate-pulse" />;
      case 'down':
        return <XCircle className="w-5 h-5 text-rose-400 shrink-0 animate-bounce" />;
      default:
        return <Clock className="w-5 h-5 text-purple-400 shrink-0" />;
    }
  };

  const formatDateTime = (dateTimeStr: string) => {
    try {
      const date = new Date(dateTimeStr);
      return new Intl.DateTimeFormat('ar-EG', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(date);
    } catch {
      return dateTimeStr;
    }
  };

  const toggleExpand = (name: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const fetchStatus = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/status.json');
      const data = await res.json();
      setStatusData(data);
    } catch {
      setStatusData(null);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center font-arabic gap-4" dir="rtl">
          <RefreshCw className="w-8 h-8 text-purple-400 animate-spin" />
          <div className="text-purple-300 text-lg">جاري تحميل حالة النظام...</div>
        </div>
      </Layout>
    );
  }

  if (!statusData) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center font-arabic gap-4 text-center px-4" dir="rtl">
          <AlertOctagon className="w-12 h-12 text-rose-500 animate-pulse" />
          <div className="text-purple-200 text-xl font-bold">فشل تحميل حالة خوادم النظام</div>
          <p className="text-purple-400 max-w-sm text-sm">
            يرجى التأكد من اتصالك بالإنترنت، أو إعادة تحميل الصفحة لاحقاً.
          </p>
          <button 
            onClick={fetchStatus} 
            className="mt-2 px-6 py-2.5 bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 hover:border-purple-500/50 text-purple-200 text-sm rounded-xl transition-all"
          >
            إعادة المحاولة
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-arabic" dir="rtl">
        
        {/* Banner Issue alert */}
        {statusData.issueBanner?.show && (
          <div
            className={`p-4 md:p-5 rounded-2xl border flex items-start gap-4 shadow-lg transition-all duration-300 ${
              statusData.issueBanner.severity === 'warning'
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
            }`}
          >
            <AlertOctagon className={`w-6 h-6 shrink-0 mt-0.5 ${
              statusData.issueBanner.severity === 'warning' ? 'text-amber-400 animate-pulse' : 'text-rose-400 animate-bounce'
            }`} />
            <div>
              <strong className="text-base font-bold block mb-1">تنبيه وإشعار تشغيلي:</strong>
              <p className="text-sm leading-relaxed opacity-90">{statusData.issueBanner.message}</p>
            </div>
          </div>
        )}

        {/* Global status board */}
        <div className="glass-panel-glow rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-6 h-6 text-purple-400" />
                <h1 className="text-2xl md:text-3xl font-extrabold text-purple-100">حالة الخدمة والأنظمة</h1>
              </div>
              <div className="flex items-center gap-2 text-purple-400/60 text-xs md:text-sm">
                <Clock className="w-4 h-4" />
                <span>آخر تحديث تلقائي: {formatDateTime(statusData.updatedAt)}</span>
              </div>
            </div>

            <div className={`px-6 py-4 rounded-2xl border flex items-center gap-3 shrink-0 ${getStatusBg(statusData.overallStatus)}`}>
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${getPulseColor(statusData.overallStatus)}`}></span>
                <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${getPulseColor(statusData.overallStatus)}`}></span>
              </span>
              <div>
                <span className="text-xs text-purple-300/60 block leading-none mb-1">الوضع العام للنظام</span>
                <span className={`font-bold text-base md:text-lg block leading-none ${getStatusColor(statusData.overallStatus)}`}>
                  {statusData.overallStatus === 'operational'
                    ? 'تعمل كافة الخدمات بكفاءة'
                    : statusData.overallStatus === 'warning'
                    ? 'يواجه النظام بعض المشاكل الجزئية'
                    : 'النظام متوقف حالياً للصيانة'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Services Header */}
        <div className="flex items-center justify-between border-b border-purple-500/10 pb-3">
          <h2 className="text-xl font-bold text-purple-200 flex items-center gap-2">
            <Server className="w-5 h-5 text-purple-400" />
            <span>تفاصيل الخدمات والشبكة</span>
          </h2>
          <button 
            onClick={fetchStatus} 
            disabled={isRefreshing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-purple-300 hover:text-purple-100 border border-white/5 disabled:opacity-50 transition-all duration-300"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>تحديث الآن</span>
          </button>
        </div>

        {/* Services grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {statusData.services.map((service: ServiceData) => {
            const isExpanded = expandedServices[service.name] ?? false;
            const hasTimeline = service.timeline && service.timeline.length > 0;

            return (
              <div
                key={service.name}
                className={`glass-panel rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  isExpanded ? 'border-purple-500/20 bg-purple-950/10' : 'border-white/5 hover:border-purple-500/15'
                }`}
              >
                {/* Visual state color indicator at top */}
                <div className={`h-1 w-full absolute top-0 left-0 ${
                  service.status === 'operational' 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                    : service.status === 'warning' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                    : 'bg-gradient-to-r from-rose-500 to-red-600'
                }`} />

                {/* Header click container */}
                <div 
                  onClick={() => hasTimeline && toggleExpand(service.name)}
                  className={`p-5 flex items-center justify-between gap-4 ${hasTimeline ? 'cursor-pointer select-none' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full shrink-0 relative flex">
                      {service.status !== 'operational' && (
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${getPulseColor(service.status)}`}></span>
                      )}
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${getPulseColor(service.status)}`}></span>
                    </div>
                    <span className="text-purple-100 font-bold text-base md:text-lg group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold">
                      {getStatusIcon(service.status)}
                      <span className={getStatusColor(service.status)}>
                        {service.status === 'operational'
                          ? 'تعمل'
                          : service.status === 'warning'
                          ? 'أداء منخفض'
                          : 'متوقفة'}
                      </span>
                    </div>

                    {hasTimeline && (
                      <div className="text-purple-400 group-hover:text-purple-200 transition-colors">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    )}
                  </div>
                </div>

                {/* Service event logs timeline */}
                {isExpanded && hasTimeline && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 bg-purple-950/20 space-y-4">
                    <div className="text-xs text-purple-400/60 font-semibold mb-2">سجل الأحداث الأخيرة:</div>
                    <div className="relative border-r border-purple-500/20 pr-4 space-y-4">
                      {service.timeline?.slice(0, 5).map((event: TimelineEvent, idx: number) => (
                        <div key={idx} className="relative">
                          {/* Dot indicator on vertical line */}
                          <span className="absolute -right-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500/50 border-2 border-[#120a2e]" />
                          
                          <div className="text-xs text-purple-400 font-mono mb-0.5">{formatDateTime(event.time)}</div>
                          <div className="text-sm text-purple-200">{event.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </Layout>
  );
};

export default StatusPage;