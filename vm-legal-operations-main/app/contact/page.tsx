// app/contact/page.tsx
"use client";

import { useState } from 'react';
import styles from '../styles.module.css';

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
    <div>
      {/* Hero Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className={styles.heading1}>Contact Us</h1>
            <p className={styles.paragraph} style={{ fontSize: '1.25rem' }}>
              Ready to streamline your legal operations? Let's discuss how we can support your firm.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: '3rem' }}>
            
            {/* Contact Form */}
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h2 className={styles.heading2} style={{ marginBottom: '1.5rem' }}>Send Us a Message</h2>
              
              {submitSuccess ? (
                <div style={{ 
                  background: '#d1fae5', 
                  padding: '1.5rem', 
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ color: '#065f46', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Thank You for Your Inquiry!
                  </h3>
                  <p style={{ color: '#065f46' }}>
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    style={{
                      marginTop: '1rem',
                      background: '#059669',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer'
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.375rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.375rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Law Firm Name *
                    </label>
                    <input
                      type="text"
                      name="firmName"
                      value={formData.firmName}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.375rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Firm Size
                    </label>
                    <select
                      name="firmSize"
                      value={formData.firmSize}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.375rem',
                        fontSize: '1rem',
                        background: 'white'
                      }}
                    >
                      <option value="">Select firm size</option>
                      <option value="solo">Solo Practitioner</option>
                      <option value="small">2-10 Attorneys</option>
                      <option value="medium">11-50 Attorneys</option>
                      <option value="large">50+ Attorneys</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      What services are you interested in?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '0.375rem',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      background: '#1d4ed8',
                      color: 'white',
                      padding: '0.75rem',
                      border: 'none',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className={styles.heading2} style={{ marginBottom: '1.5rem' }}>Contact Information</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1d4ed8' }}>
                  General Inquiries
                </h3>
                <div style={{ color: '#4b5563', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> hello@vmlegaloperations.com</p>
                  <p style={{ marginBottom: '0.5rem' }}><strong>Website:</strong> www.vmlegaloperations.com</p>
                  <p><strong>Location:</strong> India (Serving U.S. clients remotely)</p>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1d4ed8' }}>
                  Response Time
                </h3>
                <p style={{ color: '#4b5563' }}>
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>

              <div style={{ 
                background: '#f0f9ff', 
                padding: '1.5rem', 
                borderRadius: '0.5rem',
                border: '1px solid #dbeafe'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1d4ed8' }}>
                  Why Choose Us?
                </h3>
                <ul style={{ color: '#4b5563', paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Free initial consultation</li>
                  <li style={{ marginBottom: '0.5rem' }}>No long-term contracts required</li>
                  <li style={{ marginBottom: '0.5rem' }}>Start with a risk-free pilot program</li>
                  <li>Transparent monthly pricing</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.section} style={{ background: '#1d4ed8', color: 'white' }}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <h2 className={styles.heading2} style={{ color: 'white', marginBottom: '1rem' }}>
            Schedule a Free Consultation
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            Book a 30-minute call to discuss your firm's specific needs and how we can help.
          </p>
          <button style={{ 
            background: 'white', 
            color: '#1d4ed8', 
            padding: '1rem 2rem', 
            borderRadius: '0.5rem', 
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}