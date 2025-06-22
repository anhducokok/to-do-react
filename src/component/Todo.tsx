
import {Button} from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const Icon = ({isCompleted}: {isCompleted: boolean;}) => {
  return (
    <div>
      {isCompleted ?<CheckBoxIcon/>:<CheckBoxOutlineBlankIcon/>}
      </div>
  )
}

export const Todo = ({name, isCompleted} : {name: String,isCompleted:boolean}) => {
  return (
    <div>
      <Button 
        style={{ justifyContent: 'space-between' }} 
        fullWidth={true} 
        endIcon={<Icon isCompleted={isCompleted}/>}
        >
        {name}
        
      </Button>
    </div>
  )
}
