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
  Gem,
  Briefcase,
  Layers,
  Activity,
  FolderOpen
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
             VM Legal Operations
            </h1>
            
            {/* Tagline - NEW */}
            <div className={aboutStyles.vmAboutTagline}>
              Your Remote Legal Support Partner for U.S. Law Firms
            </div>
          </div>
        </div>
      </section>

      {/* === WHO WE ARE SECTION (NEW STRUCTURE) === */}
      <section id="who-we-are" className={`${aboutStyles.vmAboutSectionWhite} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutSectionHeader}>
            <h2 className={aboutStyles.vmAboutSectionTitle}>Who We Are</h2>
          </div>
          
          <div className={aboutStyles.vmAboutWhoWeAreContent}>
            <p className={aboutStyles.vmAboutWhoWeAreText}>
              VM Legal Operations is a remote legal support firm specializing in legal operations and paralegal services for licensed U.S. attorneys and law firms.
            </p>
            <p className={aboutStyles.vmAboutWhoWeAreText}>
              We combine structured processes, litigation-oriented workflows, and secure information handling to support your legal practice efficiently — so you can focus on delivering legal results, not administrative work.
            </p>
          </div>
        </div>
      </section>

      {/* === WHAT SETS US APART SECTION (NEW) === */}
      <section id="what-sets-us-apart" className={`${aboutStyles.vmAboutSectionGray} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutSectionHeader}>
            <h2 className={aboutStyles.vmAboutSectionTitle}>What Sets Us Apart</h2>
          </div>
          
          <div className={aboutStyles.vmAboutApartIntro}>
            <p className={aboutStyles.vmAboutApartIntroText}>
              We understand that law firms operate on deadlines, precision, and confidentiality. Our services are designed to integrate seamlessly into your workflow while maintaining the highest standards of accuracy and data security.
            </p>
          </div>
          
          <div className={aboutStyles.vmAboutApartGrid}>
            <div className={aboutStyles.vmAboutApartItem}>
              <div className={aboutStyles.vmAboutApartIconBox}>
                <Target className={aboutStyles.vmAboutApartIcon} />
              </div>
              <span>A process-driven approach</span>
            </div>
            
            <div className={aboutStyles.vmAboutApartItem}>
              <div className={aboutStyles.vmAboutApartIconBox}>
                <Gavel className={aboutStyles.vmAboutApartIcon} />
              </div>
              <span>Litigation support experience</span>
            </div>
            
            <div className={aboutStyles.vmAboutApartItem}>
              <div className={aboutStyles.vmAboutApartIconBox}>
                <Layers className={aboutStyles.vmAboutApartIcon} />
              </div>
              <span>Detailed case organization systems</span>
            </div>
            
            <div className={aboutStyles.vmAboutApartItem}>
              <div className={aboutStyles.vmAboutApartIconBox}>
                <Clock className={aboutStyles.vmAboutApartIcon} />
              </div>
              <span>Deadline-focused project workflows</span>
            </div>
            
            <div className={aboutStyles.vmAboutApartItem}>
              <div className={aboutStyles.vmAboutApartIconBox}>
                <Lock className={aboutStyles.vmAboutApartIcon} />
              </div>
              <span>Confidential and secure handling of legal information</span>
            </div>
          </div>
          
          <div className={aboutStyles.vmAboutApartConclusion}>
            <p className={aboutStyles.vmAboutApartConclusionText}>
              We work as an extension of your team — helping you manage workload, increase operational efficiency, and improve case readiness.
            </p>
          </div>
        </div>
      </section>

      {/* === WHY U.S. LAW FIRMS CHOOSE US (NEW) === */}
      <section id="why-choose-us" className={`${aboutStyles.vmAboutSectionWhite} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutSectionHeader}>
            <h2 className={aboutStyles.vmAboutSectionTitle}>Why U.S. Law Firms Choose Us</h2>
          </div>
          
          <div className={aboutStyles.vmAboutWhyGrid}>
            {/* Reliable Turnaround */}
            <div className={aboutStyles.vmAboutWhyCard}>
              <div className={aboutStyles.vmAboutWhyHeader}>
                <div className={aboutStyles.vmAboutWhyIconBox}>
                  <Clock className={aboutStyles.vmAboutWhyIcon} />
                </div>
                <h3 className={aboutStyles.vmAboutWhyTitle}>Reliable Turnaround</h3>
              </div>
              <ul className={aboutStyles.vmAboutWhyList}>
                <li className={aboutStyles.vmAboutWhyListItem}>
                  <CheckCircle2 className={aboutStyles.vmAboutWhyListIcon} />
                  <span>Structured timelines and reporting</span>
                </li>
                <li className={aboutStyles.vmAboutWhyListItem}>
                  <CheckCircle2 className={aboutStyles.vmAboutWhyListIcon} />
                  <span>Clear delivery expectations</span>
                </li>
              </ul>
            </div>
            
            {/* Process-Driven Workflows */}
            <div className={aboutStyles.vmAboutWhyCard}>
              <div className={aboutStyles.vmAboutWhyHeader}>
                <div className={aboutStyles.vmAboutWhyIconBox}>
                  <Target className={aboutStyles.vmAboutWhyIcon} />
                </div>
                <h3 className={aboutStyles.vmAboutWhyTitle}>Process-Driven Workflows</h3>
              </div>
              <ul className={aboutStyles.vmAboutWhyList}>
                <li className={aboutStyles.vmAboutWhyListItem}>
                  <CheckCircle2 className={aboutStyles.vmAboutWhyListIcon} />
                  <span>SOP-based execution</span>
                </li>
                <li className={aboutStyles.vmAboutWhyListItem}>
                  <CheckCircle2 className={aboutStyles.vmAboutWhyListIcon} />
                  <span>Checklists and quality controls</span>
                </li>
              </ul>
            </div>
            
            {/* Software Compatibility */}
            <div className={aboutStyles.vmAboutWhyCard}>
              <div className={aboutStyles.vmAboutWhyHeader}>
                <div className={aboutStyles.vmAboutWhyIconBox}>
                  <Briefcase className={aboutStyles.vmAboutWhyIcon} />
                </div>
                <h3 className={aboutStyles.vmAboutWhyTitle}>Software Compatibility</h3>
              </div>
              <ul className={aboutStyles.vmAboutWhyList}>
                <li className={aboutStyles.vmAboutWhyListItem}>
                  <CheckCircle2 className={aboutStyles.vmAboutWhyListIcon} />
                  <span>Comfortable with tools like Clio, MyCase, Filevine, PACER, and more</span>
                </li>
              </ul>
            </div>
            
            {/* Security & Confidentiality */}
            <div className={aboutStyles.vmAboutWhyCard}>
              <div className={aboutStyles.vmAboutWhyHeader}>
                <div className={aboutStyles.vmAboutWhyIconBox}>
                  <Lock className={aboutStyles.vmAboutWhyIcon} />
                </div>
                <h3 className={aboutStyles.vmAboutWhyTitle}>Security & Confidentiality</h3>
              </div>
              <ul className={aboutStyles.vmAboutWhyList}>
                <li className={aboutStyles.vmAboutWhyListItem}>
                  <CheckCircle2 className={aboutStyles.vmAboutWhyListIcon} />
                  <span>Secure communication and file handling</span>
                </li>
                <li className={aboutStyles.vmAboutWhyListItem}>
                  <CheckCircle2 className={aboutStyles.vmAboutWhyListIcon} />
                  <span>Confidentiality aligned with firm standards</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={aboutStyles.vmAboutWhyConclusion}>
            <p className={aboutStyles.vmAboutWhyConclusionText}>
              We take responsibility for organization and tracking — so your team can focus on impact.
            </p>
          </div>
        </div>
      </section>

      {/* === OUR VISION SECTION (NEW) === */}
      <section id="our-vision" className={`${aboutStyles.vmAboutSectionGray} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutVisionCard}>
            <div className={aboutStyles.vmAboutVisionIconBox}>
              <Gem className={aboutStyles.vmAboutVisionIcon} />
            </div>
            <h2 className={aboutStyles.vmAboutVisionTitle}>Our Vision</h2>
            <p className={aboutStyles.vmAboutVisionText}>
              We aim to be a trusted remote legal support partner for driven U.S. law firms — helping them scale, streamline, and deliver better legal services with consistent back-office support.
            </p>
          </div>
        </div>
      </section>

      {/* === CALL TO ACTION SECTION (NEW) === */}
      <section id="cta" className={`${aboutStyles.vmAboutCtaSection} ${aboutStyles.vmAboutReveal}`}>
        <div className={aboutStyles.vmAboutContainer}>
          <div className={aboutStyles.vmAboutCtaContent}>
            <h2 className={aboutStyles.vmAboutCtaTitle}>Want to Learn More?</h2>
            <p className={aboutStyles.vmAboutCtaDesc}>
              If you want to understand how our structured support can enhance your firm's productivity and reduce administrative load, schedule a consultation or send us a message.
            </p>
            
            <div className={aboutStyles.vmAboutCtaBtnGroup}>
              <Link href="/contact" className={aboutStyles.vmAboutCtaBtnPrimary}>
                Book a Consultation
              </Link>
              <Link href="/contact" className={aboutStyles.vmAboutCtaBtnSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}