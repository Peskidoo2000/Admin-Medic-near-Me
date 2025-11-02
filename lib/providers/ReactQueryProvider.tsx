"use client"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { useState } from "react";

function QueryProvider({children}:{children:React.ReactNode}){
    const [queryClient] = useState(()=>
        new QueryClient({
            defaultOptions:{
                queries:{
                    retry: 1,
                    staleTime: 60000
                },
                mutations:{
                    retry: 2
                }
            }
        })
    )
    
    return(
          <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
export default  QueryProvider;