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
import AddSeasonPage from './pages/AddSeasonPage';
import AddAchievementPage from './pages/AddAchievementPage';
import AddMemberAchievementPage from './pages/AddMemberAchievementsPage';
import AddLineItemPage from './pages/AddLineItemPage';
import UpdateMemberPage from './pages/UpdateMemberPage';
import UpdateEmployeePage from './pages/UpdateEmployeePage';
import UpdateProductPage from './pages/UpdateProductPage';
import UpdateSalesDetailsPage from './pages/UpdateSalesDetailsPage';
import {useState} from 'react';

// import {useState} from 'react';

function App() {
  const [memberToEdit, setMemberToEdit] = useState()
  const [employeeToEdit, setEmployeeToEdit] = useState()
  const [productToEdit, setProductToEdit] = useState()

  return (
    <Router>
      <div className='App'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/members' element={<MembersPage setMemberToEdit={setMemberToEdit}/>}/>
            <Route path='/employees' element={<EmployeesPage setEmployeeToEdit={setEmployeeToEdit}/>}/>
            <Route path='/products' element={<ProductsPage setProductToEdit={setProductToEdit}/>}/>
            <Route path='/sales' element={<SalesPage />}/>
            <Route path='/seasons' element={<SeasonsPage />}/>
            <Route path='/achievements' element={<AchievementsPage />}/>
            <Route path='/member-achievements' element={<MemberAchievementsPage />}/>
            <Route path='/sales-details' element={<SalesDetailsPage />}/>
            <Route path="/add-member" element={<AddMemberPage />}/>
            <Route path='/add-employee' element={<AddEmployeePage />}/>
            <Route path='/add-product' element={<AddProductPage />}/>
            <Route path='/add-season' element={<AddSeasonPage />}/>
            <Route path='/add-achievement' element={<AddAchievementPage />}/>
            <Route path="/add-member-achievement" element={<AddMemberAchievementPage />}/>
            <Route path='/add-line-item' element={<AddLineItemPage />}/>
            <Route path="/update-member" element={<UpdateMemberPage memberToEdit={memberToEdit} />}/>
            <Route path='/update-employee' element={<UpdateEmployeePage employeeToEdit={employeeToEdit}/>}/>
            <Route path='/update-product' element={<UpdateProductPage productToEdit={productToEdit}/>}/>
            <Route path='/update-sales-details' element={<UpdateSalesDetailsPage />}/>
        </Routes>
      </div>
    </Router>
    );
  }


export default App;