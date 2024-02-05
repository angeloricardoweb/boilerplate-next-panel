import React from 'react'
import { DialogPareceres } from '../dialogs/DialogPareceres'
import { DialogProrrogar } from '../dialogs/DialogProrrogar'
import { DialogRelatorio } from '../dialogs/DialogRelatorio'

type ProjectTableProps = {
    goToProjectDetails: (id: string) => void
    type?: 'relatorio' | 'prorrogacao'
}

export function ProjectsTable({ goToProjectDetails, type }: ProjectTableProps) {

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Título do projeto</th>
                        <th>Status</th>
                        <th>Última atualização</th>
                        <th>Pareceres</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Capacição de professores</td>
                        <td>
                            <small className='badge badge-info animate-pulse text-sm'>Em andamento</small>
                        </td>
                        <td>22/09/2021</td>
                        <td>
                            <DialogPareceres />
                        </td>
                        <td className='grid grid-cols-3 gap-2'>
                            <button className="btn btn-sm btn-primary" onClick={() => goToProjectDetails("1")}>Visualizar</button>
                            {
                                type === 'relatorio' && <DialogRelatorio />
                            }
                            {
                                type === 'prorrogacao' && <DialogProrrogar />
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
