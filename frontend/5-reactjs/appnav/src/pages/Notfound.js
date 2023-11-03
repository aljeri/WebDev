import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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