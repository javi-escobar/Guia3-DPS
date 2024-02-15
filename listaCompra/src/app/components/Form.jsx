"use client"
import React, { useState } from "react";
import Todo from "./Todo";
import styles from "../page.module.css"

function Form() {
        const [nombre, setNombre] = useState('');
        const [marca, setMarca] = useState('');
        const [precio, setPrecio] = useState('');
        const [cantidad, setCantidad] = useState('');
        const [todos, setTodos] = useState([]);
    
        const handleNombre = e => setNombre(e.target.value);
        const handleMarca = e => setMarca(e.target.value);
        const handlePrecio = e => setPrecio(e.target.value);
        const handleCantidad = e => setCantidad(e.target.value);
    
        const handleClick = e => {
            if(Object.keys(nombre).length==0 || nombre.trim() === '') {
                alert('El nombre del producto no puede ser vacío');
                return;
            }
            if(Object.keys(marca).length==0 || marca.trim() === '') {
                alert('La marca del producto no puede ser vacío');
                return;
            }
            if(parseFloat(precio) <= 0 || precio === '') {
                alert('El precio del producto no puede ser vacío, igual o menor a 0');
                return;
            }
            if(parseFloat(cantidad) <= 0 || cantidad === '') {
                alert('La cantidad de producto no puede ser vacío, igual o menor a 0');
                return;
            } else {
                setTodos([...todos, { nombre, marca, precio, cantidad }]);
            }
        }
    
        const deleteTodo = indice => {
            const newTodos = [...todos];
            newTodos.splice(indice, 1);
            setTodos(newTodos);
        }
    
        return (
            <>
                <form onSubmit={e => e.preventDefault()}>
                    <label>Nombre del Producto</label><br />
                    <input type="text" className={styles.form_input} value={nombre} onChange={handleNombre} />
                    <label>Marca del Producto</label><br />
                    <input type="text" className={styles.form_input} value={marca} onChange={handleMarca} />
                    <label>Precio del Producto</label><br />
                    <input type="number" className={styles.form_input} value={precio} onChange={handlePrecio} />
                    <label>Cantidad de Producto</label><br />
                    <input type="number" className={styles.form_input} value={cantidad} onChange={handleCantidad} />
                    <button className={styles.form_button} onClick={handleClick}>Agregar</button>
                </form>
                {
                    todos.map((value, index) => (
                        <Todo
                            nombre={value.nombre}
                            marca={value.marca}
                            precio={value.precio}
                            cantidad={value.cantidad}
                            key={index}
                            index={index}
                            deleteTodo={deleteTodo}
                        ></Todo>
                    ))
                }
            </>
        );
}

export default Form;
