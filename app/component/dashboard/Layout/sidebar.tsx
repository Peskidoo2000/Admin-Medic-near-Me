"use client";
import React, {useState} from "react";
import CustomButton from "../../shared/CustomButton";
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import DividerLine from "../../shared/Dividerline";
import DashboardIcon from '@mui/icons-material/Dashboard';


/**Side bar functions and components*/
const Sidebar =()=>{
    return(
        <div className="bg-slate-300 h-screen"> 
        {/* Sidebar header */}
        <div className="  font-roboto py-8 font-bold mb-4 text-primary md:mb-12"> 
            <p className="mb-2 text-[1rem]">Medic Center </p>
             <DividerLine styles="border-slate-200 border-t-2 mt-8"/>
        </div>
        
        {/* sidebar Options*/}
        <div>
        
        <div className="flex flex-row-2 mt-[-9%]"> 
        <DashboardIcon className="text-primary"/>
        <CustomButton href="/" text="Dashboard" styles="text-primary w-[90%]"/>
        </div>
        <DividerLine styles="border-slate-200 border-t-2"/>

        <div className="flex flex-row-2 mt-10"> 
        <PersonIcon className="text-primary"/>
        <CustomButton href="/component/getUsers" text="All Users" styles="text-primary w-[90%]"/>
        </div>
        <DividerLine styles="border-slate-200 border-t-2"/>

        <div className="flex mt-10"> 
        <LocalHospitalIcon className="text-primary"/>
        <CustomButton  href="/component/getAllFacilities"  text="Get Facility" styles="text-primary w-[90%]"/>
        </div>
        <DividerLine styles="border-slate-200 border-t-2"/>

        <div className="flex mt-10"> 
        <MedicalInformationIcon className="text-primary"/>
        <CustomButton text="Single Facility" styles="text-primary w-[90%]"/>
        </div>
        </div>
        </div>
    )
}

export default Sidebar;