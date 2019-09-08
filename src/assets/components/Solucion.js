import React from 'react'
import '../styles/styles.css'
import logo_flipsy from '../media/FlipsyColor.svg'
import Video from '../media/Flipsy-Landing-2.mp4'

const Solucion = () =>{
    return(
        <div className="container-master-problematica">
            <div className="container-left-problematica">
                <div>
                    <img src={logo_flipsy} alt="logo" className="logo-flipsy" />
                </div>
                <div className="container-down-info-problematica">
                    <p className="text-problematica">Actualmente la información avanza rápidamente a nuestro alrededor así que mantener seguimiento de conceptos importantes para luego construir conocimiento se vuelve un reto sin contar con una herramienta de repaso o práctica constante lo que nos lleva a olvidar conocimientos.</p>
                </div>
            </div>
            <div className="container-video">
                <video src={Video} autoPlay loop className="video-container"/>
            </div>
        </div>
    )
}

export default Solucion