import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Youtube } from 'lucide-react';
import TypewriterEffect from '../components/TypewriterEffect';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const Home = () => {
  const roles = [
    "Senior Data Scientist",
    "Public Speaker", 
    "Content Creator",
    "ML Engineer"
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/shubhamagnihotri", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/shubhamagnihotri", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com/@shubhamagnihotri", label: "YouTube" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="flex overflow-hidden relative justify-center items-center min-h-screen">
      <SEO 
        title="Shubham Agnihotri | Senior Data Scientist & ML Engineer"
        description="Shubham Agnihotri is a Senior Data Scientist at IDFC First Bank, driving innovation through data science, machine learning, and AI."
        keywords="data science, machine learning, AI, ML engineer, public speaker, content creator, IDFC First Bank"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shubham Agnihotri",
          "jobTitle": "Senior Data Scientist",
          "description": "Driving innovation through data science at IDFC First Bank. Passionate about sharing knowledge and building the future of AI.",
          "image": "https://shubhamagnihotri.dev/profile-image.jpg",
          "sameAs": [
            "https://linkedin.com/in/shubhamagnihotri",
            "https://github.com/shubhamagnihotri",
            "https://youtube.com/@shubhamagnihotri"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "IDFC First Bank"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Your University"
          },
          "knowsAbout": ["Data Science", "Machine Learning", "Artificial Intelligence", "Public Speaking", "Content Creation"]
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse bg-primary/20"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full blur-3xl delay-1000 animate-pulse bg-secondary/20"></div>
      </div>

      <motion.div
        className="relative z-10 px-4 mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="p-1 mx-auto mb-8 w-96 h-96 bg-gradient-to-br rounded-full from-primary to-secondary">
            <div className="flex justify-center items-center w-full h-full rounded-full bg-background">
              <div className="flex justify-center items-center w-[22rem] h-[22rem] text-6xl font-bold bg-gradient-to-br rounded-full from-primary/20 to-secondary/20 text-primary">
                <img className='object-cover w-full h-full rounded-full' src="https://raw.githubusercontent.com/KillerStrike17/KillerStrike17.github.io/refs/heads/master/assets/Shubham%20Agnihotri.webp" alt="Shubham Agnihotri" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl font-bold md:text-7xl text-foreground"
        >
          Shubham Agnihotri
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-8 h-12 text-2xl md:text-3xl text-muted-foreground"
        >
          <TypewriterEffect words={roles} />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-muted-foreground"
        >
          Driving innovation through data science at IDFC First Bank. 
          Passionate about sharing knowledge and building the future of AI.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 justify-center mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center px-6 py-3 rounded-full transition-colors duration-200 bg-primary/10 hover:bg-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon size={20} />
              <span>{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 justify-center sm:flex-row"
        >
          <Button size="lg" className="px-8 py-6 text-lg">
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            <Link to="/projects">View My Work</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
