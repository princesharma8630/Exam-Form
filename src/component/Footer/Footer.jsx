import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-section brand-section">
              <h3 className="footer-logo">ExamPortal</h3>
              <p className="brand-description">
                Your trusted partner in exam preparation and certification. 
                Empowering students to achieve their academic and professional goals.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#exam-form">Exam Form</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#results">Results</a></li>
              </ul>
            </div>

            {/* Exams */}
            <div className="footer-section">
              <h4 className="footer-title">Popular Exams</h4>
              <ul className="footer-links">
                <li><a href="#competitive">Competitive Exams</a></li>
                <li><a href="#entrance">Entrance Tests</a></li>
                <li><a href="#certification">Certifications</a></li>
                <li><a href="#government">Government Jobs</a></li>
                <li><a href="#banking">Banking Exams</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>princesharma863046@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 9876543210</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Education Street, Learning City</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h4>Stay Updated!</h4>
              <p>Get latest exam notifications and updates directly to your inbox</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 ExamPortal. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;