import React, {useState, Fragment, useEffect, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Link, useHistory, withRouter } from "react-router-dom";
import {API_BASE_URL} from '../Api/Api';
import axios from 'axios';
import '../../index.css';

export default function EditTask(props) {
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
  const history = useHistory();
  const id = props.match.params.id;
 

   const handleChange = (e) => {
    const{id, value} = e.target
      setState(prevState => ({
        ...prevState,
        [id] : value
      }))
    }
   
  const fetchTask = async () => {
      
      
      
        const response = await axios
            .get(`http://localhost:8000/api/task/${id}`, {headers: state.token})
           
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


    const sendTaskDetails = () => {
        
        if(state.task.length) {
           
           const payload = {
              'task': state.task
             }
          
          axios.put(`http://localhost:8000/api/task/${id}`, payload, {headers: state.token})
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

    const SubmitTask = (e, taskid) => {
      e.preventDefault();
      sendTaskDetails(taskid);

    }
    return (
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
               
                 
                  Update Task
                
                <div className="mt-4">
                  
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">
          Task
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" placeholder="Add Task" defaultValue={data.task} onChange={handleChange}/>
     
      </div>
    
               

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                     onClick={SubmitTask}
                  >
                    Update
                  </button>
                  
                </div>
              </div>
        
    )
}
