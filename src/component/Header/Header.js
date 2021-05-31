import React, { useState } from "react";
import axios from 'axios';
import { Link, useHistory, withRouter } from "react-router-dom";


export default function Header() {
  const history = useHistory();
    const [state, setState] = useState({
    'task': "",
    'token': { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    successMessage: null
  })

  const handlelogout = (e) => {
     
    axios.post('http://localhost:8000/api/auth/logout')
    .then((response) => {

        history.push('/');

    console.log(response);
     
                   
   
   })
   .catch(function (error) {
                    console.log(error);
                });
  }
    
  return (

      

      <div className="flex-1 min-w-0 flex flex-col bg-white">
        <div className="flex-shrink-0">
          <header className="px-6 border-b border-gray-200">
            <div className="flex justify-between items-center  py-3">
              
              <div className="min-w-0 flex-1 flex">
                
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
   </svg>
              </div>

              
              <div className=" dropdown ml-6 flex-shrink-0 flex items-center">
                
                <button className="dropdown  ml-6">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              <ul className="dropdown-menu  hidden text-gray-700 pt-1">
             <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={ () => handlelogout()}>Logout</a></li>
             </ul>
                </button>
               
              </div>
            </div>

            
            

              
          </header>
        </div>
        </div>
      
       
  );
}

 
