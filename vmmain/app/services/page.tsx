"use client";

import { useState, useEffect } from 'react';
import servicesStyles from './services.module.css';
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
  Check,
  Sparkles
} from 'lucide-react';

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(servicesStyles.vmServicesRevealActive);
          setActiveSection(entry.target.id || 'hero');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px' 
    });

    // Observe all sections with reveal class
    document.querySelectorAll(`.${servicesStyles.vmServicesReveal}`).forEach(el => {
      observer.observe(el);
    });

    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
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
      color: 'Blue'
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
      color: 'Emerald'
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
      color: 'Rose'
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
      color: 'Violet'
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
      color: 'Amber'
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
    <div className={servicesStyles.vmServicesPageWrapper}>
      {/* === PREMIUM HERO SECTION === */}
      <section id="hero" className={`${servicesStyles.vmServicesHeroSection} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesHeroBg}></div>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesHeroContent}>
            {/* Premium Badge */}
            <div className={servicesStyles.vmServicesBadge}>
              <Award className={servicesStyles.vmServicesBadgeIcon} />
              <span>VM Legal Operations</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={servicesStyles.vmServicesMainHeading}>
              Our Services
            </h1>
            
            {/* Description */}
            <h2 className={servicesStyles.vmServicesSubHeading}>
              Strictly <span className={servicesStyles.vmServicesGradientText}>non-legal administrative support</span> designed to keep your law firm's operations running smoothly
            </h2>
            
            {/* Scope Card */}
            <div className={servicesStyles.vmServicesScopeCard}>
              <div className={servicesStyles.vmServicesScopeHeader}>
                <ShieldCheck className={servicesStyles.vmServicesScopeIcon} />
                <h3>Service Scope</h3>
              </div>
              <div className={servicesStyles.vmServicesScopeContent}>
                <p>
                  We support law firms with <strong>day-to-day legal operations and case coordination</strong>, 
                  ensuring nothing falls through the cracks — without adding internal headcount.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={servicesStyles.vmServicesCtaGroup}>
              <Link href="/contact" className={servicesStyles.vmServicesBtnPrimary}>
                <span>Schedule Consultation</span>
                <ArrowRight className={servicesStyles.vmServicesBtnIcon} />
              </Link>
              <Link href="/contact" className={servicesStyles.vmServicesBtnSecondary}>
                <Phone className={servicesStyles.vmServicesBtnIcon} />
                <span>Start Pilot Program</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === MAIN SERVICES SECTION === */}
      <section id="services" className={`${servicesStyles.vmServicesSectionWhite} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesSectionHeader}>
            <h2 className={servicesStyles.vmServicesSectionTitle}>Comprehensive Legal Operations Support</h2>
            <p className={servicesStyles.vmServicesSectionDesc}>
              Day-to-day legal operations and case coordination for U.S. law firms
            </p>
          </div>
          
          <div className={servicesStyles.vmServicesGridDetailed}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              // Fix the color class name
              const colorClass = `vmServicesIcon${service.color}`;
              return (
                <div key={index} className={servicesStyles.vmServicesServiceCardDetailed}>
                  <div className={servicesStyles.vmServicesServiceHeaderDetailed}>
                    <div className={`${servicesStyles.vmServicesServiceIconContainer} ${servicesStyles[colorClass]}`}>
                      <IconComponent className={servicesStyles.vmServicesServiceIcon} />
                    </div>
                    <div>
                      <h3 className={servicesStyles.vmServicesServiceTitle}>{service.title}</h3>
                      <p className={servicesStyles.vmServicesServiceSubtitle}>{service.description}</p>
                    </div>
                  </div>
                  
                  <div className={servicesStyles.vmServicesServiceContent}>
                    <ul className={servicesStyles.vmServicesServiceList}>
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className={servicesStyles.vmServicesServiceListItem}>
                          <CheckCircle2 className={servicesStyles.vmServicesListIcon} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className={servicesStyles.vmServicesServiceAction}>
                      <Link href="/contact" className={servicesStyles.vmServicesServiceButton}>
                        Learn More
                        <ChevronRight className={servicesStyles.vmServicesBtnIconSmall} />
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
      <section id="reporting" className={`${servicesStyles.vmServicesSectionGray} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesSectionHeader}>
            <h2 className={servicesStyles.vmServicesSectionTitle}>Weekly Status Reporting</h2>
            <p className={servicesStyles.vmServicesSectionDesc}>
              Clear, structured reports delivered weekly for complete visibility
            </p>
          </div>
          
          <div className={servicesStyles.vmServicesReportingGrid}>
            <div className={servicesStyles.vmServicesReportingCard}>
              <div className={servicesStyles.vmServicesReportingHeader}>
                <ListChecks className={servicesStyles.vmServicesReportingIcon} />
                <h3 className={servicesStyles.vmServicesReportingTitle}>Report Coverage</h3>
              </div>
              <div className={servicesStyles.vmServicesReportingContent}>
                <ul className={servicesStyles.vmServicesReportingList}>
                  {[
                    'Open matters and case status',
                    'Upcoming deadlines and timelines',
                    'Actions taken and completed tasks',
                    'Items requiring attention or escalation',
                    'Court docket updates',
                    'Pending follow-ups'
                  ].map((item, idx) => (
                    <li key={idx} className={servicesStyles.vmServicesReportingListItem}>
                      <CheckCircle2 className={servicesStyles.vmServicesListIconBlue} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={servicesStyles.vmServicesReportingCard}>
              <div className={servicesStyles.vmServicesReportingHeader}>
                <TrendingUp className={servicesStyles.vmServicesReportingIcon} />
                <h3 className={servicesStyles.vmServicesReportingTitle}>Key Benefits</h3>
              </div>
              <div className={servicesStyles.vmServicesReportingContent}>
                <ul className={servicesStyles.vmServicesReportingList}>
                  {[
                    'Consistent visibility across all matters',
                    'Early warning for upcoming deadlines',
                    'Reduced administrative overhead',
                    'Better coordination among team members',
                    'Documented audit trail of case progress',
                    'Improved client communication'
                  ].map((item, idx) => (
                    <li key={idx} className={servicesStyles.vmServicesReportingListItem}>
                      <CheckCircle2 className={servicesStyles.vmServicesListIconGreen} />
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
      <section id="process" className={`${servicesStyles.vmServicesSectionWhite} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesSectionHeader}>
            <h2 className={servicesStyles.vmServicesSectionTitle}>Our Service Delivery Process</h2>
            <p className={servicesStyles.vmServicesSectionDesc}>
              How we ensure quality and consistency in our support
            </p>
          </div>
          
          <div className={servicesStyles.vmServicesProcessGrid}>
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className={servicesStyles.vmServicesProcessCard}>
                  <div className={servicesStyles.vmServicesProcessStep}>
                    <span className={servicesStyles.vmServicesStepNumber}>{process.step}</span>
                  </div>
                  <div className={servicesStyles.vmServicesProcessIconContainer}>
                    <IconComponent className={servicesStyles.vmServicesProcessIcon} />
                  </div>
                  <h3 className={servicesStyles.vmServicesProcessTitle}>{process.title}</h3>
                  <p className={servicesStyles.vmServicesProcessDescription}>{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      <section id="scope" className={`${servicesStyles.vmServicesSectionLight} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesScopeNoticeDetailed}>
            <div className={servicesStyles.vmServicesScopeNoticeHeader}>
              <AlertCircle className={servicesStyles.vmServicesScopeNoticeIcon} />
              <h3 className={servicesStyles.vmServicesScopeNoticeTitle}>Scope of Services</h3>
            </div>
            <div className={servicesStyles.vmServicesScopeNoticeContent}>
              <p className={servicesStyles.vmServicesScopeNoticeText}>
                <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong>
              </p>
              <p className={servicesStyles.vmServicesScopeNoticeDescription}>
                We do not provide legal advice, draft legal documents, represent clients in court, 
                or make legal decisions. Our services are limited to operational and administrative support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section id="contact" className={`${servicesStyles.vmServicesCtaSection} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesCtaContent}>
            <div className={servicesStyles.vmServicesCtaIconBox}>
              <Zap className={servicesStyles.vmServicesCtaIcon} />
            </div>
            <h2 className={servicesStyles.vmServicesCtaTitle}>Ready to Streamline Your Operations?</h2>
            <p className={servicesStyles.vmServicesCtaDesc}>
              Book a consultation to discuss how our services can benefit your firm and 
              improve operational efficiency.
            </p>
            
            <div className={servicesStyles.vmServicesCtaBtnGroup}>
              <Link href="/contact" className={servicesStyles.vmServicesCtaBtnPrimary}>
                Schedule Consultation
              </Link>
              <Link href="/contact" className={servicesStyles.vmServicesCtaBtnSecondary}>
                Start Pilot Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}