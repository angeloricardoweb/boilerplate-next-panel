'use client'
import DashboardNavbar from '@/components/DashboardNavbar'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const params = useParams()
    const pathName = usePathname()
    console.log(pathName);

    return (
        <main className=''>
            <DashboardNavbar />
            <div className='grid grid-cols-5 p-3'>
                <div className="col-span-1">
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li

                        ><Link href={"/dashboard/coordenador/criar-projeto"}
                            className={`${pathName === '/dashboard/coordenador/criar-projeto' && 'active'}`}>Novo Projeto</Link></li>
                        <li><Link href={"/dashboard/coordenador/projetos"}
                            className={`${pathName === '/dashboard/coordenador/projetos' && 'active'}`}
                        >Projetos</Link></li>
                        {/* <li><Link href={"/dashboard/coordenador/projetos"}>Prorrogação de vigência para projeto</Link></li> */}
                        {/* <li>
                            <details open>
                                <summary>Projetos</summary>
                                <ul>
                                    <li><Link href={"/dashboard/coordenador/projeto/registro"}>Registro</Link></li>
                                    <li><Link href={"/dashboard/coordenador/projeto/registro"}>Projetos</Link></li>
                                    <li>
                                        <details open>
                                            <summary>Parent</summary>
                                            <ul>
                                                <li><a>Submenu 1</a></li>
                                                <li><a>Submenu 2</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <div className='col-span-4 pb-20'>
                    {children}
                </div>
            </div>
        </main>
    )
}
