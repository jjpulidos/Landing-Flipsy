import React, { useContext } from 'react'
import Context from './GlobalState/context'

/* Import Components */

import Header from './assets/components/Header'
import Problematica from './assets/components/Problematica'
import Solucion from './assets/components/Solucion'

const Layout = () =>{

    const {state} = useContext(Context)

    return(
        <div className="container-master-web">
            <Header />
            {state.Screen === "inicio" ? 
            <Problematica />
            :
            <div/>
            }
        </div>
    )
}

export default Layout