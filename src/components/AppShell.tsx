'use client';

import Sidebar from '@/components/Sidebar';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './AuthProvider';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, loading } = useAuth();

    const isLoginPage = pathname === '/login';
    const showSidebar = !isLoginPage && (loading || !!user); // show sidebar shell during load too

    // Client-side auth guard (replaces middleware): redirect only after loading is done
    useEffect(() => {
        if (loading) return;

        if (!isLoginPage && !user) {
            router.replace('/login');
            return;
        }
        if (isLoginPage && user) {
            router.replace(user.role === 'manager' ? '/stock' : '/');
        }
    }, [loading, user, isLoginPage, router]);

    return (
        <>
            {showSidebar && <Sidebar />}
            <div className={showSidebar ? 'main' : 'w-full h-full'}>
                {children}
            </div>
            <div className="notif" id="notif"></div>
        </>
    );
}
