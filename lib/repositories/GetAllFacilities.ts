import Network, {RequestMethods} from "../services/network";

export const GetAllFacilities = async ()=>{
    const res = await Network({
        method:RequestMethods.GET,
        path:"/facilities/all"
    })
    return res;
}

export const GetSingleFacility = async (facilityId:string)=>{
    const res = await Network({
        method:RequestMethods.GET,
        path:`/facilities/${facilityId}`
    })
    return res;
};

export const GetAllFacilitiesForUser = async (userId:string)=>{
    const res = await Network({
        method:RequestMethods.GET,
        path:`/facilities/user/${userId}`
    })
    return res;
}