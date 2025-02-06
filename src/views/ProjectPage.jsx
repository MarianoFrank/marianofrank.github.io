import { useState, useRef } from 'react';
import { useParams } from 'react-router';

import projects from '../data/projects';
import Picture from '../components/Picture';
import useColor from '../hook/useColors';
import { useDarkMode } from "../context/DarkModeContext";
import Button from '../components/Button';
import { useNavigate } from "react-router";
import SectionHeader from '../components/SectionHeader';
import Tooltip from '../components/Tooltip';

//Lightbox
import Lightbox from "yet-another-react-lightbox";
import { Zoom, Video, Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import '../css/lightbox.css';

//Swiper
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../css/swiper.css';

const ProjectPage = () => {
    const { id } = useParams();

    const project = projects.filter(project => project.id === id)[0];

    const { primaryColor } = useColor("special");

    const { darkMode, toggleDarkMode } = useDarkMode();

    const navigate = useNavigate();

    //Modifica los colores de swiper
    const swiperStyles = {
        '--swiper-navigation-color': primaryColor,
        '--swiper-pagination-color': primaryColor
    };

    //Lightbox
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    let globalIndex = 0;

    const slides = project.content.flatMap((entry) => {
        switch (entry.type) {
            case 'image':
                return entry.data.map((image) => ({
                    type: 'image',
                    imageFit: 'contain',
                    src: `/images/${project.id}/${image.name}.jpeg`,
                    index: globalIndex++,
                    name: image.name,
                    description: image.description
                }));
            case 'video':
                return entry.data.map((video) => ({
                    type: 'video',
                    sources: [
                        {
                            src: `/images/${project.id}/${video.name}.mp4`,
                            type: "video/mp4",
                        },
                    ],
                    autoPlay: true,
                    disablePictureInPicture: true,
                    index: globalIndex++,
                    name: video.name,
                    preload: 'auto',
                    description: video.description
                }));
            default:
                return [];
        }
    });

    const videoRefs = useRef([]);

    const pauseVideos = () => {
        videoRefs.current.forEach((video) => {
            if (video) {
                video.pause();
            }
        });
    }

    const handleClick = (name) => {
        pauseVideos();
        setOpen(true);
    };

    const handleSlideChange = (swiper) => {
        pauseVideos();
        setIndex(swiper.realIndex);
    }

    return (
        <div className='bg-gradient w-full py-14'>
            <main className='w-[90%] md:w-full max-w-3xl mx-auto  space-y-16 text-lightMode-text dark:text-darkMode-foreground pb-10'>


                <header className='space-y-6 mb-5'>
                    {/* Description */}

                    <SectionHeader text={`${project.name}`} icon="folder-open" />
                    <div
                        className="m-0 p-0 space-y-6"
                        dangerouslySetInnerHTML={{ __html: project.introduction }}
                    ></div>

                    {/* Actions */}
                    <div className='flex justify-between items-start md:items-center flex-col sm:flex-row gap-4'>
                        <div className='flex gap-2'>
                            <Button onClick={() => navigate("/")} icon="arrow-left" text="Volver" buttonType="normal" invertIcon={true} />
                            <Button onClick={toggleDarkMode} icon="moon-over-sun" buttonType="normal" />
                        </div>
                        <Tooltip content="Ver en GitHub">
                            <Button iconFa="fa-brands fa-github" buttonType="special" text={`${project.name}`} onClick={() => window.open(`${project.github}`)} url={project.github} />
                        </Tooltip>
                    </div>
                </header>

                {/* Technologies */}
                <section className='space-y-6'>
                    <SectionHeader text={"Tecnologías"} icon="code" />

                    <p>Este proyecto lo desarrollé utilizando principalmente las siguientes herramientas y tecnologías:</p>
                    <ul className={`grid grid-cols-1 ${project.technologies.length < 5 ? "md:grid-cols-1" : `md:grid-cols-2`} gap-y-4 list-none pl-[0.85rem]  w-full m-0`}>
                        {project.technologies.map((tech, index) => {
                            return (
                                <li key={index} className='w-full'>
                                    <div className="flex items-start gap-x-2">
                                        <img src={`/icons/technologies/${tech.icon}.svg`} alt={tech.name} type="svg" loading='lazy' className='h-4 w-4' />
                                        <p>
                                            {` ${tech.name} `}
                                            {tech.description ? `${tech.description}` : ""}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>

                <section>
                    <SectionHeader text={`Capturas`} icon="image-polaroid" />

                    <div className='space-y-6'>
                        <p>Ahora, te invito a explorar los detalles del proyecto <span className='font-bold'>{`${project.name}`}</span> a través de una revisión visual de sus componentes principales.</p>
                        <Swiper
                            modules={[Navigation, Pagination, EffectFade]}
                            spaceBetween={0}
                            navigation
                            pagination={{ clickable: true, type: 'fraction' }}
                            style={swiperStyles}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true

                            }}
                            effect={'fade'}
                            speed={200}
                            loop={true}
                            onSlideChange={(e) => handleSlideChange(e)}
                            autoHeight={true}
                        >
                            {project.content.map((entry, index) => {
                                return (
                                    <div key={index}>
                                        {entry.data.map((mediaItem, index) => {
                                            //Cada data es un objeto con nombre y descripcion
                                            switch (entry.type) {
                                                case 'video':
                                                    return (
                                                        <SwiperSlide key={`${mediaItem.name}-${index}`}>
                                                            <div >
                                                                <video
                                                                    ref={(el) => (videoRefs.current[index] = el)}
                                                                    className='' controls controlsList="nodownload noremoteplayback" preload="auto">
                                                                    <source src={`/images/${project.id}/${mediaItem.name}.mp4`} type="video/mp4" />
                                                                    Your browser does not support the video 🚫.
                                                                </video>
                                                                <p className={` p-2 text-sm font-bold w-full
                                                                    ${darkMode ? "bg-darkMode-primary_light !text-darkMode-primary" : "bg-lightMode-primary_light text-lightMode-primary"}
                                                                    `} >{mediaItem.description}</p>
                                                            </div>
                                                        </SwiperSlide>
                                                    );
                                                case 'image':
                                                    return (
                                                        <SwiperSlide key={`${mediaItem.name}-${index}`}>
                                                            <div onClick={() => handleClick(mediaItem.name)} className={`cursor-pointer`}>
                                                                <Picture className={''} imageName={`/${project.id}/${mediaItem.name}`} alt={`Image for ${project.name}`} />
                                                                <p className={` p-2 text-sm font-bold w-full
                                                                    ${darkMode ? "bg-darkMode-primary_light !text-darkMode-primary" : "bg-lightMode-primary_light text-lightMode-primary"}
                                                                    `} >{mediaItem.description}</p>
                                                            </div>
                                                        </SwiperSlide>
                                                    );
                                                default:
                                                    return null;
                                            }
                                        })}
                                    </div> //Entry
                                );
                            })}
                        </Swiper>

                    </div> {/* Entries */}


                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <Button onClick={() => navigate("/")} icon="arrow-left" text="Volver" buttonType="normal" invertIcon={true} />
                            <Button onClick={toggleDarkMode} icon="moon-over-sun" buttonType="normal" />
                        </div>
                        <Button iconFa="fa-solid fa-expand" buttonType="special" text={`Expandir`} onClick={() => setOpen(true)} />
                    </div>


                </section>


            </main >
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
                animation={{
                    fade: 200,
                }}
                plugins={[Zoom, Video, Captions]}
                styles={{
                    root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .5)" },
                }}
                controller={{
                    closeOnBackdropClick: true,
                    closeOnPullUp: true,
                    closeOnPullDown: true
                }}
                noScroll={{
                    disabled: true
                }}
                zoom={
                    {

                    }
                }
            />
        </div >
    );
};

export default ProjectPage;