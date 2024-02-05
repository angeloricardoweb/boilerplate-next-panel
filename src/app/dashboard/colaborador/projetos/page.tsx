import { ProfessorProjectTable } from '@/components/partials/ProfessorProjectTable'
import { Subtitle } from '@/components/typography/Subtitle'
import { ProfessorDTO } from '@/protocols/dtos/professor-dto'
import React from 'react'

const professores: ProfessorDTO[] = [
  {
    id: '1',
    nome: 'Antônio Carlos Dias',
    projetos: [
      {
        id: '1',
        nome: 'Capacitação de professores',
        status: 'Em andamento',
        permite_colaboracao: true,
        colaboracao_solicitada: false
      },
      {
        id: '2',
        nome: 'Abertura de laboratório de informática',
        status: 'Em andamento',
        permite_colaboracao: false,
        colaboracao_solicitada: true

      },
      {
        id: '3',
        nome: 'Abertura de laboratório de informática',
        status: 'Concluído',
        permite_colaboracao: false,
        colaboracao_solicitada: false
      },
    ]
  },
  {
    id: '2',
    nome: 'José Amaro A. Filho',
    projetos: [
    ]
  }
]


export default function Page() {
  return (
    <div>
      <Subtitle text='Projetos' />
      <ProfessorProjectTable professores={professores} />
    </div>
  )
}
