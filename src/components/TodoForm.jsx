import React, {useState} from 'react'


function TodoForm({addToDoList}) {
  const [value, setValue] = useState()

  function handleSubmit(e){
    e.preventDefault()
    addToDoList(value)
    e.target.reset()
  }
  

  return (
    <>
     <div>
      <form action="" className="ToDoForm" onSubmit={handleSubmit}>
          <input type="text" className="todo-input" placeholder = "What is the task today" onChange={(e)=>setValue(e.target.value)}/>
          <button type="submit" className='to-do-btn'>Add Task</button>
      </form>
    </div>
    
    </>

  )
}

export default TodoForm