"use client";

import Link from 'next/link';
import styles from './Footer.module.css';
// Lucide Icons import
import {
  Target,            // Company title
  BarChart3,         // Case Status Tracking
  Clock,             // Deadline Monitoring
  Building2,         // Court Notification
  RefreshCw,         // Follow-up & Coordination
  FileBarChart,      // Weekly Status Reporting
  Users,             // Who We Support
  FileText,          // What We Don't Do
  Info,              // About Us
  Mail,              // Contact
  Globe,             // Website
  MapPin,            // Location
  AlertCircle,       // Compliance Notice
  Rocket,            // Start Pilot
  Shield,            // Service Notice
  Sparkles           // Premium touch
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <div className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.5rem' }}>
              <Target style={{ color: '#2563eb', marginRight: '0.75rem', width: '28px', height: '28px' }} />
              <h3 className={styles.companyTitle}>VM Legal Operations</h3>
            </div>
            <p className={styles.companySubtitle}>
              (Clarity. Consistency. Control.)
            </p>
            <p className={styles.companyDescription}>
              A service division of <strong>VM Tech Solutions</strong><br/>
              Providing <strong>offshore legal operations support</strong> to U.S. law firms, 
              legal departments, and collection agencies.
            </p>
            <div className={styles.serviceNotice}>
              <div className={styles.flex} style={{ alignItems: 'flex-start' }}>
                <Shield style={{ width: '18px', height: '18px', color: '#fbbf24', marginRight: '0.5rem', marginTop: '0.125rem', flexShrink: 0 }} />
                <p>Our services are <strong>strictly non-legal and administrative in nature</strong>.</p>
              </div>
            </div>
          </div>
          
          {/* What We Do */}
          <div className={styles.footerSection}>
            <h4>What We Do</h4>
            <ul className={styles.footerLinks}>
              <li>
                <div className={styles.flex}>
                  <BarChart3 style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/services" className={styles.footerLink}>Case Status Tracking</Link>
                </div>
              </li>
              <li>
                <div className={styles.flex}>
                  <Clock style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/services" className={styles.footerLink}>Deadline & Timeline Monitoring</Link>
                </div>
              </li>
              <li>
                <div className={styles.flex}>
                  <Building2 style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/services" className={styles.footerLink}>Court Notification & Docket Monitoring</Link>
                </div>
              </li>
              <li>
                <div className={styles.flex}>
                  <RefreshCw style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/services" className={styles.footerLink}>Follow-Up & Coordination Support</Link>
                </div>
              </li>
              <li>
                <div className={styles.flex}>
                  <FileBarChart style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/services" className={styles.footerLink}>Weekly Status Reporting</Link>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <div className={styles.flex}>
                  <Rocket style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/how-we-work" className={styles.footerLink}>How We Work</Link>
                </div>
              </li>
              <li>
                <div className={styles.flex}>
                  <Users style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/who-we-support" className={styles.footerLink}>Who We Support</Link>
                </div>
              </li>
              <li>
                <div className={styles.flex}>
                  <FileText style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/what-we-dont-do" className={styles.footerLink}>What We Don't Do</Link>
                </div>
              </li>
              <li>
                <div className={styles.flex}>
                  <Info style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/about" className={styles.footerLink}>About Us</Link>
                </div>
              </li>
              <li>
                <div className={styles.flex}>
                  <Mail style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
                  <Link href="/contact" className={styles.footerLink}>Contact</Link>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact & Compliance */}
          <div className={styles.footerSection}>
            <h4>Contact & Info</h4>
            <ul className={styles.contactInfo}>
              <li className={styles.contactItem}>
                <Globe style={{ width: '18px', height: '18px', color: '#9ca3af' }} />
                <a href="http://www.vmlegaloperations.com" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                  www.vmlegaloperations.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <Mail style={{ width: '18px', height: '18px', color: '#9ca3af' }} />
                <a href="mailto:hello@vmlegaloperations.com" className={styles.contactLink}>
                  hello@vmlegaloperations.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <MapPin style={{ width: '18px', height: '18px', color: '#9ca3af' }} />
                <span className={styles.contactText}>India (serving U.S. clients remotely)</span>
              </li>
            </ul>
            
            <div className={styles.complianceSection}>
              <div className={styles.flex} style={{ alignItems: 'center', marginBottom: '0.5rem' }}>
                <h5 className={styles.complianceTitle}>Compliance Notice</h5>
              </div>
              <p className={styles.complianceText}>
                We do not provide legal advice, draft legal documents, 
                or represent clients in court.
              </p>
            </div>
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