import { useQuery } from "@tanstack/react-query";

interface Props{
    queryKey: string[],
    queryFn: (params?:any)=>Promise<any>,
   enabled?: boolean,
}

const useFetch =(
    {queryKey,
    queryFn,
    enabled,
    }:Props):{
        isLoading: boolean,
        isError: boolean,
        data: any
    }=>{const {isLoading, isError, data} = useQuery({
        queryKey:queryKey,
        queryFn: queryFn,
        enabled: enabled
    })
    return {isLoading, isError, data}
}

export default useFetch;