'use client'
import React from 'react'
import { DialogPareceres } from '../dialogs/DialogPareceres'
import { ProfessorDTO } from '@/protocols/dtos/professor-dto'
import { useRouter } from 'next/navigation'
import { DialogProjectList } from '../dialogs/DialogProjectList'


export function ProfessorProjectTable({ professores }: { professores: ProfessorDTO[] }) {
    const router = useRouter()

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Professor</th>
                        <th>Projetos</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        professores.map((professor) => {
                            return (
                                <tr key={professor.id}>
                                    <td>{professor.nome}</td>

                                    <td>{professor.projetos.length}</td>
                                    <td>{professor.projetos.length > 0 &&
                                        <DialogProjectList projects={professor.projetos} />
                                    }</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
