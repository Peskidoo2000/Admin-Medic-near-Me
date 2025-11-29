"use client";
import React, {useState} from "react";
import Sidebar from "./sidebar";
import AnalysisCard from "../dashboardComponent/Analysiscard";
import { UseSidebar } from "../context/sidebarContext";
import {facilitiesData, PieChartComponent} from "../dashboardComponent/charts/piechart";
import {Columns} from "../table/TableComponent"
import { mockFacilities } from "../../mockdatas/Mockdatas";


const Main =()=>{
    /** isClicked from sideBar context for visibility */
    const {isClicked} = UseSidebar()

    return(
        <div className="relative">
            {/* sidebar component redering*/}
       <div className={` fixed top-0 shadow-lg transform transition-transform duration-500 ease-in-out space-y-4 
                       ${isClicked ? "translate-x-0" : "-translate-x-[120%]"} md:translate-x-0 md:block`}>
               <Sidebar/>
        </div>

         {/* Main component redering*/}
            <div className="text-suplementary w-full h-screen">
                <div className="mt-4">
                <AnalysisCard/>
                </div>
        {/*Pie charts component rendering */}
                 <div className="md:flex gap-[3%] hidden ml-37 lg:mt-[-9%]">
                <div className="w-[50%] p-0">
                <PieChartComponent/> 
                </div>
                 <div className=" w-[50%] p-0">
                <PieChartComponent data={facilitiesData}/> 
                </div>
            </div>
                <div className="hidden md:block ml-37">

        {/* table compoenent rendering */}
<table className="border-seperate border-slate-500 p-4 w-[98%] text-sm text-slate-800 mt-7" >
  <thead>
    <tr className="border p-4"> 
      {Columns.map((col) => (
        <th key={col.header} className="border border-slate-500">{col.header}</th>
      ))}
    </tr>
  </thead>

  <tbody>
    {/* table when data is empty */}
    {mockFacilities.length === 0 ?
    ( <tr className="border border-slate-500">
            <td  colSpan={Columns.length} className="p-6 text-center border border-slate-500">No records found</td>
          </tr>) :
    mockFacilities.map((row) => (

      <tr key={row.id} className="border border-slate-500">
        {Columns.map((col) => (
          <td key={col.header} className="border border-slate-500">
            {(col.accessor as unknown as (r: any) => React.ReactNode)(row)}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

                </div>

            </div>    
    </div>
    )
}

export default Main;