"use client";

import { useState, useEffect } from 'react';
import servicesStyles from './services.module.css';
import Link from 'next/link';

// Lucide Icons import
import {
  Award,
  ShieldCheck,
  BarChart3,
  Clock,
  Building2,
  RefreshCw,
  FileText,
  CheckCircle2,
  ListChecks,
  TrendingUp,
  Search,
  Settings,
  PlayCircle,
  FileBarChart,
  AlertCircle,
  Zap,
  ChevronRight,
  ArrowRight,
  Phone,
  Target,
  Users,
  Calendar,
  Check,
  Sparkles,
  Gavel,
  Activity,
  FolderOpen,
  Briefcase,
  Globe,
  Layers,
  BookOpen
} from 'lucide-react';

export default function ServicesPage() {
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
          entry.target.classList.add(servicesStyles.vmServicesRevealActive);
          setActiveSection(entry.target.id || 'hero');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '0px' 
    });

    // Observe all sections with reveal class
    document.querySelectorAll(`.${servicesStyles.vmServicesReveal}`).forEach(el => {
      observer.observe(el);
    });

    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Updated service categories based on new structure
  const serviceCategories = [
    {
      icon: BarChart3,
      title: 'Legal Operations & Case Management Support',
      description: 'Designed to keep your firm organized, deadline-driven, and compliant.',
      bullets: [
        'Case status tracking and updates',
        'Docket monitoring (Federal & State courts)',
        'Calendar management & deadline tracking',
        'Hearing and filing reminders',
        'Court notification monitoring',
        'Case file organization',
        'CRM updates (Clio, MyCase, Filevine, etc.)',
        'Weekly case status reporting',
        'Workflow coordination support'
      ],
      color: 'Blue',
      note: 'We help firms avoid missed deadlines and maintain structured case oversight.'
    },
    {
      icon: Gavel,
      title: 'Litigation & Paralegal Support',
      description: '(Under Attorney Supervision)',
      bullets: [
        'Complaint and motion summaries',
        'Deposition summaries',
        'Case file summaries',
        'Chronology creation (medical & factual timelines)',
        'Exhibit organization and indexing',
        'Trial binder preparation support',
        'Discovery document organization',
        'Document tagging and indexing',
        'Draft formatting and template preparation',
        'Pleading formatting support (as per firm templates)'
      ],
      color: 'Purple',
      note: 'All work is reviewed and approved by the supervising attorney.'
    },
    {
      icon: Activity,
      title: 'Personal Injury (PI) Support Services',
      description: 'High-volume support for personal injury practices.',
      bullets: [
        'Medical record organization and summarization',
        'Treatment timeline charts',
        'Demand package compilation support',
        'Lien tracking and documentation',
        'Settlement tracking spreadsheets',
        'Insurance communication tracking',
        'Intake data organization'
      ],
      color: 'Orange',
      note: 'We help PI firms process cases efficiently and reduce internal workload.'
    },
    {
      icon: Globe,
      title: 'Immigration Case Support',
      description: '(Administrative Processing Only)',
      bullets: [
        'Form data entry support (as directed by attorney)',
        'Document checklist verification',
        'Packet assembly and organization',
        'RFE document compilation support',
        'Case file tracking'
      ],
      color: 'Teal',
      note: 'We do not provide immigration advice or client consultation. All work remains under attorney review and supervision.'
    },
    {
      icon: FolderOpen,
      title: 'Document Review & Case Organization Support',
      description: 'Efficient document handling for litigation matters.',
      bullets: [
        'Relevance review support',
        'File organization',
        'Privilege log preparation support',
        'Large file sorting and indexing',
        'PDF bookmarking and exhibit labeling'
      ],
      color: 'Emerald',
      note: 'Structured organization improves litigation readiness and saves attorney time.'
    }
  ];

  const softwareTools = [
    'Clio', 'MyCase', 'Filevine', 'PACER', 
    'Microsoft 365', 'Google Workspace', 'Secure file-sharing systems'
  ];

  return (
    <div className={servicesStyles.vmServicesPageWrapper}>
      {/* === PREMIUM HERO SECTION === */}
      <section id="hero" className={`${servicesStyles.vmServicesHeroSection} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesHeroBg}></div>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesHeroContent}>
            {/* Premium Badge */}
            <div className={servicesStyles.vmServicesBadge}>
              <Award className={servicesStyles.vmServicesBadgeIcon} />
              <span>VM Legal Operations</span>
            </div>
            
            {/* Main Heading */}
            <h1 className={servicesStyles.vmServicesMainHeading}>
              Services
            </h1>
            
            {/* Tagline */}
            <div className={servicesStyles.vmServicesTagline}>
              Remote Legal Operations & Paralegal Support
            </div>
            
            {/* Subheading */}
            <div className={servicesStyles.vmServicesSubheading}>
              Built for U.S. Law Firms
            </div>
            
            {/* Description */}
            <div className={servicesStyles.vmServicesDescription}>
              <p className={servicesStyles.vmServicesDescriptionText}>
                VM Legal Operations provides structured, process-driven legal operations and remote paralegal support services to licensed U.S. attorneys and law firms.
              </p>
              <p className={servicesStyles.vmServicesDescriptionText}>
                We work exclusively under attorney supervision. We do not provide legal advice, represent clients, or make legal decisions.
              </p>
              <p className={servicesStyles.vmServicesDescriptionText}>
                Our role is to reduce attorney workload, improve case organization, and support firm efficiency.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className={servicesStyles.vmServicesCtaGroup}>
              <Link href="/contact" className={servicesStyles.vmServicesBtnPrimary}>
                <span>Schedule Consultation</span>
                <ArrowRight className={servicesStyles.vmServicesBtnIcon} />
              </Link>
              <Link href="/contact" className={servicesStyles.vmServicesBtnSecondary}>
                <Phone className={servicesStyles.vmServicesBtnIcon} />
                <span>Start Pilot Program</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === MAIN SERVICES CATEGORIES SECTION === */}
      <section id="services" className={`${servicesStyles.vmServicesSectionWhite} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesSectionHeader}>
            <h2 className={servicesStyles.vmServicesSectionTitle}>Our Services</h2>
          </div>
          
          <div className={servicesStyles.vmServicesCategoriesGrid}>
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colorClass = `vmServicesIcon${category.color}`;
              return (
                <div key={index} className={servicesStyles.vmServicesCategoryCard}>
                  <div className={servicesStyles.vmServicesCategoryHeader}>
                    <div className={`${servicesStyles.vmServicesCategoryIconContainer} ${servicesStyles[colorClass]}`}>
                      <IconComponent className={servicesStyles.vmServicesCategoryIcon} />
                    </div>
                    <h3 className={servicesStyles.vmServicesCategoryTitle}>{category.title}</h3>
                  </div>
                  
                  <div className={servicesStyles.vmServicesCategoryContent}>
                    <p className={servicesStyles.vmServicesCategoryDescription}>{category.description}</p>
                    
                    <div className={servicesStyles.vmServicesCategoryListHeader}>
                      <span>Services Include:</span>
                    </div>
                    
                    <ul className={servicesStyles.vmServicesCategoryList}>
                      {category.bullets.map((bullet, idx) => (
                        <li key={idx} className={servicesStyles.vmServicesCategoryListItem}>
                          <CheckCircle2 className={servicesStyles.vmServicesCategoryListIcon} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {category.note && (
                      <div className={servicesStyles.vmServicesCategoryNote}>
                        <p>{category.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SOFTWARE & WORKFLOW FAMILIARITY SECTION === */}
      <section id="software" className={`${servicesStyles.vmServicesSectionGray} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesSectionHeader}>
            <h2 className={servicesStyles.vmServicesSectionTitle}>Software & Workflow Familiarity</h2>
            <p className={servicesStyles.vmServicesSectionDesc}>
              We work with leading U.S. law firm tools and platforms
            </p>
          </div>
          
          <div className={servicesStyles.vmServicesSoftwareGrid}>
            {softwareTools.map((tool, index) => (
              <div key={index} className={servicesStyles.vmServicesSoftwareItem}>
                <div className={servicesStyles.vmServicesSoftwareIconBox}>
                  <Check className={servicesStyles.vmServicesSoftwareIcon} />
                </div>
                <span className={servicesStyles.vmServicesSoftwareName}>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SCOPE OF SERVICES NOTICE === */}
      {/* <section id="scope" className={`${servicesStyles.vmServicesSectionLight} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesScopeNoticeDetailed}>
            <div className={servicesStyles.vmServicesScopeNoticeHeader}>
              <AlertCircle className={servicesStyles.vmServicesScopeNoticeIcon} />
              <h3 className={servicesStyles.vmServicesScopeNoticeTitle}>Scope of Services</h3>
            </div>
            <div className={servicesStyles.vmServicesScopeNoticeContent}>
              <p className={servicesStyles.vmServicesScopeNoticeText}>
                <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong>
              </p>
              <p className={servicesStyles.vmServicesScopeNoticeDescription}>
                We do not provide legal advice, draft legal documents, represent clients in court, 
                or make legal decisions. Our services are limited to operational and administrative support.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* === FINAL CTA SECTION === */}
      <section id="contact" className={`${servicesStyles.vmServicesCtaSection} ${servicesStyles.vmServicesReveal}`}>
        <div className={servicesStyles.vmServicesContainer}>
          <div className={servicesStyles.vmServicesCtaContent}>
            <div className={servicesStyles.vmServicesCtaIconBox}>
              <Zap className={servicesStyles.vmServicesCtaIcon} />
            </div>
            <h2 className={servicesStyles.vmServicesCtaTitle}>Ready to Streamline Your Operations?</h2>
            <p className={servicesStyles.vmServicesCtaDesc}>
              Book a consultation to discuss how our services can benefit your firm and 
              improve operational efficiency.
            </p>
            
            <div className={servicesStyles.vmServicesCtaBtnGroup}>
              <Link href="/contact" className={servicesStyles.vmServicesCtaBtnPrimary}>
                Schedule Consultation
              </Link>
              <Link href="/contact" className={servicesStyles.vmServicesCtaBtnSecondary}>
                Start Pilot Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}