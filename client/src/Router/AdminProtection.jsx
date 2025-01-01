
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtection = () => {

   const admin = localStorage.getItem("admin");
   if(!admin) {
      return <Navigate to="/adminLogin" />;
   }

   return (
      <div>
         <Outlet />
      </div>
   );
}

export default AdminProtection;
