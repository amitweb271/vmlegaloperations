"use client";

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <h3 className={styles.companyTitle}>VM Legal Operations</h3>
            <p className={styles.companySubtitle}>
              (Clarity. Consistency. Control.)
            </p>
            <p className={styles.companyDescription}>
              A service division of <strong>VM Tech Solutions</strong><br/>
              Providing <strong>offshore legal operations support</strong> to U.S. law firms, 
              legal departments, and collection agencies.
            </p>
            <div className={styles.serviceNotice}>
              <p>Our services are <strong>strictly non-legal and administrative in nature</strong>.</p>
            </div>
          </div>
          
          {/* What We Do */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>What We Do</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/services" className={styles.footerLink}>Case Status Tracking</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Deadline & Timeline Monitoring</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Court Notification & Docket Monitoring</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Follow-Up & Coordination Support</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Weekly Status Reporting</Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/how-we-work" className={styles.footerLink}>How We Work</Link></li>
              <li><Link href="/who-we-support" className={styles.footerLink}>Who We Support</Link></li>
              <li><Link href="/what-we-dont-do" className={styles.footerLink}>What We Don't Do</Link></li>
              <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact & Compliance */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact & Info</h4>
            <ul className={styles.contactInfo}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>🌐</span>
                <a href="http://www.vmlegaloperations.com" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                  www.vmlegaloperations.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <a href="mailto:hello@vmlegaloperations.com" className={styles.contactLink}>
                  hello@vmlegaloperations.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.contactText}>India (serving U.S. clients remotely)</span>
              </li>
            </ul>
            
            <div className={styles.complianceSection}>
              <h5 className={styles.complianceTitle}>Compliance Notice</h5>
              <p className={styles.complianceText}>
                We do <strong>not</strong> provide legal advice, draft legal documents, 
                or represent clients in court.
              </p>
            </div>
            
            <Link href="/contact" className={styles.ctaButton}>
              Start Pilot Engagement →
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} VM Legal Operations. A service division of VM Tech Solutions. All rights reserved.
            </p>
            <p className={styles.disclaimer}>
              This service is for U.S. law firms only. Our services are limited to non-legal administrative support only.
              Pilot engagements are limited in scope and designed for evaluation purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}