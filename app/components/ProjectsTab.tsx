'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 100 },
  },
};

const projects = [
  {
    title: 'Trainer Management System (TMS)',
    description: 'Managing trainer-learner mappings, course scheduling, and billing workflows',
    icon: '📚',
    gradient: 'from-blue-500 to-cyan-500',
    tech: ['Symfony', 'Angular', 'Node.js', 'AWS EKS', 'Kafka'],
    highlights: ['SSO with AWS Cognito', 'Kubernetes Deployment', 'Event Streaming'],
  },
  {
    title: 'Licensing Service',
    description: 'Learner onboarding and license provisioning with Event Sourcing and CQRS',
    icon: '🔐',
    gradient: 'from-purple-500 to-pink-500',
    tech: ['PHP', 'Laminas Mezzio', 'EventstoreDB', 'PostgreSQL', 'K8s'],
    highlights: ['Event Sourcing', 'CQRS Pattern', 'HLD/LLD Documentation'],
  },
  {
    title: 'Fulfillment Service',
    description: 'Course purchase management with payment processing and Salesforce sync',
    icon: '💳',
    gradient: 'from-green-500 to-emerald-500',
    tech: ['Node.js', 'MongoDB', 'AWS Lambda', 'RabbitMQ'],
    highlights: ['Async Communication', 'Payment Integration', 'DLQ Implementation'],
  },
  {
    title: 'Enablement API Service',
    description: 'Core API for learner registration, login, and enablement activities',
    icon: '🔌',
    gradient: 'from-orange-500 to-red-500',
    tech: ['PHP', 'Laminas Mezzio', 'MySQL', 'MSSQL', 'AWS SDK'],
    highlights: ['Framework Migration', 'K8s Transition', 'API Gateway'],
  },
  {
    title: 'File Management System (FMS)',
    description: 'Cloud-based file sharing system for cross-platform use',
    icon: '📁',
    gradient: 'from-indigo-500 to-purple-500',
    tech: ['Vue.js', 'Quasar', 'Laravel', 'PostgreSQL'],
    highlights: ['Cross-Platform', 'Cloud Storage', 'Real-time Sync'],
  },
  {
    title: 'BPM Tool (Ranabase)',
    description: 'Business process management tool for creating and sharing flow diagrams',
    icon: '📊',
    gradient: 'from-teal-500 to-cyan-500',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    highlights: ['Process Diagrams', 'Issue Tracking', 'User-defined Clips'],
  },
];

export default function ProjectsTab() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Showcase of my technical capabilities across various domains
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ y: -10 }}
          >
            <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl`}>
              {project.icon}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Highlights:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="text-green-500">●</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
