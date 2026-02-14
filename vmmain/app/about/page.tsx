"use client";

import { useState, useEffect } from 'react';
import aboutStyles from './about.module.css';
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
  Flag,
  Sparkles,
  Gem
} from 'lucide-react';

export default function AboutPage() {
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
          entry.target.classList.add(aboutStyles.vmAboutRevealActive);
          setActiveSection(entry.target.id || 'hero');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px' 
    });

    // Observe all sections with reveal class
    document.querySelectorAll(`.${aboutStyles.vmAboutReveal}`).forEach(el => {
      observer.observe(el);
    });

    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={aboutStyles.vmAboutPageWrapper}>
      {/* === PREMIUM HERO SECTION === */}
      <section id="hero" className={`${aboutStyles.vmAboutHeroSection} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutHeroBg}></div>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutHeroContent}>
            {/* Premium Badge */}
            <div className={aboutStyles.vmAboutBadge}>
              <Award className={aboutStyles.vmAboutBadgeIcon} />
              <span>A service division of VM Tech Solutions</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={aboutStyles.vmAboutMainHeading}>
              About VM Legal Operations
            </h1>
            
            {/* Description */}
            <h2 className={aboutStyles.vmAboutSubHeading}>
              We provide <span className={aboutStyles.vmAboutGradientText}>offshore legal operations support</span> to
              U.S. law firms, legal departments, and collection agencies.
            </h2>
            
            {/* Scope Card */}
            <div className={aboutStyles.vmAboutScopeCard}>
              <div className={aboutStyles.vmAboutScopeHeader}>
                <ShieldCheck className={aboutStyles.vmAboutScopeIcon} />
                <h3>Scope of Services</h3>
              </div>
              <div className={aboutStyles.vmAboutScopeContent}>
                <p>
                  VM Legal Operations provides <strong>strictly non-legal administrative support</strong> for law firm operations. 
                  We do not provide legal advice, draft legal documents, represent clients in court, or make legal decisions.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={aboutStyles.vmAboutCtaGroup}>
              <Link href="/contact" className={aboutStyles.vmAboutBtnPrimary}>
                <span>Start Pilot Program</span>
                <ArrowRight className={aboutStyles.vmAboutBtnIcon} />
              </Link>
              <Link href="/contact" className={aboutStyles.vmAboutBtnSecondary}>
                <Phone className={aboutStyles.vmAboutBtnIcon} />
                <span>Schedule Intro Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === OUR APPROACH SECTION (UPDATED WITH PREMIUM FEATURES) === */}
      <section id="approach" className={`${aboutStyles.vmAboutSectionWhite} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutSectionHeader}>
            <h2 className={aboutStyles.vmAboutSectionTitle}>Our Approach & Philosophy</h2>
            <p className={aboutStyles.vmAboutSectionDesc}>
              How we deliver reliable legal operations support
            </p>
          </div>
          
          <div className={aboutStyles.vmAboutApproachWrapper}>
            <div className={aboutStyles.vmAboutApproachContent}>
              {/* Text Section */}
              <div className={aboutStyles.vmAboutApproachText}>
                <div className={aboutStyles.vmAboutApproachPara}>
                  <strong>We provide offshore legal operations support focused strictly on non-legal administrative work</strong> that law firms rely on to maintain consistency and control.
                </div>
                <div className={aboutStyles.vmAboutApproachPara}>
                  <strong>Our approach is process-driven and risk-aware.</strong> We work within clearly defined scopes, respect confidentiality requirements, and integrate with existing workflows rather than disrupting them.
                </div>
                <div className={aboutStyles.vmAboutApproachPara}>
                  <strong>This model is designed for firms that value clarity, accountability, and reliable follow-through</strong> — without increasing internal headcount or administrative overhead.
                </div>
              </div>
              
              {/* Core Principles Card (PREMIUM) */}
              <div className={aboutStyles.vmAboutFeaturesCard}>
                <div className={aboutStyles.vmAboutFeaturesHeader}>
                  <Target className={aboutStyles.vmAboutFeaturesIcon} />
                  <h3 className={aboutStyles.vmAboutFeaturesTitle}>Our Core Principles</h3>
                </div>
                <ul className={aboutStyles.vmAboutFeaturesList}>
                  {/* Principle 1 */}
                  <li 
                    className={aboutStyles.vmAboutFeatureItem}
                    data-tooltip="Core Principle #1"
                  >
                    <CheckCircle2 className={aboutStyles.vmAboutFeatureIcon} />
                    <span>Clarity in scope and boundaries</span>
                  </li>
                  
                  {/* Principle 2 */}
                  <li 
                    className={aboutStyles.vmAboutFeatureItem}
                    data-tooltip="Core Principle #2"
                  >
                    <CheckCircle2 className={aboutStyles.vmAboutFeatureIcon} />
                    <span>Consistency in tracking and reporting</span>
                  </li>
                  
                  {/* Principle 3 */}
                  <li 
                    className={aboutStyles.vmAboutFeatureItem}
                    data-tooltip="Core Principle #3"
                  >
                    <CheckCircle2 className={aboutStyles.vmAboutFeatureIcon} />
                    <span>Control through structured processes</span>
                  </li>
                  
                  {/* Principle 4 */}
                  <li 
                    className={aboutStyles.vmAboutFeatureItem}
                    data-tooltip="Core Principle #4"
                  >
                    <CheckCircle2 className={aboutStyles.vmAboutFeatureIcon} />
                    <span>Confidentiality and data protection</span>
                  </li>
                  
                  {/* Principle 5 */}
                  <li 
                    className={aboutStyles.vmAboutFeatureItem}
                    data-tooltip="Core Principle #5"
                  >
                    <CheckCircle2 className={aboutStyles.vmAboutFeatureIcon} />
                    <span>Process-driven methodology</span>
                  </li>
                  
                  {/* Principle 6 */}
                  <li 
                    className={aboutStyles.vmAboutFeatureItem}
                    data-tooltip="Core Principle #6"
                  >
                    <CheckCircle2 className={aboutStyles.vmAboutFeatureIcon} />
                    <span>Risk-aware operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT WE DO SECTION === */}
      <section id="services" className={`${aboutStyles.vmAboutSectionGray} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutSectionHeader}>
            <h2 className={aboutStyles.vmAboutSectionTitle}>What We Do</h2>
            <p className={aboutStyles.vmAboutSectionDesc}>
              Day-to-day legal operations and case coordination support
            </p>
          </div>
          
          <div className={aboutStyles.vmAboutServicesGrid}>
            {/* Case Status Tracking */}
            <div className={aboutStyles.vmAboutServiceCard}>
              <div className={aboutStyles.vmAboutServiceHeader}>
                <div className={aboutStyles.vmAboutServiceIconBox}>
                  <BarChart3 className={aboutStyles.vmAboutServiceIcon} />
                </div>
                <h3 className={aboutStyles.vmAboutServiceTitle}>Case Status Tracking</h3>
              </div>
              <div className={aboutStyles.vmAboutServiceContent}>
                <p className={aboutStyles.vmAboutServiceDesc}>
                  Track case stages and progress across matters with structured reporting
                </p>
                <ul className={aboutStyles.vmAboutServiceList}>
                  <li className={aboutStyles.vmAboutServiceListItem}>
                    <CheckCircle2 className={aboutStyles.vmAboutListIcon} />
                    <span>Real-time case progress monitoring</span>
                  </li>
                  <li className={aboutStyles.vmAboutServiceListItem}>
                    <CheckCircle2 className={aboutStyles.vmAboutListIcon} />
                    <span>Structured tracker maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Deadline Monitoring */}
            <div className={aboutStyles.vmAboutServiceCard}>
              <div className={aboutStyles.vmAboutServiceHeader}>
                <div className={aboutStyles.vmAboutServiceIconBox}>
                  <Clock className={aboutStyles.vmAboutServiceIcon} />
                </div>
                <h3 className={aboutStyles.vmAboutServiceTitle}>Deadline Monitoring</h3>
              </div>
              <div className={aboutStyles.vmAboutServiceContent}>
                <p className={aboutStyles.vmAboutServiceDesc}>
                  Monitor court-driven and rule-based deadlines with proactive alerts
                </p>
                <ul className={aboutStyles.vmAboutServiceList}>
                  <li className={aboutStyles.vmAboutServiceListItem}>
                    <CheckCircle2 className={aboutStyles.vmAboutListIcon} />
                    <span>Court deadline tracking</span>
                  </li>
                  <li className={aboutStyles.vmAboutServiceListItem}>
                    <CheckCircle2 className={aboutStyles.vmAboutListIcon} />
                    <span>Proactive action flagging</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Court Monitoring */}
            <div className={aboutStyles.vmAboutServiceCard}>
              <div className={aboutStyles.vmAboutServiceHeader}>
                <div className={aboutStyles.vmAboutServiceIconBox}>
                  <Building2 className={aboutStyles.vmAboutServiceIcon} />
                </div>
                <h3 className={aboutStyles.vmAboutServiceTitle}>Court Monitoring</h3>
              </div>
              <div className={aboutStyles.vmAboutServiceContent}>
                <p className={aboutStyles.vmAboutServiceDesc}>
                  Track docket updates and court notifications with status reporting
                </p>
                <ul className={aboutStyles.vmAboutServiceList}>
                  <li className={aboutStyles.vmAboutServiceListItem}>
                    <CheckCircle2 className={aboutStyles.vmAboutListIcon} />
                    <span>Docket update tracking</span>
                  </li>
                  <li className={aboutStyles.vmAboutServiceListItem}>
                    <CheckCircle2 className={aboutStyles.vmAboutListIcon} />
                    <span>Court notification monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Follow-up Coordination */}
            <div className={aboutStyles.vmAboutServiceCard}>
              <div className={aboutStyles.vmAboutServiceHeader}>
                <div className={aboutStyles.vmAboutServiceIconBox}>
                  <FileText className={aboutStyles.vmAboutServiceIcon} />
                </div>
                <h3 className={aboutStyles.vmAboutServiceTitle}>Follow-up & Coordination</h3>
              </div>
              <div className={aboutStyles.vmAboutServiceContent}>
                <p className={aboutStyles.vmAboutServiceDesc}>
                  Coordinate status confirmations and escalate approaching deadlines
                </p>
                <ul className={aboutStyles.vmAboutServiceList}>
                  <li className={aboutStyles.vmAboutServiceListItem}>
                    <CheckCircle2 className={aboutStyles.vmAboutListIcon} />
                    <span>Status confirmation coordination</span>
                  </li>
                  <li className={aboutStyles.vmAboutServiceListItem}>
                    <CheckCircle2 className={aboutStyles.vmAboutListIcon} />
                    <span>Deadline escalation management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={aboutStyles.vmAboutCenterBtn}>
            <Link href="/services" className={aboutStyles.vmAboutLinkView}>
              <span>View All Services</span>
              <ChevronRight className={aboutStyles.vmAboutBtnIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE (PREMIUM) === */}
      <section id="scope" className={`${aboutStyles.vmAboutSectionDark} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutScopeNotice}>
            <div className={aboutStyles.vmAboutScopeIconContainer}>
              <Scale className={aboutStyles.vmAboutScopeNoticeIcon} />
            </div>
            <h3 className={aboutStyles.vmAboutScopeNoticeTitle}>Scope of Services</h3>
            <p className={aboutStyles.vmAboutScopeNoticeText}>
              Our services are <strong>strictly non-legal and administrative</strong> in nature.
            </p>
            <p className={aboutStyles.vmAboutScopeNoticeDescription}>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions.
            </p>
          </div>
        </div>
      </section>

      {/* === OUR VALUES SECTION (PREMIUM) === */}
      <section id="values" className={`${aboutStyles.vmAboutSectionWhite} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutSectionHeader}>
            <h2 className={aboutStyles.vmAboutSectionTitle}>Our Values</h2>
            <p className={aboutStyles.vmAboutSectionDesc}>
              The principles that guide our operations
            </p>
          </div>
          
          <div className={aboutStyles.vmAboutValuesGrid}>
            {/* Confidentiality */}
            <div className={aboutStyles.vmAboutValueCard}>
              <div className={aboutStyles.vmAboutValueIconContainer}>
                <Lock className={aboutStyles.vmAboutValueIcon} />
              </div>
              <h3 className={aboutStyles.vmAboutValueTitle}>Confidentiality</h3>
              <p className={aboutStyles.vmAboutValueDescription}>
                Strict data protection and NDA compliance for all client information
              </p>
            </div>
            
            {/* Precision */}
            <div className={aboutStyles.vmAboutValueCard}>
              <div className={aboutStyles.vmAboutValueIconContainer}>
                <Target className={aboutStyles.vmAboutValueIcon} />
              </div>
              <h3 className={aboutStyles.vmAboutValueTitle}>Precision</h3>
              <p className={aboutStyles.vmAboutValueDescription}>
                Accurate tracking and reporting with attention to detail
              </p>
            </div>
            
            {/* Collaboration */}
            <div className={aboutStyles.vmAboutValueCard}>
              <div className={aboutStyles.vmAboutValueIconContainer}>
                <Users className={aboutStyles.vmAboutValueIcon} />
              </div>
              <h3 className={aboutStyles.vmAboutValueTitle}>Collaboration</h3>
              <p className={aboutStyles.vmAboutValueDescription}>
                Seamless integration with existing firm workflows and systems
              </p>
            </div>
            
            {/* Reliability */}
            <div className={aboutStyles.vmAboutValueCard}>
              <div className={aboutStyles.vmAboutValueIconContainer}>
                <Flag className={aboutStyles.vmAboutValueIcon} />
              </div>
              <h3 className={aboutStyles.vmAboutValueTitle}>Reliability</h3>
              <p className={aboutStyles.vmAboutValueDescription}>
                Consistent performance and dependable follow-through
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section id="contact" className={`${aboutStyles.vmAboutCtaSection} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutCtaContent}>
            <div className={aboutStyles.vmAboutCtaIconBox}>
              <Zap className={aboutStyles.vmAboutCtaIcon} />
            </div>
            <h2 className={aboutStyles.vmAboutCtaTitle}>Ready to Get Started?</h2>
            <p className={aboutStyles.vmAboutCtaDesc}>
              Begin with a structured pilot engagement to experience our approach and see the difference 
              in your firm's operational efficiency.
            </p>
            
            <div className={aboutStyles.vmAboutCtaBtnGroup}>
              <Link href="/contact" className={aboutStyles.vmAboutCtaBtnPrimary}>
                Start Pilot Program
              </Link>
              <Link href="/contact" className={aboutStyles.vmAboutCtaBtnSecondary}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}