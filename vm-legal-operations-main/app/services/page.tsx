"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: '📊',
      title: 'Case Status Tracking',
      bullets: [
        'Tracking case stages and progress across matters',
        'Maintaining structured case trackers or working alongside your existing systems'
      ]
    },
    {
      icon: '⏰',
      title: 'Deadline & Timeline Monitoring',
      bullets: [
        'Monitoring court-driven and rule-based deadlines',
        'Flagging upcoming actions and pending responses'
      ]
    },
    {
      icon: '🏛️',
      title: 'Court Notification & Docket Monitoring',
      bullets: [
        'Monitoring court notifications, filing confirmations, and docket updates',
        'Updating status based on permitted access and information received'
      ]
    },
    {
      icon: '🔄',
      title: 'Follow-Up & Coordination Support',
      bullets: [
        'Tracking pending actions',
        'Coordinating status confirmations with attorneys or firm staff',
        'Escalating approaching deadlines'
      ]
    },
    {
      icon: '📋',
      title: 'Weekly Status Reporting',
      bullets: [
        'Clear, structured reports covering open matters',
        'Tracking upcoming deadlines and actions taken',
        'Highlighting items requiring attention'
      ]
    }
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
            
            <h1 className={styles.heading1}>Our Services</h1>
            <p className={styles.paragraph} style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              Strictly <strong>non-legal administrative support</strong> designed to keep your law firm's operations running smoothly
            </p>
            
            <div style={{ 
              background: 'white', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              marginTop: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              textAlign: 'left'
            }}>
              <p style={{ 
                fontSize: isMobile ? '0.95rem' : '1.125rem',
                color: '#4b5563',
                margin: 0
              }}>
                <strong>We support law firms with day-to-day legal operations and case coordination</strong>, 
                ensuring nothing falls through the cracks — without adding internal headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>What We Do</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              Comprehensive legal operations support for U.S. law firms
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            {services.map((service, index) => (
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
                    fontSize: isMobile ? '2.5rem' : '3rem', 
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    {service.icon}
                  </span>
                  <h3 className={styles.heading3} style={{ margin: 0 }}>
                    {service.title}
                  </h3>
                </div>
                
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  margin: 0,
                  flex: 1
                }}>
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.flex} style={{ 
                      alignItems: 'flex-start', 
                      marginBottom: '0.75rem'
                    }}>
                      <span style={{ 
                        color: '#10b981', 
                        marginRight: '0.75rem',
                        marginTop: '0.25rem',
                        flexShrink: 0,
                        fontSize: '1.25rem'
                      }}>
                        •
                      </span>
                      <span style={{ 
                        fontSize: isMobile ? '0.95rem' : '1rem',
                        color: '#4b5563',
                        lineHeight: '1.5'
                      }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div style={{ marginTop: '1.5rem' }}>
                  <Link 
                    href="/contact" 
                    className={`${styles.btn} ${styles.btnOutline}`}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Reporting Details */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>Weekly Status Reporting</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              Clear, structured reports delivered weekly
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: isMobile ? '1.5rem' : '2rem', 
            borderRadius: '1rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div className={styles.grid} style={{ 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem'
            }}>
              <div>
                <h3 className={styles.heading3} style={{ marginBottom: '1rem', color: '#1d4ed8' }}>
                  Report Coverage
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    { icon: '📝', text: 'Open matters and case status' },
                    { icon: '⏰', text: 'Upcoming deadlines and timelines' },
                    { icon: '✅', text: 'Actions taken and completed tasks' },
                    { icon: '⚠️', text: 'Items requiring attention or escalation' }
                  ].map((item, idx) => (
                    <li key={idx} className={styles.flex} style={{ alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '1.25rem', marginRight: '0.75rem' }}>{item.icon}</span>
                      <span style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className={styles.heading3} style={{ marginBottom: '1rem', color: '#0f766e' }}>
                  Benefits
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Consistent visibility across all matters',
                    'Early warning for upcoming deadlines',
                    'Reduced administrative overhead',
                    'Better coordination among team members',
                    'Documented audit trail of case progress'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>✓</span>
                      <span style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>Our Service Delivery Process</h2>
            <p className={styles.paragraph}>How we ensure quality and consistency in our support</p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid4}`}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: isMobile ? '50px' : '60px', 
                height: isMobile ? '50px' : '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8'
              }}>
                1
              </div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Assessment</h3>
              <p style={{ color: '#6b7280', fontSize: isMobile ? '0.875rem' : '1rem' }}>Understand your workflow and requirements</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: isMobile ? '50px' : '60px', 
                height: isMobile ? '50px' : '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8'
              }}>
                2
              </div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Setup</h3>
              <p style={{ color: '#6b7280', fontSize: isMobile ? '0.875rem' : '1rem' }}>Configure tracking systems and access</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: isMobile ? '50px' : '60px', 
                height: isMobile ? '50px' : '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8'
              }}>
                3
              </div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Execution</h3>
              <p style={{ color: '#6b7280', fontSize: isMobile ? '0.875rem' : '1rem' }}>Daily monitoring and coordination</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: isMobile ? '50px' : '60px', 
                height: isMobile ? '50px' : '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8'
              }}>
                4
              </div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Reporting</h3>
              <p style={{ color: '#6b7280', fontSize: isMobile ? '0.875rem' : '1rem' }}>Weekly updates and reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ 
            background: '#fef2f2', 
            padding: isMobile ? '1.5rem' : '2rem', 
            borderRadius: '0.5rem',
            borderLeft: '4px solid #dc2626'
          }}>
            <h3 className={styles.heading3} style={{ 
              color: '#dc2626', 
              marginBottom: '1rem',
              fontSize: isMobile ? '1.25rem' : '1.875rem'
            }}>
              Compliance Notice
            </h3>
            <p className={styles.textGray} style={{ fontSize: isMobile ? '0.95rem' : '1.125rem' }}>
              <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong><br/>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions. Our services are limited to operational and administrative support.
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
          <h2 className={styles.heading2} style={{ color: 'white' }}>Ready to Streamline Your Operations?</h2>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.25rem', 
            marginBottom: '2rem', 
            maxWidth: '800px', 
            margin: '0 auto 2rem' 
          }}>
            Book a free consultation to discuss how our services can benefit your firm.
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
              Schedule Free Consultation
            </Link>
            <Link 
              href="/contact"
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
              Start Pilot Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}