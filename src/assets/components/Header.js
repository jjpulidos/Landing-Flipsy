import React, { useContext, useState } from 'react'
import '../styles/styles.css'
import logo_white from '../media/FlipsyBlanco.svg'
import { Icon } from 'antd'
import Context from '../../GlobalState/context'

const Header = () => {

    const { state, actions } = useContext(Context)
    const [style_, setStyle] = useState({
        bold1: {}, bold2: {}, bold3: {}
    })

    const Change = Screen => {

        Screen === "problematica"
            ? setStyle({ bold1: { fontWeight: "bolder", color: "#00b7ff" } })
            : Screen === "solucion"
                ? setStyle({ bold2: { fontWeight: "bolder", color: "#00b7ff" } })
                : Screen === "equipo"
                    ? setStyle({ bold3: { fontWeight: "bolder", color: "#00b7ff" } })
                    : console.log()
        actions({ type: "setState", payload: { ...state, Screen: Screen } })
    }

    return (
        <div className="container-master-header">
            <div>
                <img src={logo_white} alt="logo-header" className="logo-header" />
            </div>
            <div className="container-options-header">
                <div className="container-option-header" onClick={() => Change("problematica")}>
                    <p style={style_.bold1} className={`text-menu-header`}>Problemática <Icon type="right" /></p>
                </div>
                <div className="container-option-header" onClick={() => Change("solucion")}>
                    <p style={style_.bold2} className={`text-menu-header`}>Solución <Icon type="right" /></p>
                </div>
                <div className="container-option-header" onClick={() => Change("equipo")}>
                    <p style={style_.bold3} className={`text-menu-header`}>Equipo <Icon type="right" /></p>
                </div>
            </div>
        </div>
    )
}

export default Header