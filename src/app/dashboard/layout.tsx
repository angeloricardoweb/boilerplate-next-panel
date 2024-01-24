'use client'
import DashboardNavbar from '@/components/DashboardNavbar'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const params = useParams()
    const pathName = usePathname()

    return (
        <main className=''>
            <DashboardNavbar />
            <div className='grid grid-cols-5 p-3'>
                <div className="col-span-1">
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li>
                            <Link href={"/dashboard/coordenador/criar-projeto"}
                                className={`${pathName === '/dashboard/coordenador/criar-projeto' && 'active'}`}>
                                Registro de novo projeto
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/coordenador/relatorio-de-projeto"}
                                className={`${pathName === '/dashboard/coordenador/relatorio-de-projeto' && 'active'}`}>
                                Relatório de projeto
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/coordenador/prorrogacao-de-projeto"}
                                className={`${pathName === '/dashboard/coordenador/prorrogacao-de-projeto' && 'active'}`}>
                                Prorrogação de vigência para projeto
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='col-span-4 pb-20'>
                    {children}
                </div>
            </div>
        </main>
    )
}
