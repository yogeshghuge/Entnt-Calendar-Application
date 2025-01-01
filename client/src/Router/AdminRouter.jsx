
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import CompanyManagement from '../Admin/CompanyMangement/CompanyManagement';
import AdminProtection from './AdminProtection';
import CompaniesList from '../Admin/Users/CompaniesList';


const AdminRouter = () => {
   return (
      <div>
         
         <Routes>

            <Route path="/" element={<AdminProtection />} >

               <Route path="/" element={<AdminLayout />} >

                  <Route path="/company" element={<CompaniesList />} /> 
                  <Route path="/" element={<CompanyManagement />} />
               </Route>
            </Route>
         </Routes>
      </div>
   );
}

export default AdminRouter;
