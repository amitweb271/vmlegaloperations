"use client";

import { useState, useEffect } from 'react';
import homeStyles from './home.module.css';
import Link from 'next/link';

// Lucide Icons import
import {
  Shield, Lock, Flag, BarChart3, Clock, Building2,
  RefreshCw, FileText, CheckCircle2, Target,
  Calendar, TestTube2, TrendingUp, Scale, AlertCircle,
  Zap, Award, ArrowRight, ChevronRight, Phone,
  Check, Star, Users, Globe, Briefcase
} from 'lucide-react';

export default function HomePage() {
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
          entry.target.classList.add(homeStyles.vmRevealActive);
          setActiveSection(entry.target.id || 'hero');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px' 
    });

    // Observe all sections with reveal class
    document.querySelectorAll(`.${homeStyles.vmReveal}`).forEach(el => {
      observer.observe(el);
    });

    // 👇 YEH POORA SMOOTH SCROLL CODE HATAYA
    // Smooth scroll for anchor links - REMOVED

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={homeStyles.vmPageWrapper}>
      {/* === PREMIUM HERO SECTION === */}
      <section id="hero" className={`${homeStyles.vmHeroSection} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmHeroBg}></div>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmHeroContent}>
            {/* Premium Badge */}
            <div className={homeStyles.vmPremiumBadge}>
              <Award className={homeStyles.vmBadgeIcon} />
              <span>A service division of VM Tech Solutions</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={homeStyles.vmMainHeading}>
              VM Legal Operations
            </h1>
            
            {/* Tagline */}
            <div className={homeStyles.vmTaglineWrapper}>
              <div className={homeStyles.vmTaglineGroup}>
                <span className={homeStyles.vmTaglineItem}>Clarity.</span>
                <span className={homeStyles.vmTaglineItem}>Consistency.</span>
                <span className={homeStyles.vmTaglineItem}>Control.</span>
              </div>
            </div>
            
            {/* Subheading */}
            <h2 className={homeStyles.vmSubHeading}>
              Legal Operations & Case Management Support
              <span className={homeStyles.vmGradientText}> for U.S. Law Firms</span>
            </h2>
            
            {/* Scope of Services Card */}
            <div className={homeStyles.vmScopeCard}>
              <div className={homeStyles.vmScopeHeader}>
                <Shield className={homeStyles.vmScopeIcon} />
                <h3>Scope of Services</h3>
              </div>
              <div className={homeStyles.vmScopeContent}>
                <p>
                  VM Legal Operations provides <strong>strictly non-legal administrative support</strong> for law firm operations. 
                  We do not provide legal advice, draft legal documents, represent clients in court, or make legal decisions.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={homeStyles.vmCtaGroup}>
              <Link href="/contact" className={homeStyles.vmBtnPrimary}>
                <span>Start Pilot Program</span>
                <ArrowRight className={homeStyles.vmBtnIcon} />
              </Link>
              <Link href="/contact" className={homeStyles.vmBtnSecondary}>
                <Phone className={homeStyles.vmBtnIcon} />
                <span>Schedule Intro Call</span>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className={homeStyles.vmTrustArea}>
              <p className={homeStyles.vmTrustTitle}>Trusted by U.S. law firms for:</p>
              <div className={homeStyles.vmTrustGrid}>
                <div className={homeStyles.vmTrustItem}>
                  <div className={homeStyles.vmTrustIconBox}>
                    <Shield className={homeStyles.vmTrustIcon} />
                  </div>
                  <span className={homeStyles.vmTrustLabel}>NDA Protected</span>
                </div>
                
                <div className={homeStyles.vmTrustItem}>
                  <div className={homeStyles.vmTrustIconBox}>
                    <Lock className={homeStyles.vmTrustIcon} />
                  </div>
                  <span className={homeStyles.vmTrustLabel}>Confidential</span>
                </div>
                
                <div className={homeStyles.vmTrustItem}>
                  <div className={homeStyles.vmTrustIconBox}>
                    <Flag className={homeStyles.vmTrustIcon} />
                  </div>
                  <span className={homeStyles.vmTrustLabel}>U.S. Focused</span>
                </div>
                
                <div className={homeStyles.vmTrustItem}>
                  <div className={homeStyles.vmTrustIconBox}>
                    <BarChart3 className={homeStyles.vmTrustIcon} />
                  </div>
                  <span className={homeStyles.vmTrustLabel}>Monthly Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT WE DO SECTION === */}
      <section id="what-we-do" className={`${homeStyles.vmSectionWhite} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmSectionHeader}>
            <h2 className={homeStyles.vmSectionTitle}>What We Do</h2>
            <p className={homeStyles.vmSectionDesc}>
              We support law firms with <strong>day-to-day legal operations and case coordination</strong>
            </p>
          </div>
          
          <div className={homeStyles.vmServicesGrid}>
            {/* Service 1 - Case Status Tracking */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <BarChart3 className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Case Status Tracking</h3>
              </div>
              <ul className={homeStyles.vmServiceList}>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Tracking case stages and progress across matters</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Maintaining structured case trackers or working alongside your existing systems</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 - Deadline Monitoring */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <Clock className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Deadline & Timeline Monitoring</h3>
              </div>
              <ul className={homeStyles.vmServiceList}>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Monitoring court-driven and rule-based deadlines</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Flagging upcoming actions and pending responses</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 - Court Monitoring */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <Building2 className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Court Notification & Docket Monitoring</h3>
              </div>
              <ul className={homeStyles.vmServiceList}>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Monitoring court notifications, filing confirmations, and docket updates</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Updating status based on permitted access and information received</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 - Follow-up & Coordination */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <RefreshCw className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Follow-Up & Coordination Support</h3>
              </div>
              <ul className={homeStyles.vmServiceList}>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Tracking pending actions</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Coordinating status confirmations with attorneys or firm staff</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Escalating approaching deadlines</span>
                </li>
              </ul>
            </div>
            
            {/* Service 5 - Weekly Status Reporting */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <FileText className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Weekly Status Reporting</h3>
              </div>
              <div className={homeStyles.vmServiceContent}>
                <p className={homeStyles.vmServiceDesc}>
                  Clear, structured reports covering:
                </p>
                <ul className={homeStyles.vmServiceList}>
                  <li className={homeStyles.vmServiceListItem}>
                    <Check className={homeStyles.vmListIcon} />
                    <span>Open matters</span>
                  </li>
                  <li className={homeStyles.vmServiceListItem}>
                    <Check className={homeStyles.vmListIcon} />
                    <span>Upcoming deadlines</span>
                  </li>
                  <li className={homeStyles.vmServiceListItem}>
                    <Check className={homeStyles.vmListIcon} />
                    <span>Actions taken</span>
                  </li>
                  <li className={homeStyles.vmServiceListItem}>
                    <Check className={homeStyles.vmListIcon} />
                    <span>Items requiring attention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={homeStyles.vmCenterBtn}>
            <Link href="/services" className={homeStyles.vmLinkView}>
              <span>View Detailed Services</span>
              <ChevronRight className={homeStyles.vmBtnIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* === ABOUT OUR APPROACH SECTION === */}
      <section id="approach" className={`${homeStyles.vmSectionGray} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmSectionHeader}>
            <h2 className={homeStyles.vmSectionTitle}>About Our Approach</h2>
            <p className={homeStyles.vmSectionDesc}>
              How we deliver reliable legal operations support
            </p>
          </div>
          
          <div className={homeStyles.vmApproachWrapper}>
            <div className={homeStyles.vmApproachContent}>
              {/* Text Section */}
              <div className={homeStyles.vmApproachText}>
                <p className={homeStyles.vmApproachPara}>
                  <strong>We provide offshore legal operations support focused strictly on non-legal administrative work</strong> that law firms rely on to maintain consistency and control.
                </p>
                <p className={homeStyles.vmApproachPara}>
                  <strong>Our approach is process-driven and risk-aware.</strong> We work within clearly defined scopes, respect confidentiality requirements, and integrate with existing workflows rather than disrupting them.
                </p>
                <p className={homeStyles.vmApproachPara}>
                  <strong>This model is designed for firms that value clarity, accountability, and reliable follow-through</strong> — without increasing internal headcount or administrative overhead.
                </p>
              </div>
              
              {/* Key Features Card */}
              <div className={homeStyles.vmFeaturesCard}>
                <h3 className={homeStyles.vmFeaturesTitle}>Key Features</h3>
                <ul className={homeStyles.vmFeaturesList}>
                  {/* Feature 1 */}
                  <li 
                    className={homeStyles.vmFeatureItem}
                    data-tooltip="Core Principle #1"
                  >
                    <CheckCircle2 className={homeStyles.vmFeatureIcon} />
                    <span>Strictly non-legal administrative scope</span>
                  </li>
                  
                  {/* Feature 2 */}
                  <li 
                    className={homeStyles.vmFeatureItem}
                    data-tooltip="Core Principle #2"
                  >
                    <CheckCircle2 className={homeStyles.vmFeatureIcon} />
                    <span>Clear scope definition and boundaries</span>
                  </li>
                  
                  {/* Feature 3 */}
                  <li 
                    className={homeStyles.vmFeatureItem}
                    data-tooltip="Core Principle #3"
                  >
                    <CheckCircle2 className={homeStyles.vmFeatureIcon} />
                    <span>Confidentiality and NDA protection</span>
                  </li>
                  
                  {/* Feature 4 */}
                  <li 
                    className={homeStyles.vmFeatureItem}
                    data-tooltip="Core Principle #4"
                  >
                    <CheckCircle2 className={homeStyles.vmFeatureIcon} />
                    <span>Workflow integration (no disruption)</span>
                  </li>
                  
                  {/* Feature 5 */}
                  <li 
                    className={homeStyles.vmFeatureItem}
                    data-tooltip="Core Principle #5"
                  >
                    <CheckCircle2 className={homeStyles.vmFeatureIcon} />
                    <span>Process-driven methodology</span>
                  </li>
                  
                  {/* Feature 6 */}
                  <li 
                    className={homeStyles.vmFeatureItem}
                    data-tooltip="Core Principle #6"
                  >
                    <CheckCircle2 className={homeStyles.vmFeatureIcon} />
                    <span>Risk-aware operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === HOW WE WORK SECTION === */}
      <section id="how-we-work" className={`${homeStyles.vmSectionWhite} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmSectionHeader}>
            <h2 className={homeStyles.vmSectionTitle}>How We Work</h2>
            <p className={homeStyles.vmSectionDesc}>
              Our engagement model is designed to be <strong>simple, transparent, and low-risk</strong>
            </p>
          </div>
          
          <div className={homeStyles.vmWorkWrapper}>
            <div className={homeStyles.vmWorkContent}>
              <div className={homeStyles.vmWorkList}>
                <div className={homeStyles.vmWorkItem}>
                  <div className={homeStyles.vmWorkIconBox}>
                    <CheckCircle2 className={homeStyles.vmWorkIcon} />
                  </div>
                  <div>
                    <h3 className={homeStyles.vmWorkItemTitle}>Work Alongside Your Systems</h3>
                    <p className={homeStyles.vmWorkItemDesc}>
                      We work alongside your existing systems (e.g. Clio, MyCase, PracticePanther) 
                      or maintain structured trackers where required
                    </p>
                  </div>
                </div>
                
                <div className={homeStyles.vmWorkItem}>
                  <div className={homeStyles.vmWorkIconBox}>
                    <Shield className={homeStyles.vmWorkIcon} />
                  </div>
                  <div>
                    <h3 className={homeStyles.vmWorkItemTitle}>Secure Access</h3>
                    <p className={homeStyles.vmWorkItemDesc}>
                      Access is always limited, role-based, and agreed in advance
                    </p>
                  </div>
                </div>
                
                <div className={homeStyles.vmWorkItem}>
                  <div className={homeStyles.vmWorkIconBox}>
                    <Lock className={homeStyles.vmWorkIcon} />
                  </div>
                  <div>
                    <h3 className={homeStyles.vmWorkItemTitle}>Confidentiality & NDA</h3>
                    <p className={homeStyles.vmWorkItemDesc}>
                      We operate under strict confidentiality and NDA protections
                    </p>
                  </div>
                </div>
                
                <div className={homeStyles.vmWorkItem}>
                  <div className={homeStyles.vmWorkIconBox}>
                    <TestTube2 className={homeStyles.vmWorkIcon} />
                  </div>
                  <div>
                    <h3 className={homeStyles.vmWorkItemTitle}>Start with Pilot</h3>
                    <p className={homeStyles.vmWorkItemDesc}>
                      Engagements typically begin with a small pilot before scaling
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={homeStyles.vmRoleCard}>
                <div className={homeStyles.vmRoleIconBox}>
                  <Target className={homeStyles.vmRoleIcon} />
                </div>
                <h3 className={homeStyles.vmRoleTitle}>Our Role is Simple</h3>
                <p className={homeStyles.vmRoleDesc}>
                  To provide consistency, visibility, and operational discipline.
                </p>
                <Link href="/how-we-work" className={homeStyles.vmRoleBtn}>
                  Learn More
                  <ChevronRight className={homeStyles.vmBtnIcon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHO WE SUPPORT SECTION === */}
      <section id="who-we-support" className={`${homeStyles.vmSectionDark} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmSectionHeader}>
            <h2 className={`${homeStyles.vmSectionTitle} ${homeStyles.vmTextWhite}`}>Who We Support</h2>
          </div>
          
          <div className={homeStyles.vmSupportGrid}>
            <div className={homeStyles.vmSupportCard}>
              <div className={homeStyles.vmSupportHeader}>
                <div className={homeStyles.vmSupportDot}></div>
                <h3 className={homeStyles.vmSupportTitle}>Ideal Clients</h3>
              </div>
              <ul className={homeStyles.vmSupportList}>
                {[
                  'Small and mid-size U.S. law firms',
                  'Debt collection and consumer litigation firms',
                  'Firms handling high-volume matters',
                  'Legal teams seeking administrative support without expanding internal staff'
                ].map((item, idx) => (
                  <li key={idx} className={homeStyles.vmSupportListItem}>
                    <div className={homeStyles.vmListDot}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={homeStyles.vmSupportCard}>
              <div className={homeStyles.vmSupportHeader}>
                <div className={homeStyles.vmSupportDotYellow}></div>
                <h3 className={homeStyles.vmSupportTitle}>Why Legal Operations Support Matters</h3>
              </div>
              <p className={homeStyles.vmSupportDesc}>
                Even with modern case-management software, many firms experience:
              </p>
              <ul className={homeStyles.vmSupportList}>
                {[
                  'Inconsistent system updates',
                  'Missed or late follow-ups',
                  'Fragmented information across emails and platforms',
                  'Administrative work pulling time away from billable activity'
                ].map((item, idx) => (
                  <li key={idx} className={homeStyles.vmSupportListItem}>
                    <div className={homeStyles.vmListDotYellow}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={homeStyles.vmSupportHighlight}>
                We help address these gaps by owning the tracking and reporting process, 
                so attorneys can focus on substantive legal work.
              </p>
            </div>
          </div>
          
          <div className={homeStyles.vmCenterBtn}>
            <Link href="/who-we-support" className={homeStyles.vmBtnOutline}>
              View Details
              <ChevronRight className={homeStyles.vmBtnIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* === WHAT WE DON'T DO SECTION === */}
      <section id="what-we-dont-do" className={`${homeStyles.vmSectionWhite} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmSectionHeader}>
            <h2 className={homeStyles.vmSectionTitle}>What We Do NOT Do</h2>
            <p className={homeStyles.vmSectionDesc}>
              To maintain clarity and compliance, we do <strong>not</strong>:
            </p>
          </div>
          
          <div className={homeStyles.vmNotDoGrid}>
            <div className={homeStyles.vmNotDoCard}>
              <div className={homeStyles.vmNotDoHeader}>
                <div className={homeStyles.vmNotDoIconBox}>
                  <Scale className={homeStyles.vmNotDoIcon} />
                </div>
                <h3 className={homeStyles.vmNotDoTitle}>Legal Advice & Representation</h3>
              </div>
              <p className={homeStyles.vmNotDoDesc}>
                We do not provide legal advice, draft pleadings or legal opinions, 
                or represent clients before any court or authority.
              </p>
            </div>
            
            <div className={homeStyles.vmNotDoCard}>
              <div className={homeStyles.vmNotDoHeader}>
                <div className={homeStyles.vmNotDoIconBox}>
                  <AlertCircle className={homeStyles.vmNotDoIcon} />
                </div>
                <h3 className={homeStyles.vmNotDoTitle}>Legal Decision Making</h3>
              </div>
              <p className={homeStyles.vmNotDoDesc}>
                We do not make legal or strategic decisions, nor do we access 
                trust accounts or billing systems.
              </p>
            </div>
          </div>
          
          <div className={homeStyles.vmNoteCard}>
            <p className={homeStyles.vmNoteText}>
              Our services are limited to <strong>non-legal administrative support only</strong>.
            </p>
            <div className={homeStyles.vmNoteButton}>
              <Link href="/what-we-dont-do" className={homeStyles.vmBtnOutlineDark}>
                Full Service Exclusions
                <ChevronRight className={homeStyles.vmBtnIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === ENGAGEMENT MODEL SECTION === */}
      <section id="engagement" className={`${homeStyles.vmSectionLight} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmSectionHeader}>
            <h2 className={homeStyles.vmSectionTitle}>Engagement Model</h2>
          </div>
          
          <div className={homeStyles.vmEngagementGrid}>
            <div className={homeStyles.vmEngagementCard}>
              <div className={homeStyles.vmEngagementIconBox}>
                <Calendar className={homeStyles.vmEngagementIcon} />
              </div>
              <h3 className={homeStyles.vmEngagementTitle}>Monthly Retainer</h3>
              <p className={homeStyles.vmEngagementDesc}>
                Predictable monthly support based on your firm's needs
              </p>
            </div>
            
            <div className={homeStyles.vmEngagementCard}>
              <div className={homeStyles.vmEngagementIconBox}>
                <TestTube2 className={homeStyles.vmEngagementIcon} />
              </div>
              <h3 className={homeStyles.vmEngagementTitle}>Pilot Engagements</h3>
              <p className={homeStyles.vmEngagementDesc}>
                Start small to evaluate our services with minimal commitment
              </p>
            </div>
            
            <div className={homeStyles.vmEngagementCard}>
              <div className={homeStyles.vmEngagementIconBox}>
                <TrendingUp className={homeStyles.vmEngagementIcon} />
              </div>
              <h3 className={homeStyles.vmEngagementTitle}>Scalable Pricing</h3>
              <p className={homeStyles.vmEngagementDesc}>
                Pricing structured to be predictable and scalable based on case volume
              </p>
            </div>
          </div>
          
          <div className={homeStyles.vmScopeCardBlue}>
            <p className={homeStyles.vmScopeBlueText}>
              <strong>Scope</strong> defined based on case volume and reporting requirements
            </p>
            <Link href="/contact" className={homeStyles.vmBtnDiscuss}>
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section id="contact-cta" className={`${homeStyles.vmCtaSection} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmCtaContent}>
            <div className={homeStyles.vmCtaIconBox}>
              <Zap className={homeStyles.vmCtaIcon} />
            </div>
            <h2 className={homeStyles.vmCtaTitle}>Ready to Streamline Your Operations?</h2>
            <p className={homeStyles.vmCtaDesc}>
              Start with a structured pilot engagement to experience how our structured approach 
              can improve your firm's operational efficiency.
            </p>
            
            <div className={homeStyles.vmCtaBtnGroup}>
              <Link href="/contact" className={homeStyles.vmCtaBtnPrimary}>
                Start Pilot Program
              </Link>
              <Link href="/contact" className={homeStyles.vmCtaBtnSecondary}>
                Schedule Intro Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}