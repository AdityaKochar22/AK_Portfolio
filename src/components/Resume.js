import React from 'react';

const Resume = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Uniphil International",
      location: "Noida, Uttar Pradesh",
      period: "July 2024 - Present",
      description: [
        "Developed data and reporting infrastructure using PowerBi and SQL to provide real-time insights into product and marketing funnels.",
        "Designed and implemented A/B experiments for products to improve the conversion rate by 18 basis points and reduce churn by 13 basis points.",
        "Implemented long-term pricing experiment that improved customer value by 27%.",
        "Created interactive dashboards in Power BI for over 10 products, utilizing DAX and Power Query to deliver clear, data-driven insights.",
      ]
    },
    {
      title: "Data Associate Intern",
      company: "Epay System",
      location: "Noida, Uttar Pradesh",
      period: "Spet 2023 - Dec 2023",
      description: [
        "Completed a data analytics internship focused on data cleaning, mining, and big data processing using Databricks. Designed and optimized data pipelines, performing ETL operations for efficient data management.",
        "Created visualizations and dashboards using Python, SQL, and Tableau to generate actionable insights. Developed and maintained data warehousing solutions, integrating data from various sources.",
        "Collaborated with cross-functional teams at EPAY Systems to support data-driven business decisions."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Bennett University",
      location: "Gr.Noida, Uttar Pradesh",
      period: "July 2022 - Dec 2022",
      description: [
        "Designed website form using Flutter to document data about Professor's Lecture Schedule for College Classes and has also been Implemented in College's Website.",
        "Stored lecture details in Firebase Cloud Storage and displayed them in listView form with alerts.",
        "Contributed to a project generating, maintaining, and deploying academic lectures on website and mobile applications."
      ]
    }
  ];

  return (
    <section id="resume" className="resume section-padding">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="row">
          {/* Summary and Education Column */}
          <div className="col-lg-6">
            <h3 className="section-subtitle">Summary</h3>
            <div className="resume-card">
              <div className="card-content">
                <h4 className="card-title">Aditya Kochar</h4>
                <p className="card-text">
                  Innovative and detail-oriented Software Developer & AI/ML Engineer with expertise in 
                  developing data-driven applications and machine learning solutions. Proven track record 
                  in implementing AI algorithms and creating robust software solutions.
                </p>
                <ul className="card-list">
                  <li>Noida, India</li>
                  <li>AdityaKochar23@gmail.com</li>
                </ul>
              </div>
            </div>

            <h3 className="section-subtitle">Education</h3>
            <div className="resume-card">
              <div className="card-content">
                <h4 className="card-title">B tech in Computer Science Engineering</h4>
                <div className="card-company">Bennett University</div>
                <div className="card-period">2020 - 2024</div>
                <p className="card-text">Computer Science & Engineering</p>
                <p className="card-text">CGPA: 9.26</p>
              </div>
            </div>
            <div className="resume-card">
              <div className="card-content">
                <h4 className="card-title">Higher Secondary (XII)</h4>
                <div className="card-company">Delhi Public School, Bikaner</div>
                <div className="card-period">2019 - 2020</div>
                <p className="card-text">Percentage: 95%</p>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div className="col-lg-6">
            <h3 className="section-subtitle">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="resume-card">
                  <div className="card-content">
                    <h4 className="card-title">{exp.title}</h4>
                    <div className="card-company">{exp.company}</div>
                    <div className="card-period">{exp.location} | {exp.period}</div>
                    <ul className="card-list">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
