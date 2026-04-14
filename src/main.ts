import { createIcons, Menu, X, Smartphone, Phone, Mail, Linkedin, Github, Home, Award, ChevronRight, ChevronLeft, Copyright, Search, Printer, FileText } from 'lucide';
import './index.css';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';

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
    Copyright,
    Search,
    Printer,
    FileText
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
  { title: "Importação e Exportação com JavaScript", img: "https://assets.dio.me/O9hg9xP-3mG3bkA_VmE3bj4rZXm7FSzJR4InkzpM97k/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FRldYWFBTOS5qcGc" },
  { title: "Lógica Aplicada com Javascript", img: "https://assets.dio.me/VH-VXPQH_sYqIATvradc2LJUterJedz1Ec27t-9mOlE/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci80S1k2SUJOSy5qcGc" },
  { title: "Construindo um Layout Responsivo Para o Site do Discord Com CSS", img: "https://assets.dio.me/FJhUDoY2OB3pKKX5UGuEZDqvBbE8JkeZmLsMJVWQgIk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9GR1ZWUk5OQi5qcGc" },
  { title: "Posicionamento De Elementos com CSS", img: "https://assets.dio.me/RKjPnJR6u7yB6d-5-9S-WytTUmGgRX-edgvsqh36vbo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NRTZCUk9PUC5qcGc" },
  { title: "Introdução ao Desenvolvimento Fullstack com a Akad", img: "https://assets.dio.me/WyycExImghStIW8xp0pwhVGyOPIz7d2sWKPe-KaM1O4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9aTUNPU1JEQS5qcGc" },
  { title: "Dominando Grid Layouts no CSS", img: "https://assets.dio.me/a8ChLlzzoORfxiopn7CLktnMziyKohmr0hSIuZJO2S0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9RVVBQRExEMy5qcGc" },
  { title: "Clonando a Página do Youtube com CSS", img: "https://assets.dio.me/F8p3c-5RQr2Aqg4xhgI5UBnA0-JIoF_UnmgDT_KujRc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9GSkI3R1VGWi5qcGc" },
  { title: "Trabalhando com Flexbox no CSS", img: "https://assets.dio.me/egIkifmZitcr-Ynuf-ss1geLVNMsx-j1Rh98YcLFdKg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yN1ZBUzhIRS5qcGc" },
  { title: "Posicionamentos e Exibição de Elementos com CSS", img: "https://assets.dio.me/EXcROMec4aF5TBr0JZcE98QnQQYxvOR6SuZmMyTLAhM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci84V0FTM1BBUi5qcGc" },
  { title: "Explorando os Fundamentos do CSS", img: "https://assets.dio.me/EFurLcBni-eDRPSM9uBT2Et1ngKzIsEN0Vc3AFy2VOY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83WFhHUlhYSi5qcGc" },
  { title: "Responsividade no CSS", img: "https://assets.dio.me/Qpsg3wgwko5efw1e47apG71Q13fVPAmPJ1D8fH_25Xs/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci81UVFKSDRJMy5qcGc" },
  { title: "Unidades de Medida em CSS", img: "https://assets.dio.me/KweHuEhc3L2GUq5Wi7OLY2ROWIberRqzu9zukwiBQdE/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9SSkgyNjVDUy5qcGc" },
  { title: "Recriando o Wikipedia com Layout Moderno", img: "https://assets.dio.me/X5buyiqmG8vcUqKZlaoFmKRCaVhsb3m2kZYtISqV8X0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9MVzgzUUpTSC5qcGc" },
  { title: "Primeiros Passos com HTML", img: "https://assets.dio.me/mzh1tLP-b6a4lSNhCwc738GisdpAWE2qnkwCDao5xmA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NMkVNUFAwTy5qcGc" },
  { title: "Criar Uma Página Web Utilizando as Tags Aprendidas", img: "https://assets.dio.me/qfn6-09oP_tarVgpGZEnidXyfSIxev4nMSrP52Heh70/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ZWTUyS1lUQi5qcGc" },
  { title: "Criando Tabelas com HTML", img: "https://assets.dio.me/mlnwlX1DlRewWA4v8892qb2BP__2prVCWZI0Sq2W6AQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9JTlFOTkVMQy5qcGc" },
  { title: "Trabalhando com Mídias utilizando HTML", img: "https://assets.dio.me/qX7daWKj4-IzqptOP3gO89bBzjlYS8X8M2wgfk6qW-k/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FNFBETkJaWS5qcGc" },
  { title: "Princípios de Desenvolvimento Web", img: "https://assets.dio.me/kH9b9AwrALjYN-o6ME1mJRtCZU95Hm2O7uQ3hWhqfcA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci81Q1E1WE9LMy5qcGc" },
  { title: "Live de Lançamento: Santander Bootcamp 2025", img: "https://assets.dio.me/sFzoWnhvEbLCxUFh8GqTqK8vgTvLv0Q6zRGbd02kly8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9XSFpXUkFKOC5qcGc" },
  { title: "Introdução à Experiência Santander 2025", img: "https://assets.dio.me/jQKM8GANRQJMQ3XJNqsQbbfiF0kOThcHaYDPj8UTMPg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VSU1FSkJVSC5qcGc" },
  { title: "Como a Computação em Nuvem Funciona", img: "https://assets.dio.me/uIxdGcNMZM1roxTjM-66DZ2cWed9VVLNnT05LcMkols/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NVVZGUkpEVC5qcGc" },
  { title: "Construindo uma Landing Page no Mundo Invertido com HTML e CSS", img: "https://assets.dio.me/B8zMyh8zs_cKrI3btMW3mhJm8LoO9cjV91b-CegrP7E/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9IQVpJRkZUTy5qcGc" },
  { title: "Introdução ao Bootcamp Microsoft 50 Anos: Computação em Nuvem com Azure", img: "https://assets.dio.me/q5qSi2_r7RsHEW6cIo9tw7nNnhYP8qZ84RKB2Zz0Vi0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DWk5UN1BXSy5qcGc" },
  { title: "Introdução à Experiência Microsoft 50 Anos", img: "https://assets.dio.me/ac_6MRsJW8CKaWDnNSd3XZWp0igaHqZG-Mdsrgz4RLg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YTk81RjNKRS5qcGc" },
  { title: "Construindo um Simulador de Piano com JavaScript e CSS", img: "https://assets.dio.me/fvZfC0znhEf--yp7M6b4bxvkgnyk61jwEdyM4n73U5E/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9RMVJQM0EwNS5qcGc" },
  { title: "Criando um Jogo de Cartas do Yu-Gi-Oh! com JavaScript e CSS", img: "https://assets.dio.me/vclMLT4vp7HXckx13j05jGK08dPwuJ5itMftolwVfgs/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FTEZQTEtYVS5qcGc" },
  { title: "Dando os seus Primeiros Passos com JavaScript", img: "https://assets.dio.me/MBNEijl_IGGPKMiVm22Rddt52b9HA6eE_YtDA_gsorM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9STFJOSEFQSC5qcGc" },
  { title: "Construindo uma Pokédex com JavaScript", img: "https://assets.dio.me/F_xq_UQT-jEazYo1TcFNpni09aR2GkKMsV_rGhdAG4A/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ZVjRNVVhXUi5qcGc" },
  { title: "Dominando o Protocolo HTTP e Integrando com a PokeAPI", img: "https://assets.dio.me/FMJ-8jmGyV76Kv9Wk5lN2gUgo0Y7OaHi2GAnX4k-oNM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9QVFNYSUxMMC5qcGc" },
  { title: "Criando um Projeto com HTML/CSS para Listagem de Pokémon", img: "https://assets.dio.me/OXq_aDMPXBxLK2BLfNf4bicIzBoPfIuYJRP75_VaWsQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YRkRWREc0RS5qcGc" },
  { title: "Introdução ao Desenvolvimento Web com JavaScript", img: "https://assets.dio.me/p7Jr3a-DDIKS5LGdD6mbxnJdrNzFbi87T1AjNhrkKsM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8zVjJSUFJTSy5qcGc" },
  { title: "Arrays e Estruturas de Repetição em JavaScript", img: "https://assets.dio.me/HOXT9wIRl5mtNKS_nmQJbEXW-U9IjW7tbdV4oUERr60/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CQ1kyUk5LUC5qcGc" },
  { title: "Criando Objetos e Classes em JavaScript", img: "https://assets.dio.me/zjd3ckeQJFxLdaCkSCdvT6RNQgbrN6_-vIlboiiALyM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9PUjhLTU9SVS5qcGc" },
  { title: "Conhecendo Funções JavaScript", img: "https://assets.dio.me/Oo38o9PLkYW6CxmvQUuf0Gi3wCJpu_rEagoSHBUDHtI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9MQllTOE5OSC5qcGc" },
  { title: "Criando um Jogo da memória com Emojis Utilizando Javascript", img: "https://assets.dio.me/gbM9PbEftF06OKEVa3QBS-VH1Yc2y4J1ZGzdTXiRBr0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9MRFRSNUpJUy5qcGc" },
  { title: "Aprendendo Lógica de Programação", img: "https://assets.dio.me/esEI-bWLZnTrS5lAj1Qo7SxSbMJYbmTMi9PEYdhLkjY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ORVRBWEtMSC5qcGc" },
  { title: "Classificador de Nível de Herói", img: "https://assets.dio.me/YWkhBW2-T9oN3J4MLFnJKnGR3wcqnbW89XYDAcmG3_w/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xVlJTR1NJMS5qcGc" },
  { title: "Trabalhando Com Estruturas de Repetição (for, while, do-while)", img: "https://assets.dio.me/gFfqCDZ5s9ZYe4M6YcHvistusEbiUz94_acI6CpZfWA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9QMVlYT1VYTC5qcGc" },
  { title: "Trabalhando Com Estruturas de Decisão (Estrutura Switch Case)", img: "https://assets.dio.me/T09KTiuH7ZZAdCcWZrt0ayuocdhq8ZQDW_6aFFiRtN0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9WV0QyQ1RPUS5qcGc" },
  { title: "Trabalhando Com Estruturas Condicionais (if, else if, else)", img: "https://assets.dio.me/60P7qNSukQu4Et6L_-hkYQjMeKHAF8RslYnACx_TtP8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DU01EOUhFMi5qcGc" },
  { title: "Criando e Manipulando Vetores e Matrizes", img: "https://assets.dio.me/G8SQ1c4fw33g5yWThC9m0HCA1rUqCF9RCXMO2p4zA6k/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yWDdUS0RIUi5qcGc" },
  { title: "Trabalhando com Variáveis", img: "https://assets.dio.me/szUKTko0Mw9_khIViMExza4GaUmNYsc3zuHuaC11zhI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85MElOT05URy5qcGc" },
  { title: "Estrutura de um Software e Seu Ambiente de Desenvolvimento", img: "https://assets.dio.me/KPfyL4OJKYij6haIxZ4v5nMepBSmvRld7anQfn26VuM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83UVdCUDMwRy5qcGc" },
  { title: "Entendendo Algoritmos e Fluxogramas", img: "https://assets.dio.me/hEOWVlJNrVpsoR2Wg18n2uxxZd6zu2rFgPeMZbforJc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BU0kwTkVZMi5qcGc" },
  { title: "Criando um Jogo do Detona Ralph com JavaScript", img: "https://assets.dio.me/m56ijB54AXSRCK573r-pWdZFEBERioW3h6EMFujFfpk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85V1VGV05IRS5qcGc" },
  { title: "Desenvolvendo suas Primeiras Páginas com HTML e CSS", img: "https://assets.dio.me/-CXSo0cwDQhju8Q_OBgYjiSR90JZfVD-EKG0EQUU-_w/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9UQkZVRlVGTy5qcGc" },
  { title: "Criando sua Primeira Landing Page com HTML e CSS", img: "https://assets.dio.me/aYy8A-JNKojSrQ6Oxk_WsEjnPx5Fi2_dnapiqIN_U0Y/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9POUo3MFc5Wi5qcGc" },
  { title: "Criando suas Primeiras Páginas com HTML e CSS", img: "https://assets.dio.me/zILgY9UE49EqeR-NVMqaTx_0-YlMrddiS5I8X9LFR6A/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TSVJCVE9DMS5qcGc" },
  { title: "Desafios de Código: Aperfeiçoe Sua Lógica e Pensamento Computacional", img: "https://assets.dio.me/sNGbP98Xb3o9CXOzRw-YCOwnRQew1t7VWeXlz0s38C0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9RS1hHRVNJRy5qcGc" },
  { title: "Estilizações Básicas com CSS", img: "https://assets.dio.me/ddYdk9mWJaw6rwaUts5vf_JZPRjEL6CKowKRRQ4isEo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85SVlNWTcwQy5qcGc" },
  { title: "Fundamentos do CSS", img: "https://assets.dio.me/XBDEjHoYmQRoTFNVmUQTiLDJvPjPIfaWJLsuYil6V4g/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HQkpNVFVXSC5qcGc" },
  { title: "Entendendo HTML Semântico", img: "https://assets.dio.me/qbWlhOwN1u2ajmPp-RTfviDDyzjnKS9Rxm_wnahCLmA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9GQ0lETllROC5qcGc" },
  { title: "Estruturando seu HTML + Formatações", img: "https://assets.dio.me/ahAMLX8knWDUggMBOnO9D_gi_nzAYdrGOBNmI9b13i4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83RUY1QzBGTi5qcGc" },
  { title: "Trabalhando com Formulários em HTML", img: "https://assets.dio.me/QECnD8EBZGDdQ84vjiuv3a-xjyWy4qU40o6pWLjsipg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9KQjk4WUVDSy5qcGc" },
  { title: "Operadores Aritméticos em C#", img: "https://assets.dio.me/uvsQNqjJ5MTRhf-B6qtcH0Z6q5bDL3rG8WMh7dxHhXA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8zVEZPN0JITS5qcGc" },
  { title: "Tipos de Operadores em C#", img: "https://assets.dio.me/7R3Pt6_G4XnNUGu6xfueW062NuTeyv_F80uYMpVKT7E/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8zV1ZaWFFIQi5qcGc" },
  { title: "Sintaxe e Tipos de Dados em C#", img: "https://assets.dio.me/RZvHWnNkXmAZDRIceAFwd90qAFyq040HmW9CaE9_dEY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ZSENPQ1JSVi5qcGc" },
  { title: "Introdução ao Ambiente .NET", img: "https://assets.dio.me/7ZBrZ4yrLL_NXzzjAi6DQ4Ijpd2jVj17H4Mo8kCIi0E/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9WQkRFTUlMUi5qcGc" },
  { title: "Live de Lançamento: Randstad - Backend com .NET", img: "https://assets.dio.me/A230-wxzvrm-_r7qiuLeQVS5Ya2SmqTfPULhPxB8hgU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8wM0UxSkZGVy5qcGc" },
  { title: "Introdução as IDEs e Configuração de Ambiente .NET", img: "https://assets.dio.me/kshWJqY31GbmFPNWZ5YTe0ECyFSXC4iJAzCBNdujKmw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9SNVJER0ZDSS5qcGc" },
  { title: "Introdução ao Desenvolvimento Backend com .NET com a Randstad", img: "https://assets.dio.me/G4Q5nBC85oG-wlHJwzwtiFuu2-4LwPGPUXZe3dpT2L4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9aOEtPNTJTSy5qcGc" },
  { title: "Introdução ao .NET", img: "https://assets.dio.me/s2p3KRpux8qCNB47cKwdsw81Q7p_uYbTLBBrXSfh7A0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TV1lYTldKSy5qcGc" },
  { title: "Introdução ao HTML na Prática", img: "https://assets.dio.me/Yj3sABcg1L5xxtT6EDYtNJR0XpkKOU0PsSmVWP2Px-I/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FRU1aS01MMS5qcGc" },
  { title: "Princípios de Desenvolvimento de Software Colaborativo", img: "https://assets.dio.me/D75Q1_UWegytYIP6LBXt96_ueg50wgTXnKHGILZtHYU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9LQzhaUkhJRy5qcGc" },
  { title: "Live de Lançamento: Ri Happy - Front-end do Zero", img: "https://assets.dio.me/ivZoPd9upcK2cLQ_Wpv9JNnqliQ6TEvn2CPbD7UcoTY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DQ0tLTVdPRC5qcGc" },
  { title: "Contribuindo em um Projeto Open Source no GitHub", img: "https://assets.dio.me/-uOsHGNXe-__2npqOYX-LIQIuRCkFLsxGQcVJcJTGXk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xWTJTTU1aTC5qcGc" },
  { title: "Desafios de Projetos: Crie Um Portfólio Vencedor", img: "https://assets.dio.me/6xU6xL-3CjEkjDHccW-zjViIOjUCIX9EjUmgREBYPuo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ENTBQUFVCOS5qcGc" },
  { title: "Versionamento de Código com Git e GitHub", img: "https://assets.dio.me/M5HsXHx9M7NK_gVs77pQ66dEb9cv5mZUn3bqlZ08hws/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DTjNDWUEwSC5qcGc" },
  { title: "Entendendo Comunicação Client x Server", img: "https://assets.dio.me/PeF19LbD9ZAh3CSgL6VNpADeQl6MZaC8Vi5Leg5Z1BU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci84REJRQ0xKNS5qcGc" },
  { title: "Introdução ao Desenvolvimento Front-end com a Ri Happy", img: "https://assets.dio.me/qj1kLI7MjbSGHLeIiyymk5k-JmHGz1Fuo2ZeczvYrQI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YRUlHWUdQUi5qcGc" },
  { title: "Primeiros Passos Com JavaScript", img: "https://assets.dio.me/HES1sAQ-uRdJR3Z6UgQsqEa8MAi1uf81lNEaFFw8Wuk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9SWk1QWFlaOC5qcGc" },
  { title: "Aula Inaugural - Santander Bootcamps 2023", img: "https://assets.dio.me/oz3pOb58sZWWMwhdJx1rWKgxXZ7jAg9vllDt22U5lDM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HTzZMUUw5Mi5qcGc" },
  { title: "Conheça o Banco Carrefour", img: "https://assets.dio.me/wO0tEMvEAJbjOFGbRccimiVs_rzRI8Wa8ya4_Qz8VzA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9SUkpMTTdZTy5qcGc" },
  { title: "Introdução ao domain driven design e padrões de arquitetura", img: "https://assets.dio.me/fqQcks5NQHe7YVOMoFELJ3gFksrz_nDbnffWpdjDcEM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TTllOMDZURi5qcGc" },
  { title: "Formação Angular Developer", img: "https://assets.dio.me/0sWAD6EttBMh6xWWF9N8cmoCKrLlRATZG-5WBpx3-xY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CWFdYTEFCSi5qcGc" },
  { title: "Manipulando Fluxos no Angular", img: "https://assets.dio.me/F_WZ-G85FP2_ox8hoPLPwlVOToBy9FjeQgJDBOxSONM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NVEFUMk0wSS5qcGc" },
  { title: "Avalie a Formação de Angular Developer", img: "https://assets.dio.me/-En_S5F1tUq_wRdiSQo23-Xnkz7zUKmK6mYfjbkH31w/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9XUkVaRzlXSi5qcGc" },
  { title: "Materiais Complementares - Manipulando Fluxos no Angular", img: "https://assets.dio.me/eXNQPkFYPl-K0twgKlAqShWBZHeSrTJJjRe5YEOIqQA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9WNUtYQlM3Si5qcGc" },
  { title: "Criando um Clone do BuzzFeed com Angular", img: "https://assets.dio.me/-0S1hHjgESPtrhXMT_iKzjSgn-SEjzIWVUwjKkVacGs/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CNlZZTzVEWi5qcGc" },
  { title: "Trabalhando com Guards no Angular", img: "https://assets.dio.me/IpEY2iVex2ZQ1yN0-yed5q-SIN8sWH96Lzjofl9wb2Y/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci81S01YTEhCUy5qcGc" },
  { title: "Trabalhando com Pipes no Angular", img: "https://assets.dio.me/r0cC8ISkG7DLdIwcoOqmZf5smNVHKZ0HR-qx8ACZmEo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VUUNHN1hWUy5qcGc" },
  { title: "Aplicações Inteligentes com Angular", img: "https://assets.dio.me/5rURQmCIvzG_vJYmfMgu7Q6ulM6pUBKPSRb8E8YyLjw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ENlNEMDEyRS5qcGc" },
  { title: "Materiais complementares - Aplicações inteligentes com Angular", img: "https://assets.dio.me/9lIEbYZUL7ZJ0tptcKjwT3_NLWws9ZAU82HRq3-Nmq8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9IN0dFQUNCSi5qcGc" },
  { title: "Recriando a Interface da PlayStation Store com Angular", img: "https://assets.dio.me/oxSqa9QIEIHjZLrusH8d7bs0QEA0S_VPEIHE8ZSDCRQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BRlpIUk5JSy5qcGc" },
  { title: "Single Page Application com Angular", img: "https://assets.dio.me/ceiRd9jGDgxnMBjvIRc8BEG1kkuxZI3DLDMqpcfCIs4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9QNkpGWEJBMC5qcGc" },
  { title: "Mentoria Bônus: React vs. Angular - Existe Realmente uma Batalha?", img: "https://assets.dio.me/oVeUz6njS2H-jnMArANaVEF7H0s3_f0w8FIz3FFVSYM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci80SlM4Qlg2Si5qcGc" },
  { title: "Trabalhando com Services no Angular", img: "https://assets.dio.me/u525VXmQ5LCeEN8t4G-mX0TzRckTA6XTXDuTDP4GCSo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9WU1pPR1NWMC5qcGc" },
  { title: "Trabalhando com Rotas no Angular", img: "https://assets.dio.me/GwCEbWgXh0msA2sOJJUqKn7yxZf00xpOoQ7kZX7nhWw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9KVkVLQ0FCRS5qcGc" },
  { title: "Criando um E-commerce Simples de Filmes com Angular", img: "https://assets.dio.me/XTSpQIyIJJ8K7sLWBCVRQBnK9VKA5sH5vvgDC8UF4CM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9MTVhIVzJSUy5qcGc" },
  { title: "Materiais Complementares: Single Page Application com Angular", img: "https://assets.dio.me/th9sEP6xfMP4_I6zvduA7_DoGxbgwaun11G_cmdH6cU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9RTURNWVlTMS5qcGc" },
  { title: "Criando um Blog com Angular", img: "https://assets.dio.me/HZgYVmLWhVxaRhborg4a2P-DjvJvGgq9TxDIQ7Hk8H4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8zTUlYOVBIRC5qcGc" },
  { title: "Introdução à Inteligência Artificial", img: "https://assets.dio.me/ZVSV4EOa8J7tCAnh2zKDgLCDHOIKxo-63zgEMjI9IXk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9aN1pHWUs3UC5qcGc" },
  { title: "Introdução ao Exame de Certificação AWS Cloud Practitioner", img: "https://assets.dio.me/vh6RMBJH7RA9ro_hbtDBpMBlRhprkW9-Kh2Mqn9KJbk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9OTVdUMFhWWC5qcGc" },
  { title: "Módulos Angular", img: "https://assets.dio.me/5WlWLCbwyOl8dfXrsMO7Z7ymuoVUCs-4wz5nj7pox0Q/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8wUEtWTlNVNi5qcGc" },
  { title: "Single Page Application com Angular", img: "https://assets.dio.me/u4MnhUHwrUk3DAYEO7ZGCX_4PkhamuyOcTVeY2sPwrw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VTUFITVk0Mi5qcGc" },
  { title: "Introdução ao Angular", img: "https://assets.dio.me/npWWzNd-SZ7zzo6b2CC_K-Jd_CKtUw2dukWadd4CB7w/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YSUxIQzdEVy5qcGc" },
  { title: "Materiais Complementares: Introdução ao Angular", img: "https://assets.dio.me/MxVaZFzfXkcu0dF3DpWcaxdxzuTsvIXLXoU5Cn0agic/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9KSVFCODlYSi5qcGc" },
  { title: "LifeCycle Hooks Angular", img: "https://assets.dio.me/j0JyqG6f5Sudgvv-r7rksJUa_BB-M3KrOjHmJHST9os/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YVVdSVjJYTi5qcGc" },
  { title: "Fundamentos do Angular Framework", img: "https://assets.dio.me/kXIazKuqSY_fDzgXScGzah0b9gVqOdYDH0Eb0u-MMkQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9LTkRRRVg0QS5qcGc" },
  { title: "Trabalhando com Componentes Angular", img: "https://assets.dio.me/dZoGMK8cV8bdUXXuVL360J-IBVlMjIwV5rmOQzUfL4k/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9aSjlQQVdWUC5qcGc" },
  { title: "Introdução ao Ecossistema Angular", img: "https://assets.dio.me/kRoZXnvgaGbYOLYgaAsbo5hqkLyPupnwC03UBRKCP7k/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83QTFTWVVFUS5qcGc" },
  { title: "Fundamentos de Front-end Componentizados", img: "https://assets.dio.me/qsDTq4B-fCQh4m4yMAdKo_5ytC-5lmeZm3ubxOFOOss/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xUEM2SFhNMS5qcGc" },
  { title: "Materiais Complementares: Fundamentos de Front-end Componentizados", img: "https://assets.dio.me/nmVy78Vmc1C2N9Gm8aqokayhZ9EVVJQSDOCVP6qfLV4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9SUVdIWkZHUi5qcGc" },
  { title: "TypeScript para Angular", img: "https://assets.dio.me/QYKSjVnnp8N-3Ryny6ahCVy-ZcqaiiH-nhQkFHPUi3Q/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85MVZVSE84Wi5qcGc" },
  { title: "Trabalhando com Web Components no Front-end", img: "https://assets.dio.me/E6afiinQylN_vrVLNR6SazwTQWq8x1I5bWz_30w5YRg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9QUEU1V01TTi5qcGc" },
  { title: "Boas-vindas a Formação Rumo à Certificação AWS Cloud Practitioner", img: "https://assets.dio.me/lEhlvOyO1ZPnZx_exl5_XIVoARtYo1UapiozP6jEZ7U/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yMEZCMzgzRC5qcGc" },
  { title: "Bootcamps DIO: Educação Gratuita e Empregabilidade Juntas!", img: "https://assets.dio.me/UKB42IWJutwzhPSQvRo4k70Bd8x_SnjtUHweEmJ_fSU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FM0Q3REUwNy5qcGc" },
  { title: "AWS Official Content - Introdução à Amazon Web Services (AWS)", img: "https://assets.dio.me/Lr3DBwVN-xPJvpRc03qZ4dsuoc0jemBsGSnOAjF7mAs/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FREEwQTEzNC5qcGc" },
  { title: "Entendendo a Base do Aplicativo Reactive", img: "https://assets.dio.me/CgdbL5YkHfvBMkd1YQRquFYAf_lWflea-gJHqX1l5Sk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BQkUzNjQ3Ny5qcGc" },
  { title: "Lógica de Programação em OutSystems", img: "https://assets.dio.me/IVJ-B_o2RV-vACSh4_EIq2daKxDzPCodsV3-9liZkZY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DRDU0NkFDNy5qcGc" },
  { title: "Conhecendo os Serviços da AWS", img: "https://assets.dio.me/hbSj-4kDZmERP87N0wI1UUzmR2o1fk4IheVVIcv-m0Y/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DNTdDQzdDNC5qcGc" },
  { title: "Descubra a Nuvem", img: "https://assets.dio.me/TePvpYYvIhDascep7hP0_CV7pPevSpuc_v4f3BzzrtQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xNDFDMThCMC5qcGc" },
  { title: "Primeiros Passos com OutSystems", img: "https://assets.dio.me/_1u7Iv1unPjBfrS4bCG0H7kGkp3uuOWcP6N4_dkcUm0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DNUVDQTAzQi5qcGc" },
  { title: "Mentoria Bônus: Carreira OutSystems - Bate-papo com Davidson Vilela", img: "https://assets.dio.me/11mXIV2nMTar-XKuwIcF_CGGvp9cUlP-u5qA3Hn3g80/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82NDNBMjVFOS5qcGc" },
  { title: "Introdução ao Ecossistema OutSystems", img: "https://assets.dio.me/9dks4ji8eOF5MUrlptvKXBQBqvtAVDXQe8s3yu_R3Qs/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85OTAwMjExQi5qcGc" },
  { title: "Introdução ao Agile", img: "https://assets.dio.me/9SvfXiEAlk-yznnn8CvvMI6zpwK_NmTRhstlwvC-uc8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82QkVBODI4MS5qcGc" },
  { title: "Introdução ao Desenvolvimento Low-Code", img: "https://assets.dio.me/TfSjcsx8cueLekFR7upZV-AFRzsgF-dmVUACS3GQwPk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci81NThBODk2RC5qcGc" },
  { title: "Onboarding: Conhecendo a Formação OutSystems", img: "https://assets.dio.me/eStqpXvsLjbzfBX1HPqW4heQysBxowdknfPeEE-n6K8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci81RDE5NDE5My5qcGc" },
  { title: "Gerenciando Usuários no Linux", img: "https://assets.dio.me/j18zLox1iljz7kOTqaymKgHXxW5Mko6yxNBya-LrGcQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DQzhEMjczRi5qcGc" },
  { title: "Manipulando Arquivos no Linux", img: "https://assets.dio.me/c6gLsMiPJP5YxwyiGNFpPzUp2pHJaD0HfSujAG7fUWo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yNjA2NEI4MC5qcGc" },
  { title: "Acesso Remoto a Máquinas Linux", img: "https://assets.dio.me/nylYXFw7bblXYTEziYsHo29UbS_k_ZyfMJ1TSTozWew/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FRkY4MjUxMy5qcGc" },
  { title: "Instalando o Linux", img: "https://assets.dio.me/jOM9QFMRABUnl-d4RMMMXq4FxTVaOJQSq7jHP-FnCss/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FRDBDODgyRi5qcGc" },
  { title: "Prepare-se Para a Jornada", img: "https://assets.dio.me/V0PcHYGmU6hfiJxOrnuGLBbVnEljz-vRLNVJ-mp5UR4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8wNjAyNzA4MS5qcGc" },
  { title: "Bootcamp Cloud AWS | Aula Inaugural", img: "https://assets.dio.me/rngUsaQ0G34_SKFnEUO71FmTMykAISWV_QXYAK1S2lA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BQzk0OTQzQi5qcGc" },
  { title: "Introdução ao Sistema Operacional Linux", img: "https://assets.dio.me/hWKQSKce4x3MTqM3DM7cRrlCvIbJf18pDXdd_Kt98rQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83QkE0N0U2QS5qcGc" },
  { title: "Introdução ao Desenvolvimento Moderno de Software", img: "https://assets.dio.me/-AaLYhQAx7sgQQnlRbexhjJVhphnvNUMNMyvwE34HvQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85QkM1QjIxRS5qcGc" },
  { title: "Seja Protagonista Neste Bootcamp", img: "https://assets.dio.me/Es6AT1Z7PPbxg0XBUKj9qIyZAfj0RXzchzFOB-8OPGI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9GNzA3MDhFOC5qcGc" },
  { title: "Boas-vindas ao Bootcamp Cloud AWS", img: "https://assets.dio.me/LYthgUt90Tp_TEMGLkiCRJofvqulz1kmjOTheYosVEI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83QkZDRDExMi5qcGc" },
  { title: "Conheça as Oportunidades da DIO", img: "https://assets.dio.me/RS90euY7mu9J9BriuDBYAdeZcrPPWJ_Yyo3roN1KkxY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DQkU3QUZFNi5qcGc" },
  { title: "Conceitos de responsividade e experiência do usuário", img: "https://assets.dio.me/D-Ay10JkUMWaGrwmEXYMDSdHa0O3Z6CTIPp1entuCrk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83NDVGQkEwRi5qcGc" },
  { title: "Boas-vindas ao Bootcamp Eduzz Fullstack Developer #3", img: "https://assets.dio.me/hH2pr__KDWonk4_iI_5AqgZUtoZDOcB9ZDc2Z01SfVc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CMEQzNjY1RC5qcGc" },
  { title: "Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces", img: "https://assets.dio.me/Q5hOj3QbVnuMWkV7f5QfuAS2JIGrE7hmoYus7k_y75A/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CNEI0NUQyRi5qcGc" },
  { title: "Boas-vindas ao Bootcamp Eduzz Fullstack Developer #2", img: "https://assets.dio.me/lWVGVU43Xm5dwbcVovXlWxLP1Wt3fH6Fo1TahHTVe20/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yMkVBOTQzRC5qcGc" },
  { title: "Fundamentos de JavaScript Assíncrono", img: "https://assets.dio.me/CUTz72VEm61aBkJoy_UrClzSJbjq03B5ski0XEu99cU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FNENGMjZGMS5qcGc" },
  { title: "Map, Filter e Reduce", img: "https://assets.dio.me/iVAQ9t7I6BJFzWCPkfzIbQQETcNuXFl09cw6-281rUc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BRjVBRDY2My5qcGc" },
  { title: "Orientação a Objetos com JavaScript", img: "https://assets.dio.me/OjjL_sJeSy4KkTr34a_9C5kCMlP9tlIuE7zbGqxeLmA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8zMkU2MzM0Ri5qcGc" },
  { title: "Debugging e Error Handling com JavaScript", img: "https://assets.dio.me/Cpz8ANbnqgIayDGBH4rKzxmTirdB5lWiL6CXlOi7cfg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CMEE2MjYxRS5qcGc" },
  { title: "Trabalhando com Módulos em JavaScript", img: "https://assets.dio.me/-WUfR16JCt0IXc1OwNhdcwBWPlpsg85DJABEkcWEcXo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yNDRENkZDNy5qcGc" },
  { title: "Trabalhando com Módulos em JavaScript", img: "https://assets.dio.me/qHbchU_abl6R332lZa5hANl6ZpxD5Jx6LTgPeESpQSA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FMTY3QTZGOS5qcGc" },
  { title: "Recriando o Famoso Jogo do Dinossauro sem Internet", img: "https://assets.dio.me/eYsfc4sBiEz6uk5Yod6NzKBDJSWq8aklvH_LeI6nfLY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci84NDY4MDA0Ni5qcGc" },
  { title: "Manipulando a D.O.M. com JavaScript", img: "https://assets.dio.me/Fcgn72URJKLmTFpIbfH6HGxjZPl3Sks_lmzwQKVyim0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xMzQ2REFFRS5qcGc" },
  { title: "Mapas e Conjuntos com JavaScript", img: "https://assets.dio.me/NkkROsFD4z10MJNMECtffV-2JUE8NfJ4I9Xpyxa5EDM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82MjAxNzBDMC5qcGc" },
  { title: "Dominando Funções em JavaScript", img: "https://assets.dio.me/EsuqdPYilDzCXYSFzDyKv8VPxEdaMA_bxpG6kD6I6v8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8zRUMxMDQ3NS5qcGc" },
  { title: "Variáveis e Tipos com JavaScript", img: "https://assets.dio.me/FkXFM0wLQlEfc6x5KIxQ3JeoBabmCtlYhCzVLVOja0Q/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci84NzgwRjVCOS5qcGc" },
  { title: "Sintaxe e Operadores JavaScript", img: "https://assets.dio.me/_PsYbZ_jfiVLtrSQCz6BUFHfkULD874HTAJYkxnm9T0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yRTU3RTE4NS5qcGc" },
  { title: "Posicionando elementos com Flexbox em CSS", img: "https://assets.dio.me/GNFYR-Gz-1VEEKei1LgskW9PtHla2lQujGpBpf1oKx8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xOEQ3MzM0Ny5qcGc" },
  { title: "Instalação e Configuração do Visual Studio Code", img: "https://assets.dio.me/m2Ecm7wC9F7GGX64UGOAkFMPCEuMjie9z3LjxCe6G00/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DMzE0QkUxMy5qcGc" },
  { title: "Desenvolvimento avançado com JavaScript ES6", img: "https://assets.dio.me/rmG0jocJMOdRKu6o9O7p9hx23g77j0zby5t1Cb4ecvw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yM0ExMzJDRC5qcGc" },
  { title: "Boas-vindas ao Bootcamp Impulso React Web Developer", img: "https://assets.dio.me/UgJxz2WKLXXpkOIr4pUlEA3XZn8eo42AXojBHrNnDU4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yNUI2NTNDMC5qcGc" },
  { title: "Resolvendo Desafios de Código em Javascript", img: "https://assets.dio.me/hvXcG-Qj6hYcJS3XVrBgh_PKrNATM8kI19qD2l5Wc_M/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8wQjg0QTc3OS5qcGc" },
  { title: "Criando seu Jogo de Memória Estilo Genius", img: "https://assets.dio.me/tVv2K_n3dgo6vsCYkmaSXdTHLnLJy1sMngrI9NK0COw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci80RkI3MDExQi5qcGc" },
  { title: "Desmistificando map, filter e reduce", img: "https://assets.dio.me/ONeqqiejrAdnbK30kHYMsJmAObkt5F6I9iuGXwyKPVs/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83RUMwRkI5Ny5qcGc" },
  { title: "Construindo o seu Primeiro Jogo de Naves", img: "https://assets.dio.me/x2_MrrBhN93QycO-TygbiKsnWbMcWHaTs0DUt2CgnMM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CMjRGNDkzMi5qcGc" },
  { title: "Criando seu Primeiro Repositório no GitHub Para Compartilhar Seu Progresso", img: "https://assets.dio.me/ajFf4KG93ZjG0vxGdONP2OPnrlboMeZeMPK116f0mD8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82RDZBRUY4OS5qcGc" },
  { title: "Recriando a Interface do Netflix", img: "https://assets.dio.me/7vtosbcLl95-ZQAvTK0vBuCV2MVaJLuwYznZkLwK6f4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8wODY4N0FCRC5qcGc" },
  { title: "Boas-vindas ao Bootcamp Eduzz Fullstack Developer", img: "https://assets.dio.me/YgGmL0eNU4nKcaX4V-bb5NF-1BzBR-HPJn13T1E0lJU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci81MDQ5QjMyRS5qcGc" },
  { title: "Projetos ágeis com SCRUM", img: "https://assets.dio.me/y5h2Hqjx4z8T1rR01I1dkuvNNrwvz9tOKDZlTFDK4yg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83Njg4QjZFMS5qcGc" },
  { title: "Conceitos de responsividade e experiência do usuário", img: "https://assets.dio.me/jX1Q8zZ6tSDnccrEf87ah2kFmx0R768LMvG6X9NFjjs/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xQTQ3MUZFOS5qcGc" },
  { title: "Recriando a Página Inicial do Instagram", img: "https://assets.dio.me/Q_NM0PgVMrY_rQ1NYVWt6tA_pDXcEkfk8BzrWWr7UCg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci80OTRCMEQ5NS5qcGc" },
  { title: "Configuração da Suíte de Testes e Aplicando Testes Integrados em .NET", img: "https://assets.dio.me/eJCkgprMsR5h9FifmX4PzxpJrNRKDnX3OmZLqTmqwO4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8wMjcyNjJGMy5qcGc" },
  { title: "Desenvolvendo sua aplicação com C# usando DDD", img: "https://assets.dio.me/aPM7HHWUa2brjnpNUN454DK39tiFTLLJN-HpyQ-jqhM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CNjUzNUVFNi5qcGc" },
  { title: "Introdução a Qualidade de Software", img: "https://assets.dio.me/aIndprHzxr1YHVe30hU5ogUgqsD6TxEQsJxSwuCPFtg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83OThGMTMxNS5qcGc" },
  { title: "Introdução a Design Patterns com .NET", img: "https://assets.dio.me/rI61fbT-OH1PlBHZJuunkHPxrGRFMfDLY7-AsdNo12c/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DQjgwOTdFQy5qcGc" },
  { title: "Desenvolvimento de aplicações para internet com ReactJS", img: "https://assets.dio.me/nz-c6j-Q9Sa3idwGYHx1mO9YS8zeTRMotZaZOWXih6k/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82QUYzNkFDNC5qcGc" },
  { title: "Práticas avançadas em projetos com ReactJS", img: "https://assets.dio.me/1x-CI-RFQXZZElax6_esHcWANuRycV7fnYNTgKfaOUY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82NzEyQkY4RS5qcGc" },
  { title: "Trabalhando com Componentes em React", img: "https://assets.dio.me/q28JaYXhn3xlWQi8ZNE7el1Vq-5jNuCRdXlhamAtlOw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CMzUxNjMwQS5qcGc" },
  { title: "Introdução ao ReactJS", img: "https://assets.dio.me/LhfUK-M8Suwi_fHfr6Iu_d9vP_r4ggIMHH1nENwR358/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DOTkxNURFNS5qcGc" },
  { title: "Introdução a microsserviços com .NET", img: "https://assets.dio.me/DVk48azMFIUDkttId8uxwOuC88KxRQO1Bd4zyrbykMo/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85NTRFOEQzMC5qcGc" },
  { title: "Construindo um Projeto de uma API.NET Integrada ao MongoDB", img: "https://assets.dio.me/4_ZwHRanvHu0evFRt9-YCnFPHgPhRfjP7xXx_DXBdME/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82QjYwODRCMS5qcGc" },
  { title: "Criando um Catálogo de Jogos Usando Boas Práticas de Arquitetura com .NET", img: "https://assets.dio.me/tV748MIBG-rjcTxleOF_akpBSieXdkaE5e-KZJ9FPm4/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DMUE0OENGRC5qcGc" },
  { title: "Instalando o Visual Studio e SDK", img: "https://assets.dio.me/zHjT3iJbb7rTwa_2TfztZH_c9okzS1tG-NFC0bFdJZ0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci80QjlFNUE1Qy5qcGc" },
  { title: "Boas-vindas ao Bootcamp Carrefour Android Developer", img: "https://assets.dio.me/zKmOSsy15wC_DsbkiBiM6KY1Tjt9IcSHRBYnKnEGn-s/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci80OTU3QTdCOS5qcGc" },
  { title: "Configuração da arquitetura back-end com .NET Core", img: "https://assets.dio.me/RMq_BZKce9jNbTIswrQOonWRImjwqAo1GeksjCqk2Jw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BRDY5NkNCNS5qcGc" },
  { title: "Arquitetura de Sistemas Avançado", img: "https://assets.dio.me/mGreY4Gf9DZGBtMyOVmembvh1hvdXVJdQdd4hXsiV_0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xRjRGMDZFRS5qcGc" },
  { title: "Fundamentos de Arquitetura de Sistemas", img: "https://assets.dio.me/h6rFMm9elJJaKz4p0Rn_RrsZqcpanF8cUfjMKR_nWW0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xOTEzQzA4OC5qcGc" },
  { title: "Criando um APP Simples de Cadastro de Séries em .NET", img: "https://assets.dio.me/-FBwpGkcFnYmpBv2PZXFTK7n8huoBzPlkyLZdfEnCAU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yMTVCQkJCMC5qcGc" },
  { title: "Desenvolvimento de aplicações com .NET", img: "https://assets.dio.me/m_u9dYcJaobH9esSjvCW2xh53u1Eookuxq4g7Mj4uKA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82RkEwRUE5RS5qcGc" },
  { title: "Orientação a objetos em .NET", img: "https://assets.dio.me/-viC-n_4HNjLZXO3d5yQiSKv8_exZiMm6fDm8s9g2Uk/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci81MzIxNDYzOC5qcGc" },
  { title: "Primeiros passos com .NET", img: "https://assets.dio.me/_v5jD5zlDdOCVzCnQC104fASEYYF1M3RrIsLp3S52LE/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9GRkQ5OEQ1MS5qcGc" },
  { title: "SQL SERVER - Criando suas primeiras consultas", img: "https://assets.dio.me/RJbRMhTJXO_SkZTvn-POm6ZyJl7fWCUM9PIF2GHjhvI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85OTlGQ0EyOS5qcGc" },
  { title: "Conceitos e Melhores Práticas com Bancos de Dados PostgreSQL", img: "https://assets.dio.me/iGlsxEI7y23F3WLW7xo-0qF5S7mv_2n-hFPbsgGTRWs/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BN0FEMkNFMi5qcGc" },
  { title: "Boas-vindas ao Bootcamp Code Anywhere", img: "https://assets.dio.me/UEHAc035ImLeLbs-jlmFtBENw_hivTGTgb4X9-KEo4M/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CMDlEMTA2My5qcGc" },
  { title: "Programação para internet com JavaScript", img: "https://assets.dio.me/hUH9UaN0yhupDcrOpGMkamExrFPq5zXOlaodCzxbOCw/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yQ0Q2Q0RFQy5qcGc" },
  { title: "JavaScript ES6 essencial", img: "https://assets.dio.me/-b6HG1i_gbjijCZQu5Rgsb3if7BgLHDtIRBp7W0Kceg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci82RDRFOUQ4OS5qcGc" },
  { title: "Introdução a Criação de Websites com HTML5 e CSS3", img: "https://assets.dio.me/tCHhLGyltnQTf9p0mnIcPvQ11IV8ssEidU-NrGOs3Ho/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8yNEM0MzQ4Ny5qcGc" },
  { title: "Boas-vindas ao Bootcamp everis New Talents .NET", img: "https://assets.dio.me/r-8xSASwUuo_Wp2XjEGKbC4FHGtrzPY7FHvBeVGTWEA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85NDYwNzgyNi5qcGc" },
  { title: "Aprenda o que são Estrutura de Dados e Algoritmos", img: "https://assets.dio.me/iJvTU9lL38Rut2YhKFS3ppdfOEwnX8vcMpTcvwxquME/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85QTg5NEM1RS5qcGc" },
  { title: "Lógica de Programação Essencial", img: "https://assets.dio.me/drTF_WoBYJAeFS9yRfVCyhX7G9kEjeomCS07MKNtd_8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8zOUI5RDFGRC5qcGc" },
  { title: "Boas-vindas ao Bootcamp LocalizaLabs React Developer", img: "https://assets.dio.me/vMGopjrok3OpYizHvHBMZIEaZFsfrmNGjCmWXSPmOoY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci85NUE1NzQzRi5qcGc" },
  { title: "Introdução ao Git e ao GitHub", img: "https://assets.dio.me/VGEIR6JF4jHnf51onJzGBWuvIC-ddOwo4sKsbQzRLJ0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DMUE5RUY5QS5qcGc" },
  { title: "Lógica de programação Essencial", img: "https://assets.dio.me/4A-HCRivreaDbNP-o5jyP81Ux1liNOtRzPund6UtR-o/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FQjMzOEFERi5qcGc" },
  { title: "Bem-vindo à DIO", img: "https://assets.dio.me/Fs9XnX26oo99PlOMmOuXp5ZrmqnVhpQ3SFvS-RJEghY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9GREE3MUYzNC5qcGc" },
  { title: "Boas-vindas ao Bootcamp Take Blip Fullstack Developer", img: "https://assets.dio.me/NKT-W-N0MpZWVuIWyHtMRZHl4LXG5rspcIR1s5P6Nv8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xMDRCRTIzNy5qcGc" }
];

// Pagination State
let currentPage = 1;
let searchQuery = '';
const itemsPerPage = 30;
const maxPageLinks = 5;

// DOM Elements
const certGrid = document.getElementById('cert-grid');
const certPagination = document.getElementById('cert-pagination');
const certSearch = document.getElementById('cert-search') as HTMLInputElement;
const certStats = document.getElementById('cert-stats');
const certModal = document.getElementById('cert-modal');
const certModalImg = document.getElementById('cert-modal-img') as HTMLImageElement;
const certModalTitle = document.getElementById('cert-modal-title');
const certModalClose = document.getElementById('cert-modal-close');
const certModalOverlay = document.getElementById('cert-modal-overlay');

// Render Certificates
function renderCertificates() {
  if (!certGrid) return;
  
  certGrid.innerHTML = '';
  
  const filteredCerts = certificates.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = filteredCerts.slice(startIndex, endIndex);

  if (pageItems.length === 0) {
    certGrid.innerHTML = '<div class="col-span-full text-center py-12 text-white/20 uppercase tracking-widest font-bold">Nenhum certificado encontrado</div>';
    return;
  }

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
  
  const filteredCerts = certificates.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredCerts.length / itemsPerPage);
  
  if (totalPages <= 1) return;

  // Left Arrow
  const prevBtn = document.createElement('button');
  prevBtn.className = `p-1 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : ''}`;
  prevBtn.innerHTML = '<i data-lucide="chevron-left" class="w-4 h-4"></i>';
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      updateUI(false);
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
    pageBtn.className = `w-7 h-7 rounded-lg border text-[10px] font-bold transition-all ${
      currentPage === i 
        ? 'bg-cyan-500 border-cyan-500 text-black' 
        : 'border-white/10 hover:bg-white/5 text-white/60 hover:text-white'
    }`;
    pageBtn.innerText = i.toString();
    pageBtn.onclick = () => {
      currentPage = i;
      updateUI(false);
    };
    certPagination.appendChild(pageBtn);
  }

  // Right Arrow
  const nextBtn = document.createElement('button');
  nextBtn.className = `p-1 rounded-lg border border-white/10 hover:bg-white/5 transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : ''}`;
  nextBtn.innerHTML = '<i data-lucide="chevron-right" class="w-4 h-4"></i>';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateUI(false);
    }
  };
  certPagination.appendChild(nextBtn);

  createIcons(iconsConfig);
}

function renderStats() {
  if (!certStats) return;
  
  const filteredCerts = certificates.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  certStats.innerHTML = `
    TOTAL: ${certificates.length} <span class="mx-2 text-white/10">•</span> FILTRADOS: ${filteredCerts.length}
  `;
}

function updateUI(scroll = true) {
  renderCertificates();
  renderPagination();
  renderStats();
  
  if (scroll) {
    // Scroll to section start on page change
    const section = document.getElementById('certificacoes');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
updateUI(false);

// Search Event
certSearch?.addEventListener('input', (e) => {
  searchQuery = (e.target as HTMLInputElement).value;
  currentPage = 1;
  updateUI(false);
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

// PDF Generation Logic
const printBtn = document.getElementById('print-btn');
const mobilePrintBtn = document.getElementById('mobile-print-btn');

const generatePDF = () => {
  const doc = new jsPDF();
  const margin = 15;
  let y = margin;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const checkNewPage = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  // Header
  doc.setFontSize(26);
  doc.setTextColor(0, 180, 216); // Cyan
  doc.text('RICARDO FURTADO REIS', margin, y);
  y += 8;
  
  doc.setFontSize(14);
  doc.setTextColor(100);
  doc.text('Desenvolvedor de Sistemas', margin, y);
  y += 10;

  // Contact Info
  doc.setFontSize(11);
  doc.setTextColor(0);
  doc.text('WhatsApp: (011) 98363-2445', margin, y);
  y += 5;
  doc.text('Email: ricreis71@gmail.com', margin, y);
  y += 5;
  doc.text('LinkedIn: linkedin.com/in/ricardo-furtado-reis-04a47314a/', margin, y);
  y += 5;
  doc.text('GitHub: github.com/RicardoFreis', margin, y);
  y += 10;

  // Sobre
  doc.setFontSize(16);
  doc.setTextColor(0, 180, 216);
  doc.text('SOBRE', margin, y);
  y += 6;
  doc.setFontSize(11);
  doc.setTextColor(0);
  const sobreText = "Desenvolvedor de sistemas com mais de 8 anos de experiência. Focado em entregar código limpo e soluções eficientes.";
  const splitSobre = doc.splitTextToSize(sobreText, pageWidth - (margin * 2));
  doc.text(splitSobre, margin, y);
  y += (splitSobre.length * 5) + 10;

  // Educação
  checkNewPage(30);
  doc.setFontSize(16);
  doc.setTextColor(0, 180, 216);
  doc.text('EDUCAÇÃO', margin, y);
  y += 6;
  doc.setFontSize(11);
  doc.setTextColor(0);
  doc.text('Engenharia da Computação - Universidade São Judas Tadeu (Não concluído, encerrado no 2o ano)', margin, y);
  y += 5;
  doc.text('Processamento de Dados - Colégio Brasil (Concluído)', margin, y);
  y += 5;
  doc.text('Ensino Primário - Escola Alvino Bittencourt (Concluído)', margin, y);
  y += 10;

  // Habilidades
  checkNewPage(30);
  doc.setFontSize(16);
  doc.setTextColor(0, 180, 216);
  doc.text('HABILIDADES', margin, y);
  y += 8;
  doc.setFontSize(11);
  doc.setTextColor(0);
  const skills = [".NET", "C#", "JAVASCRIPT", "SQL SERVER", "GIT", "HTML5", "CSS3", "COBOL", "ASPNET.MVC", "ASPNET.CORE", "VB6", "VB.NET"];
  const colWidth = (pageWidth - margin * 2) / 4;
  
  for (let i = 0; i < skills.length; i += 4) {
    doc.text(`• ${skills[i]}`, margin, y);
    if (skills[i+1]) doc.text(`• ${skills[i+1]}`, margin + colWidth, y);
    if (skills[i+2]) doc.text(`• ${skills[i+2]}`, margin + colWidth * 2, y);
    if (skills[i+3]) doc.text(`• ${skills[i+3]}`, margin + colWidth * 3, y);
    y += 5;
  }
  y += 10;

  // Experiência
  doc.setFontSize(16);
  doc.setTextColor(0, 180, 216);
  doc.text('EXPERIÊNCIA PROFISSIONAL', margin, y);
  y += 6;

  const experiences = [
    { 
      company: 'Atos Brasil', 
      role: 'Analista Programador', 
      period: '01/12/2021 - 10/07/2024',
      bullets: [
        'Projetos financeiros internos: Criação, manutenção e relatórios Excel; Tradução do sistema para 3 idiomas (PT, ES, EN); Cálculos de custos, despesas e receitas.',
        'Locação Volkswagen: Projeto na campanha do carro Polo de 2023; Processamento de arquivos XML para base SQL e geração de notas fiscais; Relatórios Excel.',
        'Locação CPFL Energia: Geração de scripts para criação de registros e alterações de dados; Manutenção de sistemas e relatórios.'
      ]
    },
    { 
      company: 'Hayashi Informática', 
      role: 'Analista Programador', 
      period: '06/03/2017 - 20/10/2017',
      bullets: [
        'Desenvolvimento completo de um sistema de automação comercial.',
        'Implementação de API para cálculo e emissão de cupom fiscal eletrônico.',
        'Implementação de SAT-CF-e (Sistema Autenticador e Transmissor de Cupons Fiscais Eletrônicos).'
      ]
    },
    { 
      company: 'Cedesi Informática', 
      role: 'Programador', 
      period: '02/05/2000 - 17/02/2003',
      bullets: [
        'Criação, manutenção e relatórios de diversos sistemas legados e novos.',
        'Sistemas atendidos: Contas a pagar/receber, Faturamento, Automação de Farmácia, Folha de Pagamento, Contas Correntes, Controle de Estoque e Contabilidade.'
      ]
    },
    { 
      company: 'Cedesi Informática', 
      role: 'Programador', 
      period: '01/04/1991 - 15/01/1996',
      bullets: [
        'Criação, manutenção e relatórios de diversos sistemas legados e novos.',
        'Sistemas atendidos: Contas a pagar/receber, Faturamento, Automação de Farmácia, Folha de Pagamento, Contas Correntes, Controle de Estoque e Contabilidade.'
      ]
    }
  ];

  experiences.forEach(exp => {
    checkNewPage(35);
    doc.setTextColor(0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${exp.role} - ${exp.company}`, margin, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(exp.period, margin, y);
    y += 6;
    doc.setTextColor(0);
    doc.setFontSize(11);
    
    exp.bullets.forEach(bullet => {
      const splitBullet = doc.splitTextToSize(`• ${bullet}`, pageWidth - (margin * 2) - 5);
      checkNewPage(splitBullet.length * 6);
      doc.text(splitBullet, margin, y);
      y += (splitBullet.length * 5.5) + 2;
    });
    y += 3;
  });

  y += 10;

  // Cursos e Certificações
  checkNewPage(30);
  doc.setFontSize(14);
  doc.setTextColor(0, 180, 216);
  doc.text('CURSOS E CERTIFICAÇÕES', margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setTextColor(0);

  // List more certificates to fill 2nd page
  const topCerts = certificates.slice(0, 100);
  const col1X = margin;
  const col2X = margin + (pageWidth - margin * 2) / 2;
  
  for (let i = 0; i < topCerts.length; i += 2) {
    if (checkNewPage(7)) {
      // If we are on page 3, stop
      if (doc.getNumberOfPages() > 2) {
        // Remove the last page if it's empty or just started
        doc.deletePage(3);
        break;
      }
      doc.setFontSize(14);
      doc.setTextColor(0, 180, 216);
      doc.text('CURSOS E CERTIFICAÇÕES (Cont.)', margin, y);
      y += 8;
      doc.setFontSize(10);
      doc.setTextColor(0);
    }
    
    doc.text(`• ${topCerts[i].title.substring(0, 48)}`, col1X, y);
    if (topCerts[i+1]) {
      doc.text(`• ${topCerts[i+1].title.substring(0, 48)}`, col2X, y);
    }
    y += 6;
  }

  // Footer
  y = pageHeight - 15;
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text('Para acessar todos os cursos acesse a versão digital: www.ricardo.com.br', pageWidth / 2, y, { align: 'center' });

  doc.save('Curriculo_Ricardo_Furtado_Reis.pdf');
};

printBtn?.addEventListener('click', generatePDF);
mobilePrintBtn?.addEventListener('click', generatePDF);

// DOCX Generation Logic
const docxBtn = document.getElementById('docx-btn');
const mobileDocxBtn = document.getElementById('mobile-docx-btn');

const generateDOCX = () => {
  const experiences = [
    { 
      company: 'Atos Brasil', 
      role: 'Analista Programador', 
      period: '01/12/2021 - 10/07/2024',
      bullets: [
        'Projetos financeiros internos: Criação, manutenção e relatórios Excel; Tradução do sistema para 3 idiomas (PT, ES, EN); Cálculos de custos, despesas e receitas.',
        'Locação Volkswagen: Projeto na campanha do carro Polo de 2023; Processamento de arquivos XML para base SQL e geração de notas fiscais; Relatórios Excel.',
        'Locação CPFL Energia: Geração de scripts para criação de registros e alterações de dados; Manutenção de sistemas e relatórios.'
      ]
    },
    { 
      company: 'Hayashi Informática', 
      role: 'Analista Programador', 
      period: '06/03/2017 - 20/10/2017',
      bullets: [
        'Desenvolvimento completo de um sistema de automação comercial.',
        'Implementação de API para cálculo e emissão de cupom fiscal eletrônico.',
        'Implementação de SAT-CF-e (Sistema Autenticador e Transmissor de Cupons Fiscais Eletrônicos).'
      ]
    },
    { 
      company: 'Cedesi Informática', 
      role: 'Programador', 
      period: '02/05/2000 - 17/02/2003',
      bullets: [
        'Criação, manutenção e relatórios de diversos sistemas legados e novos.',
        'Sistemas atendidos: Contas a pagar/receber, Faturamento, Automação de Farmácia, Folha de Pagamento, Contas Correntes, Controle de Estoque e Contabilidade.'
      ]
    },
    { 
      company: 'Cedesi Informática', 
      role: 'Programador', 
      period: '01/04/1991 - 15/01/1996',
      bullets: [
        'Criação, manutenção e relatórios de diversos sistemas legados e novos.',
        'Sistemas atendidos: Contas a pagar/receber, Faturamento, Automação de Farmácia, Folha de Pagamento, Contas Correntes, Controle de Estoque e Contabilidade.'
      ]
    }
  ];

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Arial",
          },
        },
      },
    },
    sections: [{
      properties: {},
      children: [
        // Header
        new Paragraph({
          children: [
            new TextRun({
              text: "RICARDO FURTADO REIS",
              bold: true,
              size: 52, // 26pt
              color: "00B4D8",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Desenvolvedor de Sistemas",
              size: 28, // 14pt
              color: "646464",
            }),
          ],
        }),
        new Paragraph({ text: "" }), // Spacer

        // Contact Info
        new Paragraph({
          children: [
            new TextRun({ text: "WhatsApp: (011) 98363-2445", size: 22 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Email: ricreis71@gmail.com", size: 22 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "LinkedIn: linkedin.com/in/ricardo-furtado-reis-04a47314a/", size: 22 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "GitHub: github.com/RicardoFreis", size: 22 }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Sobre
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "SOBRE",
              bold: true,
              size: 32,
              color: "00B4D8",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Desenvolvedor de sistemas com mais de 8 anos de experiência. Focado em entregar código limpo e soluções eficientes.",
              size: 22,
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Educação
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "EDUCAÇÃO",
              bold: true,
              size: 32,
              color: "00B4D8",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Engenharia da Computação - Universidade São Judas Tadeu (Não concluído, encerrado no 2o ano)", size: 22 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Processamento de Dados - Colégio Brasil (Concluído)", size: 22 }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Ensino Primário - Escola Alvino Bittencourt (Concluído)", size: 22 }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Habilidades
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "HABILIDADES",
              bold: true,
              size: 32,
              color: "00B4D8",
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: [".NET", "C#", "JAVASCRIPT", "SQL SERVER", "GIT", "HTML5", "CSS3", "COBOL", "ASPNET.MVC", "ASPNET.CORE", "VB6", "VB.NET"].join(" • "),
              size: 22,
            }),
          ],
        }),
        new Paragraph({ text: "" }),

        // Experiência
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "EXPERIÊNCIA PROFISSIONAL",
              bold: true,
              size: 32,
              color: "00B4D8",
            }),
          ],
        }),
        ...experiences.flatMap(exp => [
          new Paragraph({
            children: [
              new TextRun({
                text: `${exp.role} - ${exp.company}`,
                bold: true,
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: exp.period,
                size: 20,
                color: "646464",
              }),
            ],
          }),
          ...exp.bullets.map(bullet => new Paragraph({
            children: [
              new TextRun({
                text: bullet,
                size: 22,
              }),
            ],
            bullet: { level: 0 },
          })),
          new Paragraph({ text: "" }),
        ]),

        // Cursos e Certificações
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [
            new TextRun({
              text: "CURSOS E CERTIFICAÇÕES",
              bold: true,
              size: 28, // 14pt to match PDF
              color: "00B4D8",
            }),
          ],
        }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          borders: {
            top: { style: BorderStyle.NONE },
            bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE },
            right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
          },
          rows: Array.from({ length: Math.ceil(certificates.slice(0, 70).length / 2) }, (_, i) => {
            const cert1 = certificates[i * 2];
            const cert2 = certificates[i * 2 + 1];
            return new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph({
                    children: [new TextRun({ text: cert1 ? `• ${cert1.title}` : "", size: 20 })],
                  })],
                  width: { size: 50, type: WidthType.PERCENTAGE },
                }),
                new TableCell({
                  children: [new Paragraph({
                    children: [new TextRun({ text: cert2 ? `• ${cert2.title}` : "", size: 20 })],
                  })],
                  width: { size: 50, type: WidthType.PERCENTAGE },
                }),
              ],
            });
          }),
        }),
        new Paragraph({ text: "" }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "Para acessar todos os cursos acesse a versão digital: www.ricardo.com.br",
              size: 16,
              color: "969696",
            }),
          ],
        }),
      ],
    }],
  });

  Packer.toBlob(doc).then(blob => {
    saveAs(blob, "Curriculo_Ricardo_Furtado_Reis.docx");
  });
};

docxBtn?.addEventListener('click', generateDOCX);
mobileDocxBtn?.addEventListener('click', generateDOCX);
