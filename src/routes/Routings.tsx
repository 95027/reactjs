import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../auth/Login"
import Register from "../auth/Register"
import { useAuth } from "../context/AuthContext"
import PrivateRoutes from "./PrivateRoutes"

const Routings = () => {

  const { user } = useAuth();

  console.log(user);


  return (
    <>
      {
        user ? (
          <PrivateRoutes />
        ) : (
          <Routes>
            <Route path='/*' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        )
      }
    </>
  )
}

export default Routings
