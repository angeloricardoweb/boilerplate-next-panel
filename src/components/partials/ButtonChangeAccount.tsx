import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

export function ButtonChangeAccount() {
    return (
        <Link href={"/dashboard"}>
            <Icon icon="material-symbols:change-circle-outline" className="w-5 h-5 mr-2" />
            Alterar tipo de conta
        </Link>
    )
}
