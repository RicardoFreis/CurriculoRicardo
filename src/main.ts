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
  { title: "Trabalhando com Variáveis", img: "https://assets.dio.me/szUKTko0Mw9_khIViMExza4GaUmNYsc3zuHuaC11zhI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci89MElOT05URy5qcGc" },
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
  { title: "Introdução ao .NET", img: "https://assets.dio.me/s2p3KRpux8qCNB47cKwdsw81Q7p_uYbTLBBrXSfh7A0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TV1lYTldKSy5qcGc" }
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
