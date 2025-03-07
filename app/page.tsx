"use client";

import { motion } from "framer-motion";
import Background3D from "./components/Background3D";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Link from "next/link";

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-end text-right-align">
          {/* Header Section */}
          <header className="mb-16 md:mb-24 w-full md:w-2/3 lg:w-1/2">
            <h1 className="text-2xl md:text-3xl mb-4 tracking-tighter text-mono-100">
              <span className="text-accent-primary">NICO</span> HERRERA
            </h1>
            <p className="text-xs md:text-sm text-mono-400 mb-6">
              LEAD SOFTWARE ENGINEER // FULL-STACK DEVELOPER
            </p>
            <div className="h-px w-16 bg-accent-primary ml-auto mb-6"></div>
            <p className="text-xs md:text-sm text-mono-300 max-w-md ml-auto">
              Experienced software engineer specializing in architecting and
              delivering client applications from concept through deployment.
              Expert in building innovative, high-performance web solutions.
            </p>
          </header>

          {/* About Section */}
          <section className="mb-16 md:mb-24 w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-lg md:text-xl mb-4 tracking-tighter text-mono-100">
              <span className="text-accent-primary">//</span> {"ABOUT"}
            </h2>
            <div className="terminal-panel mb-6">
              <div className="terminal-header">
                <div className="text-xs text-mono-400">profile.sys</div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                  <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                  <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                </div>
              </div>
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-text">
                    Lead Software Engineer with expertise in building scalable
                    web applications
                  </span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-text">
                    Passionate about clean code, user experience, and innovative
                    solutions
                  </span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-text">
                    Based in Austin, Texas. Available for remote work worldwide
                  </span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-text">
                    Specializing in React/Next.js, TypeScript, and modern web
                    technologies
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-mono-400 ml-auto">
              SYSTEM STATUS:{" "}
              <span className="text-accent-primary">OPERATIONAL</span>
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-16 md:mb-24 w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-lg md:text-xl mb-4 tracking-tighter text-mono-100">
              <span className="text-accent-primary">//</span> {"EXPERIENCE"}
            </h2>
            <div className="space-y-6">
              <div className="terminal-panel">
                <div className="terminal-header">
                  <div className="text-xs text-mono-400">fusion92.log</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                    <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                  </div>
                </div>
                <div className="terminal-content">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm text-mono-100">
                      Lead Full-Stack Engineer
                    </h3>
                    <span className="text-xs text-accent-primary">
                      05/2023 - present
                    </span>
                  </div>
                  <p className="text-xs text-mono-400 mb-2">
                    Architected and delivered client applications from concept
                    through deployment, consistently meeting deadlines and
                    receiving exceptional client feedback.
                  </p>
                  <p className="text-xs text-mono-400">
                    Spearheaded development of a Retrieval-Augmented Generation
                    (RAG) system that significantly streamlined information
                    access.
                  </p>
                </div>
              </div>

              <div className="terminal-panel">
                <div className="terminal-header">
                  <div className="text-xs text-mono-400">pulsr.log</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                    <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                  </div>
                </div>
                <div className="terminal-content">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm text-mono-100">
                      Senior Full-Stack Engineer
                    </h3>
                    <span className="text-xs text-accent-primary">
                      03/2022 - 05/2024
                    </span>
                  </div>
                  <p className="text-xs text-mono-400 mb-2">
                    Led technical innovation as primary developer in a
                    two-person team for a fintech startup, driving application
                    architecture decisions and feature planning.
                  </p>
                  <p className="text-xs text-mono-400">
                    Executed comprehensive platform rebuild while maintaining
                    near-perfect uptime, incorporating iterative improvements
                    based on continuous user feedback.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16 md:mb-24 w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-lg md:text-xl mb-4 tracking-tighter text-mono-100">
              <span className="text-accent-primary">//</span> {"SKILLS"}
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-xs text-mono-200 mb-2">FRONTEND</h3>
                <ul className="text-xs space-y-1 text-mono-400">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Three.js / WebGL</li>
                  <li>Redux / Context API</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs text-mono-200 mb-2">BACKEND</h3>
                <ul className="text-xs space-y-1 text-mono-400">
                  <li>Node.js / Express</li>
                  <li>Python</li>
                  <li>GraphQL / REST</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>AWS / Azure</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs text-mono-200 mb-2">TOOLS</h3>
                <ul className="text-xs space-y-1 text-mono-400">
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                  <li>Vercel / Netlify</li>
                  <li>CI/CD Pipelines</li>
                  <li>Jest / Testing Library</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs text-mono-200 mb-2">SPECIALTIES</h3>
                <ul className="text-xs space-y-1 text-mono-400">
                  <li>UI/UX Design</li>
                  <li>Performance Optimization</li>
                  <li>Responsive Design</li>
                  <li>Accessibility</li>
                  <li>Agile Methodologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16 md:mb-24 w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-lg md:text-xl mb-4 tracking-tighter text-mono-100">
              <span className="text-accent-primary">//</span> {"PROJECTS"}
            </h2>
            <div className="space-y-6">
              <div className="terminal-panel">
                <div className="terminal-header">
                  <div className="text-xs text-mono-400">internal_ai.exe</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                    <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                  </div>
                </div>
                <div className="terminal-content">
                  <h3 className="text-sm text-mono-100 mb-2">
                    Internal AI Project
                  </h3>
                  <p className="text-xs text-mono-400 mb-2">
                    Architected and developed an enterprise-grade multi-tenant
                    platform with role-based access control that securely
                    isolates client data across organizational boundaries.
                  </p>
                  <div className="flex space-x-2 text-xs">
                    <span className="text-accent-primary">Next.js</span>
                    <span className="text-mono-500">|</span>
                    <span className="text-accent-primary">TypeScript</span>
                    <span className="text-mono-500">|</span>
                    <span className="text-accent-primary">Azure</span>
                    <span className="text-mono-500">|</span>
                    <span className="text-accent-primary">Node.js</span>
                    <span className="text-mono-500">|</span>
                    <span className="text-accent-primary">Material UI</span>
                  </div>
                </div>
              </div>

              <div className="terminal-panel">
                <div className="terminal-header">
                  <div className="text-xs text-mono-400">nyl_project.exe</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                    <div className="w-2 h-2 rounded-full bg-mono-600"></div>
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                  </div>
                </div>
                <div className="terminal-content">
                  <h3 className="text-sm text-mono-100 mb-2">New York Life</h3>
                  <p className="text-xs text-mono-400 mb-2">
                    Completed integration of critical unfinished features under
                    tight deadline constraints, preventing significant project
                    delays and business impact.
                  </p>
                  <div className="flex space-x-2 text-xs">
                    <span className="text-accent-primary">Vue</span>
                    <span className="text-mono-500">|</span>
                    <span className="text-accent-primary">TypeScript</span>
                    <span className="text-mono-500">|</span>
                    <span className="text-accent-primary">Node.js</span>
                    <span className="text-mono-500">|</span>
                    <span className="text-accent-primary">Material UI</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-lg md:text-xl mb-4 tracking-tighter text-mono-100">
              <span className="text-accent-primary">//</span> {"CONTACT"}
            </h2>
            <div className="flex flex-col space-y-2 mb-6">
              <a
                href="mailto:nicoherrera0831@gmail.com"
                className="text-xs hover:text-accent-primary transition-colors"
              >
                nicoherrera0831@gmail.com
              </a>
              <a
                href="https://github.com/nico-herrera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-accent-primary transition-colors"
              >
                github.com/nico-herrera
              </a>
              <a
                href="https://linkedin.com/in/nicoherreradev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-accent-primary transition-colors"
              >
                linkedin.com/in/nicoherreradev
              </a>
            </div>
            <a
              href="/Nico-Herrera-Resume-20250305.pdf"
              download
              className="minimal-button ml-auto inline-block"
            >
              DOWNLOAD CV
            </a>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-mono-800 w-full text-right">
            <p className="text-xs text-mono-500">
              © {new Date().getFullYear()} Nico Herrera. All rights reserved.
            </p>
            <p className="text-xs text-mono-700 mt-1">
              Built with Next.js and Tailwind CSS
            </p>
          </footer>
        </div>
      </div>

      {/* Artistic Elements - Now Expanded */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Circuit Board Lines - Expanded */}
        <div className="absolute inset-0 opacity-20">
          {/* Left Side */}
          <div className="absolute left-10 top-1/4 w-64 h-px bg-accent-primary"></div>
          <div className="absolute left-20 top-1/4 w-px h-64 bg-accent-primary"></div>
          <div className="absolute left-20 top-1/4 w-32 h-px bg-accent-primary"></div>
          <div className="absolute left-52 top-1/4 w-px h-96 bg-accent-primary"></div>
          <div className="absolute left-52 top-[calc(25%+96px)] w-48 h-px bg-accent-primary"></div>

          <div className="absolute left-5 top-2/4 w-96 h-px bg-accent-primary"></div>
          <div className="absolute left-5 top-[calc(50%-64px)] w-px h-64 bg-accent-primary"></div>
          <div className="absolute left-5 top-[calc(50%-64px)] w-32 h-px bg-accent-primary"></div>

          <div className="absolute left-24 bottom-1/4 w-64 h-px bg-accent-primary"></div>
          <div className="absolute left-24 bottom-[calc(25%-48px)] w-px h-48 bg-accent-primary"></div>
          <div className="absolute left-24 bottom-[calc(25%-48px)] w-40 h-px bg-accent-primary"></div>

          {/* Center Area - Extending into Content */}
          <div className="absolute left-1/3 top-1/3 w-1/3 h-px bg-accent-primary"></div>
          <div className="absolute left-1/3 top-1/3 w-px h-64 bg-accent-primary"></div>
          <div className="absolute left-1/3 top-[calc(33%+64px)] w-48 h-px bg-accent-primary"></div>

          <div className="absolute left-[45%] bottom-1/4 w-32 h-px bg-accent-primary"></div>
          <div className="absolute left-[45%] bottom-1/4 w-px h-32 bg-accent-primary"></div>
        </div>

        {/* Tech Symbols - Larger */}
        <div className="absolute left-12 top-20 text-accent-primary opacity-30 text-6xl font-mono">
          {"</"}
        </div>
        <div className="absolute left-28 top-[calc(50%-24px)] text-accent-primary opacity-30 text-6xl font-mono">
          {"[]"}
        </div>
        <div className="absolute left-16 bottom-32 text-accent-primary opacity-30 text-6xl font-mono">
          {"{ }"}
        </div>
        <div className="absolute left-[40%] top-40 text-accent-primary opacity-20 text-5xl font-mono">
          {">"}
        </div>

        {/* Geometric Shapes - Larger */}
        <div className="absolute left-40 top-40 w-48 h-48 border border-accent-primary opacity-10 rotate-45"></div>
        <div className="absolute left-20 top-[calc(50%+40px)] w-32 h-32 border border-accent-primary opacity-10 rounded-full"></div>
        <div className="absolute left-32 bottom-48 w-40 h-40 border border-accent-primary opacity-10"></div>
        <div className="absolute left-[35%] top-[60%] w-24 h-24 border border-accent-primary opacity-10 rotate-12"></div>

        {/* Vertical Data Streams - More of them */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary to-transparent opacity-20"></div>
        <div className="absolute left-48 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary to-transparent opacity-20"></div>
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary to-transparent opacity-15"></div>
        <div className="absolute left-[40%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary to-transparent opacity-10"></div>

        {/* Horizontal Scan Lines - Multiple */}
        <div className="absolute left-0 right-0 top-1/3 h-px bg-accent-primary opacity-30 animate-pulse"></div>
        <div className="absolute left-0 right-0 top-2/3 h-px bg-accent-primary opacity-20 animate-pulse"></div>

        {/* Star Wars-inspired Tech Element - Larger */}
        <div className="absolute left-24 top-1/3 opacity-20">
          <div className="w-48 h-48 border-2 border-accent-primary rounded-full relative">
            <div className="absolute inset-3 border border-accent-primary rounded-full"></div>
            <div className="absolute inset-6 border border-accent-primary rounded-full"></div>
            <div className="absolute inset-9 border border-accent-primary rounded-full"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-primary"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-accent-primary"></div>
          </div>
        </div>

        {/* Additional Tech Elements - Larger and More */}
        <div className="absolute left-10 bottom-20 opacity-20">
          <div className="w-36 h-36 border border-accent-primary relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border border-accent-primary rotate-45"></div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent-primary"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-accent-primary"></div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent-primary"></div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent-primary"></div>
          </div>
        </div>

        {/* New Tech Element in Content Area */}
        <div className="absolute left-[45%] top-[20%] opacity-15">
          <div className="w-24 h-24 border border-accent-primary relative rotate-45">
            <div className="absolute inset-2 border border-accent-primary"></div>
            <div className="absolute inset-4 border border-accent-primary"></div>
            <div className="absolute inset-6 border border-accent-primary"></div>
          </div>
        </div>

        {/* Binary Code - Larger and More */}
        <div className="absolute left-4 top-60 text-accent-primary opacity-10 text-sm font-mono tracking-widest leading-relaxed">
          {"01001110 01001001 01000011 01001111"}
          <br />
          {"01001000 01000101 01010010 01010010"}
          <br />
          {"01000101 01010010 01000001 00100000"}
          <br />
          {"01000100 01000101 01010110 00100000"}
          <br />
          {"01000011 01001111 01000100 01000101"}
          <br />
          {"01010011 01001111 01000110 01010100"}
          <br />
        </div>

        <div className="absolute left-[35%] top-[70%] text-accent-primary opacity-5 text-sm font-mono tracking-widest leading-relaxed">
          {"01010111 01000101 01000010"}
          <br />
          {"01000100 01000101 01010110"}
          <br />
          {"01000110 01010101 01001100 01001100"}
          <br />
          {"01010011 01010100 01000001 01000011 01001011"}
          <br />
        </div>

        {/* Animated Pulse Elements - More of them */}
        <div className="absolute left-16 top-1/4 w-6 h-6 bg-accent-primary rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute left-40 bottom-1/3 w-6 h-6 bg-accent-primary rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute left-[38%] top-[45%] w-4 h-4 bg-accent-primary rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute left-[42%] bottom-[28%] w-3 h-3 bg-accent-primary rounded-full opacity-5 animate-pulse"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-lines opacity-5"></div>
      </div>
    </main>
  );
}
