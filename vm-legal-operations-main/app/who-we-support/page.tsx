"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';

export default function WhoWeSupportPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const clientTypes = [
    {
      title: 'Small and mid-size U.S. law firms',
      description: 'Firms seeking to optimize operations without expanding internal staff or administrative overhead.',
      icon: '⚖️'
    },
    {
      title: 'Debt collection and consumer litigation firms',
      description: 'High-volume practices requiring systematic case tracking, deadline management, and compliance monitoring.',
      icon: '📊'
    },
    {
      title: 'Firms handling high-volume matters',
      description: 'Practices with multiple concurrent cases needing consistent tracking and coordination.',
      icon: '📈'
    },
    {
      title: 'Legal teams seeking administrative support without expanding internal staff',
      description: 'Legal departments and in-house counsel teams looking to improve operational efficiency.',
      icon: '👥'
    }
  ];

  const challenges = [
    'Inconsistent system updates',
    'Missed or late follow-ups',
    'Fragmented information across emails and platforms',
    'Administrative work pulling time away from billable activity'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
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
            
            <h1 className={styles.heading1}>Who We Support</h1>
            <p className={styles.paragraph} style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Dedicated <strong>offshore legal operations support</strong> for specific types of U.S. law practices
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Clients Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>Ideal Client Profiles</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              We work best with U.S. law firms and legal teams that have these characteristics
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            {clientTypes.map((client, index) => (
              <div key={index} className={styles.card} style={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ 
                    fontSize: isMobile ? '2rem' : '2.5rem', 
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    {client.icon}
                  </span>
                  <h3 className={styles.heading3} style={{ margin: 0 }}>
                    {client.title}
                  </h3>
                </div>
                
                <p style={{ 
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  color: '#4b5563',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1
                }}>
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support Matters Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>Why Legal Operations Support Matters</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              Addressing common challenges in modern legal practice
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            <div>
              <div style={{ 
                background: '#f8fafc', 
                padding: isMobile ? '1.5rem' : '2rem', 
                borderRadius: '1rem',
                border: '1px solid #e2e8f0',
                marginBottom: '2rem'
              }}>
                <h3 className={styles.heading3} style={{ color: '#4b5563', marginBottom: '1rem' }}>
                  The Challenges
                </h3>
                <p style={{ 
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  color: '#4b5563',
                  marginBottom: '1rem'
                }}>
                  Even with modern case-management software, many firms experience:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {challenges.map((challenge, idx) => (
                    <li key={idx} className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <span style={{ color: '#fbbf24', marginRight: '0.75rem', marginTop: '0.25rem' }}>•</span>
                      <span style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div style={{ 
                background: '#f0f9ff', 
                padding: isMobile ? '1.5rem' : '2rem', 
                borderRadius: '1rem',
                border: '1px solid #dbeafe'
              }}>
                <h3 className={styles.heading3} style={{ color: '#1d4ed8', marginBottom: '1rem' }}>
                  How We Help
                </h3>
                <p style={{ 
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  color: '#4b5563',
                  fontWeight: '600'
                }}>
                  We help address these gaps by <strong>owning the tracking and reporting process</strong>, 
                  so attorneys can focus on substantive legal work.
                </p>
              </div>
            </div>
            
            <div>
              <div style={{ 
                background: 'white', 
                padding: isMobile ? '1.5rem' : '2rem', 
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                marginBottom: '2rem'
              }}>
                <h3 className={styles.heading3} style={{ marginBottom: '1rem', color: '#0f766e' }}>
                  Key Benefits
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ 
                      background: '#d1fae5', 
                      color: '#0f766e',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      flexShrink: 0,
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Time Savings</h4>
                      <p style={{ fontSize: isMobile ? '0.875rem' : '0.95rem', color: '#6b7280', margin: 0 }}>
                        Attorneys save significant time on administrative tasks
                      </p>
                    </div>
                  </li>
                  
                  <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ 
                      background: '#d1fae5', 
                      color: '#0f766e',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      flexShrink: 0,
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Cost Efficiency</h4>
                      <p style={{ fontSize: isMobile ? '0.875rem' : '0.95rem', color: '#6b7280', margin: 0 }}>
                        Significant savings compared to hiring in-house staff
                      </p>
                    </div>
                  </li>
                  
                  <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ 
                      background: '#d1fae5', 
                      color: '#0f766e',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      flexShrink: 0,
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Better Visibility</h4>
                      <p style={{ fontSize: isMobile ? '0.875rem' : '0.95rem', color: '#6b7280', margin: 0 }}>
                        Real-time case status and deadline tracking across all matters
                      </p>
                    </div>
                  </li>
                  
                  <li className={styles.flex} style={{ alignItems: 'flex-start' }}>
                    <span style={{ 
                      background: '#d1fae5', 
                      color: '#0f766e',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      flexShrink: 0,
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Operational Discipline</h4>
                      <p style={{ fontSize: isMobile ? '0.875rem' : '0.95rem', color: '#6b7280', margin: 0 }}>
                        Consistent tracking, reporting, and follow-through
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div style={{ 
                background: '#fef3c7', 
                padding: isMobile ? '1.5rem' : '2rem', 
                borderRadius: '1rem',
                border: '1px solid #fde68a',
                textAlign: 'center'
              }}>
                <p style={{ 
                  fontSize: isMobile ? '0.95rem' : '1.125rem',
                  fontWeight: '600',
                  color: '#92400e',
                  margin: 0
                }}>
                  Our role is to provide <strong>consistency, visibility, and operational discipline</strong> 
                  that keeps your cases on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Services Notice */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: isMobile ? '1.5rem' : '2rem', 
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 className={styles.heading3} style={{ 
              color: '#93c5fd', 
              marginBottom: '1rem',
              fontSize: isMobile ? '1.25rem' : '1.875rem'
            }}>
              Scope of Services
            </h3>
            <p style={{ 
              color: '#d1d5db', 
              marginBottom: '1rem',
              fontSize: isMobile ? '0.95rem' : '1.125rem'
            }}>
              <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong>
            </p>
            <p style={{ 
              color: '#9ca3af',
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions. Our services are limited to operational and administrative support 
              for U.S. law firms. We work under attorney supervision and follow all applicable 
              regulations and ethical guidelines.
            </p>
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
          <h2 className={styles.heading2} style={{ color: 'white' }}>Is Your Firm a Good Fit?</h2>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.25rem', 
            marginBottom: '2rem', 
            maxWidth: '800px', 
            margin: '0 auto 2rem' 
          }}>
            Schedule a consultation to discuss how our legal operations support can benefit your practice.
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
              Schedule Consultation
            </Link>
            <Link 
              href="/services"
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
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}