import React from "react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {

    const { t } = useLanguage();

    return (<section className="tiny-content">
        <SectionHeader text="Experiencia / Habilidades" icon="gear" />

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-7 list-disc pl-8  md:w-auto md:mb-0">
            <li>{t("💻 Full-Stack development and CRUD management.", "💻 Desarrollo Full-Stack y gestión del CRUD.")}</li>
            <li>{t("🔐 Implementation of secure registration and login flows using tokens and validations.", "🔐 Implementación de flujos seguros de registro e inicio de sesión mediante tokens y validaciones.")}</li>
            <li>{t("🌐 Real-time communication technologies using WebSockets.", "🌐 Tecnologías para comunicación en tiempo real WebSockets.")}</li>
            <li>{t("📝 Development of forms and file handling.", "📝 Desarrollo de formularios y manejo de archivos.")}</li>
            <li>{t("🏗️ API creation.", "🏗️ Creación de APIs.")}</li>
            <li>{t("🗄️ Database design and management.", "🗄️ Diseño y administración de bases de datos.")}</li>
            <li>{t("🎨 Creation of dynamic and responsive user interfaces.", "🎨 Creación de interfaces de usuario dinámicas y responsivas.")}</li>
            <li>{t("📫 Automation of notifications and email sending.", "📫 Automatización de notificaciones y envíos de email.")}</li>
        </ul>

    </section>)
};

export default Skills;
