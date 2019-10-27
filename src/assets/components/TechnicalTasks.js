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
                    <h1>Iteración 1</h1>

                    <ul>
                        <li><b>Funcionalidad iteración 1: </b> <a href="https://drive.google.com/file/d/1-EmrDmkvJvk05UKfF1ZHdmMstC2A0skd/view"> Video iteración 1 </a>  </li>
                        <li><b>Flipsy MVP: </b> <a href="https://drive.google.com/file/d/1-7n-dd84NvYUm4pZKxv7Ilry730W9D-w/view"> Video MVP </a>  </li>
                    </ul>


                    <h1>Iteración 2</h1>
                    <ul>
                        <li><b>Funcionalidad iteración 2: </b> <a href="https://drive.google.com/file/d/1-EmrDmkvJvk05UKfF1ZHdmMstC2A0skd/view"> Video iteración 2  </a> </li>
                        <li><b> Progreso de requerimiento no funcional: </b> <a href="https://drive.google.com/open?id=11vxMGWyDAlXByBgFo86avXA3IgMN7Kq2">Requerimiento no funcional</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default TechnicalTasks