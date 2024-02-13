import { Outlet, Navigate } from "react-router-dom"; //funciones de react para navegar entre paginas y para rederizar rutas
import { useUserContext } from "../context/UserContext";


const LayoutPrivate = () => {
    const {user} = useUserContext(); //accede a useUserContext y trae a usuario 
   
    return (
        <>
        
            {user ? <Outlet /> : <Navigate to="/" />} {/*se hace una funcion ternaria si es falso lo regresa a home */}
        
        </>
    );
};

export default LayoutPrivate;