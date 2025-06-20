import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // 替换为你的Formspree表单ID
  const FORMSPREE_URL = 'https://formspree.io/f/mnqewqzv'; // 示例ID，请注册Formspree获取你的专属ID

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 提交到Formspree
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>{i18n.language === 'zh' ? '联系我们 - 杭州华世数科科技有限公司' : 'Contact Us - Hangzhou Huashi Digital Technology Co., Ltd.'}</title>
        <meta name="description" content={i18n.language === 'zh' ? '欢迎联系杭州华世数科，获取企业AI化解决方案、合作与咨询服务。' : 'Contact Huashi Digital for enterprise AI solutions, cooperation, and consulting services.'} />
      </Helmet>
      <section>
        <h2>{t('contact')}</h2>
        {i18n.language === 'zh' ? (
          <>
            <p>地址：浙江省杭州市滨江区长河街道江南大道588号恒鑫大厦主楼25层2510室</p>
            <p>电话：+86 (571) 8509-2656 / 400-960-8665</p>
            <p>邮箱：contact@hs-emc.com</p>
          </>
        ) : (
          <>
            <p>Address: 25F, Room 2510, Hengxin Building, 588 Jiangnan Avenue, Changhe Street, Binjiang District, Hangzhou, Zhejiang, China</p>
            <p>Tel: +86 (571) 8509-2656 / 400-960-8665</p>
            <p>Email: contact@hs-emc.com</p>
          </>
        )}
        <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
          <input
            type="text"
            name="name"
            placeholder={i18n.language === 'zh' ? '姓名' : 'Name'}
            value={form.name}
            onChange={handleChange}
            required
            style={{ marginRight: 8, marginBottom: 8 }}
          />
          <input
            type="email"
            name="email"
            placeholder={i18n.language === 'zh' ? '邮箱' : 'Email'}
            value={form.email}
            onChange={handleChange}
            required
            style={{ marginRight: 8, marginBottom: 8 }}
          />
          <textarea
            name="message"
            placeholder={i18n.language === 'zh' ? '留言内容' : 'Message'}
            value={form.message}
            onChange={handleChange}
            required
            style={{ width: '100%', minHeight: 80, marginBottom: 8 }}
          />
          <br />
          <button type="submit" style={{ padding: '6px 24px' }}>
            {i18n.language === 'zh' ? '提交' : 'Submit'}
          </button>
          {submitted && (
            <div style={{ color: 'green', marginTop: 12 }}>
              {i18n.language === 'zh' ? '感谢您的留言！' : 'Thank you for your message!'}
            </div>
          )}
        </form>
      </section>
    </>
  );
} 