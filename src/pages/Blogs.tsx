import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of AutoML: Democratizing Machine Learning",
      excerpt: "Exploring how automated machine learning is making AI accessible to everyone, regardless of technical background. A deep dive into the tools and techniques shaping the future.",
      date: "March 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/automl-future",
      tags: ["AutoML", "Machine Learning", "AI"]
    },
    {
      title: "Building Scalable MLOps Pipelines in Production",
      excerpt: "A comprehensive guide to implementing robust MLOps practices that scale. From model versioning to automated deployment and monitoring strategies.",
      date: "February 25, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/mlops-pipelines",
      tags: ["MLOps", "DevOps", "Kubernetes"]
    },
    {
      title: "Ethical AI: Building Responsible Machine Learning Systems",
      excerpt: "Why ethics matter in AI development and how to build systems that are fair, transparent, and accountable. Real-world examples and practical guidelines.",
      date: "February 15, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/ethical-ai",
      tags: ["Ethics", "AI", "Responsibility"]
    },
    {
      title: "Computer Vision in Banking: Real-world Applications",
      excerpt: "How computer vision is transforming the banking industry, from document processing to fraud detection. Case studies and implementation insights.",
      date: "January 30, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/cv-banking",
      tags: ["Computer Vision", "Banking", "FinTech"]
    },
    {
      title: "From Data Scientist to Tech Speaker: My Journey",
      excerpt: "Personal insights on transitioning from pure technical work to public speaking and content creation. Tips for aspiring tech speakers.",
      date: "January 15, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/speaker-journey",
      tags: ["Career", "Speaking", "Personal Growth"]
    },
    {
      title: "Mastering TensorFlow Extended (TFX) for Production ML",
      excerpt: "A detailed walkthrough of TFX components and how to build end-to-end ML pipelines that are production-ready and scalable.",
      date: "December 20, 2023",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/tfx-production",
      tags: ["TensorFlow", "TFX", "Production ML"]
    }
  ];

  const categories = ["All", "Machine Learning", "MLOps", "Career", "AI Ethics"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  return (
    <>
      <SEO 
        title="Blogs | Shubham Agnihotri - Data Science & AI Insights"
        description="Read Shubham Agnihotri's blogs on data science, machine learning, AI innovations, and technology trends. Gain insights from a senior data scientist."
        keywords="data science blogs, machine learning articles, AI insights, ML engineer writing, technology trends, Shubham Agnihotri blogs"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "headline": "Shubham Agnihotri's Data Science & Machine Learning Blog",
          "description": "Insights, tutorials, and thoughts on data science, machine learning, and AI from Shubham Agnihotri.",
          "author": {
            "@type": "Person",
            "name": "Shubham Agnihotri",
            "jobTitle": "Senior Data Scientist"
          },
          "blogPost": blogPosts.map(blog => ({
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt,
            "datePublished": blog.date,
            "image": blog.image,
            "author": {
              "@type": "Person",
              "name": "Shubham Agnihotri"
            },
            "keywords": blog.tags.join(", ")
          }))
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
            Blogs
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Thoughts, insights, and technical deep-dives on data science, AI, and technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 mb-12 text-center rounded-lg border bg-primary/5 border-primary/20"
        >
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Follow me on Medium
          </h2>
          <p className="mb-4 text-muted-foreground">
            Get the latest articles and insights directly from my Medium publication
          </p>
          <Button asChild>
            <a href="https://medium.com/@shubhamagnihotri" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Visit Medium Profile
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="overflow-hidden rounded-lg border transition-shadow duration-300 bg-card border-border hover:shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="object-cover w-full h-64 md:h-full"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="mb-2 font-medium text-primary">Featured Post</div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl text-foreground">
                  {blogPosts[0].title}
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex gap-4 items-center mb-6 text-sm text-muted-foreground">
                  <div className="flex gap-1 items-center">
                    <Calendar size={14} />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex gap-1 items-center">
                    <Clock size={14} />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button asChild>
                  <a href={blogPosts[0].url} target="_blank" rel="noopener noreferrer">
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="overflow-hidden rounded-lg border transition-all duration-300 group bg-card border-border hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold transition-colors duration-200 text-foreground line-clamp-2 group-hover:text-primary">
                  {post.title}
                </h3>

                <p className="mb-4 text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex gap-4 items-center mb-4 text-sm text-muted-foreground">
                  <div className="flex gap-1 items-center">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex gap-1 items-center">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    Read More
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-12 mt-16 text-center rounded-lg border bg-secondary/30 border-border"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Stay Updated
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Subscribe to get notified about new articles on data science, AI, and technology insights.
          </p>
          <div className="flex gap-4 mx-auto max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Blogs;
