import React, { type ChangeEvent } from 'react'
import { TextField, Button } from '@mui/material'


type Props = {
    newTodoString: String,
    onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onAddingButton: () => void
}
const CreateNewTodo = ({
    newTodoString,
    onNewTodoChange,
    onAddingButton
}: Props) => {
    return (
        <div className="">
            <TextField label="Name"
                size="small" sx={{ mr: 1 }}
                value={newTodoString}
                onChange={onNewTodoChange} />
            <Button variant='contained' 
            onClick={onAddingButton}
            >
                Thêm</Button>
        </div>
    )
}

export default CreateNewTodo