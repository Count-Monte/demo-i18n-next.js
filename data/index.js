import logoLight from "@/images/logo.png";

export const LogoImage = {
  light: logoLight
};

export const NavLinks = [
  {
    name: "Studio Kampus",
    url: "/",
  },
  {
    name: "Services studios",
    url: "/service-details",
  },
  {
    name: "Galerie photos",
    url: "/portfolio",
  },
  {
    name: "Nous joindre",
    url: "/contact"
  }
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "STUDIO KAMPUS",
    title: "STUDIOS PROFESSIONNELS",
    button: {
      label: "DÉCOUVRIR PLUS",
      url: "/service-details"
    }
  },
  {
    image: sliderOne02,
    subTitle: "STUDIO KAMPUS",
    title: "STUDIOS PROFESSIONNELS",
    button: {
      label: "DÉCOUVRIR PLUS",
      url: "/service-details"
    }
  }
];

import sliderTwo01 from "@/images/slider/2_1.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "CONSULTER",
    title: "NOS\nSERVICES.",
    button: {
      label: "PLUS D'INFO",
      url: "/service-details"
    }
  }
];

import sliderThree01 from "@/images/slider/3_1.jpg";
import sliderThree02 from "@/images/slider/3_2.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/service-details"
    }
  },
  {
    image: sliderThree02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/service-details"
    }
  }
];

export const ContactInfosBlock = {
  subTitle: "Nos studios",
  title: "Prêts de chez vous",
  description:
    "Nous avons deux emplacements avec plusieurs studios d'enregistrement et ouvrons de nouveaux studios prochainement !"
};

export const ContactInfosList = [
  {
    title: "Plateau Mont-Royal",
    infos: [
      {
        name: "2700 rue Angus, Montréal"
      },
      {
        name: "info@studiokampus.com"
      },
      {
        name: "514-243-1855"
      }
    ]
  },
  {
    title: "Centre-ville",
    infos: [
      {
        name: "2305 boul. René-Lévesque Ouest, Montréal"
      },
      {
        name: "info@studiokampus.com"
      },
      {
        name: "514-243-1855"
      }
    ]
  }
];

export const ContactFormTitle = {
  subTitle: "Contactez-nous et",
  title: "Visitez les studios",
  description:
    "Écrivez ou téléphonez-nous pour toutes questions relatives à nos offres de services, pour une location de studio \n ou pour soumettre votre projet à notre équipe de production."
};

import blogImage1 from "@/images/blog/1.jpg";
import blogImage2 from "@/images/blog/2.jpg";
import blogImage3 from "@/images/blog/3.jpg";
import blogImage4 from "@/images/blog/4.jpg";
import blogImage5 from "@/images/blog/5.jpg";
import blogImage6 from "@/images/blog/6.jpg";

export const BlogData = [
  {
    title: "basic rules of running web agency business",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

import teamImage1 from "@/images/team/1.jpg";
import teamImage2 from "@/images/team/2.jpg";
import teamImage3 from "@/images/team/3.jpg";
import teamImage4 from "@/images/team/4.jpg";
import teamImage5 from "@/images/team/5.jpg";
import teamImage6 from "@/images/team/6.jpg";
import teamImage7 from "@/images/team/7.jpg";
import teamImage8 from "@/images/team/8.jpg";

export const TeamData = [
  {
    title: "Jack Blouin",
    tag: "LinkedIn",
    phone: "514-996-0757",
    poste: "Directeur général, développement d'affaires",
    url: "https://www.linkedin.com/in/jackblouin/",
    image: teamImage1
  },
  {
    title: "Roman Pagliaro",
    tag: "Facebook",
    phone: "438-397-5317",
    poste: "Compositeur, réalisateur, ingénieur",
    url: "https://www.facebook.com/roman.pagliaro",
    image: teamImage2
  },
  {
    title: "Cédrick Hébert",
    tag: "LinkedIn",
    phone: "514-659-3721",
    poste: "Gestionnaire de projets, compositeur",
    url: "https://www.linkedin.com/in/c%C3%A9drick-h%C3%A9bert-37628130/",
    image: teamImage3
  },
  {
    title: "Vincent Appelby",
    tag: "Facebook",
    phone: "514-654-8904",
    poste: "Ingénieur, compositeur, réalisateur",
    url: "https://www.facebook.com/vincent.a.pelletier",
    image: teamImage4
  },
  {
    title: "Ariel Lemercier",
    tag: "LinkedIn",
    phone: "514-699-2629",
    poste: "Ingénieur, compositeur, réalisateur",
    url: "https://www.linkedin.com/in/ariel-ridgeway-854996aa/",
    image: teamImage5
  },
  {
    title: "Bruno Deschênes",
    tag: "LinkedIn",
    phone: "438-886-9301",
    poste: "Webmaster, logistique, compositeur",
    url: "https://www.linkedin.com/in/bruno-deschenes-520114118/",
    image: teamImage6
  },
  {
    title: "Zacharie Cloutier",
    tag: "LinkedIn",
    phone: "438-838-5263",
    poste: "Marketing, ressource humaine, logistique",
    url: "https://www.linkedin.com/in/zacfromlanf/",
    image: teamImage7
  },
  {
    title: "Guillaume Carpentier",
    tag: "LinkedIn",
    phone: "438-883-2766",
    poste: "Finance, comptabilité, gestion",
    url: "https://www.linkedin.com/in/guillaume-carpentier-a39952120/",
    image: teamImage8
  }
];

import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

export const BlogHomeSection = {
  subTitle: "our news & articles",
  title: "latest blog posts",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

import blogS1 from "@/images/blog/11.jpg";
import blogS2 from "@/images/blog/12.jpg";
import blogS3 from "@/images/blog/13.jpg";

export const BlogSidebarPost = [
  {
    title: "basic rules of running web agency",
    image: blogS1,
    url: "/blog-single"
  },
  {
    title: "basic rules of running web agency",
    image: blogS2,
    url: "/blog-single"
  },
  {
    title: "basic rules of running web agency",
    image: blogS3,
    url: "/blog-single"
  }
];

import commentImage1 from "@/images/blog/9.jpg";
import commentImage2 from "@/images/blog/10.jpg";

export const BlogComments = [
  {
    image: commentImage1,
    name: "David Martin",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet."
  },
  {
    image: commentImage2,
    name: "Jessica Brown",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet."
  }
];

import portfolio01 from "@/images/portfolio/1.jpg";
import portfolio02 from "@/images/portfolio/2.jpg";
import portfolio03 from "@/images/portfolio/3.jpg";
import portfolio04 from "@/images/portfolio/4.jpg";
import portfolio05 from "@/images/portfolio/5.jpg";
import portfolio06 from "@/images/portfolio/6.jpg";

export const PortfolioData = [
  {
    subTitle: "Livre audio",
    title: "Atuk, elle et nous",
    categories: ["Roman Et Nouvelles"],
    image: portfolio01,
  },
  {
    subTitle: "Livre audio",
    title: "Vivez",
    categories: ["Psychologie"],
    image: portfolio02,
  },
  {
    subTitle: "Livre audio",
    title: "Terreur chez les musiciens",
    categories: ["Jeunesse - Albums et Romans"],
    image: portfolio03,
  },
  {
    subTitle: "Livre audio",
    title: "Peter Pan - Les contes interdits",
    categories: ["Horreur"],
    image: portfolio04,
  },
  {
    subTitle: "Livre audio",
    title: "Le chemin de l'éveil",
    categories: ["Psychologie"],
    image: portfolio05,
  },
  {
    subTitle: "Livre audio",
    title: "La légèreté au quotidien",
    categories: ["Croissance Personnelle"],
    image: portfolio06,
  }
];

import portfolio07 from "@/images/portfolio/StudioKampus_media01.jpg";
import portfolio08 from "@/images/portfolio/StudioKampus_media02.jpg";
import portfolio09 from "@/images/portfolio/StudioKampus_media03.jpg";
import portfolio13 from "@/images/portfolio/StudioKampus_media07.jpg";
import portfolio14 from "@/images/portfolio/StudioKampus_media08.jpg";
import portfolio15 from "@/images/portfolio/StudioKampus_media09.jpg";
import portfolio16 from "@/images/portfolio/StudioKampus_media10.jpg";
import portfolio17 from "@/images/portfolio/StudioKampus_media11.jpg";
import portfolio20 from "@/images/portfolio/StudioKampus_media14.jpg";
import portfolio22 from "@/images/portfolio/StudioKampus_media16.jpg";
import portfolio23 from "@/images/portfolio/StudioKampus_media17.jpg";
import portfolio24 from "@/images/portfolio/StudioKampus_media18.jpg";
import portfolio26 from "@/images/portfolio/StudioKampus_media20.jpg";
import portfolio27 from "@/images/portfolio/StudioKampus_media21.jpg";
import portfolio28 from "@/images/portfolio/StudioKampus_media22.jpg";
import portfolio29 from "@/images/portfolio/StudioKampus_media23.jpg";
import portfolio30 from "@/images/portfolio/StudioKampus_media24.jpg";
import portfolio31 from "@/images/portfolio/StudioKampus_media25.jpg";
import portfolio32 from "@/images/portfolio/StudioKampus_media26.jpg";
import portfolio33 from "@/images/portfolio/StudioKampus_media27.jpg";
import portfolio34 from "@/images/portfolio/StudioKampus_media28.jpg";
import portfolio35 from "@/images/portfolio/StudioKampus_media29.jpg";
import portfolio37 from "@/images/portfolio/StudioKampus_media31.jpg";
import portfolio38 from "@/images/portfolio/StudioKampus_media32.jpg";
import portfolio39 from "@/images/portfolio/StudioKampus_media33.jpg";
import portfolio40 from "@/images/portfolio/StudioKampus_media34.jpg";
import portfolio41 from "@/images/portfolio/StudioKampus_media35.jpg";
import portfolio42 from "@/images/portfolio/StudioKampus_media36.jpg";
import portfolio43 from "@/images/portfolio/StudioKampus_media36.jpg";
import portfolio44 from "@/images/portfolio/StudioKampus_media37.jpg";
import portfolio45 from "@/images/portfolio/StudioKampus_media38.jpg";
import portfolio46 from "@/images/portfolio/StudioKampus_media39.jpg";
import portfolio47 from "@/images/portfolio/StudioKampus_media40.jpg";
import portfolio48 from "@/images/portfolio/StudioKampus_media41.jpg";
import portfolio49 from "@/images/portfolio/StudioKampus_media42.jpg";
import portfolio50 from "@/images/portfolio/StudioKampus_media43.jpg";


export const PortfolioData2 = [
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio07,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio08,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio09,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio13,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio14,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio15,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio16,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio17,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio20,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio22,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio23,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio24,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio26,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio27,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio28,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio29,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio30,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio31,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio32,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio33,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio34,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio35,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio37,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio38,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio39,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio40,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio41,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio42,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio43,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio44,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio45,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio46,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio47,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio48,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio49,
  },
  {
    title: "Pag Party",
    categories: ["Crédits photos: Arianne Guay"],
    image: portfolio50,
  }
];

export const PortfolioFilters = [
  { name: "all" },
  { name: "graphic" },
  { name: "branding" },
  { name: "marketing" },
  { name: "logos" }
];

export const ServicePostData = [
  {
    title: "Rapide et simple",
    text:
      "Établissez rapidement vos besoins avec notre équipe de conception et d'ingénieurs de son.",
    iconName: "mei-settings",
  },
  {
    title: "Clé en main",
    text:
      "Laissez-vous guider par nos professionnels durant tous le processus du début jusqu'à la fin.",
    iconName: "mei-transfer",
  },
  {
    title: "Qualité Prix",
    text:
      "Utilisez les meilleurs équipements et la meilleure équipe pour les prix les plus compétitifs.",
    iconName: "mei-pie-chart",
  }
];

export const ServiceHomeTwoData = {
  subTitle: "welcome to smart meipaly web agency",
  title: "We design digital products that \n help grow businesses.",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServiceHomeThreeData = {
  subTitle: "Les services que nous offrons",
  title: "Nos services",
  text:
    "Studio kampus est un studio d’enregistrement professionnel, créatif, innovant, idéal et qui convient à tous les types de projet sonore. Vous êtes adepte du design sonore? De la production musicale? Vous êtes un professionnel du milieu? Ou encore, un étudiant à la recherche de stages? Venez visiter nos studios uniques et ultra-flexibles qui conviennent à tous les types de demande, enregistrement, performance live avec caméra, podcast, mixage, Mastering, livre audio et conception d’album. Nous offrons aussi le service d’accompagnement d’artiste, de recherche et développement ainsi que de recherche de financement culturel."
};

export const ServicePostTwoData = {
  sectionContent: {
    title: "Qualité sonore incomparable \n Service personnalisé hors du commun.",
    subTitle: "Les services que nous offrons",
    text:
      "Studio kampus est un studio d’enregistrement professionnel, créatif, innovant, idéal et qui convient à tous les types de projets sonore. Vous êtes adepte du design sonore? De la production musicale? Vous êtes un professionnel du milieu? Ou encore, un étudiant à la recherche de stages? Venez visiter nos studios uniques et ultra-flexibles qui conviennent à tous les types de demande, enregistrement, performance live avec caméra, podcast, mixage, Mastering, livre audio et conception d’album. Nous offrons aussi le service d’accompagnement d’artiste, de recherche et développement ainsi que de recherche de financement culturel."
  },
  posts: [
    {
      title: "Livres audio",
      iconName: "mei-web-design",
      url: "/service-details"
    },
    {
      title: "Enregistrements",
      iconName: "mei-computer-graphic",
      url: "/service-details"
    },
    {
      title: "Mixage/Mastering",
      iconName: "mei-development-1",
      url: "/service-details"
    },
    {
      title: "Podcasts",
      iconName: "mei-development",
      url: "/service-details"
    },
    {
      title: "Albums",
      iconName: "mei-app-development",
      url: "/service-details"
    }
  ]
};

import serviceOne01 from "@/images/home_1/6.jpg";
import serviceOne02 from "@/images/home_1/7.jpg";
import serviceOne03 from "@/images/home_1/9.jpg";
import serviceOne04 from "@/images/home_1/8.jpg";
import serviceOne05 from "@/images/home_1/10.jpg";
import serviceOne06 from "@/images/home_1/11.jpg";


export const ServicePostThreeData = {
  sectionContent: {
    title: "Des possibilités infinies",
    text:
      "Notre équipe, nos studios de musique, nos studios d'enregistrement et nos studios de podcasts \n amèneront vos projets à un autre niveau."
  },
  posts: [
    {
      title: "Livres audio",
      image: serviceOne01,
    },
    {
      title: "Podcasts | Balados",
      image: serviceOne05,
    },
    {
      title: "Conception d'albums",
      image: serviceOne04,
    },
    {
      title: "Enregistrement",
      image: serviceOne02,
    },
    {
      title: "Design sonore",
      image: serviceOne03,
    },
    {
      title: "Mastering | Mixage",
      image: serviceOne06,
    }
  ]
};

export const FunfactData = [
  {
    title: "Livres audio produits",
    countNumber: 225
  },
  {
    title: "Micros d'enregistrement",
    countNumber: 180
  },
  {
    title: "Sessions complétées",
    countNumber: 1350
  },
  {
    title: "Pieds carrés de Studios",
    countNumber: 2700
  }
];

import trustClient01 from "@/images/home_1/4.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "Réputés dans l'industrie de production audio",
  text:
    "NOUS CONTRIBUONS AU DÉVELOPPEMENT ARTISTIQUE QUÉBÉCOIS ET SOMMES FIERS DE TRAVAILLER ET D’ÉVOLUER EN TRAVAILLANT AUX CÔTÉS DE TOUS NOS CLIENTS ET PARTENAIRES. STUDIO KAMPUS EST UN POINT RASSEMBLEUR POUR L’INDUSTRIE MUSICALE ET AUDIONUMÉRIQUE DU QUÉBEC !",
};

import ClientCarousel01 from "@/images/client/1.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel05 from "@/images/client/5.png";
import ClientCarousel04 from "@/images/client/4.png";
import ClientCarousel06 from "@/images/client/6.png";
import ClientCarousel07 from "@/images/client/7.png";



export const ClientCarouselData = {
  sectionContent: {
    title: "avec qui nous sommes partenaires",
    subTitle: "Les entreprises",
    text:
      "Nos relations dans l'industrie de la production, de la diffusion et de l'édition se sont bâties sur la confiance, le professionnalisme et le respect."
  },
  items: [
    {
      url: "https://joyriderecs.com/",
      image: ClientCarousel02
    },
    {
      url: "https://www.oa.media/",
      image: ClientCarousel07
    },
    {
      url: "https://www.vuesetvoix.com",
      image: ClientCarousel05
    },
    {
      url: "https://www.audible.ca/",
      image: ClientCarousel04
    },
    {
      url: "#",
      image: ClientCarousel06
    },
    {
      url: "https://vvla.lanf.ca/",
      image: ClientCarousel01
    },
    {
      url: "https://www.apple.com/ca/fr/apple-books/",
      image: ClientCarousel03
    }
  ]
};

import aboutOne01 from "@/images/about/1.jpg";
import aboutOne02 from "@/images/about/2.jpg";
import aboutOne03 from "@/images/about/3.jpg";


export const AboutOneData1 = {
  sectionContent1: {
    text: "Profitez des studios durant un bloc de 5h à partir de 250$."
  },
  gallery1: [aboutOne01],
};

export const AboutOneData2 = {
  sectionContent2: {
    text: "Profitez des studios durant un bloc de 8h à partir de 350$."
  },
  gallery2: [aboutOne02],
};

export const AboutOneData3 = {
  sectionContent3: {
    text: "Profitez des studios durant un bloc de 12h à partir de 450$."
  },
  gallery3: [aboutOne03],
};

import video01 from "@/images/about/4.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "''Ça commence par une idée et puis ça devient tout autre chose.''",
    subTitle: "Pablo Picasso",
    text:
      "Stimulez votre créativité et augmentez votre productivité avec Studio Kampus, les studios les plus créatifs de Montréal."
  },
  video: {
    image: video01,
    ID: "z5H7RR2_0DI",
  }
};

export const SubscribeFormData = {
  sectionContent: {
    title: "Inscrivez-vous",
    subTitle: "Ne manquez aucune de nos nouvelles"
  }
};

import testimonial01 from "@/images/home_1/t1.jpg";
import testimonial02 from "@/images/home_1/t2.jpg";
import testimonial03 from "@/images/home_1/t3.jpg";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "our testimonials",
    title: "happy customers"
  },
  posts: [
    {
      name: "Cecilia Colon",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Chase Hanson",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Mittie Flores",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    }
  ]
};

import featureTab01 from "@/images/home_1/c1.jpg";
import featureTab02 from "@/images/home_1/c2.jpg";
import featureTab03 from "@/images/home_1/c3.jpg";

export const FeatureTabData = {
  sectionContent: {
    title: "Pourquoi Studio Kampus",
    subTitle: "Pour nos spécialisations",
    text:
      "En tant que plus grands producteurs de livres audio au Canada, Studio Kampus amène ses multiples spécialités et ses infrastructures professionnelles afin d'offrir des services impeccables en matière audionumérique."
  },
  posts: [
    {
      title: "Livres audio | Balados",
      content:
        "Faites-nous confiance pour la production et la publication de votre livre audio de qualité professionnelle sur toutes les plateformes audio (Audible, Google Play, Kobo, iTunes et autres). Nos studios de musique et nos studios d'enregistrement professionnels pour livres audio sont opérés par une équipe complète comportant les meilleurs ingénieurs de son de Montréal.",
      image: featureTab02,
      lists: [
        {
          item: "Conception"
        },
        {
          item: "Recherche de narrateur"
        },
        {
          item: "Enregistrement"
        },
        {
          item: "Fabrication"
        },
        {
          item: "Diffusion"
        }
      ]
    },
    {
      title: "Location de studio de musique",
      content:
        "Studio Kampus est spécialisé dans la location de studio de musique professionnel. Situés au centre-ville et sur le plateau mont royal, nos studios sont conçus sur mesure pour la production de livres audio, la réalisation de podcasts, pour les performances lives et les  représentations préenregistrées. Offrez-vous l'équipement le plus performant pour amener votre projet à un autre niveau.",
      image: featureTab01,
      lists: [
        {
          item: "Location de studios de musique"
        },
        {
          item: "Location de studios d'enregistrement"
        },
        {
          item: "Location de salles de podcasts"
        },
        {
          item: "Location de studios pour livres audio"
        },
        {
          item: "Location d'équipement technique"
        }
      ]
    },
    {
      title: "Albums | Recherche de subventions",
      content:
        "There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab03,
      lists: [
        {
          item: "Self-contained, state-of-the-art time clock"
        },
        {
          item: "Scalability of up to 500 employees per time clock"
        },
        {
          item: "The ability to connect up to 32 time clocks"
        },
        {
          item: "Employee self-enrollment"
        },
        {
          item: "Payroll integration"
        },
        {
          item: "Built-in backup camera to verify failed punches"
        }
      ]
    }
  ]
};

export const ParallaxOneData = {
  iconName: "mei-team",
  title: "Les grandes choses dans l'histoire d'une entreprise ne sont jamais le résultat d'un seul homme mais,",
  specialText: " celui de toute une équipe",
  text:
    "Notre équipe combinée à nos infrastructures est optimisée pour sortir le meilleur de chacun ainsi que le meilleur des résultats."
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "Quelques-unes de nos réalisations",
    text:
      "Voici quelques productions de livres audio que Studio Kampus a entièrement produites avec son équipe et ses infrastructures professionnels. Pour en connaître davantage sur notre catalogue de réalisations, entrez en contact avec nous."
  }
};

import video02 from "@/images/home_1/3.jpg";

export const VideoTwoData = {
  sectionContent: {
    title: "Expériences Digitales",
    subTitle: "Comment nous construisons nos",
    text:
      "Nous sommes dévoués à construire et donner non seulement des produits et services \n impeccables, mais également des expériences digitales uniques dans l'industrie."
  },
  video: {
    title: "Vidéo",
    ID: "21sfbJzrWIs",
    image: video02
  }
};

import aboutTwo02 from "@/images/home_1/1.jpg";

export const AboutTwoData = {
  sectionContent: {
    title: "La plus grosse boîte de production de livres audio au Canada.",
    subTitle: "Nous sommes fiers d'être",
  },
  gallery: [, aboutTwo02]
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    title: "real experience",
    subTitle: "our core features",
    text:
      "We are committed to providing our customers with exceptional service while offering our employees the best training."
  },
  posts: [
    {
      title: "No Coding Skills Require",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    },
    {
      title: "Online Documentation",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    },
    {
      title: "SEO Optimized",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    }
  ],
  image: {
    text: "Total design freedom \n for everyone.",
    path: featureTwo01
  }
};

export const CallToActionTwoData = [
  {
    label: "View our Recent Work",
  },
  {
    label: "Reqeust a free quote",
    url: "/contact"
  }
];
