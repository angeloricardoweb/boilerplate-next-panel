'use client'
import DashboardNavbar from '@/components/DashboardNavbar'
import { Icon } from '@iconify/react/dist/iconify.js'
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
                                <Icon icon="material-symbols:add-circle-outline-rounded" className="w-5 h-5 mr-2" />
                                Registro de novo projeto
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/coordenador/relatorio-de-projeto"}
                                className={`${pathName === '/dashboard/coordenador/relatorio-de-projeto' && 'active'}`}>
                                <Icon icon="material-symbols:edit-document-outline" className="w-5 h-5 mr-2" />
                                Relatório de projeto
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/coordenador/prorrogacao-de-projeto"}
                                className={`${pathName === '/dashboard/coordenador/prorrogacao-de-projeto' && 'active'}`}>
                                <Icon icon="material-symbols:edit-calendar-rounded" className="w-5 h-5 mr-2" />
                                Prorrogação de vigência para projeto
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/coordenador/solicitacao-de-colaboracao"}
                                className={`${pathName === '/dashboard/coordenador/solicitacao-de-colaboracao' && 'active'}`}>
                                <Icon icon="material-symbols:group-add-outline-rounded" className="w-5 h-5 mr-2" />
                                Solicitação de colaboração
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard"}>
                                <Icon icon="material-symbols:change-circle-outline" className="w-5 h-5 mr-2" />
                                Alterar tipo de conta
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
