import React from 'react'
import { DialogPareceres } from '../dialogs/DialogPareceres'
import { DialogProrrogar } from '../dialogs/DialogProrrogar'
import { DialogRelatorio } from '../dialogs/DialogRelatorio'
import { DialogColaboradorChangeStatus } from '../dialogs/DialogColaboradorChangeStatus'



export function ColaboradoresRequestTable() {

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
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
