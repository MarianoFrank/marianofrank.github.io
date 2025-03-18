import { useParams } from 'react-router';

import projects from '../data/projects';
import Picture from '../components/Picture';
import useColor from '../hook/useColors';
import { useDarkMode } from "../context/DarkModeContext";
import Button from '../components/Button';
import { useNavigate } from "react-router";
import SectionHeader from '../components/SectionHeader';
import Tooltip from '../components/Tooltip';
import { useLanguage } from '../context/LanguageContext';



const ProjectPage = () => {
    const { id } = useParams();

    const project = projects.filter(project => project.id === id)[0];

    const { primaryColor } = useColor("special");

    const { darkMode, toggleDarkMode } = useDarkMode();

    const { t, getCurrentLanguage, toggleLanguage } = useLanguage();

    const navigate = useNavigate();

    //Modifica los colores de swiper
    const swiperStyles = {
        '--swiper-navigation-color': primaryColor,
        '--swiper-pagination-color': primaryColor
    };

    return (
        <div className='bg-gradient w-full py-14'>
            <main className='w-[90%] md:w-full max-w-3xl mx-auto  space-y-16 text-lightMode-text dark:text-darkMode-foreground pb-10'>

                <header className='space-y-6 mb-5'>
                    {/* Description */}

                    <SectionHeader text={`${project.name}`} icon="folder-open" />
                    <div
                        className="m-0 p-0 space-y-6"
                        dangerouslySetInnerHTML={{ __html: t(project.introduction.en, project.introduction.es) }}
                    ></div>

                    {/* Actions */}
                    <div className='flex justify-between items-start md:items-center flex-col sm:flex-row gap-4'>
                        <div className='flex gap-2'>
                            <Button onClick={() => navigate("/")} icon="arrow-left" text={t("Back", "Volver")} buttonType="normal" invertIcon={true} />
                            <Button onClick={toggleDarkMode} icon="moon-over-sun" buttonType="normal" />
                            <Tooltip content={getCurrentLanguage() === 'en' ? 'ES' : 'EN'} >
                                <Button
                                    onClick={toggleLanguage} icon="language" buttonType="normal" />
                            </Tooltip>
                        </div>
                        <Tooltip content={t("See on GitHub", "Ver en GitHub")}>
                            <Button iconFa="fa-brands fa-github" buttonType="special" text={`${project.name}`} onClick={() => window.open(`${project.github}`)} url={project.github} />
                        </Tooltip>
                    </div>
                </header>

                {/* Technologies */}
                <section className='space-y-6'>
                    <SectionHeader text={t("Technologies", "Tecnologías")} icon="code" />

                    <p>{t("I developed this project mainly using the following tools and technologies",
                        "Este proyecto lo desarrollé utilizando principalmente las siguientes herramientas y tecnologías"
                    )}:</p>
                    <ul className={`grid grid-cols-1 ${project.technologies.length < 5 ? "md:grid-cols-1" : `md:grid-cols-2`} gap-y-4 list-none pl-[0.85rem]  w-full m-0`}>
                        {project.technologies.map((tech, index) => {
                            return (
                                <li key={index} className='w-full'>
                                    <div className="flex items-start gap-x-2">
                                        <p dangerouslySetInnerHTML={{ __html: darkMode ? tech.icon.dark : tech.icon.light }} className='text-md'></p>
                                        <p>
                                            {` ${tech.name} `}
                                            {tech.description ? `${t(tech.description.en, tech.description.es)}` : ""}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>

                <section>
                    <SectionHeader text={t("Demonstration", "Demostración")} icon="image-polaroid" />
                    <div className='space-y-6'>
                        <p>{t("Here is a video of", "A continuación, te presento un video de")} <span className='font-bold'>{`${project.name}`}</span> {t("so you can better understand how it works", "para que puedas conocer mejor su funcionamiento.")}</p>

                        {project.videos && project.videos
                            .filter(video => {
                                return !(
                                    (video?.includes('english') && getCurrentLanguage() === 'es') ||
                                    (video?.includes('spanish') && getCurrentLanguage() === 'en')
                                );
                            })
                            .map((video) => {
                                return (
                                    <video
                                        className='shadow-none w-fit h-fit overflow-hidden rounded-xl border border-opacity-50 border-gray-800 '
                                        controls
                                        controlsList="nodownload noremoteplayback"
                                        preload="auto"
                                        poster={`/media/${project.id}/poster.jpg`}
                                        key={video}
                                    >
                                        <source src={`/media/${project.id}/${video}.mp4`} type="video/mp4" className='border-none' />
                                        {t("Your browser does not support the video tag", "Tu navegador no soporta la etiqueta de video")}
                                    </video>
                                );
                            })}

                        <div>
                            <Button onClick={() => navigate("/")} icon="arrow-left" text={t("Back", "Volver")} buttonType="normal" invertIcon={true} />
                        </div>

                    </div>

                </section>
            </main >
        </div >
    );
};

export default ProjectPage;