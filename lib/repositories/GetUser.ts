import Network, { RequestMethods } from "../services/network";

export  const GetUser = async () => {
  const res = await Network({
    method: RequestMethods.GET,
    path:"/users/user"
  })
  return res;
}