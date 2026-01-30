// components/ServiceCard.tsx
"use client";

import { useState } from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: {
    icon: string;
    title: string;
    description: string;
    features: string[];
  };
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.serviceCard} ${styles.animateCard}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>{service.icon}</div>
        <h3 className={styles.cardTitle}>{service.title}</h3>
      </div>
      
      <p className={styles.cardDescription}>{service.description}</p>
      
      <ul className={styles.featuresList}>
        {service.features.map((feature, idx) => (
          <li key={idx} className={styles.featureItem}>
            <span className={styles.featureIcon}>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className={styles.featureText}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a href="/services" className={styles.learnMore}>
        Learn more
        <svg 
          className={`${styles.arrowIcon} ${isHovered ? styles.arrowHover : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}