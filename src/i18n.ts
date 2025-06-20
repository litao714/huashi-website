import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Hangzhou Huashi Digital Technology Co., Ltd.',
      about: 'About Us',
      services: 'Services',
      cases: 'Case Studies',
      news: 'News',
      contact: 'Contact Us',
    },
  },
  zh: {
    translation: {
      welcome: '欢迎来到杭州华世数科科技有限公司',
      about: '关于我们',
      services: '服务',
      cases: '案例展示',
      news: '新闻动态',
      contact: '联系我们',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 