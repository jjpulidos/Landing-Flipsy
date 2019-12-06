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
                    <h1> Sistema de control de versiones </h1>

                    <p className="text-problematica">Para el desarrollo de la aplicación se decidió usar el sistema de control de versiones de github.</p>

                    <a target="_blank" href="https://github.com/marobayos/Flipsy"> https://github.com/marobayos/Flipsy </a>
                    <br/>
                    <h1> Sistemas de control de versiones antiguos </h1>
                        <a target="_blank" href="https://github.com/jjpulidos/Flipsy-Ingesoft2">https://github.com/jjpulidos/Flipsy-Ingesoft2</a>
                        <a target="_blank" href="https://github.com/marobayos/Front-Flipsy">https://github.com/marobayos/Front-Flipsy</a>
                    <br/>
                    <div> Nota: Para el desarrollo de la app inicialmente se trabajaron repositorios por separado (back y front), producto de un intento de centralizar se perdió el commit realizado sobre autenticación, cambio que luego fue desplegado bajo el commit de otro miembro del equipo, para verificar el commit inicial por favor véase commit b9468f2 : https://github.com/jjpulidos/Flipsy/commits/master </div>
                </div>
            </div>
        </div>
    )
}

export default Repositorio