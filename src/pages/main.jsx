
import Input from '../components/input';
import Todo from '../components/todo';
import styles from '../styles/input.module.css'

import React, { useState } from 'react'

function Main() {
    const[inputValue,setInputValue]=useState("")
    
    const[todoitems,setTodoItems]=useState([])

    console.log(inputValue)
    console.log(todoitems);
  return (
    <div className={styles.main}>
        <Input setInputValue={setInputValue} setTodoItems={setTodoItems} inputValue={inputValue} />
        <Todo todoitems={todoitems} setTodoItems={setTodoItems}/>
        

      
    </div>
  )
}

export default Main;
