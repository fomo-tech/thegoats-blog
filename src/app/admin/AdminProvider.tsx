'use client'

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

interface AdminProvidersProps {
    children: React.ReactNode
}

export function AdminProviders({ children }: AdminProvidersProps) {
    const [supabase] = useState(() => createPagesBrowserClient())

    return (
        <SessionContextProvider supabaseClient={supabase}>
            {children}
        </SessionContextProvider>
    )
}
