import React from 'react'
import './results.css'

const result =({text, todos, settodos,todo,id})=> {

    const deletehandler =()=>
    {
        console.log('Delete Function is been started ');
        console.log(todo);
        settodos(todos.filter((el)=> el.id !== todo.id))
        
    }
    const completedhandler =(e)=>
    {
        console.log('completed');
        settodos(todos.map(element => {
            if(element.id === todo.id)
            {
                return {
                    ...element, completed : !element.completed
                }
            }
            else
            {
                return {
                    ...element, completed : element.completed
                }
            }
        }))
    }
    return (
        <div>
            <div className="containor">
                <div className="editanddelete">
                    
                <h3 className={`headingtext ${todo.completed ? "completed" : ""}`}>{text}</h3>
                    <div className="icons">
                       <button id='completeicon' onClick={completedhandler}> <i id='stackicon' class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                       <button onClick={deletehandler} id='deleteicon'> <i id='removeicon' class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                   

    
                    
                </div>

            </div>
        </div>
    )
}

export default result
