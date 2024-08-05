import React from "react"
import Styles from "./welcome.module.scss"
import Button from "../button"

const Welcome = () => {
  return  <div className={Styles.container}>
            <div className="Styles.text">
                <h1>Melhor agência de Marketing do Bairro!</h1>
                <p>Somos uma agência  de performace digital, aceleramos vendas
                    e aquisição de leads.</p>
                <Button title="Aumentar vendas" kind="secondary"/>    
            </div>

            <div className="Styles.image">

            </div>
        </div>

}

export default Welcome
