import React from "react";
import Tooltip from "./Tooltip";
import Button from "./Button";
import SectionHeader from "./SectionHeader";


const Contact = () => {

    const [isCopiedMsg, setIsCopiedMsg] = React.useState("Copiar 📋");

    const copyToClipboard = () => {
        navigator.clipboard.writeText("marianofrank@hotmail.com").then(() => {
            setIsCopiedMsg("Copiado! ✅");
        }).catch(err => {
            setIsCopiedMsg("Error al copiar! ❌");
        });
    };


    return (
        <section className="tiny-content pb-10">
            <SectionHeader text="Contacto" icon="mailbox-flag-up" />
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                <div className="flex justify-between items-center gap-2">
                    <div onMouseLeave={() => setTimeout(() => {
                        setIsCopiedMsg("Copiar 📋")
                    }, 200)}>

                        <Tooltip content={isCopiedMsg} >
                            <Button icon="copy" onClick={copyToClipboard} buttonType="normal" text=" marianofrank@hotmail.com" />
                        </Tooltip>
                    </div>


                    <Tooltip content="Enviame un mail 📬" >
                        <Button icon="paper-plane" buttonType="normal" onClick={() => window.open("mailto:marianofrank@hotmail.com", "_blank")} />
                    </Tooltip>


                </div>
                <div className="flex justify-between items-center gap-2">
                    <Button iconFa="fa-brands fa-github" buttonType="custom" colors={{
                        primary: "#24292F",
                        secundary: "#3C434A",
                        text: "#fff"
                    }}
                        onClick={() => window.open('https://github.com/MarianoFrank')} url={'https://github.com/MarianoFrank'}
                    />

                    <Button iconFa="fa-brands fa-linkedin" buttonType="custom" colors={{
                        primary: "#0077B5",
                        secundary: "#3399CC",
                        text: "#fff"
                    }}
                        onClick={() => window.open('https://www.linkedin.com/in/frankmariano/')} url={'https://www.linkedin.com/in/frankmariano/'}
                    />

                    <Button iconFa="fa-brands fa-instagram" buttonType="instagram" colors={{
                        text: "#fff"
                    }}
                        onClick={() => window.open('https://www.instagram.com/marian_002/')} url={'https://www.instagram.com/marian_002/'}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
