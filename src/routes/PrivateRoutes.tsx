import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Chat from "../pages/Chat"


const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default PrivateRoutes
