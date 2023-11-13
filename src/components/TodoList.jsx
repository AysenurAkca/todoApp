import styles from "./todolist.module.css";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
const TodoList = ({ todos, setTodos }) => {
    const sortedTodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done))
  return (
    <div>
      <div className={styles.todolist}>
        {sortedTodos.map((item) => (
          <TodoItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
        <Footer todos={todos}/>
    </div>
  );
};

export default TodoList;
