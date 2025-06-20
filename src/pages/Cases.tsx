import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Cases() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{i18n.language === 'zh' ? '案例展示 - 杭州华世数科科技有限公司' : 'Case Studies - Hangzhou Huashi Digital Technology Co., Ltd.'}</title>
        <meta name="description" content={i18n.language === 'zh' ? '企业AI赋能、团队裂变、商业模式创新等真实案例展示。' : 'Case studies: AI empowerment, team expansion, business model innovation.'} />
      </Helmet>
      <section>
        <h2>{t('cases')}</h2>
        {i18n.language === 'zh' ? (
          <ul>
            <li>案例1：AI赋能外贸企业业绩增长——帮助A公司通过智能数据分析提升出口额30%</li>
            <li>案例2：团队裂变与组织升级——B企业通过"经营钻石图"模型实现团队规模翻倍</li>
            <li>案例3：商业模式创新——C公司在华世数科指导下开拓新市场，年营收增长50%</li>
            <li>案例4：线上课程助力企业转型——D企业员工AI技能培训合格率达98%</li>
            <li>案例5：战略规划咨询——E企业制定三年发展蓝图，顺利完成融资</li>
          </ul>
        ) : (
          <ul>
            <li>Case 1: AI empowers foreign trade enterprise growth - Helped Company A increase exports by 30% through intelligent data analysis</li>
            <li>Case 2: Team expansion and organizational upgrade - Company B doubled its team size with the "Business Diamond Model"</li>
            <li>Case 3: Business model innovation - Company C opened new markets under Huashi's guidance, achieving 50% annual revenue growth</li>
            <li>Case 4: Online courses boost enterprise transformation - Company D's staff AI skills training pass rate reached 98%</li>
            <li>Case 5: Strategic planning consulting - Company E developed a three-year blueprint and successfully completed financing</li>
          </ul>
        )}
      </section>
    </>
  );
} 