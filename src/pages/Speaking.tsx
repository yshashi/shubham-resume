import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';

const Speaking = () => {
  const events = [
    {
      title: "TechShow London 2024",
      event: "International Tech Conference",
      date: "March 15, 2024",
      location: "London, UK",
      audience: "500+ attendees",
      topic: "The Future of AI in Banking",
      description: "Keynote presentation on implementing AI solutions in financial services and the challenges of ML model deployment at scale.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "https://youtube.com/watch?v=example1",
      type: "Keynote"
    },
    {
      title: "TensorFlow Everywhere India",
      event: "Google Developer Conference",
      date: "January 20, 2024",
      location: "Mumbai, India",
      audience: "300+ developers",
      topic: "Scaling ML with TensorFlow Extended",
      description: "Technical workshop on building production-ready ML pipelines using TensorFlow Extended (TFX) and best practices for MLOps.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "https://youtube.com/watch?v=example2",
      type: "Workshop"
    },
    {
      title: "DevFest Ahmedabad 2023",
      event: "Google Developer Groups",
      date: "November 12, 2023",
      location: "Ahmedabad, India",
      audience: "400+ developers",
      topic: "Building Ethical AI Systems",
      description: "Panel discussion on responsible AI development, bias mitigation, and the importance of ethical considerations in machine learning.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "https://youtube.com/watch?v=example3",
      type: "Panel"
    },
    {
      title: "AWS Community Day",
      event: "AWS User Group",
      date: "September 8, 2023",
      location: "Bangalore, India",
      audience: "250+ cloud enthusiasts",
      topic: "Serverless ML on AWS",
      description: "Deep dive into building serverless machine learning applications using AWS Lambda, SageMaker, and other AWS services.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "https://youtube.com/watch?v=example4",
      type: "Technical Talk"
    },
    {
      title: "PyData Mumbai Meetup",
      event: "Python Data Science Community",
      date: "July 15, 2023",
      location: "Mumbai, India",
      audience: "150+ data scientists",
      topic: "AutoML: Democratizing Machine Learning",
      description: "Presentation on automated machine learning tools and techniques to make ML accessible to non-experts.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "https://youtube.com/watch?v=example5",
      type: "Meetup Talk"
    },
    {
      title: "Data Science Conference",
      event: "National Analytics Summit",
      date: "May 22, 2023",
      location: "Delhi, India",
      audience: "600+ professionals",
      topic: "MLOps: From Model to Production",
      description: "Comprehensive overview of MLOps practices, including model versioning, monitoring, and continuous deployment strategies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "https://youtube.com/watch?v=example6",
      type: "Conference Talk"
    }
  ];

  const stats = [
    { number: "20+", label: "Speaking Events" },
    { number: "5000+", label: "Audience Reached" },
    { number: "15+", label: "Countries" },
    { number: "10+", label: "Tech Topics" }
  ];

  return (
    <>
      <SEO 
        title="Speaking | Shubham Agnihotri - Tech Talks & Presentations"
        description="Discover Shubham Agnihotri's speaking engagements, tech talks, and presentations on data science, machine learning, and AI innovations."
        keywords="tech talks, data science presentations, AI conferences, machine learning speaker, Shubham Agnihotri speaking"
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
            Speaking
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Sharing knowledge and insights at conferences, meetups, and workshops worldwide
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-8 mb-16 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold md:text-4xl text-primary">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg border transition-all duration-300 group bg-card border-border hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary text-primary-foreground">
                    {event.type}
                  </span>
                </div>
                <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/60 group-hover:opacity-100">
                  <Button variant="secondary" asChild>
                    <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                      <Video size={16} className="mr-2" />
                      Watch Video
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mb-3 font-medium text-primary">
                  {event.event}
                </p>

                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex gap-2 items-center">
                    <Calendar size={14} />
                    {event.date}
                  </div>
                  <div className="flex gap-2 items-center">
                    <MapPin size={14} />
                    {event.location}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Users size={14} />
                    {event.audience}
                  </div>
                </div>

                <h4 className="mb-2 font-semibold text-foreground">
                  "{event.topic}"
                </h4>

                <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                  {event.description}
                </p>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Video size={16} className="mr-2" />
                    Watch Presentation
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-12 mt-16 text-center rounded-lg border bg-primary/5 border-primary/20"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Interested in having me speak at your event?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            I'm always excited to share knowledge about data science, AI/ML, and technology. 
            Let's connect to discuss speaking opportunities!
          </p>
          <Button size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Speaking;
