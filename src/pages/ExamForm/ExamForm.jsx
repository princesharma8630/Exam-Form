import React, { useState } from "react";
import "./ExamForm.css";
import { useNavigate } from "react-router-dom";

const ExamForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    aadhaarNumber: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Educational Information
    qualification: '',
    institution: '',
    passingYear: '',
    percentage: '',
    
    // Exam Information
    examCategory: '',
    examCenter: '',
    preferredDate: '',
    
    // Document Upload
    photo: null,
    signature: null,
    certificate: null,
    aadhaarCard: null
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format Aadhaar number with spaces
    if (name === 'aadhaarNumber') {
      const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
      if (formattedValue.replace(/\s/g, '').length <= 12) {
        setFormData(prev => ({
          ...prev,
          [name]: formattedValue
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const validateAadhaar = (aadhaar) => {
    const cleanAadhaar = aadhaar.replace(/\s/g, '');
    return /^\d{12}$/.test(cleanAadhaar);
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.aadhaarNumber.trim()) newErrors.aadhaarNumber = 'Aadhaar number is required';
        else if (!validateAadhaar(formData.aadhaarNumber)) newErrors.aadhaarNumber = 'Invalid Aadhaar number format';
        break;
        
      case 2:
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
        else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits';
        break;
        
      case 3:
        if (!formData.qualification) newErrors.qualification = 'Qualification is required';
        if (!formData.institution.trim()) newErrors.institution = 'Institution is required';
        if (!formData.passingYear) newErrors.passingYear = 'Passing year is required';
        if (!formData.percentage.trim()) newErrors.percentage = 'Percentage is required';
        break;
        
      case 4:
        if (!formData.examCategory) newErrors.examCategory = 'Exam category is required';
        if (!formData.examCenter) newErrors.examCenter = 'Exam center is required';
        if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
        break;
        
      case 5:
        if (!formData.photo) newErrors.photo = 'Passport photo is required';
        if (!formData.signature) newErrors.signature = 'Digital signature is required';
        if (!formData.certificate) newErrors.certificate = 'Educational certificate is required';
        if (!formData.aadhaarCard) newErrors.aadhaarCard = 'Aadhaar card copy is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(5)) {
      // Here you would typically send data to your API
      console.log('Form Data:', formData);
      alert('Application submitted successfully! Your application ID will be sent via email.');
      navigate('/Home');
      // Reset form or redirect
    }
  };

  return (
    <div className="exam-form">
      <div className="container">
        <div className="form-header">
          <h1>Examination Application Form</h1>
          <p>Please fill in all the required information to complete your application</p>
          
          {/* Progress Bar */}
          <div className="progress-bar">
            {[1, 2, 3, 4, 5].map(step => (
              <div key={step} className={`progress-step ${currentStep >= step ? 'active' : ''}`}>
                <div className="step-circle">{step}</div>
                <span className="step-label">
                  {step === 1 && 'Personal'}
                  {step === 2 && 'Address'}
                  {step === 3 && 'Education'}
                  {step === 4 && 'Exam Details'}
                  {step === 5 && 'Documents'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="form-step">
              <h2>Personal Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={errors.firstName ? 'error' : ''}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={errors.lastName ? 'error' : ''}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                
                <div className="form-group">
                  <label>Aadhaar Number *</label>
                  <input
                    type="text"
                    name="aadhaarNumber"
                    value={formData.aadhaarNumber}
                    onChange={handleInputChange}
                    className={errors.aadhaarNumber ? 'error' : ''}
                    placeholder="Enter 12-digit Aadhaar number"
                    maxLength="14" // 12 digits + 2 spaces
                  />
                  {errors.aadhaarNumber && <span className="error-message">{errors.aadhaarNumber}</span>}
                  <small className="field-note">Format: XXXX XXXX XXXX</small>
                </div>
                
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={errors.dateOfBirth ? 'error' : ''}
                    max={new Date().toISOString().split('T')[0]}
                  />
                  {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
                </div>
                
                <div className="form-group">
                  <label>Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={errors.gender ? 'error' : ''}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <span className="error-message">{errors.gender}</span>}
                </div>
              </div>
              
              {/* Important Notice */}
              <div className="info-notice">
                <div className="notice-icon">ℹ️</div>
                <div className="notice-text">
                  <strong>Important:</strong> Please ensure your name matches exactly with your Aadhaar card. 
                  Any mismatch may lead to application rejection.
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Address Information */}
          {currentStep === 2 && (
            <div className="form-step">
              <h2>Address Information</h2>
              <div className="address-options">
                <div className="address-option">
                  <input type="checkbox" id="sameAsAadhaar" />
                  <label htmlFor="sameAsAadhaar">Same as Aadhaar address</label>
                </div>
              </div>
              
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Complete Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className={errors.address ? 'error' : ''}
                    placeholder="Enter your complete postal address"
                  ></textarea>
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>
                
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={errors.city ? 'error' : ''}
                    placeholder="Enter your city"
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
                
                <div className="form-group">
                  <label>State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={errors.state ? 'error' : ''}
                  >
                    <option value="">Select State</option>
                    <option value="uttar-pradesh">Uttar Pradesh</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="bihar">Bihar</option>
                    <option value="west-bengal">West Bengal</option>
                    <option value="madhya-pradesh">Madhya Pradesh</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    <option value="telangana">Telangana</option>
                    <option value="kerala">Kerala</option>
                    <option value="odisha">Odisha</option>
                    <option value="haryana">Haryana</option>
                    <option value="punjab">Punjab</option>
                    <option value="jharkhand">Jharkhand</option>
                    <option value="assam">Assam</option>
                    <option value="chhattisgarh">Chhattisgarh</option>
                    <option value="himachal-pradesh">Himachal Pradesh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="goa">Goa</option>
                    <option value="delhi">Delhi</option>
                  </select>
                  {errors.state && <span className="error-message">{errors.state}</span>}
                </div>
                
                <div className="form-group">
                  <label>Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className={errors.pincode ? 'error' : ''}
                    placeholder="Enter 6-digit pincode"
                    maxLength="6"
                  />
                  {errors.pincode && <span className="error-message">{errors.pincode}</span>}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Educational Information */}
          {currentStep === 3 && (
            <div className="form-step">
              <h2>Educational Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Highest Qualification *</label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className={errors.qualification ? 'error' : ''}
                  >
                    <option value="">Select Qualification</option>
                    <option value="10th">10th Pass</option>
                    <option value="12th">12th Pass</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                  {errors.qualification && <span className="error-message">{errors.qualification}</span>}
                </div>
                
                <div className="form-group">
                  <label>Institution/University *</label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className={errors.institution ? 'error' : ''}
                    placeholder="Enter institution/university name"
                  />
                  {errors.institution && <span className="error-message">{errors.institution}</span>}
                </div>
                
                <div className="form-group">
                  <label>Passing Year *</label>
                  <select
                    name="passingYear"
                    value={formData.passingYear}
                    onChange={handleInputChange}
                    className={errors.passingYear ? 'error' : ''}
                  >
                    <option value="">Select Year</option>
                    {Array.from({length: 20}, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  {errors.passingYear && <span className="error-message">{errors.passingYear}</span>}
                </div>
                
                <div className="form-group">
                  <label>Percentage/CGPA *</label>
                  <input
                    type="text"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleInputChange}
                    placeholder="e.g., 85% or 8.5 CGPA"
                    className={errors.percentage ? 'error' : ''}
                  />
                  {errors.percentage && <span className="error-message">{errors.percentage}</span>}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Exam Information */}
          {currentStep === 4 && (
            <div className="form-step">
              <h2>Exam Details</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Exam Category *</label>
                  <select
                    name="examCategory"
                    value={formData.examCategory}
                    onChange={handleInputChange}
                    className={errors.examCategory ? 'error' : ''}
                  >
                    <option value="">Select Category</option>
                    <option value="banking">Banking Exams (IBPS, SBI, RBI)</option>
                    <option value="ssc">SSC Exams (CGL, CHSL, MTS)</option>
                    <option value="railway">Railway Exams (RRB, NTPC)</option>
                    <option value="upsc">UPSC Exams (Civil Services)</option>
                    <option value="state-psc">State PSC Exams</option>
                    <option value="entrance">Entrance Tests (JEE, NEET)</option>
                    <option value="defense">Defense Exams (NDA, CDS)</option>
                    <option value="teaching">Teaching Exams (CTET, TET)</option>
                  </select>
                  {errors.examCategory && <span className="error-message">{errors.examCategory}</span>}
                </div>
                
                <div className="form-group">
                  <label>Exam Center *</label>
                  <select
                    name="examCenter"
                    value={formData.examCenter}
                    onChange={handleInputChange}
                    className={errors.examCenter ? 'error' : ''}
                  >
                    <option value="">Select Center</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="chennai">Chennai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="pune">Pune</option>
                    <option value="agra">Agra</option>
                    <option value="lucknow">Lucknow</option>
                    <option value="kanpur">Kanpur</option>
                    <option value="varanasi">Varanasi</option>
                    <option value="allahabad">Allahabad</option>
                  </select>
                  {errors.examCenter && <span className="error-message">{errors.examCenter}</span>}
                </div>
                
                <div className="form-group">
                  <label>Preferred Exam Date *</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={errors.preferredDate ? 'error' : ''}
                  />
                  {errors.preferredDate && <span className="error-message">{errors.preferredDate}</span>}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Document Upload */}
          {currentStep === 5 && (
            <div className="form-step">
              <h2>Document Upload</h2>
              <div className="document-upload">
                <div className="upload-group">
                  <label>Passport Size Photo *</label>
                  <div className={`file-upload ${errors.photo ? 'error' : ''}`}>
                    <input
                      type="file"
                      name="photo"
                      accept="image/jpeg,image/jpg,image/png"
                      onChange={handleFileChange}
                    />
                    <div className="upload-content">
                      <span className="upload-icon">📷</span>
                      <span>Choose photo file</span>
                      <small>JPG, PNG (Max: 2MB)</small>
                    </div>
                  </div>
                  {errors.photo && <span className="error-message">{errors.photo}</span>}
                </div>
                
                <div className="upload-group">
                  <label>Digital Signature *</label>
                  <div className={`file-upload ${errors.signature ? 'error' : ''}`}>
                    <input
                      type="file"
                      name="signature"
                      accept="image/jpeg,image/jpg,image/png"
                      onChange={handleFileChange}
                    />
                    <div className="upload-content">
                      <span className="upload-icon">✍️</span>
                      <span>Choose signature file</span>
                      <small>JPG, PNG (Max: 1MB)</small>
                    </div>
                  </div>
                  {errors.signature && <span className="error-message">{errors.signature}</span>}
                </div>
                
                <div className="upload-group">
                  <label>Educational Certificate *</label>
                  <div className={`file-upload ${errors.certificate ? 'error' : ''}`}>
                    <input
                      type="file"
                      name="certificate"
                      accept=".pdf,image/jpeg,image/jpg,image/png"
                      onChange={handleFileChange}
                    />
                    <div className="upload-content">
                      <span className="upload-icon">📜</span>
                      <span>Choose certificate</span>
                      <small>PDF, JPG, PNG (Max: 5MB)</small>
                    </div>
                  </div>
                  {errors.certificate && <span className="error-message">{errors.certificate}</span>}
                </div>
                
                <div className="upload-group">
                  <label>Aadhaar Card Copy *</label>
                  <div className={`file-upload ${errors.aadhaarCard ? 'error' : ''}`}>
                    <input
                      type="file"
                      name="aadhaarCard"
                      accept=".pdf,image/jpeg,image/jpg,image/png"
                      onChange={handleFileChange}
                    />
                    <div className="upload-content">
                      <span className="upload-icon">🆔</span>
                      <span>Choose Aadhaar card</span>
                      <small>PDF, JPG, PNG (Max: 3MB)</small>
                    </div>
                  </div>
                  {errors.aadhaarCard && <span className="error-message">{errors.aadhaarCard}</span>}
                </div>
              </div>
              
              {/* Document Guidelines */}
              <div className="document-guidelines">
                <h4>Document Guidelines:</h4>
                <ul>
                  <li>Photo: Recent passport size color photograph</li>
                  <li>Signature: Clear signature on white background</li>
                  <li>Certificate: Highest qualification mark sheet or certificate</li>
                  <li>Aadhaar: Clear front and back side copy</li>
                  <li>All documents must be clearly visible and readable</li>
                </ul>
              </div>
              
              {/* Terms and Conditions */}
              <div className="terms-section">
                <div className="terms-checkbox">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    I hereby declare that all the information provided is true and correct. 
                    I agree to the <a href="#terms">Terms and Conditions</a> and understand 
                    that providing false information may lead to cancellation of my application.
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="btn-secondary">
                Previous
              </button>
            )}
            
            {currentStep < 5 ? (
              <button type="button" onClick={nextStep} className="btn-primary">
                Next
              </button>
            ) : (
              <button type="submit" className="btn-submit">
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExamForm;