import React, { useState, forwardRef } from "react";

import IconCompound from "./IconCompound";

import useColor from "../hook/useColors";

/* 
Format Colors
    colors:{
        dark-primary: "#000",
        dark-secundary: "#000",
        light-primary: "#fff",
        light-secundary: "#fff",
    }
*/

const Button = forwardRef(
    ({ text, icon, iconFa, buttonType, onClick, iconClassName, colors, invertIcon = false, url, ...rest }, ref) => {
        const [isClicked, setIsClicked] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const handleClick = () => {
            setIsClicked(true);
            if (onClick) onClick();
            setTimeout(() => {
                setIsClicked(false);
            }, 200);
        };

        const { primaryColor, secundaryColor } = useColor(buttonType, colors);


        return (

            <a href={url} onClick={(e) => e.preventDefault()}>
                <div className="relative shadow-md rounded-lg block w-fit">
                    <button
                        ref={ref}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`transition-transform duration-100 ease-in-out  ${isClicked ? "translate-y-[0.2rem] " : ``}   min-w-10 min-h-10 text-sm font-bold relative z-10 cursor-pointer border-2 rounded-lg p-2 flex items-center justify-center transition-transform-shadow `}
                        onClick={handleClick}

                        style={
                            {
                                backgroundColor: secundaryColor,
                                background: secundaryColor,
                                borderColor: primaryColor,
                                color: colors && colors.text ? colors.text : primaryColor,
                                //Ya vere si le dejo esto, no me convence
                                //boxShadow: isHovered ? `0 0 4px 0 ${primaryColor}` : "none",
                            }
                        }
                        {...rest}
                    >
                        <div className={`flex items-center gap-2 h-4 w-fit ${invertIcon ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                            {text}
                            {icon && (
                                <IconCompound id={icon} color={colors && colors.text ? colors.text : primaryColor} />
                            )}
                            {iconFa && (
                                <i className={iconFa} style={{ color: colors && colors.text ? colors.text : primaryColor }} />
                            )}
                        </div>
                    </button>
                    {/* Efecto de fondo */}
                    {/* brightness-75 nose si dejarlo */}
                    <div className={`absolute top-[0.2rem] left-0 w-full h-full rounded-lg`}
                        style={
                            {
                                backgroundColor: primaryColor,
                            }
                        } />
                </div >
            </a>
        );
    }
);

export default Button;
