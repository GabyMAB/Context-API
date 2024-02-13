import { createContext, useContext, useState } from "react"; //funciones de reac
//createContext
//useContext
//useState

export const UserContext = createContext(); //se crea una nueva variable para almacenar el estado que tiene createContext

const UserProvider = ({children}) =>{ //se crea una funcion con el parametro children
    const [user, setUser] = useState(true) //s edeclara la variable user y la funcion setUser que actualizaran el valor de useState cuando el usuario sea validado
    return (
        <UserContext.Provider value={{user,setUser}}> {/*va a devolver el estado del usuario y la funcion para que este se pueda actualizar */}
            {children} 
        </UserContext.Provider>
    );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext) //se crea una nueva variabke para obtener el contenido de useContext sin necesidad de utilizar los props