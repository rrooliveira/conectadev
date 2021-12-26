import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import GuestRoute from './routes/GuestRoute'
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import theme from './theme'
import store from './store'
import './mock'


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<h1>Not found 404</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
