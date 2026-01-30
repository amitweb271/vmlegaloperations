// app/services/page.tsx
import styles from '../styles.module.css';
import ServiceCard from '@/components/ServiceCard';

// Services data
const services = [
  {
    icon: '📊',
    title: 'Case Status Tracking',
    description: 'Monitor case stages, maintain structured trackers, update progress across all matters.',
    features: ['Stage-wise tracking', 'Progress monitoring', 'System updates', 'Centralized visibility']
  },
  {
    icon: '⏰',
    title: 'Deadline Monitoring',
    description: 'Track court-driven deadlines, flag upcoming actions, send escalation alerts.',
    features: ['Court dates tracking', 'Response deadlines', 'Proactive alerts', 'Escalation system']
  },
  {
    icon: '🏛️',
    title: 'Court Notification Monitoring',
    description: 'Monitor dockets, filing confirmations, and court communications.',
    features: ['Docket updates', 'Email monitoring', 'Status logging', 'Real-time alerts']
  },
  {
    icon: '🔄',
    title: 'Follow-up & Coordination',
    description: 'Coordinate with attorneys, track pending actions, ensure timely responses.',
    features: ['Attorney liaison', 'Action tracking', 'Escalation management', 'Status coordination']
  },
  {
    icon: '📋',
    title: 'Weekly Status Reporting',
    description: 'Clear structured reports: open matters, deadlines, actions, pending items.',
    features: ['Custom reports', 'Weekly delivery', 'Executive summary', 'Action items']
  },
  {
    icon: '🛡️',
    title: 'Compliance & Security',
    description: 'Strict confidentiality, role-based access, NDA protection, data security.',
    features: ['NDA protection', 'Role-based access', 'Data encryption', 'Secure communication']
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className={styles.heading1}>Our Services</h1>
            <p className={styles.paragraph} style={{ fontSize: '1.25rem' }}>
              Strictly non-legal administrative support designed to keep your law firm's operations running smoothly
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={`${styles.grid} ${styles.grid3}`}>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.heading2}>Our Service Delivery Process</h2>
            <p className={styles.paragraph}>How we ensure quality and consistency in our support</p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid4}`}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8'
              }}>
                1
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Assessment</h3>
              <p style={{ color: '#6b7280' }}>Understand your current workflow and requirements</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8'
              }}>
                2
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Setup</h3>
              <p style={{ color: '#6b7280' }}>Configure tracking systems and access protocols</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8'
              }}>
                3
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Execution</h3>
              <p style={{ color: '#6b7280' }}>Daily monitoring, tracking, and coordination</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: '#dbeafe', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1d4ed8'
              }}>
                4
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Reporting</h3>
              <p style={{ color: '#6b7280' }}>Weekly status updates and performance reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', color: 'white' }}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <h2 className={styles.heading2} style={{ color: 'white' }}>Ready to Streamline Your Operations?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Book a free consultation to discuss how our services can benefit your firm.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ 
              background: 'white', 
              color: '#1d4ed8', 
              padding: '1rem 2rem', 
              borderRadius: '0.5rem', 
              border: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer'
            }}>
              Schedule Free Consultation
            </button>
            <button style={{ 
              background: 'transparent', 
              color: 'white', 
              padding: '1rem 2rem', 
              borderRadius: '0.5rem', 
              border: '2px solid white',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer'
            }}>
              View Service Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}