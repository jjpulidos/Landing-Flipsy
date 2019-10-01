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
                    <ul style={{fontSize: "1.2em", fontWeight: "bolder", color: "black"}}>
                        <li>Modelación de la base de datos. <div style={{ color: 'red' }}> Back </div> Juan Pulido  </li>
                        <li>Autenticación con cognito AWS. <div style={{ color: 'red' }}> Back </div> Cristian Mantilla </li>
                        <li>Modelo inicial del stack. <div style={{ color: 'red' }}> Back </div> Camilo Pulido </li>
                        <li>Despliegue de instancias en AWS. <div style={{ color: 'red' }}> Back </div> Juan Pulido </li>
                        <li>Conexión Neo4J con esquema GraphQL. <div style={{ color: 'red' }}> Back </div> Camilo Pulido </li>
                        <li>Desarrollo pantallas de Login. <div style={{ color: 'blue' }}> Front </div> Daniel Organista </li>
                        <li>Desarrollo pantallas de Signup. <div style={{ color: 'blue' }}> Front </div> Brayan Guevara  </li>
                        <li>Desarrollo pantalla Menu Desplegable. <div style={{ color: 'blue' }}> Front </div> Daniel Organista </li>
                        <li>Desarrollo pantalla Dashboard. <div style={{ color: 'blue' }}> Front </div> Maria Robayo </li>
                        <li>Desarrollo pantalla Confirmación de Código. <div style={{ color: 'blue' }}> Front </div> Brayan Guevara </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TechnicalTasks