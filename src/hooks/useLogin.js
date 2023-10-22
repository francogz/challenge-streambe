import { useNavigate } from "react-router-dom";
import { getLoginData } from "../services/api/login";

const useLogin = () => {
    const navigate = useNavigate();

    // FUNCTIONS
    const handleLogin = async () => {
        try {
            const req = await getLoginData();

            localStorage.setItem("userData", JSON.stringify(req));

            navigate("/dashboard");
        } catch (error) {
            alert("no se pudo iniciar sesión");
        }
    };

    const handleLogout = () => {
        localStorage.clear();

        navigate("/login");
    };

    return { handleLogin, handleLogout };
};

export default useLogin;
