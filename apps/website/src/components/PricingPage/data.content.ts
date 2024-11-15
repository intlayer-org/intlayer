import process from 'process';
import { t, DeclarationContent } from 'intlayer';
import { PagesRoutes } from '@/Routes';

export type Plans = 'free' | 'premium' | 'enterprise';
export type Period = 'monthly' | 'yearly';

export type PricingInfo = {
  title: string;
  price: number;
  description: string;
  checkPoint: string[];
  callToAction: {
    label: string;
    url: string;
    text: string;
  };
};

export const planDetails = {
  free: {
    title: t({ en: 'Free', fr: 'Gratuit', es: 'Gratis' }),
    price: 0,
    description: t({
      en: 'Ideal for individuals looking to activate the visual editor on their application. Edit content directly with the AI interface and get a feel for Intlayer’s capabilities.',
      fr: 'Idéal pour les personnes qui cherchent à activer l’éditeur visuel sur leur application. Modifiez le contenu directement avec l’interface AI et obtenez un aperçu des capacités de Intlayer.',
      es: 'Ideal para personas que buscan activar el editor visual en su aplicación. Edite el contenido directamente con la interfaz AI y obtenga una sensación de las capacidades de Intlayer.',
    }),
    checkPoint: t({
      en: [
        'Access to all Intlayer packages',
        'Unlimited usage of the visual editor',
        'Unlimited distant dictionaries',
        '100 Mb of storage',
        '1 project',
        '1 organization user',
      ],
      fr: [
        'Accès à tous les packages Intlayer',
        'Utilisation illimitée de l’éditeur visuel',
        'Dictionnaires distants illimités',
        '100 Mo de stockage',
        '1 projet',
        '1 utilisateur d’organisation',
      ],
      es: [
        'Acceso a todos los paquetes de Intlayer',
        'Uso ilimitado del editor visual',
        'Diccionarios distantes ilimitados',
        '100 Mb de almacenamiento',
        '1 proyecto',
        '1 usuario de organización',
      ],
    }),
    callToAction: {
      label: t({
        en: 'Try it for free',
        fr: 'Essayez gratuitement',
        es: 'Pruébalo gratuitamente',
      }),
      url: PagesRoutes.Dashboard,
      text: t({
        en: 'Try it for free',
        fr: 'Essayez gratuitement',
        es: 'Pruébalo gratuitamente',
      }),
    },
  },
  premium: {
    title: t({ en: 'Premium', fr: 'Premium', es: 'Premium' }),
    description: t({
      en: 'Designed for small to medium teams needing more flexibility. Includes AI content generation, up to 10 projects, and 20 organization users.',
      fr: 'Conçu pour les équipes petites à moyennes nécessitant plus de flexibilité. Comprend la génération de contenu IA, jusqu’à 10 projets et 20 utilisateurs d’organisation.',
      es: 'Diseñado para equipos pequeños a medianos que necesitan más flexibilidad. Incluye generación de contenido IA, hasta 10 proyectos y 20 usuarios de la organización.',
    }),
    checkPoint: t({
      en: [
        'Access to all Intlayer packages',
        'Unlimited usage of the visual editor',
        'Unlimited distant dictionaries',
        '500 Mb of storage',
        '10 projects',
        '20 organization users',
        'AI powered content generation',
        'Premium support',
      ],
      fr: [
        'Accès à tous les packages Intlayer',
        'Utilisation illimitée de l’éditeur visuel',
        'Dictionnaires distants illimités',
        '500 Mo de stockage',
        '10 projets',
        '20 utilisateurs d’organisation',
        'Génération de contenu IA',
        'Support premium',
      ],
      es: [
        'Acceso a todos los paquetes de Intlayer',
        'Uso ilimitado del editor visual',
        'Diccionarios distantes ilimitados',
        '500 Mb de almacenamiento',
        '10 proyectos',
        '20 usuarios de la organización',
        'Generación de contenido IA',
        'Soporte premium',
      ],
    }),
  },
  enterprise: {
    title: t({ en: 'Enterprise', fr: 'Entreprise', es: 'Empresa' }),
    description: t({
      en: 'Built for larger teams requiring advanced tools. Get unlimited projects, AI-powered SEO, and content generation with unlimited users.',
      fr: 'Conçu pour les grandes équipes nécessitant des outils avancés. Profitez de projets illimités, SEO IA, et génération de contenu avec utilisateurs illimités.',
      es: 'Diseñado para equipos grandes que requieren herramientas avanzadas. Obtén proyectos ilimitados, SEO IA, y generación de contenido con usuarios ilimitados.',
    }),
    checkPoint: t({
      en: [
        'Access to all Intlayer packages',
        'Unlimited usage of the visual editor',
        'Unlimited distant dictionaries',
        '2+ Gb of storage',
        'Unlimited projects',
        'Unlimited organization users',
        'AI powered content generation',
        'AI powered SEO optimization',
        'Premium support',
      ],
      fr: [
        'Accès à tous les packages Intlayer',
        'Utilisation illimitée de l’éditeur visuel',
        'Dictionnaires distants illimités',
        '2+ Go de stockage',
        'Projets illimités',
        'Utilisateurs d’organisation illimités',
        'Génération de contenu IA',
        'Optimisation SEO IA',
        'Support premium',
      ],
      es: [
        'Acceso a todos los paquetes de Intlayer',
        'Uso ilimitado del editor visual',
        'Diccionarios distantes ilimitados',
        '2+ Gb de almacenamiento',
        'Proyectos ilimitados',
        'Usuarios de la organización ilimitados',
        'Generación de contenido IA',
        'Optimización SEO IA',
        'Soporte premium',
      ],
    }),
  },
} satisfies DeclarationContent<Record<Plans, Partial<PricingInfo>>>['content'];

const pricing = {
  monthly: {
    free: planDetails.free,
    premium: {
      ...planDetails.premium,
      callToAction: {
        label: t({ en: 'Get started', fr: 'Commencer', es: 'Comenzar' }),
        url: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_SUBSCRIPTION_MONTLY_LINK!,
        text: t({ en: 'Get started', fr: 'Commencer', es: 'Comenzar' }),
      },
      price: 9.99,
    },
    enterprise: {
      ...planDetails.enterprise,
      callToAction: {
        url: process.env
          .NEXT_PUBLIC_STRIPE_ENTERPRISE_SUBSCRIPTION_MONTLY_LINK!,
        label: t({ en: 'Get started', fr: 'Commencer', es: 'Comenzar' }),
        text: t({ en: 'Get started', fr: 'Commencer', es: 'Comenzar' }),
      },
      price: 19.99,
    },
  },
  yearly: {
    free: planDetails.free,

    premium: {
      ...planDetails.premium,
      callToAction: {
        url: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_SUBSCRIPTION_YEARLY_LINK!,
        label: t({ en: 'Get started', fr: 'Commencer', es: 'Comenzar' }),
        text: t({ en: 'Get started', fr: 'Commencer', es: 'Comenzar' }),
      },
      price: 7.99,
    },
    enterprise: {
      ...planDetails.enterprise,
      callToAction: {
        url: process.env
          .NEXT_PUBLIC_STRIPE_ENTERPRISE_SUBSCRIPTION_YEARLY_LINK!,
        label: t({ en: 'Get started', fr: 'Commencer', es: 'Comenzar' }),
        text: t({ en: 'Get started', fr: 'Commencer', es: 'Comenzar' }),
      },
      price: 16.99,
    },
  },
} satisfies DeclarationContent<
  Record<Period, Record<Plans, PricingInfo>>
>['content'];

const pricingContent = {
  key: 'pricing',
  content: {
    title: t({ en: 'Pricing', fr: 'Tarification', es: 'Precios' }),
    pricing,
    period: {
      monthly: t({ en: 'Monthly', fr: 'Mensuel', es: 'Mensual' }),

      yearly: t({ en: 'Yearly', fr: 'Annuel', es: 'Anual' }),
    },
  },
};

export default pricingContent;
