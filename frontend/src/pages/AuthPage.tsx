import { Outlet } from 'react-router';
import Logo from "../components/header/Logo.tsx";
import styles from './auth-page.module.css';

const AuthPage = () => {
    return (
        <main className={styles['auth-page']}>
           <Outlet />
        </main>
    );
}

export default AuthPage;