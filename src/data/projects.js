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
            light: '#FACC15',
            dark: '#FACC15'
        },
        resume: 'E-commerce gastronómico con WebSockets para seguimiento de pedidos en tiempo real.',
        introduction: `
        <p>FreshCoffee es un e-commerce gastronómico para cafeterías. La plataforma integra un sistema completo de pedidos y administración con las siguientes funcionalidades:</p>
        <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
            <li><strong>Sistema de pedidos interactivo:</strong> Carrito de compras dinámico con gestión de estados mediante React Context y useState.</li>
            <li><strong>Notificaciones en tiempo real:</strong> Feedback visual inmediato para acciones de compra y confirmaciones.</li>
            <li><strong>Panel administrativo con WebSockets:</strong> Visualización instantánea de pedidos sin recargar la página.</li>
            <li><strong>Autenticación JWT:</strong> Sistema seguro de registro y login con tokens de acceso y refresco.</li>
            <li><strong>Gestor de órdenes:</strong> Historial detallado con seguimiento de estados personalizables (en proceso/completado).</li>
            <li><strong>Dashboard administrativo:</strong> Control centralizado para gestión de productos, usuarios y métricas.</li>
            <li><strong>Diseño responsive:</strong> Interfaz adaptable a diferentes dispositivos móviles y desktop.</li>
            <li><strong>Comunicación bidireccional:</strong> Actualizaciones simultáneas entre cliente y administrador mediante WebSockets.</li>
        </ul>
        `,
        content: [
            {
                type: 'image',
                data: [
                    {
                        name: '1',
                        description: 'Formulario de registro'
                    },
                    {
                        name: '2_1',
                        description: 'Pagina principal'
                    },
                    {
                        name: '2_2',
                        description: 'Pagina principal'
                    },
                    {
                        name: '3',
                        description: 'Ventana modal para agregar productos al carrito'
                    },
                    {
                        name: '4',
                        description: ' Carrito lleno'
                    },
                    {
                        name: '5',
                        description: 'Orden enviada'
                    }

                ],
            },
            {
                type: 'video',
                data: [
                    {
                        name: '6',
                        description: 'Demostración de la funcionalidad de WebSockets'
                    }
                ],
            }
        ],
        technologies: [
            {
                name: 'Laravel',
                description: 'para la API de backend y servicios de WebSockets',
                icon: 'laravel',
            },
            {
                name: 'React',
                description: 'frontend',
                icon: 'react',
            },
            {
                name: 'TailwindCSS',
                description: 'para el diseño y estilos',
                icon: 'tailwind',
            },
            {
                name: 'MySQL',
                description: 'database',
                icon: 'MySQL',
            }
        ],
        github: 'https://github.com',
    },
    {
        id: 'devjobs',
        name: 'DevJobs',
        colors: {
            light: '#4F46E5',
            dark: '#4F46E5'
        },
        resume: 'Plataforma de empleos con roles (reclutador/postulante), integración de CVs en PDF y notificaciones.',
        introduction: `
        <p>DevJobs es una aplicación de gestión laboral, desarrollada con Laravel, Blade y Livewire. La plataforma ofrece funcionalidades especializadas para ambos roles:</p>
        <ul class="w-full grid grid-cols-1 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
            <li><strong>Panel de reclutadores:</strong> CRUD completo para vacantes, visualización de postulantes y notificaciones por email.</li>
            <li><strong>Funcionalidades para postulantes:</strong> Búsqueda avanzada con filtros (categoría, salario, nombre) y envío de CV en PDF.</li>
            <li><strong>Generación de PDFs:</strong> Descarga automática de resúmenes de vacantes y gestión de CVs en formato PDF.</li>
            <li><strong>Notificaciones bidireccionales:</strong> Alertas en tiempo real para postulaciones y actualizaciones de vacantes.</li>
            <li><strong>Validaciones robustas:</strong> Control de formatos de archivo (PDF) y validaciones en formularios de registro/postulación.</li>
            <li><strong>Interfaz dinámica:</strong> Componentes reactivos desarrollados con Livewire y Alpine.js para interacciones fluidas.</li>
            <li><strong>Autenticación segmentada:</strong> Sistema de registro/login diferenciado para reclutadores y postulantes.</li>
            <li><strong>Comunicación automatizada:</strong> Envío de correos electrónicos ante nuevas postulaciones o actualizaciones.</li>
        </ul>
        `,
        content: [
            {
                type: 'image',
                data: [
                    {
                        name: '1_1',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '1_2',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '1_3',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '3',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '4',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '5',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '6_1',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '6_2',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '6_3',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '6_4',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '7_1',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '7_2',
                        description: 'Imagen de la página principal'
                    }
                ],
            },
            // {
            //     type: 'video',
            //     data: '1'
            // }
        ],
        technologies: [
            {
                name: 'Laravel',
                description: 'para la API de backend y servicios de WebSockets',
                icon: 'laravel',
            },
            {
                name: 'Livewire',
                description: 'para la interactividad en tiempo real',
                icon: 'livewire',
            },
            {
                name: 'AlpineJS',
                description: 'para la interactividad en tiempo real',
                icon: 'alpinejs',
            },
            {
                name: 'TailwindCSS',
                description: 'para el diseño y estilos',
                icon: 'tailwind',
            },
            {
                name: 'MySQL',
                description: 'database',
                icon: 'MySQL',
            }
        ],
        github: 'https://github.com',
    },
    {
        id: 'devstagram',
        name: 'Devstagram',
        colors: {
            light: '#EEDDD6',
            dark: '#EEDDD6'
        },
        resume: 'Plataforma social interactiva inspirada en Instagram, que permite a los usuarios compartir fotos e interactuar entre si.',
        introduction: `
        <p>Desvstagram es una plataforma social interactiva, inspirada en Instagram, desarrollada con Laravel y Blade. Diseñada para fomentar la conexión y el intercambio visual, esta aplicación permite a los usuarios:</p>
        <ul class="w-full grid grid-cols-1 gap-4 list-disc  pl-8  mb-5 md:w-auto md:mb-0">
            <li><strong>Publicar fotos:</strong> Subir imágenes para compartir momentos con la comunidad.</li>
            <li><strong>Interacción social:</strong> Seguir a otros usuarios, dar "like" a publicaciones y comentar.</li>
            <li><strong>Feed personalizado:</strong> En la página principal, se muestran las publicaciones de las personas que sigues.</li>
            <li><strong>Búsqueda de usuarios:</strong> Una funcionalidad para encontrar y conectar con otros perfiles.</li>
            <li><strong>Cuentas personalizables:</strong> Los usuarios pueden configurar su perfil con una foto personalizada y su nombre.</li>
            <li><strong>Sistema de autenticación robusto:</strong> Incluye funcionalidades de registro, inicio de sesión y validaciones exhaustivas para garantizar la seguridad y la experiencia del usuario.</li>
        </ul>
        `,
        content: [
            {
                type: 'image',
                data: [
                    {
                        name: '1',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '2_1',
                        description: 'Imagen de la página principal'
                    },
                ],

            },
            // {
            //     type: 'video',
            //     data: '1'
            // }
        ],
        technologies: [
            {
                name: 'Laravel',
                icon: 'laravel',
                description: 'Used for the backend'
            },
            {
                name: 'Livewire',
                icon: 'livewire'
            },
            {
                name: 'TailwindCSS',
                description: 'para el diseño y estilos',
                icon: 'tailwind',
            },
            {
                name: 'MySQL',
                description: 'database',
                icon: 'MySQL',
            }
        ],
        github: 'https://github.com',
    }
    ,
    {

        id: 'meeti',
        name: 'Meeti',
        colors: {
            light: '#34D399',
            dark: '#065F46'
        },
        resume: 'Plataforma inspirada en Meetup que facilita la creación de grupos y eventos con mapas interactivos y búsqueda geoespacial.',
        introduction: `
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
        content: [
            {
                type: 'image',
                data: [
                    {
                        name: '1',
                        description: 'Imagen de la página principal'
                    },
                    {
                        name: '2_1',
                        description: 'Imagen de la página principal'
                    },
                ],

            },
            // {
            //     type: 'video',
            //     data: '1'
            // }
        ],
        technologies: [
            {
                name: 'NodeJs',
                icon: 'nodejs',
                description: 'con Express.Js para el backend'
            },
            {
                name: 'EJS',
                icon: 'file-code-regular',
                description: ',motor de plantillas utilizado para renderizar el frontend de forma dinámica.'
            },
            {
                name: 'JavaScript',
                icon: 'javascript'
            },
            {
                name: 'PostgresSQL',
                icon: 'postgres'
            },


        ],
        github: 'https://github.com',
    }
];

export default projects;