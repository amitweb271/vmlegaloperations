// components/Footer.tsx
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
            <h4>VM Legal Operations</h4>
            <p>
              A service division of VM Tech Solutions<br/>
              Providing offshore legal operations support to U.S. law firms.
            </p>
            <div className={styles.location}>
              <span>📍</span>
              <span>India (Serving U.S. clients remotely)</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4>Services</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/services" className={styles.footerLink}>Case Status Tracking</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Deadline Monitoring</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Court Notification</Link></li>
              <li><Link href="/services" className={styles.footerLink}>Weekly Reporting</Link></li>
            </ul>
          </div>
          
          {/* Compliance */}
          <div>
            <h4>Compliance</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/what-we-dont-do" className={styles.footerLink}>What We Don't Do</Link></li>
              <li><Link href="#" className={styles.footerLink}>NDA Protection</Link></li>
              <li><Link href="#" className={styles.footerLink}>Confidentiality</Link></li>
              <li><Link href="#" className={styles.footerLink}>Data Security</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4>Contact</h4>
            <ul className={styles.contactInfo}>
              <li className={styles.contactItem}>
                <span>🌐</span>
                <span>www.vmlegaloperations.com</span>
              </li>
              <li className={styles.contactItem}>
                <span>📧</span>
                <span>hello@vmlegaloperations.com</span>
              </li>
              <li>
                <Link href="/contact" className={styles.footerButton}>
                  Request Proposal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            © {currentYear} VM Legal Operations. All rights reserved.
          </p>
          <p>
            This service is for U.S. law firms only. We do not provide legal services or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}