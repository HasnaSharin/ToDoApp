import React from 'react'
import Style from '../styles/input.module.css'

import style from '../styles/input.module.css'

function Todo(props) {
  const changeStatus=(index)=>{
    const newArr=[...props.todoitems]
    newArr[index].isCompleted=!newArr[index].isCompleted;
    props.setTodoItems(newArr)
  }
  const deleteTodo=(index)=>{
    var updatedArr=props.todoitems.filter((item,i)=>i!==index)
    props.setTodoItems(updatedArr)

  }
  return (
    <div className={Style.maintodo}>
      {props.todoitems.map((todo,index)=>(
        <div key={index} className={style.todoitem}>
        <input onChange={()=>changeStatus(index)} type="checkbox" checked={todo.isCompleted} className={style.check} />
        <p className={todo.isCompleted===true ? Style.todocomplete :Style.todoincomplete }  >{todo.content}
        </p>
        <button className={style.addbtn} onClick={()=>deleteTodo(index)}>Delete</button>
      
    </div>
        
      ))}
      
        
      


    </div>
  )
}

export default Todo;

