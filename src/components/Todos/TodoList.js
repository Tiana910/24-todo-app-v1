import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.wrp}>
      {!todos.length && <h2>Todo list is ampty</h2>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
