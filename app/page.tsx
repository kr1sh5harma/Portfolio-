"use client";

import Image from "next/image";
import profile from "../public/profile.jpeg";
import avatar from "../public/avatar.png"
import hackster from "../public/HACKSTER.png";
import Image1 from "../public/image.png";
import Image2 from "../public/Taskify.png";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/components/animated-background";
import ScrollReveal from "@/components/scroll-reveal";
import TechBadge from "@/components/tech-badge";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaJava, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb,
} from "react-icons/si";
import { useEffect, useState } from "react";

const roles = ["Web Developer", "Tech Enthusiast", "Problem Solver", "Full Stack Builder"];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, speed, pause]);

  return text;
}

export default function Home() {
  const typedRole = useTypewriter(roles);

  const projects = [
    {
      title: "HackSter",
      description: "A full-stack platform to browse, host, and participate in hackathons. Features real-time updates and team management.",
      image: hackster,
      tags: [ "React", "Node.js", "Express", "MongoDB", "Tailwind"],
      href: "https://hackster-mp4o.onrender.com/",
    },
    {
      title: "Job Portal",
      description: "A comprehensive job portal where users can apply, post, and search for jobs with advanced filtering.",
      image: Image1,
      tags: ["React", "Express.js", "MongoDB", "REST API"],
      href: "https://job-portal-frontend-kappa-two.vercel.app/",
    },
    {
      title: "Taskist",
      description: "A clean and intuitive task management app to list, organize, and track daily tasks efficiently.",
      image: Image2,
      tags: ["HTML", "CSS", "Javascript"],
      href: "https://github.com/kr1sh5harma/Taskist",
    },
    {
      title: "Course Selling Backend",
      description: "A robust backend API for a course-selling platform with authentication, payments, and course management.",
      image: undefined,
      tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
      href: "https://github.com/kr1sh5harma/Course-Selling-App",
    },
  ];

  const techStack = {
    Frontend: [
      { icon: <FaReact />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiHtml5 />, label: "HTML5" },
      { icon: <SiCss3 />, label: "CSS3" },
    ],
    Backend: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <SiMongodb />, label: "MongoDB" },
    ],
    Languages: [
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <FaJava />, label: "Java" },
      { icon: <SiCplusplus />, label: "C++" },
    ],
    Tools: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaGithub />, label: "GitHub" },
    ],
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-block"
          >
            <div className="relative w-28 h-28 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-cyan-400 to-pink-400 p-[3px] animate-[pulse-glow_3s_ease-in-out_infinite]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0f] p-[2px]">
                  <Image
                    src={avatar}
                    alt="Harsh Sharma"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Status dot */}
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0a0a0f] animate-pulse" />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm tracking-widest uppercase text-zinc-500 mb-4"
          >
            Hello, World 👋
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            I&apos;m{" "}
            <span className="gradient-text">Harsh Sharma</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6"
          >
            <span className="text-xl md:text-2xl text-zinc-400">
              {typedRole}
            </span>
            <span className="inline-block w-[2px] h-6 bg-violet-400 ml-1 animate-[typing-cursor_0.8s_ease-in-out_infinite] align-middle" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-zinc-500 max-w-lg mx-auto mb-8 text-sm md:text-base leading-relaxed"
          >
            Crafting fast, modern, and user-friendly web experiences with modern web tools and frameworks{" "}
            
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              View My Work ↓
            </button>
            <a
              href="/Overleaf2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-medium glass-card text-zinc-300 hover:text-white hover:border-violet-500/30 transition-all duration-300 hover:scale-105"
            >
              Resume →
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center justify-center gap-4"
          >
            
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1"
            >
              <motion.div className="w-1 h-2 rounded-full bg-violet-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT SECTION
          ═══════════════════════════════════════════════════ */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-mono text-violet-400">01.</span>
              <h2
                className="text-3xl md:text-4xl font-bold gradient-text"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                About Me
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1} className="md:col-span-2">
              <div className="glass-card p-6 space-y-4">
                <p className="text-zinc-400 leading-relaxed">
                  I&apos;m a passionate{" "}
                  <span className="text-white font-medium">Web Developer</span>{" "}
                  based in Delhi, currently pursuing my{" "}
                  <span className="text-white font-medium">B.Tech in Computer Science</span>{" "}
                  at Dr. Akhilesh Das Gupta Institute of Professional Studies.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  I specialize in building modern, performant web applications
                  using the JavaScript/TypeScript ecosystem. Beyond writing
                  code, I enjoy solving real-world problems, continuously
                  learning new technologies, and improving application
                  performance through clean, maintainable code.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                {[
                  { value: "4+", label: "Projects" },
                  { value: "B.Tech", label: "CSE" },
                  { value: "Full", label: "Stack" },
                  { value: "2027", label: "Graduating" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card p-4 text-center"
                  >
                    <p
                      className="text-2xl font-bold gradient-text"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ═══════════════════════════════════════════════════
          TECH STACK SECTION
          ═══════════════════════════════════════════════════ */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-mono text-violet-400">02.</span>
              <h2
                className="text-3xl md:text-4xl font-bold gradient-text"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Tech Stack
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {Object.entries(techStack).map(([category, techs], catIndex) => (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-zinc-600 mb-4 font-mono">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {techs.map((tech, i) => (
                      <TechBadge
                        key={tech.label}
                        icon={tech.icon}
                        label={tech.label}
                        delay={i * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ═══════════════════════════════════════════════════
          EDUCATION SECTION
          ═══════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-mono text-violet-400">03.</span>
              <h2
                className="text-3xl md:text-4xl font-bold gradient-text"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Education
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-1 h-16 rounded-full bg-gradient-to-b from-violet-500 to-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                    2023 — 2027
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Computer Science and Engineering (B.Tech)
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Dr. Akhilesh Das Gupta Institute of Professional Studies
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ═══════════════════════════════════════════════════
          PROJECTS SECTION
          ═══════════════════════════════════════════════════ */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-12">
              <span className="text-sm font-mono text-violet-400">04.</span>
              <h2
                className="text-3xl md:text-4xl font-bold gradient-text"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Projects
              </h2>
              <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                {projects.length}
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* ═══════════════════════════════════════════════════
          CONTACT SECTION
          ═══════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-sm font-mono text-violet-400 block mb-4">
              05.
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold gradient-text mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s Work Together
            </h2>
            <p className="text-zinc-500 max-w-md mx-auto mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center justify-center gap-4 mb-8">
              {[
                {
                  href: "https://github.com/kr1sh5harma",
                  icon: <FaGithub className="w-5 h-5" />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/harsh-sharma-26b151306/",
                  icon: <FaLinkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                },
                {
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=krish9515274@gmail.com",
                  icon: <FaEnvelope className="w-5 h-5" />,
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-4 rounded-xl glass-card text-zinc-500 hover:text-violet-400 hover-glow transition-all duration-300 group"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=krish9515274@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full text-sm font-medium border border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/10"
            >
              Say Hello 👋
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════ */}
      <footer className="pb-8 pt-4 px-6">
        <div className="section-divider max-w-4xl mx-auto mb-8" />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-zinc-600">
            © 2026 Harsh Sharma 
            
          </p>
        </div>
      </footer>
    </div>
  );
}
