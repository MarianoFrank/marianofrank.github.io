import React from "react";
import Tooltip from "./Tooltip";
import Button from "./Button";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
    const { t } = useLanguage();

    let defaultCopiedMsg = t("Copy 📋", "Copiar 📋");

    const [isCopiedMsg, setIsCopiedMsg] = React.useState(defaultCopiedMsg);


    const copyToClipboard = () => {
        navigator.clipboard.writeText("marianofrank@hotmail.com").then(() => {
            setIsCopiedMsg(t("Copied ✅", "Copiado ✅"));
        }).catch(err => {
            setIsCopiedMsg(t("Copy error ❌", "Error al copiar ❌"));
        });
    };


    return (
        <section className="tiny-content pb-10">
            <SectionHeader text={t("Contact", "Contacto")} icon="mailbox-flag-up" />
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                <div className="flex justify-between items-center gap-2">
                    <div onMouseLeave={() => setTimeout(() => {
                        setIsCopiedMsg(defaultCopiedMsg)
                    }, 200)}>

                        <Tooltip content={isCopiedMsg} >
                            <Button icon="copy" onClick={copyToClipboard} buttonType="normal" text=" marianofrank@hotmail.com" />
                        </Tooltip>
                    </div>


                    <Tooltip content={t("Send me an email 📬", "Enviame un mail 📬")} >
                        <Button icon="paper-plane" buttonType="normal" onClick={() => window.open("mailto:marianofrank@hotmail.com", "_blank")} />
                    </Tooltip>


                </div>
                <div className="flex justify-between items-center gap-2">
                    <Button
                        iconFa="fa-brands fa-github"
                        buttonType="custom"
                        colors={{
                            lightMode: {
                                primary: "#24292F",
                                primary_light: "#3C434A"
                            },
                            darkMode: {
                                primary: "#3C434A",
                                primary_light: "#24292F"
                            },
                            text: "#fff"
                        }}
                        onClick={() => window.open('https://github.com/MarianoFrank')}
                        url={'https://github.com/MarianoFrank'}
                    />

                    <Button
                        iconFa="fa-brands fa-linkedin"
                        buttonType="custom"
                        colors={{
                            lightMode: {
                                primary: "#0077B5",
                                primary_light: "#3399CC"
                            },
                            darkMode: {
                                primary: "#3399CC",
                                primary_light: "#0077B5"
                            },
                            text: "#fff"
                        }}
                        onClick={() => window.open('https://www.linkedin.com/in/frankmariano/')}
                        url={'https://www.linkedin.com/in/frankmariano/'}
                    />

                    <Button
                        iconFa="fa-brands fa-instagram"
                        buttonType="custom"
                        colors={{
                            lightMode: {
                                primary: "#cc32b2", // Catppuccin Latte 'pink'
                                primary_light: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
                            },
                            darkMode: {
                                primary: "#E669B6", // Catppuccin Mocha 'pink'
                                primary_light: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
                            },
                            text: "#fff"
                        }}
                        onClick={() => window.open('https://www.instagram.com/marian_002/')}
                        url={'https://www.instagram.com/marian_002/'}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
