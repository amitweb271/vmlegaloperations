// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import styles from './styles.module.css';

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
      {/* Hero Section - Mobile Responsive */}
      <section className={styles.bgGradient} style={{ 
        minHeight: isMobile ? '90vh' : '100vh', 
        display: 'flex', 
        alignItems: 'center',
        padding: isMobile ? '2rem 0' : '0'
      }}>
        <div className={styles.container}>
          <div style={{ maxWidth: isMobile ? '100%' : '800px' }}>
            {/* Badge */}
            <div className={styles.textCenterMobile} style={{ 
              display: 'inline-block', 
              backgroundColor: '#dbeafe', 
              color: '#1d4ed8', 
              padding: isMobile ? '0.5rem 0.75rem' : '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              fontWeight: '600',
              marginBottom: isMobile ? '1.5rem' : '2rem'
            }}>
              A service division of VM Tech Solutions
            </div>
            
            {/* Main Heading - Responsive */}
            <h1 className={`${styles.heading1} ${styles.textCenterMobile}`} style={{ 
              fontSize: isMobile ? '2rem' : '3.5rem',
              lineHeight: isMobile ? '1.2' : '1.1'
            }}>
              Offshore Legal Operations &<br className={isMobile ? styles.hideOnMobile : ''}/>
              <span className={styles.textPrimary}>Case Management Support</span><br/>
              for U.S. Law Firms
            </h1>
            
            {/* Tagline - Mobile Stack */}
            <div className={`${styles.flex} ${isMobile ? styles.flexCol : styles.flexRow}`} style={{ 
              gap: isMobile ? '0.75rem' : '1rem', 
              marginBottom: isMobile ? '1.5rem' : '2rem',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <span style={{ 
                background: '#dbeafe', 
                color: '#1d4ed8', 
                padding: isMobile ? '0.5rem 1rem' : '0.5rem 1.5rem', 
                borderRadius: '2rem', 
                fontWeight: '800', 
                fontSize: isMobile ? '1.125rem' : '1.5rem',
                textAlign: 'center'
              }}>
                Clarity.
              </span>
              <span style={{ 
                backgroundColor: '#ccfbf1', 
                color: '#0f766e', 
                padding: isMobile ? '0.5rem 1rem' : '0.5rem 1.5rem', 
                borderRadius: '2rem', 
                fontWeight: '800', 
                fontSize: isMobile ? '1.125rem' : '1.5rem',
                textAlign: 'center'
              }}>
                Consistency.
              </span>
              <span style={{ 
                backgroundColor: '#fee2e2', 
                color: '#dc2626', 
                padding: isMobile ? '0.5rem 1rem' : '0.5rem 1.5rem', 
                borderRadius: '2rem', 
                fontWeight: '800', 
                fontSize: isMobile ? '1.125rem' : '1.5rem',
                textAlign: 'center'
              }}>
                Control.
              </span>
            </div>
            
            {/* Description - Responsive */}
            <p className={styles.textCenterMobile} style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              color: '#4b5563', 
              marginBottom: isMobile ? '2rem' : '3rem',
              lineHeight: '1.7'
            }}>
              Reliable <strong>non-legal administrative support</strong> that keeps your cases on track, 
              deadlines monitored, and status updated — <strong>without adding internal headcount.</strong>
            </p>
            
            {/* CTA Buttons - Mobile Stack */}
            <div className={`${styles.flex} ${isMobile ? styles.flexCol : ''}`} style={{ 
              gap: isMobile ? '1rem' : '1rem',
              marginBottom: isMobile ? '2rem' : '4rem'
            }}>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`} style={{
                width: isMobile ? '100%' : 'auto'
              }}>
                Start Pilot Program →
              </button>
              <button className={`${styles.btn} ${styles.btnOutline} ${styles.btnLarge}`} style={{
                width: isMobile ? '100%' : 'auto'
              }}>
                Schedule Intro Call
              </button>
            </div>
            
            {/* Trust Indicators - Mobile Grid */}
            <div style={{ 
              borderTop: '1px solid #e5e7eb', 
              paddingTop: isMobile ? '1.5rem' : '2rem', 
              marginTop: isMobile ? '2rem' : '4rem' 
            }}>
              <p className={styles.textCenterMobile} style={{ 
                color: '#6b7280', 
                marginBottom: isMobile ? '1rem' : '1.5rem',
                fontSize: isMobile ? '0.875rem' : '1rem'
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
                  <span style={{ fontSize: isMobile ? '1.25rem' : '1.5rem' }}>🔒</span>
                  <span className={styles.fontSemibold} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                    NDA Protected
                  </span>
                </div>
                
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <span style={{ fontSize: isMobile ? '1.25rem' : '1.5rem' }}>🛡️</span>
                  <span className={styles.fontSemibold} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                    Confidential
                  </span>
                </div>
                
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <span style={{ fontSize: isMobile ? '1.25rem' : '1.5rem' }}>🇺🇸</span>
                  <span className={styles.fontSemibold} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                    U.S. Focused
                  </span>
                </div>
                
                <div className={styles.flex} style={{ 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <span style={{ fontSize: isMobile ? '1.25rem' : '1.5rem' }}>📊</span>
                  <span className={styles.fontSemibold} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
                    Monthly Reports
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>What We Do</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: isMobile ? '100%' : '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              Strictly <strong>non-legal administrative support</strong> for law firm operations
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid3}`}>
            {/* Service Card 1 */}
            <div className={styles.card}>
              <div className={styles.flex} style={{ 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                flexDirection: isMobile ? 'column' : 'row',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <span style={{ 
                  fontSize: isMobile ? '2.5rem' : '3rem', 
                  marginRight: isMobile ? '0' : '1rem',
                  marginBottom: isMobile ? '0.5rem' : '0'
                }}>📊</span>
                <h3 className={styles.heading3} style={{ textAlign: isMobile ? 'center' : 'left' }}>
                  Case Status Tracking
                </h3>
              </div>
              <p className={styles.textGray} style={{ 
                marginBottom: '1.5rem',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                Monitor case stages, maintain structured trackers, update progress.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Stage tracking', 'Progress monitoring', 'System updates', 'Central visibility'].map((feature, idx) => (
                  <li key={idx} className={styles.flex} style={{ 
                    alignItems: 'center', 
                    marginBottom: '0.75rem',
                    justifyContent: isMobile ? 'center' : 'flex-start'
                  }}>
                    <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                    <span style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Service Card 2 */}
            <div className={styles.card}>
              <div className={styles.flex} style={{ 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                flexDirection: isMobile ? 'column' : 'row',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <span style={{ 
                  fontSize: isMobile ? '2.5rem' : '3rem', 
                  marginRight: isMobile ? '0' : '1rem',
                  marginBottom: isMobile ? '0.5rem' : '0'
                }}>⏰</span>
                <h3 className={styles.heading3} style={{ textAlign: isMobile ? 'center' : 'left' }}>
                  Deadline Monitoring
                </h3>
              </div>
              <p className={styles.textGray} style={{ 
                marginBottom: '1.5rem',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                Track court deadlines, flag actions, send alerts.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Court dates', 'Response deadlines', 'Proactive alerts', 'Escalation system'].map((feature, idx) => (
                  <li key={idx} className={styles.flex} style={{ 
                    alignItems: 'center', 
                    marginBottom: '0.75rem',
                    justifyContent: isMobile ? 'center' : 'flex-start'
                  }}>
                    <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                    <span style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Service Card 3 */}
            <div className={styles.card}>
              <div className={styles.flex} style={{ 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                flexDirection: isMobile ? 'column' : 'row',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <span style={{ 
                  fontSize: isMobile ? '2.5rem' : '3rem', 
                  marginRight: isMobile ? '0' : '1rem',
                  marginBottom: isMobile ? '0.5rem' : '0'
                }}>🏛️</span>
                <h3 className={styles.heading3} style={{ textAlign: isMobile ? 'center' : 'left' }}>
                  Court Monitoring
                </h3>
              </div>
              <p className={styles.textGray} style={{ 
                marginBottom: '1.5rem',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                Monitor dockets, filing confirmations, court communications.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Docket updates', 'Email monitoring', 'Status logging', 'Real-time alerts'].map((feature, idx) => (
                  <li key={idx} className={styles.flex} style={{ 
                    alignItems: 'center', 
                    marginBottom: '0.75rem',
                    justifyContent: isMobile ? 'center' : 'flex-start'
                  }}>
                    <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                    <span style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Notice - Mobile Responsive */}
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
            <p className={styles.textGray} style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
              <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong><br/>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work - Mobile Responsive */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.textCenter} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ color: 'white' }}>How We Work</h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              color: '#d1d5db' 
            }}>
              Simple, transparent engagement model
            </p>
          </div>
          
          <div className={styles.grid} style={{ 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? '2rem' : '1.5rem'
          }}>
            {[
              { step: '01', title: 'Pilot Start', desc: 'Begin with small pilot' },
              { step: '02', title: 'Access Setup', desc: 'Secure role-based access' },
              { step: '03', title: 'Weekly Ops', desc: 'Tracking & reporting' },
              { step: '04', title: 'Scale Up', desc: 'Expand based on results' },
            ].map((item, idx) => (
              <div key={idx} className={styles.textCenter}>
                <div style={{ 
                  width: isMobile ? '3.5rem' : '4rem', 
                  height: isMobile ? '3.5rem' : '4rem', 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  {item.step}
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '1.125rem' : '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem', 
                  color: 'white' 
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#d1d5db',
                  fontSize: isMobile ? '0.875rem' : '1rem'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className={styles.section} style={{ 
        background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', 
        color: 'white',
        padding: isMobile ? '2rem 0' : '5rem 0'
      }}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.heading2} style={{ 
              color: 'white', 
              marginBottom: '1rem',
              fontSize: isMobile ? '1.75rem' : '2.5rem'
            }}>
              Ready to Improve Operations?
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              marginBottom: '2rem', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              Start with a risk-free pilot. No long-term commitment.
            </p>
            <div className={styles.flex} style={{ 
              justifyContent: 'center', 
              gap: '1rem', 
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <button style={{ 
                background: 'white', 
                color: '#1d4ed8', 
                padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem', 
                borderRadius: '0.5rem', 
                border: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '1rem' : '1.125rem',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}>
                Start 30-Day Pilot
              </button>
              <button style={{ 
                background: 'transparent', 
                color: 'white', 
                padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem', 
                borderRadius: '0.5rem', 
                border: '2px solid white',
                fontWeight: '600',
                fontSize: isMobile ? '1rem' : '1.125rem',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}>
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}