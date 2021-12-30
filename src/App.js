import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Auth from './components/Auth'
import createThemeCustom from "./theme";
import {useSettings} from "./context/SettingsContext";
import './mock'

function App() {
    const { settings } = useSettings()

    return (
        <ThemeProvider theme={createThemeCustom(settings)}>
            <BrowserRouter>
                <Auth>
                    <Routes>
                        <Route path="/sign-in" element={<SignIn/>}/>
                        <Route path="/sign-up" element={<SignUp/>}/>
                        <Route path="/*" element={<Home/>}/>
                    </Routes>
                </Auth>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
