import React from 'react'
import DashboardNavbar from '../DashboardNavbar'
import { DashboardSidebar, DashboardSidebarProps } from './DashboardSidebar'

export function DashboardLayout({ children, links }: { children: React.ReactNode, links: DashboardSidebarProps['links'] }) {
    return (
        <main className='flex-1 flex flex-col'>
            <DashboardNavbar areaName={'Parecerista'} />
            <div className='grid grid-cols-5 p-3 gap-5 flex-1'>
                <div className="col-span-1 border-r">
                    <DashboardSidebar links={links} />
                </div>
                <div className='col-span-4 pb-20'>
                    {children}
                </div>
            </div>
        </main>
    )
}
