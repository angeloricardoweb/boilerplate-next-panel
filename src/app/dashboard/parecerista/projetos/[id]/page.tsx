import { Subtitle } from '@/components/typography/Subtitle'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {
    const params = useParams<{ id: string }>()

    return (
        <div>
            <Subtitle text='Detalhe projeto' />
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ex voluptatum distinctio aspernatur? Ipsa autem recusandae corporis similique ipsum reprehenderit magni at quidem perspiciatis. Quasi quidem ea fuga deleniti dolores?</h3>
            <p>Coordenador: John Doe</p>
        </div>
    )
}
