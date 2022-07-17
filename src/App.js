import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMemberPage from './pages/AddMemberPage';
import MembersPage from './pages/MembersPage';
import {useState} from 'react';

function App() {
  

  return (
    <Router>
      <div className='App'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-member" element={<AddMemberPage />}/>
            <Route path='/members' element={<MembersPage />}/>
        </Routes>
      </div>
    </Router>
    );
  }


export default App;