

import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
   return (
      <div> 
         <header>
         
         </header>
         <main>

            <Outlet />
         </main>

         <footer>

         </footer>
      </div>
   );
}

export default HomeLayout;