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
  { title: "Construindo um Sistema para um Estacionamento com C#", img: "https://assets.dio.me/MMN9dxwPja4g_FbLb8uHosyz6YFsHOJ17ZRUhwfsGxY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TTkQxT0dGQy5qcGc" },
  { title: "Array e Listas em C#", img: "https://assets.dio.me/GjZKM_yVq8mmK32QMEfQIHhGeewh8hRChAqMfonus4Y/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9aWlJJQ1JNUC5qcGc" },
  { title: "Conhecendo a Organização de um Programa C#", img: "https://assets.dio.me/D2-r5evp9ZgI63usiHyWpY2iQceqx2AnxXrKlHx-7Rc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yTktGTDNSVi5qcGc" },
  { title: "Conhecendo as Estruturas de Repetição em C#", img: "https://assets.dio.me/KFP7tPCEJ1j9OlVB-1CijDFINufkk_c0GcERSlpQFYc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9MVUVJNllTVS5qcGc" },
  { title: "Introdução ao .NET e Controle de Versão com Git", img: "https://assets.dio.me/4ikwVl6QjuXZ1ac4ewwlTfBb3KkyqLjkEoiy-ffApM8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9KRFZEWUpJQi5qcGc" },
  { title: "Introdução ao React", img: "https://assets.dio.me/Hh2qp7xSMHwd7aZd_R8PHF_pQMvcGhHvM-c00Zou2oU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9LT0VQWFRTQi5qcGc" },
  { title: "Live de Lançamento Akad - Fullstack Developer", img: "https://assets.dio.me/SRMpg48chrv0iGkBknpCR7cABDuGYYpkIPO59mtwjlA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YUjUxMlpINy5qcGc" },
  { title: "Componentes Funcionais no React", img: "https://assets.dio.me/yWwoRugxyOtrefN-KSWZ-FB36B7jd7anu5KWSUXMkEA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9UUFlVNUNZVi5qcGc" },
  { title: "Criando Aplicações React com Vite", img: "https://assets.dio.me/pPG64FvZ-7gC6HEkM6xQ-i-LB3tgPnCjbMD-b0ndkeA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VRjFEMlZQSC5qcGc" },
  { title: "Empacotadores e Compiladores no React", img: "https://assets.dio.me/mN74y1_j_iybbcH5tycqD9vI4b0ZQFaIB80zufRySns/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9QNkxUWklZUC5qcGc" },
  { title: "Preparando o Ambiente de Desenvolvimento React", img: "https://assets.dio.me/kBdflBnEbfvgKg0y1ff9tSU0g4lqtv33ms1XBaLkSwo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DWE84UUhHVS5qcGc" },
  { title: "Conhecendo o React", img: "https://assets.dio.me/BQYhU0SaVsz7MP2sPX_nXir9GuJvgj2AsKJRRX-FF2w/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BTFRFUFJLQi5qcGc" },
  { title: "Estrutura de Dados JSON", img: "https://assets.dio.me/5_GfI2nbBXxi8WPnCME_DT2NdVJ9QJpqWeWVGhPudng/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9LVVpEMEI3RS5qcGc" },
  { title: "Importação e Exportação com JavaScript", img: "https://assets.dio.me/O9hg9xP-3mG3bkA_VmE3bj4rZXm7FSzJR4InkzpM97k/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FRldYWFBTOS5qcGc" }
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
  
  // Request a higher resolution image from DIO's CDN for the modal
  // We use regex to be more robust and provide a fallback
  const highResImg = cert.img
    .replace(/\/h:\d+\//, '/h:1080/')
    .replace(/\/w:\d+\//, '/w:1920/')
    .replace(/\/q:\d+\//, '/q:100/');
    
  certModalImg.src = highResImg;
  
  // Fallback to original image if high-res fails
  certModalImg.onerror = () => {
    if (certModalImg.src !== cert.img) {
      console.warn('High-res image failed to load, falling back to original');
      certModalImg.src = cert.img;
    }
  };

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
