import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div className="contact" data-aos="fade-up" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <h2>Contact</h2>
      <p>If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn:</p>
      <div className="contact-links">
        <a href="mailto:kallamkkr@gmail.com" className="contact-link">Email: kallamkkr@gmail.com</a>
        <a href="https://www.linkedin.com/in/karthik-kallam-057a66191/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
      </div>
    </motion.div>
  );
}

export default Contact;
