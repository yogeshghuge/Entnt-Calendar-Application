import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AdminLogin = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const realUsername = "yogesh@gmail.com";
   const realPassword = "123456";

   const handleSubmit = (e) => {
         e.preventDefault();
         // Handle the admin login logic here


         // check the username and password in the redux and if it is correct, then redirect to the admin dashboard

         if(username === realUsername && password === realPassword) {
            alert("Admin Login Successful");
            navigate("/admin");
            localStorage.setItem("admin", "admin");
         }
         else {
            toast.error("Invalid email and password");
         }

   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
         
         <ToastContainer />

         <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Admin Login
         </h2>
         <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
               <label
               htmlFor="username"
               className="block text-sm font-medium text-gray-700"
               >
               Username
               </label>
               <input
               type="text"
               id="username"
               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
               placeholder="Enter your username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               required
               />
            </div>
            {/* Password Input */}
            <div>
               <label
               htmlFor="password"
               className="block text-sm font-medium text-gray-700"
               >
               Password
               </label>
               <input
               type="password"
               id="password"
               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               />
            </div>
            {/* Submit Button */}
            <div
               className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
               onClick={() => {setUsername("yogesh@gmail.com"); setPassword("123456");}}
            >
               Use Test Credetials
            </div>
            <button
               type="submit"
               className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
               Login
            </button>
         </form>
         {/* Additional Options */}
         <p className="mt-6 text-sm text-center text-gray-600">
            Forgot your password?{" "}
            <a href="#" className="text-indigo-500 hover:underline">
               Reset it here
            </a>
         </p>
         </div>
      </div>
   );
};

export default AdminLogin;