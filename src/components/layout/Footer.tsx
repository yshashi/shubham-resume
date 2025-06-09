import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shubham-agnihotri',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shubhamagnihotri',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/sashik30',
      icon: Mail,
      color: 'hover:text-blue-500',
    },
    {
      name: 'Email',
      href: 'mailto:sashikumar.yadav.30@gmail.com',
      icon: Mail,
      color: 'hover:text-green-600',
    },
  ];

  const footerLinks = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="py-12 container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="mb-4 text-2xl font-bold gradient-text"
              >
                Shubham Agnihotri
              </motion.h3>
            </Link>
            <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">
              Full Stack Developer passionate about building scalable web applications 
              and sharing knowledge through technical blogging and community building. 
              Based in Singapore.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-200 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 transition-colors duration-200 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Get in Touch
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>Singapore</p>
              <p>Available for Full Stack Development & Consulting</p>
              <Link
                to="/contact"
                className="inline-block mt-4 font-medium transition-colors duration-200 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
              >
                Send a message →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col justify-between items-center md:flex-row">
            <div className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Shubham Agnihotri. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;