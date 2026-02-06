"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';

export default function WhatWeDontDoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const dontDoItems = [
    {
      title: 'Provide Legal Advice',
      description: 'We do not offer legal opinions, interpretations of law, or strategic legal guidance.',
      reason: 'Only licensed attorneys can provide legal advice. We focus exclusively on administrative support.'
    },
    {
      title: 'Draft Legal Documents',
      description: 'We do not prepare pleadings, motions, briefs, contracts, or other legal documents.',
      reason: 'Document drafting requires legal analysis and judgment, which is outside our scope.'
    },
    {
      title: 'Represent Clients in Court',
      description: 'We do not appear before any court, tribunal, or administrative body.',
      reason: 'Court representation requires a law license and is the responsibility of your firm\'s attorneys.'
    },
    {
      title: 'Make Legal Decisions',
      description: 'We do not make strategic decisions, case evaluations, or settlement recommendations.',
      reason: 'Legal decision-making requires attorney-client privilege and professional judgment.'
    },
    {
      title: 'Access Trust Accounts',
      description: 'We do not handle client funds, billing, or financial transactions.',
      reason: 'Financial matters are strictly managed by your firm to maintain compliance with trust accounting rules.'
    },
    {
      title: 'Provide Legal Research',
      description: 'We do not conduct case law research, statutory analysis, or legal precedent research.',
      reason: 'Legal research requires legal training and interpretation skills that we do not provide.'
    }
  ];

  const whatWeDo = [
    {
      icon: '📊',
      title: 'Case Status Tracking',
      description: 'Monitor case stages, maintain structured trackers, update progress.'
    },
    {
      icon: '⏰',
      title: 'Deadline & Timeline Monitoring',
      description: 'Track court-driven deadlines, flag upcoming actions, send alerts.'
    },
    {
      icon: '🏛️',
      title: 'Court Notification Monitoring',
      description: 'Monitor dockets, filing confirmations, and court communications.'
    },
    {
      icon: '🔄',
      title: 'Follow-Up & Coordination',
      description: 'Track pending actions, coordinate status confirmations, escalate deadlines.'
    },
    {
      icon: '📋',
      title: 'Weekly Status Reporting',
      description: 'Clear, structured reports covering all active matters and pending items.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'inline-block', 
              backgroundColor: '#dbeafe', 
              color: '#1d4ed8', 
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              VM Legal Operations
            </div>
            
            <h1 className={styles.heading1}>What We Don't Do</h1>
            <p className={styles.paragraph} style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Clear boundaries to maintain <strong>compliance and transparency</strong> in our services
            </p>
            
            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              marginTop: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: isMobile ? '0.95rem' : '1.125rem',
                color: '#1d4ed8',
                fontWeight: '600',
                margin: 0
              }}>
                "Our services are strictly non-legal and administrative in nature.<br/>
                We do not provide legal advice or legal representation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>Service Boundaries</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              To maintain clarity and compliance, these activities are <strong>strictly outside our scope</strong>
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            {dontDoItems.map((item, index) => (
              <div key={index} className={styles.card} style={{ 
                border: '1px solid #e2e8f0',
                borderTop: '3px solid #6b7280'
              }}>
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  marginBottom: '1rem'
                }}>
                  <div style={{ 
                    background: '#f1f5f9', 
                    color: '#6b7280',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0,
                    fontWeight: 'bold',
                    fontSize: '1.125rem'
                  }}>
                    ✓
                  </div>
                  <h3 className={styles.heading3} style={{ 
                    color: '#4b5563',
                    margin: 0
                  }}>
                    {item.title}
                  </h3>
                </div>
                
                <p style={{ 
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  color: '#4b5563',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
                
                <div style={{ 
                  background: '#f8fafc', 
                  padding: '0.75rem', 
                  borderRadius: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: isMobile ? '0.75rem' : '0.875rem',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    <strong>Reason:</strong> {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>What We Do Provide</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              Our focus is strictly on <strong>non-legal administrative support</strong> for law firm operations
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid3}`} style={{ gap: isMobile ? '2rem' : '1.5rem' }}>
            {whatWeDo.map((service, index) => (
              <div key={index} className={styles.card} style={{ 
                textAlign: 'center',
                borderTop: '3px solid #1d4ed8'
              }}>
                <div style={{ 
                  fontSize: isMobile ? '2.5rem' : '3rem',
                  marginBottom: '1rem'
                }}>
                  {service.icon}
                </div>
                <h3 className={styles.heading3} style={{ marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p style={{ 
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  color: '#4b5563',
                  margin: 0
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className={styles.textCenter} style={{ marginTop: '3rem' }}>
            <Link href="/services" className={`${styles.btn} ${styles.btnPrimary}`}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Scope of Services Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.textCenter} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ color: 'white' }}>Scope of Services</h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              color: '#d1d5db' 
            }}>
              Clear definition of what falls within and outside our support parameters
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 className={styles.heading3} style={{ color: '#10b981', marginBottom: '1rem' }}>
                Within Our Scope ✓
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Case status monitoring and updates',
                  'Deadline tracking and alerting',
                  'Court notification monitoring',
                  'Follow-up coordination',
                  'Weekly status reporting',
                  'Administrative workflow management'
                ].map((item, idx) => (
                  <li key={idx} className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#10b981', marginRight: '0.75rem', marginTop: '0.25rem' }}>•</span>
                    <span style={{ color: '#d1d5db' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 className={styles.heading3} style={{ color: '#9ca3af', marginBottom: '1rem' }}>
                Outside Our Scope ✓
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Legal advice or opinions',
                  'Document drafting',
                  'Court representation',
                  'Legal decision-making',
                  'Financial transactions',
                  'Legal research'
                ].map((item, idx) => (
                  <li key={idx} className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#9ca3af', marginRight: '0.75rem', marginTop: '0.25rem' }}>•</span>
                    <span style={{ color: '#d1d5db' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Ethics Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ 
            background: '#f0f9ff', 
            padding: isMobile ? '1.5rem' : '2rem', 
            borderRadius: '1rem',
            borderLeft: '4px solid #1d4ed8'
          }}>
            <h3 className={styles.heading3} style={{ 
              color: '#1d4ed8', 
              marginBottom: '1rem',
              fontSize: isMobile ? '1.25rem' : '1.875rem'
            }}>
              Scope of Services & Ethical Standards
            </h3>
            <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '1.5rem' : '2rem' }}>
              <div>
                <p style={{ 
                  fontSize: isMobile ? '0.95rem' : '1.125rem',
                  color: '#4b5563',
                  marginBottom: '1rem'
                }}>
                  We operate under <strong>strict ethical guidelines</strong> and maintain clear boundaries to ensure 
                  compliance with all applicable regulations governing legal services support.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Strict adherence to U.S. legal ethics rules',
                    'Clear distinction between legal and administrative work',
                    'Attorney supervision of all our work',
                    'Confidentiality and data protection protocols',
                    'Transparent service agreements'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ color: '#1d4ed8', marginRight: '0.75rem' }}>✓</span>
                      <span style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div style={{ 
                  background: '#dbeafe', 
                  padding: '1rem', 
                  borderRadius: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <p style={{ 
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: '#1d4ed8',
                    fontWeight: '600',
                    margin: 0
                  }}>
                    Our services are limited to non-legal administrative support only.
                  </p>
                </div>
                <p style={{ 
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  color: '#4b5563'
                }}>
                  This clear delineation ensures we remain in compliance while providing valuable 
                  operational support to U.S. law firms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.section} style={{ 
        background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', 
        color: 'white',
        padding: isMobile ? '3rem 0' : '5rem 0'
      }}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <h2 className={styles.heading2} style={{ color: 'white' }}>Need Clarification?</h2>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.25rem', 
            marginBottom: '2rem', 
            maxWidth: '800px', 
            margin: '0 auto 2rem' 
          }}>
            Have questions about our service boundaries? Contact us for a detailed discussion.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <Link 
              href="/contact"
              style={{ 
                background: 'white', 
                color: '#1d4ed8', 
                padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem', 
                borderRadius: '0.5rem', 
                border: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '1rem' : '1.125rem',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              Contact Us
            </Link>
            <Link 
              href="/how-we-work"
              style={{ 
                background: 'transparent', 
                color: 'white', 
                padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem', 
                borderRadius: '0.5rem', 
                border: '2px solid white',
                fontWeight: '600',
                fontSize: isMobile ? '1rem' : '1.125rem',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              How We Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}