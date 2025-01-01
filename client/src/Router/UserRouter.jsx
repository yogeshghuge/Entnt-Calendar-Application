
import { Routes, Route } from 'react-router-dom';
import UserLayout from './UserLayout';


const UserRouter = () => {
   return (
      <div>
         
         <Routes>
         
            <Route path="/" element={<UserLayout />} >

               <Route path="user" element={<h1>User</h1>} />
               <Route path="user/user" element={<h1>User</h1>} /> 
            </Route>
         </Routes>
      </div>
   );
}

export default UserRouter;