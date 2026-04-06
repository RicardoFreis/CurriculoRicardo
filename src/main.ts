import { createIcons, ArrowDown, Github, Linkedin, GraduationCap, Award, Mail, Phone, Menu, X } from 'lucide';
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
    'phone': Phone,
    'menu': Menu,
    'x': X
  }
});

// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    mobileMenu?.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
    mobileMenu?.classList.add('translate-y-0', 'opacity-100');
    if (mobileMenuBtn) mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-5 h-5"></i>';
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenu?.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
    mobileMenu?.classList.remove('translate-y-0', 'opacity-100');
    if (mobileMenuBtn) mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
    document.body.style.overflow = '';
  }
  
  // Re-initialize icons for the button
  createIcons({
    icons: { 'menu': Menu, 'x': X }
  });
}

mobileMenuBtn?.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
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
