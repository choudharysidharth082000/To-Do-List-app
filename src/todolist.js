import React from 'react'

//importing components 

import Result from './result'

const todolist =({todos, settodos})=> {
    return (
        <div>
            {todos.map(todo => (
                <Result todos={todos} todo={todo} settodos={settodos} text={todo.text} key={todo.id}/>
            ))}

        

            
        </div>
    )
}

export default todolist;