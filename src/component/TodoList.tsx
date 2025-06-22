import { Todo } from './Todo';
import type { TodoType } from '../App';


const TodoList = ({ todoList }: { todoList: TodoType[] }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return <Todo key={todo.id} name={todo.name} isCompleted={todo.isCompleted} />;
      })}
    </div>
  );
};

export default TodoList;