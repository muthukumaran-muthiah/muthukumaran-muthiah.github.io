'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 50,
    opacity: 0,
    scale: 0.8,
    rotateX: -20,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { 
      type: 'spring' as const,
      damping: 18,
      stiffness: 120,
      duration: 0.7,
    },
  },
};

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    value: 'kumaranpassion2work@outlook.in',
    link: 'mailto:kumaranpassion2work@outlook.in',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'Muthukumaran M',
    link: 'https://www.linkedin.com/in/muthukumaran-m/',
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    icon: '💻',
    title: 'GitHub',
    value: 'muthukumaran-muthiah',
    link: 'https://github.com/muthukumaran-muthiah',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    icon: '🌍',
    title: 'Location',
    value: 'Chennai, India',
    link: '#',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function ContactTab() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Connect With Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Open to discussing technical challenges, architecture design, and innovative solutions
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className={`block bg-gradient-to-r ${method.gradient} p-8 rounded-2xl text-white shadow-lg`}
            whileHover={{ 
              scale: 1.08,
              y: -10,
              rotateZ: index % 2 === 0 ? 2 : -2,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.92 }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <span className="text-6xl">{method.icon}</span>
              <div>
                <h4 className="font-bold text-xl mb-2">{method.title}</h4>
                <p className="text-lg opacity-90">{method.value}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white text-center shadow-2xl max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
        <p className="text-lg mb-6">
          Specialized in building scalable cloud-native applications with modern microservices architecture
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-3xl mb-2">☁️</div>
            <div className="font-semibold">Cloud Architecture</div>
            <div className="opacity-90 mt-1">AWS, Kubernetes, Docker</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-semibold">Full-Stack Development</div>
            <div className="opacity-90 mt-1">PHP, Node.js, Angular, React</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-3xl mb-2">🏗️</div>
            <div className="font-semibold">System Design</div>
            <div className="opacity-90 mt-1">Event Sourcing, CQRS, APIs</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
