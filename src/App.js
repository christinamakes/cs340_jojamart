import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import EmployeesPage from './pages/EmployeesPage';
import ProductsPage from './pages/ProductsPage';
import SalesPage from './pages/SalesPage';
import SeasonsPage from './pages/SeasonsPage';
import AchievementsPage from './pages/AchievementsPage';
import AddEmployeePage from './pages/AddEmployeePage';
import AddMemberPage from './pages/AddMemberPage';
import AddProductPage from './pages/AddProductPage';
import AddSalePage from './pages/AddSalePage';
import AddSeasonPage from './pages/AddSeasonPage';
import AddAchievementPage from './pages/AddAchievementPage';
import UpdateMemberPage from './pages/UpdateMemberPage';
import UpdateEmployeePage from './pages/UpdateEmployeePage';
import UpdateProductPage from './pages/UpdateProductPage';
import UpdateSalePage from './pages/UpdateSalePage';
import UpdateSeasonPage from './pages/UpdateSeasonPage';
import UpdateAchievementPage from './pages/UpdateAchievementPage';
import DeleteMemberPage from './pages/DeleteMemberPage';
import DeleteEmployeePage from './pages/DeleteEmployeePage';
import DeleteProductPage from './pages/DeleteProductPage';
import DeleteSalePage from './pages/DeleteSalePage';
import DeleteSeasonPage from './pages/DeleteSeasonPage';
import DeleteAchievementPage from './pages/DeleteAchievementPage';

// import {useState} from 'react';

function App() {
  

  return (
    <Router>
      <div className='App'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/members' element={<MembersPage />}/>
            <Route path='/employees' element={<EmployeesPage />}/>
            <Route path='/products' element={<ProductsPage />}/>
            <Route path='/sales' element={<SalesPage />}/>
            <Route path='/seasons' element={<SeasonsPage />}/>
            <Route path='/achievements' element={<AchievementsPage />}/>
            <Route path="/add-member" element={<AddMemberPage />}/>
            <Route path='/add-employee' element={<AddEmployeePage />}/>
            <Route path='/add-product' element={<AddProductPage />}/>
            <Route path='/add-sale' element={<AddSalePage />}/>
            <Route path='/add-season' element={<AddSeasonPage />}/>
            <Route path='/add-achievement' element={<AddAchievementPage />}/>
            <Route path="/update-member" element={<UpdateMemberPage />}/>
            <Route path='/update-employee' element={<UpdateEmployeePage />}/>
            <Route path='/update-product' element={<UpdateProductPage />}/>
            <Route path='/update-sale' element={<UpdateSalePage />}/>
            <Route path='/update-season' element={<UpdateSeasonPage />}/>
            <Route path='/update-achievement' element={<UpdateAchievementPage />}/>
            <Route path="/delete-member" element={<DeleteMemberPage />}/>
            <Route path='/delete-employee' element={<DeleteEmployeePage />}/>
            <Route path='/delete-product' element={<DeleteProductPage />}/>
            <Route path='/delete-sale' element={<DeleteSalePage />}/>
            <Route path='/delete-season' element={<DeleteSeasonPage />}/>
            <Route path='/delete-achievement' element={<DeleteAchievementPage />}/>
        </Routes>
      </div>
    </Router>
    );
  }


export default App;