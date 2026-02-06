"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';

export default function HowWeWorkPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const engagementPoints = [
    {
      title: 'Work Alongside Your Systems',
      description: 'We work alongside your existing systems (e.g. Clio, MyCase, PracticePanther) or maintain structured trackers where required.',
      icon: '💻'
    },
    {
      title: 'Secure, Role-Based Access',
      description: 'Access is always limited, role-based, and agreed in advance to ensure data security and confidentiality.',
      icon: '🔐'
    },
    {
      title: 'Strict Confidentiality & NDA',
      description: 'We operate under strict confidentiality and NDA protections, with clear protocols for data handling.',
      icon: '🤝'
    },
    {
      title: 'Start with Pilot',
      description: 'Engagements typically begin with a small pilot before scaling, ensuring minimal risk and maximum value.',
      icon: '🚀'
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
            
            <h1 className={styles.heading1}>How We Work</h1>
            <p className={styles.paragraph} style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              A <strong>simple, transparent, and low-risk engagement model</strong> designed for U.S. law firms
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Model Overview */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>Our Engagement Model</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              Designed to be simple, transparent, and focused on delivering consistent operational support
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            <div>
              <div style={{ 
                background: 'white', 
                padding: isMobile ? '1.5rem' : '2rem', 
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                marginBottom: '2rem'
              }}>
                <h3 className={styles.heading3} style={{ marginBottom: '1rem', color: '#1d4ed8' }}>
                  Our Role is Clear
                </h3>
                <p style={{ 
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}>
                  To provide <strong>consistency, visibility, and operational discipline</strong> 
                  that keeps your cases on track and your team focused on substantive legal work.
                </p>
              </div>
              
              <div style={{ 
                background: '#f0f9ff', 
                padding: isMobile ? '1.5rem' : '2rem', 
                borderRadius: '1rem',
                border: '1px solid #dbeafe'
              }}>
                <h3 className={styles.heading3} style={{ marginBottom: '1rem', color: '#0f766e' }}>
                  Structured Support
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#10b981', marginRight: '0.75rem', fontSize: '1.25rem' }}>•</span>
                    <span style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>Monthly retainer-based support</span>
                  </li>
                  <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#10b981', marginRight: '0.75rem', fontSize: '1.25rem' }}>•</span>
                    <span style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>Pilot engagements available for evaluation</span>
                  </li>
                  <li className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#10b981', marginRight: '0.75rem', fontSize: '1.25rem' }}>•</span>
                    <span style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>Scope defined based on case volume and reporting requirements</span>
                  </li>
                  <li className={styles.flex} style={{ alignItems: 'flex-start' }}>
                    <span style={{ color: '#10b981', marginRight: '0.75rem', fontSize: '1.25rem' }}>•</span>
                    <span style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>Predictable and scalable pricing structure</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className={styles.heading3} style={{ marginBottom: '1.5rem', color: '#111827' }}>
                Key Features of Our Approach
              </h3>
              <div style={{ marginBottom: '2rem' }}>
                {engagementPoints.map((point, index) => (
                  <div key={index} style={{ 
                    background: 'white', 
                    padding: isMobile ? '1rem' : '1.25rem',
                    borderRadius: '0.75rem',
                    marginBottom: '1rem',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div className={styles.flex} style={{ alignItems: 'flex-start', gap: '1rem' }}>
                      <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{point.icon}</span>
                      <div>
                        <h4 style={{ 
                          fontSize: isMobile ? '1rem' : '1.125rem',
                          fontWeight: '600',
                          marginBottom: '0.25rem',
                          color: '#111827'
                        }}>
                          {point.title}
                        </h4>
                        <p style={{ 
                          fontSize: isMobile ? '0.875rem' : '0.95rem',
                          color: '#4b5563',
                          margin: 0
                        }}>
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>Our 4-Step Process</h2>
            <p className={styles.paragraph}>A structured approach to delivering reliable support</p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid4}`}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: isMobile ? '60px' : '80px', 
                height: isMobile ? '60px' : '80px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                border: '3px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                1
              </div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Consultation</h3>
              <p style={{ color: '#6b7280', fontSize: isMobile ? '0.875rem' : '1rem' }}>Understand needs and define scope</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: isMobile ? '60px' : '80px', 
                height: isMobile ? '60px' : '80px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                border: '3px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                2
              </div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Pilot Setup</h3>
              <p style={{ color: '#6b7280', fontSize: isMobile ? '0.875rem' : '1rem' }}>Limited scope implementation</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: isMobile ? '60px' : '80px', 
                height: isMobile ? '60px' : '80px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                border: '3px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                3
              </div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Operations</h3>
              <p style={{ color: '#6b7280', fontSize: isMobile ? '0.875rem' : '1rem' }}>Daily tracking and coordination</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: isMobile ? '60px' : '80px', 
                height: isMobile ? '60px' : '80px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                border: '3px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                4
              </div>
              <h3 style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Review & Scale</h3>
              <p style={{ color: '#6b7280', fontSize: isMobile ? '0.875rem' : '1rem' }}>Performance review and expansion</p>
            </div>
          </div>
          
          {/* Connector lines for desktop */}
          {!isMobile && (
            <div style={{ 
              position: 'relative', 
              height: '2px', 
              background: '#dbeafe',
              width: '80%',
              margin: '0 auto',
              top: '-50px',
              zIndex: -1
            }}>
              <div style={{ 
                position: 'absolute', 
                left: '12.5%', 
                top: '-4px',
                width: '8px', 
                height: '8px', 
                background: '#1d4ed8',
                borderRadius: '50%'
              }}></div>
              <div style={{ 
                position: 'absolute', 
                left: '37.5%', 
                top: '-4px',
                width: '8px', 
                height: '8px', 
                background: '#1d4ed8',
                borderRadius: '50%'
              }}></div>
              <div style={{ 
                position: 'absolute', 
                left: '62.5%', 
                top: '-4px',
                width: '8px', 
                height: '8px', 
                background: '#1d4ed8',
                borderRadius: '50%'
              }}></div>
              <div style={{ 
                position: 'absolute', 
                left: '87.5%', 
                top: '-4px',
                width: '8px', 
                height: '8px', 
                background: '#1d4ed8',
                borderRadius: '50%'
              }}></div>
            </div>
          )}
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.textCenter} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2} style={{ color: 'white' }}>Why This Model Matters</h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              color: '#d1d5db' 
            }}>
              Addressing common challenges in legal operations
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ gap: isMobile ? '2rem' : '3rem' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 className={styles.heading3} style={{ color: 'white', marginBottom: '1rem' }}>
                The Problem We Solve
              </h3>
              <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
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
              <h3 className={styles.heading3} style={{ color: 'white', marginBottom: '1rem' }}>
                Our Solution
              </h3>
              <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                We help address these gaps by:
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Owning the tracking and reporting process',
                  'Providing consistency and operational discipline',
                  'Ensuring nothing falls through the cracks',
                  'Freeing attorneys to focus on substantive legal work'
                ].map((item, idx) => (
                  <li key={idx} className={styles.flex} style={{ alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#10b981', marginRight: '0.75rem', marginTop: '0.25rem' }}>✓</span>
                    <span style={{ color: '#d1d5db' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Services Notice */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ 
            background: '#f8fafc', 
            padding: isMobile ? '1.5rem' : '2rem', 
            borderRadius: '0.5rem',
            borderLeft: '4px solid #1d4ed8',
            border: '1px solid #e2e8f0'
          }}>
            <h3 className={styles.heading3} style={{ 
              color: '#1d4ed8', 
              marginBottom: '1rem',
              fontSize: isMobile ? '1.25rem' : '1.875rem'
            }}>
              Scope of Services
            </h3>
            <p className={styles.textGray} style={{ fontSize: isMobile ? '0.95rem' : '1.125rem' }}>
              <strong>Our services are strictly non-legal and administrative in nature.</strong><br/>
              We do not provide legal advice or legal representation. We work under attorney supervision 
              and follow all applicable regulations and ethical guidelines.
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
          <h2 className={styles.heading2} style={{ color: 'white' }}>Ready to Get Started?</h2>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.25rem', 
            marginBottom: '2rem', 
            maxWidth: '800px', 
            margin: '0 auto 2rem' 
          }}>
            Begin with a structured pilot engagement to experience our structured approach.
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
              Start Pilot Program
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
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}