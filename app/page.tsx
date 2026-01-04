"use client";

import Image from "next/image";
import profile from '../public/profile.jpeg';
import ThemeToggle from "@/components/theme-toggle";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Image1 from '../public/image.png'
import Image2 from '../public/Taskify.png'
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white
    transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

          className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={profile} alt="profile-picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">

          <section className="space-y-10">


            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Harsh Sharma</h1>
              <p className="text-gray-600 dark:text-gray-400">Web Developer</p>
              <p className="text-gray-600 dark:text-gray-400">Delhi</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">Web Developer passionate about creating fast, user-friendly web applications.</h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Experienced in building modern web applcations using{" "}
                <span className="text-black dark:text-white">Next.js</span> {" "}
                <span className="text-black dark:text-white">React.js</span> {" "}
                <span className="text-black dark:text-white">Node.js</span> {" "}
                <span className="text-black dark:text-white">Express.js</span> {" "}
                <span className="text-black dark:text-white">Tailwind</span><br /><br />
                Proficient in multiple programming languages like, {" "}
                <span className="text-black dark:text-white">Java</span> {" "}
                <span className="text-black dark:text-white">C++</span> {" "}
                <span className="text-black dark:text-white">JavaScript</span> {" "}
                with a focus on writing clean, efficient, and maintainable code.
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Beyond writing code, I enjoy solving real-world problems, continuously
                learning new technologies, and improving application performance,
                accessibility, and user experience through clean and maintainable code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3"
            >
              <Button
                className="rounded-full bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105"
                asChild
              >
                <a href="/Overleaf.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>

              <Link href="https://github.com/kr1sh5harma" target="blank" className="text-gray-600 dark:text-gray-400">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/harsh-sharma-26b151306/" target='blank' className="text-gray-600 dark:text-gray-400">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=krish9515274@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>

            </motion.div>
          </section>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">2023 - 2027</p>
                  <p className="font-medium">Computer Science and Engineering (B.Tech)</p>
                  <p className="text-blue-600 dark:text-blue-400">Dr. Akhilesh Das Gupta Institute of Professional Studies</p>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projects
            </h2>
            <div className="grid grid-cols-1  gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={Image1} alt="project-1-screenshot" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Job Portal</h3>
                      <p className="text-sm text-gray-600">Project 1</p>
                      <p className="text-gray-400 dark:text-gray-600">Apply, Post and Search for Jobs</p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href="https://job-portal-frontend-kappa-two.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ⟶
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={Image2} alt="project-1-screenshot" className="rounded-lg mb-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Taskist-A task listing app</h3>
                      <p className="text-sm text-gray-600">Project 2</p>
                      <p className="text-gray-400 dark:text-gray-600">List and Track your tasks</p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href="https://github.com/kr1sh5harma/Taskist"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ⟶
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  {/* <Image src={Image1} alt="project-1-screenshot" className="rounded-lg mb-4" /> */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Course Selling Website Backend</h3>
                      <p className="text-sm text-gray-600">Project 3</p>
                      <p className="text-gray-400 dark:text-gray-600">Buy and Search for courses</p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href="https://github.com/kr1sh5harma/Course-Selling-App"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ⟶
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-gray-500 mb-20 mt-8">© 2026 Harsh Sharma</p>
          </motion.section>
        </main>
      </div>

    </div>
  );
}
