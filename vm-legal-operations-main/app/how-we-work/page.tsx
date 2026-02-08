"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
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
  BarChart3
} from 'lucide-react';

export default function HowWeWorkPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const engagementPoints = [
    {
      icon: Monitor,
      title: 'Work Alongside Your Systems',
      description: 'We work alongside your existing systems (e.g. Clio, MyCase, PracticePanther) or maintain structured trackers where required.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Secure, Role-Based Access',
      description: 'Access is always limited, role-based, and agreed in advance to ensure data security and confidentiality.',
      color: 'emerald'
    },
    {
      icon: FileText,
      title: 'Strict Confidentiality & NDA',
      description: 'We operate under strict confidentiality and NDA protections, with clear protocols for data handling.',
      color: 'violet'
    },
    {
      icon: Rocket,
      title: 'Start with Pilot',
      description: 'Engagements typically begin with a small pilot before scaling, ensuring minimal risk and maximum value.',
      color: 'amber'
    }
  ];

  const processes = [
    {
      icon: MessageCircle,
      title: 'Consultation',
      description: 'Understand needs and define scope',
      step: '1'
    },
    {
      icon: TestTube2,
      title: 'Pilot Setup',
      description: 'Limited scope implementation',
      step: '2'
    },
    {
      icon: PlayCircle,
      title: 'Operations',
      description: 'Daily tracking and coordination',
      step: '3'
    },
    {
      icon: TrendingUp,
      title: 'Review & Scale',
      description: 'Performance review and expansion',
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
              How We Work
            </h1>
            
            {/* Description */}
            <h2 className={styles.subheading}>
              A <span className={styles.gradientText}>simple, transparent, and low-risk engagement model</span> designed for U.S. law firms
            </h2>
            
            {/* Scope Card */}
            <div className={styles.scopeCard}>
              <div className={styles.scopeHeader}>
                <Target className={styles.scopeIcon} />
                <h3>Our Approach</h3>
              </div>
              <div className={styles.scopeContent}>
                <p>
                  We provide <strong>consistency, visibility, and operational discipline</strong> 
                  that keeps your cases on track and your team focused on substantive legal work.
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
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === ENGAGEMENT MODEL SECTION === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Engagement Model</h2>
            <p className={styles.sectionDescription}>
              Designed to be simple, transparent, and focused on delivering consistent operational support
            </p>
          </div>
          
          <div className={styles.engagementContainer}>
            <div className={styles.engagementContent}>
              <div className={styles.engagementText}>
                <div className={styles.engagementHighlight}>
                  <Target className={styles.highlightIcon} />
                  <h3 className={styles.highlightTitle}>Our Role is Clear</h3>
                  <p className={styles.highlightDescription}>
                    To provide consistency, visibility, and operational discipline that keeps your 
                    cases on track and your team focused on substantive legal work.
                  </p>
                </div>
                
                <div className={styles.structuredSupport}>
                  <Settings className={styles.supportIcon} />
                  <h4 className={styles.supportTitle}>Structured Support</h4>
                  <ul className={styles.supportList}>
                    {[
                      'Monthly retainer-based support',
                      'Pilot engagements available for evaluation',
                      'Scope defined based on case volume and reporting requirements',
                      'Predictable and scalable pricing structure'
                    ].map((item, idx) => (
                      <li key={idx} className={styles.supportItem}>
                        <CheckCircle2 className={styles.supportCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={styles.engagementFeatures}>
                <h3 className={styles.featuresTitle}>Key Features of Our Approach</h3>
                <div className={styles.featuresGrid}>
                  {engagementPoints.map((point, index) => {
                    const IconComponent = point.icon;
                    return (
                      <div key={index} className={styles.featureCard}>
                        <div className={`${styles.featureIconContainer} ${styles[`icon${point.color}`]}`}>
                          <IconComponent className={styles.featureIcon} />
                        </div>
                        <div className={styles.featureContent}>
                          <h4 className={styles.featureTitle}>{point.title}</h4>
                          <p className={styles.featureDescription}>{point.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PROCESS FLOW SECTION === */}
      <section className={styles.sectionGray}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our 4-Step Process</h2>
            <p className={styles.sectionDescription}>
              A structured approach to delivering reliable support
            </p>
          </div>
          
          <div className={styles.processFlow}>
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className={styles.processStepCard}>
                  <div className={styles.processStepNumber}>{process.step}</div>
                  <div className={styles.processIconContainer}>
                    <IconComponent className={styles.processIcon} />
                  </div>
                  <h3 className={styles.processStepTitle}>{process.title}</h3>
                  <p className={styles.processStepDescription}>{process.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Process Connector Line */}
          {!isMobile && (
            <div className={styles.processConnector}>
              <div className={styles.connectorLine}></div>
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className={styles.connectorDot}></div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* === WHY IT MATTERS SECTION === */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.textWhite}`}>Why This Model Matters</h2>
            <p className={`${styles.sectionDescription} ${styles.textLightGray}`}>
              Addressing common challenges in legal operations
            </p>
          </div>
          
          <div className={styles.problemSolutionGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemHeader}>
                <div className={styles.problemDot}></div>
                <h3 className={styles.problemTitle}>The Problem We Solve</h3>
              </div>
              <p className={styles.problemDescription}>
                Even with modern case-management software, many firms experience:
              </p>
              <ul className={styles.problemList}>
                {[
                  'Inconsistent system updates',
                  'Missed or late follow-ups',
                  'Fragmented information across emails and platforms',
                  'Administrative work pulling time away from billable activity'
                ].map((item, idx) => (
                  <li key={idx} className={styles.problemListItem}>
                    <div className={styles.listDot}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.solutionCard}>
              <div className={styles.solutionHeader}>
                <div className={styles.solutionDot}></div>
                <h3 className={styles.solutionTitle}>Our Solution</h3>
              </div>
              <p className={styles.solutionDescription}>
                We help address these gaps by:
              </p>
              <ul className={styles.solutionList}>
                {[
                  'Owning the tracking and reporting process',
                  'Providing consistency and operational discipline',
                  'Ensuring nothing falls through the cracks',
                  'Freeing attorneys to focus on substantive legal work'
                ].map((item, idx) => (
                  <li key={idx} className={styles.solutionListItem}>
                    <div className={styles.listDotGreen}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                <strong>Our services are strictly non-legal and administrative in nature.</strong>
              </p>
              <p className={styles.scopeNoticeDescription}>
                We do not provide legal advice or legal representation. We work under attorney supervision 
                and follow all applicable regulations and ethical guidelines.
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
              Begin with a structured pilot engagement to experience our structured approach and 
              see the difference in your firm's operational efficiency.
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