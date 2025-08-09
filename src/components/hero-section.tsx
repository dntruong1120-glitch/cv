"use client";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in">
            <h1>
              <span>Concept Artist</span><br />
              <span className="accent">& Illustrator</span>
            </h1>
            <p>
              Chuyên gia về concept art và digital illustration với hơn 5 năm kinh nghiệm trong ngành game và animation. 
              Đam mê tạo ra những thế giới tưởng tượng và nhân vật sống động.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="btn btn-primary"
              >
                Xem Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline"
              >
                Liên hệ ngay
              </button>
            </div>
          </div>
          <div className="hero-image animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Minh Tran - Concept Artist Portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}