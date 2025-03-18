import React from 'react';
import Tooltip from './Tooltip';
import { useDarkMode } from '../context/DarkModeContext';

const Technologies = ({ technologies, className }) => {
    const { darkMode } = useDarkMode();
    return (
        <ul className={`flex gap-2 items-center ${className}`}>
            {technologies.map((tech, index) => {
                return (
                    <Tooltip key={index} content={tech.name}>
                        <li dangerouslySetInnerHTML={{ __html: darkMode ? tech.icon.dark : tech.icon.light }} className='text-sm'></li>
                    </Tooltip>

                );
            })}
        </ul >
    );
};

export default Technologies;