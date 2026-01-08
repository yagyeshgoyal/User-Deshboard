import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) =>{


    const backendUrl  = import.meta.env.VITE_BACKEND_URL;
    const [token , setToken] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    // const backendUrl = "http://localhost:4000";

     useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
            setUser(localStorage.getItem('user'))   

        }
    },[])
    
    
    const value ={
        navigate, token, setToken, backendUrl,
        user, setUser
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;