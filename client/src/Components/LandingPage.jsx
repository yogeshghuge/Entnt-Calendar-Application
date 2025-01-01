import { useNavigate } from "react-router-dom";


const LandingPage = () => {

   const navigate = useNavigate();

   return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
         <div className="text-center">
         <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to Our Platform
         </h1>
         <p className="text-lg text-white mb-8">
            Please choose your login type to proceed.
         </p>
         <div className="flex justify-center gap-6">
            <button
               className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
               onClick={() => navigate("/userLogin")}
            >
               User Login
            </button>
            <button
               className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 transition duration-300"
               onClick={() => navigate("/adminLogin")}
            >
               Admin Login
            </button>
         </div>
         </div>
      </div>
   );
};

export default LandingPage;