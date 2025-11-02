import Network, {RequestMethods} from "../services/network";


export const LoginAuths =async (body: {
    email:string, password:string
})=>{
const res = await Network({
    method:RequestMethods.POST,
    path:"/auth/login",
    requestBody: body
})
return res;
}