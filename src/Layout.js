import React, { useContext } from 'react'
import Context from './GlobalState/context'

/* Import Components */

import Header from './assets/components/Header'
import Problematica from './assets/components/Problematica'
import Solucion from './assets/components/Solucion'
import Equipo from './assets/components/Equipo'


const Layout = () =>{

    const {state} = useContext(Context)

    return(
        <div className="container-master-web">
            <Header />
            {state.Screen === "problematica" ? 
            <Problematica />
            :
            state.Screen === "solucion" ? 
            <Solucion />
            :
            state.Screen === "equipo" ? 
            <Equipo />
            :
            <div/>
            }
        </div>
    )
}

export default Layout