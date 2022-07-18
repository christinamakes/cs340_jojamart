import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddMemberPage from './pages/AddMemberPage';
import MembersPage from './pages/MembersPage';
import AchievementsPage from './pages/AchievementsPage';
import AddAchievementPage from './pages/AddAchievementPage';
import EmployeesPage from './pages/EmployeesPage';
import AddEmployeePage from './pages/AddEmployeePage';
import productsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';
import SalesPage from './pages/SalesPage';
import AddSalePage from './pages/AddSalePage';
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
            <Route path='/employees' element={<EmployeesPage />}/>
            <Route path='/add-employee' element={<AddEmployeePage />}/>
            <Route path='/products' element={<productsPage />}/>
            <Route path='/add-product' element={<AddProductPage />}/>
            <Route path='/sales' element={<SalesPage />}/>
            <Route path='/add-sale' element={<AddSalePage />}/>
        </Routes>
      </div>
    </Router>
    );
  }


export default App;