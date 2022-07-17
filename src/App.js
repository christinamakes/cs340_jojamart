import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMemberPage from './pages/AddMemberPage';
import MembersPage from './pages/MembersPage';
import AchievementsPage from './pages/AchievementsPage';
import AddAchievementPage from './pages/AddAchievementPage';
import {useState} from 'react';

function App() {
  

  return (
    <Router>
      <div className='App'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-member" element={<AddMemberPage />}/>
            <Route path='/members' element={<MembersPage />}/>
            <Route path='/achievements' element={<AchievementsPage />}/>
            <Route path='/add-achievement' element={<AddAchievementPage />}/>
        </Routes>
      </div>
    </Router>
    );
  }


export default App;