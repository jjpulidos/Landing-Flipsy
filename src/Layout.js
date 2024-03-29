import React, { useContext } from 'react'
import Context from './GlobalState/context'

/* Import Components */

import Header from './assets/components/Header'
import Problematica from './assets/components/Problematica'
import Solucion from './assets/components/Solucion'
import Equipo from './assets/components/Equipo'
import Scrum from './assets/components/Scrum'
import Mockups from "./assets/components/Mockups";
import UserHistories from './assets/components/UserHistories'
import TechnicalTask from './assets/components/TechnicalTasks'
import Repositorio from "./assets/components/Repositorio";


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
            state.Screen === "mockups" ?
            <Mockups />
            :
            state.Screen === "user-stories" ?
            <UserHistories />
            :
            state.Screen === "repo" ?
            <Repositorio />
            :
            state.Screen === "tech-task" ?
                <TechnicalTask />
            :
            console.log() }
        </div>
    )
}

export default Layout