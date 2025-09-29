import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { loginSuccess } from "../../AuthSlice/AuthSlice";
import './login.css'; 
import { Navigate, useNavigate } from "react-router-dom";
import RouterConstant from "../../../constant/RouterConstant";
import LoadingPage from "../../../component/Loader/Loader";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();

            // Dispatch login success action with token and user info
            dispatch(loginSuccess({ 
              uid: user.uid, email: user.email, displayName: user.displayName, token:token }));


          
            // alert("Login successful"); 
            navigate(RouterConstant.pHome);
            setIsLoading(false);
          


        } catch (error) {
            console.log("Login failed", error.message);
            alert("Login failed: invalid email or password. please try again.");
            setPassword("");
            setIsLoading(false);
    
        }
    };

    return (

        <>
        {isLoading && <LoadingPage title="Logging in...." head="Hang tight ⏳ Getting things ready for you.."/>}

        <div className="login-container">
           
            <form className="login-form" onSubmit={handleLogin}>
                <h1>Login</h1>
                
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    className="login-btn"
                    disabled={isLoading}
                >
                    Login
                </button>
                <button className="new-user-btn"  onClick={()=>navigate(RouterConstant.Signup)}>New User</button>
            </form>
        </div>
        </>
    );
};

export default Login;