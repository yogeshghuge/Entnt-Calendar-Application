
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import CompanyManagement from '../Admin/CompanyMangement/CompanyManagement';


const AdminRouter = () => {
   return (
      <div>
         
         <Routes>

            <Route path="/" element={<AdminLayout />} >

               <Route path="admin" element={<CompanyManagement />} />
               <Route path="admin/admin" element={<h1>Admin</h1>} /> 
            </Route>
         </Routes>
      </div>
   );
}

export default AdminRouter;
