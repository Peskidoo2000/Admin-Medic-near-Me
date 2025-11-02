"use client";
import React,{useState} from "react";
import Navbar from "../dashboard/Layout/navbar";
import {SidebarContext} from "../dashboard/context/sidebarContext"
import Sidebar from "../dashboard/Layout/sidebar"
import {Columns} from "../dashboard/table/TableComponent"

const GetUser =() =>{
     const [isClicked, setIsClicked] = useState(false);
    return(
         <SidebarContext.Provider value={{isClicked, setIsClicked}}>
            <Navbar/>
            <div className={` fixed top-0 shadow-lg transform transition-transform duration-500 ease-in-out space-y-4 
                       ${isClicked ? "translate-x-0" : "-translate-x-[120%]"} md:translate-x-0 md:block`}>
               <Sidebar/>
        </div>
           <div className="ml-35">
            <p className="w-[90%] bg-red-500 m-auto">I am get all facilities</p>
        </div>
        </SidebarContext.Provider>
    )
}

 export default GetUser