// components/Hero.tsx
"use client";

import styles from './Hero.module.css';

export default function Hero() {
  const trustPoints = [
    { icon: '🔒', text: 'NDA Protected' },
    { icon: '🛡️', text: '100% Confidential' },
    { icon: '🇺🇸', text: 'U.S. Law Focused' },
    { icon: '📊', text: 'Monthly Reporting' },
  ];

  return (
    <section className={styles.hero}>
      {/* Background Pattern */}
      <div className={styles.heroPattern}></div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Badge */}
          <div className={`${styles.badge} ${styles.animateFadeIn}`}>
            A service division of VM Tech Solutions
          </div>
          
          {/* Main Headline */}
          <h1 className={`${styles.heading} ${styles.animateFadeIn}`}>
            Offshore Legal Operations &<br/>
            <span className={styles.headingPrimary}>Case Management Support</span><br/>
            for U.S. Law Firms
          </h1>
          
          {/* Tagline */}
          <div className={`${styles.taglineContainer} ${styles.animateFadeIn}`}>
            <span className={`${styles.taglineItem} ${styles.taglineClarity}`}>
              Clarity.
            </span>
            <span className={`${styles.taglineItem} ${styles.taglineConsistency}`}>
              Consistency.
            </span>
            <span className={`${styles.taglineItem} ${styles.taglineControl}`}>
              Control.
            </span>
          </div>
          
          {/* Description */}
          <p className={`${styles.description} ${styles.animateFadeIn}`}>
            Reliable <span className={styles.descriptionStrong}>non-legal administrative support</span> that keeps your cases on track, 
            deadlines monitored, and status updated — <span className={styles.descriptionBold}>without adding internal headcount.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className={`${styles.ctaContainer} ${styles.animateFadeIn}`}>
            <button className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
              Start Pilot Program →
            </button>
            <button className={`${styles.ctaButton} ${styles.ctaOutline}`}>
              Schedule Intro Call
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className={`${styles.trustSection} ${styles.animateSlideUp}`}>
            <p className={styles.trustLabel}>Trusted by U.S. law firms for:</p>
            <div className={styles.trustGrid}>
              {trustPoints.map((point, index) => (
                <div key={index} className={styles.trustItem}>
                  <span className={styles.trustIcon}>{point.icon}</span>
                  <span className={styles.trustText}>{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}