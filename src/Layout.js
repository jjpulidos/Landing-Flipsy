import React, { useContext } from 'react'
import Context from './GlobalState/context'

/* Import Components */

import Header from './assets/components/Header'
import Problematica from './assets/components/Problematica'
import Solucion from './assets/components/Solucion'
import Equipo from './assets/components/Equipo'
import Scrum from './assets/components/Scrum'
import UserHistories from './assets/components/UserHistories'


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
            state.Screen === "scrum" ?
            <Scrum />
            :
            state.Screen === "user-stories" ?
            <UserHistories />
            :
            console.log() }
        </div>
    )
}

export default Layout