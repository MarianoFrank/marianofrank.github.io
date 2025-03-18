//Hooks para controlar el color de los botones
import { useState, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import pallete from "../assets/colors"; // Colores predeterminados

const useColor = (type = "normal", colors) => {
    const { darkMode: isDarkMode } = useDarkMode();
    const [primaryColor, setPrimaryColor] = useState("");
    const [secundaryColor, setSecundaryColor] = useState("");

    useEffect(() => {
        let primaryColor, secundaryColor;
        if (type === "normal") {
            primaryColor = isDarkMode
                ? pallete.darkMode.text
                : pallete.lightMode.text;

            secundaryColor = isDarkMode
                ? pallete.darkMode.bg
                : pallete.lightMode.bg;
        } else if (type === "special") {
            primaryColor = isDarkMode
                ? pallete.darkMode.primary
                : pallete.lightMode.primary;

            secundaryColor = isDarkMode
                ? pallete.darkMode.primary_light
                : pallete.lightMode.primary_light;
        }
        else if (type === "custom") {

            primaryColor = isDarkMode
                ? colors.darkMode.primary
                : colors.lightMode.primary;

            secundaryColor = isDarkMode
                ? colors.darkMode.primary_light
                : colors.lightMode.primary_light;

        }

        setPrimaryColor(primaryColor);
        setSecundaryColor(secundaryColor);
    }, [isDarkMode]);

    return { primaryColor, secundaryColor };
};

export default useColor;
