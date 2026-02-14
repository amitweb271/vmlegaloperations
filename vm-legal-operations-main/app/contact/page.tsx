"use client";

import { useState } from 'react';
import styles from '../styles.module.css';
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
  FileText
} from 'lucide-react';

export default function ContactPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
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
    }, 1500);
  };

  return (
    <div className={styles.premiumContainer}>
      {/* === PREMIUM HERO SECTION === */}
      <section className={styles.premiumHero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            {/* Premium Badge */}
            <div className={styles.premiumBadge}>
              <Award className={styles.badgeIcon} />
              <span>VM Legal Operations</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={styles.premiumHeading}>
              Contact Us
            </h1>
            
            {/* Description */}
            <h2 className={styles.subheading}>
              Ready to streamline your legal operations? Let's discuss how we can support your firm.
            </h2>
            
            {/* Scope Card */}
            <div className={styles.scopeCard}>
              <div className={styles.scopeHeader}>
                <ShieldCheck className={styles.scopeIcon} />
                <h3>Get in Touch</h3>
              </div>
              <div className={styles.scopeContent}>
                <p>
                  Book a consultation to discuss your firm's specific needs and how we can help 
                  improve your operational efficiency.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={styles.ctaContainer}>
              <a href="#message-form" className={styles.primaryButton}>
                <span>Send Message</span>
                <ArrowRight className={styles.buttonIcon} />
              </a>
              <a href="#schedule-form" className={styles.secondaryButton}>
                <Calendar className={styles.buttonIcon} />
                <span>Schedule Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === CONTACT FORM SECTION === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.contactContainer}>
            <div className={styles.contactFormSection}>
              <div className={styles.formHeader}>
                <MessageSquare className={styles.formIcon} />
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formDescription}>
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              <div id="message-form" className={styles.formCard}>
                {submitSuccess ? (
                  <div className={styles.successCard}>
                    <div className={styles.successHeader}>
                      <CheckCircle2 className={styles.successIcon} />
                      <h3 className={styles.successTitle}>Thank You for Your Inquiry!</h3>
                    </div>
                    <div className={styles.successContent}>
                      <p>We've received your message and will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setSubmitSuccess(false)}
                        className={styles.successButton}
                      >
                        <MessageSquare className={styles.buttonIcon} />
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.contactForm}>
                    {/* Name Field */}
                    <div className={styles.formGroup}>
                      <div className={styles.formLabel}>
                        <User className={styles.labelIcon} />
                        <label>Your Name *</label>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.formInput}
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email Field */}
                    <div className={styles.formGroup}>
                      <div className={styles.formLabel}>
                        <Mail className={styles.labelIcon} />
                        <label>Email Address *</label>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.formInput}
                        placeholder="john@lawfirm.com"
                      />
                    </div>

                    {/* Law Firm Name Field */}
                    <div className={styles.formGroup}>
                      <div className={styles.formLabel}>
                        <Building2 className={styles.labelIcon} />
                        <label>Law Firm Name / Practice Name *</label>
                      </div>
                      <input
                        type="text"
                        name="firmName"
                        value={formData.firmName}
                        onChange={handleChange}
                        required
                        className={styles.formInput}
                        placeholder="Smith & Associates LLP"
                      />
                      <p className={styles.formHint}>
                        (Solo practitioners may enter their practice name.)
                      </p>
                    </div>

                    {/* Firm Size Field */}
                    <div className={styles.formGroup}>
                      <div className={styles.formLabel}>
                        <Users className={styles.labelIcon} />
                        <label>Firm Size</label>
                      </div>
                      <select
                        name="firmSize"
                        value={formData.firmSize}
                        onChange={handleChange}
                        className={styles.formSelect}
                      >
                        <option value="">Select firm size</option>
                        <option value="solo">Solo Practitioner</option>
                        <option value="small">2-10 Attorneys</option>
                        <option value="medium">11-50 Attorneys</option>
                        <option value="large">50+ Attorneys</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div className={styles.formGroup}>
                      <div className={styles.formLabel}>
                        <MessageSquare className={styles.labelIcon} />
                        <label>What services are you interested in?</label>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={styles.formTextarea}
                        placeholder="Tell us about your needs, case volume, and specific challenges..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.submitButton}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className={styles.buttonIcon} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className={styles.contactInfoSection}>
              {/* Contact Information */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Contact Information</h3>
                
                <div className={styles.infoItem}>
                  <Mail className={styles.infoIcon} />
                  <div>
                    <div className={styles.infoLabel}>Email</div>
                    <a 
                      href="mailto:hello@vmlegaloperations.com"
                      className={styles.infoLink}
                    >
                      hello@vmlegaloperations.com
                    </a>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <Globe className={styles.infoIcon} />
                  <div>
                    <div className={styles.infoLabel}>Website</div>
                    <a 
                      href="http://www.vmlegaloperations.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoLink}
                    >
                      www.vmlegaloperations.com
                    </a>
                  </div>
                </div>
                
                <div className={styles.infoItem}>
                  <MapPin className={styles.infoIcon} />
                  <div>
                    <div className={styles.infoLabel}>Location</div>
                    <span>India (Serving U.S. clients remotely)</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className={styles.responseCard}>
                <Clock className={styles.responseIcon} />
                <h4 className={styles.responseTitle}>Response Time</h4>
                <p className={styles.responseText}>
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className={styles.benefitsCard}>
                <Shield className={styles.benefitsIcon} />
                <h4 className={styles.benefitsTitle}>Why Choose Us?</h4>
                <ul className={styles.benefitsList}>
                  <li className={styles.benefitItem}>
                    <CheckCircle2 className={styles.benefitIcon} />
                    <span>Initial consultation at no cost</span>
                  </li>
                  <li className={styles.benefitItem}>
                    <CheckCircle2 className={styles.benefitIcon} />
                    <span>No long-term contracts required</span>
                  </li>
                  <li className={styles.benefitItem}>
                    <CheckCircle2 className={styles.benefitIcon} />
                    <span>Start with a structured pilot program</span>
                  </li>
                  <li className={styles.benefitItem}>
                    <CheckCircle2 className={styles.benefitIcon} />
                    <span>Transparent monthly pricing</span>
                  </li>
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className={styles.trustCard}>
                <div className={styles.trustGrid}>
                  <div className={styles.trustItem}>
                    <div className={styles.trustIconContainer}>
                      <Zap className={styles.trustIcon} />
                    </div>
                    <p className={styles.trustText}>Quick Response</p>
                  </div>
                  <div className={styles.trustItem}>
                    <div className={styles.trustIconContainer}>
                      <Target className={styles.trustIcon} />
                    </div>
                    <p className={styles.trustText}>Focused Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SCHEDULE CALL SECTION === */}
      <section id="schedule-form" className={styles.sectionGray}>
        <div className={styles.container}>
          <div className={styles.scheduleContainer}>
            <div className={styles.scheduleHeader}>
              <Calendar className={styles.scheduleIcon} />
              <h2 className={styles.scheduleTitle}>Schedule a Consultation</h2>
              <p className={styles.scheduleDescription}>
                Book a call to discuss your firm's specific needs and how we can help.
              </p>
            </div>
            
            <div className={styles.scheduleCard}>
              <div className={styles.scheduleContent}>
                <div className={styles.scheduleItem}>
                  <Phone className={styles.scheduleItemIcon} />
                  <div>
                    <h3 className={styles.scheduleItemTitle}>Phone Consultation</h3>
                    <p className={styles.scheduleItemText}>
                      30-minute introductory call to discuss your needs
                    </p>
                  </div>
                </div>
                
                <div className={styles.scheduleItem}>
                  <MessageCircle className={styles.scheduleItemIcon} />
                  <div>
                    <h3 className={styles.scheduleItemTitle}>Video Meeting</h3>
                    <p className={styles.scheduleItemText}>
                      Screen sharing and detailed workflow discussion
                    </p>
                  </div>
                </div>
                
                <div className={styles.scheduleItem}>
                  <FileText className={styles.scheduleItemIcon} />
                  <div>
                    <h3 className={styles.scheduleItemTitle}>Follow-up Proposal</h3>
                    <p className={styles.scheduleItemText}>
                      Customized service proposal based on your requirements
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.scheduleActions}>
                <a 
                  href="mailto:hello@vmlegaloperations.com?subject=Schedule%20Consultation%20-%20VM%20Legal%20Operations&body=Hi%20VM%20Legal%20Operations%20Team,%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20call.%0A%0ABest%20times%20for%20me:%0A%0AThanks,%0A"
                  className={styles.scheduleButton}
                >
                  <Calendar className={styles.buttonIcon} />
                  Schedule Consultation
                </a>
                <p className={styles.scheduleNote}>
                  We'll email you to confirm your preferred time slot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIconContainer}>
              <MessageSquare className={styles.ctaIcon} />
            </div>
            <h2 className={styles.ctaTitle}>Questions Before You Contact Us?</h2>
            <p className={styles.ctaDescription}>
              Check our FAQ or browse our services to learn more about how we can support your law firm.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/services" className={styles.ctaButtonPrimary}>
                View Our Services
              </Link>
              <Link href="/how-we-work" className={styles.ctaButtonSecondary}>
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}