import React from 'react';

import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router';
import IconCompound from './IconCompound';
import Technologies from './Technologies';
import { useLanguage } from '../context/LanguageContext';

const ProjectCardSecundary = ({ project }) => {
    const { name, resume, technologies } = project;
    const { darkMode } = useDarkMode();
    const navigate = useNavigate();
    const { t } = useLanguage();
    return (
        <div onClick={() => {
            navigate(`/project/${project.id}`);
        }} className={`relative hover:-translate-y-2 transition-transform ease-out cursor-pointer bg-transparent p-6 rounded-xl flex flex-col border-2 border-opacity-40 ${darkMode ? "border-darkMode-text" : "border-lightMode-text"}`}>

            <IconCompound id="arrow-up-right-from-square" className={"absolute right-0 top-0 p-4"} />

            <h2 className="text-xl font-bold mb-4">{name}</h2>
            <p className="mb-4">{t(resume.en, resume.es)}</p>

            <Technologies technologies={project.technologies} />
        </div>
    );
};

export default ProjectCardSecundary;