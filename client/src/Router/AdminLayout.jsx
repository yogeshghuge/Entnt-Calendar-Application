
import { Outlet } from 'react-router-dom';
import AdminNavbar from './../Admin/AdminNavbar/AdminNavbar';

const AdminLayout = () => {
   return (
      <div> 
         <header>
            <AdminNavbar />
         </header>
         <main>

            <Outlet />
         </main>

         <footer>

         </footer>
      </div>
   );
}

export default AdminLayout;