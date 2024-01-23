'use client'
import { DialogPareceres } from '@/components/dialogs/DialogPareceres'
import { DialogProrrogar } from '@/components/dialogs/DialogProrrogar'
import { Subtitle } from '@/components/typography/Subtitle'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {
    const router = useRouter()

    function goToProjectDetails(id: string) {
        router.push(`/dashboard/coordenador/projetos/${id}`)
    }

    return (
        <div>
            <Subtitle text='Projetos' />
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
                            <td>Análise de dados</td>
                            <td>
                                <span className='badge badge-warning'>Rascunho</span>
                            </td>
                            <td>22/09/2021</td>
                            <td>
                                <DialogPareceres />
                            </td>
                            <td className='grid grid-cols-3 gap-2'>
                                <button className="btn btn-sm btn-primary" onClick={() => goToProjectDetails("1")}>Visualizar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Pesquisa e ensino de programação</td>
                            <td>
                                <span className='badge badge-error'>Cancelado</span>
                            </td>
                            <td>22/09/2021</td>
                            <td>
                                <DialogPareceres />
                            </td>
                            <td className='grid grid-cols-3 gap-2'>
                                <button className="btn btn-sm btn-primary" onClick={() => goToProjectDetails("1")}>Visualizar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Ensino de Inteligência Artificial</td>
                            <td>
                                <span className='badge badge-success'>Finalizado</span>
                            </td>
                            <td>22/09/2021</td>
                            <td>
                                <DialogPareceres />
                            </td>
                            <td className='grid grid-cols-3 gap-2'>
                                <button className="btn btn-sm btn-primary" onClick={() => goToProjectDetails("1")}>Visualizar</button>
                                <DialogProrrogar />
                            </td>
                        </tr>
                        <tr>
                            <td>Capacição de professores</td>
                            <td>
                                <span className='badge badge-info animate-pulse'>Em andamento</span>
                            </td>
                            <td>22/09/2021</td>
                            <td>
                                <DialogPareceres />
                            </td>
                            <td className='grid grid-cols-3 gap-2'>
                                <button className="btn btn-sm btn-primary" onClick={() => goToProjectDetails("1")}>Visualizar</button>
                                <DialogProrrogar />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
