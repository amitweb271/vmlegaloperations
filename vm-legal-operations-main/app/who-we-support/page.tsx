"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';
// Lucide Icons import
import {
  Award,
  ShieldCheck,
  Scale,
  BarChart3,
  TrendingUp,
  Users,
  AlertCircle,
  Shield,
  Clock,
  DollarSign,
  Eye,
  Settings,
  Target,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  Phone,
  CheckCircle2,
  Building2,
  FileText
} from 'lucide-react';

export default function WhoWeSupportPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const clientTypes = [
    {
      icon: Scale,
      title: 'Small and mid-size U.S. law firms',
      description: 'Firms seeking to optimize operations without expanding internal staff or administrative overhead.',
      color: 'blue'
    },
    {
      icon: BarChart3,
      title: 'Debt collection and consumer litigation firms',
      description: 'High-volume practices requiring systematic case tracking, deadline management, and compliance monitoring.',
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      title: 'Firms handling high-volume matters',
      description: 'Practices with multiple concurrent cases needing consistent tracking and coordination.',
      color: 'violet'
    },
    {
      icon: Users,
      title: 'Legal teams seeking administrative support without expanding internal staff',
      description: 'Legal departments and in-house counsel teams looking to improve operational efficiency.',
      color: 'amber'
    }
  ];

  const challenges = [
    'Inconsistent system updates',
    'Missed or late follow-ups',
    'Fragmented information across emails and platforms',
    'Administrative work pulling time away from billable activity'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Attorneys save significant time on administrative tasks'
    },
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Significant savings compared to hiring in-house staff'
    },
    {
      icon: Eye,
      title: 'Better Visibility',
      description: 'Real-time case status and deadline tracking across all matters'
    },
    {
      icon: Settings,
      title: 'Operational Discipline',
      description: 'Consistent tracking, reporting, and follow-through'
    }
  ];

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
              <span>VM Legal Operations</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={styles.premiumHeading}>
              Who We Support
            </h1>
            
            {/* Description */}
            <h2 className={styles.subheading}>
              Dedicated <span className={styles.gradientText}>offshore legal operations support</span> for specific types of U.S. law practices
            </h2>
            
            {/* Scope Card */}
            <div className={styles.scopeCard}>
              <div className={styles.scopeHeader}>
                <ShieldCheck className={styles.scopeIcon} />
                <h3>Our Ideal Partners</h3>
              </div>
              <div className={styles.scopeContent}>
                <p>
                  We work best with U.S. law firms and legal teams that value efficiency, consistency, 
                  and want to focus on substantive legal work while we handle the operational details.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.primaryButton}>
                <span>Schedule Consultation</span>
                <ArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="/services" className={styles.secondaryButton}>
                <FileText className={styles.buttonIcon} />
                <span>View Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === IDEAL CLIENTS SECTION === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ideal Client Profiles</h2>
            <p className={styles.sectionDescription}>
              We work best with U.S. law firms and legal teams that have these characteristics
            </p>
          </div>
          
          <div className={styles.clientsGrid}>
            {clientTypes.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div key={index} className={styles.clientCard}>
                  <div className={`${styles.clientIconContainer} ${styles[`icon${client.color}`]}`}>
                    <IconComponent className={styles.clientIcon} />
                  </div>
                  <h3 className={styles.clientTitle}>{client.title}</h3>
                  <p className={styles.clientDescription}>{client.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === WHY SUPPORT MATTERS SECTION === */}
      <section className={styles.sectionGray}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Legal Operations Support Matters</h2>
            <p className={styles.sectionDescription}>
              Addressing common challenges in modern legal practice
            </p>
          </div>
          
          <div className={styles.supportGrid}>
            <div className={styles.challengesCard}>
              <div className={styles.challengesHeader}>
                <div className={styles.challengesDot}></div>
                <h3 className={styles.challengesTitle}>The Challenges</h3>
              </div>
              <p className={styles.challengesDescription}>
                Even with modern case-management software, many firms experience:
              </p>
              <ul className={styles.challengesList}>
                {challenges.map((challenge, idx) => (
                  <li key={idx} className={styles.challengesListItem}>
                    <div className={styles.listDot}></div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
              
              <div className={styles.helpCard}>
                <Shield className={styles.helpIcon} />
                <h4 className={styles.helpTitle}>How We Help</h4>
                <p className={styles.helpDescription}>
                  We help address these gaps by <strong>owning the tracking and reporting process</strong>, 
                  so attorneys can focus on substantive legal work.
                </p>
              </div>
            </div>
            
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsHeader}>
                <Shield className={styles.benefitsIcon} />
                <h3 className={styles.benefitsTitle}>Key Benefits</h3>
              </div>
              <div className={styles.benefitsGrid}>
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={idx} className={styles.benefitItem}>
                      <div className={styles.benefitIconContainer}>
                        <IconComponent className={styles.benefitIcon} />
                      </div>
                      <div className={styles.benefitContent}>
                        <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                        <p className={styles.benefitDescription}>{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className={styles.roleHighlight}>
                <Target className={styles.roleIcon} />
                <p className={styles.roleText}>
                  Our role is to provide <strong>consistency, visibility, and operational discipline</strong> 
                  that keeps your cases on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.scopeNotice}>
            <div className={styles.scopeIconContainer}>
              <AlertCircle className={styles.scopeNoticeIcon} />
            </div>
            <h3 className={styles.scopeNoticeTitle}>Scope of Services</h3>
            <p className={styles.scopeNoticeText}>
              <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong>
            </p>
            <p className={styles.scopeNoticeDescription}>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions. Our services are limited to operational and administrative support 
              for U.S. law firms. We work under attorney supervision and follow all applicable 
              regulations and ethical guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIconContainer}>
              <MessageCircle className={styles.ctaIcon} />
            </div>
            <h2 className={styles.ctaTitle}>Is Your Firm a Good Fit?</h2>
            <p className={styles.ctaDescription}>
              Schedule a consultation to discuss how our legal operations support can benefit your practice 
              and improve your firm's efficiency.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButtonPrimary}>
                Schedule Consultation
              </Link>
              <Link href="/services" className={styles.ctaButtonSecondary}>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}