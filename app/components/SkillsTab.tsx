'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    scale: 0.3,
    opacity: 0,
    y: 50,
    rotateY: -90,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { 
      type: 'spring' as const,
      damping: 15,
      stiffness: 100,
      duration: 0.6,
    },
  },
};

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: ['JavaScript', 'Node.js', 'PHP', 'HTML5', 'CSS3', 'TypeScript'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frontend Frameworks',
    icon: '🎨',
    skills: ['Angular (2+)', 'Vue.js', 'React', 'jQuery', 'Quasar'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Backend Frameworks',
    icon: '⚙️',
    skills: ['Laravel', 'Laminas Mezzio', 'Symfony', 'Express.js', 'Restler'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Database Systems',
    icon: '💾',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'EventstoreDB'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS (EKS, Lambda, Cognito, SDK)', 'Kubernetes', 'HELM', 'Docker', 'Terraform', 'Heroku', 'Firebase'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: ['VS Code', 'Git', 'Bitbucket', 'JIRA', 'RabbitMQ', 'Kafka (Streamnative)', 'Minikube'],
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function SkillsTab() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A comprehensive overview of my technical capabilities
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            whileHover={{ 
              y: -10,
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl shadow-lg`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: skillIndex * 0.05 }}
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: 'rgb(147, 51, 234)',
                    color: 'rgb(255, 255, 255)',
                    y: -3,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span>🎯</span> Core Competencies
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Software Development Life Cycle',
            'Cloud Architecture Design',
            'Agile Project Management',
            'API Development and Management',
            'Performance Optimization',
            'Event Sourcing & CQRS Patterns',
            'Microservices Architecture',
            'CI/CD Implementation',
          ].map((competency, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm"
              whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <span className="text-2xl">✓</span>
              <span className="font-medium">{competency}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
