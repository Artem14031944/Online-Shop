import Admin from './pages/Admin/Admin';
import { ADMIN_ROUTE } from './utils/consts';

export const authRoutes = [
    {
        path : ADMIN_ROUTE,
        component: Admin
    }
];

export const publicRoutes = [

];