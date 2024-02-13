import { useNavigate } from "react-router-dom"; //funcion de react para navegar entre rutas
import { useUserContext } from "../context/UserContext";

const Home = () => {
    const {setUser} = useUserContext(); //se crea una variable para poder ingresar a la funcion y extraer setUser
    const navigate = useNavigate();
    const handleLogin = () => { //se crea una funcion para inciar sesion, y si setUser es validado se dirige al dashboard
        setUser(true);
        navigate('/dashboard');
    }
    return (
        <>
        <h1>Home</h1>
        <button onClick={handleLogin}>Iniciar Sesion</button>
        </>
    );
};

export default Home;