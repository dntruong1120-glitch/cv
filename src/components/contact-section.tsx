"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert("Tin nhắn đã được gửi! Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong thời gian sớm nhất.");
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "minhtran.artist@gmail.com",
      href: "mailto:minhtran.artist@gmail.com"
    },
    {
      icon: Phone,
      label: "Điện thoại",
      value: "+84 123 456 789",
      href: "tel:+84123456789"
    },
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "TP. Hồ Chí Minh, Việt Nam",
      href: "#"
    }
  ];

  const socialLinks = [
    { name: "ArtStation", icon: "🎨", href: "#" },
    { name: "Behance", icon: "🎭", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Liên hệ</h2>
          <p>
            Sẵn sàng hợp tác trong các dự án concept art và illustration. Hãy liên hệ để thảo luận về ý tưởng của bạn!
          </p>
        </div>

        <div className="grid-2">
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: 'var(--color-foreground)', 
              marginBottom: '1.5rem' 
            }}>
              Thông tin liên hệ
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="contact-info">
                    <IconComponent />
                    {info.href !== "#" ? (
                      <a href={info.href}>
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--color-muted-foreground)' }}>
                        {info.value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '600', 
                color: 'var(--color-foreground)', 
                marginBottom: '1rem' 
              }}>
                Mạng xã hội
              </h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Họ tên</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Nhập họ tên của bạn"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Chủ đề</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Chủ đề tin nhắn"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Tin nhắn</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="form-textarea"
                    placeholder="Nội dung tin nhắn..."
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}