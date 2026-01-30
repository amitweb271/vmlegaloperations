// app/what-we-dont-do/page.tsx
import styles from '../styles.module.css';

export default function WhatWeDontDoPage() {
  const dontDoItems = [
    {
      title: 'Provide Legal Advice',
      description: 'We do not offer legal opinions, interpretations of law, or strategic legal guidance.',
      reason: 'Only licensed attorneys can provide legal advice. We focus on administrative support.'
    },
    {
      title: 'Draft Legal Documents',
      description: 'We do not prepare pleadings, motions, briefs, contracts, or other legal documents.',
      reason: 'Document drafting requires legal analysis and judgment, which is outside our scope.'
    },
    {
      title: 'Represent Clients in Court',
      description: 'We do not appear before any court, tribunal, or administrative body.',
      reason: 'Court representation requires a law license and is the responsibility of your firm\'s attorneys.'
    },
    {
      title: 'Make Legal Decisions',
      description: 'We do not make strategic decisions, case evaluations, or settlement recommendations.',
      reason: 'Legal decision-making requires attorney-client privilege and professional judgment.'
    },
    {
      title: 'Access Trust Accounts',
      description: 'We do not handle client funds, billing, or financial transactions.',
      reason: 'Financial matters are strictly managed by your firm to maintain compliance with trust accounting rules.'
    },
    {
      title: 'Provide Legal Research',
      description: 'We do not conduct case law research, statutory analysis, or legal precedent research.',
      reason: 'Legal research requires legal training and interpretation skills that we do not provide.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className={styles.heading1}>What We Don't Do</h1>
            <p className={styles.paragraph} style={{ fontSize: '1.25rem' }}>
              Clear boundaries for compliance and transparency in our services
            </p>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.heading2}>Service Boundaries</h2>
            <p className={styles.paragraph}>
              To maintain compliance and clarity, these activities are strictly outside our scope
            </p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`}>
            {dontDoItems.map((item, index) => (
              <div key={index} style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: '#fee2e2', 
                    color: '#dc2626', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    ✗
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: '#dc2626',
                    margin: 0
                  }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: '#4b5563', marginBottom: '1rem', paddingLeft: '3.5rem' }}>
                  {item.description}
                </p>
                <div style={{ 
                  background: '#fef2f2', 
                  padding: '1rem', 
                  borderRadius: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <p style={{ color: '#92400e', fontSize: '0.875rem', margin: 0 }}>
                    <strong>Reason:</strong> {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.heading2}>What We Do Provide</h2>
            <p className={styles.paragraph}>Our focus is strictly on non-legal administrative support</p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid3}`}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem'
              }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Case Tracking</h3>
              <p style={{ color: '#6b7280' }}>Monitor case status and progress updates</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem'
              }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Deadline Management</h3>
              <p style={{ color: '#6b7280' }}>Track and alert for court dates and responses</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem'
              }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Administrative Coordination</h3>
              <p style={{ color: '#6b7280' }}>Follow-up and status coordination support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className={styles.section} style={{ background: '#1d4ed8', color: 'white' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className={styles.heading2} style={{ color: 'white' }}>Compliance & Ethics</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              We operate under strict ethical guidelines and maintain clear boundaries to ensure compliance 
              with all applicable regulations governing legal services.
            </p>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                Our Commitment
              </h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Strict adherence to U.S. legal ethics rules</li>
                <li style={{ marginBottom: '0.5rem' }}>Clear distinction between legal and administrative work</li>
                <li style={{ marginBottom: '0.5rem' }}>Attorney supervision of all our work</li>
                <li style={{ marginBottom: '0.5rem' }}>Confidentiality and data protection</li>
                <li>Transparent service agreements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}