import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              About <span className="highlight">ExamPortal</span>
            </h1>
            <p className="hero-subtitle">
              Empowering students worldwide with comprehensive examination solutions 
              and career guidance since 2018. Your success is our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To democratize quality education by providing accessible, 
                reliable, and comprehensive examination platforms that enable 
                students to achieve their academic and professional aspirations.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To become the world's leading digital examination platform, 
                setting new standards in educational assessment and student 
                empowerment through innovative technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Students Registered</div>
              <div className="stat-description">Active learners across the globe</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Exam Categories</div>
              <div className="stat-description">Comprehensive test coverage</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
              <div className="stat-description">Students achieving their goals</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
              <div className="stat-description">Global reach and presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2018 by a team of passionate educators and technologists, 
                ExamPortal began as a simple idea: to make quality examination 
                preparation accessible to everyone, everywhere.
              </p>
              <p>
                What started as a small initiative to help local students prepare 
                for competitive exams has grown into a comprehensive platform serving 
                hundreds of thousands of students globally.
              </p>
              <p>
                Today, we continue to innovate and expand our services, driven by 
                the success stories of our students and the trust they place in us.
              </p>
            </div>
            <div className="story-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2018</div>
                <div className="timeline-content">
                  <h4>Foundation</h4>
                  <p>ExamPortal launched with basic examination services</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h4>Digital Transformation</h4>
                  <p>Expanded to full online platform during global challenges</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-content">
                  <h4>International Expansion</h4>
                  <p>Reached 1 million+ students across 30+ countries</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>AI Integration</h4>
                  <p>Advanced AI-powered personalized learning paths</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Dr. Rajesh Kumar</h3>
              <p className="team-role">Founder & CEO</p>
              <p className="team-bio">
                Former IIT professor with 15+ years in educational technology
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍💻</div>
              <h3>Priya Sharma</h3>
              <p className="team-role">Chief Technology Officer</p>
              <p className="team-bio">
                Ex-Google engineer specializing in scalable education platforms
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍🎓</div>
              <h3>Prof. Amit Singh</h3>
              <p className="team-role">Head of Academics</p>
              <p className="team-bio">
                Renowned educator with expertise in curriculum development
              </p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍💼</div>
              <h3>Neha Gupta</h3>
              <p className="team-role">VP of Operations</p>
              <p className="team-bio">
                Operations expert ensuring seamless student experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎓</div>
              <h3>Excellence</h3>
              <p>We strive for the highest quality in everything we do</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Transparent and honest in all our interactions</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Innovation</h3>
              <p>Continuously evolving with cutting-edge technology</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Student-Centric</h3>
              <p>Every decision is made with students' success in mind</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Accessibility</h3>
              <p>Making quality education available to everyone, everywhere</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Growth</h3>
              <p>Fostering continuous learning and improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of successful students who trust ExamPortal for their examination needs.</p>
            <a href="#exam-form" className="cta-button">
              Get Started Today
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;