import {toast} from "react-toastify";

export const errorToast =(message:string)=>{
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
    })

}

export const successToast =(message:string)=>{
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
    })
}