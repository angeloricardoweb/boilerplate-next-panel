'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
    const router = useRouter()

    return (
        <div className='bg-[url(/auth-bg.jpg)] bg-cover bg-center flex items-center justify-center w-screen h-screen'>
            <main className='p-5'>
                <section className='mx-auto max-w-xl'>
                    <h1 className='text-center text-2xl font-bold'>Bem-vindo, Angelo Ricardo! Selecione uma das opções abaixo para continuar seu atendimento</h1>
                    <div className='grid md:grid-cols-3 gap-3 mt-3'>
                        <button
                            onClick={() => router.push('/dashboard/coordenador/relatorio-de-projeto')}
                            className='btn btn-primary'>
                            Coordenador
                        </button>
                        <button
                            onClick={() => router.push('/dashboard/colaborador/projetos')}
                            className='btn btn-primary'>
                            Colaborador
                        </button>
                        <button
                            onClick={() => router.push('/dashboard/parecerista/projetos')}
                            className='btn btn-primary'>
                            Parecerista
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}
