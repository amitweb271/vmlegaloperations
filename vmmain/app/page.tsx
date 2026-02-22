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
  Check, Star, Users, Globe, Briefcase, Gavel,
  FolderOpen, BookOpen, Layers, Activity
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
            
            {/* Tagline - UPDATED to reflect new positioning */}
            <div className={homeStyles.vmTaglineWrapper}>
              <div className={homeStyles.vmTaglineGroup}>
                <span className={homeStyles.vmTaglineItem}>Clarity.</span>
                <span className={homeStyles.vmTaglineItem}>Consistency.</span>
                <span className={homeStyles.vmTaglineItem}>Control.</span>
              </div>
            </div>
            
            {/* Subheading - UPDATED with new line */}
            <h2 className={homeStyles.vmSubHeading}>
              Remote Legal Operations & Litigation Support
              <span className={homeStyles.vmGradientText}> for U.S. Law Firms</span>
            </h2>
            
            {/* Scope of Services Card - UPDATED with professional version */}
            <div className={homeStyles.vmScopeCard}>
              <div className={homeStyles.vmScopeHeader}>
                <Shield className={homeStyles.vmScopeIcon} />
                <h3>Scope of Services</h3>
              </div>
              <div className={homeStyles.vmScopeContent}>
                <p>
                  VM Legal Operations provides remote legal operations and paralegal support exclusively to licensed U.S. law firms. All work is performed under attorney supervision. We do not provide legal advice or represent clients.
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

      {/* === WHAT WE DO SECTION - EXPANDED WITH 4 BLOCKS === */}
      <section id="what-we-do" className={`${homeStyles.vmSectionWhite} ${homeStyles.vmReveal}`}>
        <div className={homeStyles.vmContainer}>
          <div className={homeStyles.vmSectionHeader}>
            <h2 className={homeStyles.vmSectionTitle}>What We Do</h2>
            <p className={homeStyles.vmSectionDesc}>
              Structured legal operations and paralegal support under clearly defined scope and attorney supervision
            </p>
          </div>
          
          <div className={homeStyles.vmServicesGrid}>
            {/* A) Legal Operations & Case Management */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <BarChart3 className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Legal Operations & Case Management</h3>
              </div>
              <ul className={homeStyles.vmServiceList}>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Case tracking across all active matters</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Deadline monitoring and calendar management</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Weekly status reporting with actionable insights</span>
                </li>
              </ul>
            </div>
            
            {/* B) Litigation Support - NEW */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <Gavel className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Litigation Support</h3>
              </div>
              <ul className={homeStyles.vmServiceList}>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Case summaries and timeline preparation</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Deposition summaries and key point extraction</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Exhibit indexing and chronology preparation</span>
                </li>
              </ul>
            </div>
            
            {/* C) Personal Injury Support - NEW */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <Activity className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Personal Injury Support</h3>
              </div>
              <ul className={homeStyles.vmServiceList}>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Medical record organization and summarization</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Treatment timeline and chronology charts</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Demand package support and document preparation</span>
                </li>
              </ul>
            </div>
            
            {/* D) Document Review & Organization */}
            <div className={homeStyles.vmServiceCard}>
              <div className={homeStyles.vmServiceHeader}>
                <div className={homeStyles.vmServiceIconBox}>
                  <FolderOpen className={homeStyles.vmServiceIcon} />
                </div>
                <h3 className={homeStyles.vmServiceTitle}>Document Review & Organization</h3>
              </div>
              <ul className={homeStyles.vmServiceList}>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>Discovery indexing and document categorization</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>PDF bookmarking and metadata organization</span>
                </li>
                <li className={homeStyles.vmServiceListItem}>
                  <CheckCircle2 className={homeStyles.vmListIcon} />
                  <span>File structuring and document management</span>
                </li>
              </ul>
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

      {/* === ABOUT OUR APPROACH SECTION - UPDATED WITH PROFESSIONAL TONE === */}
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
              {/* Text Section - UPDATED with new professional tone */}
              <div className={homeStyles.vmApproachText}>
                <p className={homeStyles.vmApproachPara}>
                  <strong>Structured legal operations and paralegal support under clearly defined scope and attorney supervision.</strong> We provide remote assistance that integrates seamlessly with your existing workflows.
                </p>
                <p className={homeStyles.vmApproachPara}>
                  <strong>Our approach is process-driven and risk-aware.</strong> We work within clearly defined boundaries, maintain strict confidentiality, and focus on delivering clarity and consistency across all matters.
                </p>
                <p className={homeStyles.vmApproachPara}>
                  <strong>This model is designed for firms that value operational control and reliable follow-through</strong> — without increasing internal headcount or administrative overhead.
                </p>
              </div>
              
              {/* Key Features Card */}
              <div className={homeStyles.vmFeaturesCard}>
                <h3 className={homeStyles.vmFeaturesTitle}>Key Features</h3>
                <ul className={homeStyles.vmFeaturesList}>
                  {/* Feature 1 - UPDATED */}
                  <li 
                    className={homeStyles.vmFeatureItem}
                    data-tooltip="Core Principle #1"
                  >
                    <CheckCircle2 className={homeStyles.vmFeatureIcon} />
                    <span>Attorney-supervised support structure</span>
                  </li>
                  
                  {/* Feature 2 - UPDATED */}
                  <li 
                    className={homeStyles.vmFeatureItem}
                    data-tooltip="Core Principle #2"
                  >
                    <CheckCircle2 className={homeStyles.vmFeatureIcon} />
                    <span>Clearly defined scope and boundaries</span>
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

      {/* === WHO WE SUPPORT SECTION - UPDATED WITHOUT DEBT COLLECTION HIGHLIGHT === */}
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
                  'Small & mid-size U.S. law firms',
                  'Litigation-focused practices',
                  'Personal injury firms',
                  'Immigration firms',
                  'Firms handling high-volume matters'
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

      {/* === WHAT WE DON'T DO SECTION - REMOVED FROM HOMEPAGE === */}

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