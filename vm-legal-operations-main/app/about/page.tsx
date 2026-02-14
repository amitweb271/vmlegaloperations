"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';
// Lucide Icons import
import { 
  Award,
  ShieldCheck,
  Target,
  Users,
  Clock,
  BarChart3,
  Building2,
  FileText,
  Calendar,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Scale,
  Gavel,
  Lock,
  Flag
} from 'lucide-react';

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
    <div className={styles.premiumContainer}>
      {/* === PREMIUM HERO SECTION === */}
      <section className={styles.premiumHero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            {/* Premium Badge */}
            <div className={styles.premiumBadge}>
              <Award className={styles.badgeIcon} />
              <span>A service division of VM Tech Solutions</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={styles.premiumHeading}>
              About VM Legal Operations
            </h1>
            
            {/* Description */}
            <h2 className={styles.subheading}>
              We provide <span className={styles.gradientText}>offshore legal operations support</span> to
              U.S. law firms, legal departments, and collection agencies.
            </h2>
            
            {/* Scope Card */}
            <div className={styles.scopeCard}>
              <div className={styles.scopeHeader}>
                <ShieldCheck className={styles.scopeIcon} />
                <h3>Scope of Services</h3>
              </div>
              <div className={styles.scopeContent}>
                <p>
                  VM Legal Operations provides <strong>strictly non-legal administrative support</strong> for law firm operations. 
                  We do not provide legal advice, draft legal documents, represent clients in court, or make legal decisions.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.primaryButton}>
                <span>Start Pilot Program</span>
                <ArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                <Phone className={styles.buttonIcon} />
                <span>Schedule Intro Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === OUR APPROACH SECTION === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Approach & Philosophy</h2>
            <p className={styles.sectionDescription}>
              How we deliver reliable legal operations support
            </p>
          </div>
          
          <div className={styles.approachContainer}>
            <div className={styles.approachContent}>
              <div className={styles.approachText}>
                <div className={styles.approachParagraph}>
                  <strong>We provide offshore legal operations support focused strictly on non-legal administrative work</strong> that law firms rely on to maintain consistency and control.
                </div>
                <div className={styles.approachParagraph}>
                  <strong>Our approach is process-driven and risk-aware.</strong> We work within clearly defined scopes, respect confidentiality requirements, and integrate with existing workflows rather than disrupting them.
                </div>
                <div className={styles.approachParagraph}>
                  <strong>This model is designed for firms that value clarity, accountability, and reliable follow-through</strong> — without increasing internal headcount or administrative overhead.
                </div>
              </div>
              
              <div className={styles.featuresCard}>
                <div className={styles.featuresHeader}>
                  <Target className={styles.featuresIcon} />
                  <h3 className={styles.featuresTitle}>Our Core Principles</h3>
                </div>
                <ul className={styles.featuresList}>
                  {[
                    'Clarity in scope and boundaries',
                    'Consistency in tracking and reporting',
                    'Control through structured processes',
                    'Confidentiality and data protection',
                    'Process-driven methodology',
                    'Risk-aware operations'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <CheckCircle2 className={styles.featureIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT WE DO SECTION === */}
      <section className={styles.sectionGray}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionDescription}>
              Day-to-day legal operations and case coordination support
            </p>
          </div>
          
          <div className={styles.servicesGrid}>
            {/* Case Status Tracking */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIconContainer}>
                  <BarChart3 className={styles.serviceIcon} />
                </div>
                <h3 className={styles.serviceTitle}>Case Status Tracking</h3>
              </div>
              <div className={styles.serviceContent}>
                <p className={styles.serviceDescription}>
                  Track case stages and progress across matters with structured reporting
                </p>
                <ul className={styles.serviceList}>
                  <li className={styles.serviceListItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span>Real-time case progress monitoring</span>
                  </li>
                  <li className={styles.serviceListItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span>Structured tracker maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Deadline Monitoring */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIconContainer}>
                  <Clock className={styles.serviceIcon} />
                </div>
                <h3 className={styles.serviceTitle}>Deadline Monitoring</h3>
              </div>
              <div className={styles.serviceContent}>
                <p className={styles.serviceDescription}>
                  Monitor court-driven and rule-based deadlines with proactive alerts
                </p>
                <ul className={styles.serviceList}>
                  <li className={styles.serviceListItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span>Court deadline tracking</span>
                  </li>
                  <li className={styles.serviceListItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span>Proactive action flagging</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Court Monitoring */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIconContainer}>
                  <Building2 className={styles.serviceIcon} />
                </div>
                <h3 className={styles.serviceTitle}>Court Monitoring</h3>
              </div>
              <div className={styles.serviceContent}>
                <p className={styles.serviceDescription}>
                  Track docket updates and court notifications with status reporting
                </p>
                <ul className={styles.serviceList}>
                  <li className={styles.serviceListItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span>Docket update tracking</span>
                  </li>
                  <li className={styles.serviceListItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span>Court notification monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Follow-up Coordination */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIconContainer}>
                  <FileText className={styles.serviceIcon} />
                </div>
                <h3 className={styles.serviceTitle}>Follow-up & Coordination</h3>
              </div>
              <div className={styles.serviceContent}>
                <p className={styles.serviceDescription}>
                  Coordinate status confirmations and escalate approaching deadlines
                </p>
                <ul className={styles.serviceList}>
                  <li className={styles.serviceListItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span>Status confirmation coordination</span>
                  </li>
                  <li className={styles.serviceListItem}>
                    <CheckCircle2 className={styles.listIcon} />
                    <span>Deadline escalation management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.centerButton}>
            <Link href="/services" className={styles.viewButton}>
              <span>View All Services</span>
              <ChevronRight className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.scopeNotice}>
            <div className={styles.scopeIconContainer}>
              <Scale className={styles.scopeNoticeIcon} />
            </div>
            <h3 className={styles.scopeNoticeTitle}>Scope of Services</h3>
            <p className={styles.scopeNoticeText}>
              Our services are <strong>strictly non-legal and administrative</strong> in nature.
            </p>
            <p className={styles.scopeNoticeDescription}>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions.
            </p>
          </div>
        </div>
      </section>

      {/* === OUR VALUES SECTION === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionDescription}>
              The principles that guide our operations
            </p>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIconContainer}>
                <Lock className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueTitle}>Confidentiality</h3>
              <p className={styles.valueDescription}>
                Strict data protection and NDA compliance for all client information
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIconContainer}>
                <Target className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueTitle}>Precision</h3>
              <p className={styles.valueDescription}>
                Accurate tracking and reporting with attention to detail
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIconContainer}>
                <Users className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueTitle}>Collaboration</h3>
              <p className={styles.valueDescription}>
                Seamless integration with existing firm workflows and systems
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIconContainer}>
                <Flag className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueTitle}>Reliability</h3>
              <p className={styles.valueDescription}>
                Consistent performance and dependable follow-through
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIconContainer}>
              <Zap className={styles.ctaIcon} />
            </div>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaDescription}>
              Begin with a structured pilot engagement to experience our approach and see the difference 
              in your firm's operational efficiency.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButtonPrimary}>
                Start Pilot Program
              </Link>
              <Link href="/contact" className={styles.ctaButtonSecondary}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}