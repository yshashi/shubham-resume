import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Video, ArrowLeft, ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/ui/carousel.css';

interface EventImage {
  url: string;
  alt: string;
}

interface Event {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  audience: string;
  topic: string;
  description: string;
  image: string;
  videoUrl: string;
  type: string;
  images: EventImage[];
  fullDescription: string;
  highlights: string[];
}

// Dummy data with extended fields for details page
const eventsData: Event[] = [
  {
    id: "techshow-london-2024",
    title: "TechShow London 2024",
    event: "International Tech Conference",
    date: "March 15, 2024",
    location: "London, UK",
    audience: "500+ attendees",
    topic: "The Future of AI in Banking",
    description: "Keynote presentation on implementing AI solutions in financial services and the challenges of ML model deployment at scale.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://youtube.com/watch?v=example1",
    type: "Keynote",
    images: [
      { url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Main stage presentation" },
      { url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience engagement" },
      { url: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Panel discussion" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Networking session" }
    ],
    fullDescription: "In this keynote presentation at TechShow London 2024, I explored the transformative potential of artificial intelligence in the banking sector. The talk covered practical implementation strategies for AI solutions in financial services, addressing key challenges in deploying machine learning models at scale. I discussed real-world case studies of successful AI integration in banking operations, risk assessment, and customer service. The presentation also addressed important considerations around data privacy, regulatory compliance, and ethical AI development in the financial industry. The session concluded with a forward-looking perspective on how AI will continue to reshape banking in the next decade, with practical takeaways for financial institutions at different stages of their AI journey.",
    highlights: [
      "Presented to an audience of 500+ banking and fintech professionals",
      "Demonstrated practical AI implementation strategies for financial services",
      "Addressed regulatory and compliance considerations for AI in banking",
      "Showcased case studies of successful ML model deployment at scale",
      "Facilitated Q&A session with industry leaders"
    ]
  },
  {
    id: "tensorflow-everywhere-india",
    title: "TensorFlow Everywhere India",
    event: "Google Developer Conference",
    date: "January 20, 2024",
    location: "Mumbai, India",
    audience: "300+ developers",
    topic: "Scaling ML with TensorFlow Extended",
    description: "Technical workshop on building production-ready ML pipelines using TensorFlow Extended (TFX) and best practices for MLOps.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://youtube.com/watch?v=example2",
    type: "Workshop",
    images: [
      { url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Workshop session" },
      { url: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Live coding demonstration" },
      { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Hands-on practice" },
      { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Q&A session" }
    ],
    fullDescription: "At TensorFlow Everywhere India, I led an intensive technical workshop focused on building production-ready machine learning pipelines using TensorFlow Extended (TFX). The workshop was designed for intermediate to advanced developers looking to move beyond model training to full MLOps implementation. Participants learned how to build robust, scalable, and maintainable ML pipelines that can handle real-world data and deployment challenges. The session covered data validation, feature engineering, model training, evaluation, and serving components of TFX. We also explored best practices for continuous integration, continuous delivery, and monitoring of ML systems. The workshop included hands-on coding exercises where participants implemented their own TFX pipelines and deployed them to production-like environments.",
    highlights: [
      "Conducted a 3-hour hands-on workshop for 300+ developers",
      "Demonstrated end-to-end ML pipeline development with TensorFlow Extended",
      "Covered advanced MLOps practices including model monitoring and continuous delivery",
      "Provided code templates and resources for participants to use in their own projects",
      "Received 4.8/5 rating from workshop attendees"
    ]
  },
  {
    id: "devfest-ahmedabad-2023",
    title: "DevFest Ahmedabad 2023",
    event: "Google Developer Groups",
    date: "November 12, 2023",
    location: "Ahmedabad, India",
    audience: "400+ developers",
    topic: "Building Ethical AI Systems",
    description: "Panel discussion on responsible AI development, bias mitigation, and the importance of ethical considerations in machine learning.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://youtube.com/watch?v=example3",
    type: "Panel",
    images: [
      { url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Panel discussion" },
      { url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience Q&A" },
      { url: "https://images.unsplash.com/photo-1560523159-6cd9d6165076?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Speaker introduction" },
      { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Post-panel networking" }
    ],
    fullDescription: "At DevFest Ahmedabad 2023, I participated in a thought-provoking panel discussion on the critical topic of ethical AI development. Alongside experts from academia and industry, we explored the multifaceted challenges of building AI systems that are not only technically sound but also fair, transparent, and responsible. The panel addressed practical approaches to bias mitigation in machine learning models, techniques for improving model explainability, and frameworks for ethical decision-making in AI development. We discussed real-world case studies where AI systems had unintended consequences and how these situations could have been prevented through better ethical practices. The session also covered regulatory considerations and the importance of diverse teams in building more inclusive AI systems. The panel concluded with actionable recommendations for developers to incorporate ethical considerations throughout the AI development lifecycle.",
    highlights: [
      "Participated in panel with leading AI ethics experts from Google, Microsoft, and local universities",
      "Discussed practical approaches to bias detection and mitigation in ML models",
      "Shared frameworks for ethical decision-making in AI development",
      "Addressed questions from 400+ developers on implementing responsible AI practices",
      "Contributed to DevFest's focus on building technology for social good"
    ]
  },
  {
    id: "aws-community-day",
    title: "AWS Community Day",
    event: "AWS User Group",
    date: "September 8, 2023",
    location: "Bangalore, India",
    audience: "250+ cloud enthusiasts",
    topic: "Serverless ML on AWS",
    description: "Deep dive into building serverless machine learning applications using AWS Lambda, SageMaker, and other AWS services.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://youtube.com/watch?v=example4",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Technical presentation" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Architecture diagram explanation" },
      { url: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Live demo" },
      { url: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience interaction" }
    ],
    fullDescription: "At AWS Community Day in Bangalore, I delivered a comprehensive technical talk on building serverless machine learning applications using AWS services. The session focused on architecting end-to-end ML solutions that leverage AWS Lambda for preprocessing and inference, Amazon SageMaker for model training and deployment, and other AWS services for a complete serverless ML pipeline. I demonstrated how to build cost-effective, scalable, and maintainable ML systems without managing infrastructure. The talk included detailed architecture patterns, best practices for serverless ML, and considerations for production deployments. Through live coding demonstrations, I showed how to implement real-time inference endpoints, batch processing jobs, and automated retraining pipelines. The session also covered monitoring, logging, and debugging strategies specific to serverless ML applications on AWS. Attendees left with practical knowledge they could immediately apply to their own cloud ML projects.",
    highlights: [
      "Presented to 250+ AWS practitioners and cloud architects",
      "Demonstrated end-to-end serverless ML architecture patterns",
      "Conducted live coding of AWS Lambda functions for ML preprocessing and inference",
      "Shared cost optimization strategies for ML workloads on AWS",
      "Provided reference architecture templates for common ML use cases"
    ]
  },
  {
    id: "pydata-mumbai-meetup",
    title: "PyData Mumbai Meetup",
    event: "Python Data Science Community",
    date: "July 15, 2023",
    location: "Mumbai, India",
    audience: "150+ data scientists",
    topic: "AutoML: Democratizing Machine Learning",
    description: "Presentation on automated machine learning tools and techniques to make ML accessible to non-experts.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://youtube.com/watch?v=example5",
    type: "Meetup Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Meetup presentation" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Tool demonstration" },
      { url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Interactive session" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Community networking" }
    ],
    fullDescription: "At the PyData Mumbai Meetup, I presented on the rapidly evolving field of Automated Machine Learning (AutoML) and its potential to democratize ML by making it accessible to non-experts. The talk began with an overview of the current AutoML landscape, covering both open-source tools like Auto-sklearn and TPOT, and commercial platforms like Google AutoML and Amazon SageMaker Autopilot. I demonstrated how these tools automate various aspects of the ML pipeline, including feature engineering, model selection, hyperparameter tuning, and ensemble building. Through practical examples, I showed how domain experts with limited ML experience can leverage AutoML to build effective models for their specific use cases. The presentation also addressed the limitations of current AutoML approaches and when traditional, manual ML development might still be necessary. The session concluded with a discussion on the future of AutoML and its potential impact on the data science profession. Attendees participated in a hands-on exercise using an open-source AutoML library to solve a real-world problem.",
    highlights: [
      "Introduced AutoML concepts and tools to 150+ data science practitioners",
      "Compared performance of various AutoML frameworks on benchmark datasets",
      "Demonstrated AutoML workflow integration into existing data science pipelines",
      "Facilitated discussion on ethical considerations in automated decision-making",
      "Shared practical tips for when and how to effectively use AutoML tools"
    ]
  },
  {
    id: "data-science-conference",
    title: "Data Science Conference",
    event: "National Analytics Summit",
    date: "May 22, 2023",
    location: "Delhi, India",
    audience: "600+ professionals",
    topic: "MLOps: From Model to Production",
    description: "Comprehensive overview of MLOps practices, including model versioning, monitoring, and continuous deployment strategies.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://youtube.com/watch?v=example6",
    type: "Conference Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Conference presentation" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "MLOps architecture diagram" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Live demonstration" },
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Q&A session" }
    ],
    fullDescription: "At the National Analytics Summit in Delhi, I delivered a comprehensive talk on MLOps practices for successfully transitioning machine learning models from development to production. The presentation covered the entire MLOps lifecycle, from experiment tracking and model versioning to automated testing, deployment, and monitoring. I introduced key tools and frameworks in the MLOps ecosystem, including MLflow, Kubeflow, TFX, and various cloud-native solutions. The talk emphasized the importance of treating ML code with the same engineering rigor as traditional software, while addressing the unique challenges of ML systems such as data drift, model decay, and explainability requirements. Through case studies from my experience implementing MLOps at scale, I illustrated common pitfalls and best practices. The session included practical demonstrations of continuous integration and continuous deployment pipelines for ML models, as well as strategies for effective model monitoring in production. Attendees learned how to implement MLOps practices incrementally in their organizations, starting with the highest-value components based on their specific needs and constraints.",
    highlights: [
      "Presented to 600+ data science and ML engineering professionals",
      "Outlined complete MLOps reference architecture for enterprise ML systems",
      "Demonstrated CI/CD pipeline implementation for ML models",
      "Shared strategies for detecting and addressing model drift in production",
      "Provided roadmap for organizations to incrementally adopt MLOps practices"
    ]
  }
];

// Custom arrow components for the slider with improved accessibility
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="flex absolute left-4 top-1/2 z-10 justify-center items-center w-10 h-10 text-white rounded-full -translate-y-1/2 bg-black/50 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Previous slide"
      tabIndex={0}
    >
      <ChevronLeft size={20} />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="flex absolute right-4 top-1/2 z-10 justify-center items-center w-10 h-10 text-white rounded-full -translate-y-1/2 bg-black/50 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Next slide"
      tabIndex={0}
    >
      <ChevronRight size={20} />
    </button>
  );
};

const SpeakingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenCaption, setFullscreenCaption] = useState<string>('');
  
  // Handle keyboard navigation for the carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (sliderRef.current) {
        if (e.key === 'ArrowLeft') {
          sliderRef.current.slickPrev();
        } else if (e.key === 'ArrowRight') {
          sliderRef.current.slickNext();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full transition-all ${i === currentSlide ? 'bg-primary scale-110' : 'bg-muted'}`}
        role="button"
        aria-label={`Go to slide ${i + 1}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && sliderRef.current) {
            sliderRef.current.slickGoTo(i);
          }
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots flex justify-center gap-2 absolute bottom-4",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        }
      }
    ],
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    adaptiveHeight: true
  };

  useEffect(() => {
    // Find the event with the matching ID
    const foundEvent = eventsData.find(e => e.id === id);
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      // If no matching event is found, redirect to the speaking page
      navigate('/speaking');
    }
  }, [id, navigate]);

  if (!event) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 rounded-full border-t-2 border-b-2 animate-spin border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${event.title} | Shubham Agnihotri Speaking`}
        description={event.description}
        keywords={`${event.topic}, ${event.type}, tech talks, speaking event, Shubham Agnihotri`}
      />
      <div className="px-4 py-20 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/speaking')}
              className="mb-4"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Speaking
            </Button>
            
            <h1 className="mb-4 text-3xl font-bold md:text-5xl text-foreground">
              {event.title}
            </h1>
            <p className="mb-6 text-xl font-medium text-primary">
              {event.event}
            </p>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden relative mb-12 rounded-xl border border-border"
          >
            <Slider 
              {...sliderSettings} 
              className="carousel-slider" 
              ref={sliderRef}
              aria-label="Event image carousel"
            >
              {event.images.map((image, index) => (
                <div key={index} className="relative" aria-roledescription="slide" aria-label={`Slide ${index + 1} of ${event.images.length}: ${image.alt}`}>
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-[400px] object-cover cursor-pointer"
                    onClick={() => {
                      setFullscreenImage(image.url);
                      setFullscreenCaption(image.alt);
                    }}
                  />
                  <div className="absolute right-0 bottom-0 left-0 p-4 bg-gradient-to-t to-transparent from-black/70 image-caption">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                      <button 
                        className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                        onClick={() => {
                          setFullscreenImage(image.url);
                          setFullscreenCaption(image.alt);
                        }}
                        aria-label="View fullscreen"
                      >
                        <ZoomIn size={16} />
                      </button>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-white/80">{`Image ${index + 1} of ${event.images.length}`}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
            {/* Fullscreen Image Modal */}
            {fullscreenImage && (
              <div className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black/90">
                <div className="relative w-full max-w-5xl max-h-[90vh]">
                  <button 
                    className="absolute right-0 -top-12 p-2 text-white transition-colors hover:text-primary"
                    onClick={() => setFullscreenImage(null)}
                    aria-label="Close fullscreen view"
                  >
                    <X size={24} />
                  </button>
                  <img 
                    src={fullscreenImage} 
                    alt={fullscreenCaption} 
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="mt-4 text-center text-white">
                    <p className="text-lg">{fullscreenCaption}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 md:col-span-1"
            >
              <div className="p-6 rounded-lg border bg-card border-border">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  Event Details
                </h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex gap-3 items-center">
                    <Calendar size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Date</p>
                      <p>{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-center">
                    <MapPin size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-center">
                    <Users size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Audience</p>
                      <p>{event.audience}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-center">
                    <Video size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Recording</p>
                      <a 
                        href={event.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg border bg-card border-border">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  Highlights
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            {/* Event Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2"
            >
              <div className="p-6 rounded-lg border bg-card border-border">
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-semibold text-foreground">
                    {event.topic}
                  </h2>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary text-primary-foreground">
                    {event.type}
                  </span>
                </div>
                
                <div className="max-w-none prose prose-lg dark:prose-invert">
                  <p>{event.fullDescription}</p>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                      <Video size={18} className="mr-2" />
                      Watch Full Presentation
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="py-12 mt-16 text-center rounded-lg border bg-primary/5 border-primary/20"
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Interested in similar talks for your event?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              I'm available for speaking engagements on AI, machine learning, and data science topics.
              Let's connect to discuss how I can add value to your next event!
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SpeakingDetail;
