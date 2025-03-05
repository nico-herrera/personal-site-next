"use client";

import { motion } from "framer-motion";
import Background3D from "./components/Background3D";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Background3D />
      <Navigation />
      <ScrollToTop />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="holo-panel p-8 md:p-12"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Nico Herrera
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl text-neon-blue mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Lead Full-Stack Engineer
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Experienced software engineer specializing in architecting and
                delivering client applications from concept through deployment.
                Expert in building innovative, high-performance web solutions
                with a focus on exceptional user experience.
              </motion.p>
              <motion.div
                className="mt-8 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a href="#projects" className="cyber-button">
                  View Projects
                </a>
                <a href="#contact" className="cyber-button">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 neon-text text-center"
              {...fadeInUp}
            >
              Work Experience
            </motion.h2>
            <div className="space-y-12">
              {/* Experience 1 */}
              <motion.div
                className="holo-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neon-blue">
                      Lead Full-Stack Engineer
                    </h3>
                    <p className="text-gray-300">Fusion92</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">05/2023 - present</span>
                    <span className="text-neon-green">Remote</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Architected and delivered client applications from concept
                      through deployment, consistently meeting deadlines and
                      receiving exceptional client feedback
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Spearheaded development of a Retrieval-Augmented
                      Generation (RAG) system that significantly streamlined
                      information access and eliminated most manual document
                      processing tasks
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Successfully rescued and led multiple stalled projects to
                      completion, maintaining high code quality standards while
                      meeting critical deadlines
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Mentored junior and mid-level developers through code
                      reviews and pair programming, elevating team capabilities
                      and accelerating professional growth
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Experience 2 */}
              <motion.div
                className="holo-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neon-blue">
                      Senior Full-Stack Engineer
                    </h3>
                    <p className="text-gray-300">Pulsr</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">03/2022 - 05/2024</span>
                    <span className="text-neon-green">Remote</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Led technical innovation as primary developer in a
                      two-person team for a fintech startup, driving application
                      architecture decisions and feature planning
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Executed comprehensive platform rebuild while maintaining
                      near-perfect uptime, incorporating iterative improvements
                      based on continuous user feedback
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Developed responsive, high-performance web application
                      that dramatically improved user engagement and conversion
                      metrics
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Experience 3 */}
              <motion.div
                className="holo-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neon-blue">
                      Full-Stack Engineer
                    </h3>
                    <p className="text-gray-300">American National Insurance</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">10/2021 - 03/2022</span>
                    <span className="text-neon-green">League City, TX</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Contributed to several ongoing applications for Agent
                      Services
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Implemented several user-facing features with MaterialUI
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Managed several different applications while participating
                      in On-Call rotation
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 neon-text text-center"
              {...fadeInUp}
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <motion.div
                className="holo-panel p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-2 text-neon-blue">
                  Internal AI Project
                </h3>
                <p className="text-sm text-neon-green mb-4">
                  Lead Full Stack Engineer
                </p>
                <p className="text-gray-300 mb-4">
                  Architected and developed an enterprise-grade multi-tenant
                  platform with role-based access control that securely isolates
                  client data across organizational boundaries.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex text-sm">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Engineered an advanced content management system using
                      Sanity CMS with dynamic white-labeling capabilities
                    </span>
                  </li>
                  <li className="flex text-sm">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Implemented sophisticated AI features using OpenAI and
                      Azure Search services
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-neon-blue">
                    React
                  </span>
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-neon-purple">
                    TypeScript
                  </span>
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-neon-green">
                    OpenAI
                  </span>
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-neon-pink">
                    Azure
                  </span>
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-white">
                    Sanity CMS
                  </span>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                className="holo-panel p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-2 text-neon-blue">
                  New York Life
                </h3>
                <p className="text-sm text-neon-green mb-4">
                  Senior Front-End Engineer
                </p>
                <p className="text-gray-300 mb-4">
                  Completed integration of critical unfinished features under
                  tight deadline constraints, preventing significant project
                  delays and business impact.
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex text-sm">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Developed innovative agent-facing screens that
                      substantially streamlined case processing workflows
                    </span>
                  </li>
                  <li className="flex text-sm">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>
                      Collaborated effectively with numerous team members across
                      multiple departments
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-neon-blue">
                    React
                  </span>
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-neon-purple">
                    TypeScript
                  </span>
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-neon-green">
                    Node.js
                  </span>
                  <span className="text-xs bg-holo-light px-2 py-1 rounded text-white">
                    Material UI
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 neon-text text-center"
              {...fadeInUp}
            >
              Technical Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="holo-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-6 text-neon-blue">
                  Libraries & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    React
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    Redux
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    NextJS
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    Context API
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-white">
                    Jest
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    Node.js
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    Express
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    Knex
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    SvelteJS
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-white">
                    TailwindCSS
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    Styled Components
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    MaterialUI
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    Ngrx
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    Angular
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-white">
                    Web3
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    SvelteKit
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    MongoDB
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    VueJS
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    NuxtJS
                  </span>
                </div>

                <h3 className="text-xl font-bold my-6 text-neon-blue">
                  Database
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    Heroku
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    SQL
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    NoSQL
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    GraphQL
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-white">
                    REST
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    Restful API
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="holo-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 text-neon-blue">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    JavaScript
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    TypeScript
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    HTML5
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    CSS3
                  </span>
                </div>

                <h3 className="text-xl font-bold my-6 text-neon-blue">
                  Other Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    GitHub
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    Vercel
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    Algorithms
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    Networking
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-white">
                    Scalability
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    Unit Testing
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    Deployment
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    Design Patterns
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    Docker
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-white">
                    Availability
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-blue">
                    Agile
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-purple">
                    Performance Optimization
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-green">
                    npm
                  </span>
                  <span className="text-sm bg-holo-light px-3 py-1 rounded text-neon-pink">
                    Azure
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="holo-panel p-8 md:p-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 neon-text">
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-lg text-gray-300 mb-6">
                    I&apos;m a Lead Front-End Engineer with extensive experience
                    in building enterprise-grade applications and leading
                    development teams. My expertise spans from concept through
                    deployment, with a focus on creating exceptional user
                    experiences and maintaining high code quality standards.
                  </p>
                  <p className="text-lg text-gray-300">
                    I&apos;m passionate about mentoring junior developers,
                    rescuing stalled projects, and implementing innovative
                    solutions that drive business value. My recent work includes
                    developing sophisticated AI features and building
                    high-performance web applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-neon-blue">
                    Location
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Based in Austin, Texas
                  </p>

                  <h3 className="text-xl font-bold mb-4 text-neon-blue">
                    Specialization
                  </h3>
                  <p className="text-lg text-gray-300">
                    Front-end development with React/Next.js, TypeScript, and
                    modern web technologies. Experienced in full-stack
                    development with Node.js and various database technologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="holo-panel p-8 md:p-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 neon-text">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Interested in working together? Let&apos;s discuss your project.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <a
                    href="mailto:nicoherrera0831@gmail.com"
                    className="cyber-button w-full justify-center flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    nicoherrera0831@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nicoherreradev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button w-full justify-center flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/nico-herrera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button w-full justify-center flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
                <div className="holo-panel p-6">
                  <h3 className="text-xl font-bold mb-4 text-neon-blue">
                    Location
                  </h3>
                  <p className="text-gray-300">Austin, Texas</p>
                  <p className="text-gray-300">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
