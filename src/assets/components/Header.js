import React from 'react'
import '../styles/styles.css'
import logo_white from '../media/Flipsy-Logo.svg'
import { Icon } from 'antd'

const Header = () =>{
    return(
        <div className="container-master-header">
            <div>
                <img src={logo_white} className="logo-header" />
            </div>
            <div className="container-options-header"> 
                <div className="container-option-header">
                    <p className="text-menu-header">Problematica <Icon type="right" /></p>
                </div>
                <div className="container-option-header">
                    <p className="text-menu-header">Solución <Icon type="right" /></p>
                </div>
                <div className="container-option-header">
                    <p className="text-menu-header">Equipo <Icon type="right" /></p>
                </div>
            </div>
        </div>
    )
}

export default Header