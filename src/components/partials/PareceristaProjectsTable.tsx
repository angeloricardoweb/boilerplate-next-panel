'use client'
import React from 'react'
import { DialogPareceres } from '../dialogs/DialogPareceres'
import { ProfessorDTO } from '@/protocols/dtos/professor-dto'
import { useRouter } from 'next/navigation'
import { DialogProjectList } from '../dialogs/DialogProjectList'
import { DialogRelatorio } from '../dialogs/DialogRelatorio'
import { DialogPareceresCreate } from '../dialogs/DialogPareceresCreate'


export function PareceristaProjectsTable() {
    const router = useRouter()

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Projeto</th>
                        <th>Professor</th>
                        <th>Status</th>
                        <th>Data da solicitação</th>
                        <th>Pareceres</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Capacição de professores</td>
                        <td>Michel Ávila</td>
                        <td>
                            <span className='badge badge-info animate-pulse'>Aguardando</span>
                        </td>
                        <td>22/09/2021</td>
                        <td>
                            <DialogPareceres />
                        </td>
                        <td className='grid grid-cols-3 gap-2'>
                            <button className="btn btn-sm btn-primary" onClick={() => null}>Ver Projeto</button>
                            <DialogPareceresCreate />
                        </td>
                    </tr>
                    <tr>
                        <td>Análise de dados</td>
                        <td>Erick Almeida</td>
                        <td>
                            <span className='badge badge-success'>Aprovado</span>
                        </td>
                        <td>22/09/2021</td>
                        <td>
                            <DialogPareceres />
                        </td>
                        <td className='grid grid-cols-3 gap-2'>
                            <button className="btn btn-sm btn-primary w-full" onClick={() => null}>Ver Projeto</button>
                            <DialogPareceresCreate />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
