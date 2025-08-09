"use client";
import { Briefcase, Palette, PenTool, GraduationCap, Award, Tag } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Concept Artist",
      company: "VNG Games Studio",
      period: "2022 - Hiện tại",
      description: "Lead concept artist cho dự án game mobile AAA, chịu trách nhiệm thiết kế character và environment art cho thế giới fantasy.",
      icon: Briefcase,
      isActive: true
    },
    {
      title: "Concept Artist",
      company: "Gameloft Vietnam",
      period: "2020 - 2022",
      description: "Thiết kế concept art cho các game mobile thuộc nhiều thể loại khác nhau, từ casual games đến action RPG.",
      icon: Palette,
      isActive: false
    },
    {
      title: "Junior Illustrator",
      company: "Freelancer",
      period: "2019 - 2020",
      description: "Làm việc với các client quốc tế, tạo ra illustrations cho books, games và digital media.",
      icon: PenTool,
      isActive: false
    }
  ];

  const education = [
    {
      title: "Cử nhân Mỹ thuật Ứng dụng",
      company: "Đại học Mỹ thuật TP.HCM",
      period: "2015 - 2019",
      description: "Chuyên ngành Thiết kế Đồ họa, tốt nghiệp loại Giỏi với luận văn về Digital Art trong Game Design.",
      icon: GraduationCap,
      isActive: true
    },
    {
      title: "Tag in Concept Art",
      company: "FZD School of Design",
      period: "2020",
      description: "Hoàn thành khóa học chuyên sâu về concept art cho entertainment industry.",
      icon: Tag,
      isActive: false
    },
    {
      title: "Advanced Digital Painting",
      company: "CGMA (Computer Graphics Master Academy)",
      period: "2021",
      description: "Chứng chỉ về kỹ thuật digital painting chuyên nghiệp cho concept art.",
      icon: Award,
      isActive: false
    }
  ];

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>Kinh nghiệm & Học vấn</h2>
          <p>
            Hành trình phát triển chuyên môn và những cột mốc quan trọng trong sự nghiệp
          </p>
        </div>

        <div className="grid-2">
          {/* Experience Timeline */}
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: 'var(--color-foreground)', 
              marginBottom: '2rem' 
            }}>
              Kinh nghiệm làm việc
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <div key={index} className="timeline-item">
                    <div className={`timeline-icon ${exp.isActive ? 'active' : 'inactive'}`}>
                      <IconComponent style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div className="timeline-content">
                      <h4>{exp.title}</h4>
                      <div className="company">{exp.company}</div>
                      <div className="period">{exp.period}</div>
                      <p style={{ color: 'var(--color-muted-foreground)' }}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: 'var(--color-foreground)', 
              marginBottom: '2rem' 
            }}>
              Học vấn & Chứng chỉ
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <div key={index} className="timeline-item">
                    <div className={`timeline-icon ${edu.isActive ? 'active' : 'inactive'}`}>
                      <IconComponent style={{ width: '24px', height: '24px' }} />
                    </div>
                    <div className="timeline-content">
                      <h4>{edu.title}</h4>
                      <div className="company">{edu.company}</div>
                      <div className="period">{edu.period}</div>
                      <p style={{ color: 'var(--color-muted-foreground)' }}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}