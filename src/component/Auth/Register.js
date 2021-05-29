import React, {useState} from 'react'
import { Link, useHistory, withRouter } from "react-router-dom";
import {API_BASE_URL} from '../Api/Api';
import axios from 'axios';


export default function Register(props) {
    const history = useHistory();
       const [state , setState] = useState({
        name: "",
        email : "",
        password : "",
        successMessage: null
    })


    const handlechange = (e) => {
      const{id, value} = e.target
      setState(prevState => ({
        ...prevState,
        [id] : value
      }))

    }

    const sendUserDetails = () => {
      if(state.name.length && state.email.length && state.password.length) {
         
            const payload={
                "name": state.name,
                "email":state.email,
                "password":state.password,
            }

            axios.post('http://localhost:8000/api/auth/signup', payload)
              .then(function(response){
                if(response.data){
                  console.log(response.data);
                  setState(prevState => ({
                    ...prevState,
                    'successMessage' : 'Registration successful. Redirecting to home page..'

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
      alert("hello");
      props.history.push('/home');
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      sendUserDetails();

    }
    
    return (
      <div className="container mx-auto px-4">
        <div className="max-w-md w-full mx-auto">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="FullName" onChange={handlechange }/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={handlechange }/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={handlechange }/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
        Sign Up
      </button>
      <p>Already Have Account</p>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
        SignIn?
      </a>
    </div>
  </form>
  
</div>
</div>
    )
}
