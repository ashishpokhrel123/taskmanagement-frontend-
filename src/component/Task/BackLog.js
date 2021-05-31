import React, {useState, Fragment, useEffect, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Link, useHistory, withRouter } from "react-router-dom";
import {API_BASE_URL} from '../Api/Api';
import axios from 'axios';
import '../../index.css';


export default function BackLog(props) {

 
  
   const history = useHistory();
   const [state, setState] = useState({
    'task': "",
    'token': { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
     successMessage: null
  })
  

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState([]);
  const [ task, setTask] = React.useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
 

  const handleChange = (e) => {
    const{id, value} = e.target
      setState(prevState => ({
        ...prevState,
        [id] : value
      }))
    }

  const deleteTask = (taskid) => {

    console.log(taskid);
   
   axios.delete(`http://localhost:8000/api/task/${taskid}`, {headers: state.token})
   .then((response) => {

    console.log(response);
     
                   
   
   })
   .catch(function (error) {
                    console.log(error);
                });
              }
                
                  
                 
                 
                    
                
              
               

  

  const updateTask = (taskid) => {
    redirectToEditTask(taskid);
    
  }

  const redirectToEditTask = (taskid) => {
    history.push('/edittask/'+taskid);

  }
 

 

  

    


  

 

  const sendTaskDetails = () => {
    if(state.task.length) {
      console.log(state.task.length);
      const payload = {
        'task': state.task
      }
      axios.post("http://localhost:8000/api/task", payload, {headers: state.token})
      .then(function(response){
                if(response.data){
                  console.log(response.data);
                  setState(prevState => ({
                    ...prevState,
                    'successMessage' : 'Task Created successful.'

                  }))
                  redirectToHome();
                 
                    } 
                
              })
              .catch(function (error) {
                    console.log(error);
                }); 
    }
  }
  const redirectToHome = () => {
      props.history.push('/home');
    }

    const SubmitTask = (e) => {
      e.preventDefault();
      sendTaskDetails();

    }

   function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
 

  
  const fetchTask = async () => {
        const response = await axios
            .get("http://localhost:8000/api/task", {headers: state.token})
           
            .then((response) => response.data)
            .then((data) => {
             setLoading(false);
             setData(data);
            })
            .catch((err) => {
               setLoading(false);
               setError('fetch failed');
            });

            

            

            

           
       
    };

    useEffect(() => {
        fetchTask();
    }, []);
  

    if (loading) {
    return <p>loading..</p>;
  }

  if (error !== '') {
    return <p>ERROR: {error}</p>;
  }


 
    
 

  
  
  

    
 

  
    return (
        <div className="flex-1 overflow-auto bg-gray-50">
          <main className="p-3 h-full overflow-hidden inline-flex space-x-2">
            <div className="flex-shrink-0 flex flex-col w-80 bg-transparent rounded-md justify-between py-1">
              <h3 className="flex-shrink-0 px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Backlog  
                 <span className=" m-3 border-4 border-light-blue-800 border-opacity-100">{data.length}</span>
              </h3>
              {data.map((element, index) => (
                
               
              <div className=" flex-1 min-h-0 overflow-y-auto" key={index} >
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1"  >
                    <a
                      href="#"
                      className=" block p-5 rounded-md bg-white shadow"
                    >
                      <div className="flex items-baseline justify-between">
                        <div className="px-3 py-1">
                          <span  className="text-sm font-medium text-black-500 leading-tight">
                            { element.task }
                            
                          </span>
                          
                        </div>
                        <div className="dropdown  px-3 py-1">
                          <span  className="text-blue-500 leading-tight">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 30 30" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                            
                          </span>
                          <ul className="dropdown-menu  hidden text-gray-700 pt-1">
      <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => updateTask(element.id)} >Edit</a></li>
      <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => deleteTask(element.id)}>Delete</a></li> </ul>
                          
                        </div>
                        </div>

                        
                      
                     

                      <div className="mt-6 flex items-center">
                        
                        
                            
                          
                       
                        
                       
                      </div>
                      
                      
                    </a>
                  </li>

                  
                </ul>
                
              </div>
              
              
              ))}
              
        <button
          type="button"
          onClick={openModal}
          className="px-3 py-1 bg-blue-200 rounded"
        >
         Create New Task
        </button>
        {/* For New Task */}
      

      
             { /* For Update Task */}
             <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Task
                </Dialog.Title>
                <div className="mt-4">
                  
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">
        Task
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" placeholder="Add Task" onChange={handleChange}/>
     
      </div>
    
               

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={SubmitTask}
                  >
                    Save
                  </button>
                  
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

             
  
            </div>
            </main>
            </div>
            
        
    );
}
