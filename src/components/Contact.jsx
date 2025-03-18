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
                                primary: "#4c4f69",
                                primary_light: "#232634"
                            },
                            darkMode: {
                                primary: "#c6d0f5",
                                primary_light: "#232634"
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
                                primary: "#7287fd",
                                primary_light: "#1e66f5"
                            },
                            darkMode: {
                                primary: "#babbf1",
                                primary_light: "#1e66f5 "
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
                                primary: "#ea76cb",
                                primary_light: "radial-gradient(circle at 30% 107%, #e5c890 0%, #e5c890 5%, #e78284 45%,#ea76cb 60%,#1e66f5 90%)"
                            },
                            darkMode: {
                                primary: "#f4b8e4",
                                primary_light: "radial-gradient(circle at 30% 107%, #e5c890 0%, #e5c890 5%, #e78284 45%,#ea76cb 60%,#1e66f5 90%)"
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
