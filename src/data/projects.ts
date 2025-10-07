import type { Props as ProjectCardProps } from '../components/ProjectCard.astro';


import devfolioImage from '../assets/images/projects/devfolio.svg';
import synclearnImage from '../assets/images/projects/synclearn.svg';
import zenithImage from '../assets/images/projects/zenith-ecommerce.svg';
import snippetsphereImage from '../assets/images/projects/snippetsphere.svg';
import insightifyImage from '../assets/images/projects/insightify.svg';
import markflowImage from '../assets/images/projects/markflow.svg';

export type ProjectData = Omit<ProjectCardProps, 'index'>;

export const projectsData: ProjectData[] = [
  {
    title: 'DevFolio',
    description:
      'Osobiste portfolio i blog, które właśnie przeglądasz. Zbudowane w Astro dla maksymalnej wydajności i SEO. Wykorzystuje View Transitions dla płynnych animacji oraz Sveltia CMS do zarządzania treścią.',
    imgSrc: devfolioImage,
    imgAlt: 'Grafika projektu DevFolio',
    demoUrl: 'https://codesandbox.io/',
    sourceUrl: 'https://github.com/n1ghtmare13/portfolio-blog-projekt/',
    tags: [
      { text: 'Astro', color: 'primary' },
      { text: 'TypeScript', color: 'secondary' },
      { text: 'Bootstrap', color: 'success' },
    ],
  },
  {
    title: 'SyncLearn',
    description:
      'Platforma e-learningowa do współpracy w czasie rzeczywistym. Zbudowana przy użyciu Next.js (SSR) oraz WebSockets. Backend oparty na Node.js i Express.js zapewnia skalowalność i wydajność.',
    imgSrc: synclearnImage,
    imgAlt: 'Grafika projektu SyncLearn',
    demoUrl: 'https://codesandbox.io/',
    sourceUrl: 'https://github.com/',
    tags: [
      { text: 'Next.js', color: 'primary' },
      { text: 'React', color: 'secondary' },
      { text: 'Node.js', color: 'success' },
      { text: 'Socket.IO', color: 'danger' },
    ],
  },
  {
    title: 'Zenith eCommerce',
    description:
      'Nowoczesna platforma e-commerce typu headless. Frontend w React z Redux Toolkit, a backend oparty na Node.js z API GraphQL zapewnia elastyczność i integrację z systemami płatności.',
    imgSrc: zenithImage,
    imgAlt: 'Grafika projektu Zenith eCommerce',
    demoUrl: 'https://codesandbox.io/',
    sourceUrl: 'https://github.com/',
    tags: [
      { text: 'React', color: 'primary' },
      { text: 'Redux', color: 'secondary' },
      { text: 'Node.js', color: 'success' },
      { text: 'GraphQL', color: 'danger' },
    ],
  },
  {
    title: 'SnippetSphere',
    description:
      'Aplikacja webowa do przechowywania i udostępniania fragmentów kodu. Zbudowana ze SvelteKit dla lekkiego i reaktywnego UI. Backend RESTful API oparty na Node.js z uwierzytelnianiem JWT.',
    imgSrc: snippetsphereImage,
    imgAlt: 'Grafika projektu SnippetSphere',
    demoUrl: 'https://codesandbox.io/',
    sourceUrl: 'https://github.com/',
    tags: [
      { text: 'SvelteKit', color: 'primary' },
      { text: 'TypeScript', color: 'secondary' },
      { text: 'Node.js', color: 'success' },
      { text: 'JWT', color: 'dark' },
    ],
  },
  {
    title: 'Insightify Dashboard',
    description:
      'Interaktywny panel analityczny do wizualizacji danych. Frontend w React z biblioteką D3.js, zasilany przez backend Node.js, który dostarcza dane poprzez WebSockets.',
    imgSrc: insightifyImage,
    imgAlt: 'Grafika projektu Insightify',
    demoUrl: 'https://codesandbox.io/',
    sourceUrl: 'https://github.com/',
    tags: [
      { text: 'React', color: 'primary' },
      { text: 'D3.js', color: 'secondary' },
      { text: 'Node.js', color: 'success' },
      { text: 'WebSockets', color: 'warning' },
    ],
  },
  {
    title: 'MarkFlow Editor',
    description:
      'Webowy edytor Markdown z podglądem na żywo i synchronizacją z chmurą. Stworzony przy użyciu TypeScript i React, zoptymalizowany pod kątem wydajności.',
    imgSrc: markflowImage,
    imgAlt: 'Grafika projektu MarkFlow Editor',
    demoUrl: 'https://codesandbox.io/',
    sourceUrl: 'https://github.com/',
    tags: [
      { text: 'React', color: 'primary' },
      { text: 'TypeScript', color: 'secondary' },
      { text: 'Firebase', color: 'success' },
      { text: 'PWA', color: 'dark' },
    ],
  },
];
