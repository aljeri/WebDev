import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//useNavigate -> force changes to the path
//useEffect -> triggers once when loading the component and if dependencies are added
export default function Notfound(){
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },1000)
    },[])
    return(
    <h1>Page not Found</h1>
    )
}