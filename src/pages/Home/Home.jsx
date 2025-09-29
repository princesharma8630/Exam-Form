import React from "react";
import "./Home.css";
import About from "../Abouts/About";
import Feature from "../Features/Features";
import LoadingPage from "../../component/Loader/Loader";
const Home = () => {
  return (
    <div className="home">
      
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Shape Your Future with 
              <span className="highlight"> Excellence</span>
            </h1>
            <p className="hero-subtitle">
              Join thousands of successful candidates who trusted us with their exam preparation. 
              Your journey to success starts here with our comprehensive examination portal.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Students Registered</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Exam Categories</span>
              </div>
            </div>
            <a href="#exam-form" className="cta-button">
              Start Your Application
              <span className="button-arrow">→</span>
            </a>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">
              <div className="card-icon">📚</div>
              <h4>Study Materials</h4>
              <p>Comprehensive resources</p>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🎯</div>
              <h4>Mock Tests</h4>
              <p>Practice with real scenarios</p>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🏆</div>
              <h4>Certification</h4>
              <p>Recognized credentials</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Success Story?</h2>
            <p>Don't wait! Secure your spot today and take the first step towards achieving your goals.</p>
            <a href="#exam-form" className="cta-button secondary">
              Apply Now - It's Free!
            </a>
          </div>
        </div>
      </section>
        <About/>
        <Feature/>
    </div>
   
  );
};

export default Home;