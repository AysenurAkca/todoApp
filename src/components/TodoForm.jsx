import { useState } from "react";
import styles from "./todoForm.module.css";
const TodoForm = ({todos,setTodos}) => {
    const [todo,setTodo] = useState({name:"",done:false})
    const handleSubmit =(e)=>{
        e.preventDefault();
        setTodos([...todos, todo])
        setTodo({name:"",done:false})
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}
            className={styles.todoForm}>
                <div className={styles.inputHolder}>
                <input type="text" value={todo.name} 
                onChange={(e)=>setTodo({name:e.target.value,done:false})} 
                className={styles.modernInput}
                placeholder="Enter a todo"/>
                <button type="submit" className={styles.addButton}>Add</button>
                </div>
            </form>
        </div>
     );
}
 
export default TodoForm;