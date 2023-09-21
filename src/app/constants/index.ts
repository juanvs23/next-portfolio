import { FormInterface, ProjectSectionType, Status } from "@/types";

export const socialNetWorks = {
  title: "Follow me",
  netWorks: [
    {
      name: "Github",
      link: "https://github.com/juanvs23",
      icon: "fa-brands fa-github",
      color: "#000",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/juancarlos.avila.1420/",
      icon: "fa-brands  fa-facebook",
      color: "#3b5998",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/juanvs23/",
      icon: "fa-brands fa-linkedin",
      color: "#0077b5",
    },
    {
      name: "X",
      link: "https://twitter.com/juanvs23",
      icon: "fa-brands fa-x-twitter",
      color: "#1da1f2",
    },
  ],
};
export const jobs = {
  title: "Work Experience",
  jobsItems: [
    {
      id: 1,
      title: "Front-End/Wordpress Developer",
      date: {
        startDate: new Date(2022, 7),
        endDate: null,
      },
      company: "TREMGROUP LLC",
      description:
        "Creation of user interfaces for the Company Project (IDXBOOST) and the company's clients, high level Realtor for the North American market. In addition to the development of solutions, such ascreation of CTP, admin page, custom fields among other WordPress techniques ",
      tools: [
        { id: 1, title: "Wordpress", icon: "fa-wordpress" },
        { id: 2, title: "CSS", icon: "fa-css3" },
        { id: 3, title: "HTML5", icon: "fa-html5" },
        { id: 4, title: "JavaScript", icon: "fa-js" },
        { id: 5, title: "React", icon: "fa-react" },
      ],
    },
    {
      id: 2,
      title: "Front-End/Wordpress Developer",
      date: {
        startDate: new Date(2022, 2),
        endDate: new Date(2021, 11),
      },
      company: "Conocimiento Corporativo S.A.S",
      description:
        "Develop WordPress sites, creating plugins and custom fields for custom themes, for institutional sites among which are CESDE and Thinkus",
      tools: [
        { id: 1, title: "Wordpress", icon: "fa-wordpress" },
        { id: 2, title: "CSS", icon: "fa-css3" },
        { id: 3, title: "HTML5", icon: "fa-html5" },
        { id: 4, title: "JavaScript", icon: "fa-js" },
        { id: 5, title: "React", icon: "fa-react" },
      ],
    },
    {
      id: 3,
      title: "WordPress Developer",
      date: {
        startDate: new Date(2021, 8),
        endDate: new Date(2021, 6),
      },
      company: "Nivelics SAS",
      description:
        "Develop and maintain WordPress sites, both in the creation of interfaces for the client, and for the dashboard. Creation of custom plugins and themes for advertising sites or ecommerce of the clientele.",
      tools: [
        { id: 1, title: "Wordpress", icon: "fa-wordpress" },
        { id: 2, title: "CSS", icon: "fa-css3" },
        { id: 3, title: "HTML5", icon: "fa-html5" },
        { id: 4, title: "JavaScript", icon: "fa-js" },
        { id: 5, title: "React", icon: "fa-react" },
      ],
    },
    {
      id: 4,
      title: "Wordpress Developer",
      date: {
        startDate: new Date(2020, 4),
        endDate: new Date(2021, 6),
      },
      company: "ZtGroup LLC",
      description:
        "Develop and maintain WordPress sites, both in the creation of interfaces for the client, and for the dashboard. Creation of custom plugins and themes for advertising sites or ecommerce of the clients",
      tools: [
        { id: 1, title: "Wordpress", icon: "fa-wordpress" },
        { id: 2, title: "CSS", icon: "fa-css3" },
        { id: 3, title: "HTML5", icon: "fa-html5" },
        { id: 4, title: "JavaScript", icon: "fa-js" },
        { id: 5, title: "React", icon: "fa-react" },
      ],
    },
    {
      id: 5,
      title: "Hispano Soluciones",
      date: {
        startDate: new Date(2019, 7),
        endDate: new Date(2020, 3),
      },
      company: "ZtGroup LLC",
      description:
        "Develop interfaces for client projects in Drupal, WordPress and layout for static sites",
      tools: [
        { id: 1, title: "Wordpress", icon: "fa-wordpress" },
        { id: 2, title: "CSS", icon: "fa-css3" },
        { id: 3, title: "HTML5", icon: "fa-html5" },
        { id: 4, title: "JavaScript", icon: "fa-js" },
        { id: 5, title: "React", icon: "fa-react" },
      ],
    },
    {
      id: 6,
      title: "Frontend Developer",
      date: {
        startDate: new Date(2018, 7),
        endDate: new Date(2019, 6),
      },
      company: "Nacion Digital",
      description:
        "Develop interfaces for client projects in Drupal, WordPress and layout for static sites",
      tools: [
        { id: 2, title: "CSS", icon: "fa-css3" },
        { id: 3, title: "HTML5", icon: "fa-html5" },
        { id: 4, title: "JavaScript", icon: "fa-js" },
        { id: 5, title: "React", icon: "fa-react" },
      ],
    },
  ],
};
export const projects: ProjectSectionType = {
  title: "Projects",
  projectsItems: [
    {
      id: 1,
      name: "Gericht",
      url: "https://restaurant.coltmandev.dev/",
      description: "",
      img: "/img/gericht.jpg",
    },
    {
      id: 2,
      name: "Cesde",
      url: "https://www.cesde.edu.co/",
      description: "",
      img: "/img/cesde.jpg",
    },
    {
      id: 3,
      name: "Thinkus",
      url: "https://thinkus.io/",
      description: "",
      img: "/img/thinkous.jpg",
    },
    {
      id: 4,
      name: "Proyectos Cesde",
      url: "https://proyectos.cesde.edu.co/",
      description: "",
      img: "/img/cesde-proyectos.jpg",
    },
    {
      id: 5,
      name: "Cesde Colegios",
      url: "https://colegios.cesde.edu.co/",
      description: "",
      img: "/img/colegios.jpg",
    },
    {
      id: 6,
      name: "Centro de empleo Cesde",
      url: "https://centrodeempleo.cesde.edu.co/",
      description: "",
      img: "/img/empleo.jpg",
    },
    {
      id: 7,
      name: "Asipi Mexico 2023",
      url: "https://asipi.org/mexico2023/?lang=es",
      description: "",
      img: "/img/asipi-mexico.jpg",
    },
    {
      id: 8,
      name: "Dogtorscat",
      url: "https://www.dogtorscat.com/",
      description: "",
      img: "/img/dogtor.jpg",
    },
    {
      id: 9,
      name: "Boulton",
      url: "https://boultoncre.com/",
      description: "",
      img: "/img/boulton.jpg",
    },

    {
      id: 10,
      name: "Venecredits",
      url: "https://venecreditsecurities.com/en/",
      description: "",
      img: "/img/venecredits.jpg",
    },
    {
      id: 11,
      name: "Hisomos",
      url: "https://hisomos.com/",
      description: "",
      img: "/img/hisomo.jpg",
    },
    {
      id: 12,
      name: "Book project",
      url: "http://62.171.164.5/books/",
      description: "",
      img: "/img/book-test.jpg",
    },
    {
      id: 13,
      name: "LuxlifemiamiBlog",
      url: "https://luxlifemiamiblog.com/",
      description: "",
      img: "/img/luxlife.jpg",
    },
    {
      id: 14,
      name: "Boreal Expedition",
      url: "https://borealexpedition.com/",
      description: "",
      img: "/img/boreal.jpg",
    },
    {
      id: 15,
      name: "Emprende",
      url: "https://emprende.cesde.edu.co/",
      description: "",
      img: "/img/emprende.jpg",
    },
  ],
};

export const initialForm: FormInterface = {
  status: Status.idle,
  message: "",
  inputs: [
    {
      name: "name",
      inputTitle: "Full Name",
      inputValue: "",
      inputError: null,
      active: false,
    },
    {
      name: "phone",
      inputTitle: "Phone",
      inputValue: "",
      inputError: null,
      active: false,
    },
    {
      name: "email",
      inputTitle: "Email",
      inputValue: "",
      inputError: null,
      active: false,
    },
    {
      name: "subject",
      inputTitle: "Subject",
      inputValue: "",
      inputError: null,
      active: false,
    },
    {
      name: "message",
      inputTitle: "Message",
      inputValue: "",
      inputError: null,
      active: false,
    },
  ],
};
