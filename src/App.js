import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import './App.css';

import Home from './pages/Home'
import SignIn from './pages/SignIn';
import theme from './theme'

function App() {

  const url = window.location.href
  return (
    <ThemeProvider theme={theme}> 
    {
      url === 'http://localhost:3000/'
      ? <Home />  
      : <SignIn />
    }

    </ThemeProvider>
    
  );
}

export default App;
