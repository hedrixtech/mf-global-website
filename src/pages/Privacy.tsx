import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Section title="سياسة الخصوصية" id="privacy">
          <p className="mb-4">
            آخر تحديث: 1 يونيو 2025
          </p>

          <p className="mb-4">
            نحن في <strong>Majestic Flux</strong> نحترم خصوصيتك وملتزمون بحماية أي معلومات شخصية تقوم بتوفيرها لنا أثناء استخدامك للبوت. توضح هذه السياسة كيفية جمع واستخدام وحماية بيانات المستخدمين بما يتوافق مع أفضل الممارسات ومعايير الأمان.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">1. جمع المعلومات</h3>
          <p className="mb-4">
            لا نقوم بجمع أو تخزين أي معلومات شخصية حساسة خارج نطاق Discord. يتم جمع بعض البيانات الفنية والإحصائية فقط لأغراض تحسين الخدمة مثل:
            <ul className="list-disc ml-6 mt-2">
              <li>معرف المستخدم (User ID) على Discord</li>
              <li>معرف الخادم (Guild ID)</li>
              <li>تاريخ ووقت الاستخدام</li>
              <li>عدد التفاعلات واستهلاك FLUX</li>
              <li>بيانات التتبع المجهولة (Anonymous Usage Logs)</li>
            </ul>
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">2. استخدام المعلومات</h3>
          <p className="mb-4">
            يتم استخدام البيانات المجمعة فقط من أجل:
            <ul className="list-disc ml-6 mt-2">
              <li>تحليل وتحسين أداء البوت</li>
              <li>إدارة الباقات والاستهلاك ضمن نظام FLUX</li>
              <li>تخصيص التجربة وتقديم ميزات ديناميكية</li>
              <li>كشف الأنشطة المشبوهة ومنع إساءة الاستخدام</li>
            </ul>
            نحن لا نبيع أو نشارك هذه البيانات مع أي طرف ثالث.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">3. حماية البيانات</h3>
          <p className="mb-4">
            نحن نتخذ إجراءات صارمة لحماية البيانات باستخدام تقنيات تشفير متقدمة وتخزين محدود داخل أنظمة Discord الرسمية. لا نحتفظ بأي بيانات حساسة في خوادم خارجية، ويتم حذف أي بيانات مؤقتة فور انتهاء الغرض منها.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">4. ملفات تعريف المستخدم (Profiles)</h3>
          <p className="mb-4">
            يتم إنشاء ملفات تعريف افتراضية لكل مستخدم داخل البوت، ويتم استخدامها فقط لإظهار التقدم والخبرة داخل اللعبة ولا تتضمن أي بيانات واقعية أو حساسة.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">5. ملفات الطرف الثالث (Third-Party Integrations)</h3>
          <p className="mb-4">
            لا يستخدم البوت أي خدمات من طرف ثالث غير مصرح بها. جميع العمليات تتم ضمن بيئة Discord API الرسمية. لا يتم إرسال أي بيانات إلى خارج منصة Discord.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">6. حقوق المستخدم</h3>
          <p className="mb-4">
            يحق لك كمستخدم طلب حذف بياناتك من البوت في أي وقت من خلال التواصل مع فريق الدعم عبر السيرفر الرسمي. كما يمكنك مراجعة استخدامك لعملة FLUX داخل لوحة التحكم في الخادم.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">7. الإفصاح القانوني</h3>
          <p className="mb-4">
            في حالات نادرة جداً، قد نُفصح عن بعض البيانات إن طُلب منا ذلك بموجب أمر قضائي رسمي أو عند وجود تهديد أمني حقيقي يؤثر على Discord أو مستخدمي الخدمة.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">8. التغييرات على السياسة</h3>
          <p className="mb-4">
            نحتفظ بحق تعديل هذه السياسة في أي وقت. سيتم إعلام المستخدمين بأي تغييرات كبيرة عبر إعلان في سيرفر Discord الرسمي أو داخل البوت.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">9. موافقة المستخدم</h3>
          <p className="mb-4">
            باستخدامك للبوت، فإنك توافق ضمنياً على هذه السياسة، وتفهم أنك تتعامل مع نظام محاكاة للترفيه داخل Discord فقط، ولا يوجد ارتباط حقيقي بأي جهة حكومية أو أمنية.
          </p>
        </Section>
      </div>
    </Layout>
  );
};

export default Privacy;
