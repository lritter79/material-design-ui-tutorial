import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained" 
          color="primary">>
          <Button size="small"
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          style={{fontSize:12}}
          onClick={() => alert('hello')} >
          
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
