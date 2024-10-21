import React, {useEffect, useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
// import EditTodoForm from './EditTodoForm'

function ToDoWrapper() {
    const [items, setItems] = useState([])
  
  const addToDoList = (data)=>{
    setItems([...items, {id: uuidv4(), name: data, completed: false, isEditing: false}])
  }
  console.log(items)

const deleteItem = (id)=>{
  return setItems(items.filter(item=> item.id !== id))
}

const editItem = (id)=>{
  setItems(items.map(item=> item.id === id ? {...item, isEditing: !item.isEditing} : item))
}




const toggleItem = (id)=> setItems(items.map(item => item.id === id ? {...item, completed: !item.completed} : item))

const editTasks = (task, id)=>{
  setItems(items.map(item=>item.id===id ? {...item, name:task.toUpperCase(), isEditing: !item.isEditing} : item))

}

  return (
    <>
        <TodoForm addToDoList={addToDoList}/>
        {items.map((item, index)=>{
            return item.isEditing ? <EditTodoForm editTasks = {editTasks} item = {item} /> : <Todo item={item} key={index} deleteItem = {deleteItem} editItem={editItem} toggleItem = {toggleItem}/>
        })}
      
        
    </>
  )
}

export default ToDoWrapper