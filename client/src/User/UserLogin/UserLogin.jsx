import  { useState } from "react";

const UserLogin = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the login logic here
      alert(`Email: ${email}, Password: ${password}`);
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            User Login
         </h2>
         <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
               <label
               htmlFor="email"
               className="block text-sm font-medium text-gray-700"
               >
               Email
               </label>
               <input
               type="email"
               id="email"
               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Enter your email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
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
               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               />
            </div>
            {/* Submit Button */}
            <button
               type="submit"
               className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
               Login
            </button>
         </form>
         {/* Additional Options */}
         <p className="mt-6 text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
               Sign up
            </a>
         </p>
         </div>
      </div>
   );
};

export default UserLogin;