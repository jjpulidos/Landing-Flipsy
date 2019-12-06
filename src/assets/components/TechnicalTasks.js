import React from 'react'
import '../styles/styles.css'
import logo_flipsy from '../media/FlipsyColor.svg'

const TechnicalTasks = () => {
    return (
        <div className="container-master-problematica">
            <div className="container-left-problematica">
                <div>
                    <img src={logo_flipsy} alt="logo" className="logo-flipsy" />
                </div>

                <div className="container-down-info-problematica">

                    <h1>Enlace a Flipsy</h1>
                        <h2><a target="_blank" href="https://flipsy-dnqm5dv9e.now.sh/"> Flipsy </a> </h2>
                        <p> Para una mejor experiencia por favor ingrese a este enlace desde un celular o, en su defecto,
                            oprima las tecla F12 seguido de ctrl+shif+M para activar el modo responsive de chrome. La
                            resolución recomendada es la del dispositivo Pixel 2 (411 x 731).
                        </p>
                    <h1>Iteración 1</h1>

                    <ul>
                        <li><b>Funcionalidad iteración 1: </b> <a target="_blank" href="https://drive.google.com/file/d/1-EmrDmkvJvk05UKfF1ZHdmMstC2A0skd/view"> Video iteración 1 </a>  </li>
                        <li><b>Flipsy MVP: </b> <a target="_blank" href="https://drive.google.com/file/d/1-7n-dd84NvYUm4pZKxv7Ilry730W9D-w/view"> Video MVP </a>  </li>
                    </ul>


                    <h1>Iteración 2</h1>
                    <ul>
                        <li><b>Funcionalidad iteración 2: </b> <a target="_blank" href="https://drive.google.com/file/d/1w5EK_bQKwGYs30c-gHEHHPOjdcH6TyFK/view"> Video iteración 2  </a> </li>
                        <li><b> Progreso de requerimiento no funcional: </b> <a target="_blank" href="https://drive.google.com/open?id=11vxMGWyDAlXByBgFo86avXA3IgMN7Kq2">Requerimiento no funcional</a></li>
                    </ul>

                    <h1>Iteración 3</h1>
                    <ul>
                        <li><b>Funcionalidad iteración 3: </b> <a target="_blank" href="https://youtu.be/F-EBNzeDY_Q"> Video iteración 3  </a> </li>
                        <li><b>Documento DevOps: </b> <a target="_blank" href="https://drive.google.com/open?id=1wdmHKrOnJxu4fzl3li0vwhM6b-5YPHsz">DevOps Flipsy</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default TechnicalTasks