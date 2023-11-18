import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
//pull information from authcontext
const useAuth =()=>{
    return useContext(AuthContext)

}

export default useAuth;