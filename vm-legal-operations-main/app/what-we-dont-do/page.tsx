"use client";

import { useState, useEffect } from 'react';
import styles from '../styles.module.css';
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
  Users
} from 'lucide-react';

export default function WhatWeDontDoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Deadline & Timeline Monitoring',
      description: 'Track court-driven deadlines, flag upcoming actions, send alerts.',
      color: 'emerald'
    },
    {
      icon: Building2,
      title: 'Court Notification Monitoring',
      description: 'Monitor dockets, filing confirmations, and court communications.',
      color: 'rose'
    },
    {
      icon: RefreshCw,
      title: 'Follow-Up & Coordination',
      description: 'Track pending actions, coordinate status confirmations, escalate deadlines.',
      color: 'violet'
    },
    {
      icon: FileBarChart,
      title: 'Weekly Status Reporting',
      description: 'Clear, structured reports covering all active matters and pending items.',
      color: 'amber'
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
              What We Don't Do
            </h1>
            
            {/* Description */}
            <h2 className={styles.subheading}>
              Clear boundaries to maintain <span className={styles.gradientText}>compliance and transparency</span> in our services
            </h2>
            
            {/* Scope Card */}
            <div className={styles.scopeCard}>
              <div className={styles.scopeHeader}>
                <AlertCircle className={styles.scopeIcon} />
                <h3>Our Service Boundaries</h3>
              </div>
              <div className={styles.scopeContent}>
                <p>
                  "Our services are strictly non-legal and administrative in nature. 
                  We do not provide legal advice or legal representation."
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.primaryButton}>
                <span>Contact Us</span>
                <ArrowRight className={styles.buttonIcon} />
              </Link>
              <Link href="/how-we-work" className={styles.secondaryButton}>
                <Phone className={styles.buttonIcon} />
                <span>How We Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICE BOUNDARIES SECTION === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Service Boundaries</h2>
            <p className={styles.sectionDescription}>
              To maintain clarity and compliance, these activities are <strong>strictly outside our scope</strong>
            </p>
          </div>
          
          <div className={styles.dontDoGrid}>
            {dontDoItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className={styles.dontDoCard}>
                  <div className={styles.dontDoHeader}>
                    <div className={styles.dontDoIconContainer}>
                      <IconComponent className={styles.dontDoIcon} />
                    </div>
                    <h3 className={styles.dontDoTitle}>{item.title}</h3>
                  </div>
                  
                  <p className={styles.dontDoDescription}>{item.description}</p>
                  
                  <div className={styles.reasonBox}>
                    <p className={styles.reasonLabel}>Reason:</p>
                    <p className={styles.reasonText}>{item.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === WHAT WE DO PROVIDE SECTION === */}
      <section className={styles.sectionGray}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do Provide</h2>
            <p className={styles.sectionDescription}>
              Our focus is strictly on <strong>non-legal administrative support</strong> for law firm operations
            </p>
          </div>
          
          <div className={styles.weDoGrid}>
            {whatWeDo.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={styles.weDoCard}>
                  <div className={`${styles.weDoIconContainer} ${styles[`icon${service.color}`]}`}>
                    <IconComponent className={styles.weDoIcon} />
                  </div>
                  <h3 className={styles.weDoTitle}>{service.title}</h3>
                  <p className={styles.weDoDescription}>{service.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className={styles.centerButton}>
            <Link href="/services" className={styles.viewButton}>
              <span>View All Services</span>
              <ChevronRight className={styles.buttonIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES SECTION === */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.textWhite}`}>Scope of Services</h2>
            <p className={`${styles.sectionDescription} ${styles.textLightGray}`}>
              Clear definition of what falls within and outside our support parameters
            </p>
          </div>
          
          <div className={styles.scopeComparisonGrid}>
            <div className={styles.withinScope}>
              <div className={styles.scopeHeader}>
                <CheckCircle2 className={styles.scopeCheckIcon} />
                <h3 className={styles.scopeTitle}>Within Our Scope ✓</h3>
              </div>
              <ul className={styles.scopeList}>
                {[
                  'Case status monitoring and updates',
                  'Deadline tracking and alerting',
                  'Court notification monitoring',
                  'Follow-up coordination',
                  'Weekly status reporting',
                  'Administrative workflow management'
                ].map((item, idx) => (
                  <li key={idx} className={styles.scopeListItem}>
                    <CheckCircle2 className={styles.listIconGreen} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.outsideScope}>
              <div className={styles.scopeHeader}>
                <AlertCircle className={styles.scopeAlertIcon} />
                <h3 className={styles.scopeTitle}>Outside Our Scope ✓</h3>
              </div>
              <ul className={styles.scopeList}>
                {[
                  'Legal advice or opinions',
                  'Document drafting',
                  'Court representation',
                  'Legal decision-making',
                  'Financial transactions',
                  'Legal research'
                ].map((item, idx) => (
                  <li key={idx} className={styles.scopeListItem}>
                    <AlertCircle className={styles.listIconGray} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPLIANCE & ETHICS SECTION === */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.complianceCard}>
            <div className={styles.complianceHeader}>
              <Shield className={styles.complianceIcon} />
              <h3 className={styles.complianceTitle}>Scope of Services & Ethical Standards</h3>
            </div>
            
            <div className={styles.complianceContent}>
              <div className={styles.complianceText}>
                <p className={styles.complianceDescription}>
                  We operate under <strong>strict ethical guidelines</strong> and maintain clear boundaries to ensure 
                  compliance with all applicable regulations governing legal services support.
                </p>
                <ul className={styles.complianceList}>
                  {[
                    'Strict adherence to U.S. legal ethics rules',
                    'Clear distinction between legal and administrative work',
                    'Attorney supervision of all our work',
                    'Confidentiality and data protection protocols',
                    'Transparent service agreements'
                  ].map((item, idx) => (
                    <li key={idx} className={styles.complianceListItem}>
                      <CheckCircle2 className={styles.complianceCheckIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.complianceNotice}>
                <div className={styles.noticeBox}>
                  <AlertCircle className={styles.noticeIcon} />
                  <p className={styles.noticeText}>
                    Our services are limited to non-legal administrative support only.
                  </p>
                </div>
                <p className={styles.noticeDescription}>
                  This clear delineation ensures we remain in compliance while providing valuable 
                  operational support to U.S. law firms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIconContainer}>
              <MessageCircle className={styles.ctaIcon} />
            </div>
            <h2 className={styles.ctaTitle}>Need Clarification?</h2>
            <p className={styles.ctaDescription}>
              Have questions about our service boundaries? Contact us for a detailed discussion 
              about how we can support your firm while maintaining strict compliance.
            </p>
            
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButtonPrimary}>
                Contact Us
              </Link>
              <Link href="/how-we-work" className={styles.ctaButtonSecondary}>
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}