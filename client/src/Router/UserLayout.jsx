

import { Outlet } from 'react-router-dom';
import UserNavbar from '../User/UserNavbar/UserNavbar';

const UserLayout = () => {
   return (
      <div> 
         <header>
            <UserNavbar />
         </header>
         <main>

            <Outlet />
         </main>

         <footer>

         </footer>
      </div>
   );
}

export default UserLayout;