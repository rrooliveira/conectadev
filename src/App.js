import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

//import GuestRoute from './routes/GuestRoute'
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import Auth from './components/Auth'

import theme from './theme'
import store from './store'
import './mock'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}> 
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
