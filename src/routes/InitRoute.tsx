import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Fav from "../pages/Fav"

export const InitRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav" element={<Fav />} />
    </Routes>
  )
}
