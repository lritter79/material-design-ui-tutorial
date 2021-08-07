import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button size="small"
        startIcon={<SaveIcon />}
        endIcon={<SaveIcon />}
        style={{fontSize:12}}
        onClick={() => alert('hello')} 
        variant="contained" 
        color="primary">
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
