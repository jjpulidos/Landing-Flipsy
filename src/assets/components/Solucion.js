import React from 'react'
import '../styles/styles.css'
import logo_flipsy from '../media/FlipsyColor.svg'

const Video = 'https://firebasestorage.googleapis.com/v0/b/flipsy.appspot.com/o/Flipsy-Landing.mp4?alt=media&token=0f27f626-56fc-4341-b06d-ff39c0cee281'

const Solucion = () => {
    return (
        <div className="container-master-problematica">
            <div className="container-left-problematica">
                <div>
                    <img src={logo_flipsy} alt="logo" className="logo-flipsy" />
                </div>
                <div className="container-down-info-problematica">
                    <p className="text-problematica">
                        Flipsy pretende ser una solución de rápido acceso de flashcards para
                        estudiar temáticas de interés, así cualquiera puede revisar y conservar
                        los conceptos por más tiempo teniendo en cuenta la curva del olvido mediante
                        diversas dinámicas como notificaciones de práctica y competencias ocasionales, así como también compartir sus grupos de flashcards con más usuarios.</p>
                </div>
            </div>
            <div className="container-video">
                <video src={Video} autoPlay loop className="video-container" />
            </div>
        </div>
    )
}

export default Solucion