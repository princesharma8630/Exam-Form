import React, { useState, useEffect } from 'react';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const mainFeatures = [
    {
      id: 1,
      title: "Smart Form Management",
      description: "Intelligent form handling with real-time validation, auto-save functionality, and step-by-step guidance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80",
      icon: "📋",
      stats: "99.9% Accuracy"
    },
    {
      id: 2,
      title: "Secure Document Upload",
      description: "Military-grade encryption for document storage with instant verification and cloud backup systems.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format&q=80",
      icon: "🔒",
      stats: "256-bit SSL"
    },
    {
      id: 3,
      title: "AI-Powered Verification",
      description: "Advanced AI algorithms automatically verify documents, detect inconsistencies, and flag potential issues.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format&q=80",
      icon: "🤖",
      stats: "< 2 sec Processing"
    },
    {
      id: 4,
      title: "Multi-Exam Support",
      description: "Support for 100+ examination types including banking, SSC, railway, UPSC, and state-level competitive exams.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&auto=format&q=80",
      icon: "🎓",
      stats: "100+ Exam Types"
    },
    {
      id: 5,
      title: "Real-time Status Tracking",
      description: "Track your application status in real-time with instant notifications and detailed progress updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80",
      icon: "📊",
      stats: "Live Updates"
    },
    {
      id: 6,
      title: "24/7 Support System",
      description: "Round-the-clock customer support with AI chatbot assistance and expert human support when needed.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&auto=format&q=80",
      icon: "🎧",
      stats: "24/7 Available"
    }
  ];

  const additionalFeatures = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Submit applications in under 5 minutes with our optimized interface"
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "Seamless experience across all devices - desktop, tablet, and mobile"
    },
    {
      icon: "🔄",
      title: "Auto-Save",
      description: "Never lose your progress with automatic form saving every 30 seconds"
    },
    {
      icon: "📧",
      title: "Email Notifications",
      description: "Instant email updates for application status and important announcements"
    },
    {
      icon: "🌐",
      title: "Multi-Language",
      description: "Available in 10+ regional languages for better accessibility"
    },
    {
      icon: "💾",
      title: "Data Backup",
      description: "Automatic cloud backup ensures your data is always safe and recoverable"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Banking Aspirant",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b100?w=150&h=150&fit=crop&auto=format&q=80",
      quote: "ExamForm made my IBPS application so simple! The step-by-step process and document verification saved me hours.",
      rating: 5
    },
    {
      name: "Raj Kumar",
      role: "Civil Services Candidate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80",
      quote: "The AI verification caught an error in my documents that I missed. This platform is incredibly thorough!",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Railway Exam Applicant",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&auto=format&q=80",
      quote: "Real-time tracking and notifications kept me updated throughout the process. Excellent service!",
      rating: 5
    }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Powerful Features for <span className="highlight">Seamless Applications</span>
            </h1>
            <p className="hero-subtitle">
              Discover advanced tools and intelligent systems designed to make your exam application process 
              smooth, secure, and successful.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Applications Processed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5 min</div>
                <div className="stat-label">Average Time</div>
              </div>
            </div>
          </div>
        <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-card card-1">
                <div className="card-icon">📊</div>
                <h4>Real-time Analytics</h4>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🚀</div>
                <h4>Fast Processing</h4>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🔐</div>
                <h4>Secure Storage</h4>
              </div>
            </div>
          </div>
        </div>
      </section>


      

      {/* Main Features Section */}
      <section className="main-features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Features</h2>
            <p className="section-subtitle">
              Advanced capabilities that set us apart from traditional application systems
            </p>
          </div>
          
          <div className="features-showcase">
            <div className="feature-navigation">
              {mainFeatures.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`feature-nav-item ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="nav-icon">{feature.icon}</div>
                  <div className="nav-content">
                    <h4>{feature.title}</h4>
                    <span className="nav-stats">{feature.stats}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="feature-display">
              <div className="feature-image">
                <img 
                  src={mainFeatures[activeFeature].image} 
                  alt={mainFeatures[activeFeature].title}
                />
                <div className="image-overlay">
                  <div className="overlay-icon">
                    {mainFeatures[activeFeature].icon}
                  </div>
                </div>
              </div>
              <div className="feature-content">
                <h3>{mainFeatures[activeFeature].title}</h3>
                <p>{mainFeatures[activeFeature].description}</p>
                <div className="feature-stats">
                  <span className="stats-badge">
                    {mainFeatures[activeFeature].stats}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="additional-features">
        <div className="container">
          <h2 className="section-title">Why Choose ExamForm?</h2>
          <div className="features-grid">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="card-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-image">
                <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&auto=format&q=80" alt="Register" />
              </div>
              <h3>Create Account</h3>
              <p>Quick registration with email verification and secure profile setup</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-image">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format&q=80" alt="Fill Form" />
              </div>
              <h3>Fill Application</h3>
              <p>Smart form with auto-validation and step-by-step guidance</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-image">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&auto=format&q=80" alt="Upload Documents" />
              </div>
              <h3>Upload Documents</h3>
              <p>AI-powered document verification with instant feedback</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-image">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop&auto=format&q=80" alt="Submit" />
              </div>
              <h3>Submit & Track</h3>
              <p>Secure submission with real-time status tracking and notifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p>"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of successful applicants who trust ExamForm for their exam applications</p>
            <div className="cta-buttons">
              <a href="/exam-form" className="cta-button primary">Start Application</a>
              <a href="/contact" className="cta-button secondary">Contact Support</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;