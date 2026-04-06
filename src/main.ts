import { createIcons, ArrowDown, Github, Linkedin, GraduationCap, Award, Mail, Phone } from 'lucide';
import './index.css';

// Initialize Lucide icons
createIcons({
  icons: {
    'arrow-down': ArrowDown,
    'github': Github,
    'linkedin': Linkedin,
    'graduation-cap': GraduationCap,
    'award': Award,
    'mail': Mail,
    'phone': Phone
  }
});

// Simple Scroll Reveal
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      entry.target.classList.remove('opacity-0');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select elements to reveal
document.querySelectorAll('section, .group').forEach(el => {
  el.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
  observer.observe(el);
});

console.log('Ricardo Furtado Reis Portfolio Initialized');
