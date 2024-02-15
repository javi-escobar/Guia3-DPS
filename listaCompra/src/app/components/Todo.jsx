import React, { useState } from "react";
import styles from "../page.module.css"

const Todo = ({nombre, marca, precio, cantidad, index, deleteTodo}) => {
    return (
        <>
            <div className={styles.list}>
                <h3 className="Titulo3">{nombre}, {marca}, {precio}, {cantidad}</h3>
                <button className={styles.btn_delete} onClick={() => deleteTodo(index)}>X</button>
            </div>
        </>
    )
}
export default Todo