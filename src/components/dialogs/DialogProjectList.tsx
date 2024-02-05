'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Icon } from '@iconify/react';
import { faker } from '@faker-js/faker';
import { ProjectDTO } from '@/protocols/dtos/project-dto';

export function DialogProjectList({ projects }: { projects: ProjectDTO[] }) {
    const [open, setOpen] = useState(false);

    function handleSolicitarColaboracao(projectId: string) {

    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <button
                className='btn btn-sm btn-primary'
                onClick={() => setOpen(true)}
            >
                Ver projetos
            </button>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50" />
                <Dialog.Content className=" fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-96 p-5 rounded-xl bg-white">
                    <Dialog.Close className="absolute right-6 top-6 border-none text-zinc-500 hover:text-zinc-200">
                        <Icon icon="ic:round-close" className="h-6 w-6" />
                    </Dialog.Close>
                    <Dialog.Title className="text-lg font-bold leading-tight text-zinc-800">
                        Projetos desse professor
                    </Dialog.Title>
                    <section className='mt-3'>
                        {
                            projects.map((project) => (
                                <div className='border bg-zinc-100 rounded-xl p-5 mt-2' key={project.id}>
                                    <p>
                                        <strong>
                                            {project.nome}
                                        </strong>
                                        <div>
                                            <span className='text-sm'>
                                                Status: {project.status}
                                            </span>
                                        </div>
                                        <div>
                                            {!project.colaboracao_solicitada && !project.permite_colaboracao && <small className='text-warning text-xs'>Este projeto não permite colaboração no momento</small>}
                                            {project.colaboracao_solicitada && <small className='text-success text-xs'>Você já solicitou colaboração para este projeto</small>}
                                        </div>
                                        <div className='mt-2'>
                                            {
                                                !!project.colaboracao_solicitada && project.permite_colaboracao &&
                                                <ConfirmCoop />
                                            }
                                        </div>
                                    </p>
                                </div>
                            ))
                        }
                    </section>
                </Dialog.Content>
            </Dialog.Portal >
        </Dialog.Root >
    );
}


function ConfirmCoop() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {
                open ? (
                    <>
                        <strong>Tem certeza que deseja colaborar com este projeto?</strong>
                        <div className='grid grid-cols-2 gap-3'>
                            <button className='btn btn-sm btn-primary'>Sim</button>
                            <button className='btn btn-sm btn-primary' onClick={() => setOpen(false)}>Não</button>
                        </div>
                    </>
                ) : (
                    <button className="btn btn-sm btn-primary" > Solicitar Colaboração</button>
                )
            }
        </div >
    )
}