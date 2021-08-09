import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <div>
      <FormControlLabel
        label="testing checkbox"
        control={
          <Checkbox 
          icon={<DeleteIcon/>}
          checked={checked} 
          color="primary"
          onChange={(e)=> setChecked(e.target.checked)}
        />
        }
      />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample/>
        <ButtonGroup variant="contained" 
          color="primary">>
          <Button size="small"
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          style={{fontSize:12}}
          onClick={() => alert('hello')} 
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
          >
            Save
          </Button>
          <Button size="small"
          startIcon={<DeleteIcon />}
          endIcon={<DeleteIcon  />}>

            Discard
          </Button>
        </ButtonGroup>
       
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
