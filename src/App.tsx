import { useState, type ChangeEvent } from 'react'
// import { Button, TextField } from '@mui/material'
import './App.css'
// import  Todo  from './component/Todo'
import { v4 as uuidv4 } from 'uuid'
import CreateNewTodo from './component/CreateNewTodo'
import TodoList from './component/TodoList'
export type TodoType = { id: string; name: string; isCompleted: boolean};

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [newTodoString, setNewTodoString] = useState('');

  //event handler
  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value)
  }
  const onAddingButton = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false,
    }
    setTodoList([ newTodoItem,...todoList]);
    setNewTodoString('');
  }


  return (
    <>
      <p>This is To Do App</p><br />
      <div>
        <CreateNewTodo
          newTodoString={newTodoString}
          onNewTodoChange={onNewTodoChange}
          onAddingButton={onAddingButton} />

      </div>
      <div>
        <TodoList todoList={todoList}/>
     


      </div>
    </>
  )
}

export default App
