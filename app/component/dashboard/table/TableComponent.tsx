"use client"
import React, {useState} from "react";
import ActionDropdown from "../../shared/ActionDropdown";

interface Facility {
  id: number;
  slug: string;
  name: string;
  description: string;
  facility_type: string;
  item:any
}



export const Columns =[
    {
        header: "SLUG",
        accessor: (item:Facility)=> item.slug
    },
    {  
        header:"NAME",
        accessor:(item:Facility)=>item.name
    },
    {
        header:"DESCRIPTION",
        accessor:(item:Facility)=>item.description
    },
    {
        header:"FACILITY TYPE",
        accessor:(item:Facility)=>item.facility_type
    },
    {
        header:"ACTIONS",
        accessor:(item:Facility)=><ActionDropdown item={{ Facilities: item }}/>
}

]
