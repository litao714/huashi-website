import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Cases from './pages/Cases';
import News from './pages/News';
import Contact from './pages/Contact';
import './App.css';
import logo from './assets/logo.png';


function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'zh');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
      <Router>
        <div className="container">
          <header>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:16,marginBottom:16}}>
              <img src={logo} alt="logo" style={{height:48}} />
              <span style={{fontWeight:700,fontSize:22,color:'#0078d7'}}>杭州华世数科科技有限公司</span>
            </div>
            <div className="lang-switch">
              <button onClick={() => changeLanguage('zh')} disabled={lang === 'zh'}>中文</button>
              <button onClick={() => changeLanguage('en')} disabled={lang === 'en'}>English</button>
            </div>
            <h1>{t('welcome')}</h1>
            <nav>
              <Link to="/about">{t('about')}</Link> |
              <Link to="/services">{t('services')}</Link> |
              <Link to="/cases">{t('cases')}</Link> |
              <Link to="/news">{t('news')}</Link> |
              <Link to="/contact">{t('contact')}</Link>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
