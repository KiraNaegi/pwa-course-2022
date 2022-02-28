import App from './App.js';
import Profile from './Profile.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sleeproom from './Sleeproom.js';

//index.js --> Router.js --> App.js

function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/sleeproom" element={ <Sleeproom /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;