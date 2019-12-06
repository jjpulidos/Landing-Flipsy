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
                    <h1> Sprint Backlog </h1>
                    <p className="text-problematica"> Para el proyecto, se está trabajando el Sprint Backlog en Trello, donde se tienen las siguientes pestañas:</p>
                    <ul style={{fontSize: "1.2em", fontWeight: "bolder", color: "black"}}>
                        <li><b>User stories: </b> Ventana donde se pueden visualizar las historias de usuario.</li>
                        <li><b>Things to do: </b> Tareas técnicas a realizar.</li>
                        <li><b>Doing: </b> Tareas en proceso.</li>
                        <li><b>Done: </b> Tareas hechas.</li>
                        <li><b>Testing: </b> Tareas técnicas que están siendo probadas o están en bugfix.</li>
                        <li><b>Accepted: </b> Tareas que han sido aceptadas.</li>
                    </ul>
                    <p>Cada tarea técnica tiene un id al comienzo: U#, donde # corresponde al número de historia de usuario que se está realizando, o bien, contienen [Non-functional] que quiere decir que es un requerimiento no funcional del proyecto.</p>

                    <a href="https://trello.com/b/KyvmLu00/flipsy"> https://trello.com/b/KyvmLu00/flipsy </a>
                </div>
            </div>
        </div>
    )
}

export default UserHistories