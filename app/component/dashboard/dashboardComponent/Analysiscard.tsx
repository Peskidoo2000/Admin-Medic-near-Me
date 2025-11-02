"use client"
import React from "react";
import CustomCard from "./../../shared/CustomCard";
import {UseSidebar} from "../context/sidebarContext";

const AnalysisCard = ()=>{
    /* isCLicked from sideBar context */
    const {isClicked} = UseSidebar()
    return(
        /* sidebar parent*/
        <div className={`flex gap-x-[3%] ${isClicked ? "flex-col gap-y-5 ml-37":"flex-row"} md:ml-37 md:flex-row`}>
            {/* custom cards from shared/CustomCard */}
            <CustomCard 
            styles={`bg-primary w-[48%]  ${isClicked ? "w-[70%]" : "w-[48%]" }`}
            category="All Users"
            total= {0}
            textStyles="text-center w-30 m-auto p-2 text-[1.6rem]"
            textStyles1="text-center w-20 m-auto mt-1 text-[3rem]"
            textStyles2="w-30 m-auto mt-1 text-[1rem]"
            facilityType1 = "enabled"
            facilityType2="disabled"
            facilityType3="0"
            facilityType4="0"
            />
              <CustomCard 
            styles={`bg-primary-light w-[48%]  ${isClicked ? "w-[70%]" : "w-[48%]" }`}
            category="All Facilities"
            total= {0}
            textStyles="text-center w-40 m-auto p-2 text-[1.6rem]"
            textStyles1="text-center w-20 m-auto mt-1 text-[3rem]"
            textStyles2="w-30 m-auto mt-1 text-[1rem]"
            facilityType1 = "enabled"
            facilityType2="disabled"
            />
        </div>
    )
}

export default AnalysisCard;