import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function Todo({item, deleteItem, editItem, toggleItem}) {
  
  return (
    <>
      <div className='list-items'>
        <p className= {`${item.completed ? "change-color" : "blue"}`} onClick = {()=>toggleItem(item.id)}>{item.name}</p>
        <div>
        <FontAwesomeIcon icon={faTrash} onClick = {()=>deleteItem(item.id)}/>
        <FontAwesomeIcon icon={faPenToSquare} onClick = {()=>editItem(item.id)}/>
        </div>
        
      </div>
    </>
  )
}

export default Todo