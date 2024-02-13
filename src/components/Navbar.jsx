import { NavLink } from "react-router-dom"; //importa al componenente de react 
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
   
    const {user,setUser} = useUserContext(); //se utiliza un hook useUserContext y se esta extrallendo el user, setUser
    
    return (
        <nav>
            <NavLink to="/">Home</NavLink> 
            {
                user && ( //si usuario es verdadero (validado) lo redirige al dashboard y le muestra un boton de salir
                    <>
                    <NavLink to="/dashboard">Dashboard</NavLink> {/*se utiliza para crear enlaces de navegacion en la app */}
                    <button onClick={() =>setUser(false)}>Salir</button> {/*si se muestra el boton llama a la funcion setUser para cerrar sesion */}
                    </>
                )
            }
        </nav>
    );
};

export default Navbar;