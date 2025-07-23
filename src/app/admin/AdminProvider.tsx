'use client'

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { createPagesBrowserClient, Session } from '@supabase/auth-helpers-nextjs'
import AdminLayoutShell from '@/components/layouts/admin/AdminLayoutShell'

interface AdminProvidersProps {
    children: React.ReactNode;
    initialSession: Session | null
}

export function AdminProviders({ children, initialSession }: AdminProvidersProps) {
    const [supabase] = useState(() => createPagesBrowserClient())

    return (
        <SessionContextProvider
            supabaseClient={supabase}
            initialSession={initialSession}
        >
            <AdminLayoutShell>{children}</AdminLayoutShell>
        </SessionContextProvider>
    )
}
