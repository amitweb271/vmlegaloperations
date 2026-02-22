"use client";

import { useState, useEffect } from 'react';
import howStyles from './how-we-work.module.css';
import Link from 'next/link';

// Lucide Icons import
import {
  Award,
  ShieldCheck,
  Target,
  Monitor,
  Shield,
  FileText,
  Rocket,
  CheckCircle2,
  Settings,
  MessageCircle,
  TestTube2,
  PlayCircle,
  TrendingUp,
  AlertCircle,
  Zap,
  ChevronRight,
  ArrowRight,
  Phone,
  Lightbulb,
  Users,
  BarChart3,
  Sparkles,
  ClipboardList,
  Briefcase,
  Clock,
  LayoutList,
  FileCheck,
  RefreshCw,
  Lock
} from 'lucide-react';

export default function HowWeWorkPage() {
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
          entry.target.classList.add(howStyles.vmHowRevealActive);
          setActiveSection(entry.target.id || 'hero');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px' 
    });

    // Observe all sections with reveal class
    document.querySelectorAll(`.${howStyles.vmHowReveal}`).forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const processSteps = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation & Scope Alignment',
      description: 'We begin by understanding your practice area, case volume, workflow systems, and support requirements.',
      details: [
        'Scope of services',
        'Turnaround expectations',
        'Communication structure',
        'Reporting frequency'
      ],
      note: 'Clear scope prevents misunderstandings and ensures efficiency.',
      color: 'Blue'
    },
    {
      icon: Shield,
      title: 'Secure Onboarding',
      description: 'We integrate into your existing workflow through secure access to:',
      details: [
        'Case management platforms',
        'Document management systems',
        'Communication channels'
      ],
      note: 'All access is controlled and aligned with your firm\'s security protocols.',
      color: 'Emerald'
    },
    {
      icon: ClipboardList,
      title: 'Task Assignment & Execution',
      description: 'All work is performed strictly under attorney supervision.',
      details: [
        'Accuracy',
        'Consistency',
        'Deadline compliance'
      ],
      note: 'We do not provide legal advice or make legal decisions.',
      color: 'Violet'
    },
    {
      icon: FileCheck,
      title: 'Internal Quality Review',
      description: 'Before submission, work undergoes internal review to ensure:',
      details: [
        'Proper formatting',
        'File organization',
        'Timeline accuracy',
        'Instruction alignment'
      ],
      note: 'This reduces revision cycles and protects attorney time.',
      color: 'Amber'
    },
    {
      icon: RefreshCw,
      title: 'Reporting & Ongoing Coordination',
      description: 'We provide structured updates including:',
      details: [
        'Weekly status reports',
        'Deadline alerts',
        'Task tracking summaries'
      ],
      note: 'Our goal is to function as an organized extension of your team.',
      color: 'Teal'
    }
  ];

  return (
    <div className={howStyles.vmHowPageWrapper}>
      {/* === PREMIUM HERO SECTION === */}
      <section id="hero" className={`${howStyles.vmHowHeroSection} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowHeroBg}></div>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowHeroContent}>
            {/* Premium Badge */}
            <div className={howStyles.vmHowBadge}>
              <Award className={howStyles.vmHowBadgeIcon} />
              <span>VM Legal Operations</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={howStyles.vmHowMainHeading}>
              HOW WE WORK
            </h1>
            
            {/* Tagline */}
            <h2 className={howStyles.vmHowTagline}>
              Structured. Supervised. Secure.
            </h2>
            
            {/* Description */}
            <div className={howStyles.vmHowDescription}>
              <p className={howStyles.vmHowDescriptionText}>
                VM Legal Operations follows a process-driven workflow designed to integrate 
                seamlessly with U.S. law firm operations.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className={howStyles.vmHowCtaGroup}>
              <Link href="/contact" className={howStyles.vmHowBtnPrimary}>
                <span>Start Pilot Program</span>
                <ArrowRight className={howStyles.vmHowBtnIcon} />
              </Link>
              <Link href="/contact" className={howStyles.vmHowBtnSecondary}>
                <Phone className={howStyles.vmHowBtnIcon} />
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === PROCESS STEPS SECTION === */}
      <section id="process" className={`${howStyles.vmHowSectionWhite} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowSectionHeader}>
            <h2 className={howStyles.vmHowSectionTitle}>Our 5-Step Process</h2>
            <p className={howStyles.vmHowSectionDesc}>
              A structured, supervised workflow designed for U.S. law firms
            </p>
          </div>
          
          <div className={howStyles.vmHowProcessSteps}>
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const colorClass = `vmHowIcon${step.color}`;
              return (
                <div key={index} className={howStyles.vmHowProcessCard}>
                  <div className={howStyles.vmHowProcessCardHeader}>
                    <div className={`${howStyles.vmHowProcessIconContainer} ${howStyles[colorClass]}`}>
                      <IconComponent className={howStyles.vmHowProcessIcon} />
                    </div>
                    <div className={howStyles.vmHowProcessStepBadge}>Step {index + 1}</div>
                  </div>
                  
                  <h3 className={howStyles.vmHowProcessCardTitle}>{step.title}</h3>
                  <p className={howStyles.vmHowProcessCardDescription}>{step.description}</p>
                  
                  <ul className={howStyles.vmHowProcessDetailsList}>
                    {step.details.map((detail, idx) => (
                      <li key={idx} className={howStyles.vmHowProcessDetailItem}>
                        <CheckCircle2 className={howStyles.vmHowProcessDetailIcon} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {step.note && (
                    <div className={howStyles.vmHowProcessNote}>
                      <Sparkles className={howStyles.vmHowProcessNoteIcon} />
                      <p>{step.note}</p>
                    </div>
                  )}
                  
                  {/* Connector line between steps (except last) */}
                  {index < processSteps.length - 1 && !isMobile && (
                    <div className={howStyles.vmHowStepConnector}>
                      <ChevronRight className={howStyles.vmHowStepConnectorIcon} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === CONFIDENTIALITY & COMPLIANCE SECTION === */}
      <section id="compliance" className={`${howStyles.vmHowSectionGray} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowComplianceCard}>
            <div className={howStyles.vmHowComplianceHeader}>
              <div className={howStyles.vmHowComplianceIconContainer}>
                <Lock className={howStyles.vmHowComplianceIcon} />
              </div>
              <h2 className={howStyles.vmHowComplianceTitle}>Confidentiality & Compliance</h2>
            </div>
            <div className={howStyles.vmHowComplianceContent}>
              <p className={howStyles.vmHowComplianceText}>
                We operate exclusively under attorney supervision and maintain strict 
                confidentiality standards in handling all firm data.
              </p>
              <div className={howStyles.vmHowComplianceBadges}>
                <div className={howStyles.vmHowComplianceBadge}>
                  <Shield className={howStyles.vmHowComplianceBadgeIcon} />
                  <span>Attorney Supervision</span>
                </div>
                <div className={howStyles.vmHowComplianceBadge}>
                  <ShieldCheck className={howStyles.vmHowComplianceBadgeIcon} />
                  <span>Strict Confidentiality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY THIS MATTERS SECTION === */}
      <section id="why-matters" className={`${howStyles.vmHowSectionLight} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowSectionHeader}>
            <h2 className={howStyles.vmHowSectionTitle}>Why Our Process Works</h2>
            <p className={howStyles.vmHowSectionDesc}>
              Designed to address the specific challenges of legal operations
            </p>
          </div>
          
          <div className={howStyles.vmHowBenefitsGrid}>
            <div className={howStyles.vmHowBenefitCard}>
              <div className={howStyles.vmHowBenefitIconContainer}>
                <Briefcase className={howStyles.vmHowBenefitIcon} />
              </div>
              <h3 className={howStyles.vmHowBenefitTitle}>Supervised Excellence</h3>
              <p className={howStyles.vmHowBenefitDescription}>
                All work performed under attorney supervision ensures compliance with 
                legal ethics and firm standards.
              </p>
            </div>
            
            <div className={howStyles.vmHowBenefitCard}>
              <div className={howStyles.vmHowBenefitIconContainer}>
                <LayoutList className={howStyles.vmHowBenefitIcon} />
              </div>
              <h3 className={howStyles.vmHowBenefitTitle}>Structured Checklists</h3>
              <p className={howStyles.vmHowBenefitDescription}>
                Every task follows defined checklists and timelines for consistency 
                and deadline compliance.
              </p>
            </div>
            
            <div className={howStyles.vmHowBenefitCard}>
              <div className={howStyles.vmHowBenefitIconContainer}>
                <Clock className={howStyles.vmHowBenefitIcon} />
              </div>
              <h3 className={howStyles.vmHowBenefitTitle}>Protects Attorney Time</h3>
              <p className={howStyles.vmHowBenefitDescription}>
                Internal quality reviews reduce revision cycles, letting attorneys 
                focus on substantive legal work.
              </p>
            </div>
            
            <div className={howStyles.vmHowBenefitCard}>
              <div className={howStyles.vmHowBenefitIconContainer}>
                <RefreshCw className={howStyles.vmHowBenefitIcon} />
              </div>
              <h3 className={howStyles.vmHowBenefitTitle}>Seamless Integration</h3>
              <p className={howStyles.vmHowBenefitDescription}>
                We function as an organized extension of your team with structured 
                updates and coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      {/* <section id="scope" className={`${howStyles.vmHowSectionWhite} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowScopeNotice}>
            <div className={howStyles.vmHowScopeNoticeHeader}>
              <AlertCircle className={howStyles.vmHowScopeNoticeIcon} />
              <h3 className={howStyles.vmHowScopeNoticeTitle}>Scope of Services</h3>
            </div>
            <div className={howStyles.vmHowScopeNoticeContent}>
              <p className={howStyles.vmHowScopeNoticeText}>
                <strong>Our services are strictly non-legal and administrative in nature.</strong> We do not provide 
                legal advice or legal representation. We work under attorney supervision and follow all 
                applicable regulations and ethical guidelines.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* === FINAL CTA SECTION === */}
      <section id="contact" className={`${howStyles.vmHowCtaSection} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowCtaContent}>
            <div className={howStyles.vmHowCtaIconBox}>
              <Zap className={howStyles.vmHowCtaIcon} />
            </div>
            <h2 className={howStyles.vmHowCtaTitle}>Ready to Get Started?</h2>
            <p className={howStyles.vmHowCtaDesc}>
              Experience our structured, supervised approach to legal operations support.
            </p>
            
            <div className={howStyles.vmHowCtaBtnGroup}>
              <Link href="/contact" className={howStyles.vmHowCtaBtnPrimary}>
                Start Pilot Program
              </Link>
              <Link href="/contact" className={howStyles.vmHowCtaBtnSecondary}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}