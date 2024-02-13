import { createBrowserRouter } from "react-router-dom"; //funcion de react de las configuraciones de las rutas
import LayoutRoot from '../layout/LayoutRoot'; //importaciones que son necesarias
import LayoutPrivate from '../layout/LayoutPrivate';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/dashboard',
                element: <LayoutPrivate/>,
                children: [
                    {
                        index: true,
                        element: <Dashboard/>
                    }
                ]
            }
        ]
    }
])