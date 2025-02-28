import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import useColor from "../hook/useColors";
import Button from "./Button";
import Tooltip from "./Tooltip";
import { useDarkMode } from "../context/DarkModeContext";


const Presentation = () => {


    const { primaryColor, secundaryColor } = useColor("special");
    const { toggleDarkMode } = useDarkMode();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/cv.pdf';
        link.download = 'CV_Frank_Mariano.pdf';
        link.click();
    };

    return (<section className="space-y-6">

        <ReactTypingEffect
            className="m-0 p-0"
            text={["soy Mariano", "Bienvenido", ":D"]}
            cursorRenderer={cursor => <h1 className="m-0 p-0">{cursor}</h1>}
            speed={200}
            eraseDelay={600}
            eraseSpeed={100}
            typingDelay={200}

            displayTextRenderer={(text, i) => {
                return (
                    <h1 className="m-0 p-0 font-extrabold">
                        Hola, {' '}
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                                <span
                                    key={key}
                                    style={{ color: primaryColor }}
                                    className="m-0 p-0"
                                >{char}</span>
                            );
                        })}
                    </h1>
                );
            }}
        />

        <p>
            👨💻 Desarrollador Full Stack | Estudiante de Ingeniería en Sistemas 🇦🇷
            Estoy buscando activamente una oportunidad laboral donde pueda aportar mis conocimientos en Laravel 🛠️ y React ⚛️, y seguir creciendo como desarrollador. Tengo experiencia construyendo backends robustos y creando interfaces dinámicas. Me interesa formar parte de un equipo donde pueda aprender, desarrollar soluciones escalables y asumir nuevos desafíos 🚀. Listo para trabajar y con muchas ganas de aportar.
        </p>
        <div className="flex gap-2">
            <Button
                onClick={toggleDarkMode} icon="moon-over-sun" buttonType="normal" />


            <Tooltip content="Descargar 💾" >
                <Button text="Curriculum"
                    onClick={handleDownload} icon="file-user" buttonType="special" />
            </Tooltip>

        </div>
    </section >
    );
};

export default Presentation;
