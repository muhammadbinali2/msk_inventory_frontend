'use client';

import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';
import { useAuth } from './AuthProvider';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { user, loading } = useAuth();

    const isLoginPage = pathname === '/login';
    const showSidebar = !isLoginPage && (loading || !!user); // show sidebar shell during load too

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
