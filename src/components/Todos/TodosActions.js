import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosAction.module.css';

function TodosAction({ resetTodo, deleteComleted, completedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos">
        <RiRefreshLine onClick={resetTodo} />
      </Button>
      <Button title="Clear Completed Todos" disabled={!completedTodosExist}>
        <RiDeleteBin2Line onClick={deleteComleted} />
      </Button>
    </div>
  );
}
export default TodosAction;
