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
import MemberAchievementsPage from './pages/MemberAchievementsPage';
import SalesDetailsPage from './pages/SalesDetailsPage';
import AddEmployeePage from './pages/AddEmployeePage';
import AddMemberPage from './pages/AddMemberPage';
import AddProductPage from './pages/AddProductPage';
import AddSalePage from './pages/AddSalePage';
import AddSeasonPage from './pages/AddSeasonPage';
import AddAchievementPage from './pages/AddAchievementPage';
import AddMemberAchievementPage from './pages/AddMemberAchievementsPage';
import { AddSalesDetailsPage } from './pages/AddSalesDetailsPage';
import UpdateMemberPage from './pages/UpdateMemberPage';
import UpdateEmployeePage from './pages/UpdateEmployeePage';
import UpdateProductPage from './pages/UpdateProductPage';
import UpdateSalePage from './pages/UpdateSalePage';
import UpdateSalesDetailsPage from './pages/UpdateSalesDetailsPage';
import DeleteMemberPage from './pages/DeleteMemberPage';
import DeleteEmployeePage from './pages/DeleteEmployeePage';
import DeleteProductPage from './pages/DeleteProductPage';
import DeleteSalePage from './pages/DeleteSalePage';
import DeleteMemberAchievementPage from './pages/DeleteMemberAchievementsPage';
import {useState} from 'react';

// import {useState} from 'react';

function App() {
  const [memberToEdit, setMemberToEdit] = useState()
  return (
    <Router>
      <div className='App'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/members' element={<MembersPage setMemberToEdit={setMemberToEdit}/>}/>
            <Route path='/employees' element={<EmployeesPage />}/>
            <Route path='/products' element={<ProductsPage />}/>
            <Route path='/sales' element={<SalesPage />}/>
            <Route path='/seasons' element={<SeasonsPage />}/>
            <Route path='/achievements' element={<AchievementsPage />}/>
            <Route path='/member-achievements' element={<MemberAchievementsPage />}/>
            <Route path='/sales-details' element={<SalesDetailsPage />}/>
            <Route path="/add-member" element={<AddMemberPage />}/>
            <Route path='/add-employee' element={<AddEmployeePage />}/>
            <Route path='/add-product' element={<AddProductPage />}/>
            <Route path='/add-sale' element={<AddSalePage />}/>
            <Route path='/add-season' element={<AddSeasonPage />}/>
            <Route path='/add-achievement' element={<AddAchievementPage />}/>
            <Route path="/add-member-achievement" element={<AddMemberAchievementPage />}/>
            <Route path='/add-sales-detail' element={<AddSalesDetailsPage />}/>
            <Route path="/update-member" element={<UpdateMemberPage memberToEdit={memberToEdit} />}/>
            <Route path='/update-employee' element={<UpdateEmployeePage />}/>
            <Route path='/update-product' element={<UpdateProductPage />}/>
            <Route path='/update-sale' element={<UpdateSalePage />}/>
            <Route path='/update-sales-details' element={<UpdateSalesDetailsPage />}/>
            <Route path="/delete-member" element={<DeleteMemberPage />}/>
            <Route path='/delete-employee' element={<DeleteEmployeePage />}/>
            <Route path='/delete-product' element={<DeleteProductPage />}/>
            <Route path='/delete-sale' element={<DeleteSalePage />}/>
            <Route path='/delete-member-achievement' element={<DeleteMemberAchievementPage />}/>
        </Routes>
      </div>
    </Router>
    );
  }


export default App;