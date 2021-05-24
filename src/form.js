import React, { Component } from 'react'
import './form.css'
import App from './App'

const form =  ({todos, settodos, inputfield, setinputfield}) => {

    const printingvalue = (e)=>
    {
        console.log(e.target.value);
        setinputfield(e.target.value);
    }
    const submitbutton = (e)=>
    {
        e.preventDefault();

        settodos([...todos, {text: inputfield, completed: false , id: Math.random()*1000}]);
        setinputfield("");
        
    }

  
    return (
        <div>

            <div className='containorforform'>
                <input value ={inputfield} onChange={printingvalue}  className='inputform' type="text" placeholder='Write Tasks'/>
                <button id='createbutton' onClick={submitbutton} className='createbutton'>Create</button>
            </div>
            
        </div>
    )
}

export default form
