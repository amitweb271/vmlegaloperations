"use client";

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import styles from './StickyChatIcon.module.css'; // CSS module import karo

export default function StickyChatIcon() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Client-side mount check
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (isMounted && window.location.pathname === '/contact') {
      e.preventDefault();
      const messageForm = document.getElementById('message-form');
      if (messageForm) {
        messageForm.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Agar client-side pe nahi hai toh na dikhao
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <Link
          href="/contact"
          onClick={handleClick}
          className={styles.stickyChatIcon}
        >
          <MessageCircle size={28} />
          <span className={styles.notificationBadge}>!</span>
          <div className={styles.chatTooltip}>Start a conversation</div>
        </Link>
      )}
    </>
  );
}