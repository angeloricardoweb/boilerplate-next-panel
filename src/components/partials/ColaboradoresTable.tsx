import React from 'react'
import { DialogPareceres } from '../dialogs/DialogPareceres'
import { DialogProrrogar } from '../dialogs/DialogProrrogar'
import { DialogRelatorio } from '../dialogs/DialogRelatorio'



export function ColaboradoresTable() {

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Data da solicitação</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Adriano Souza</td>
                        <td>
                            <span className='badge badge-info animate-pulse'>Aguardando</span>
                        </td>
                        <td>22/09/2021</td>
                        <td>
                            <DialogPareceres />
                        </td>
                        <td className='grid grid-cols-3 gap-2'>
                            <DialogRelatorio />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
