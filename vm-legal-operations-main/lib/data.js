// lib/data.js  (NOT .ts)
export const services = [
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

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How We Work', href: '/how-we-work' },
  { name: 'Who We Support', href: '/who-we-support' },
  { name: 'Contact', href: '/contact' },
];

export const processSteps = [
  { step: '01', title: 'Pilot Start', desc: 'Begin with small pilot engagement' },
  { step: '02', title: 'Access Setup', desc: 'Limited, role-based secure access' },
  { step: '03', title: 'Weekly Operations', desc: 'Regular tracking & reporting' },
  { step: '04', title: 'Scale Up', desc: 'Expand based on proven results' },
];