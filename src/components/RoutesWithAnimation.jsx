import { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../views/Home';
import ProjectPage from '../views/ProjectPage';

const pageTransition = {
    type: "tween",
    duration: 0.3,
    ease: "easeInOut",
};

const variants = {
    //next page, el estado de la pagina a la que se va
    initial: {
        opacity: 0,
    },
    //current page, el estado de la pagina actual
    animate: {
        transition: pageTransition,
        opacity: 1,
    },
    //previous page, el estado de la pagina actual al irse
    exit: {
        transition: pageTransition,
        opacity: 0,
    },
};

function RoutesWithAnimation() {
    const location = useLocation();
    // Estado para almacenar el ancho de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem("scrollPosition");
        if (savedScrollPosition && location.pathname === "/") {
            const homeElement = document.getElementById('home');
            if (homeElement) {
                homeElement.scrollTo(0, parseInt(savedScrollPosition, 10));
            }
        }
    }, [location]);
    // Hook para actualizar el ancho de la ventana cuando cambia el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Agregar el listener para el cambio de tamaño de la ventana
        window.addEventListener("resize", handleResize);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (

        <AnimatePresence mode="sync" initial={true}>

            {/* {windowWidth > 1024 && <div className="noise"></div>} */}

            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`absolute top-0 left-0 w-full h-full overflow-y-auto`}
                            onScroll={(e) => {
                                // Guardar la posición del scroll al cambiar de ruta
                                const scrollTop = e.target.scrollTop;
                                sessionStorage.setItem("scrollPosition", scrollTop);
                            }}
                            id='home'
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/project/:id"
                    element={
                        <motion.div
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`absolute top-0 left-0 w-full h-full overflow-y-auto`}
                        >
                            <ProjectPage />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>

    );
}

export default RoutesWithAnimation;
