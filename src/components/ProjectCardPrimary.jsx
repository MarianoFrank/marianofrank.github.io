import Picture from "./Picture";
import Button from "./Button";
import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router";
import Technologies from "./Technologies";
import { useLanguage } from "../context/LanguageContext";
//Este sera la tarjeta principal de los proyectos, tiene mejor diseño y mas información

/* 
Este componente recibe un objeto project con la siguiente estructura:
    colors:{
        dark: "#000",
        light: "#fff",
    }
*/

const ProjectCardPrimary = ({ project, colors, inverted = false }) => {

    const { darkMode } = useDarkMode();
    const navigate = useNavigate();

    const [hoverCard, setHoverCard] = useState(false);

    const { t } = useLanguage();

    return (
        <div className={`flex mb-10 flex-col md:flex-row justify-betweens gap-4 ${inverted ? "md:flex-row-reverse" : ''}`} onMouseEnter={() => setHoverCard(true)} onMouseLeave={() => setHoverCard(false)}>
            <div
                style={{
                    backgroundColor: darkMode ? colors.dark : colors.light,
                    // backdropFilter: 'blur(1px)',
                }}

                className={`overflow-hidden rounded-xl min-w-fit min-h-fit`}>
                <Picture className={`block w-full md:w-80 h-auto md:h-[12rem]  transition-all duration-200 ease-out rounded-xl relative z-10 sm:left-0 sm:top-0 ${hoverCard ? 'md:left-0 md:top-0' : `md:top-10 ${inverted ? "md:left-10" : "md:-left-10"}`}  `}
                    imageName={`/${project.id}/miniature`} />
            </div>
            <div className="grid grid-cols-1 gap-4 min-h-full">
                <div className="space-y-4">
                    <h3 className="font-bold text-xl">{`${project.name}`}</h3>
                    <p>{t(project.resume.en, project.resume.es)}</p>

                    <Technologies technologies={project.technologies} />

                </div>
                {/* El padding bottom es para que no sobresalga la sobra debajo del boton */}
                <div
                    className={`self-end pb-1`}
                >
                    <Button text="Detalles" icon="memo-circle-info" onClick={() => {
                        navigate(`/project/${project.id}`);
                    }} />
                </div>
            </div>
        </div >
    );
};

export default ProjectCardPrimary;