import { Inter, Poppins, Montserrat } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun, FaDownload } from 'react-icons/fa'
import TypedText from '../components/TypedText'
import ParticleBackground from '../components/ParticleBackground'
import ContactForm from '../components/ContactForm'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

// Project data
const projects = [
  {
    title: "Auto-Insure - Peer to peer Blockchain based Car Insurance",
    description: "Pinsurance is a blockchain-based P2P DeFi platform for car insurance.",
    image: "/images.jpeg",
    technologies: ["React.js", "Node.js", "TypeScript", "Tailwind CSS","Solidity","Ether.js", "React"],
    liveUrl: "https://devrathod.com",
    githubUrl: "https://github.com/devrathod13/Auto-Insure.git"
  },
  {
    title: "PawPals - Community-Driven Animal Adoption",
    description: "PawPals is a decentralized platform that simplifies animal adoption and fosters community support for ongoing care.",
    image: "/adoption.jpg",
    technologies: ["Next.js", "Solidity", "MongoDB", "Github Actions", "Ethers.js"],
    liveUrl: "https://taskmanager.devrathod.com",
    githubUrl: "https://github.com/devrathod13/PawPals.git"
  },
  {
    title: "The Agaries - Empowering Traditional Salt Farmers. ",
    description: "The Agaries is an innovative platform designed to uplift traditional salt farmers, providing a space for supporters to learn about their challenges and fund essential tools for sustainable growth.",
    image: "/Salt.webp",
    technologies: ["Next.js", "Node.js", "Solidity", "MongoDB", "Github Actions", "Ethers.js"],
    liveUrl: "https://taskmanager.devrathod.com",
    githubUrl: "https://github.com/devrathod13/PawPals.git"
  },
  // Add more projects as needed
]

// Updated and expanded skill data
const skills = {
  frontend: [
    { name: 'React/Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 91 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Express', level: 82 },
    { name: 'Solidity', level: 90 },
    { name: 'RESTful APIs', level: 88 },
  ],
  database: [
    { name: 'MongoDB', level: 88 },
    { name: 'PostgreSQL', level: 82 },
    { name: 'AWS dynamoDB', level: 90 },
  ],
  cloud: [
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 78 },
    { name: 'Kubernetes', level: 70 },
    { name: 'CI/CD', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Webpack', level: 82 },

  ]
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to html element
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Toaster position="bottom-right" />
      {/* Particle Background */}
      <div className="fixed inset-0 -z-10">
        <ParticleBackground />
      </div>

      {/* Navigation */}
      <nav className={`${montserrat.className} fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Dev Rathod
            </Link>
            
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:text-[var(--primary)] transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-8">
                <Link href="#about" className="nav-link">About</Link>
                <Link href="#projects" className="nav-link">Projects</Link>
                <Link href="#contact" className="nav-link">Contact</Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col gap-4">
              <Link href="#about" className="nav-link">About</Link>
              <Link href="#projects" className="nav-link">Projects</Link>
              <Link href="#contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`${poppins.className} min-h-screen flex items-center justify-center px-4 bg-opacity-90 bg-[var(--background)]`}>
        <div className="text-center space-y-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="gradient-text">Dev Rathod</span>
          </h1>
          <div className="text-xl md:text-2xl text-[var(--text)] opacity-90">
            I&apos;m a{' '}
            <TypedText
              strings={[
                'Full Stack Developer',
                'BlockChain Developer',
                'Problem Solver',
                'Tech Innovator'
              ]}
              className="gradient-text font-semibold"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="#projects" className="button-primary">View My Work</Link>
            <Link href="#contact" className="button-secondary">Get In Touch</Link>
            <a 
              href="/resume.pdf" 
              download 
              className="button-secondary flex items-center gap-2"
            >
              <FaDownload />
              Resume
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/devrathod13" target="_blank" rel="noopener noreferrer" className="social-link text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/devrathod1307" target="_blank" rel="noopener noreferrer" className="social-link text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/devrathod1996" target="_blank" rel="noopener noreferrer" className="social-link text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${inter.className} py-16 px-4 bg-[var(--gray-light)]`}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-title">About Me</h2>
          <div className="space-y-6 text-lg mb-12">
            <p className="opacity-80">
              I&apos;m a software engineer with a passion for building exceptional digital experiences.
              With expertise in modern web technologies, I specialize in creating scalable and
              maintainable applications that solve real-world problems.
            </p>
            <p className="opacity-80">
              My journey in software development began with a curiosity for creating things that
              make a difference. Today, I focus on building accessible, user-friendly applications
              while keeping up with the latest industry trends and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-6">Frontend Development</h3>
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item space-y-1">
                  <div className="skill-label">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Backend Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-6">Backend Development</h3>
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item space-y-1">
                  <div className="skill-label">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Database Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-6">Database & Storage</h3>
              {skills.database.map((skill, index) => (
                <div key={index} className="skill-item space-y-1">
                  <div className="skill-label">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Cloud & DevOps Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-6">Cloud & DevOps</h3>
              {skills.cloud.map((skill, index) => (
                <div key={index} className="skill-item space-y-1">
                  <div className="skill-label">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Development Tools */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-6">Development Tools</h3>
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item space-y-1">
                  <div className="skill-label">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`${poppins.className} py-16 px-4`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="card group transform hover:scale-105 transition-all duration-300 bg-white dark:bg-white"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm">{project.description}</p>
                      <div className="mt-4 space-x-4">
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-[var(--primary)] rounded-lg hover:opacity-90 transition-opacity z-10"
                        >
                          Live Demo
                        </a>
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors z-10"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`${montserrat.className} text-xl font-bold mb-2 text-black dark:text-black`}>{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-sm bg-[var(--gray-light)] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${poppins.className} py-16 px-4 bg-[var(--gray-light)]`}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Get In Touch</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
              <p className="opacity-80 mb-6">
                I&apos;m always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to drop me a message!
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <a href="mailto:devnitarathod@gmail.com" className="text-[var(--primary)]">
                    devnitarathod@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="opacity-80">Saskatoon, Saskatchewan</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/devrathod13" target="_blank" rel="noopener noreferrer" className="social-link text-xl">
                      <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/devrathod1307" target="_blank" rel="noopener noreferrer" className="social-link text-xl">
                      <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/devrathod1307" target="_blank" rel="noopener noreferrer" className="social-link text-xl">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center opacity-80">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Dev Rathod. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
