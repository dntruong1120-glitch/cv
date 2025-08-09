"use client";
import { useState } from "react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: "Cyber Warrior",
      description: "Character concept cho game sci-fi, thiết kế armor tương lai với chi tiết phức tạp và hệ thống vũ khí tiên tiến.",
      fullDescription: "Character concept cho game sci-fi với thiết kế armor tương lai. Đây là concept cho nhân vật chính trong game action RPG, với hệ thống vũ khí có thể nâng cấp và bộ giáp modular. Quá trình thiết kế tập trung vào việc tạo ra silhouette mạnh mẽ và các chi tiết công nghệ cao.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1200",
      category: ["concept", "character"],
      tags: ["Character Design", "Sci-Fi"]
    },
    {
      id: 2,
      title: "Rừng Phép Thuật",
      description: "Environment concept cho game fantasy, tạo ra không gian thần bí với ánh sáng ma thuật và thực vật kỳ ảo.",
      fullDescription: "Environment concept cho khu vực rừng trong game fantasy MMORPG. Thiết kế tập trung vào việc tạo ra bầu không khí thần bí với hệ thống ánh sáng ma thuật, thực vật phát sáng và kiến trúc cổ đại hòa quyện với tự nhiên.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: ["environment"],
      tags: ["Environment", "Fantasy"]
    },
    {
      id: 3,
      title: "Shadow Mage",
      description: "Character design cho pháp sư bóng tối với phong cách gothic và khả năng điều khiển ma thuật đen tối.",
      fullDescription: "Character design cho class pháp sư trong game dark fantasy. Thiết kế kết hợp yếu tố gothic với magic system độc đáo, tập trung vào việc thể hiện sức mạnh hắc ám qua costume design và visual effects.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
      category: ["concept", "character"],
      tags: ["Character", "Dark Fantasy"]
    },
    {
      id: 4,
      title: "Thành Phố Cyberpunk",
      description: "Environment concept cho thành phố tương lai với kiến trúc cao tầng, đèn neon và phương tiện bay.",
      fullDescription: "Environment concept cho thành phố trong tương lai gần. Thiết kế kết hợp kiến trúc hiện đại với công nghệ tiên tiến, hệ thống giao thông bay và lighting system phức tạp để tạo ra atmosphere cyberpunk đặc trưng.",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      category: ["environment", "concept"],
      tags: ["Environment", "Cyberpunk"]
    },
    {
      id: 5,
      title: "Hiệp Sĩ Hoàng Gia",
      description: "Character design cho hiệp sĩ thời trung cổ với bộ giáp chi tiết và vũ khí truyền thống.",
      fullDescription: "Character concept cho hiệp sĩ trong game medieval fantasy. Thiết kế tập trung vào tính thực tế của armor system, weapon design và heraldry. Mỗi chi tiết được nghiên cứu kỹ lưỡng để đảm bảo tính xác thực lịch sử.",
      image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
      category: ["character"],
      tags: ["Character", "Medieval"]
    },
    {
      id: 6,
      title: "Đền Cổ Hoang Tàn",
      description: "Environment concept cho di tích cổ đại với kiến trúc bị thực vật xâm chiếm và bầu không khí bí ẩn.",
      fullDescription: "Environment concept cho di tích cổ đại trong game adventure. Thiết kế thể hiện sự tương tác giữa kiến trúc cổ và tự nhiên qua thời gian, với hệ thống puzzle environment và storytelling qua visual design.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: ["environment"],
      tags: ["Environment", "Ancient"]
    }
  ];

  const filters = [
    { key: "all", label: "Tất cả" },
    { key: "concept", label: "Concept Art" },
    { key: "character", label: "Character Design" },
    { key: "environment", label: "Environment" },
  ];

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === "all" || item.category.includes(activeFilter)
  );

  const lightboxImages = filteredItems.map(item => ({
    src: item.image,
    title: item.title,
    description: item.fullDescription
  }));

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <section id="portfolio" className="section">
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="section-header">
          <h2>Portfolio</h2>
          <p style={{ marginBottom: '2rem' }}>
            Khám phá một số dự án concept art và illustration nổi bật của tôi
          </p>
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="masonry">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="masonry-item">
              <div 
                className="card"
                onClick={() => openLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ overflow: 'hidden', borderRadius: 'var(--border-radius) var(--border-radius) 0 0' }}>
                  <img 
                    src={item.image}
                    alt={item.title}
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="card-content">
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    color: 'var(--color-foreground)', 
                    marginBottom: '0.5rem' 
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--color-muted-foreground)', 
                    marginBottom: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {item.description}
                  </p>
                  <div className="tags">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Lightbox */}
        {lightboxOpen && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={closeLightbox}
          >
            <div 
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                background: 'var(--color-card)',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImages[currentImageIndex]?.src}
                alt={lightboxImages[currentImageIndex]?.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  color: 'var(--color-foreground)', 
                  marginBottom: '0.5rem',
                  fontSize: '1.5rem'
                }}>
                  {lightboxImages[currentImageIndex]?.title}
                </h3>
                <p style={{ color: 'var(--color-muted-foreground)' }}>
                  {lightboxImages[currentImageIndex]?.description}
                </p>
              </div>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.5rem'
                }}
              >
                ‹
              </button>
              <button 
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.5rem'
                }}
              >
                ›
              </button>
              
              {/* Close button */}
              <button 
                onClick={closeLightbox}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: 'none',
                  color: 'white',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.5rem'
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}