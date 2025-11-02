"use client";
/* interface for sharedCard taking possibles values*/
interface SharedProps {
category: string,
total: number,
textStyles1?: string,
textStyles2?: string,
textStyles3?:string,
textStyles4?: string,
textStyles5?: string,
facilityType1?: string,
facilityType2?: string,
styles?: string,
textStyles?: string,
facilityType3?: string,
facilityType4?: string,
}

/* custom Card parent and structure */
const CustomCard =({
category,
total,
styles,
textStyles,
textStyles1,
textStyles2,
textStyles3,
textStyles4,
textStyles5,
facilityType1,
facilityType2,
facilityType3,
facilityType4,
}:SharedProps)=>{
    return(
        <div className={`${styles} rounded-lg disabled:disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-500 disabled:hover:bg-slate-500 disabled:hover:text-slate-500 disabled:active:bg-slate-500 disabled:active:text-slate-500`}> 
            <p className={` ${textStyles}`}> {category}</p>
            <p className={` ${textStyles1}`}>{total}</p>
            <div className={` ${textStyles2} flex gap-4`}>
                <p className={` ${textStyles3}`}>{facilityType1}</p>
                <p className={` ${textStyles4}`}>{facilityType2}</p>
             </div>
            <div className={` ${textStyles2} flex gap-8 mt-[-1%]`}>
                <p className={` ${textStyles3} text-[3rem] px-2`}>{facilityType3}</p>
                <p className={` ${textStyles4} text-[3rem] px-2`}>{facilityType4}</p>
             </div>
        </div>
    )
}

export default CustomCard;