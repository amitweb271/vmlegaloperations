"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.bgGradient} style={{ 
        minHeight: isMobile ? '80vh' : '90vh', 
        display: 'flex', 
        alignItems: 'center'
      }}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ maxWidth: isMobile ? '100%' : '800px', margin: '0 auto' }}>
            {/* Badge */}
            <div style={{ 
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
            
            {/* Main Heading */}
            <h1 className={styles.heading1} style={{ 
              fontSize: isMobile ? '2rem' : '3.5rem',
              lineHeight: isMobile ? '1.2' : '1.1',
              marginBottom: isMobile ? '1.5rem' : '2rem'
            }}>
              About VM Legal Operations
            </h1>
            
            {/* Description */}
            <p className={styles.paragraph} style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem',
              marginBottom: isMobile ? '2rem' : '3rem'
            }}>
              VM Legal Operations provides <strong>offshore legal operations support</strong> to
              U.S. law firms, legal departments, and collection agencies.
            </p>
            
            {/* Key Points */}
            <div style={{ 
              background: 'white', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{ 
                fontSize: isMobile ? '1.125rem' : '1.5rem',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '1rem'
              }}>
                Scope of Services
              </h3>
              <p className={styles.paragraph} style={{ 
                fontSize: isMobile ? '1rem' : '1.125rem',
                marginBottom: '1rem',
                lineHeight: '1.7'
              }}>
                VM Legal Operations provides <strong>strictly non-legal administrative support</strong> for law firm operations.
              </p>
              <p className={styles.paragraph} style={{ 
                fontSize: isMobile ? '1rem' : '1.125rem',
                lineHeight: '1.7',
                margin: 0
              }}>
                We do not provide legal advice, draft legal documents, represent clients in court, or make legal decisions.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className={`${styles.flex} ${isMobile ? styles.flexCol : ''}`} style={{ 
              gap: isMobile ? '1rem' : '1rem',
              justifyContent: 'center'
            }}>
              <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`} style={{
                width: isMobile ? '100%' : 'auto',
                textAlign: 'center'
              }}>
                Start Pilot Program →
              </Link>
              <Link href="/contact" className={`${styles.btn} ${styles.btnOutline} ${styles.btnLarge}`} style={{
                width: isMobile ? '100%' : 'auto',
                textAlign: 'center'
              }}>
                Schedule Intro Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Approach Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>About Our Approach</h2>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`} style={{ alignItems: 'center', gap: isMobile ? '2rem' : '3rem' }}>
            <div>
              <p className={styles.paragraph} style={{ 
                fontSize: isMobile ? '1rem' : '1.125rem',
                marginBottom: '1.5rem'
              }}>
                We provide offshore legal operations support focused strictly on non-legal administrative work that law firms rely on to maintain consistency and control.
              </p>
              
              <p className={styles.paragraph} style={{ 
                fontSize: isMobile ? '1rem' : '1.125rem',
                marginBottom: '1.5rem'
              }}>
                Our approach is process-driven and risk-aware. We work within clearly defined scopes, respect confidentiality requirements, and integrate with existing workflows rather than disrupting them.
              </p>
              
              <p className={styles.paragraph} style={{ 
                fontSize: isMobile ? '1rem' : '1.125rem'
              }}>
                This model is designed for firms that value clarity, accountability, and reliable follow-through — without increasing internal headcount or administrative overhead.
              </p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: isMobile ? '1.5rem' : '2rem', 
              borderRadius: '1rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h3 className={styles.heading3} style={{ color: '#1d4ed8', marginBottom: '1rem' }}>
                Our Core Principles
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Clarity in scope and boundaries',
                  'Consistency in tracking and reporting',
                  'Control through structured processes',
                  'Confidentiality and data protection',
                  'Process-driven methodology'
                ].map((item, idx) => (
                  <li key={idx} className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ color: '#10b981', marginRight: '0.5rem', fontSize: '1.25rem' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.textCenterMobile} style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
            <h2 className={styles.heading2}>What We Do</h2>
            <p className={styles.paragraph} style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: isMobile ? '1rem' : '1.125rem'
            }}>
              Day-to-day legal operations and case coordination support
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid3}`} style={{ gap: isMobile ? '2rem' : '1.5rem' }}>
            <div className={styles.card} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h3 className={styles.heading3}>Case Status Tracking</h3>
              <p className={styles.textGray}>
                Track case stages and progress across matters
              </p>
            </div>
            
            <div className={styles.card} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏰</div>
              <h3 className={styles.heading3}>Deadline Monitoring</h3>
              <p className={styles.textGray}>
                Monitor court-driven and rule-based deadlines
              </p>
            </div>
            
            <div className={styles.card} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
              <h3 className={styles.heading3}>Court Monitoring</h3>
              <p className={styles.textGray}>
                Track docket updates and court notifications
              </p>
            </div>
          </div>
          
          <div className={styles.textCenter} style={{ marginTop: '3rem' }}>
            <Link href="/services" className={`${styles.btn} ${styles.btnPrimary}`}>
              View All Services →
            </Link>
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
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
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
              fontSize: isMobile ? '0.95rem' : '1.125rem',
              fontWeight: '600'
            }}>
              Our services are strictly non-legal and administrative in nature.
            </p>
            <p style={{ 
              color: '#9ca3af',
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions.
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
            Begin with a structured pilot engagement to experience our approach.
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