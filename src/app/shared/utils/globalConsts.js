import { v4 as uuid } from "uuid";
import {
  quenaImage,
  workfast,
  todoImage,
  challengeCart,
  inicipImage,
  inProcessImage,
} from "app/assets/proyectos";

const sizeIconTech = 30;

const addId = (e) => {
  return {
    ...e,
    id: uuid(),
  };
};

export const ICONS_TECH = [
  {
    name: "react",
    label: "React",
    active: true,
    visible: true,
    bgColor: "#86E1F9",
    logo: "react",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#000000",
    },
  },
  {
    name: "angular",
    label: "Angular",
    active: true,
    visible: false,
    bgColor: "#B9213A",
    logo: "angular",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#EFE5E1",
    },
  },
  {
    name: "html",
    label: "HTML",
    active: true,
    visible: false,
    bgColor: "#E44D25",
    logo: "html",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#FFFFFF",
    },
  },
  {
    name: "css",
    label: "CSS",
    active: true,
    visible: false,
    bgColor: "#369AD6",
    logo: "css",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#FFFFFF",
    },
  },
  {
    name: "vue",
    label: "Vue",
    active: true,
    visible: false,
    bgColor: "#00C180",
    logo: "vue",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#33475F",
    },
  },
  {
    name: "aws",
    label: "Amazon Web Services",
    active: true,
    visible: true,
    bgColor: "#FF9900",
    logo: "aws",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#000000",
    },
  },
  {
    name: "node",
    label: "Node JS",
    active: true,
    visible: true,
    bgColor: "#303030",
    logo: "node",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#68A066",
    },
  },
  {
    name: "springBoot",
    label: "Spring Boot",
    active: true,
    visible: true,
    bgColor: "#6DB33F",
    logo: "springBoot",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#FFFFFF",
    },
  },
  {
    name: "astro",
    label: "Astro",
    active: true,
    visible: true,
    bgColor: "#FF5D01",
    logo: "astro",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#FFFFFF",
    },
  },
  {
    name: "obsidian",
    label: "Obsidian",
    active: true,
    visible: true,
    bgColor: "#7C3AED",
    logo: "obsidian",
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#FFFFFF",
    },
  },
].map(addId);

export const PROJECTS = [
  {
    name: "_genaro_space",
    linkImage: inProcessImage,
    tags: ["astro", "obsidian", "react", "node"],
    metadata: {
      rol: "Creator & Software Architect",
      tipo: "Publicación Editorial & Digital Garden",
      categoria: "Personal Publishing & AI Engineering",
    },
    description:
      "Jardín digital multimedia y cuaderno editorial de alta gama. Arquitectura SSG estática en Astro 5 ($0.00/mes en Vercel Hobby), motor de sincronización unidireccional sanitizada desde Obsidian Local con Privacy Guard, esquemas polimórficos validados con Zod, búsqueda estática instantánea con Pagefind y entrega de assets optimizados con Sharp y Cloudflare R2.",
    projects: [
      {
        alias: "ver-sitio",
        linkProject: "https://genaro.space",
        prod: true,
      },
      {
        alias: "ver-repo",
        linkProject: "https://github.com/ricardogenaro99/genaro-space",
        prod: true,
      },
    ],
  },
  {
    name: "_quena",
    linkImage: quenaImage,
    tags: ["react", "node"],
    metadata: {
      rol: "Creator & Full Stack Architect",
      tipo: "Plataforma Monorepo Full-Stack",
      categoria: "Concerts & Music Tech",
    },
    description:
      "Plataforma integral para conciertos en vivo y gestión de venues musicales. Monorepo full-stack en React 18 y Hono v4 con Neon PostgreSQL Serverless, unificando la landing maestra, el portal de fans y la administración de locales bajo un solo dominio Zero-CORS.",
    projects: [
      {
        alias: "ver-proyecto",
        linkProject: "https://quena.pe",
        prod: true,
      },
      {
        alias: "ver-repo",
        linkProject: "https://github.com/ricardogenaro99/quena",
        prod: true,
      },
    ],
  },
  {
    name: "_workfast",
    linkImage: workfast,
    tags: ["react", "node"],
    metadata: {
      rol: "Full Stack Developer",
      tipo: "Plataforma MERN",
      categoria: "Recruiting & Jobs",
    },
    description:
      "Aplicación MERN Stack con arquitectura API-REST, la cual tiene como objetivo la busqueda de empleos",
    projects: [
      // {
      //   alias: "ver-workfast-landing",
      //   linkProject: "https://workfast-landing.vercel.app/",
      //   prod: true,
      // },
      {
        alias: "ver-workfast-postulate",
        linkProject: "https://workfast-postulate.vercel.app/",
        prod: true,
      },
      {
        alias: "ver-workfast-recruiter",
        linkProject: "https://workfast-recruiter.vercel.app/",
        prod: true,
      },
    ],
  },
  {
    name: "_todo-app",
    linkImage: todoImage,
    tags: ["react"],
    metadata: {
      rol: "Frontend Developer",
      tipo: "Single Page App",
      categoria: "Productivity",
    },
    description: "Lista de tareas con almacenamiento en LocalStorage",
    projects: [
      {
        linkProject: "https://todo-app-challenge-ricardogenaro.vercel.app/",
        prod: true,
      },
    ],
  },
  {
    name: "_challenge-cart",
    linkImage: challengeCart,
    tags: ["react", "springBoot"],
    metadata: {
      rol: "Full Stack Developer",
      tipo: "E-Commerce Frontend/API",
      categoria: "Technical Challenge",
    },
    description:
      "Desarrollo de un carrito de compras para la prueba de ingeniero de software para XcaleConsulting. Este proyecto es una interfaz de comercio electrónico hecha con React que se conecta a una API Spring Boot.",
    projects: [
      {
        linkProject: "https://cart-challenge-frontend.vercel.app/",
        prod: true,
      },
    ],
  },
  {
    name: "_inicip",
    linkImage: inicipImage,
    tags: ["react"],
    metadata: {
      rol: "Frontend Developer",
      tipo: "Portal Institucional",
      categoria: "Education",
    },
    description: "El INICIP, forma parte de la Escuela de Posgrado de la PNP",
    projects: [
      {
        linkProject: "https://inicip-escpograpnp.com/",
        prod: true,
      },
    ],
  },
].map(addId);

export const URL_WSP =
  "https://api.whatsapp.com/send?phone=51933124563&text=Hola,%20estoy%20interesado%20en%20tu%20trabajo…";

export const URL_MAIL =
  "mailto:genaro.choquehuanca.palli@gmail.com?Subject=SERVICIO%20DESARROLLO%20WEB";

export const URL_GITHUB = "https://github.com/ricardogenaro99";

export const URL_GITHUB_PORTFOLIO = "/ricardo-genaro-portfolio";

export const URL_GENARO_SPACE = "https://genaro.space";
