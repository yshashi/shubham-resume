import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "IDFC First Bank",
      role: "Senior Data Scientist",
      period: "2023 - Present",
      location: "Mumbai, India",
      logo: "🏦",
      description: "Leading AI/ML initiatives for banking operations and customer analytics",
      achievements: [
        "Reduced model training time by 3x using optimized ML pipelines",
        "Improved call analysis coverage to 80% with NLP models",
        "Implemented real-time fraud detection system",
        "Led team of 5 data scientists on customer segmentation project"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "MLflow", "Kubernetes"]
    },
    {
      company: "Arcadis",
      role: "Data Scientist",
      period: "2021 - 2023",
      location: "Remote",
      logo: "🏗️",
      description: "Developed AutoML solutions for infrastructure and environmental projects",
      achievements: [
        "Built AutoML Pipeline reducing model development time by 60%",
        "Implemented computer vision models for infrastructure monitoring",
        "Created predictive maintenance system for smart cities",
        "Mentored 3 junior data scientists"
      ],
      technologies: ["Python", "Scikit-learn", "OpenCV", "GCP", "Airflow", "PostgreSQL"]
    },
    {
      company: "S.AgriUdaan",
      role: "ML Engineer",
      period: "2020 - 2021",
      location: "Ahmedabad, India",
      logo: "🌱",
      description: "Developed agricultural prediction models and analytics dashboard",
      achievements: [
        "Built crop yield prediction models with 85% accuracy",
        "Deployed real-time weather analytics dashboard",
        "Collaborated with 100+ farmers for data collection",
        "Reduced agricultural losses by 25% through predictive insights"
      ],
      technologies: ["Python", "React", "MongoDB", "Flask", "Plotly", "IoT Sensors"]
    }
  ];

  return (
    <>
      <SEO 
        title="Experience | Shubham Agnihotri's Professional Journey"
        description="Explore Shubham Agnihotri's professional experience as a Senior Data Scientist at IDFC First Bank and previous roles in data science and ML engineering."
        keywords="data science experience, ML engineer career, IDFC First Bank, professional background, data scientist roles, Shubham Agnihotri career"
      />
    <div className="px-4 py-20 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-foreground">
            Experience
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            My professional journey in data science and machine learning across diverse industries
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <span className="text-2xl">{exp.logo}</span>
                    <div>
                      <h3 className="font-semibold">{exp.company}</h3>
                      <p className={`text-sm ${
                        activeTab === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="p-8 rounded-lg border bg-card border-border">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <span className="text-3xl">{experiences[activeTab].logo}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {experiences[activeTab].role}
                      </h2>
                      <h3 className="text-xl text-primary">
                        {experiences[activeTab].company}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex gap-2 items-center">
                      <Calendar size={16} />
                      {experiences[activeTab].period}
                    </div>
                    <div className="flex gap-2 items-center">
                      <MapPin size={16} />
                      {experiences[activeTab].location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-6 text-lg text-muted-foreground">
                {experiences[activeTab].description}
              </p>

              <div className="mb-8">
                <h4 className="flex gap-2 items-center mb-4 text-lg font-semibold text-foreground">
                  <TrendingUp size={20} />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experiences[activeTab].achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-3 items-start text-muted-foreground"
                    >
                      <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-full bg-primary"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold text-foreground">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Experience;
