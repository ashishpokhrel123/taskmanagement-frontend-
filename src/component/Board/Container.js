import React from 'react'
import Card from './Card';
export default function Container() {
    return (
        <div className='container mx-auto'>
            <h1>Tailwind CSS</h1>
            <h2>Incorporado con PostCss</h2>
            <button className="btn btn-blue btn-blue:hover">Botón</button>
            <div className="my-5 flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                   <h1>Backlog 0</h1>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                   <h1>Current Sprint 0</h1>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                   <h1>Doing 0</h1>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                   <h1>Done 0</h1>
                </div>
            </div>
        </div>
    )
}
