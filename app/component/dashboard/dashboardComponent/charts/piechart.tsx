"use client"
import React from "react";
import{ResponsiveContainer, PieChart, Pie, Legend, Cell, Tooltip} from "recharts";
import {mockFacilities} from "../../../mockdatas/Mockdatas";
import useMediaQuery from '@mui/material/useMediaQuery';

/* Interface for pie argument */
interface PieProps {
    data?:Array <{name:string, value:number}>;
    dataKey?: string;
    nameKey?: string,
    outerRadius?: number;
    isAnnimationActive?:boolean;
}

/* helper function for grouping mockFacility data*/
export const facilitiesData = Object.values(
    mockFacilities.reduce<Record<string, {name:string, value:number}>>((acc, facility)=>{
        const type =facility.facility_type;
        acc[type] = acc[type] || {name:type, value:0}
        acc[type].value += 1
        return acc
    }, {})
)
console.log("i am facility data", facilitiesData);

/* Colors for pie charts */
const COLORS = ["red", "blue", "yellow", "green"];

/* Empty Data Interface*/
const emptyData =[{name:"No Data", value:1}];

/*PieChart component parent */
export const PieChartComponent =({
data =[],
dataKey="value",
nameKey="name",
outerRadius,
isAnnimationActive,

}:PieProps)=>{

    const chartData = data && data.length > 0 ? data : emptyData;
    const isEmpty = chartData.length === 1 && chartData[0].name==="No Data";
    const largeScreenSize = useMediaQuery("(930px)")
    return(
        <ResponsiveContainer width="100%" aspect={1}>
            <PieChart>
                <Pie
                 data={chartData}
                dataKey={dataKey}
                nameKey={nameKey}
                outerRadius={isEmpty ? 120 : largeScreenSize ? 150 : 100}
                isAnimationActive={isAnnimationActive}
                cx="50%"
                cy="50%"
                label={({ name, value }) => `${name}: ${value}`}>
                    {chartData.map((entry:any, index:number)=>(
                        <Cell key={index} fill={chartData.length===1 && chartData[0].name ==="No Data" ? "gray" :COLORS[index % COLORS.length]}/>
                    ))}
                     {/* but entry is not used for now */}
                </Pie>
                <Legend/>
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    )
}
