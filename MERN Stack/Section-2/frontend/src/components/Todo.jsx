import React from 'react'
import '../styling/todo.css'

const Todo = () => {

    const addTodo = (e) => {
        if(e.code === 'Enter'){
            console.log("task added");
        }
    }
    
    return (
        <div>
            <h1 className='text-center display-4 fw-bold my-4 myh1'>To-Do App</h1>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <input type="text" name="" id="" className='form-control' onKeyDown={addTodo}/>
                    </div>

                    <div className="card-body">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo