"use client";
import {getToken} from "../../../lib/utilities/tokenUtilities"
import {useEffect, useState} from "react";
import{redirect, usePathname} from "next/navigation";

const ReactGuard = ({children}:{children:React.ReactNode})=>{
    const [authorize, setAuthorize] = useState(false);
    const pathName = usePathname();
    const getAceess =(url:string)=>{
        const publicPath:string[] =[
        "/auth/login",
        "/auth/signup"
    ]
    const path = url.split("?")[0]
    if(getToken() == null && !publicPath.includes(path)){
        setAuthorize(false);
        redirect("auth/login?redirect=" + path)
    }
    else{
        setAuthorize(true)
    }
    }
    useEffect(()=>{
        getAceess(pathName) 
    }, [pathName])
    return authorize && children
}

export default ReactGuard;