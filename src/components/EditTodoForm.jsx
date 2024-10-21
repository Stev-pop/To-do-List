import React, {useState} from 'react'


function EditTodoForm({editTasks, item}) {
  const [value, setValue] = useState(item.name)

  console.log(`items from Edited form: ${item.name}`)

  function handleEdit(e){
    e.preventDefault()
    editTasks(value, item.id)
    e.target.reset()
  }
  

  return (
    <>
     <div>
      <form action="" className="ToDoForm" onSubmit={handleEdit}>
          <input type="text" className="todo-input" value = {value} placeholder = "Edit item" onChange={(e)=>setValue(e.target.value)}/>
          <button type="submit" className='to-do-btn'>Edit Task</button>
      </form>
    </div>
    
    </>

  )
}

export default EditTodoForm