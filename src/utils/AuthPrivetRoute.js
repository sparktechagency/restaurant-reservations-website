// this is a funciton for privet route
'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const AuthPrivateRoute = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const userinfo = JSON.parse(localStorage.getItem('userinfo'));
        if (!userinfo?.user) {
            router.push('/login');
        }
    }, [router]);

    return children;
}

export default AuthPrivateRoute;
