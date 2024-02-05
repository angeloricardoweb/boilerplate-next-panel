'use client'
import DashboardNavbar from '@/components/DashboardNavbar'
import { ButtonChangeAccount } from '@/components/partials/ButtonChangeAccount'
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
            <DashboardNavbar areaName={'Parecerista'} />
            <div className='grid grid-cols-5 p-3 gap-5'>
                <div className="col-span-1">
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li>
                            <Link href={"/dashboard/parecerista/projetos"}
                                className={`${pathName === '/dashboard/parecerista/projetos' && 'active'}`}>
                                <Icon icon="material-symbols:add-circle-outline-rounded" className="w-5 h-5 mr-2" />
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


