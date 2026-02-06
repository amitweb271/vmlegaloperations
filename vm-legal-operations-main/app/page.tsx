"use client";

import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* === HERO SECTION === */}
      <section className={styles.bgGradient} style={{ 
        minHeight: isMobile ? '85vh' : '95vh', 
        display: 'flex', 
        alignItems: 'center',
        padding: isMobile ? '3rem 0' : '4rem 0'
      }}>
        <div className={styles.container}>
          <div style={{ maxWidth: isMobile ? '100%' : '800px', margin: '0 auto', textAlign: 'center' }}>
            {/* Badge */}
            <div style={{ 
              display: 'inline-block', 
              backgroundColor: 'rgba(219, 234, 254, 0.9)', 
              color: '#1d4ed8', 
              padding: isMobile ? '0.5rem 0.75rem' : '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              fontWeight: '600',
              marginBottom: isMobile ? '1.5rem' : '2rem',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(219, 234, 254, 0.3)'
            }}>
              A service division of VM Tech Solutions
            </div>
            
            {/* Main Heading */}
            <h1 style={{ 
              fontSize: isMobile ? '2rem' : '3.5rem',
              lineHeight: isMobile ? '1.2' : '1.1',
              fontWeight: '800',
              color: '#111827',
              marginBottom: isMobile ? '1rem' : '1.5rem',
              letterSpacing: '-0.025em'
            }}>
              VM Legal Operations
            </h1>
            
            {/* Tagline */}
            <div style={{ 
              marginBottom: isMobile ? '1.5rem' : '2rem'
            }}>
              <h2 style={{ 
                fontSize: isMobile ? '1.25rem' : '1.75rem',
                fontWeight: '600',
                color: '#4b5563',
                lineHeight: '1.4'
              }}>
                (Clarity. Consistency. Control.)
              </h2>
            </div>
            
            {/* Subheading */}
            <h3 style={{ 
              fontSize: isMobile ? '1.125rem' : '1.75rem',
              fontWeight: '700',
              color: '#1d4ed8',
              marginBottom: isMobile ? '2rem' : '3rem',
              lineHeight: '1.4'
            }}>
              Legal Operations & Case Management Support<br/>
              for U.S. Law Firms
            </h3>
            
            {/* Scope of Services */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.9)', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              marginBottom: isMobile ? '2rem' : '3rem',
              textAlign: 'left',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h4 style={{ 
                fontSize: isMobile ? '1.125rem' : '1.5rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1rem',
                letterSpacing: '-0.015em'
              }}>
                Scope of Services
              </h4>
              <p style={{ 
                fontSize: isMobile ? '0.95rem' : '1.125rem',
                color: '#4b5563',
                lineHeight: '1.7',
                marginBottom: '1rem'
              }}>
                VM Legal Operations provides <strong>strictly non-legal administrative support</strong> for law firm operations.
              </p>
              <p style={{ 
                fontSize: isMobile ? '0.95rem' : '1.125rem',
                color: '#4b5563',
                lineHeight: '1.7',
                margin: 0
              }}>
                We do not provide legal advice, draft legal documents, represent clients in court, or make legal decisions.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className={`${styles.flex} ${isMobile ? styles.flexCol : ''}`} style={{ 
              gap: isMobile ? '1rem' : '1rem',
              marginBottom: isMobile ? '2rem' : '3rem',
              justifyContent: 'center'
            }}>
              <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`} style={{
                width: isMobile ? '100%' : 'auto',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)'
              }}>
                Start Pilot Program →
              </Link>
              <Link href="/contact" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLarge}`} style={{
                width: isMobile ? '100%' : 'auto',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                Schedule Intro Call
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div style={{ 
              borderTop: '1px solid rgba(229, 231, 235, 0.5)', 
              paddingTop: isMobile ? '1.5rem' : '2rem'
            }}>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: isMobile ? '1rem' : '1.5rem',
                fontSize: isMobile ? '0.875rem' : '1rem',
                fontWeight: '500'
              }}>
                Trusted by U.S. law firms for:
              </p>
              <div className={styles.grid} style={{ 
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? '1rem' : '1.5rem'
              }}>
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <span style={{ 
                    fontSize: isMobile ? '1.5rem' : '1.75rem',
                    display: 'inline-block',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease'
                  }}>🔒</span>
                  <span className={styles.fontSemibold} style={{ 
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: '#374151'
                  }}>
                    NDA Protected
                  </span>
                </div>
                
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <span style={{ 
                    fontSize: isMobile ? '1.5rem' : '1.75rem',
                    display: 'inline-block',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease'
                  }}>🛡️</span>
                  <span className={styles.fontSemibold} style={{ 
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: '#374151'
                  }}>
                    Confidential
                  </span>
                </div>
                
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <span style={{ 
                    fontSize: isMobile ? '1.5rem' : '1.75rem',
                    display: 'inline-block',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease'
                  }}>🇺🇸</span>
                  <span className={styles.fontSemibold} style={{ 
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: '#374151'
                  }}>
                    U.S. Focused
                  </span>
                </div>
                
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <span style={{ 
                    fontSize: isMobile ? '1.5rem' : '1.75rem',
                    display: 'inline-block',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease'
                  }}>📊</span>
                  <span className={styles.fontSemibold} style={{ 
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: '#374151'
                  }}>
                    Monthly Reports
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT WE DO SECTION === */}
      <section className={`${styles.section} ${styles.sectionLight}`} style={{ padding: isMobile ? '3rem 0' : '5rem 0' }}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ letterSpacing: '-0.025em' }}>What We Do</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: isMobile ? '100%' : '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#6b7280'
            }}>
              We support law firms with <strong>day-to-day legal operations and case coordination</strong>
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid3}`}>
            {/* Service 1 */}
            <div className={styles.card} style={{ 
              transition: 'all 0.4s ease',
              border: '1px solid #e5e7eb',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #1d4ed8, #3b82f6)',
                borderRadius: '1rem 1rem 0 0'
              }}></div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem', 
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}>📊</span>
                <h3 className={styles.heading3} style={{ color: '#111827' }}>Case Status Tracking</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Tracking case stages and progress across matters</span>
                </li>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Maintaining structured case trackers or working alongside your existing systems</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className={styles.card} style={{ 
              transition: 'all 0.4s ease',
              border: '1px solid #e5e7eb',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #0f766e, #14b8a6)',
                borderRadius: '1rem 1rem 0 0'
              }}></div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem', 
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}>⏰</span>
                <h3 className={styles.heading3} style={{ color: '#111827' }}>Deadline & Timeline Monitoring</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Monitoring court-driven and rule-based deadlines</span>
                </li>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Flagging upcoming actions and pending responses</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className={styles.card} style={{ 
              transition: 'all 0.4s ease',
              border: '1px solid #e5e7eb',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #dc2626, #ef4444)',
                borderRadius: '1rem 1rem 0 0'
              }}></div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem', 
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}>🏛️</span>
                <h3 className={styles.heading3} style={{ color: '#111827' }}>Court Notification & Docket Monitoring</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Monitoring court notifications, filing confirmations, and docket updates</span>
                </li>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Updating status based on permitted access and information received</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Additional Services Row */}
          <div className={`${styles.grid} ${styles.grid2}`} style={{ marginTop: '2rem' }}>
            {/* Service 4 */}
            <div className={styles.card} style={{ 
              transition: 'all 0.4s ease',
              border: '1px solid #e5e7eb',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #7c3aed, #8b5cf6)',
                borderRadius: '1rem 1rem 0 0'
              }}></div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem', 
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}>🔄</span>
                <h3 className={styles.heading3} style={{ color: '#111827' }}>Follow-Up & Coordination Support</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Tracking pending actions</span>
                </li>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Coordinating status confirmations with attorneys or firm staff</span>
                </li>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Escalating approaching deadlines</span>
                </li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className={styles.card} style={{ 
              transition: 'all 0.4s ease',
              border: '1px solid #e5e7eb',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #d97706, #f59e0b)',
                borderRadius: '1rem 1rem 0 0'
              }}></div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem', 
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}>📋</span>
                <h3 className={styles.heading3} style={{ color: '#111827' }}>Weekly Status Reporting</h3>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Clear, structured reports covering:
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#1d4ed8', marginRight: '0.5rem' }}>✓</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Open matters</span>
                </li>
                <li className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#1d4ed8', marginRight: '0.5rem' }}>✓</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Upcoming deadlines</span>
                </li>
                <li className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#1d4ed8', marginRight: '0.5rem' }}>✓</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Actions taken</span>
                </li>
                <li className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#1d4ed8', marginRight: '0.5rem' }}>✓</span>
                  <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>Items requiring attention</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={styles.textCenter} style={{ marginTop: '3rem' }}>
            <Link href="/services" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`} style={{
              padding: '1rem 2rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)'
            }}>
              View Detailed Services →
            </Link>
          </div>
        </div>
      </section>

      {/* === ABOUT OUR APPROACH SECTION (ADDED) === */}
      <section className={styles.section} style={{ 
        padding: isMobile ? '3rem 0' : '5rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ letterSpacing: '-0.025em' }}>About Our Approach</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#6b7280'
            }}>
              How we deliver reliable legal operations support
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            padding: isMobile ? '1.5rem' : '2.5rem', 
            borderRadius: '1.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb'
          }}>
            <div className={`${styles.grid} ${styles.grid2}`} style={{ alignItems: 'center', gap: isMobile ? '2rem' : '3rem' }}>
              <div>
                <p className={styles.paragraph} style={{ 
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  marginBottom: '1.5rem',
                  lineHeight: '1.7'
                }}>
                  <strong>We provide offshore legal operations support focused strictly on non-legal administrative work</strong> that law firms rely on to maintain consistency and control.
                </p>
                
                <p className={styles.paragraph} style={{ 
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  marginBottom: '1.5rem',
                  lineHeight: '1.7'
                }}>
                  <strong>Our approach is process-driven and risk-aware.</strong> We work within clearly defined scopes, respect confidentiality requirements, and integrate with existing workflows rather than disrupting them.
                </p>
                
                <p className={styles.paragraph} style={{ 
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  lineHeight: '1.7'
                }}>
                  <strong>This model is designed for firms that value clarity, accountability, and reliable follow-through</strong> — without increasing internal headcount or administrative overhead.
                </p>
              </div>
              
              <div style={{ 
                background: '#f0f9ff', 
                padding: isMobile ? '1.5rem' : '2rem', 
                borderRadius: '1rem',
                border: '1px solid #dbeafe'
              }}>
                <h3 className={styles.heading3} style={{ color: '#1d4ed8', marginBottom: '1rem', fontSize: '1.25rem' }}>
                  Key Features
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Strictly non-legal administrative scope',
                    'Clear scope definition and boundaries',
                    'Confidentiality and NDA protection',
                    'Workflow integration (no disruption)',
                    'Process-driven methodology',
                    'Risk-aware operations'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ 
                        background: '#dbeafe', 
                        color: '#1d4ed8',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '0.75rem',
                        flexShrink: 0,
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                      }}>
                        ✓
                      </span>
                      <span style={{ fontSize: '0.95rem', color: '#4b5563' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === HOW WE WORK SECTION === */}
      <section className={styles.section} style={{ 
        padding: isMobile ? '3rem 0' : '5rem 0',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
      }}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ letterSpacing: '-0.025em' }}>How We Work</h2>
            <p className={styles.paragraph} style={{ 
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#6b7280'
            }}>
              Our engagement model is designed to be <strong>simple, transparent, and low-risk</strong>
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ alignItems: 'center', gap: isMobile ? '2rem' : '3rem' }}>
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)', 
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(29, 78, 216, 0.3)'
                  }}>
                    ✓
                  </span>
                  <div>
                    <h3 className={styles.heading3} style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Work Alongside Your Systems</h3>
                    <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                      We work alongside your existing systems (e.g. Clio, MyCase, PracticePanther) 
                      or maintain structured trackers where required
                    </p>
                  </div>
                </li>
                
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    background: 'linear-gradient(135deg, #0f766e, #14b8a6)', 
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(15, 118, 110, 0.3)'
                  }}>
                    ✓
                  </span>
                  <div>
                    <h3 className={styles.heading3} style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Secure Access</h3>
                    <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                      Access is always limited, role-based, and agreed in advance
                    </p>
                  </div>
                </li>
                
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)', 
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(124, 58, 237, 0.3)'
                  }}>
                    ✓
                  </span>
                  <div>
                    <h3 className={styles.heading3} style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Confidentiality & NDA</h3>
                    <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                      We operate under strict confidentiality and NDA protections
                    </p>
                  </div>
                </li>
                
                <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0' }}>
                  <span style={{ 
                    background: 'linear-gradient(135deg, #d97706, #f59e0b)', 
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(217, 119, 6, 0.3)'
                  }}>
                    ✓
                  </span>
                  <div>
                    <h3 className={styles.heading3} style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Start with Pilot</h3>
                    <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                      Engagements typically begin with a small pilot before scaling
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              color: 'white',
              boxShadow: '0 10px 40px rgba(29, 78, 216, 0.3)'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🎯</div>
              <h3 className={styles.heading3} style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>
                Our Role is Simple
              </h3>
              <p style={{ 
                fontSize: isMobile ? '1rem' : '1.125rem',
                fontWeight: '500',
                color: '#dbeafe',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                To provide consistency, visibility, and operational discipline.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/how-we-work" className={`${styles.btn} ${styles.btnOutline}`} style={{ 
                  color: 'white',
                  borderColor: 'white',
                  background: 'transparent',
                  fontWeight: '600'
                }}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHO WE SUPPORT SECTION === */}
      <section className={`${styles.section} ${styles.sectionDark}`} style={{ padding: isMobile ? '3rem 0' : '5rem 0' }}>
        <div className={styles.container}>
          <div className={styles.textCenter} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ color: 'white', letterSpacing: '-0.025em' }}>Who We Support</h2>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)'
            }}>
              <h3 className={styles.heading3} style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>
                Ideal Clients
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Small and mid-size U.S. law firms',
                  'Debt collection and consumer litigation firms',
                  'Firms handling high-volume matters',
                  'Legal teams seeking administrative support without expanding internal staff'
                ].map((item, idx) => (
                  <li key={idx} className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#60a5fa', marginRight: '0.75rem', marginTop: '0.25rem', fontSize: '1.125rem' }}>•</span>
                    <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)'
            }}>
              <h3 className={styles.heading3} style={{ color: 'white', marginBottom: '1rem', fontSize: '1.25rem' }}>
                Why Legal Operations Support Matters
              </h3>
              <p style={{ color: '#d1d5db', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Even with modern case-management software, many firms experience:
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Inconsistent system updates',
                  'Missed or late follow-ups',
                  'Fragmented information across emails and platforms',
                  'Administrative work pulling time away from billable activity'
                ].map((item, idx) => (
                  <li key={idx} className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#fbbf24', marginRight: '0.75rem', marginTop: '0.25rem' }}>•</span>
                    <span style={{ color: '#d1d5db', fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ color: '#93c5fd', marginTop: '1rem', fontWeight: '600', fontSize: '0.95rem' }}>
                We help address these gaps by owning the tracking and reporting process, 
                so attorneys can focus on substantive legal work.
              </p>
            </div>
          </div>
          
          <div className={styles.textCenter} style={{ marginTop: '3rem' }}>
            <Link href="/who-we-support" className={`${styles.btn} ${styles.btnOutline}`} style={{ 
              color: 'white',
              borderColor: 'white',
              background: 'transparent',
              fontWeight: '600'
            }}>
              View Details →
            </Link>
          </div>
        </div>
      </section>

      {/* === WHAT WE DON'T DO SECTION === */}
      <section className={styles.section} style={{ padding: isMobile ? '3rem 0' : '5rem 0' }}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ letterSpacing: '-0.025em' }}>What We Do NOT Do</h2>
            <p className={styles.paragraph} style={{ 
              fontSize: isMobile ? '1rem' : '1.125rem',
              color: '#6b7280'
            }}>
              To maintain clarity and compliance, we do <strong>not</strong>:
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            <div style={{ 
              background: '#f8fafc', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
            }}>
              <div className={styles.flex} style={{ alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ 
                  background: 'linear-gradient(135deg, #6b7280, #9ca3af)', 
                  color: 'white',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 10px rgba(107, 114, 128, 0.3)'
                }}>
                  ✓
                </span>
                <h3 className={styles.heading3} style={{ color: '#4b5563', fontSize: '1.25rem' }}>Legal Advice & Representation</h3>
              </div>
              <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                We do not provide legal advice, draft pleadings or legal opinions, 
                or represent clients before any court or authority.
              </p>
            </div>
            
            <div style={{ 
              background: '#f8fafc', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
            }}>
              <div className={styles.flex} style={{ alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ 
                  background: 'linear-gradient(135deg, #6b7280, #9ca3af)', 
                  color: 'white',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 10px rgba(107, 114, 128, 0.3)'
                }}>
                  ✓
                </span>
                <h3 className={styles.heading3} style={{ color: '#4b5563', fontSize: '1.25rem' }}>Legal Decision Making</h3>
              </div>
              <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                We do not make legal or strategic decisions, nor do we access 
                trust accounts or billing systems.
              </p>
            </div>
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 
            padding: isMobile ? '1.5rem' : '2rem', 
            borderRadius: '1.5rem',
            marginTop: '2rem',
            textAlign: 'center',
            border: '1px solid #dbeafe',
            boxShadow: '0 8px 30px rgba(219, 234, 254, 0.4)'
          }}>
            <p className={styles.paragraph} style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem',
              fontWeight: '600',
              color: '#1d4ed8',
              margin: 0
            }}>
              Our services are limited to <strong>non-legal administrative support only</strong>.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/what-we-dont-do" className={`${styles.btn} ${styles.btnOutline}`} style={{ 
                color: '#1d4ed8',
                borderColor: '#1d4ed8',
                background: 'transparent',
                fontWeight: '600'
              }}>
                Full Service Exclusions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === ENGAGEMENT MODEL SECTION === */}
      <section className={`${styles.section} ${styles.sectionLight}`} style={{ padding: isMobile ? '3rem 0' : '5rem 0' }}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ letterSpacing: '-0.025em' }}>Engagement Model</h2>
          </div>
          
          <div className={`${styles.grid} ${styles.grid3}`} style={{ gap: isMobile ? '2rem' : '1.5rem' }}>
            <div className={styles.card} style={{ 
              textAlign: 'center',
              border: '1px solid #e5e7eb',
              transition: 'all 0.4s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                display: 'inline-block',
                background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                padding: '1rem',
                borderRadius: '50%'
              }}>
                📅
              </div>
              <h3 className={styles.heading3}>Monthly Retainer</h3>
              <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                Predictable monthly support based on your firm's needs
              </p>
            </div>
            
            <div className={styles.card} style={{ 
              textAlign: 'center',
              border: '1px solid #e5e7eb',
              transition: 'all 0.4s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                display: 'inline-block',
                background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                padding: '1rem',
                borderRadius: '50%'
              }}>
                🔬
              </div>
              <h3 className={styles.heading3}>Pilot Engagements</h3>
              <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                Start small to evaluate our services with minimal commitment
              </p>
            </div>
            
            <div className={styles.card} style={{ 
              textAlign: 'center',
              border: '1px solid #e5e7eb',
              transition: 'all 0.4s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                display: 'inline-block',
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '1rem',
                borderRadius: '50%'
              }}>
                ⚖️
              </div>
              <h3 className={styles.heading3}>Scalable Pricing</h3>
              <p className={styles.textGray} style={{ fontSize: '0.95rem' }}>
                Pricing structured to be predictable and scalable based on case volume
              </p>
            </div>
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', 
            padding: isMobile ? '1.5rem' : '2rem', 
            borderRadius: '1.5rem',
            marginTop: '3rem',
            boxShadow: '0 10px 40px rgba(29, 78, 216, 0.3)',
            textAlign: 'center',
            color: 'white'
          }}>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.125rem',
              marginBottom: '1.5rem',
              fontWeight: '500',
              color: '#dbeafe'
            }}>
              <strong>Scope</strong> defined based on case volume and reporting requirements
            </p>
            <Link href="/contact" className={`${styles.btn}`} style={{ 
              background: 'white', 
              color: '#1d4ed8', 
              padding: '0.875rem 1.5rem',
              fontWeight: '600',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(255, 255, 255, 0.3)'
            }}>
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION (SIMPLIFIED - NO CONTACT INFO) === */}
      <section className={styles.section} style={{ 
        background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', 
        color: 'white',
        padding: isMobile ? '4rem 0' : '6rem 0'
      }}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <h2 className={styles.heading2} style={{ 
            color: 'white', 
            marginBottom: '1rem',
            fontSize: isMobile ? '2rem' : '2.5rem',
            letterSpacing: '-0.025em'
          }}>
            Ready to Streamline Your Operations?
          </h2>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.25rem', 
            marginBottom: '2rem', 
            maxWidth: '800px', 
            margin: '0 auto 2rem',
            color: '#dbeafe',
            lineHeight: '1.6'
          }}>
            Start with a structured pilot engagement to experience how our structured approach 
            can improve your firm's operational efficiency.
          </p>
          
          <div className={styles.flex} style={{ 
            justifyContent: 'center', 
            gap: '1rem', 
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <Link 
              href="/contact"
              style={{ 
                background: 'white', 
                color: '#1d4ed8', 
                padding: isMobile ? '1rem 1.5rem' : '1.125rem 2rem', 
                borderRadius: '0.5rem', 
                border: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '1rem' : '1.125rem',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                width: isMobile ? '100%' : 'auto',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.3)'
              }}
            >
              Start Pilot Program
            </Link>
            <Link 
              href="/contact"
              style={{ 
                background: 'transparent', 
                color: 'white', 
                padding: isMobile ? '1rem 1.5rem' : '1.125rem 2rem', 
                borderRadius: '0.5rem', 
                border: '2px solid rgba(255, 255, 255, 0.3)',
                fontWeight: '600',
                fontSize: isMobile ? '1rem' : '1.125rem',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                width: isMobile ? '100%' : 'auto',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(8px)'
              }}
            >
              Schedule Intro Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}