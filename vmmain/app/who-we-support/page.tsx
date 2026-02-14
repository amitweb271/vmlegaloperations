"use client";

import { useState, useEffect } from 'react';
import whoStyles from './who-we-support.module.css';
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
  FileText,
  Sparkles
} from 'lucide-react';

export default function WhoWeSupportPage() {
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
          entry.target.classList.add(whoStyles.vmWhoRevealActive);
          setActiveSection(entry.target.id || 'hero');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px' 
    });

    // Observe all sections with reveal class
    document.querySelectorAll(`.${whoStyles.vmWhoReveal}`).forEach(el => {
      observer.observe(el);
    });

    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const clientTypes = [
    {
      icon: Scale,
      title: 'Small and mid-size U.S. law firms',
      description: 'Firms seeking to optimize operations without expanding internal staff or administrative overhead.',
      color: 'Blue'
    },
    {
      icon: BarChart3,
      title: 'Debt collection and consumer litigation firms',
      description: 'High-volume practices requiring systematic case tracking, deadline management, and compliance monitoring.',
      color: 'Emerald'
    },
    {
      icon: TrendingUp,
      title: 'Firms handling high-volume matters',
      description: 'Practices with multiple concurrent cases needing consistent tracking and coordination.',
      color: 'Violet'
    },
    {
      icon: Users,
      title: 'Legal teams seeking administrative support without expanding internal staff',
      description: 'Legal departments and in-house counsel teams looking to improve operational efficiency.',
      color: 'Amber'
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
    <div className={whoStyles.vmWhoPageWrapper}>
      {/* === PREMIUM HERO SECTION === */}
      <section id="hero" className={`${whoStyles.vmWhoHeroSection} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoHeroBg}></div>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoHeroContent}>
            {/* Premium Badge */}
            <div className={whoStyles.vmWhoBadge}>
              <Award className={whoStyles.vmWhoBadgeIcon} />
              <span>VM Legal Operations</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={whoStyles.vmWhoMainHeading}>
              Who We Support
            </h1>
            
            {/* Description */}
            <h2 className={whoStyles.vmWhoSubHeading}>
              Dedicated <span className={whoStyles.vmWhoGradientText}>offshore legal operations support</span> for specific types of U.S. law practices
            </h2>
            
            {/* Scope Card */}
            <div className={whoStyles.vmWhoScopeCard}>
              <div className={whoStyles.vmWhoScopeHeader}>
                <ShieldCheck className={whoStyles.vmWhoScopeIcon} />
                <h3>Our Ideal Partners</h3>
              </div>
              <div className={whoStyles.vmWhoScopeContent}>
                <p>
                  We work best with U.S. law firms and legal teams that value efficiency, consistency, 
                  and want to focus on substantive legal work while we handle the operational details.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={whoStyles.vmWhoCtaGroup}>
              <Link href="/contact" className={whoStyles.vmWhoBtnPrimary}>
                <span>Schedule Consultation</span>
                <ArrowRight className={whoStyles.vmWhoBtnIcon} />
              </Link>
              <Link href="/services" className={whoStyles.vmWhoBtnSecondary}>
                <FileText className={whoStyles.vmWhoBtnIcon} />
                <span>View Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === IDEAL CLIENTS SECTION === */}
      <section id="ideal-clients" className={`${whoStyles.vmWhoSectionWhite} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoSectionHeader}>
            <h2 className={whoStyles.vmWhoSectionTitle}>Ideal Client Profiles</h2>
            <p className={whoStyles.vmWhoSectionDesc}>
              We work best with U.S. law firms and legal teams that have these characteristics
            </p>
          </div>
          
          <div className={whoStyles.vmWhoClientsGrid}>
            {clientTypes.map((client, index) => {
              const IconComponent = client.icon;
              const colorClass = `vmWhoIcon${client.color}`;
              return (
                <div key={index} className={whoStyles.vmWhoClientCard}>
                  <div className={`${whoStyles.vmWhoClientIconContainer} ${whoStyles[colorClass]}`}>
                    <IconComponent className={whoStyles.vmWhoClientIcon} />
                  </div>
                  <h3 className={whoStyles.vmWhoClientTitle}>{client.title}</h3>
                  <p className={whoStyles.vmWhoClientDescription}>{client.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === WHY SUPPORT MATTERS SECTION === */}
      <section id="why-matters" className={`${whoStyles.vmWhoSectionGray} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoSectionHeader}>
            <h2 className={whoStyles.vmWhoSectionTitle}>Why Legal Operations Support Matters</h2>
            <p className={whoStyles.vmWhoSectionDesc}>
              Addressing common challenges in modern legal practice
            </p>
          </div>
          
          <div className={whoStyles.vmWhoSupportGrid}>
            <div className={whoStyles.vmWhoChallengesCard}>
              <div className={whoStyles.vmWhoChallengesHeader}>
                <div className={whoStyles.vmWhoChallengesDot}></div>
                <h3 className={whoStyles.vmWhoChallengesTitle}>The Challenges</h3>
              </div>
              <p className={whoStyles.vmWhoChallengesDescription}>
                Even with modern case-management software, many firms experience:
              </p>
              <ul className={whoStyles.vmWhoChallengesList}>
                {challenges.map((challenge, idx) => (
                  <li key={idx} className={whoStyles.vmWhoChallengesListItem}>
                    <div className={whoStyles.vmWhoListDot}></div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
              
              <div className={whoStyles.vmWhoHelpCard}>
                <Shield className={whoStyles.vmWhoHelpIcon} />
                <h4 className={whoStyles.vmWhoHelpTitle}>How We Help</h4>
                <p className={whoStyles.vmWhoHelpDescription}>
                  We help address these gaps by <strong>owning the tracking and reporting process</strong>, 
                  so attorneys can focus on substantive legal work.
                </p>
              </div>
            </div>
            
            <div className={whoStyles.vmWhoBenefitsCard}>
              <div className={whoStyles.vmWhoBenefitsHeader}>
                <Shield className={whoStyles.vmWhoBenefitsIcon} />
                <h3 className={whoStyles.vmWhoBenefitsTitle}>Key Benefits</h3>
              </div>
              <div className={whoStyles.vmWhoBenefitsGrid}>
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={idx} className={whoStyles.vmWhoBenefitItem}>
                      <div className={whoStyles.vmWhoBenefitIconContainer}>
                        <IconComponent className={whoStyles.vmWhoBenefitIcon} />
                      </div>
                      <div className={whoStyles.vmWhoBenefitContent}>
                        <h4 className={whoStyles.vmWhoBenefitTitle}>{benefit.title}</h4>
                        <p className={whoStyles.vmWhoBenefitDescription}>{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className={whoStyles.vmWhoRoleHighlight}>
                <Target className={whoStyles.vmWhoRoleIcon} />
                <p className={whoStyles.vmWhoRoleText}>
                  Our role is to provide <strong>consistency, visibility, and operational discipline</strong> 
                  that keeps your cases on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      <section id="scope" className={`${whoStyles.vmWhoSectionDark} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoScopeNotice}>
            <div className={whoStyles.vmWhoScopeIconContainer}>
              <AlertCircle className={whoStyles.vmWhoScopeNoticeIcon} />
            </div>
            <h3 className={whoStyles.vmWhoScopeNoticeTitle}>Scope of Services</h3>
            <p className={whoStyles.vmWhoScopeNoticeText}>
              <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong>
            </p>
            <p className={whoStyles.vmWhoScopeNoticeDescription}>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions. Our services are limited to operational and administrative support 
              for U.S. law firms. We work under attorney supervision and follow all applicable 
              regulations and ethical guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section id="contact" className={`${whoStyles.vmWhoCtaSection} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoCtaContent}>
            <div className={whoStyles.vmWhoCtaIconBox}>
              <MessageCircle className={whoStyles.vmWhoCtaIcon} />
            </div>
            <h2 className={whoStyles.vmWhoCtaTitle}>Is Your Firm a Good Fit?</h2>
            <p className={whoStyles.vmWhoCtaDesc}>
              Schedule a consultation to discuss how our legal operations support can benefit your practice 
              and improve your firm's efficiency.
            </p>
            
            <div className={whoStyles.vmWhoCtaBtnGroup}>
              <Link href="/contact" className={whoStyles.vmWhoCtaBtnPrimary}>
                Schedule Consultation
              </Link>
              <Link href="/services" className={whoStyles.vmWhoCtaBtnSecondary}>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}