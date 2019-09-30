import React from 'react'
import '../styles/styles.css'
import logo_flipsy from '../media/FlipsyColor.svg'

const Scrum = () => {
    return (
        <div className="container-master-problematica">
            <div className="container-left-problematica">
                <div>
                    <img src={logo_flipsy} alt="logo" className="logo-flipsy" />
                </div>
                <div className="container-down-info-problematica">
                    <ul style={{fontSize: "1.2em", fontWeight: "bolder", color: "black"}}>
                        <li>El usuario podrá crear, modificar, actualizar y remover flashcards donde consigne información de interés según el área de estudio.</li>
                        <li>El usuario podrá compartir y recibir flashcards con otros usuarios.</li>
                        <li>Se podrá gestionar la analítica de datos necesaria para gestionar la curva de olvido del usuario para ofrecerle un servicio eficiente.</li>
                        <li>La aplicación enviará notificaciones por medio del correo electrónico o en el dispositivo cuando haya pasado determinado tiempo desde la última vez que el usuario estudió alguno de sus grupos de flashcards.</li>
                    </ul>
                        
                </div>
            </div>
        </div>
    )
}

export default Scrum