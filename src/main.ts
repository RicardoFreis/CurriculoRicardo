import { createIcons, Menu, X, Smartphone, Phone, Mail, Linkedin, Github, Home, Award, ChevronRight, ChevronLeft, Copyright } from 'lucide';
import './index.css';

// Icons configuration
const iconsConfig = {
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
    ChevronRight,
    ChevronLeft,
    Copyright
  }
};

// Initialize Lucide icons
createIcons(iconsConfig);

// Certificates Data
const certificates = [
  { title: "Introdução as APIs com C#", img: "https://assets.dio.me/kXCAIoiej9A4p8xdchLx6prju8JL7-bCBDuN43WXnFc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9MTUROUlVXNS5qcGc" },
  { title: "Programação Orientada a Objetos com C#", img: "https://assets.dio.me/h63HG8KJgn2fsFFnTVuwUBlsjnR-ccF0CbUmWc8fGuo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82RVZHQUFQRy5qcGc" },
  { title: "Criando um Sistema e Abstraindo um Celular com POO em C#", img: "https://assets.dio.me/gYgP_dsuk49XLL0ZA_5NkVRlzz99Coxx7Gk8cYCSklw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HQUFFUTZNMS5qcGc" },
  { title: "Classes Abstratas e Interfaces com C#", img: "https://assets.dio.me/09TmHyeCLK40RRahJx1JEPq38VWxF7I-B1w42pTSbG4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DTjdHT1dURi5qcGc" },
  { title: "Herança e Polimorfismo com C#", img: "https://assets.dio.me/9ohZ8zgAWic2v4U0Ne7qXc7r0mx16Fybmy2_tUTQL88/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NQUNEWUxMMC5qcGc" },
  { title: "Introdução, Abstração e Encapsulamento com C#", img: "https://assets.dio.me/MU2WjsPZgq0ZrsgTb9cvzYF5CsmPJN9qTiE_GGMTRKU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci81R09aUk5FRy5qcGc" },
  { title: "Construindo um Sistema de Hospedagem de um Hotel no C#", img: "https://assets.dio.me/EcKayX7909MklDisvfEvrr-cFVLZntlkzN_zRA-NSgM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83OE80TExHSS5qcGc" },
  { title: "Linguagens Para Dynamics: Domine o C# e Conheça o JavaScript", img: "https://assets.dio.me/h-UxlcLdXK5PHP-B9CMgWk6EirjuH80O2QylxxqHUho/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9WWVBOVk5ZSS5qcGc" },
  { title: "Nuget, Serializar e Atributos no C#", img: "https://assets.dio.me/oSbS1dv7ZDUjWFg2NDXt3dbT2D8RI5X9fVYtVKwTtss/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci84N0xSTzdUWi5qcGc" },
  { title: "Tuplas, Operador Ternário e Desconstrução de um Objeto com C#", img: "https://assets.dio.me/t-Y4CfUQS7nvyEiL-ZZjIb52t8MqiYo5Bkyq1n9KMn4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CMVZHWThWNS5qcGc" },
  { title: "Exceções e Coleções com C#", img: "https://assets.dio.me/-p7TqchBH-9icSkyHZkbPM8bRuaAtULjCcUFotRpFgw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DRzdUMFk1Ny5qcGc" },
  { title: "A Era da IA: Machine Learning, LLMs, IA Generativa e Agentes", img: "https://assets.dio.me/8eFjHmwG8zvu7PxBavOKmrsHFkKdJMU0-WOWMxfVBFU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BQlFVNUtORC5qcGc" },
  { title: "Mapa de Oportunidades com IA no seu Dia a Dia", img: "https://assets.dio.me/Va6fSE8wuFaGPblmyzGjqI1mm-NTs3hrGXF4wJwQ_iA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FRVpCOFhIUi5qcGc" },
  { title: "Manipulando Valores com C#", img: "https://assets.dio.me/_phATy5665mrPoHRSsuu3z2UlRfoAxNfks5oBa_Anng/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9QUVczNTFCVy5qcGc" },
  { title: "Propriedades, Métodos e Construtores com C#", img: "https://assets.dio.me/djZMh5YsMATWMVtX87BSapEPZEGQKt7ZtzPcrsAkBjw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9WSjVKTVhLSi5qcGc" },
  { title: "Estrutura de Dados com C#", img: "https://assets.dio.me/9DhSLaLFGvSPppOcFqbMwZqP0JdqrJqFGIWGc3DNeqg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xNUxIR1g0WC5qcGc" },
  { title: "Construindo um Sistema para um Estacionamento com C#", img: "https://assets.dio.me/MMN9dxwPja4g_FbLb8uHosyz6YFsHOJ17ZRUhwfsGxY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TTkQxT0dGQy5qcGc" }
];

// Pagination State
let currentPage = 1;
const itemsPerPage = 30;
const maxPageLinks = 5;

// DOM Elements
const certGrid = document.getElementById('cert-grid');
const certPagination = document.getElementById('cert-pagination');
const certModal = document.getElementById('cert-modal');
const certModalImg = document.getElementById('cert-modal-img') as HTMLImageElement;
const certModalTitle = document.getElementById('cert-modal-title');
const certModalClose = document.getElementById('cert-modal-close');
const certModalOverlay = document.getElementById('cert-modal-overlay');

// Render Certificates
function renderCertificates() {
  if (!certGrid) return;
  
  certGrid.innerHTML = '';
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = certificates.slice(startIndex, endIndex);

  pageItems.forEach(cert => {
    const card = document.createElement('span');
    card.className = 'hover:text-cyan-400 transition-all flex items-center gap-2 group cursor-pointer text-[0.7em] font-bold uppercase tracking-tight';
    card.innerHTML = `
      <i data-lucide="award" class="w-3 h-3 text-cyan-500 group-hover:scale-110 transition-transform flex-shrink-0"></i>
      ${cert.title}
    `;
    card.addEventListener('click', () => openModal(cert));
    certGrid.appendChild(card);
  });
  
  createIcons(iconsConfig); // Re-initialize icons for new elements
}

// Render Pagination
function renderPagination() {
  if (!certPagination) return;
  
  certPagination.innerHTML = '';
  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  
  if (totalPages <= 1) return;

  // Left Arrow
  const prevBtn = document.createElement('button');
  prevBtn.className = `p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''}`;
  prevBtn.innerHTML = '<i data-lucide="chevron-left" class="w-5 h-5"></i>';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      updateUI();
    }
  };
  certPagination.appendChild(prevBtn);

  // Page Numbers
  let startPage = Math.max(1, currentPage - Math.floor(maxPageLinks / 2));
  let endPage = Math.min(totalPages, startPage + maxPageLinks - 1);
  
  if (endPage - startPage + 1 < maxPageLinks) {
    startPage = Math.max(1, endPage - maxPageLinks + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `w-10 h-10 rounded-lg border font-bold transition-all ${
      currentPage === i 
        ? 'bg-cyan-500 border-cyan-500 text-black' 
        : 'border-white/10 hover:bg-white/5 text-white/60 hover:text-white'
    }`;
    pageBtn.innerText = i.toString();
    pageBtn.onclick = () => {
      currentPage = i;
      updateUI();
    };
    certPagination.appendChild(pageBtn);
  }

  // Right Arrow
  const nextBtn = document.createElement('button');
  nextBtn.className = `p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : ''}`;
  nextBtn.innerHTML = '<i data-lucide="chevron-right" class="w-5 h-5"></i>';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateUI();
    }
  };
  certPagination.appendChild(nextBtn);

  createIcons(iconsConfig);
}

function updateUI() {
  renderCertificates();
  renderPagination();
  // Scroll to section start on page change
  const section = document.getElementById('certificacoes');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Modal Logic
function openModal(cert: { title: string, img: string }) {
  if (!certModal || !certModalImg || !certModalTitle) return;
  
  certModalImg.src = cert.img;
  certModalTitle.innerText = cert.title;
  certModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!certModal) return;
  certModal.classList.add('hidden');
  document.body.style.overflow = '';
}

certModalClose?.addEventListener('click', closeModal);
certModalOverlay?.addEventListener('click', closeModal);

// Initial Render
updateUI();

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
    } else {
      // If targetId is '#' (Inicio), scroll to top
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 300);
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
    } else {
      // If targetId is '#' (Inicio), scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});
