
import { configureStore } from "@reduxjs/toolkit";
import companyReducers from "./companyReducers";


const store = configureStore({
   reducer: {
      companyReducers
   }
});   

export default store;
