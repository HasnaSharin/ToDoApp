import React from 'react'
import style from '../styles/input.module.css'

function Input(props) {
  return (
    <div className={style.inputdiv}>
      <h1>To Do App</h1>
      < input type="text" className={style.newInput} onChange={(e)=>props.setInputValue(e.target.value)} />
      < button className={style.btn} onClick={(e)=>props.setTodoItems((prev)=>[...prev,{content:props.inputValue,isCompleted:false}])}>Save</button>
      
    </div>
  )
}

export default Input;



