import React from 'react'

export default function Doing() {
    return (
        <div className="flex-1 overflow-auto bg-gray-50">
          <main className="p-3 h-full overflow-hidden inline-flex space-x-2">
            <div className="flex-shrink-0 flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="flex-shrink-0 px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Doing  <span className="m-3">2</span>
              </h3>
              <div className=" flex-1 min-h-0 overflow-y-auto">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a
                      href="#"
                      className=" block p-5 rounded-md bg-white shadow"
                    >
                      <div className="flex items-baseline justify-between">
                        <div className="px-3 py-1 bg-blue-200 rounded">
                          <span className="text-sm font-medium text-blue-500 leading-tight">
                            CurrentSprint
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          
                        </div>
                      </div>
                      <div className="mt-3">
                        
                      </div>

                      
                        
                        
                      
                    </a>
                  </li>

                  
                </ul>
              </div>
              <button className="px-3 py-1 bg-blue-200 rounded">
              Create Task
             </button>
            </div>
            
            </main>
            </div>
    )
}
