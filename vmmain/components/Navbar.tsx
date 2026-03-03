// "use client";

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import styles from './Navbar.module.css';

// // Nav items - "What We Don't Do" removed
// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'How We Work', href: '/how-we-work' },
//   { name: 'Who We Support', href: '/who-we-support' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (isOpen && !(event.target as Element).closest(`.${styles.mobileMenu}`) && 
//           !(event.target as Element).closest(`.${styles.mobileButton}`)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isOpen]);

//   return (
//     <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
//       <div className={styles.container}>
//         <div className={styles.navContent}>
//           {/* Logo - Company name always visible on all devices */}
//           <Link href="/" className={styles.logoLink}>
//             <div className={styles.logoIcon}>
//               <span>VM</span>
//             </div>
//             <div className={styles.logoTextContainer}>
//               <h2 className={styles.logoTitle}>VM Legal Operations</h2>
//               <p className={styles.logoSubtitle}>A division of VM Tech Solutions</p>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className={styles.desktopMenu}>
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`${styles.navLink} ${pathname === item.href ? styles.activeLink : ''}`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link href="/contact" className={styles.primaryButton}>
//               Start Pilot
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className={styles.mobileButton}
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//           >
//             <div className={`${styles.hamburgerIcon} ${isOpen ? styles.hamburgerOpen : ''}`}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className={styles.mobileMenu}>
//             <div className={styles.mobileMenuContent}>
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`${styles.mobileNavLink} ${pathname === item.href ? styles.activeMobileLink : ''}`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <span>{item.name}</span>
//                 </Link>
//               ))}
//               <Link href="/contact" className={styles.mobilePrimaryButton} onClick={() => setIsOpen(false)}>
//                 Start Pilot
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }





"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

// Nav items
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'Who We Support', href: '/who-we-support' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  // Check for dark mode preference
  useEffect(() => {
    // Check if we're in browser
    if (typeof window !== 'undefined') {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeMediaQuery.matches);
      
      const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      darkModeMediaQuery.addEventListener('change', handler);
      return () => darkModeMediaQuery.removeEventListener('change', handler);
    }
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest(`.${styles.mobileMenu}`) && 
          !(event.target as Element).closest(`.${styles.mobileButton}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Determine which icon to show
  const getIconSrc = () => {
    if (logoError) return null;
    return isDarkMode ? "/logo/vm-icon-white.png" : "/logo/vm-icon.png";
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo with Image */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              {/* VM Icon */}
              <div className={styles.iconWrapper}>
                {!logoError ? (
                  <Image 
                    src={getIconSrc() || "/logo/vm-icon.png"}
                    alt="VM"
                    width={48}
                    height={48}
                    className={styles.logoIcon}
                    onError={() => setLogoError(true)}
                    priority
                  />
                ) : (
                  // Fallback if image fails to load
                  <div className={styles.logoIcon}>
                    <span>VM</span>
                  </div>
                )}
              </div>
              
              {/* Company Name - Text */}
              <div className={styles.logoTextContainer}>
                <h2 className={styles.logoTitle}>VM Legal Operations</h2>
                <p className={styles.logoSubtitle}>A division of VM Tech Solutions</p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
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
            <Link href="/contact" className={styles.primaryButton}>
              Start Pilot
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className={`${styles.hamburgerIcon} ${isOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
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
                  className={`${styles.mobileNavLink} ${pathname === item.href ? styles.activeMobileLink : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link href="/contact" className={styles.mobilePrimaryButton} onClick={() => setIsOpen(false)}>
                Start Pilot
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}