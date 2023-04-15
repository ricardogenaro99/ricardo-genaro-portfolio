import { FaNodeJs } from "react-icons/fa";
import {
  RiAmazonFill,
  RiAngularjsFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
  RiVuejsFill,
} from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { v4 as uuid } from "uuid";

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
    logo: <RiReactjsFill />,
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
    logo: <RiAngularjsFill />,
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
    logo: <RiHtml5Fill />,
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
    logo: <RiCss3Fill />,
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
    logo: <RiVuejsFill />,
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
    logo: <RiAmazonFill />,
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
    logo: <FaNodeJs />,
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
    logo: <SiSpringboot />,
    propsStyleLogo: {
      size: sizeIconTech,
      color: "#FFFFFF",
    },
  },
].map(addId);

export const PROJECTS = [
  {
    name: "_quena",
    linkImage: "/static/media/quena.aafc22b3e138586a5875.png",
    tags: ["react", "aws", "node"],
    description:
      "Aplicación Angular consumiendo servicios de AWS, la cual tiene como objetivo, el matching entre estrellas, fans y hosts",
    projects: [
      {
        alias: "ver-quena-fans",
        linkProject: "https://quena-fans-beta.vercel.app/",
        prod: true,
      },
      {
        alias: "ver-quena-locales",
        linkProject: "https://quena-locales-beta.vercel.app/",
        prod: true,
      },
    ],
  },
  {
    name: "_workfast",
    linkImage: "/static/media/workfast.d697bd03ff8c69738844.png",
    tags: ["react", "node"],
    description:
      "Aplicación MERN Stack con arquitectura API-REST, la cual tiene como objetivo la busqueda de empleos",
    projects: [
      {
        linkProject: "https://workfast-landing.vercel.app/",
        prod: true,
      },
    ],
  },
  {
    name: "_todo-app",
    linkImage: "/static/media/todo.53933cc1cde0b6d86f84.png",
    tags: ["react"],
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
    linkImage: "/static/media/challenge_cart.33a5958aae480ff528d0.png",
    tags: ["react", "springBoot"],
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
    linkImage: "/static/media/inicip.ab2994458f81a57413b9.png",
    tags: ["react"],
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
  "https://api.whatsapp.com/send?phone=51933124563&text=Hola,%20estoy%20interesado%20en%20tu%20trabajo...";

export const URL_MAIL =
  "mailto:genaro.choquehuanca.palli@gmail.com?Subject=SERVICIO%20DESARROLLO%20WEB";

export const URL_GITHUB = "https://github.com/ricardogenaro99";

export const URL_GITHUB_PORTFOLIO = "/ricardo-genaro-portfolio";
