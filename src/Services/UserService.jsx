import axios from "axios"
import ApiConstant from "../constant/ApiConstant"


const getUsers= async()=>{
    try{
        const response = await axios.get(ApiConstant.usersApi);
        console.log("api data " , response.data);
        return response.data;
    }
    catch(error){
        console.error("error finding in UserService", error);
        return[];
    }
};
export default getUsers;