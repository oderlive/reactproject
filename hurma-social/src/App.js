import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            {/* <Route exact path="/dialogs" element={<Dialogs />}/>
        <Route exact path="/profile" element={<Profile />}/> */}
            <Route exact path="/dialogs/" 
            element={<DialogsContainer />} 
            />
            <Route 
            exact path="/profile" 
            element={<Profile/>} 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
