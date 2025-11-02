export const errorExtractor= (error:any):string=>{
    if(error?.response?.data){
        const message = error.response.data.message || error.response.data.error;
        if(typeof message === "string"){
            return message;
        }else if(Array.isArray(message)){
            return message.join(", ");
        }else{
            return "An unknown error occurred.";
        }
    } else if(error?.request){
        return "No response received from server.";
    }
    return "Something went wrong, pls try again.";
}