/* eslint-disable @next/next/no-img-element */
import { LoginForm } from '@/components/page-forms/LoginForm'
import React from 'react'

export default function page() {

    return (
        <main>
            <div className='flex justify-center items-center'>
                <img src="/logo.png" alt="Logo" className='w-32' />
            </div>
            <div className='w-full max-w-md mx-auto'>
                <LoginForm />
            </div>
        </main>
    )
}
