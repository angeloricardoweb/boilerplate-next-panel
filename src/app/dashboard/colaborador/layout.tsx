'use client'
import DashboardNavbar from '@/components/DashboardNavbar'
import { ButtonChangeAccount } from '@/components/partials/ButtonChangeAccount'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname()

    return (
        <main className=''>
            <DashboardNavbar areaName='Colaborador' />
            <div className='grid grid-cols-5 p-5'>
                <div className="col-span-1">
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li>
                            <Link href={"/dashboard/colaborador/solicitacoes"}
                                className={`${pathName === '/dashboard/colaborador/solicitacoes' && 'active'}`}>
                                <Icon icon="material-symbols:add-circle-outline-rounded" className="w-5 h-5 mr-2" />
                                Solicitações
                            </Link>
                        </li>
                        <li>
                            <Link href={"/dashboard/colaborador/projetos"}
                                className={`${pathName === '/dashboard/colaborador/projetos' && 'active'}`}>
                                <Icon icon="material-symbols:edit-document-outline" className="w-5 h-5 mr-2" />
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <ButtonChangeAccount />
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
