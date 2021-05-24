import React,{useState} from 'react'
import './App.css';

// importing the various components from the system
import Result from  './result';
import Form from './form';
import Todolist from './todolist'

const App = () =>
{
  const [inputfield, setinputfield]= useState("");
  const [todos, settodos]= useState([]);
  
  

  
  return(
    <div className = "Taskcontainor">

      <div className='mainpart'>
              <div className='heading'>
                <h1>To Do List</h1>
              </div>
              <Form todos= {todos} settodos={settodos} inputfield ={inputfield} setinputfield={setinputfield}/>

              

                
              <div className= "taskresultcontainor">
                <Todolist todos={todos} settodos={settodos} />
                

                

                
              </div>
          </div>
    </div>
  )
}

export default App;
