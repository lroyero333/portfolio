
import sercaHome from '@/assets/projects/serca/serca4.png';
import sercaMap from '@/assets/projects/serca/serca5.jpg';
import sercaWelcome from '@/assets/projects/serca/serca6.jpg';

export interface Project {
    id: string;
    titleES: string;
    titleEN: string;
    descriptionES: string;
    descriptionEN: string;
    extendedDescriptionES?: string;
    extendedDescriptionEN?: string;
    tags: string[];
    category: 'mobile' | 'web' | 'audit';
    imageUrl?: string;
    images?: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const myProjects: Project[] = [
    {
        id: 'serca-ecosystem',
        titleES: 'Serca Health Ecosystem (Proyecto Profesional)',
        titleEN: 'Serca Health Ecosystem (Professional Project)',
        descriptionES: 'Contribución clave en el diseño y arquitectura del ecosistema móvil para una plataforma de salud domiciliaria que conecta pacientes con profesionales de enfermería.',
        descriptionEN: 'Key contribution to the design and architecture of the mobile ecosystem for a home healthcare platform connecting patients with certified nurses.',
        extendedDescriptionES: 'Implementación de módulos críticos para la verificación de credenciales profesionales (ReTHUS), gestión de estados compleja con Riverpod y sincronización en tiempo real con Firebase para asignación de turnos médicos.',
        extendedDescriptionEN: 'Implementation of critical modules for professional credential verification, complex state management using Riverpod, and real-time synchronization with Firebase for medical shift assignment.',
        tags: ['Flutter', 'Firebase', 'Riverpod', 'Clean Architecture', 'Healthcare Tech'],
        images: [sercaWelcome, sercaHome, sercaMap],
        imageUrl: sercaMap,
        category: 'mobile'
    },
    {
        id: 'human-bionics-medical',
        titleES: 'Medical Apps Suite - Human Bionics',
        titleEN: 'Medical Apps Suite - Human Bionics',
        descriptionES: 'Desarrollo de aplicaciones móviles especializadas para el tratamiento médico de linfedema, disfunción eréctil e incontinencia urinaria.',
        descriptionEN: 'Development of specialized mobile applications for the medical treatment of lymphedema, erectile dysfunction, and urinary incontinence.',
        extendedDescriptionES: 'Construcción integral en Flutter. Diseño e implementación de formularios avanzados para la recolección estricta de datos de conductores en un CDA, asegurando la sincronización con una plataforma web administrativa.',
        extendedDescriptionEN: 'Full build in Flutter. Design and implementation of advanced forms for strict driver data collection in a CDA, ensuring seamless synchronization with an administrative web platform.',
        tags: ['Flutter', 'Dart', 'Form Management', 'Data Sync', 'Mobile Medical Tech'],
        category: 'mobile'
    },
    {
        id: 'vitrinea-ecommerce',
        titleES: 'Vitrinea - E-commerce con Realidad Aumentada',
        titleEN: 'Vitrinea - E-commerce with Augmented Reality',
        descriptionES: 'Plataforma de comercio electrónico interactiva con integraciones de vanguardia como simulación de imágenes 360° y realidad aumentada.',
        descriptionEN: 'Interactive e-commerce platform featuring cutting-edge integrations such as 360° image simulation and augmented reality.',
        extendedDescriptionES: 'Desarrollo de la aplicación móvil principal en Flutter para la prueba virtual de prendas y accesorios. Adicionalmente se diseñó e implementó la página administrativa completa utilizando Next.js para la gestión de productos y usuarios.',
        extendedDescriptionEN: 'Development of the core mobile app in Flutter for virtual try-ons of clothes and accessories. Additionally, designed and implemented the full administrative site using Next.js for product and user management.',
        tags: ['Flutter', 'Next.js', 'Augmented Reality', '360° Images', 'E-commerce'],
        category: 'web'
    },
    {

        id: 'coffi-club-platform',
        titleES: 'Plataforma Administrativa & Sitios Corporativos',
        titleEN: 'Administrative Platform & Corporate Sites',
        descriptionES: 'Diseño y optimización de plataformas web administrativas y de servicios, incluyendo el centro de experiencia de Coffi Club.',
        descriptionEN: 'Design and optimization of administrative and service web platforms, including the Coffi Club experience center.',
        extendedDescriptionES: 'Migración y desarrollo de intranets corporativas hacia Next.js para mejorar el rendimiento de carga y SEO. Implementación de sistemas de gestión de archivos en Google Drive y tableros interactivos tipo Trello.',
        extendedDescriptionEN: 'Migration and development of corporate intranets to Next.js to improve loading performance and SEO. Implementation of Google Drive file management systems and Trello-like interactive boards.',
        tags: ['Next.js', 'React.js', 'Flask', 'MySQL', 'Productivity Tools'],
        category: 'web'
    },
    {
        id: 'web-portfolio-iers',
        titleES: 'Portafolio Interactivo Profesional',
        titleEN: 'Professional Interactive Portfolio',
        descriptionES: 'Arquitectura web modular diseñada en React y TypeScript para demostrar habilidades avanzadas de ingeniería frontend.',
        descriptionEN: 'Modular web architecture designed in React and TypeScript to demonstrate advanced frontend engineering skills.',
        extendedDescriptionES: 'Implementación de control de estado global, internacionalización completa (i18n) en tiempo real, interfaz responsiva premium con Material UI (MUI) y despliegue optimizado.',
        extendedDescriptionEN: 'Implementation of global state control, full real-time internationalization (i18n), premium responsive interface with Material UI (MUI), and optimized deployment.',
        tags: ['React', 'TypeScript', 'Material UI (MUI)', 'i18n', 'Vite'],
        category: 'web',
        githubUrl: 'https://github.com/',
        liveUrl: 'https://lers.dev'
    }
];