import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const StatusPage = () => {
  const [statusData, setStatusData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [expandedServices, setExpandedServices] = useState<{ [key: string]: boolean }>({});

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-300';
    }
  };

  const getLineColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'down':
        return 'bg-red-600';
      default:
        return 'bg-gray-300';
    }
  };

  const formatDateTime = (dateTimeStr: string) => {
    try {
      const date = new Date(dateTimeStr);
      return new Intl.DateTimeFormat('en-US', {
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
    try {
      const res = await fetch('/status.json');
      const data = await res.json();
      setStatusData(data);
    } catch {
      setStatusData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  if (loading || !statusData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-arabic">
        جاري تحميل حالة النظام...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0c2d] text-white p-6 space-y-8 font-arabic">
      {/* تنبيه عام */}
      {statusData.issueBanner?.show && (
        <div
          className={`p-4 rounded-lg shadow text-white ${
            statusData.issueBanner.severity === 'warning'
              ? 'bg-yellow-600'
              : 'bg-red-600'
          }`}
        >
          <strong>تنبيه:</strong> {statusData.issueBanner.message}
        </div>
      )}

      {/* حالة النظام العامة */}
      <div className="bg-purple-900/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-purple-400/20">
        <h1 className="text-3xl font-bold text-purple-200 mb-4">حالة النظام</h1>
        <p className="text-purple-300">آخر تحديث: {formatDateTime(statusData.updatedAt)}</p>
        <p className="mt-2 text-lg">
          الحالة العامة:{' '}
          <span className={`font-bold ${getStatusColor(statusData.overallStatus)}`}>
            {statusData.overallStatus === 'operational'
              ? 'تعمل بكفاءة'
              : statusData.overallStatus === 'warning'
              ? 'تحذير'
              : 'توقف'}
          </span>
        </p>
      </div>

      {/* الخدمات الفردية */}
    <div className="grid grid-cols-1 gap-4">
            {statusData.services.map((service: any) => {
          const isExpanded = expandedServices[service.name] ?? false;

          return (
            <div
              key={service.name}
              className="bg-purple-800/30 p-4 rounded-lg border border-purple-400/10 shadow relative overflow-hidden"
            >
              {/* شريط الحالة الملون */}
              <div className={`h-1 w-full absolute top-0 left-0 ${getLineColor(service.status)}`} />

              {/* الرأس */}
              <div className="flex justify-between items-center">
                <span className="text-purple-100 font-medium">{service.name}</span>

                <div className="flex items-center gap-3">
                  <span className={`font-bold ${getStatusColor(service.status)}`}>
                    {service.status === 'operational'
                      ? 'تعمل'
                      : service.status === 'warning'
                      ? 'تحذير'
                      : 'متوقفة'}
                  </span>
                 {service.timeline?.length > 0 && (
  <button
    onClick={() => toggleExpand(service.name)}
    className="text-purple-300 hover:text-purple-100 transition transform hover:scale-110"
    aria-label="عرض التفاصيل"
  >
    {isExpanded ? (
      <ChevronUpIcon className="w-5 h-5" />
    ) : (
      <ChevronDownIcon className="w-5 h-5" />
    )}
  </button>
)}
                </div>
              </div>

              {/* التفاصيل */}
              {isExpanded && service.timeline && (
                <div className="mt-4 space-y-2 text-sm text-purple-300">
                  {service.timeline.slice(0, 5).map((event: any, idx: number) => (
                    <div key={idx} className="border-r-4 border-purple-400 pr-3 text-right">
                      <div className="font-bold">{formatDateTime(event.time)}</div>
                      <div>{event.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusPage;