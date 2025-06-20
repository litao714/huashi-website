import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();
  return (
    <>

      <section>
        <h2>{t('about')}</h2>
        {i18n.language === 'zh' ? (
          <p>杭州华世数科科技有限公司是一家专注于企业AI化解决方案的一站式服务商。公司首创"经营钻石图"理论模型，从经营能力、运营能力、商业模式、组织框架四大模块，帮助企业实现业绩倍增、团队裂变和发展突破。公司致力于为企业提供顶层设计、战略规划、商业模式创新、团队建设等全方位服务。</p>
        ) : (
          <p>Hangzhou Huashi Digital Technology Co., Ltd. is a one-stop service provider specializing in enterprise AI transformation solutions. The company pioneered the "Business Diamond Model" theory, analyzing business success factors from four modules: management capability, operational capability, business model, and organizational structure. Huashi is committed to providing comprehensive services such as top-level design, strategic planning, business model innovation, and team building to help enterprises achieve performance growth and breakthroughs.</p>
        )}
      </section>
    </>
  );
} 