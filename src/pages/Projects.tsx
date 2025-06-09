import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const Projects = () => {
  const projects = [
    {
      title: "PromoGenie",
      description: "AI-powered promotional content generator using advanced NLP models to create engaging marketing copy automatically.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      technologies: ["Python", "OpenAI GPT", "React", "FastAPI", "Docker"],
      github: "https://github.com/shubhamagnihotri/promogenie",
      demo: "https://promogenie.demo.com",
      category: "AI/ML"
    },
    {
      title: "Bud-E",
      description: "Intelligent chatbot for customer service automation with sentiment analysis and real-time response generation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
      technologies: ["Python", "TensorFlow", "BERT", "Flask", "MongoDB"],
      github: "https://github.com/shubhamagnihotri/bud-e",
      demo: "https://bud-e.demo.com",
      category: "AI/ML"
    },
    {
      title: "AutoML Pipeline",
      description: "End-to-end automated machine learning pipeline with model selection, hyperparameter tuning, and deployment automation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=entropy&auto=format",
      technologies: ["Python", "Scikit-learn", "MLflow", "Kubernetes", "AWS"],
      github: "https://github.com/shubhamagnihotri/automl-pipeline",
      demo: "https://automl.demo.com",
      category: "MLOps"
    },
    {
      title: "Self-Driving Car",
      description: "Computer vision-based autonomous vehicle navigation system using deep learning and sensor fusion techniques.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      technologies: ["Python", "OpenCV", "TensorFlow", "ROS", "C++"],
      github: "https://github.com/shubhamagnihotri/self-driving-car",
      demo: "https://selfdriving.demo.com",
      category: "Computer Vision"
    },
    {
      title: "Banking Analytics Dashboard",
      description: "Real-time analytics dashboard for banking operations with fraud detection and customer insights visualization.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
      technologies: ["React", "D3.js", "Python", "PostgreSQL", "Redis"],
      github: "https://github.com/shubhamagnihotri/banking-dashboard",
      demo: "https://banking-analytics.demo.com",
      category: "Analytics"
    },
    {
      title: "Agricultural Prediction System",
      description: "Machine learning system for crop yield prediction and agricultural risk assessment using weather and soil data.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
      technologies: ["Python", "Random Forest", "React", "IoT", "MongoDB"],
      github: "https://github.com/shubhamagnihotri/agri-prediction",
      demo: "https://agri-predict.demo.com",
      category: "AI/ML"
    }
  ];

  const categories = ["All", "AI/ML", "MLOps", "Computer Vision", "Analytics"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Projects | Shubham Agnihotri's Portfolio"
        description="Explore Shubham Agnihotri's data science and machine learning projects, showcasing expertise in AI, NLP, and computer vision."
        keywords="data science projects, machine learning portfolio, AI projects, NLP, computer vision, ML engineer projects"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "headline": "Shubham Agnihotri's Data Science & Machine Learning Projects",
          "description": "A collection of innovative data science and machine learning projects by Shubham Agnihotri.",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareSourceCode",
                "name": project.title,
                "description": project.description,
                "codeRepository": project.github,
                "programmingLanguage": project.technologies.join(", "),
                "url": project.demo
              }
            }))
          }
        }}
      />
      <div className="px-4 py-20 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-foreground">
            Projects
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            A collection of my work spanning AI/ML, data science, and software development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg border transition-all duration-300 group bg-card border-border hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="flex absolute inset-0 gap-4 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/60 group-hover:opacity-100">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {project.category}
                  </span>
                </div>

                <p className="mb-4 text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Projects;
