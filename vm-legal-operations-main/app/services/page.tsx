"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
import Link from 'next/link';
// Lucide Icons import
import {
  Award,
  ShieldCheck,
  BarChart3,
  Clock,
  Building2,
  RefreshCw,
  FileText,
  CheckCircle2,
  ListChecks,
  TrendingUp,
  Search,
  Settings,
  PlayCircle,
  FileBarChart,
  AlertCircle,
  Zap,
  ChevronRight,
  ArrowRight,
  Phone,
  Target,
  Users,
  Calendar,
  Check
} from 'lucide-react';

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: BarChart3,
      title: 'Case Status Tracking',
      description: 'Track case stages and progress across all matters',
      bullets: [
        'Tracking case stages and progress across matters',
        'Maintaining structured case trackers or working alongside your existing systems',
        'Real-time progress monitoring and updates'
      ],
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Deadline & Timeline Monitoring',
      description: 'Monitor court-driven and rule-based deadlines',
      bullets: [
        'Monitoring court-driven and rule-based deadlines',
        'Flagging upcoming actions and pending responses',
        'Proactive deadline management'
      ],
      color: 'emerald'
    },
    {
      icon: Building2,
      title: 'Court Notification & Docket Monitoring',
      description: 'Stay updated with court notifications and docket changes',
      bullets: [
        'Monitoring court notifications, filing confirmations, and docket updates',
        'Updating status based on permitted access and information received',
        'Automatic docket change alerts'
      ],
      color: 'rose'
    },
    {
      icon: RefreshCw,
      title: 'Follow-Up & Coordination Support',
      description: 'Coordinate status confirmations and escalate deadlines',
      bullets: [
        'Tracking pending actions',
        'Coordinating status confirmations with attorneys or firm staff',
        'Escalating approaching deadlines'
      ],
      color: 'violet'
    },
    {
      icon: FileText,
      title: 'Weekly Status Reporting',
      description: 'Clear, structured reports delivered weekly',
      bullets: [
        'Clear, structured reports covering open matters',
        'Tracking upcoming deadlines and actions taken',
        'Highlighting items requiring attention'
      ],
      color: 'amber'
    }
  ];

  const processes = [
    {
      icon: Search,
      title: 'Assessment',
      description: 'Understand your workflow and requirements',
      step: '1'
    },
    {
      icon: Settings,
      title: 'Setup',
      description: 'Configure tracking systems and access',
      step: '2'
    },
    {
      icon: PlayCircle,
      title: 'Execution',
      description: 'Daily monitoring and coordination',
      step: '3'
    },
    {
      icon: FileBarChart,
      title: 'Reporting',
      description: 'Weekly updates and reviews',
      step: '4'
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
              Our Services
            </h1>
            
            {/* Description */}
            <h2 className={styles.subheading}>
              Strictly <span className={styles.gradientText}>non-legal administrative support</span> designed to keep your law firm's operations running smoothly
            </h2>
            
            {/* Scope Card */}
            <div className={styles.scopeCard}>
              <div className={styles.scopeHeader}>
                <ShieldCheck className={styles.scopeIcon} />
                <h3>Service Scope</h3>
              </div>
              <div className={styles.scopeContent}>
                <p>
                  We support law firms with <strong>day-to-day legal operations and case coordination</strong>, 
                  ensuring nothing falls through the cracks — without adding internal headcount.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.primaryButton}>
                <span>Schedule Consultation</span>
                <ArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                <Phone className={styles.buttonIcon} />
                <span>Start Pilot Program</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === MAIN SERVICES SECTION === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Legal Operations Support</h2>
            <p className={styles.sectionDescription}>
              Day-to-day legal operations and case coordination for U.S. law firms
            </p>
          </div>
          
          <div className={styles.servicesGridDetailed}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={styles.serviceCardDetailed}>
                  <div className={styles.serviceHeaderDetailed}>
                    <div className={`${styles.serviceIconContainer} ${styles[`icon${service.color}`]}`}>
                      <IconComponent className={styles.serviceIcon} />
                    </div>
                    <div>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceSubtitle}>{service.description}</p>
                    </div>
                  </div>
                  
                  <div className={styles.serviceContent}>
                    <ul className={styles.serviceList}>
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className={styles.serviceListItem}>
                          <CheckCircle2 className={styles.listIcon} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className={styles.serviceAction}>
                      <Link href="/contact" className={styles.serviceButton}>
                        Learn More
                        <ChevronRight className={styles.buttonIconSmall} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === WEEKLY REPORTING DETAILS === */}
      <section className={styles.sectionGray}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Weekly Status Reporting</h2>
            <p className={styles.sectionDescription}>
              Clear, structured reports delivered weekly for complete visibility
            </p>
          </div>
          
          <div className={styles.reportingGrid}>
            <div className={styles.reportingCard}>
              <div className={styles.reportingHeader}>
                <ListChecks className={styles.reportingIcon} />
                <h3 className={styles.reportingTitle}>Report Coverage</h3>
              </div>
              <div className={styles.reportingContent}>
                <ul className={styles.reportingList}>
                  {[
                    'Open matters and case status',
                    'Upcoming deadlines and timelines',
                    'Actions taken and completed tasks',
                    'Items requiring attention or escalation',
                    'Court docket updates',
                    'Pending follow-ups'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.reportingListItem}>
                      <CheckCircle2 className={styles.listIconBlue} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={styles.reportingCard}>
              <div className={styles.reportingHeader}>
                <TrendingUp className={styles.reportingIcon} />
                <h3 className={styles.reportingTitle}>Key Benefits</h3>
              </div>
              <div className={styles.reportingContent}>
                <ul className={styles.reportingList}>
                  {[
                    'Consistent visibility across all matters',
                    'Early warning for upcoming deadlines',
                    'Reduced administrative overhead',
                    'Better coordination among team members',
                    'Documented audit trail of case progress',
                    'Improved client communication'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.reportingListItem}>
                      <CheckCircle2 className={styles.listIconGreen} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICE DELIVERY PROCESS === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Service Delivery Process</h2>
            <p className={styles.sectionDescription}>
              How we ensure quality and consistency in our support
            </p>
          </div>
          
          <div className={styles.processGrid}>
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className={styles.processCard}>
                  <div className={styles.processStep}>
                    <span className={styles.stepNumber}>{process.step}</span>
                  </div>
                  <div className={styles.processIconContainer}>
                    <IconComponent className={styles.processIcon} />
                  </div>
                  <h3 className={styles.processTitle}>{process.title}</h3>
                  <p className={styles.processDescription}>{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.scopeNoticeDetailed}>
            <div className={styles.scopeNoticeHeader}>
              <AlertCircle className={styles.scopeNoticeIcon} />
              <h3 className={styles.scopeNoticeTitle}>Scope of Services</h3>
            </div>
            <div className={styles.scopeNoticeContent}>
              <p className={styles.scopeNoticeText}>
                <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong>
              </p>
              <p className={styles.scopeNoticeDescription}>
                We do not provide legal advice, draft legal documents, represent clients in court, 
                or make legal decisions. Our services are limited to operational and administrative support.
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
            <h2 className={styles.ctaTitle}>Ready to Streamline Your Operations?</h2>
            <p className={styles.ctaDescription}>
              Book a consultation to discuss how our services can benefit your firm and 
              improve operational efficiency.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButtonPrimary}>
                Schedule Consultation
              </Link>
              <Link href="/contact" className={styles.ctaButtonSecondary}>
                Start Pilot Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}