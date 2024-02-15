"use client"
import React, { useState } from "react";
import Todo from "./Todo";
import styles from "../page.module.css"

function Form() {
    const [todo, setTodo] = useState({});
    const [todos, setTodos] = useState([
        {todo: "todo 1"},
        {todo: "todo 2"},
        {todo: "todo 3"}
    ])
    const handleChange=e=>setTodo({[e.target.name]:e.target.value});
    const handleClick=e=>{
        if(Object.keys(todo).length==0 || todo.todo.trim() === '') {
            alert('El campo no puede ser vacío');
            return;
        }
        setTodos([...todos, todo])
    }
    const deleteTodo=indice=>{
        const newTodos=[...todos];
        newTodos.splice(indice,1);
        setTodos(newTodos);
    }
  return (
    <>
        <form onSubmit={e=>e.preventDefault()}>
            <label>Agregar Tarea</label><br />
            <input type="text" className={styles.form_input} name="todo" onChange={handleChange}/>
            <button className={styles.form_button} onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value,index)=>(<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}></Todo>))
        }
    </>
  );
}

export default Form;
