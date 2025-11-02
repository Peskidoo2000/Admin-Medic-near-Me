"use client"
import React, {useState} from "react";
import Main from "./main";
import Navbar from "./navbar";
import {SidebarContext} from "./../context/sidebarContext"

const Dashboard = ()=>{
    const [isClicked, setIsClicked] = useState(false);

    return(
        <SidebarContext.Provider value={{isClicked, setIsClicked}}>
        <div className="flex flex-col">
        <Navbar/> 
         <Main />
        </div>
        </SidebarContext.Provider>
            )
        }

export default Dashboard;