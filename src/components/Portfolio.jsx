import React, { useState } from 'react';
import { Menu, X, User, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Portfolio data
  const data = {
    name: "Zainab Abdelnabi",
    title: "Frontend Developer",
    email: "zelsababty@gmail.com",
    phone: "00201010126659",
    location: "Mounofya, Egypt",
    linkedin: "linkedin.com/in/zainab-abdelnabi",
    summary:
        "A Passionate and Creative Front-End Developer with a knack for crafting engaging, user-friendly interfaces. Delivering impactful projects that enhanced user experience and streamlined functionality. Translating complex designs into seamless, interactive websites.",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "Angular 17",
      "UI/UX Design",
      "Responsive Design",
      "Visual Studio Code",
    ],
    projects: [
      {
        title: "E-commerce Platform",
        period: "03/2024 - 10/2024",
        location: "Cairo, Egypt",
        description:
            "Developed a robust e-commerce platform as a capstone project for my diploma, focusing on delivering a seamless user experience.",
        achievements: [
          "Intuitive UI Design: Created a user-friendly interface that enhances navigation and product discovery.",
          "Secure Payment Integration: Implemented secure payment gateways to ensure safe transactions.",
          "Advanced Search and Categorization: Developed robust search and categorization features to facilitate efficient product browsing.",
          "Responsive Design: Optimized the platform for seamless viewing and interaction across various devices.",
        ],
        tags: ["HTML5", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      },
    ],
    education: [
      {
        institution: "Ministry of Communications (DEPI)",
        location: "Cairo, Egypt",
        degree: "High Studies Diploma: Frontend Development",
        period: "03/2024",
        description:
            "Completed 165 hours of training focused on frontend development and user experience design. Courses included HTML5 Essentials, CSS Essentials, UX/UI Design Principles, JavaScript Fundamentals, jQuery & Ajax, Bootstrap.",
      },
      {
        institution: "University of Benha",
        location: "Egypt",
        degree: "Doctor of Science",
        period: "05/2014 - 05/2021",
      },
      {
        institution: "University of Minia",
        location: "Egypt",
        degree: "Master of Science",
        period: "05/2007 - 09/2010",
      },
      {
        institution: "University of Minia",
        location: "Egypt",
        degree: "Bachelor of Science",
        period: "07/2001 - 05/2005",
        description: "GPA: Very good with Honours Degree (82.06%)",
      },
    ],
    experience: [
    {
      role: "Front-End Developer Intern",
      company: "Ministry of Communications (DEPI)",
      location: "Egypt",
      period: "03/2024 - 11/2024",
      responsibilities: ["Developed X feature", "Refined UI"]
    }
  ],
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Upper intermediate" },
    ],
  };

  return (
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Header/Navigation */}
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
          <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">
              {data.name.split(' ')[0]}
              <span className="text-gray-800">.dev</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <button
                  onClick={() => scrollToSection('home')}
                  className={`px-2 py-1 ${
                      activeSection === 'home'
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                Home
              </button>
              <button
                  onClick={() => scrollToSection('about')}
                  className={`px-2 py-1 ${
                      activeSection === 'about'
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                About
              </button>
              <button
                  onClick={() => scrollToSection('skills')}
                  className={`px-2 py-1 ${
                      activeSection === 'skills'
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                Skills
              </button>
              <button
                  onClick={() => scrollToSection('projects')}
                  className={`px-2 py-1 ${
                      activeSection === 'projects'
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                Projects
              </button>
              <button
                  onClick={() => scrollToSection('education')}
                  className={`px-2 py-1 ${
                      activeSection === 'education'
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                Education
              </button>
              <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-2 py-1 ${
                      activeSection === 'contact'
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700" onClick={toggleMenu}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {menuOpen && (
              <div className="md:hidden bg-white px-4 py-2 shadow-lg">
                <div className="flex flex-col space-y-3">
                  <button onClick={() => scrollToSection('home')} className="text-left px-2 py-1 text-gray-600 hover:text-blue-600">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-left px-2 py-1 text-gray-600 hover:text-blue-600">
                    About
                  </button>
                  <button onClick={() => scrollToSection('skills')} className="text-left px-2 py-1 text-gray-600 hover:text-blue-600">
                    Skills
                  </button>
                  <button onClick={() => scrollToSection('projects')} className="text-left px-2 py-1 text-gray-600 hover:text-blue-600">
                    Projects
                  </button>
                  <button onClick={() => scrollToSection('education')} className="text-left px-2 py-1 text-gray-600 hover:text-blue-600">
                    Education
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="text-left px-2 py-1 text-gray-600 hover:text-blue-600">
                    Contact
                  </button>
                </div>
              </div>
          )}
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-16">
          {/* Hero Section */}
          <section id="home" className="pt-16 pb-20 flex flex-col items-center justify-center min-h-screen text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mb-6 flex items-center justify-center">
              <span className="text-5xl font-bold text-blue-600">{data.name.charAt(0)}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{data.name}</h1>
            <h2 className="text-2xl text-blue-600 mb-6">{data.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-8">{data.summary}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                View My Projects
              </button>
              <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Me
              </button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  I'm a creative Frontend Developer with a strong background in both technology and science. My journey from microbiology to web development has equipped me with unique problem-solving skills and attention to detail that I bring to every project.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Having recently completed specialized training in frontend development, I'm passionate about creating intuitive, responsive, and visually appealing web interfaces that provide exceptional user experiences.
                </p>
                <p className="text-lg text-gray-700">
                  My technical expertise includes HTML5, CSS, JavaScript, Bootstrap, jQuery, and Angular 17, complemented by a solid understanding of UI/UX design principles.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Work Experience</h3>
                {data.experience.map((exp, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-blue-600">{exp.role}</h4>
                        <span className="text-gray-600">{exp.period}</span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {exp.company} | {exp.location}
                      </p>
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <ul className="list-disc pl-5 text-gray-700">
                            {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="mb-1">
                                  {resp}
                                </li>
                            ))}
                          </ul>
                      )}
                    </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h3>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.languages.map((language, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium text-gray-800">{language.name}</span>
                          <span className="text-gray-600">{language.level}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Skills</h2>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-wrap gap-3">
                  {data.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    {skill}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>

              {data.projects.map((project, index) => (
                  <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h3 className="text-2xl font-semibold text-blue-600">{project.title}</h3>
                      <span className="text-gray-600">{project.period}</span>
                    </div>
                    <p className="text-gray-700 mb-5">{project.location}</p>
                    <p className="text-gray-700 mb-4">{project.description}</p>

                    <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 mb-5">
                      {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="mb-1">
                            {achievement}
                          </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                      {tag}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>

              <div className="space-y-6">
                {data.education.map((edu, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
                        <span className="text-gray-600">{edu.period}</span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {edu.institution} | {edu.location}
                      </p>
                      {edu.description && <p className="text-gray-700">{edu.description}</p>}
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get In Touch</h2>

              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <p className="flex items-center text-gray-700">
                        <Mail size={20} className="mr-3 text-blue-600" />
                        <a href={`mailto:${data.email}`} className="hover:text-blue-600 transition-colors">
                          {data.email}
                        </a>
                      </p>
                      <p className="flex items-center text-gray-700">
                        <User size={20} className="mr-3 text-blue-600" />
                        <a href={`tel:${data.phone}`} className="hover:text-blue-600 transition-colors">
                          {data.phone}
                        </a>
                      </p>
                      <p className="flex items-center text-gray-700">
                        <Linkedin size={20} className="mr-3 text-blue-600" />
                        <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                          {data.linkedin}
                        </a>
                      </p>
                      <p className="flex items-center text-gray-700">
                        <ExternalLink size={20} className="mr-3 text-blue-600" />
                        {data.location}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Your message here..."
                        ></textarea>
                      </div>
                      <button
                          type="button"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">&copy; {new Date().getFullYear()} Zainab Abdelnabi. All rights reserved.</p>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
        </footer>
      </div>
  );
};

export default Portfolio;