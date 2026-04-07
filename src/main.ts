import { createIcons, Menu, X, Smartphone, Phone, Mail, Linkedin, Github, Home, Award, ChevronRight } from 'lucide';
import './index.css';

// Initialize Lucide icons
createIcons({
  icons: {
    Menu,
    X,
    Smartphone,
    Phone,
    Mail,
    Linkedin,
    Github,
    Home,
    Award,
    ChevronRight
  }
});

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Open Menu
mobileMenuBtn?.addEventListener('click', () => {
  if (mobileMenu) {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
});

// Close Menu Function
const closeMobileMenu = () => {
  if (mobileMenu) {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    document.body.style.overflow = ''; // Restore scrolling
  }
};

// Close Menu on Close Button
mobileMenuCloseBtn?.addEventListener('click', closeMobileMenu);

// Close Menu on Link Click and Scroll
mobileLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    
    closeMobileMenu();
    
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Delay scroll slightly to allow menu closing animation to start
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      }
    }
  });
});

// Desktop Smooth Scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
