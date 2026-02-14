"use client";

import { useState, useEffect } from 'react';
import contactStyles from './contact.module.css';
import Link from 'next/link';

// Lucide Icons import
import {
  Award,
  ShieldCheck,
  Mail,
  Globe,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Users,
  Building2,
  User,
  Shield,
  Zap,
  Target,
  ArrowRight,
  Phone,
  MessageCircle,
  FileText,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firmName: '',
    phone: '',
    message: '',
    firmSize: '',
    serviceInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');  // 👈 Naya state add kiya

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(contactStyles.vmContactRevealActive);
          setActiveSection(entry.target.id || 'hero');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px' 
    });

    // Observe all sections with reveal class
    document.querySelectorAll(`.${contactStyles.vmContactReveal}`).forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 👇 YEH NAYA HANDLE SUBMIT FUNCTION HAI - Purane ko replace kar do
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError('');

  try {
    console.log('Submitting form:', formData); // Debug log

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('Response:', data); // Debug log

    if (response.ok) {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        firmName: '',
        phone: '',
        message: '',
        firmSize: '',
        serviceInterest: ''
      });
    } else {
      setSubmitError(data.error || 'Something went wrong');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    setSubmitError('Network error. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className={contactStyles.vmContactPageWrapper}>
      {/* === PREMIUM HERO SECTION === */}
      <section id="hero" className={`${contactStyles.vmContactHeroSection} ${contactStyles.vmContactReveal}`}>
        <div className={contactStyles.vmContactHeroBg}></div>
        <div className={contactStyles.vmContactContainer}>
          <div className={contactStyles.vmContactHeroContent}>
            {/* Premium Badge */}
            <div className={contactStyles.vmContactBadge}>
              <Award className={contactStyles.vmContactBadgeIcon} />
              <span>VM Legal Operations</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={contactStyles.vmContactMainHeading}>
              Contact Us
            </h1>
            
            {/* Description */}
            <h2 className={contactStyles.vmContactSubHeading}>
              Ready to streamline your legal operations? Let's discuss how we can support your firm.
            </h2>
            
            {/* Scope Card */}
            <div className={contactStyles.vmContactScopeCard}>
              <div className={contactStyles.vmContactScopeHeader}>
                <ShieldCheck className={contactStyles.vmContactScopeIcon} />
                <h3>Get in Touch</h3>
              </div>
              <div className={contactStyles.vmContactScopeContent}>
                <p>
                  Book a consultation to discuss your firm's specific needs and how we can help 
                  improve your operational efficiency.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={contactStyles.vmContactCtaGroup}>
              <a href="#message-form" className={contactStyles.vmContactBtnPrimary}>
                <span>Send Message</span>
                <ArrowRight className={contactStyles.vmContactBtnIcon} />
              </a>
              <a href="#schedule-form" className={contactStyles.vmContactBtnSecondary}>
                <Calendar className={contactStyles.vmContactBtnIcon} />
                <span>Schedule Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === CONTACT FORM SECTION === */}
      <section id="message-form" className={`${contactStyles.vmContactSectionWhite} ${contactStyles.vmContactReveal}`}>
        <div className={contactStyles.vmContactContainer}>
          <div className={contactStyles.vmContactGrid}>
            <div className={contactStyles.vmContactFormSection}>
              <div className={contactStyles.vmContactFormHeader}>
                <MessageSquare className={contactStyles.vmContactFormIcon} />
                <h2 className={contactStyles.vmContactFormTitle}>Send Us a Message</h2>
                <p className={contactStyles.vmContactFormDesc}>
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              <div id="message-form" className={contactStyles.vmContactFormCard}>
                {submitSuccess ? (
                  <div className={contactStyles.vmContactSuccessCard}>
                    <div className={contactStyles.vmContactSuccessHeader}>
                      <CheckCircle2 className={contactStyles.vmContactSuccessIcon} />
                      <h3 className={contactStyles.vmContactSuccessTitle}>Thank You for Your Inquiry!</h3>
                    </div>
                    <div className={contactStyles.vmContactSuccessContent}>
                      <p>We've received your message and will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setSubmitSuccess(false)}
                        className={contactStyles.vmContactSuccessBtn}
                      >
                        <MessageSquare className={contactStyles.vmContactBtnIcon} />
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                 <form onSubmit={handleSubmit} className={contactStyles.vmContactForm}>

  {/* Name Field */}
  <div className={contactStyles.vmContactFormGroup}>
    <div className={contactStyles.vmContactFormLabel}>
      <User className={contactStyles.vmContactLabelIcon} />
      <label>Your Name *</label>
    </div>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className={contactStyles.vmContactFormInput}
      placeholder="Full name as you would like us to address you"
    />
  </div>

  {/* Email Field */}
  <div className={contactStyles.vmContactFormGroup}>
    <div className={contactStyles.vmContactFormLabel}>
      <Mail className={contactStyles.vmContactLabelIcon} />
      <label>Email Address *</label>
    </div>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className={contactStyles.vmContactFormInput}
      placeholder="Enter your email address"
    />
  </div>

  {/* Firm Name */}
  <div className={contactStyles.vmContactFormGroup}>
    <div className={contactStyles.vmContactFormLabel}>
      <Building2 className={contactStyles.vmContactLabelIcon} />
      <label>Law Firm / Practice Name *</label>
    </div>
    <input
      type="text"
      name="firmName"
      value={formData.firmName}
      onChange={handleChange}
      required
      className={contactStyles.vmContactFormInput}
      placeholder="Official law firm or practice name"
    />
  </div>

  {/* Firm Size */}
  <div className={contactStyles.vmContactFormGroup}>
    <div className={contactStyles.vmContactFormLabel}>
      <Users className={contactStyles.vmContactLabelIcon} />
      <label>Firm Size</label>
    </div>
    <select
      name="firmSize"
      value={formData.firmSize}
      onChange={handleChange}
      className={contactStyles.vmContactFormSelect}
    >
      <option value="">Select your firm size</option>
      <option value="solo">Solo Practitioner</option>
      <option value="small">2-10 Attorneys</option>
      <option value="medium">11-50 Attorneys</option>
      <option value="large">50+ Attorneys</option>
    </select>
  </div>

  {/* Phone */}
  <div className={contactStyles.vmContactFormGroup}>
    <div className={contactStyles.vmContactFormLabel}>
      <Phone className={contactStyles.vmContactLabelIcon} />
      <label>Phone Number (Optional)</label>
    </div>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className={contactStyles.vmContactFormInput}
      placeholder="Enter your contact number"
    />
  </div>

  {/* Message */}
  <div className={contactStyles.vmContactFormGroup}>
    <div className={contactStyles.vmContactFormLabel}>
      <MessageSquare className={contactStyles.vmContactLabelIcon} />
      <label>How can we support your firm? *</label>
    </div>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows={5}
      className={contactStyles.vmContactFormTextarea}
      placeholder="Please describe your requirements, current challenges, or the type of support you are seeking."
    />
    
    {/* Trust Builder */}
    <p className={contactStyles.vmContactFormHint}>
      All information shared will remain strictly confidential.
    </p>
  </div>

  {/* Error */}
  {submitError && (
    <div className={contactStyles.vmContactError}>
      {submitError}
    </div>
  )}

  {/* Submit */}
  <button
    type="submit"
    disabled={isSubmitting}
    className={contactStyles.vmContactSubmitBtn}
  >
    {isSubmitting ? (
      <span>Submitting...</span>
    ) : (
      <>
        <span>Send Message</span>
        <ArrowRight className={contactStyles.vmContactBtnIcon} />
      </>
    )}
  </button>

</form>

                )}
              </div>
            </div>

            <div className={contactStyles.vmContactInfoSection}>
              {/* Contact Information */}
              <div className={contactStyles.vmContactInfoCard}>
                <h3 className={contactStyles.vmContactInfoTitle}>Contact Information</h3>
                
                <div className={contactStyles.vmContactInfoItem}>
                  <Mail className={contactStyles.vmContactInfoIcon} />
                  <div>
                    <div className={contactStyles.vmContactInfoLabel}>Email</div>
                    <a 
                      href="mailto:hello@vmlegaloperations.com"
                      className={contactStyles.vmContactInfoLink}
                    >
                      hello@vmlegaloperations.com
                    </a>
                  </div>
                </div>
                
                <div className={contactStyles.vmContactInfoItem}>
                  <Globe className={contactStyles.vmContactInfoIcon} />
                  <div>
                    <div className={contactStyles.vmContactInfoLabel}>Website</div>
                    <a 
                      href="http://www.vmlegaloperations.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={contactStyles.vmContactInfoLink}
                    >
                      www.vmlegaloperations.com
                    </a>
                  </div>
                </div>
                
                <div className={contactStyles.vmContactInfoItem}>
                  <MapPin className={contactStyles.vmContactInfoIcon} />
                  <div>
                    <div className={contactStyles.vmContactInfoLabel}>Location</div>
                    <span>India (Serving U.S. clients remotely)</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className={contactStyles.vmContactResponseCard}>
                <Clock className={contactStyles.vmContactResponseIcon} />
                <div>
                  <h4 className={contactStyles.vmContactResponseTitle}>Response Time</h4>
                  <p className={contactStyles.vmContactResponseText}>
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className={contactStyles.vmContactBenefitsCard}>
                <Shield className={contactStyles.vmContactBenefitsIcon} />
                <h4 className={contactStyles.vmContactBenefitsTitle}>Why Choose Us?</h4>
                <ul className={contactStyles.vmContactBenefitsList}>
                  <li className={contactStyles.vmContactBenefitItem}>
                    <CheckCircle2 className={contactStyles.vmContactBenefitIcon} />
                    <span>Initial consultation at no cost</span>
                  </li>
                  <li className={contactStyles.vmContactBenefitItem}>
                    <CheckCircle2 className={contactStyles.vmContactBenefitIcon} />
                    <span>No long-term contracts required</span>
                  </li>
                  <li className={contactStyles.vmContactBenefitItem}>
                    <CheckCircle2 className={contactStyles.vmContactBenefitIcon} />
                    <span>Start with a structured pilot program</span>
                  </li>
                  <li className={contactStyles.vmContactBenefitItem}>
                    <CheckCircle2 className={contactStyles.vmContactBenefitIcon} />
                    <span>Transparent monthly pricing</span>
                  </li>
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className={contactStyles.vmContactTrustCard}>
                <div className={contactStyles.vmContactTrustGrid}>
                  <div className={contactStyles.vmContactTrustItem}>
                    <div className={contactStyles.vmContactTrustIconContainer}>
                      <Zap className={contactStyles.vmContactTrustIcon} />
                    </div>
                    <p className={contactStyles.vmContactTrustText}>Quick Response</p>
                  </div>
                  <div className={contactStyles.vmContactTrustItem}>
                    <div className={contactStyles.vmContactTrustIconContainer}>
                      <Target className={contactStyles.vmContactTrustIcon} />
                    </div>
                    <p className={contactStyles.vmContactTrustText}>Focused Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SCHEDULE CALL SECTION === */}
      <section id="schedule-form" className={`${contactStyles.vmContactSectionGray} ${contactStyles.vmContactReveal}`}>
        <div className={contactStyles.vmContactContainer}>
          <div className={contactStyles.vmContactScheduleContainer}>
            <div className={contactStyles.vmContactScheduleHeader}>
              <Calendar className={contactStyles.vmContactScheduleIcon} />
              <h2 className={contactStyles.vmContactScheduleTitle}>Schedule a Consultation</h2>
              <p className={contactStyles.vmContactScheduleDesc}>
                Book a call to discuss your firm's specific needs and how we can help.
              </p>
            </div>
            
            <div className={contactStyles.vmContactScheduleCard}>
              <div className={contactStyles.vmContactScheduleContent}>
                <div className={contactStyles.vmContactScheduleItem}>
                  <Phone className={contactStyles.vmContactScheduleItemIcon} />
                  <div>
                    <h3 className={contactStyles.vmContactScheduleItemTitle}>Phone Consultation</h3>
                    <p className={contactStyles.vmContactScheduleItemText}>
                      30-minute introductory call to discuss your needs
                    </p>
                  </div>
                </div>
                
                <div className={contactStyles.vmContactScheduleItem}>
                  <MessageCircle className={contactStyles.vmContactScheduleItemIcon} />
                  <div>
                    <h3 className={contactStyles.vmContactScheduleItemTitle}>Video Meeting</h3>
                    <p className={contactStyles.vmContactScheduleItemText}>
                      Screen sharing and detailed workflow discussion
                    </p>
                  </div>
                </div>
                
                <div className={contactStyles.vmContactScheduleItem}>
                  <FileText className={contactStyles.vmContactScheduleItemIcon} />
                  <div>
                    <h3 className={contactStyles.vmContactScheduleItemTitle}>Follow-up Proposal</h3>
                    <p className={contactStyles.vmContactScheduleItemText}>
                      Customized service proposal based on your requirements
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={contactStyles.vmContactScheduleActions}>
                <a 
                  href="mailto:hello@vmlegaloperations.com?subject=Schedule%20Consultation%20-%20VM%20Legal%20Operations&body=Hi%20VM%20Legal%20Operations%20Team,%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20call.%0A%0ABest%20times%20for%20me:%0A%0AThanks,%0A"
                  className={contactStyles.vmContactScheduleBtn}
                >
                  <Calendar className={contactStyles.vmContactBtnIcon} />
                  Schedule Consultation
                </a>
                <p className={contactStyles.vmContactScheduleNote}>
                  We'll email you to confirm your preferred time slot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section id="final-cta" className={`${contactStyles.vmContactCtaSection} ${contactStyles.vmContactReveal}`}>
        <div className={contactStyles.vmContactContainer}>
          <div className={contactStyles.vmContactCtaContent}>
            <div className={contactStyles.vmContactCtaIconBox}>
              <MessageSquare className={contactStyles.vmContactCtaIcon} />
            </div>
            <h2 className={contactStyles.vmContactCtaTitle}>Questions Before You Contact Us?</h2>
            <p className={contactStyles.vmContactCtaDesc}>
              Check our FAQ or browse our services to learn more about how we can support your law firm.
            </p>
            
            <div className={contactStyles.vmContactCtaBtnGroup}>
              <Link href="/services" className={contactStyles.vmContactCtaBtnPrimary}>
                View Our Services
              </Link>
              <Link href="/how-we-work" className={contactStyles.vmContactCtaBtnSecondary}>
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}