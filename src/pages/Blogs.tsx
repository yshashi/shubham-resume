import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import { MediumArticles } from "medium-article-api";

interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: unknown;
  categories: string[];
}

interface MediumResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumArticle[];
}

const Blogs = () => {
  const [mediumData, setMediumData] = useState<MediumResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        setLoading(true);
        const mediumArticles = MediumArticles();
        const data = await mediumArticles.getData("shubham-agnihotri");
        setMediumData(data as MediumResponse);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Medium articles:", err);
        setError("Failed to load blog posts. Please try again later.");
        setLoading(false);
      }
    };
    
    fetchMediumArticles();
  }, []);
  
  const extractFirstImageUrl = (htmlContent: string): string => {
    const imgRegex = /<img.*?src=["'](.*?)["'].*?>/i;
    const match = htmlContent.match(imgRegex);
    return match ? match[1] : "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=entropy&auto=format";
  };
  
  const extractTextFromHtml = (html: string): string => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return text.substring(0, 200) + '...';
  };
  
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const text = extractTextFromHtml(content);
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };
  // Fallback blog posts in case API fails
  const fallbackBlogPosts = [
    {
      title: "The Future of AutoML: Democratizing Machine Learning",
      excerpt:
        "Exploring how automated machine learning is making AI accessible to everyone, regardless of technical background. A deep dive into the tools and techniques shaping the future.",
      date: "March 10, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/automl-future",
      tags: ["AutoML", "Machine Learning", "AI"],
    },
    {
      title: "Building Scalable MLOps Pipelines in Production",
      excerpt:
        "A comprehensive guide to implementing robust MLOps practices that scale. From model versioning to automated deployment and monitoring strategies.",
      date: "February 25, 2024",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/mlops-pipelines",
      tags: ["MLOps", "DevOps", "Kubernetes"],
    },
    {
      title: "Ethical AI: Building Responsible Machine Learning Systems",
      excerpt:
        "Why ethics matter in AI development and how to build systems that are fair, transparent, and accountable. Real-world examples and practical guidelines.",
      date: "February 15, 2024",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/ethical-ai",
      tags: ["Ethics", "AI", "Responsibility"],
    },
    {
      title: "Computer Vision in Banking: Real-world Applications",
      excerpt:
        "How computer vision is transforming the banking industry, from document processing to fraud detection. Case studies and implementation insights.",
      date: "January 30, 2024",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/cv-banking",
      tags: ["Computer Vision", "Banking", "FinTech"],
    },
    {
      title: "From Data Scientist to Tech Speaker: My Journey",
      excerpt:
        "Personal insights on transitioning from pure technical work to public speaking and content creation. Tips for aspiring tech speakers.",
      date: "January 15, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/speaker-journey",
      tags: ["Career", "Speaking", "Personal Growth"],
    },
    {
      title: "Mastering TensorFlow Extended (TFX) for Production ML",
      excerpt:
        "A detailed walkthrough of TFX components and how to build end-to-end ML pipelines that are production-ready and scalable.",
      date: "December 20, 2023",
      readTime: "15 min read",
      image:
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubhamagnihotri/tfx-production",
      tags: ["TensorFlow", "TFX", "Production ML"],
    },
  ];


  // Use medium data if available, otherwise use fallback data
  const blogPosts = mediumData?.items
    ? mediumData.items.map(item => ({
        title: item.title,
        excerpt: extractTextFromHtml(item.description),
        date: formatDate(item.pubDate),
        readTime: calculateReadTime(item.content),
        image: extractFirstImageUrl(item.description),
        url: item.link,
        tags: item.categories && item.categories.length > 0 ? item.categories : ["Blog"],
      }))
    : fallbackBlogPosts;

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
          headline: "Shubham Agnihotri's Data Science & Machine Learning Blog",
          description:
            "Insights, tutorials, and thoughts on data science, machine learning, and AI from Shubham Agnihotri.",
          author: {
            "@type": "Person",
            name: "Shubham Agnihotri",
            jobTitle: "Senior Data Scientist",
          },
          blogPost: blogPosts.map((blog) => ({
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.excerpt,
            datePublished: blog.date,
            image: blog.image,
            author: {
              "@type": "Person",
              name: "Shubham Agnihotri",
            },
            keywords: Array.isArray(blog.tags) ? blog.tags.join(", ") : "",
          })),
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
              Thoughts, insights, and technical deep-dives on data science, AI,
              and technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 mb-12 rounded-lg border bg-primary/5 border-primary/20"
          >
            <div className="flex flex-col gap-6 items-center md:flex-row">
              <div className="flex-shrink-0">
                {mediumData?.feed?.image ? (
                  <img 
                    src={mediumData.feed.image} 
                    alt="Shubham Agnihotri" 
                    className="object-cover w-24 h-24 rounded-full border-2 border-primary/20"
                  />
                ) : (
                  <div className="flex justify-center items-center w-24 h-24 rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">SA</span>
                  </div>
                )}
              </div>
              <div className="flex-grow text-center md:text-left">
                <h2 className="mb-2 text-xl font-semibold text-foreground">
                  {mediumData?.feed?.title || "Stories by Shubham Agnihotri on Medium"}
                </h2>
                <p className="mb-4 text-muted-foreground">
                  {mediumData?.feed?.description || "Insights on data science, AI, and technology from a senior data scientist"}
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button asChild variant="default" size="sm">
                    <a
                      href={mediumData?.feed?.link || "https://medium.com/@shubham-agnihotri"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                    >
                      <ExternalLink size={16} />
                      Visit Profile
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={`https://medium.com/m/signin?actionUrl=${encodeURIComponent("https://medium.com/@shubham-agnihotri/follow")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Follow
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {loading ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col justify-center items-center py-20"
            >
              <Loader2 className="mb-4 w-12 h-12 animate-spin text-primary" />
              <p className="text-muted-foreground">Loading blog posts...</p>
            </motion.div>
          ) : error ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 mb-16 text-center rounded-lg border border-destructive/20 bg-destructive/10"
            >
              <p className="font-medium text-destructive">{error}</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </motion.div>
          ) : blogPosts.length > 0 ? (
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
                    <div className="mb-2 font-medium text-primary">
                      Featured Post
                    </div>
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
                      <a
                        href={blogPosts[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read on Medium
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}

          {!loading && !error && blogPosts.length > 1 && (
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
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=entropy&auto=format";
                      }}
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
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read on Medium
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
