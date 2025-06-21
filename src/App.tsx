import { useState, type SetStateAction } from 'react'
import {Button, TextField} from '@mui/material'
import './App.css'
import { Todo } from './component/Todo'
import {v4 as uuidv4} from 'uuid'

type Todo = { id: string; name: string};
function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodoString, setNewTodoString] = useState('');

  //event handler
  const onNewTodoChange = (e: { target: { value: SetStateAction<string> } }) =>{
    setNewTodoString(e.target.value)
  }
  const onAddingButton = () =>{
    const newTodoItem: Todo ={
      id: uuidv4(),
      name: newTodoString
    }
    setTodoList([...todoList, newTodoItem]);
  }

  
  return (
    <>
    <p>This is To Do App</p><br/>
    <div> 
      <TextField label="Name" size="small" sx={{mr: 1}} value={newTodoString} onChange={onNewTodoChange}/>
      <Button variant='contained' onClick={onAddingButton}>Thêm</Button>
    </div>
    <div>
      {
        todoList.map((todo) => {
          return <Todo name={todo.name}/>;
        })
      }
     

        </div>
    </>
  )
}

export default App
