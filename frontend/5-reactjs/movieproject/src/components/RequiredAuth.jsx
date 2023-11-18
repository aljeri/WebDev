import {useLocation, Navigate, Outlet} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function RequiredAuth ({checkRoles}) {
    const {auth} = useAuth();
    const location = useLocation();
    return (
        auth?.roles?.find(role=> checkRoles?.includes(role))
            ? <Outlet />
            : auth?.user 
                ? <Navigate to='/' state={{from:location}} replace/>
                :<Navigate to="/login" state={{ from: location}} replace />
    );
}
