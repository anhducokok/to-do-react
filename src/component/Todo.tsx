
import {Button} from '@mui/material'

export const Todo = ({name} : {name: String}) => {
  return (
    <div>
      <Button style={{ justifyContent: 'left' }} fullWidth={true}>{name}</Button>
    </div>
  )
}
