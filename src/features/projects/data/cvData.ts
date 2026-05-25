// ─── INTERFACES DE DATOS STRICTOR ───
export interface WorkExperience {
    id: string;
    roleES: string;
    roleEN: string;
    company: string;
    periodES: string;
    periodEN: string;
    location: string;
    bulletsES: string[];
    bulletsEN: string[];
}

export interface SkillCategory {
    titleES: string;
    titleEN: string;
    skills: { name: string; level: string }[];
}

export interface EducationItem {
    id: string;
    titleES: string;
    titleEN: string;
    institution: string;
    period: string;
    location?: string;
}

// ─── DATA DE TU HOJA DE VIDA REAL ───

export const workExperiences: WorkExperience[] = [
    {
        id: 'exp-web-present',
        roleES: 'Desarrollador Web Senior / Líder Técnico',
        roleEN: 'Senior Web Developer / Tech Lead',
        company: 'Human Bionics',
        periodES: 'Jul. 2024 - Presente',
        periodEN: 'Jul. 2024 - Present',
        location: 'Bucaramanga, Colombia',
        bulletsES: [
            'Lidero el diseño y desarrollo modular de intranets y plataformas administrativas utilizando Next.js, optimizando los tiempos de carga y la experiencia de usuario.',
            'Diseñé e implementé la página administrativa completa de Vitrinea, facilitando el control dinámico de inventarios, productos y gestión de usuarios.',
            'Estructuré el software y el backend web para el centro de experiencia de Coffi Club, automatizando flujos operativos clave y mejorando el rendimiento general de la tienda.',
            'Implementé plataformas administrativas robustas para un CDA, logrando una gestión eficiente de registros, auditorías internas y sincronización segura de datos.'
        ],
        bulletsEN: [
            'Lead the modular design and development of intranets and administrative platforms using Next.js, optimizing loading times and user experience.',
            'Designed and implemented the full administrative site for Vitrinea, enabling dynamic control of inventories, products, and user management.',
            'Structured the software and web backend for the Coffi Club experience center, automating key operational workflows and improving general storefront performance.',
            'Implemented robust administrative platforms for a CDA, achieving efficient record management, internal technical audits, and secure data synchronization.'
        ]
    },
    {
        id: 'exp-mobile',
        roleES: 'Desarrollador Móvil',
        roleEN: 'Mobile Developer',
        company: 'Human Bionics',
        periodES: 'Jul. 2023 - Jun. 2024',
        periodEN: 'Jul. 2023 - Jun. 2024',
        location: 'Bucaramanga, Colombia',
        bulletsES: [
            'Participé activamente en el desarrollo y arquitectura de Alpress, Pmax y Vtight, aplicaciones médicas especializadas en tratamientos de linfedema, disfunción eréctil e incontinencia urinaria.',
            'Contribuí en el desarrollo de Vitrinea, integrando flujos interactivos de comercio electrónico, simulación de imágenes 360° y realidad aumentada para pruebas virtuales.',
            'Diseñé una aplicación móvil avanzada para recolección de datos estrictos en un CDA, asegurando sincronización offline-online transparente con la plataforma administrativa central.',
            'Utilicé Flutter y Dart como core técnico prioritario bajo estándares de arquitectura limpia y gestión de estado avanzada (Riverpod).'
        ],
        bulletsEN: [
            'Actively participated in the development and architecture of Alpress, Pmax, and Vtight, specialized medical apps for lymphedema, erectile dysfunction, and urinary incontinence treatments.',
            'Contributed to the development of Vitrinea, integrating interactive e-commerce flows, 360° image simulation, and augmented reality for virtual try-ons.',
            'Designed an advanced mobile application for strict data collection inside a CDA, ensuring seamless offline-online synchronization with the central admin platform.',
            'Utilized Flutter and Dart as the primary technical core under clean architecture standards and advanced state management (Riverpod).'
        ]
    },
    {
        id: 'exp-web-initial',
        roleES: 'Desarrollador Web',
        roleEN: 'Web Developer',
        company: 'Human Bionics',
        periodES: 'Feb. 2023 - Jul. 2023',
        periodEN: 'Feb. 2023 - Jul. 2023',
        location: 'Bucaramanga, Colombia',
        bulletsES: [
            'Diseñé y desplegué la intranet principal de la compañía utilizando Flask como framework de backend y MySQL para la persistencia relacional de datos.',
            'Implementé un sistema automatizado de gestión y organización de archivos conectado con la API de Google Drive, facilitando el acceso rápido y la colaboración segura entre los equipos de ingeniería.'
        ],
        bulletsEN: [
            'Designed and deployed the company’s main intranet using Flask as the backend framework and MySQL for relational data persistence.',
            'Implemented an automated file management and organization system connected with the Google Drive API, streamlining quick access and secure collaboration across engineering teams.'
        ]
    }
];

export const skillCategories: SkillCategory[] = [
    {
        titleES: 'Desarrollo Frontend & Web',
        titleEN: 'Frontend & Web Development',
        skills: [
            { name: 'Next.js', level: 'Avanzado' },
            { name: 'React.js', level: 'Avanzado' },
            { name: 'TypeScript', level: 'Avanzado' },
            { name: 'Material UI (MUI)', level: 'Avanzado' },
            { name: 'Flask / Python', level: 'Intermedio' }
        ]
    },
    {
        titleES: 'Desarrollo Móvil',
        titleEN: 'Mobile Development',
        skills: [
            { name: 'Flutter', level: 'Avanzado' },
            { name: 'Dart', level: 'Avanzado' },
            { name: 'Riverpod / BloC', level: 'Avanzado' },
            { name: 'State Management', level: 'Avanzado' }
        ]
    },
    {
        titleES: 'Bases de Datos & Cloud',
        titleEN: 'Databases & Cloud',
        skills: [
            { name: 'Firebase Ecosystem', level: 'Avanzado' },
            { name: 'Firebase Hosting', level: 'Avanzado' },
            { name: 'MySQL / SQL', level: 'Intermedio' }
        ]
    },
    {
        titleES: 'Metodologías & DevOps',
        titleEN: 'Methodologies & DevOps',
        skills: [
            { name: 'Arquitectura Limpia', level: 'Avanzado' },
            { name: 'Auditoría Técnica', level: 'Avanzado' },
            { name: 'Resolución de Problemas', level: 'Avanzado' },
            { name: 'Trabajo en Equipo', level: 'Experto' }
        ]
    }
];

export const academicEducation: EducationItem[] = [
    {
        id: 'edu-degree',
        titleES: 'Ingeniería de Sistemas',
        titleEN: 'Systems Engineering',
        institution: 'Universidad Autónoma de Bucaramanga (UNAB)',
        period: '2019 - 2023',
        location: 'Bucaramanga, Colombia'
    }
];

export const industryCertifications: EducationItem[] = [
    {
        id: 'cert-sena',
        titleES: 'Técnico en Mantenimiento de Equipos de Cómputo',
        titleEN: 'Computer Equipment Maintenance Technician',
        institution: 'SENA',
        period: '2017 - 2018'
    },
    {
        id: 'cert-cyber',
        titleES: 'Introduction to Cybersecurity',
        titleEN: 'Introduction to Cybersecurity',
        institution: 'Cisco Networking Academy',
        period: '2024'
    },
    {
        id: 'cert-linux',
        titleES: 'NDG Linux Unhatched',
        titleEN: 'NDG Linux Unhatched',
        institution: 'Cisco Networking Academy',
        period: '2022'
    },
    {
        id: 'cert-iot',
        titleES: 'Introduction to IoT',
        titleEN: 'Introduction to IoT',
        institution: 'Cisco Networking Academy',
        period: '2021'
    }
];