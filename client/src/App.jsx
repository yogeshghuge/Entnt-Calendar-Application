
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminRouter from './Router/AdminRouter'
import HomeRouter from './Router/HomeRouter'

function App() {

  return (  
    <>

      <Routes>
          <Route>
            <Route path="/*" element={<HomeRouter />} />

            {/* <Route path="/user" element={<UserRouter />} /> */}
            <Route path="/admin/*" element={<AdminRouter />} />
          </Route>
      </Routes>
      
    </>
  )
}

export default App
