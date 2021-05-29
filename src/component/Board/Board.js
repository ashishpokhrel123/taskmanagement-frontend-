import React from 'react'
import Header from '../Header/Header'
import BackLog from '../Task/BackLog'
import CurrentSprint from '../Task/CurrentSprint'
import Doing from '../Task/Doing'
import Done from '../Task/Done'
import Container from './Container'

export default function Board() {
    return (
        <div>
              <Header />
                 
              <div className="flex-1 overflow-auto bg-gray-50">
          <main className="p-3 h-full overflow-hidden inline-flex space-x-2">
              <BackLog />
              <CurrentSprint />
              <Doing />
              <Done />

          </main>
          </div>
        </div>

         
           
            
             
            

            
            
            
            
     
    )
}
