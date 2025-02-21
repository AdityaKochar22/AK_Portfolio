import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div>
              <img 
                src="/assets/about.jpg" 
                alt="Aditya Kochar" 
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              
              <p>
                Ever since I wrote my first lines of code, I was fascinated by how software can solve real-world problems. 
                My journey into development started with curiosity, experimenting with small projects, and gradually expanding 
                into AI/ML, full-stack development, and data analytics.
              </p>
              <p>
                With expertise in Python, Django, Flutter, and machine learning, I enjoy building intelligent systems that 
                make data-driven decisions. I have experience working with predictive analytics, Power BI dashboards, cloud 
                computing, and database management using SQL. My passion extends to AI-powered applications, automation, and 
                exploring cutting-edge technologies.
              </p>
              <p>
                Beyond development, I'm an avid tech enthusiast who loves exploring new frameworks, contributing to open-source 
                projects, and solving challenges in data science. In my free time, I enjoy reading Books, Listening Music, 
                Playing football, and experimenting with Real-Time coding projects.
              </p>
              <p>
                I'm always eager to collaborate, learn, and create impactful solutions that blend technology with innovation.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
