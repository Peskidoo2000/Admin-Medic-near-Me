import {useMutation} from "@tanstack/react-query";

interface Props{
    mutationKey: string[],
 mutationFn:(data:any)=> Promise<any>,
 onSuccess:(data:any)=> void,
 onError:(data:any)=> void,
 options?: object
}

const useCustomMutation = ({
    mutationKey,
    mutationFn,
    onSuccess,
    onError,
    options,
}:Props):{
mutate:(data:any)=>void,
isError: boolean,
data:boolean,
isSuccess:boolean,
isPending:boolean,
}=>{
const {mutate, isSuccess, isError, data, isPending} = useMutation({
mutationFn:(data)=>mutationFn(data),
mutationKey: mutationKey,
onSuccess,
onError,
...options,
})
return {mutate, isSuccess, isError, data, isPending}
}

export default useCustomMutation