'use client'
import DashboardNavbar from '@/components/DashboardNavbar'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <main className='flex-1 flex flex-col'>
            <DashboardNavbar areaName={'Projeto'} />
            <div className='grid grid-cols-5 p-3 gap-5 flex-1'>
                <div className="col-span-1 border-r">
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li >
                            <span
                                onClick={() => router.back()}
                            >
                                <Icon icon={"material-symbols:arrow-back-ios-rounded"} className="w-5 h-5 mr-2" />
                                Voltar
                            </span>
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
