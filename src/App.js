import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container  from '@material-ui/core/Container';

import Paper  from '@material-ui/core/Paper';
import Grid  from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #333, #999)',
    border:0,
    borderRadius:15,
    color:'white',
    padding: '0 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 38,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[400],
    }
  }
})

function ButtonStyled(){
  const classes = useStyles()
  return (
    <Button className={classes.root}>
      Test Styled Button
    </Button>
  )  
}

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
    

    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
      <div className="App">
      <header className="App-header">
        <Typography variant="h2" component="div">
          Welcome to MUI
          Div component
        </Typography>
        <Typography variant="h3">
          Learn material UI
        </Typography>
        <Typography variant="subtitle1">
          subtitle1
        </Typography>
        <Typography variant="body1">
          body1
        </Typography>
        <ButtonStyled></ButtonStyled>
        <Grid container spacing={3} justify="center">
          <Grid item xs={3} sm={6}>
            <Paper style={{height:75, width:'100%'}}>
            </Paper>
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{height:75, width:'100%'}}>
            </Paper>
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{height:75, width:'100%'}}>
            </Paper>
          </Grid>
        </Grid>      
        <TextField
          variant="outlined"
          color="secondary"
          type="date"
          label="date"
        />
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          value="testing@test.com"
        />
        <CheckboxExample/>
        <ButtonGroup variant="contained" 
          color="primary">
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
      </Container>
     
    </ThemeProvider>

    
  );
}

export default App;
