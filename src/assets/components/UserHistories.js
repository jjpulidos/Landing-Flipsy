import React from 'react'
import '../styles/styles.css'
import logo_flipsy from '../media/FlipsyColor.svg'

const UserHistories = () => {
    return (
        <div className="container-master-problematica">
            <div className="container-left-problematica">
                <div>
                    <img src={logo_flipsy} alt="logo" className="logo-flipsy" />
                </div>

                <div className="container-down-info-problematica">
                    <ul style={{fontSize: "1.2em", fontWeight: "bolder", color: "black"}}>
                        <li>Yo como usuario quiero poder crear, modificar y actualizar flashcards para tener   consignada información de temáticas de mi predilección.</li>
                        <li>Yo como usuario quiero poder compartir flashcards con otros usuarios para dar a conocer mi contenido.</li>
                        <li>Yo como usuario quiero recibir notificaciones como recordatorio para realizar la práctica de alguna temática.</li>
                        <li>Yo como usuario quiero poder buscar públicamente flashcards de temáticas generales para acceder a contenido de mi interés.</li>
                        <li>Yo como usuario quiero acceder a competencias ocasionales para mantener de manera didáctica la retención de los conceptos.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UserHistories