import React from "react"
import Styles from "./welcome.module.scss"
import Button from "../button"
import BannerWelcome from "/public/images/midia.jpg"
import Image from "next/image"

const Welcome = () => {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <div className={Styles.text}>
                    <h1>Melhor agência de Marketing do Bairro!</h1>
                    <p>Somos uma agência de performance digital, aceleramos vendas
                        e aquisição de leads.</p>
                    <Button title="Aumentar vendas" kind="secondary"/>    
                </div>

                <div className={Styles.image}>
                    <Image src={BannerWelcome} alt="imagem banner"/>
                </div>
            </div>
        </div>
    );

}

export default Welcome
