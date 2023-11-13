import styles from "./footer.module.css"
const Footer = ({todos}) => {
    const completedTodos = (todos.filter(todo=>todo.done)).length
    const totalTodos = todos.length
    return ( 
        <div className={styles.footer}>
            <span className={styles.item}>Total todos: {totalTodos}</span>
            <span className={styles.item}>Completed todos: {completedTodos} </span>
        </div>
     );
}
 
export default Footer;