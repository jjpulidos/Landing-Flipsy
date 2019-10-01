import React from 'react'
import '../styles/styles.css'
import logo_flipsy from '../media/FlipsyColor.svg'

const Repositorio = () => {
    return (
        <div className="container-master-problematica">
            <div className="container-left-problematica">
                <div>
                    <img src={logo_flipsy} alt="logo" className="logo-flipsy" />
                </div>

                <div className="container-down-info-problematica">
                    <ul style={{fontSize: "1.2em", fontWeight: "bolder", color: "black"}}>
                        <li>https://github.com/jjpulidos/Flipsy-Ingesoft2</li>
                        <li>https://github.com/marobayos/Front-Flipsy</li>
                    </ul>
                    <div> Nota: Para el desarrollo de la app inicialmente se trabajaron repositorios por separado (back y front), producto de un intento de centralizar se perdió el commit realizado sobre autenticación, cambio que luego fue desplegado bajo el commit de otro miembro del equipo, para verificar el commit inicial por favor véase commit b9468f2 : https://github.com/jjpulidos/Flipsy/commits/master </div>
                </div>
            </div>
        </div>
    )
}

export default Repositorio