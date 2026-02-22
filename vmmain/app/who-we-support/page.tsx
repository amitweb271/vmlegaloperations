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
  Sparkles,
  Briefcase,
  FileSearch,
  Gavel,
  HeartPulse,
  Globe,
  Rocket,
  FolderOpen,
  CalendarClock,
  FileCheck,
  Layers
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

  const practiceAreas = [
    {
      icon: Building2,
      title: 'Small & Mid-Size Law Firms',
      description: 'Firms looking to improve efficiency without expanding internal staff. We support case tracking, document organization, summaries, and structured reporting.',
      color: 'Blue'
    },
    {
      icon: Gavel,
      title: 'Litigation-Focused Practices',
      description: 'Civil litigation firms handling motions, discovery, depositions, and trial preparation. We assist with case summaries, chronologies, exhibit organization, filing and deadline tracking.',
      color: 'Emerald'
    },
    {
      icon: HeartPulse,
      title: 'Personal Injury Practices',
      description: 'High-volume firms requiring organized case processing, medical record summaries, and demand package support.',
      color: 'Violet'
    },
    {
      icon: Globe,
      title: 'Immigration Law Firms',
      description: 'Firms needing structured document checklist verification, form processing support, and packet assembly under attorney direction.',
      color: 'Amber'
    },
    {
      icon: Rocket,
      title: 'Growth-Oriented Legal Teams',
      description: 'Firms seeking reliable offshore support to scale operations while maintaining attorney oversight and compliance.',
      color: 'Teal'
    }
  ];

  const supportServices = [
    {
      icon: FileSearch,
      title: 'Case Summaries',
      description: 'Comprehensive case digests and summaries'
    },
    {
      icon: Layers,
      title: 'Chronologies',
      description: 'Detailed timeline development and management'
    },
    {
      icon: FolderOpen,
      title: 'Exhibit Organization',
      description: 'Systematic exhibit preparation and indexing'
    },
    {
      icon: CalendarClock,
      title: 'Deadline Tracking',
      description: 'Critical date monitoring and alerts'
    },
    {
      icon: FileCheck,
      title: 'Document Processing',
      description: 'Form processing, verification, and assembly'
    },
    {
      icon: FileText,
      title: 'Medical Record Summaries',
      description: 'Comprehensive medical chronology and analysis'
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
              <span className={whoStyles.vmWhoGradientText}>U.S. Law Firms Across Practice Areas</span>
            </h2>
            
            {/* Scope Card */}
            <div className={whoStyles.vmWhoScopeCard}>
              <div className={whoStyles.vmWhoScopeHeader}>
                <ShieldCheck className={whoStyles.vmWhoScopeIcon} />
                <h3>Our Ideal Partners</h3>
              </div>
              <div className={whoStyles.vmWhoScopeContent}>
                <p>
                  VM Legal Operations works best with firms that manage <strong>deadline-driven, document-intensive, 
                  and process-oriented matters.</strong> We provide structured remote legal operations and paralegal 
                  support under attorney supervision.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={whoStyles.vmWhoCtaGroup}>
              <Link href="/contact" className={whoStyles.vmWhoBtnPrimary}>
                <span>Schedule Consultation</span>
                <ArrowRight className={whoStyles.vmWhoBtnIcon} />
              </Link>
              <Link href="/how-we-work" className={whoStyles.vmWhoBtnSecondary}>
                <FileText className={whoStyles.vmWhoBtnIcon} />
                <span>How We Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === PRACTICE AREAS SECTION - 5 CARDS === */}
      <section id="practice-areas" className={`${whoStyles.vmWhoSectionWhite} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoSectionHeader}>
            <h2 className={whoStyles.vmWhoSectionTitle}>Practice Areas We Support</h2>
            <p className={whoStyles.vmWhoSectionDesc}>
              Tailored operational support for specific legal practice areas
            </p>
          </div>
          
          <div className={whoStyles.vmWhoPracticeGrid}>
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              const colorClass = `vmWhoIcon${area.color}`;
              return (
                <div key={index} className={whoStyles.vmWhoPracticeCard}>
                  <div className={`${whoStyles.vmWhoPracticeIconContainer} ${whoStyles[colorClass]}`}>
                    <IconComponent className={whoStyles.vmWhoPracticeIcon} />
                  </div>
                  <h3 className={whoStyles.vmWhoPracticeTitle}>{area.title}</h3>
                  <p className={whoStyles.vmWhoPracticeDescription}>{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SUPPORT SERVICES SECTION === */}
      <section id="support-services" className={`${whoStyles.vmWhoSectionGray} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoSectionHeader}>
            <h2 className={whoStyles.vmWhoSectionTitle}>What We Support</h2>
            <p className={whoStyles.vmWhoSectionDesc}>
              Structured operational assistance across key legal tasks
            </p>
          </div>
          
          <div className={whoStyles.vmWhoServicesGrid}>
            {supportServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={whoStyles.vmWhoServiceCard}>
                  <div className={whoStyles.vmWhoServiceIconContainer}>
                    <IconComponent className={whoStyles.vmWhoServiceIcon} />
                  </div>
                  <h3 className={whoStyles.vmWhoServiceTitle}>{service.title}</h3>
                  <p className={whoStyles.vmWhoServiceDescription}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === WHY PARTNER WITH US SECTION === */}
      <section id="why-partner" className={`${whoStyles.vmWhoSectionLight} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoSectionHeader}>
            <h2 className={whoStyles.vmWhoSectionTitle}>Why Partner With Us</h2>
            <p className={whoStyles.vmWhoSectionDesc}>
              Reliable offshore support with attorney supervision and compliance
            </p>
          </div>
          
          <div className={whoStyles.vmWhoBenefitsGrid}>
            <div className={whoStyles.vmWhoBenefitCard}>
              <div className={whoStyles.vmWhoBenefitIconContainer}>
                <Shield className={whoStyles.vmWhoBenefitIcon} />
              </div>
              <h3 className={whoStyles.vmWhoBenefitTitle}>Attorney Supervision</h3>
              <p className={whoStyles.vmWhoBenefitDescription}>
                All work performed under strict attorney oversight and compliance with ethical guidelines
              </p>
            </div>
            
            <div className={whoStyles.vmWhoBenefitCard}>
              <div className={whoStyles.vmWhoBenefitIconContainer}>
                <Clock className={whoStyles.vmWhoBenefitIcon} />
              </div>
              <h3 className={whoStyles.vmWhoBenefitTitle}>Process-Oriented</h3>
              <p className={whoStyles.vmWhoBenefitDescription}>
                Structured workflows designed for deadline-driven, document-intensive matters
              </p>
            </div>
            
            <div className={whoStyles.vmWhoBenefitCard}>
              <div className={whoStyles.vmWhoBenefitIconContainer}>
                <TrendingUp className={whoStyles.vmWhoBenefitIcon} />
              </div>
              <h3 className={whoStyles.vmWhoBenefitTitle}>Scalable Support</h3>
              <p className={whoStyles.vmWhoBenefitDescription}>
                Reliable offshore assistance that grows with your practice needs
              </p>
            </div>
            
            <div className={whoStyles.vmWhoBenefitCard}>
              <div className={whoStyles.vmWhoBenefitIconContainer}>
                <Target className={whoStyles.vmWhoBenefitIcon} />
              </div>
              <h3 className={whoStyles.vmWhoBenefitTitle}>Operational Discipline</h3>
              <p className={whoStyles.vmWhoBenefitDescription}>
                Consistent tracking, reporting, and follow-through on all matters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      {/* <section id="scope" className={`${whoStyles.vmWhoSectionDark} ${whoStyles.vmWhoReveal}`}>
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
      </section> */}

      {/* === FINAL CTA SECTION === */}
      <section id="contact" className={`${whoStyles.vmWhoCtaSection} ${whoStyles.vmWhoReveal}`}>
        <div className={whoStyles.vmWhoContainer}>
          <div className={whoStyles.vmWhoCtaContent}>
            <div className={whoStyles.vmWhoCtaIconBox}>
              <MessageCircle className={whoStyles.vmWhoCtaIcon} />
            </div>
            <h2 className={whoStyles.vmWhoCtaTitle}>Ready to Scale Your Practice?</h2>
            <p className={whoStyles.vmWhoCtaDesc}>
              Schedule a consultation to discuss how our structured legal operations support can benefit 
              your specific practice area.
            </p>
            
            <div className={whoStyles.vmWhoCtaBtnGroup}>
              <Link href="/contact" className={whoStyles.vmWhoCtaBtnPrimary}>
                Schedule Consultation
              </Link>
              <Link href="/how-we-work" className={whoStyles.vmWhoCtaBtnSecondary}>
                View Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}