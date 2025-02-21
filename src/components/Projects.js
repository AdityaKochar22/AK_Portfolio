import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Projects = () => {
  const categories = ["All", "Software Development", "Data Analysis", "AI/ML"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Grasper - A Productivity App",
      category: "Software Development",
      description: "Built a productivity suite application which includes features like Pomodoro Clock, Flash Cards and To-Do Lists.",
      techStack: ["Flutter", "Firebase", "Firestore", "Riverpod"],
      image: "/assets/images/productivity.jpg",
      link: "https://github.com/AdityaKochar22/Grasper-App"
    },
    {
      title: "LectureMate App",
      category: "Software Development",
      description: "A Flutter & Django-powered system enabling teachers to create, display, and manage lectures efficiently.",
      techStack: ["Flutter", "Django", "Html/CSS", "Riverpod"],
      image: "/assets/images/lectmate.jpg",
      link: "https://github.com/AdityaKochar22/TeachingLecture-Creater-Displayer"
    },
    {
      title: "Udemy Course Analysis",
      category: "Data Analysis",
      description: "The Project uncovers key insights of udemy courses dataset leveraging data visualization and analytics.",
      techStack: ["Python", "Matplotlib", "Streamlit", "Altair"],
      image: "/assets/images/udemy.jpg",
      link: "https://github.com/AdityaKochar22/Udemy-Course-Analysis"
    },
    {
      title: "Sleep Disorder Prediction",
      category: "AI/ML",
      description: "The Project utilizes machine learning to analyze sleep patterns and detect potential disorders for early diagnosis and intervention.",
      techStack: ["Python", "Scikit-learn", "Matplotlib", "Models"],
      image: "/assets/images/sleep.jpg",
      link: "https://github.com/AdityaKochar22/Sleep_Disorder_Pred"
    },
    {
      title: "Fifa WC 2022 Analysis",
      category: "Data Analysis",
      description: "This Power BI dashboard analyzes FIFA World Cup 2022 team performance, match stats, and key tournament trends through insightful visualizations.",
      techStack: ["Python", "Power BI", "DAX", "Matplotlib"],
      image: "/assets/images/fifa.jpg",
      link: "https://github.com/AdityaKochar22/FifaWC_22_Analysis"
    },
    {
      title: "HealthCare Analysis",
      category: "Data Analysis",
      description: "This project analyzes patient records to optimize hospital resource utilization, patient care, and financial planning through visual insights.",
      techStack: ["Python", "Power BI", "Scikit-learn", "DAX"],
      image: "/assets/images/hospital.jpg",
      link: "https://github.com/AdityaKochar22/Healthcare_Analysis"
    },
    {
      title: "Parkinson Detection",
      category: "AI/ML",
      description: "This project uses machine learning to detect Parkinson's Disease, featuring data preprocessing, model building, and a Streamlit-based prediction app.",
      techStack: ["Python", "Libroso", "Scikit-learn", "Streamlit"],
      image: "/assets/images/parkinson.jpg",
      link: "https://github.com/AdityaKochar22/Parkinson_Detection"
    },
    {
      title: "Best Selling Books Analysis",
      category: "Data Analysis",
      description: "This dashboard analyzes best-selling books, providing insights into sales performance, author influence, genre popularity, and market trends.",
      techStack: ["Python", "Power BI", "DAX", "Matplotlib"],
      image: "/assets/images/books.jpg",
      link: "https://github.com/AdityaKochar22/BestSellingBooks_Analysis"
    }
  ];

  const filteredProjects = projects.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Parallax
      blur={0}
      strength={200}
      className="parallax-wrapper"
    >
      <section id="projects" className="projects section-padding">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>

          <motion.div 
            className="category-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="projects-grid">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1 
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <div className="project-content">
                      <motion.div 
                        className="project-image"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          loading="lazy"
                        />
                      </motion.div>
                      <div className="project-info">
                        <motion.h3 
                          className="project-title"
                          whileHover={{ color: '#7000FF' }}
                        >
                          {project.title}
                        </motion.h3>
                        <div className="tech-stack">
                          {project.techStack?.map((tech, index) => (
                            <motion.span
                              key={index}
                              className="tech-tag"
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: 'rgba(112, 0, 255, 0.2)'
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                        <p className="project-description">{project.description}</p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Projects;
