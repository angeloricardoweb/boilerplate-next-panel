import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-[url(/auth-bg.jpg)] bg-cover bg-center w-screen h-screen flex items-center justify-center'>
            {children}
        </div>
    )
}
