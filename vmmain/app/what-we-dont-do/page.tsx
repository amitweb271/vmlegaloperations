"use client";

import { useState, useEffect } from 'react';
import dontStyles from './what-we-dont-do.module.css';
import Link from 'next/link';

// Lucide Icons import
import {
  Award,
  ShieldCheck,
  AlertCircle,
  Scale,
  FileText,
  Gavel,
  Brain,
  DollarSign,
  Search,
  BarChart3,
  Clock,
  Building2,
  RefreshCw,
  FileBarChart,
  CheckCircle2,
  Shield,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  Phone,
  Target,
  Users,
  Sparkles
} from 'lucide-react';

export default function WhatWeDontDoPage() {
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
          entry.target.classList.add(dontStyles.vmWhatDontRevealActive);
          setActiveSection(entry.target.id || 'hero');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px' 
    });

    // Observe all sections with reveal class
    document.querySelectorAll(`.${dontStyles.vmWhatDontReveal}`).forEach(el => {
      observer.observe(el);
    });

    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const dontDoItems = [
    {
      icon: Scale,
      title: 'Provide Legal Advice',
      description: 'We do not offer legal opinions, interpretations of law, or strategic legal guidance.',
      reason: 'Only licensed attorneys can provide legal advice. We focus exclusively on administrative support.',
      color: 'gray'
    },
    {
      icon: FileText,
      title: 'Draft Legal Documents',
      description: 'We do not prepare pleadings, motions, briefs, contracts, or other legal documents.',
      reason: 'Document drafting requires legal analysis and judgment, which is outside our scope.',
      color: 'gray'
    },
    {
      icon: Gavel,
      title: 'Represent Clients in Court',
      description: 'We do not appear before any court, tribunal, or administrative body.',
      reason: 'Court representation requires a law license and is the responsibility of your firm\'s attorneys.',
      color: 'gray'
    },
    {
      icon: Brain,
      title: 'Make Legal Decisions',
      description: 'We do not make strategic decisions, case evaluations, or settlement recommendations.',
      reason: 'Legal decision-making requires attorney-client privilege and professional judgment.',
      color: 'gray'
    },
    {
      icon: DollarSign,
      title: 'Access Trust Accounts',
      description: 'We do not handle client funds, billing, or financial transactions.',
      reason: 'Financial matters are strictly managed by your firm to maintain compliance with trust accounting rules.',
      color: 'gray'
    },
    {
      icon: Search,
      title: 'Provide Legal Research',
      description: 'We do not conduct case law research, statutory analysis, or legal precedent research.',
      reason: 'Legal research requires legal training and interpretation skills that we do not provide.',
      color: 'gray'
    }
  ];

  const whatWeDo = [
    {
      icon: BarChart3,
      title: 'Case Status Tracking',
      description: 'Monitor case stages, maintain structured trackers, update progress.',
      color: 'Blue'
    },
    {
      icon: Clock,
      title: 'Deadline & Timeline Monitoring',
      description: 'Track court-driven deadlines, flag upcoming actions, send alerts.',
      color: 'Emerald'
    },
    {
      icon: Building2,
      title: 'Court Notification Monitoring',
      description: 'Monitor dockets, filing confirmations, and court communications.',
      color: 'Rose'
    },
    {
      icon: RefreshCw,
      title: 'Follow-Up & Coordination',
      description: 'Track pending actions, coordinate status confirmations, escalate deadlines.',
      color: 'Violet'
    },
    {
      icon: FileBarChart,
      title: 'Weekly Status Reporting',
      description: 'Clear, structured reports covering all active matters and pending items.',
      color: 'Amber'
    }
  ];

  return (
    <div className={dontStyles.vmWhatDontPageWrapper}>
      {/* === PREMIUM HERO SECTION === */}
      <section id="hero" className={`${dontStyles.vmWhatDontHeroSection} ${dontStyles.vmWhatDontReveal}`}>
        <div className={dontStyles.vmWhatDontHeroBg}></div>
        <div className={dontStyles.vmWhatDontContainer}>
          <div className={dontStyles.vmWhatDontHeroContent}>
            {/* Premium Badge */}
            <div className={dontStyles.vmWhatDontBadge}>
              <Award className={dontStyles.vmWhatDontBadgeIcon} />
              <span>VM Legal Operations</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={dontStyles.vmWhatDontMainHeading}>
              What We Don't Do
            </h1>
            
            {/* Description */}
            <h2 className={dontStyles.vmWhatDontSubHeading}>
              Clear boundaries to maintain <span className={dontStyles.vmWhatDontGradientText}>compliance and transparency</span> in our services
            </h2>
            
            {/* Scope Card */}
            <div className={dontStyles.vmWhatDontScopeCard}>
              <div className={dontStyles.vmWhatDontScopeHeader}>
                <AlertCircle className={dontStyles.vmWhatDontScopeIcon} />
                <h3>Our Service Boundaries</h3>
              </div>
              <div className={dontStyles.vmWhatDontScopeContent}>
                <p>
                  Our services are strictly non-legal and administrative in nature. 
                  We do not provide legal advice or legal representation.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={dontStyles.vmWhatDontCtaGroup}>
              <Link href="/contact" className={dontStyles.vmWhatDontBtnPrimary}>
                <span>Contact Us</span>
                <ArrowRight className={dontStyles.vmWhatDontBtnIcon} />
              </Link>
              <Link href="/how-we-work" className={dontStyles.vmWhatDontBtnSecondary}>
                <Phone className={dontStyles.vmWhatDontBtnIcon} />
                <span>How We Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICE BOUNDARIES SECTION === */}
      <section id="boundaries" className={`${dontStyles.vmWhatDontSectionWhite} ${dontStyles.vmWhatDontReveal}`}>
        <div className={dontStyles.vmWhatDontContainer}>
          <div className={dontStyles.vmWhatDontSectionHeader}>
            <h2 className={dontStyles.vmWhatDontSectionTitle}>Service Boundaries</h2>
            <p className={dontStyles.vmWhatDontSectionDesc}>
              To maintain clarity and compliance, these activities are <strong>strictly outside our scope</strong>
            </p>
          </div>
          
          <div className={dontStyles.vmWhatDontDoGrid}>
            {dontDoItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className={dontStyles.vmWhatDontDoCard}>
                  <div className={dontStyles.vmWhatDontDoHeader}>
                    <div className={dontStyles.vmWhatDontDoIconContainer}>
                      <IconComponent className={dontStyles.vmWhatDontDoIcon} />
                    </div>
                    <h3 className={dontStyles.vmWhatDontDoTitle}>{item.title}</h3>
                  </div>
                  
                  <p className={dontStyles.vmWhatDontDoDescription}>{item.description}</p>
                  
                  <div className={dontStyles.vmWhatDontReasonBox}>
                    <p className={dontStyles.vmWhatDontReasonLabel}>Reason:</p>
                    <p className={dontStyles.vmWhatDontReasonText}>{item.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === WHAT WE DO PROVIDE SECTION === */}
      <section id="what-we-do" className={`${dontStyles.vmWhatDontSectionGray} ${dontStyles.vmWhatDontReveal}`}>
        <div className={dontStyles.vmWhatDontContainer}>
          <div className={dontStyles.vmWhatDontSectionHeader}>
            <h2 className={dontStyles.vmWhatDontSectionTitle}>What We Do Provide</h2>
            <p className={dontStyles.vmWhatDontSectionDesc}>
              Our focus is strictly on <strong>non-legal administrative support</strong> for law firm operations
            </p>
          </div>
          
          <div className={dontStyles.vmWhatDontWeDoGrid}>
            {whatWeDo.map((service, index) => {
              const IconComponent = service.icon;
              const colorClass = `vmWhatDontIcon${service.color}`;
              return (
                <div key={index} className={dontStyles.vmWhatDontWeDoCard}>
                  <div className={`${dontStyles.vmWhatDontWeDoIconContainer} ${dontStyles[colorClass]}`}>
                    <IconComponent className={dontStyles.vmWhatDontWeDoIcon} />
                  </div>
                  <h3 className={dontStyles.vmWhatDontWeDoTitle}>{service.title}</h3>
                  <p className={dontStyles.vmWhatDontWeDoDescription}>{service.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className={dontStyles.vmWhatDontCenterBtn}>
            <Link href="/services" className={dontStyles.vmWhatDontLinkView}>
              <span>View All Services</span>
              <ChevronRight className={dontStyles.vmWhatDontBtnIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES SECTION === */}
      <section id="scope" className={`${dontStyles.vmWhatDontSectionDark} ${dontStyles.vmWhatDontReveal}`}>
        <div className={dontStyles.vmWhatDontContainer}>
          <div className={dontStyles.vmWhatDontSectionHeader}>
            <h2 className={`${dontStyles.vmWhatDontSectionTitle} ${dontStyles.vmWhatDontTextWhite}`}>Scope of Services</h2>
            <p className={`${dontStyles.vmWhatDontSectionDesc} ${dontStyles.vmWhatDontTextLightGray}`}>
              Clear definition of what falls within and outside our support parameters
            </p>
          </div>
          
          <div className={dontStyles.vmWhatDontScopeComparisonGrid}>
            <div className={dontStyles.vmWhatDontWithinScope}>
              <div className={dontStyles.vmWhatDontScopeHeader}>
                <CheckCircle2 className={dontStyles.vmWhatDontScopeCheckIcon} />
                <h3 className={dontStyles.vmWhatDontScopeTitle}>Within Our Scope ✓</h3>
              </div>
              <ul className={dontStyles.vmWhatDontScopeList}>
                {[
                  'Case status monitoring and updates',
                  'Deadline tracking and alerting',
                  'Court notification monitoring',
                  'Follow-up coordination',
                  'Weekly status reporting',
                  'Administrative workflow management'
                ].map((item, idx) => (
                  <li key={idx} className={dontStyles.vmWhatDontScopeListItem}>
                    <CheckCircle2 className={dontStyles.vmWhatDontListIconGreen} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={dontStyles.vmWhatDontOutsideScope}>
              <div className={dontStyles.vmWhatDontScopeHeader}>
                <AlertCircle className={dontStyles.vmWhatDontScopeAlertIcon} />
                <h3 className={dontStyles.vmWhatDontScopeTitle}>Outside Our Scope ✗</h3>
              </div>
              <ul className={dontStyles.vmWhatDontScopeList}>
                {[
                  'Legal advice or opinions',
                  'Document drafting',
                  'Court representation',
                  'Legal decision-making',
                  'Financial transactions',
                  'Legal research'
                ].map((item, idx) => (
                  <li key={idx} className={dontStyles.vmWhatDontScopeListItem}>
                    <AlertCircle className={dontStyles.vmWhatDontListIconGray} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPLIANCE & ETHICS SECTION === */}
      <section id="compliance" className={`${dontStyles.vmWhatDontSectionWhite} ${dontStyles.vmWhatDontReveal}`}>
        <div className={dontStyles.vmWhatDontContainer}>
          <div className={dontStyles.vmWhatDontComplianceCard}>
            <div className={dontStyles.vmWhatDontComplianceHeader}>
              <Shield className={dontStyles.vmWhatDontComplianceIcon} />
              <h3 className={dontStyles.vmWhatDontComplianceTitle}>Scope of Services & Ethical Standards</h3>
            </div>
            
            <div className={dontStyles.vmWhatDontComplianceContent}>
              <div className={dontStyles.vmWhatDontComplianceText}>
                <p className={dontStyles.vmWhatDontComplianceDescription}>
                  We operate under <strong>strict ethical guidelines</strong> and maintain clear boundaries to ensure 
                  compliance with all applicable regulations governing legal services support.
                </p>
                <ul className={dontStyles.vmWhatDontComplianceList}>
                  {[
                    'Strict adherence to U.S. legal ethics rules',
                    'Clear distinction between legal and administrative work',
                    'Attorney supervision of all our work',
                    'Confidentiality and data protection protocols',
                    'Transparent service agreements'
                  ].map((item, idx) => (
                    <li key={idx} className={dontStyles.vmWhatDontComplianceListItem}>
                      <CheckCircle2 className={dontStyles.vmWhatDontComplianceCheckIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={dontStyles.vmWhatDontComplianceNotice}>
                <div className={dontStyles.vmWhatDontNoticeBox}>
                  <AlertCircle className={dontStyles.vmWhatDontNoticeIcon} />
                  <p className={dontStyles.vmWhatDontNoticeText}>
                    Our services are limited to non-legal administrative support only.
                  </p>
                </div>
                <p className={dontStyles.vmWhatDontNoticeDescription}>
                  This clear delineation ensures we remain in compliance while providing valuable 
                  operational support to U.S. law firms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section id="contact" className={`${dontStyles.vmWhatDontCtaSection} ${dontStyles.vmWhatDontReveal}`}>
        <div className={dontStyles.vmWhatDontContainer}>
          <div className={dontStyles.vmWhatDontCtaContent}>
            <div className={dontStyles.vmWhatDontCtaIconBox}>
              <MessageCircle className={dontStyles.vmWhatDontCtaIcon} />
            </div>
            <h2 className={dontStyles.vmWhatDontCtaTitle}>Need Clarification?</h2>
            <p className={dontStyles.vmWhatDontCtaDesc}>
              Have questions about our service boundaries? Contact us for a detailed discussion 
              about how we can support your firm while maintaining strict compliance.
            </p>
            
            <div className={dontStyles.vmWhatDontCtaBtnGroup}>
              <Link href="/contact" className={dontStyles.vmWhatDontCtaBtnPrimary}>
                Contact Us
              </Link>
              <Link href="/how-we-work" className={dontStyles.vmWhatDontCtaBtnSecondary}>
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}