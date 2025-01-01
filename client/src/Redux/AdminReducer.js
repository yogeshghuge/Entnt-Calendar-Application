

const intialState = {
      
   adminEmail: "yogesh@gmail.com",
   adminPassword: "123456",

   isAuthenticated: false,

}


const adminSlice = createSlice({
   intialState,
   reducers: {
      localStorageSet: (state, action) => {
         state.isAuthenticated = action.payload.isAuthenticated;

         localStorage.setItem("authenticated", "admin")
      },
      
   }

   
})