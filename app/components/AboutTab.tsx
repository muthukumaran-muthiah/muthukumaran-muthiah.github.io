'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    y: 60,
    opacity: 0,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { 
      type: 'spring' as const,
      damping: 20,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

export default function AboutTab() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center">
        <motion.div
          className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-6xl text-white shadow-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring',
            damping: 15,
            stiffness: 200,
            delay: 0.3,
          }}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          👨‍💻
        </motion.div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Muthukumaran Muthiah
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
          Senior Software Engineer & Full-Stack Developer
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span>🎯</span> About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Dynamic and results-driven Full-Stack Developer with a robust focus on web technologies 
          and cloud platforms. With over 7 years of comprehensive experience in software development, 
          I specialize in building scalable, high-performance applications with a strong emphasis on 
          cloud technologies and agile methodologies.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Currently serving as a Senior Software Engineer, I lead development teams to enhance 
          application performance and reliability through modern architectural practices including 
          Event Sourcing, CQRS, and microservices architecture.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
        {[
          { icon: '💼', title: 'Experience', value: '7+ Years' },
          { icon: '🎓', title: 'Education', value: 'B.E/B.Tech' },
          { icon: '🌍', title: 'Location', value: 'Chennai, India' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-1">
              {item.title}
            </h3>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
