// components/withAuth.tsx
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSessionContext } from '@supabase/auth-helpers-react'
import React from 'react'

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    const AuthenticatedComponent: React.FC<P> = (props) => {
        const router = useRouter()
        const { session, isLoading } = useSessionContext()

        useEffect(() => {
            if (!isLoading && !session) {
                router.replace('/login')
            }
        }, [session, isLoading, router])

        if (isLoading || !session) {
            return <div>Loading...</div>
        }

        return <WrappedComponent {...props} />
    }

    return AuthenticatedComponent
}
