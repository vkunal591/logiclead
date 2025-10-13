import AuthGuard from '@/components/AuthGuard'
import React from 'react'

function page() {
    return (
        <AuthGuard>
            <div>page</div>
        </AuthGuard>
    )
}

export default page