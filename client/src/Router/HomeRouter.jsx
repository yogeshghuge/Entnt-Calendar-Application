
import { Routes, Route } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import LandingPage from '../Components/LandingPage';
import UserLogin from '../User/UserLogin/UserLogin';
import AdminLogin from '../Admin/AdminLogin/AdminLogin';

const HomeRouter = () => {
   return (
      <div>
         
         <Routes>
            <Route path="/" element={<HomeLayout />} >
               <Route path="/" element={<LandingPage />  } />
               <Route path="/userLogin" element={<UserLogin />} />
               <Route path="/adminLogin" element={<AdminLogin />} />
            </Route>
         </Routes>
      </div>
   );
}

export default HomeRouter;