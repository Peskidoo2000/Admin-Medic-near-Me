"use client";
import React from "react";
import BoltIcon from '@mui/icons-material/Bolt';
import MenuIcon from '@mui/icons-material/Menu';
import {UseSidebar} from "../context/sidebarContext";
import DividerLine from "../../shared/Dividerline";


const Navbar =()=>{ 
/** sidebar context for visibility */
    const {isClicked, setIsClicked} = UseSidebar();

    return(
        <div>
        <div className={`flex  py-6 w-full ${isClicked ? "gap-[20%]" : "gap-[50%]"} md:gap-[55%] lg:gap-[65%]`}>
        <div className={`font-sans font-bold p-2 text-[0.7rem]  ${isClicked ? "ml-[30%]" : "ml-0"} md:ml-30`}>
            <span className="text-primary md:hidden"  onClick={() => setIsClicked(!isClicked)}> <MenuIcon/> </span>
            <span className="ml-2">Welcome Administrator</span>
        </div> 
        <div className="bg-suplementary  rounded-full p-2 text-primary "> <BoltIcon/></div>
        </div>
        <DividerLine styles="border-slate-200 border-t-2"/>
        </div>
    )
}

export default Navbar;