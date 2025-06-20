import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{i18n.language === 'zh' ? '服务 - 杭州华世数科科技有限公司' : 'Services - Hangzhou Huashi Digital Technology Co., Ltd.'}</title>
        <meta name="description" content={i18n.language === 'zh' ? '企业AI化顶层设计、战略规划、商业模式创新、团队建设等一站式服务。' : 'One-stop services: AI transformation, strategic planning, business model innovation, team building.'} />
      </Helmet>
      <section>
        <h2>{t('services')}</h2>
        {i18n.language === 'zh' ? (
          <ul>
            <li>企业AI化顶层设计与战略规划</li>
            <li>商业模式创新咨询</li>
            <li>团队建设与培训</li>
            <li>外贸企业辅导与培训</li>
            <li>线上课程与活动</li>
          </ul>
        ) : (
          <ul>
            <li>Top-level design and strategic planning for enterprise AI transformation</li>
            <li>Business model innovation consulting</li>
            <li>Team building and training</li>
            <li>Foreign trade enterprise coaching and training</li>
            <li>Online courses and events</li>
          </ul>
        )}
      </section>
    </>
  );
} 