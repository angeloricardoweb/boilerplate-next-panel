/* eslint-disable @next/next/no-img-element */
import { LoginForm } from '@/components/page-forms/LoginForm'
import type { Metadata } from "next";

import React from 'react'

export const metadata: Metadata = {
    title: "Login",
    description: "Versão de desenvolvimento do Boilerplate Next Panel",
  };

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
