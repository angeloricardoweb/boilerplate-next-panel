import { ColaboradoresTable } from '@/components/partials/ColaboradoresTable'
import { Subtitle } from '@/components/typography/Subtitle'
import React from 'react'

export default function Page() {

    return (
        <div>
            <Subtitle text='Solicitação de colaboração' />
            <ColaboradoresTable />
        </div>
    )
}
