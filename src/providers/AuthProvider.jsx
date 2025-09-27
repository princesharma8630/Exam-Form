import { onIdTokenChanged } from "firebase/auth"
import { loginSuccess, logout } from "../Auth/AuthSlice/AuthSlice";



const AuthProvider=({children})=>{
const dispatch = useDispatch();
    useEffect(()=>{
        const unsubscribe = onIdTokenChanged(auth , async(user)=>{
            if(user){
                const freshToken = await user.getIdToken();

                dispatch(loginSuccess({user , token:freshToken}));
                localStorage.setItem("token ", freshtoken);
            }
            else{
                  dispatch(logout());
            localStorage.removeItem("token");
            }
            return unsubscribe
        });
    
    } , [dispatch]);
    return children;
}
export default AuthProvider;