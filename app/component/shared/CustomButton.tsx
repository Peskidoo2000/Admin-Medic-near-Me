"use client"
import Link from "next/link"

interface SharedProps{
    styles?: string,
    href?: string,
    text: string,
    textStyles?: string,
    type?: "button" | "submit" | "reset",
    onClick?:()=>any,
    disabled?: boolean,
}
 const CustomButton=({
styles,
textStyles,
disabled=false,
onClick,
href,
type,
text,
}:SharedProps)=>{
    const commonClass = `${styles} p-2 rounded-md disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-500 disabled:hover:bg-slate-500 disabled:hover:text-slate-500 disabled:active:bg-slate-500 disabled:active:text-slate-500`

    if(href){
        return (
        <Link href={href} className={commonClass}> <span className={textStyles}>{text}</span> </Link>
        )
    }
    return(
    <button type={type??"button"} onClick={onClick} disabled={disabled} className={commonClass}>
        <span className={textStyles}>{text}</span>
    </button>
)   
}

export default CustomButton;