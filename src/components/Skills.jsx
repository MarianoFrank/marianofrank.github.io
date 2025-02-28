import React from "react";
import SectionHeader from "./SectionHeader";
const Skills = () => (
    <section className="tiny-content">
        <SectionHeader text="Experiencia / Habilidades" icon="gear" />

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc pl-8 mb-5 md:w-auto md:mb-0">
            <li>💻 Desarrollo Full-Stack y gestión integral de CRUD en plataformas interactivas.</li>
            <li>🔐 Implementación de flujos seguros de registro e inicio de sesión mediante tokens y validaciones.</li>
            <li>🌐 Integración de tecnologías para comunicación en tiempo real, como WebSockets.</li>
            <li>📝 Desarrollo de formularios interactivos y manejo seguro de envío de archivos.</li>
            <li>🏗️ Construcción de aplicaciones backend y creación de APIs en entornos modernos.</li>
            <li>🗄️ Diseño, administración y optimización de bases de datos, incluyendo soluciones geoespaciales.</li>
            <li>🎨 Creación de interfaces de usuario dinámicas y responsivas.</li>
            <li>⚙️ Automatización de procesos y configuración de notificaciones y envíos de email.</li>
        </ul>

    </section>
);

export default Skills;
