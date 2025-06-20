import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import logo from './assets/logo.png';
import './App.css';

const cases = [
  { img: './assets/case1.jpg', title: 'AI驱动外贸增长' },
  { img: './assets/case2.jpg', title: '团队裂变升级' },
  { img: './assets/case3.jpg', title: '商业模式创新' },
  { img: './assets/case4.jpg', title: 'AI培训赋能' },
];

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'zh');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div className="main-bg">
      {/* 顶部导航栏 */}
      <header className="nav-bar">
        <div className="nav-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <span className="nav-title">杭州华世数科科技有限公司</span>
        </div>
        <nav className="nav-menu">
          <a href="#home">{lang === 'zh' ? '首页' : 'Home'}</a>
          <a href="#product">{lang === 'zh' ? '产品' : 'Product'}</a>
          <a href="#price">{lang === 'zh' ? '价格' : 'Price'}</a>
          <a href="#contact">{lang === 'zh' ? '联系我们' : 'Contact'}</a>
          <a href="#about">{lang === 'zh' ? '关于我们' : 'About Us'}</a>
          <button className="nav-login">{lang === 'zh' ? '登录' : 'Login'}</button>
        </nav>
      </header>
      {/* 语言切换 */}
      <div className="lang-switch-bar">
        <button onClick={() => changeLanguage('zh')} disabled={lang === 'zh'}>中文</button>
        <button onClick={() => changeLanguage('en')} disabled={lang === 'en'}>English</button>
      </div>
      {/* 主内容区 */}
      <main className="main-content">
        <div className="main-titles">
          <div className="main-title-cn">{lang === 'zh' ? '电商直播智能体时代' : 'AI Streamers Era'}</div>
          <div className="main-title-en">AI Streamers are Coming</div>
          <div className="main-subtitle">Get started today - Your AI live-streaming assistant awaits</div>
          <div className="main-btns">
            <button className="main-btn main-btn-green">{lang === 'zh' ? '智能体功能介绍' : 'Product Intro'}</button>
            <button className="main-btn main-btn-outline">{lang === 'zh' ? '价格体系' : 'Pricing'}</button>
          </div>
        </div>
        {/* 案例卡片区 */}
        <div className="case-list">
          {cases.map((c, i) => (
            <div className="case-card" key={i}>
              <div className="case-img" style={{backgroundImage:`url(${c.img})`}}></div>
              <div className="case-title">{c.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
