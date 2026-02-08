"use client";

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function StickyChatIcon() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <Link
          href="/contact"
          onClick={(e) => {
            // Agar hum already contact page pe hain, to scroll karein
            if (window.location.pathname === '/contact') {
              e.preventDefault();
              const messageForm = document.getElementById('message-form');
              if (messageForm) {
                messageForm.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '60px',
            height: '60px',
            backgroundColor: '#1d4ed8',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 4px 20px rgba(29, 78, 216, 0.4)',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1e40af';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(29, 78, 216, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(29, 78, 216, 0.4)';
          }}
        >
          <MessageCircle size={28} />
          <span
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              width: '20px',
              height: '20px',
              backgroundColor: '#ef4444',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 'bold',
              animation: 'pulse 2s infinite'
            }}
          >
            !
          </span>
        </Link>
      )}
      
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          a[href="/contact"] {
            bottom: 1.5rem !important;
            right: 1.5rem !important;
            width: 56px !important;
            height: 56px !important;
          }
        }
        
        @media (max-width: 480px) {
          a[href="/contact"] {
            bottom: 1rem !important;
            right: 1rem !important;
            width: 52px !important;
            height: 52px !important;
          }
        }
      `}</style>
    </>
  );
}