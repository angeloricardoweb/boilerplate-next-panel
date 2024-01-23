import { Subtitle } from '@/components/typography/Subtitle'
import React from 'react'

export default function Page() {
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
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pesquisa e ensino de programação</td>
                            <td>
                                <span className='badge badge-warning'>Rascunho</span>
                            </td>
                            <td>22/09/2021</td>
                            <td className='grid grid-cols-3 gap-2'>
                                <button className="btn btn-sm btn-primary">Visualizar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Pesquisa e ensino de programação</td>
                            <td>
                                <span className='badge badge-error'>Cancelado</span>
                            </td>
                            <td>22/09/2021</td>
                            <td className='grid grid-cols-3 gap-2'>
                                <button className="btn btn-sm btn-primary">Visualizar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Pesquisa e ensino de programação</td>
                            <td>
                                <span className='badge badge-success'>Finalizado</span>
                            </td>
                            <td>22/09/2021</td>
                            <td className='grid grid-cols-3 gap-2'>
                                <button className="btn btn-sm btn-primary">Visualizar</button>
                                <button className="btn btn-sm btn-primary">Reabrir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Pesquisa e ensino de programação</td>
                            <td>
                                <span className='badge badge-info animate-pulse'>Em andamento</span>
                            </td>
                            <td>22/09/2021</td>
                            <td className='grid grid-cols-3 gap-2'>
                                <button className="btn btn-sm btn-primary">Visualizar</button>
                                <button className="btn btn-sm btn-primary">Prorrogar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
