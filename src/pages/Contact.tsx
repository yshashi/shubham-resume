import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shubham.agnihotri@example.com",
      href: "mailto:shubham.agnihotri@example.com"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Mumbai, India",
      href: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shubhamagnihotri",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/shubhamagnihotri",
      color: "hover:text-gray-600"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@shubhamagnihotri",
      color: "hover:text-red-600"
    }
  ];

  return (
    <>
      <SEO 
        title="Contact | Get in Touch with Shubham Agnihotri"
        description="Contact Shubham Agnihotri for speaking engagements, collaboration opportunities, or to discuss data science and machine learning projects."
        keywords="contact Shubham Agnihotri, hire data scientist, speaking engagement, collaboration, ML consultant, data science expert"
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
            Get In Touch
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Let's connect! Whether you want to discuss opportunities, collaborations, or just say hello.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-lg border bg-card border-border">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 w-full rounded-lg border transition-all duration-200 border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 w-full rounded-lg border transition-all duration-200 border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 w-full rounded-lg border transition-all duration-200 border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="px-4 py-3 w-full rounded-lg border transition-all duration-200 resize-none border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell me more about your project or question..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-lg border bg-card border-border">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 rounded-lg bg-primary/10">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="transition-colors duration-200 text-muted-foreground hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-lg border bg-card border-border">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Follow Me</h2>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-3 p-4 bg-secondary/30 rounded-lg transition-all duration-200 ${social.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br rounded-lg border from-primary/10 to-secondary/10 border-primary/20">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Let's Collaborate!</h2>
              <p className="mb-4 text-muted-foreground">
                I'm always open to discussing new opportunities, speaking engagements, 
                or interesting projects. Let's build something amazing together!
              </p>
              <div className="flex gap-2 items-center font-medium text-primary">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
