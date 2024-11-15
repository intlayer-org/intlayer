import { type DeclarationContent, t } from 'intlayer';
import { ExternalLinks, PagesRoutes } from '@/Routes';

type SectionsContent = {
  sections: {
    id: string;
    title: string;
    url: string;
    label: string;
  }[];
  github: {
    id: string;
    url: string;
    title: string;
    label: string;
    gitHubLogoAlt: string;
  };
  logo: {
    label: string;
    url: string;
  };
  logout: {
    title: string;
    label: string;
  };
  login: {
    url: string;
    title: string;
    label: string;
  };
};

export const navbarContent = {
  key: 'navbar',
  content: {
    logo: {
      label: t({
        en: 'Company logo - Go to home page',
        fr: "Logo de l'entreprise - Aller à la page d’accueil",
        es: 'Logotipo de la empresa - Ir a la página de inicio',
      }),
      url: PagesRoutes.Home,
    },
    sections: [
      {
        id: 'home',
        title: t({
          en: 'Home',
          fr: 'Accueil',
          es: 'Inicio',
        }),
        url: PagesRoutes.Home,
        label: t({
          en: 'Go to home page',
          fr: 'Aller à la page d’accueil',
          es: 'Ir a la página de inicio',
        }),
      },
      {
        id: 'demo',
        title: t({
          en: 'Demo',
          fr: 'Démo',
          es: 'Demo',
        }),
        url: PagesRoutes.Demo,
        label: t({
          en: 'Go to the demo page',
          fr: 'Aller à la page de démo',
          es: 'Ir a la página de demostración',
        }),
      },
      {
        id: 'pricing',
        title: t({
          en: 'Pricing',
          fr: 'Tarification',
          es: 'Precios',
        }),
        url: PagesRoutes.Pricing,
        label: t({
          en: 'Go to the pricing page',
          fr: 'Aller à la page de tarification',
          es: 'Ir a la página de precios',
        }),
      },
      {
        id: 'dashboard',
        title: t({
          en: 'Dashboard',
          fr: 'Tableau de bord',
          es: 'Tablero',
        }),
        url: PagesRoutes.Dashboard,
        label: t({
          en: 'Go to the dashboard',
          fr: 'Aller à la page de tableau de bord',
          es: 'Ir a la página de tablero',
        }),
      },
      {
        id: 'doc',
        title: 'Doc',
        url: PagesRoutes.Doc,
        label: t({
          en: 'Go to the documentation page',
          fr: 'Aller à la page de documentation',
          es: 'Ir a la página de documentation',
        }),
      },
    ],
    github: {
      id: 'github',
      url: ExternalLinks.Github,
      title: t({
        en: 'Github',
        fr: 'Github',
        es: 'Github',
      }),
      label: t({
        en: 'Go to the github repo',
        fr: 'Aller sur le dépôt github',
        es: 'Ir al repositorio de github',
      }),
      gitHubLogoAlt: t({
        en: 'Github logo',
        fr: 'Logo Github',
        es: 'Logo de Github',
      }),
    },

    logout: {
      title: t({
        en: 'Logout',
        fr: 'Déconnexion',
        es: 'Cerrar sesión',
      }),
      label: t({
        en: 'Logout',
        fr: 'Se déconnecter',
        es: 'Cerrar sesión',
      }),
    },
    login: {
      url: PagesRoutes.Auth_SignIn,
      title: t({
        en: 'Login',
        fr: 'Connexion',
        es: 'Iniciar sesión',
      }),
      label: t({
        en: 'Go to login page',
        fr: 'Aller à la page de connexion',
        es: 'Ir a la página de inicio de sesión',
      }),
    },
  },
} satisfies DeclarationContent<SectionsContent>;

export default navbarContent;
