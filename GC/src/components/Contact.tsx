import React, { useState, lazy } from 'react';
import { useLanguage } from '../context/LanguageContext';
export const Contact = () => {
  const {
    t
  } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New inquiry from ${formData.name}`,
          _to: 'Surendra.maharjan392@gmail.com'
        })
      });
      if (response.ok) {
        setSent(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
    setSending(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#D4AF37]">
          {t('contactTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">
                {t('address')}
              </h3>
              <p className="text-[#F5F5F5]">
                M89H+33R G.C Handicraft, Lalitpur 44700
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">
                {t('phone')}
              </h3>
              <p className="text-[#F5F5F5]">+977 9841221735</p>
              <p className="text-[#F5F5F5] mt-2">WhatsApp: +977 9841221735</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">
                {t('email')}
              </h3>
              <p className="text-[#F5F5F5]">Surendra.maharjan392@gmail.com</p>
            </div>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"></textarea>
              </div>
              <button type="submit" disabled={sending} className={`w-full px-4 py-2 bg-[#C1272D] text-white rounded-md transition-colors ${sending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}`}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {sent && <p className="mt-4 text-green-500 text-center">
                  Message sent successfully! We'll get back to you soon.
                </p>}
            </form>
          </div>
          {/* Map */}
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.73709154543!2d85.32513087546594!3d27.66775327620524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900264cf785%3A0x16a3c125b81d1457!2sG.C%20Handicraft!5e1!3m2!1sen!2snp!4v1747304362178!5m2!1sen!2snp" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="G.C. Handicraft Location"></iframe>
          </div>
        </div>
      </div>
    </section>;
};