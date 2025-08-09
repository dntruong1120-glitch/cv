"use client";
import { Palette, Brush, Box, MoveVertical, Film, PenTool } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "Concept Art", level: 95 },
    { name: "Character Design", level: 90 },
    { name: "Environment Art", level: 85 },
    { name: "Digital Painting", level: 88 },
  ];

  const software = [
    { name: "Photoshop", level: "Expert", icon: Brush },
    { name: "Procreate", level: "Advanced", icon: Palette },
    { name: "Blender", level: "Intermediate", icon: Box },
    { name: "Illustrator", level: "Advanced", icon: MoveVertical },
    { name: "After Effects", level: "Intermediate", icon: Film },
    { name: "Clip Studio", level: "Expert", icon: PenTool },
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2>Giới thiệu</h2>
          <p>
            Tôi là một concept artist và illustrator với niềm đam mê không ngừng trong việc tạo ra những tác phẩm nghệ thuật digital.
          </p>
        </div>

        <div className="grid-2">
          {/* Skills Section */}
          <div>
            <h3 style={{ marginBottom: '2rem', color: 'var(--color-foreground)' }}>
              Kỹ năng chuyên môn
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.map((skill) => (
                <div key={skill.name} className="progress-container">
                  <div className="progress-label">
                    <span style={{ color: 'var(--color-muted-foreground)' }}>
                      {skill.name}
                    </span>
                    <span style={{ color: 'var(--color-accent)' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div>
            <h3 style={{ marginBottom: '2rem', color: 'var(--color-foreground)' }}>
              Phần mềm chuyên nghiệp
            </h3>
            <div className="grid-2">
              {software.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <div key={tool.name} className="card">
                    <div className="card-content" style={{ textAlign: 'center' }}>
                      <IconComponent 
                        style={{ 
                          width: '2rem', 
                          height: '2rem', 
                          color: 'var(--color-accent)', 
                          marginBottom: '0.75rem',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          display: 'block'
                        }} 
                      />
                      <h4 style={{ 
                        color: 'var(--color-foreground)', 
                        fontWeight: '500',
                        marginBottom: '0.25rem'
                      }}>
                        {tool.name}
                      </h4>
                      <p style={{ 
                        color: 'var(--color-muted-foreground)', 
                        fontSize: '0.875rem' 
                      }}>
                        {tool.level}
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