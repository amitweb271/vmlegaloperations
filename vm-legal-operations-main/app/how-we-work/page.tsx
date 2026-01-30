// app/how-we-work/page.tsx
import styles from '../styles.module.css';

export default function HowWeWorkPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.section} style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className={styles.heading1}>How We Work</h1>
            <p className={styles.paragraph} style={{ fontSize: '1.25rem' }}>
              A transparent, structured approach to legal operations support
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.grid} style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            {/* Step 1 */}
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #1d4ed8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#1d4ed8', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  01
                </div>
                <h2 className={styles.heading2}>Initial Consultation</h2>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                We start with a detailed consultation to understand your firm's specific needs, 
                current workflows, and pain points.
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.5rem' }}>
                <li>Review current case management processes</li>
                <li>Identify operational gaps and challenges</li>
                <li>Define scope and objectives</li>
                <li>Set clear expectations and deliverables</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #0f766e'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#0f766e', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  02
                </div>
                <h2 className={styles.heading2}>Pilot Program Setup</h2>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                We begin with a small-scale pilot program to demonstrate value before full engagement.
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.5rem' }}>
                <li>Limited scope implementation</li>
                <li>Secure access setup with role-based permissions</li>
                <li>NDA and confidentiality agreements</li>
                <li>Initial workflow integration</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #dc2626'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#dc2626', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  03
                </div>
                <h2 className={styles.heading2}>Ongoing Operations</h2>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                Daily monitoring, tracking, and coordination with regular reporting.
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.5rem' }}>
                <li>Daily case status updates</li>
                <li>Deadline monitoring and alerts</li>
                <li>Court notification tracking</li>
                <li>Weekly status reporting</li>
                <li>Regular communication with your team</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '1rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #7c3aed'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#7c3aed', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  04
                </div>
                <h2 className={styles.heading2}>Review & Scale</h2>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                Regular performance reviews and scaling based on results and feedback.
              </p>
              <ul style={{ color: '#6b7280', paddingLeft: '1.5rem' }}>
                <li>Monthly performance reviews</li>
                <li>Process optimization</li>
                <li>Scope expansion based on results</li>
                <li>Continuous improvement</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className={styles.heading2}>Key Features of Our Approach</h2>
            <p className={styles.paragraph}>What sets our service delivery apart</p>
          </div>
          
          <div className={`${styles.grid} ${styles.grid3}`}>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Security First</h3>
              <p style={{ color: '#6b7280' }}>NDA protection, role-based access, and data encryption</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Transparent Reporting</h3>
              <p style={{ color: '#6b7280' }}>Weekly detailed reports with clear metrics and insights</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔄</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Flexible Engagement</h3>
              <p style={{ color: '#6b7280' }}>Start with pilot, scale as needed, no long-term lock-in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}