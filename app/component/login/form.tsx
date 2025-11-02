"use client";
import React, { use } from "react";
import {loginValidation} from "@/lib/validations/AuthValidations";
import {useForm} from "react-hook-form";
import * as z from "zod";
import { LoginAuths } from "@/lib/repositories/Auth";
import {zodResolver} from "@hookform/resolvers/zod";
import {errorToast, successToast} from "@/lib/utilities/errorToast";
import useCustomMutation from "@/hooks/useCustomMutation";
import {useRouter} from "next/navigation";
import {QueryKeys} from "@/lib/constants/queryKeys";
import { setToken } from "@/lib/utilities/tokenUtilities";
import { errorExtractor } from "@/lib/utilities/errorExtractor";
import CustomButton from "../shared/CustomButton";


const LoginForm = () => {
    const router = useRouter();
    const {mutate, isSuccess, isPending} = useCustomMutation({
    mutationKey: [QueryKeys.LOGIN],
    mutationFn:LoginAuths,

    onSuccess: (data)=>{
    const token = data?.data?.data?.token ||data?.data?.token || data?.token;
    if(token){
    setToken(token)
     console.log("Login successful", token)
     router.push("/");
    }else{
        console.error("Token not found in response", data);
    }
    
    },

    onError:(error)=>{
        const extError = errorExtractor(error);
        errorToast(extError);
    },
})

    const form =useForm({
        resolver: zodResolver(loginValidation),
        defaultValues:{
            email:"",
            password:"",
        }   
    });

    const onSubmit =(values: z.infer<typeof loginValidation>)=>{
        mutate({
            email: values.email,
            password: values.password,
        });
}
return(
    <div>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label htmlFor="email" className="text-sky-500">Email</label>
        <input type="email" {...form.register("email")} className=" border border-gray-300 p-2  rounded-md"/>

        <label htmlFor="password" className="text-sky-500">Password</label>
        <input type="password" {...form.register("password")} className="border border-gray-300 p-2  rounded-md"/>

        <CustomButton type="submit" disabled={isPending} styles="bg-sky-500" text="sign in" textStyles="text-suplementary font-sans"/> 
        </form>      
    </div>
)
}

export default LoginForm;