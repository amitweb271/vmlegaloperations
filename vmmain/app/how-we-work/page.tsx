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
  Sparkles
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

  const engagementPoints = [
    {
      icon: Monitor,
      title: 'Work Alongside Your Systems',
      description: 'We work alongside your existing systems (e.g. Clio, MyCase, PracticePanther) or maintain structured trackers where required.',
      color: 'Blue'
    },
    {
      icon: Shield,
      title: 'Secure, Role-Based Access',
      description: 'Access is always limited, role-based, and agreed in advance to ensure data security and confidentiality.',
      color: 'Emerald'
    },
    {
      icon: FileText,
      title: 'Strict Confidentiality & NDA',
      description: 'We operate under strict confidentiality and NDA protections, with clear protocols for data handling.',
      color: 'Violet'
    },
    {
      icon: Rocket,
      title: 'Start with Pilot',
      description: 'Engagements typically begin with a small pilot before scaling, ensuring minimal risk and maximum value.',
      color: 'Amber'
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
              How We Work
            </h1>
            
            {/* Description */}
            <h2 className={howStyles.vmHowSubHeading}>
              A <span className={howStyles.vmHowGradientText}>simple, transparent, and low-risk engagement model</span> designed for U.S. law firms
            </h2>
            
            {/* Scope Card */}
            <div className={howStyles.vmHowScopeCard}>
              <div className={howStyles.vmHowScopeHeader}>
                <Target className={howStyles.vmHowScopeIcon} />
                <h3>Our Approach</h3>
              </div>
              <div className={howStyles.vmHowScopeContent}>
                <p>
                  We provide <strong>consistency, visibility, and operational discipline</strong> 
                  that keeps your cases on track and your team focused on substantive legal work.
                </p>
              </div>
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

      {/* === ENGAGEMENT MODEL SECTION === */}
      <section id="engagement" className={`${howStyles.vmHowSectionWhite} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowSectionHeader}>
            <h2 className={howStyles.vmHowSectionTitle}>Our Engagement Model</h2>
            <p className={howStyles.vmHowSectionDesc}>
              Designed to be simple, transparent, and focused on delivering consistent operational support
            </p>
          </div>
          
          <div className={howStyles.vmHowEngagementContainer}>
            <div className={howStyles.vmHowEngagementContent}>
              <div className={howStyles.vmHowEngagementText}>
                <div className={howStyles.vmHowEngagementHighlight}>
                  <Target className={howStyles.vmHowHighlightIcon} />
                  <h3 className={howStyles.vmHowHighlightTitle}>Our Role is Clear</h3>
                  <p className={howStyles.vmHowHighlightDescription}>
                    To provide consistency, visibility, and operational discipline that keeps your 
                    cases on track and your team focused on substantive legal work.
                  </p>
                </div>
                
                <div className={howStyles.vmHowStructuredSupport}>
                  <Settings className={howStyles.vmHowSupportIcon} />
                  <h4 className={howStyles.vmHowSupportTitle}>Structured Support</h4>
                  <ul className={howStyles.vmHowSupportList}>
                    {[
                      'Monthly retainer-based support',
                      'Pilot engagements available for evaluation',
                      'Scope defined based on case volume and reporting requirements',
                      'Predictable and scalable pricing structure'
                    ].map((item, idx) => (
                      <li key={idx} className={howStyles.vmHowSupportItem}>
                        <CheckCircle2 className={howStyles.vmHowSupportCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={howStyles.vmHowEngagementFeatures}>
                <h3 className={howStyles.vmHowFeaturesTitle}>Key Features of Our Approach</h3>
                <div className={howStyles.vmHowFeaturesGrid}>
                  {engagementPoints.map((point, index) => {
                    const IconComponent = point.icon;
                    const colorClass = `vmHowIcon${point.color}`;
                    return (
                      <div key={index} className={howStyles.vmHowFeatureCard}>
                        <div className={`${howStyles.vmHowFeatureIconContainer} ${howStyles[colorClass]}`}>
                          <IconComponent className={howStyles.vmHowFeatureIcon} />
                        </div>
                        <div className={howStyles.vmHowFeatureContent}>
                          <h4 className={howStyles.vmHowFeatureTitle}>{point.title}</h4>
                          <p className={howStyles.vmHowFeatureDescription}>{point.description}</p>
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
      <section id="process" className={`${howStyles.vmHowSectionGray} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowSectionHeader}>
            <h2 className={howStyles.vmHowSectionTitle}>Our 4-Step Process</h2>
            <p className={howStyles.vmHowSectionDesc}>
              A structured approach to delivering reliable support
            </p>
          </div>
          
          <div className={howStyles.vmHowProcessFlow}>
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className={howStyles.vmHowProcessStepCard}>
                  <div className={howStyles.vmHowProcessStepNumber}>{process.step}</div>
                  <div className={howStyles.vmHowProcessIconContainer}>
                    <IconComponent className={howStyles.vmHowProcessIcon} />
                  </div>
                  <h3 className={howStyles.vmHowProcessStepTitle}>{process.title}</h3>
                  <p className={howStyles.vmHowProcessStepDescription}>{process.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Process Connector Line */}
          {!isMobile && (
            <div className={howStyles.vmHowProcessConnector}>
              <div className={howStyles.vmHowConnectorLine}></div>
              <div className={howStyles.vmHowConnectorDot}></div>
              <div className={howStyles.vmHowConnectorDot}></div>
              <div className={howStyles.vmHowConnectorDot}></div>
              <div className={howStyles.vmHowConnectorDot}></div>
            </div>
          )}
        </div>
      </section>

      {/* === WHY IT MATTERS SECTION === */}
      <section id="why-it-matters" className={`${howStyles.vmHowSectionDark} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowSectionHeader}>
            <h2 className={`${howStyles.vmHowSectionTitle} ${howStyles.vmHowTextWhite}`}>Why This Model Matters</h2>
            <p className={`${howStyles.vmHowSectionDesc} ${howStyles.vmHowTextLightGray}`}>
              Addressing common challenges in legal operations
            </p>
          </div>
          
          <div className={howStyles.vmHowProblemSolutionGrid}>
            <div className={howStyles.vmHowProblemCard}>
              <div className={howStyles.vmHowProblemHeader}>
                <div className={howStyles.vmHowProblemDot}></div>
                <h3 className={howStyles.vmHowProblemTitle}>The Problem We Solve</h3>
              </div>
              <p className={howStyles.vmHowProblemDescription}>
                Even with modern case-management software, many firms experience:
              </p>
              <ul className={howStyles.vmHowProblemList}>
                {[
                  'Inconsistent system updates',
                  'Missed or late follow-ups',
                  'Fragmented information across emails and platforms',
                  'Administrative work pulling time away from billable activity'
                ].map((item, idx) => (
                  <li key={idx} className={howStyles.vmHowProblemListItem}>
                    <div className={howStyles.vmHowListDot}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={howStyles.vmHowSolutionCard}>
              <div className={howStyles.vmHowSolutionHeader}>
                <div className={howStyles.vmHowSolutionDot}></div>
                <h3 className={howStyles.vmHowSolutionTitle}>Our Solution</h3>
              </div>
              <p className={howStyles.vmHowSolutionDescription}>
                We help address these gaps by:
              </p>
              <ul className={howStyles.vmHowSolutionList}>
                {[
                  'Owning the tracking and reporting process',
                  'Providing consistency and operational discipline',
                  'Ensuring nothing falls through the cracks',
                  'Freeing attorneys to focus on substantive legal work'
                ].map((item, idx) => (
                  <li key={idx} className={howStyles.vmHowSolutionListItem}>
                    <div className={howStyles.vmHowListDotGreen}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      <section id="scope" className={`${howStyles.vmHowSectionLight} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowScopeNoticeDetailed}>
            <div className={howStyles.vmHowScopeNoticeHeader}>
              <AlertCircle className={howStyles.vmHowScopeNoticeIcon} />
              <h3 className={howStyles.vmHowScopeNoticeTitle}>Scope of Services</h3>
            </div>
            <div className={howStyles.vmHowScopeNoticeContent}>
              <p className={howStyles.vmHowScopeNoticeText}>
                <strong>Our services are strictly non-legal and administrative in nature.</strong>
              </p>
              <p className={howStyles.vmHowScopeNoticeDescription}>
                We do not provide legal advice or legal representation. We work under attorney supervision 
                and follow all applicable regulations and ethical guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section id="contact" className={`${howStyles.vmHowCtaSection} ${howStyles.vmHowReveal}`}>
        <div className={howStyles.vmHowContainer}>
          <div className={howStyles.vmHowCtaContent}>
            <div className={howStyles.vmHowCtaIconBox}>
              <Zap className={howStyles.vmHowCtaIcon} />
            </div>
            <h2 className={howStyles.vmHowCtaTitle}>Ready to Get Started?</h2>
            <p className={howStyles.vmHowCtaDesc}>
              Begin with a structured pilot engagement to experience our structured approach and 
              see the difference in your firm's operational efficiency.
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