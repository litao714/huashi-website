import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function News() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{i18n.language === 'zh' ? '新闻动态 - 杭州华世数科科技有限公司' : 'News - Hangzhou Huashi Digital Technology Co., Ltd.'}</title>
        <meta name="description" content={i18n.language === 'zh' ? '华世数科最新新闻、行业动态、合作信息实时更新。' : 'Latest news, industry trends, and cooperation updates from Huashi Digital.'} />
      </Helmet>
      <section>
        <h2>{t('news')}</h2>
        {i18n.language === 'zh' ? (
          <ul>
            <li>2024-06-20：华世数科荣获AI创新大奖</li>
            <li>2024-05-15：与知名高校达成战略合作</li>
            <li>2024-04-10：发布"经营钻石图"企业成长白皮书</li>
            <li>2024-03-28：华世数科AI培训课程上线，助力企业数字化转型</li>
            <li>2024-02-18：公司受邀参加中国AI产业高峰论坛</li>
          </ul>
        ) : (
          <ul>
            <li>2024-06-20: Huashi Digital won the AI Innovation Award</li>
            <li>2024-05-15: Strategic cooperation with top universities</li>
            <li>2024-04-10: Released the "Business Diamond Model" White Paper for Enterprise Growth</li>
            <li>2024-03-28: Launched AI training courses to help enterprises with digital transformation</li>
            <li>2024-02-18: Invited to China AI Industry Summit Forum</li>
          </ul>
        )}
      </section>
    </>
  );
} 