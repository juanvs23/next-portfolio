import { FormInterface, ProjectSectionType, Status } from "@/types";
import {useTranslations} from 'next-intl';
const email = process.env.NEXT_PUBLIC_EMAIL;



export const useSocialNetWorks = (): { title: string; netWorks: { name: string; link: string; icon: string; color: string }[] } => {
  const social = useTranslations('social');
  return {
    title: social('title'),
    netWorks: [
      {
        name: "Github",
        link: "https://github.com/juanvs23",
        icon: "github",
        color: "#000",
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/juancarlos.avila.1420/",
        icon: "facebook",
        color: "#3b5998",
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/juanvs23/",
        icon: "linkedin",
        color: "#0077b5",
      },
      {
        name: "X",
        link: "https://twitter.com/juanvs23",
        icon: "twitter",
        color: "#1da1f2",
      },
    ],
  };
}

export const UseAbout = ()=>{
  const about = useTranslations('about');
  return {
    title: about('title'),
    description: about('description'),
  }
}


export const useJobs = ()=>{
  const jobs = useTranslations('jobs');
  const translate = useTranslations();

  const jobsItems = ['ama', 'ciancoder', 'tremgroup', 'conocimiento', 'nivelics', 'ztgroup', 'hispano'] as const;


  const jobsItemsTranslate = jobsItems.map((job, index) => {
    return {
      id: index + 1,
      title: translate(`${job}.title`),
      date: {
        startDate: new Date(translate(`${job}.start`)),
        endDate: new Date(translate(`${job}.end`)),
      },
      company: translate(`${job}.company`),
      description: translate(`${job}.description`),
    };
  });

  return{
    title: jobs('title'),
    jobsItems: jobsItemsTranslate,
  };
}
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
      url: "https://projects.coltmandev.dev/product-book/",
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
    {
      id: 16,
      name: "Fancy Login",
      description: "",
      img: "https://github.com/juanvs23/fancy-login/raw/master/public/demo.jpg",
      url: "https://projects.coltmandev.dev/fancy-login/",
    },
    {
      id:17,
      name: "Incredible Table",
      description: "",
      img: "/img/incredible-room.jpg",
      url: "https://incredible-table.vercel.app/",
    }
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
//<i class="fa-solid fa-envelope-open"></i>
//<i class="fa-solid fa-envelope-open-text"></i>
//<i class="fa-solid fa-envelope"></i>
export const useContactUs = ()=>{
  const contactUs = useTranslations('contactUs');
  const emailData = useTranslations('emailData');

  return {
    title: contactUs('title'),
    subtitle: contactUs('subtitle'),
    formTitle: contactUs('formTitle'),
    emailData: {
      title: emailData('title'),
      hoverTitle: emailData('hoverTitle'),
      clickedTitle: emailData('clickedTitle'),
      email: email,
      icons: {
        initialIcon: "fa-solid fa-envelope-open",
        hoverIcon: "fa-solid fa-envelope-open-text",
        clickedIcon: "fa-solid fa-envelope",
      },
    },
    form: initialForm,
    networks: useSocialNetWorks,
  };
}
export const useFormMessage = ()=>{
  const formMessage = useTranslations('formMessage');
  const formMessageErrors = useTranslations('formMessageErrors');
  return{
    success: "Message sent successfully",
    error: "Please try again... Later, Sorry. Contact me by email on my footer",
    sending: "Sending message",
    errors: {
      field: "This field is required",
      phone: "Please enter a valid phone number",
      email: "Please enter a valid email",
    },
  };
}
export const useFooter = ()=>{
  const footer = useTranslations('footer');
  return  {
    develop: footer('develop'),
    copy: footer('copy'),
  }
};
