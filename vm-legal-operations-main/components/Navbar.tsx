// components/Navbar.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

// Nav items
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'Who We Support', href: '/who-we-support' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIcon}>
              <span>VM</span>
            </div>
            <div className={isMobile ? styles.hideOnMobile : ''}>
              <h2 className={styles.logoTitle}>VM Legal Operations</h2>
              <p className={styles.logoSubtitle}>A division of VM Tech Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu - Hide on mobile */}
          <div className={styles.desktopMenu}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.activeLink : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <button className={styles.primaryButton}>
              Start Pilot
            </button>
          </div>

          {/* Mobile Menu Button - Show only on mobile */}
          <button
            className={styles.mobileButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${pathname === item.href ? styles.activeLink : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className={styles.mobilePrimaryButton}>
                Start Pilot
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}