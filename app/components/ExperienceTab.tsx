'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    x: -100,
    opacity: 0,
    scale: 0.8,
    rotateY: -25,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { 
      type: 'spring' as const,
      damping: 20,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

const experiences = [
  {
    title: 'Senior Software Engineer',
    period: 'Dec 2022 - Present',
    description: 'Leading development teams and building cutting-edge solutions',
    achievements: [
      'Engineered and deployed end-to-end web applications with seamless user experiences',
      'Spearheaded development team, fostering innovation and high-performance collaboration',
      'Implemented advanced architectural patterns (Event Sourcing, CQRS) for scalability',
      'Led transformation of legacy applications to modern frameworks',
      'Integrated HELM & Kubernetes to streamline deployment processes',
      'Executed comprehensive unit tests ensuring code quality and reliability',
    ],
    tech: ['PHP', 'Symfony', 'Angular', 'Node.js', 'AWS', 'Kubernetes', 'HELM'],
  },
  {
    title: 'System Analyst',
    period: 'Apr 2022 - Dec 2022',
    description: 'System design and stakeholder management',
    achievements: [
      'Crafted high-level design documents outlining system architecture',
      'Developed detailed low-level design documents with technical specifications',
      'Engaged with clients and stakeholders throughout project lifecycle',
      'Evaluated project performance post-delivery for continuous improvement',
    ],
    tech: ['Vue.js', 'Laravel', 'PostgreSQL', 'Quasar', 'Firebase'],
  },
  {
    title: 'Programmer Analyst',
    period: 'Jan 2020 - Mar 2022',
    description: 'Full-stack development and system implementation',
    achievements: [
      'Developed BPM tool for process flow diagrams with issue tracking',
      'Built migration assistant for secure data sharing',
      'Created chat application integrated with existing systems',
      'Implemented responsive designs ensuring cross-browser compatibility',
    ],
    tech: ['PHP', 'Laravel', 'Vue.js', 'Angular', 'Node.js', 'MySQL'],
  },
  {
    title: 'Programmer Analyst Trainee',
    period: 'Nov 2018 - Jan 2020',
    description: 'Starting career with full-stack development projects',
    achievements: [
      'Developed CRM tool from scratch with data migration capabilities',
      'Created applicant tracking tool using Kintone platform',
      'Adapted to changing priorities in dynamic work environment',
      'Contributed to team objectives and project milestones',
    ],
    tech: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Kintone API'],
  },
];

export default function ExperienceTab() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Professional Journey
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Key roles and contributions throughout my career
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative mb-12 flex ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all w-full md:w-[calc(50%-2rem)]"
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateX: index % 2 === 0 ? 5 : -5,
                rotateY: index % 2 === 0 ? -5 : 5,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Timeline dot */}
              <div className={`hidden md:block absolute top-6 w-4 h-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-4 border-white dark:border-gray-900 ${
                index % 2 === 0 ? '-right-[2.6rem]' : '-left-[2.6rem]'
              }`}></div>

              <motion.div
                className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {exp.period}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-lg text-purple-600 dark:text-purple-400 mb-4 font-semibold">
                {exp.company}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                    key={i}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-start">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
