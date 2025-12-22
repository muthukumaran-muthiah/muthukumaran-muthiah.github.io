'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { 
    scale: 0.5,
    opacity: 0,
    y: 60,
    rotateZ: -10,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: { 
      type: 'spring' as const,
      damping: 18,
      stiffness: 120,
      duration: 0.7,
    },
  },
};

const domains = [
  {
    title: 'Full-Stack Web Development',
    description: 'Building end-to-end web applications with modern frameworks and architectures',
    icon: '🌐',
    gradient: 'from-blue-500 to-cyan-500',
    expertise: ['Frontend Development', 'Backend APIs', 'Database Design', 'UI/UX Implementation'],
    technologies: ['Angular', 'Vue.js', 'React', 'Node.js', 'PHP', 'Laravel'],
  },
  {
    title: 'Cloud Architecture & DevOps',
    description: 'Designing and deploying scalable cloud-native applications',
    icon: '☁️',
    gradient: 'from-purple-500 to-indigo-500',
    expertise: ['Cloud Infrastructure', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code'],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'HELM', 'Terraform'],
  },
  {
    title: 'Microservices Architecture',
    description: 'Designing distributed systems with event-driven patterns',
    icon: '🔄',
    gradient: 'from-green-500 to-emerald-500',
    expertise: ['Service Design', 'Event Sourcing', 'CQRS Pattern', 'Async Communication'],
    technologies: ['RabbitMQ', 'Kafka', 'EventstoreDB', 'REST APIs'],
  },
  {
    title: 'API Development & Integration',
    description: 'Creating robust APIs and integrating third-party services',
    icon: '🔌',
    gradient: 'from-orange-500 to-red-500',
    expertise: ['RESTful APIs', 'API Gateway', 'Service Integration', 'Authentication'],
    technologies: ['Laminas Mezzio', 'Express.js', 'AWS SDK', 'OAuth/JWT'],
  },
  {
    title: 'Database Management',
    description: 'Designing and optimizing database systems for performance',
    icon: '💾',
    gradient: 'from-pink-500 to-rose-500',
    expertise: ['Schema Design', 'Query Optimization', 'Data Migration', 'Performance Tuning'],
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'MSSQL', 'EventstoreDB'],
  },
  {
    title: 'System Integration & Migration',
    description: 'Seamless integration and migration of legacy systems',
    icon: '⚙️',
    gradient: 'from-teal-500 to-cyan-500',
    expertise: ['Legacy Modernization', 'Data Migration', 'System Integration', 'Framework Migration'],
    technologies: ['Symfony', 'Laravel', 'Laminas', 'Salesforce API'],
  },
  {
    title: 'Performance Optimization',
    description: 'Enhancing application speed and reducing system latency',
    icon: '⚡',
    gradient: 'from-yellow-500 to-amber-500',
    expertise: ['Code Refactoring', 'Caching Strategies', 'Database Indexing', 'Load Optimization'],
    technologies: ['Redis', 'CDN', 'Query Optimization', 'Code Profiling'],
  },
  {
    title: 'Authentication & Security',
    description: 'Implementing secure authentication and authorization systems',
    icon: '🔐',
    gradient: 'from-indigo-500 to-purple-500',
    expertise: ['SSO Implementation', 'Identity Management', 'Data Security', 'Access Control'],
    technologies: ['AWS Cognito', 'JWT', 'OAuth', 'Encryption'],
  },
];

export default function DomainsTab() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Areas of Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Specialized domains where I deliver exceptional results
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ 
              y: -15,
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`h-24 bg-gradient-to-br ${domain.gradient} flex items-center justify-center`}>
              <span className="text-6xl">{domain.icon}</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {domain.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {domain.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <span>✨</span> Key Expertise:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {domain.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <span>🛠️</span> Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {domain.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgb(147, 51, 234)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-4 text-center">
          🎯 Cross-Domain Capabilities
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <h4 className="font-bold mb-1">Rapid Development</h4>
            <p className="text-sm opacity-90">Quick turnaround with quality code</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🎓</div>
            <h4 className="font-bold mb-1">Team Leadership</h4>
            <p className="text-sm opacity-90">Mentoring and guiding development teams</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <h4 className="font-bold mb-1">Scalable Solutions</h4>
            <p className="text-sm opacity-90">Building for growth and performance</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
