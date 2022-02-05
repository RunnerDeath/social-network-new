import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import DialogsContainer from "./components/DialogItem/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersAPIComponent from "./components/Users/UsersAPIComponent";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={DialogsContainer}/>
                    <Route path='/profile' component={ProfileContainer}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={UsersAPIComponent}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
