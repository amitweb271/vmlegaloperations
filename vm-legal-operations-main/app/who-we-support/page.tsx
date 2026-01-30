// app/who-we-support/page.tsx
import styles from '../styles.module.css';

export default function WhoWeSupportPage() {
  const clientTypes = [
    {
      title: 'Small & Mid-size U.S. Law Firms',
      description: 'Firms looking to optimize operations without expanding internal staff',
      features: ['1-50 attorneys', 'Limited administrative staff', 'Growing caseload', 'Need for process standardization']
    },
    {
      title: 'Debt Collection & Consumer Litigation Firms',
      description: 'High-volume practices requiring systematic case tracking',
      features: ['Volume-driven practices', 'Standardized workflows', 'Deadline-intensive', 'Regulatory compliance needs']
    },
    {
      title: 'High-Volume Litigation Practices',
      description: 'Firms handling multiple cases with complex tracking requirements',
      features: ['Multiple concurrent cases', 'Complex deadlines', 'Court coordination', 'Status reporting needs']
    },
    {
      title: 'Legal Departments & In-house Counsel',
      description: 'Corporate legal teams seeking operational efficiency',
      features: ['Internal case management', 'Outside counsel coordination', 'Budget management', 'Reporting requirements']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className={styles.heading1}>Who We Support</h1>
            <p className={styles.paragraph} style={{ fontSize: '1.25rem' }}>
              Dedicated offshore legal operations support for specific types of U.S. law practices
            </p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.heading2}>Ideal Client Profiles</h2>
            <p className={styles.paragraph}>We work best with firms that have these characteristics</p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid2}`}>
            {clientTypes.map((client, index) => (
              <div key={index} style={{ 
                background: 'white', 
                padding: '2rem', 
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1d4ed8',
                  marginBottom: '1rem'
                }}>
                  {client.title}
                </h3>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                  {client.description}
                </p>
                <ul style={{ color: '#6b7280', paddingLeft: '1.5rem' }}>
                  {client.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.heading2}>Benefits for Our Clients</h2>
            <p className={styles.paragraph}>How our support transforms law firm operations</p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid3}`}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                ⏰
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Time Savings</h3>
              <p style={{ color: '#6b7280' }}>
                Attorneys save 10-15 hours per week on administrative tasks
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#dcfce7', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                💰
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Cost Efficiency</h3>
              <p style={{ color: '#6b7280' }}>
                40-60% cost savings compared to hiring in-house staff
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#fef3c7', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                📊
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Better Visibility</h3>
              <p style={{ color: '#6b7280' }}>
                Real-time case status and deadline tracking across all matters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className={styles.section} style={{ background: '#fef2f2' }}>
        <div className={styles.container}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '0.5rem',
            borderLeft: '4px solid #dc2626'
          }}>
            <h3 style={{ color: '#dc2626', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Important Compliance Notice
            </h3>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
              <strong>VM Legal Operations provides strictly non-legal administrative support only.</strong>
            </p>
            <p style={{ color: '#6b7280' }}>
              We do not provide legal advice, draft legal documents, represent clients in court, 
              or make legal decisions. Our services are limited to operational and administrative support 
              for U.S. law firms. We work under attorney supervision and follow all applicable 
              regulations and ethical guidelines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}