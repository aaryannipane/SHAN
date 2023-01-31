import { useLocation,Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectCurrentToken } from "./authSlice";

const RequireAuth =()=>{
    const token =useSelector(SelectCurrentToken)
const location =useLocation()

return (
    token
    ? <Outlet/>
    : <Navigate to="/login" state={{from:location}} replace/>

)
}