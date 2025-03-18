import { techIcons } from "./tech_icons";
/* NOTAS:

-La imagen siempre debe ser un array aunque sea una solas.

-Resoluciones que me parecen adecuadas:
    -Imagenes y videos: 1600x900 
    -Miniaturas: 640x360

 */

const projects = [
    {
        id: 'freshcoffe',
        name: 'FreshCoffe',
        colors: {
            light: '#e5c890',
            dark: '#f9e2af'
        },
        resume: {
            es: 'E-commerce gastronómico con WebSockets para seguimiento de pedidos en tiempo real.',
            en: 'Gastronomic e-commerce with WebSockets for real-time order tracking.'
        },
        introduction: {
            es: `
              <p>FreshCoffee es un e-commerce gastronómico para cafeterías. La plataforma integra un sistema completo de pedidos y administración con las siguientes funcionalidades:</p>
              <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
                  <li><strong>Sistema de pedidos interactivo:</strong> Carrito de compras dinámico con gestión de estados mediante React Context y useState.</li>
                  <li><strong>Notificaciones en tiempo real:</strong> Feedback visual inmediato para acciones de compra y confirmaciones.</li>
                  <li><strong>Panel administrativo con WebSockets:</strong> Visualización instantánea de pedidos sin recargar la página.</li>
                  <li><strong>Autenticación JWT:</strong> Sistema seguro de registro y login con tokens de acceso.</li>
                  <li><strong>Dashboard administrativo:</strong> Control centralizado para gestión de productos y pedidos.</li>
              </ul>
            `,
            en: `
              <p>FreshCoffee is a gastronomic e-commerce platform for coffee shops. The platform integrates a complete ordering and management system with the following functionalities:</p>
              <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
                  <li><strong>Interactive ordering system:</strong> Dynamic shopping cart with state management using React Context and useState.</li>
                  <li><strong>Real-time notifications:</strong> Immediate visual feedback for purchase actions and confirmations.</li>
                  <li><strong>Admin panel with WebSockets:</strong> Instant order visualization without page reloads.</li>
                  <li><strong>JWT Authentication:</strong> Secure registration and login system with access tokens.</li>
                  <li><strong>Administrative dashboard:</strong> Centralized control for product and order management.</li>
              </ul>
            `
        },
        videos: ['freshcoffe_explain_english_compressed', 'freshcoffe_explain_spanish_compressed'],
        technologies: [
            {
                name: 'Laravel',
                description: {
                    es: 'para la API de backend y servicios de WebSockets',
                    en: 'for the backend API and WebSocket services'
                },
                icon: techIcons.laravel
            },
            {
                name: 'React',
                description: {
                    es: 'para elfrontend',
                    en: 'for the frontend'
                },
                icon: techIcons.react,
            },
            {
                name: 'TailwindCSS',
                description: {
                    es: 'para el diseño y estilos',
                    en: 'for design and styling'
                },
                icon: techIcons.tailwind,
            },
            {
                name: 'MySQL',
                description: {
                    es: 'como base de datos',
                    en: 'as the database'
                },
                icon: techIcons.mysql,
            }
        ],
        github: 'https://github.com/MarianoFrank/freshcoffee-backend',
    },
    {
        id: 'devjobs',
        name: 'DevJobs',
        colors: {
            light: '#babbf1',
            dark: '#b4befe'
        },
        resume: {
            es: 'Plataforma de empleos con roles (reclutador/postulante), integración de CVs en PDF y notificaciones.',
            en: 'Job platform with roles (recruiter/applicant), PDF CV integration, and notifications.'
        },
        introduction: {
            es: `
              <p>DevJobs es una aplicación de gestión laboral inspirada en LinkedIn, desarrollada con Laravel, Blade y Livewire. La plataforma ofrece funcionalidades especializadas para ambos roles:</p>
              <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
                  <li><strong>Panel de reclutadores:</strong> CRUD completo para vacantes, visualización de postulantes y notificaciones por email.</li>
                  <li><strong>Funcionalidades para postulantes:</strong> Búsqueda avanzada con filtros (categoría, salario, nombre) y envío de CV en PDF.</li>
                  <li><strong>Generación de PDFs:</strong> Descarga automática de resúmenes de vacantes y gestión de CVs en formato PDF.</li>
                  <li><strong>Validaciones robustas:</strong> Control de formatos de archivo (PDF) y validaciones en todos los formularios.</li>
                  <li><strong>Interfaz dinámica:</strong> Componentes reactivos desarrollados con Livewire y Alpine.js para interacciones fluidas.</li>
                  <li><strong>Autenticación segmentada:</strong> Sistema de registro/login diferenciado para reclutadores y postulantes.</li>
                  <li><strong>Notificaciones automaticas:</strong> Envío de correos electrónicos ante nuevas postulaciones.</li>
              </ul>
            `,
            en: `
              <p>DevJobs is a job management application inspired by LinkedIn, developed with Laravel, Blade, and Livewire. The platform offers specialized functionalities for both roles:</p>
              <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
                  <li><strong>Recruiter panel:</strong> Complete CRUD for job postings, applicant visualization, and email notifications.</li>
                  <li><strong>Applicant features:</strong> Advanced search with filters (category, salary, name) and PDF CV submission.</li>
                  <li><strong>PDF generation:</strong> Automatic download of job summaries and management of CVs in PDF format.</li>
                  <li><strong>Robust validations:</strong> File format control (PDF) and validations in all forms.</li>
                  <li><strong>Dynamic interface:</strong> Reactive components developed with Livewire and Alpine.js for smooth interactions.</li>
                  <li><strong>Segmented authentication:</strong> Differentiated registration/login system for recruiters and applicants.</li>
                  <li><strong>Automatic notifications:</strong> Email alerts for new applications.</li>
              </ul>
            `
        },
        content: [],
        technologies: [
            {
                name: 'Laravel',
                description: {
                    es: 'en el backend',
                    en: 'in the backend'
                },
                icon: techIcons.laravel,
            },
            {
                name: 'Livewire',
                description: {
                    es: 'para la interactividad en tiempo real',
                    en: 'for real-time interactivity'
                },
                icon: techIcons.livewire,
            },
            {
                name: 'AlpineJS',
                description: {
                    es: 'para la interactividad en tiempo real',
                    en: 'for real-time interactivity'
                },
                icon: techIcons.alpinejs,
            },
            {
                name: 'TailwindCSS',
                description: {
                    es: 'para el diseño y estilos',
                    en: 'for design and styling'
                },
                icon: techIcons.tailwind,
            },
            {
                name: 'MySQL',
                description: {
                    es: 'como base de datos',
                    en: 'as the database'
                },
                icon: techIcons.mysql,
            }
        ],
        github: 'https://github.com/MarianoFrank/devjobs-laravel',
    },
    {
        id: 'devstagram',
        name: 'Devstagram',
        colors: {
            light: '#EEDDD6',
            dark: '#EEDDD6'
        },
        resume: {
            es: 'Plataforma social interactiva inspirada en Instagram, que permite a los usuarios compartir fotos e interactuar entre si.',
            en: 'Interactive social platform inspired by Instagram, allowing users to share photos and interact with each other.'
        },
        introduction: {
            es: `
              <p>Devstagram es una plataforma social inspirada en Instagram, desarrollada con Laravel y Blade, esta aplicación permite:</p>
              <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
                  <li><strong>Publicar fotos:</strong> Subir imágenes para compartir momentos.</li>
                  <li><strong>Interacción social:</strong> Seguir a otros usuarios, dar "like" a publicaciones y comentar.</li>
                  <li><strong>Feed personalizado:</strong> En la página principal, se muestran las publicaciones de las personas que sigues.</li>
                  <li><strong>Búsqueda de usuarios:</strong> Una funcionalidad para encontrar y conectar con otros perfiles.</li>
                  <li><strong>Cuentas personalizables:</strong> Los usuarios pueden configurar su perfil con una foto personalizada y su nombre.</li>
                  <li><strong>Sistema de autenticación robusto:</strong> Incluye funcionalidades de registro, inicio de sesión y validaciones.</li>
              </ul>
            `,
            en: `
              <p>Devstagram is a social platform inspired by Instagram, developed with Laravel and Blade. This application allows:</p>
              <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
                  <li><strong>Photo posting:</strong> Upload images to share moments.</li>
                  <li><strong>Social interaction:</strong> Follow other users, like posts, and comment.</li>
                  <li><strong>Personalized feed:</strong> The main page displays posts from people you follow.</li>
                  <li><strong>User search:</strong> A feature to find and connect with other profiles.</li>
                  <li><strong>Customizable accounts:</strong> Users can set up their profile with a custom photo and name.</li>
                  <li><strong>Robust authentication system:</strong> Includes registration, login functionalities, and validations.</li>
              </ul>
            `
        },
        content: [],
        technologies: [
            {
                name: 'Laravel',
                description: {
                    es: 'en el backend',
                    en: 'in the backend'
                },
                icon: techIcons.laravel,
            },
            {
                name: 'Livewire',
                description: {
                    es: 'para la interactividad en tiempo real',
                    en: 'for real-time interactivity'
                },
                icon: techIcons.livewire,
            },
            {
                name: 'TailwindCSS',
                description: {
                    es: 'para el diseño y estilos',
                    en: 'for design and styling'
                },
                icon: techIcons.tailwind,
            },
            {
                name: 'MySQL',
                description: {
                    es: 'como base de datos',
                    en: 'as the database'
                },
                icon: techIcons.mysql,
            }
        ],
        github: 'https://github.com/MarianoFrank/Devstagram_Laravel',
    },
    {
        id: 'meeti',
        name: 'Meeti',
        colors: {
            light: '#34D399',
            dark: '#065F46'
        },
        resume: {
            es: 'Plataforma inspirada en Meetup que facilita la creación de grupos y eventos con mapas interactivos y búsqueda geoespacial.',
            en: 'Platform inspired by Meetup that facilitates the creation of groups and events with interactive maps and geospatial search.'
        },
        introduction: {
            es: `
                      <p>Meeti es una aplicación inspirada en Meetup, diseñada para que las personas puedan crear grupos y organizar eventos con fechas y horarios específicos.</p>
                      <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
                          <li><strong>Gestión integral:</strong> CRUD completo para crear, editar y eliminar grupos y eventos.</li>
                          <li><strong>Interacción en eventos:</strong> Los usuarios pueden comentar en los eventos, facilitando la comunicación y el intercambio de opiniones.</li>
                          <li><strong>Inscripción a eventos:</strong> Permite a los usuarios inscribirse y confirmar su asistencia a los eventos.</li>
                          <li><strong>Mapas interactivos:</strong> Integración con Leaflet para mostrar ubicaciones precisas mediante pines en mapas dinámicos.</li>
                          <li><strong>Búsqueda geoespacial:</strong> Utiliza PostGIS para buscar eventos disponibles en un radio específico de la zona deseada.</li>
                          <li><strong>Gestión de cuentas:</strong> Registro y validación por email, con la posibilidad de editar perfiles y subir un avatar.</li>
                      </ul>
            `,
            en: `
                      <p>Meeti is an application inspired by Meetup, designed for people to create groups and organize events with specific dates and times.</p>
                      <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
                          <li><strong>Comprehensive management:</strong> Full CRUD for creating, editing, and deleting groups and events.</li>
                          <li><strong>Event interaction:</strong> Users can comment on events, facilitating communication and feedback.</li>
                          <li><strong>Event registration:</strong> Allows users to sign up and confirm their attendance at events.</li>
                          <li><strong>Interactive maps:</strong> Integration with Leaflet to display precise locations with pins on dynamic maps.</li>
                          <li><strong>Geospatial search:</strong> Uses PostGIS to search for events within a specific radius of a desired area.</li>
                          <li><strong>Account management:</strong> Email registration and validation, with the option to edit profiles and upload an avatar.</li>
                      </ul>
            `
        },
        content: [],
        technologies: [
            {
                name: 'NodeJs',
                description: {
                    es: 'con Express.Js para el backend',
                    en: 'with Express.js for the backend'
                },
                icon: techIcons.nodejs,
            },
            {
                name: 'JavaScript',
                icon: techIcons.javascript,
            },
            {
                name: 'EJS',
                description: {
                    es: 'como motor de plantillas para renderizar el frontend de forma dinámica.',
                    en: 'as a templating engine to dynamically render the frontend.'
                },
                icon: techIcons.file_code,
            },
            {
                name: 'PostgresSQL',
                description: {
                    es: 'como base de datos, con la extension PostGIS',
                    en: 'as the database, with the PostGIS extension'
                },
                icon: techIcons.postgres,
            },
        ],
        github: 'https://github.com/MarianoFrank/Metti-NodeJS',
    }
];

export default projects;