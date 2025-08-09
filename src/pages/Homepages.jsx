import React, { useRef, useState, useEffect } from 'react';
import '../styles/portfolio.css';

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const certificationsRef = useRef(null)
  
  useEffect(() => {
    setIsLoaded(true);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isScrolling]);

  const _scrollToSection = (sectionId) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);

    if (element) {
      // Add transition class to body for smooth scrolling effect
      document.body.classList.add('smooth-scrolling');

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Remove transition class and reset scrolling state after animation
      setTimeout(() => {
        document.body.classList.remove('smooth-scrolling');
        setIsScrolling(false);
      }, 1000);
    }
  };

  const scrollToSection = (sectionId) => {
    setIsScrolling(true)
    const element = document.getElementById(sectionId)
    
    if (element) {
      // Add transition class to body for smooth scrolling effect
      document.body.classList.add('smooth-scrolling')
      
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      // Remove transition class and reset scrolling state after animation
      setTimeout(() => {
        document.body.classList.remove('smooth-scrolling')
        setIsScrolling(false)
      }, 1000)
    }
  }

  const handleDownloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a')
    link.href = '/cv/Sondos-FCV.pdf'
    link.download = 'Sondos-FCV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewCV = () => {
    // Open CV in new tab for viewing
    window.open('public/cv/Sondos-FCV.pdf', '_blank')
  }

  const scrollSkills = (direction) => {
    if (skillsRef.current) {
      const scrollAmount = 300;
      skillsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollExperience = (direction) => {
    if (experienceRef.current) {
      const scrollAmount = 350;
      experienceRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollCertifications = (direction) => {
    if (certificationsRef.current) {
      const scrollAmount = 320
      certificationsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const skills = [
    { name: 'Strategic Planning', icon: '🎯', level: 95 },
    { name: 'Operations Management', icon: '⚙️', level: 90 },
    { name: 'Leadership', icon: '👑', level: 92 },
    { name: 'Data Analysis', icon: '📊', level: 85 },
    { name: 'Project Management', icon: '📋', level: 88 },
    { name: 'Digital Strategy', icon: '💻', level: 87 },
    { name: 'Team Management', icon: '👥', level: 93 },
    { name: 'Business Transformation', icon: '🚀', level: 89 },
    { name: 'HR Management', icon: '👤', level: 86 },
    { name: 'Training & Development', icon: '🎓', level: 84 },
    { name: 'Translation', icon: '🌐', level: 88 },
    { name: 'Graphic Design', icon: '🎨', level: 82 }
  ];

  const experiences = [
    {
      title: 'Operations Coordinator',
      company: 'B. Online KW',
      period: '2018 - Present',
      description: 'Provided comprehensive administrative support to the Director and top management, managing meetings, documentation, and interdepartmental coordination. Oversaw work orders, contract administration, and legal filings for projects, while maintaining organized records and efficient filing systems. Coordinated with multiple departments to ensure smooth operations, supported HR with overtime and documentation, liaised with Finance for petty cash and service acceptances, and utilized Trello and Salesforce to streamline workflows.',
      color: '#ff6b6b'
    },
    {
      title: 'English Language Teacher',
      company: 'Future Generation Academy',
      period: 'Jul 2022 - Sep2022',
      description: 'Teaching kids from all over the world in fun ways with creative skills by using my background in Montessori Education',
      color: '#4ecdc4'
    },
    {
      title: 'Human Resources Administrator',
      company: ' Bleach Cleaning Services',
      period: 'Feb 2022 - Jun 2022',
      description: 'Handled end-to-end recruitment processes, maintained accurate employee records, ensured legal compliance in employment practices, supported payroll and HR projects, addressed staff concerns to enhance performance, and promoted a well-organized and positive work environment.',
      color: '#45b7d1'
    },
    {
      title: 'Human Resources Internship',
      company: ' Trivayu-Online',
      period: 'Dec 2021 - Feb 2022',
      description: 'Identifying, attracting, interviewing, selecting, hiring, and onboarding employees. In other words, it involves everything from the identification of staffing need to filing it. ',
      color: '#96ceb4'
    },
    {
      title: 'Human Resources Secretary',
      company: 'Human Resources Secretary - Training',
      period: 'Jul 2021 - Sep 2021',
      description: 'Assist the manager in everyday operations, getting employee schedules and assigning tasks to team members, responsible for the organization of all administrative and clerical duties and arranging meetings and appointments, preparing important documents, and writing reports. ',
      color: '#e4a252ff'
    },
    {
      title: 'Administrator Officer',
      company: 'Gulf Engineering Company K.S.C.C',
      period: 'Jan 2021 - Feb 2022',
      description: 'Being actively involved in recruitment by preparing job descriptions, posting ads and managing the hiring process. responsible for administrative tasks and you’ll contribute to making the company a better place to work. Assist the manager in everyday operations, getting employee schedules and assigning tasks to team members, responsible for the organization of all administrative and clerical duties and arranging meetings and appointments, preparing important documents, and writing reports.',
      color: '#310a8dff'
    },
    {
      title: 'Administrative Coordinator',
      company: 'Trust Company',
      period: 'Jun 2019 - Jan 2021',
      description: 'Perform basic human resource tasks, assist the manager in everyday operations, get employee schedules and assign tasks to team members, responsible for the organization of all administrative and clerical duties and arrange meetings and appointments, prepare important documents, and write reports.',
      color: '#1ebbdeff'
    },
    {
      title: 'Teacher',
      company: 'kindergarten Iqra',
      period: 'Jul 2017 - Jan 2018',
      description: 'Kindergarten teacher in English, Arabic, math, and Quran. I was a participant in the language programs at the school. I have been honoured by that. In addition, my university specialization gives me the opportunity to work as a teacher using the English language. Also, by using modern technology and adding it to the traditional way, education becomes better.',
      color: '#f0bc10ff'
    }
  ];

  const certifications = [
    { name: 'Putra Strategy Simulation Programme', issuer: 'University', year: '2024', icon: '🎓' },
    { name: 'Launchpad for Women Cloud Digital Leader EMEA Edition ', issuer: 'University', year: '2024', icon: '📚' },
    { name: 'Introduction to Cybersecurity', issuer: 'Cisco', year: '2022', icon: '💻' },
    { name: 'Graphic Designer', issuer: 'University of Colorado', year: '2020', icon: '🎨' },
    { name: 'Marketing Gerencial', issuer: 'Universidad de Chile', year: '2020', icon: '📊' },
    { name: 'Translation Quality Management', issuer: 'Palex Group Inc', year: '2020', icon: '🎯' },
    { name: 'Preparing to Manage Human Resources', issuer: 'University of Minnesota', year: '2020', icon: '👔' },
    { name: 'Project Management Professional (PMP)', issuer: ' LearnSmart', year: '2020', icon: '🌐' },
    { name: 'Financial Accounting Fundamental', issuer: 'University of Virginia', year: '2020', icon: '🔍' },
    { name: 'International Computer Driver’s License (ICDL)', issuer: 'Specto Training', year: '2020', icon: '⚙️ ' },
    { name: 'Managing the Company of the Future', issuer: 'University of London', year: '2020', icon: '🎨' },
    { name: 'Excel Skills for Business', issuer: 'Macquarie University', year: '2020', icon: '📖' },
    { name: 'First Step Korean', issuer: 'Yonsei University', year: '2020', icon: '📋' },
    { name: 'Initiating and Planning Projects', issuer: ' University of California', year: '2020', icon: '💻' },
    { name: 'Berlitz Proficiency Level 3 Course in English', issuer: 'BERLITZ', year: '2017', icon: '👑' }
  ]

  return (
    <div className={`portfolio-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="floating-bg">
        <div className="bg-shape"></div>
        <div className="bg-shape"></div>
        <div className="bg-shape"></div>
        <div className="bg-shape"></div>
      </div>

      <nav className="navigation">
        <div className="nav-container">
          <div className="logo">Sondos Zayan</div>
          <ul className="nav-links">
            <li>
              <button 
                onClick={() => scrollToSection('home')} 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')} 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('certifications')} 
                className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
              >
                Certifications
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')} 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>


      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <div className="progress-bar"></div>
      </div>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="greeting">Hi, I'm</div>
          <h1 className="name-title">Sondos Zayan</h1>
          <p className="home-description">
           Seeking new opportunities to leveraging my experience in HR, administration, education, translation, project management, and operations and technology to drive business transformation and success. With a proven track record of strategic planning, leadership, and team management, I am passionate about contributing to organizational growth and innovation.
          </p>
           
          {/* CV Download Buttons */}
          <div className="cv-buttons">
            <button className="cv-button download-btn" onClick={handleDownloadCV}>
              <span className="cv-icon">📄</span>
              <span className="cv-text">Download CV</span>
              <span className="cv-arrow">↓</span>
            </button>
            <button className="cv-button view-btn" onClick={handleViewCV}>
              <span className="cv-icon">👁️</span>
              <span className="cv-text">View CV</span>
              <span className="cv-arrow">↗</span>
            </button>
          </div>

          <div className="animated-elements">
            <div className="floating-icon">🎯</div>
            <div className="floating-icon">⚙️</div>
            <div className="floating-icon">👑</div>
            <div className="floating-icon">🚀</div>
          </div>
        </div>
      </section>

      {/* About Section */}
<section id="about" className="about-section">
  <div className="about-container">

    {/* Left column with image + profile stats */}
    <div className="about-image">
      <div className="profile-image"></div>
      <div className="profile-stats">
        <button className="stat-button">
          <span className="stat-number">6+</span>
          <span className="stat-label">Years Experience</span>
        </button>
        <button className="stat-button">
          <span className="stat-number">15+</span>
          <span className="stat-label">Certifications</span>
        </button>
        <button className="stat-button">
          <span className="stat-number">50+</span>
          <span className="stat-label">Projects include</span>
        </button>
      </div>
    </div>

    {/* Right column with text + degree stats */}
    <div className="about-content">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Accomplished professional with over 6 years of versatile experience in HR, administration, education, translation, project management, and operations and technology. Proven ability in performing a wide array of tasks, including recruitment, training, employee record-keeping, operations coordination, and administrative support. Additionally, have experience in teaching and serving as a web content writer/translator, specialising in English to Arabic. Proficient in using systems such as Bambo HR, Mystro HR, Oracle, Sales Force, CRM, Figma, Microsoft Office, Outlook, and social media, I bring a comprehensive set of skills to contribute effectively to diverse organisational needs. Additionally, I have deep expertise in leveraging AI-driven platforms and tools like Salesforce, Trello, and HRIS to improve collaboration and efficiency. My experience also spans teaching, SEO copywriting, and translation, which further underscores my diverse skill set. I am now seeking new opportunities where I can contribute my strategic mindset, leadership abilities, and passion for business transformation to elevate an organization to new heights.
      </p>
      <div className="degree-stats">
        <button className="stat-button degree-button bachelor">
          <span className="stat-icon">🎓</span>
          <span className="stat-number">BBA</span>
          <span className="stat-label">Bachelor's Degree</span>
        </button>
        <button className="stat-button degree-button master">
          <span className="stat-icon">👨‍🎓</span>
          <span className="stat-number">MBA</span>
          <span className="stat-label">Master's Degree</span>
        </button>
        <button className="stat-button degree-button doctorate">
          <span className="stat-icon">🎖️</span>
          <span className="stat-number">CMI</span>
          <span className="stat-label">Diploma</span>
        </button>
      </div>
    </div>

  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <button className="scroll-button scroll-left" onClick={() => scrollSkills('left')}>
            ←
          </button>
          <div className="skills-scroll" ref={skillsRef}>
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-progress">
                  <div
                    className="skill-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div>{skill.level}%</div>
              </div>
            ))}
          </div>
          <button className="scroll-button scroll-right" onClick={() => scrollSkills('right')}>
            →
          </button>
        </div>
      </section>

      {/* Certifications Section */}
<section id="certifications" className="certifications-section section-animate">
  <h2 className="section-title">My Certifications</h2>
  <p className="certifications-subtitle">
    Professional qualifications and continuous learning achievements
  </p>
  <div className="certifications-container">
    <button
      className="scroll-button scroll-left"
      onClick={() => scrollCertifications('left')}
    >
      ←
    </button>
    <div className="certifications-scroll" ref={certificationsRef}>
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="certification-card"
          style={{ ['--delay']: `${index * 0.1}s` }} // ✅ fixed for JSX
        >
          <div className="cert-header">
            <span className="cert-icon">{cert.icon}</span>
            <span className="cert-year">{cert.year}</span>
          </div>
          <h3 className="cert-name">{cert.name}</h3>
          <div className="cert-issuer">{cert.issuer}</div>
          <div className="cert-badge">
            <span className="badge-text">Certified</span>
          </div>
        </div>
      ))}
    </div>
    <button
      className="scroll-button scroll-right"
      onClick={() => scrollCertifications('right')}
    >
      →
    </button>
  </div>
</section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">My Experience</h2>
        <div className="experience-container">
          <button className="scroll-button scroll-left" onClick={() => scrollExperience('left')}>
            ←
          </button>
          <div className="experience-scroll" ref={experienceRef}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card"
                style={{ '--card-color': exp.color }}
              >
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-period">{exp.period}</div>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
          <button className="scroll-button scroll-right" onClick={() => scrollExperience('right')}>
            →
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section section-animate">
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Ready to transform your business? Let's connect and discuss how I can contribute to your organization's success.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-label">Phone</div>
              <div className="contact-value">+965 98559358</div>
            </div>
            <a 
              href="mailto:sarah.johnson@email.com?subject=Business Inquiry&body=Hello Sarah, I would like to discuss potential opportunities with you."
              className="contact-item contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">✉️</span>
              <div className="contact-label">Email</div>
              <div className="contact-value">sonsonmonem @gmail.com</div>
            </a>
            <a 
              href="https://www.linkedin.com/in/sondos-zayan-a1409518b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="contact-item contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">💼</span>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">linkedin.com/in/sarahjohnson</div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}