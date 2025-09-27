import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { loginSuccess } from "../../AuthSlice/AuthSlice";
import './signup.css'; 
import { useNavigate } from "react-router-dom";
import RouterConstant from "../../../constant/RouterConstant";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const navigate = useNavigate();
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();

            // Dispatch login success action with token and user info
            dispatch(loginSuccess({ user, token }));
            alert("✅ Signup successful! Now you can login.");
            navigate(RouterConstant.Login);
        } catch (error) {
            console.error("❌ Signup failed:", error.code, error.message);
            alert("Signup failed: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h1>Signup</h1>
                
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
                    className="signup-btn"
                    disabled={isLoading}
                >
                    {isLoading ? "Signing up..." : "Signup"}
                </button>
            </form>
        </div>
    );
};

export default Signup;
