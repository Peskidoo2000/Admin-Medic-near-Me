"use client";
import React,{useState}from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Facilities {
    Facilities: any
}

export default function ActionDropdown({item}:{item:Facilities}) {
	const [show, setShow] =React.useState(false);

    return(
        <div className="relative">
            
            <ArrowDropDownIcon className="absolute mt-[-12%]" onClick={()=>setShow(prev=>!prev)}/> 
            {show &&
            (
            <div className="absolute bg-border left-3 mt-2 w-15  border rounded shadow-md">
            <button onClick={()=>setShow((prev)=>!prev)} className="text-sm px-2 py-1 bg-primary text-white rounded">View</button><br/>
            <button  className="text-sm px-2 py-1 bg-primary-light text-white rounded">Toggle</button><br/>
            <button  className="text-sm px-2 py-1 bg-error text-white rounded">Delete</button>
        </div>
        )}
        </div>
    )
}

