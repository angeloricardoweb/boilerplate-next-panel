/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Icon } from '@iconify/react';
import { ProrrogarForm } from '../page-forms/ProrrogarForm';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export function DialogConfirmProjectDetails() {
    const [open, setOpen] = useState(false);
    const router = useRouter()

    async function handlePost(data: any) {
        const loadingToast = toast.loading('Enviando...')
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
            setOpen(false)
            toast.success('Projeto salvo com sucesso! Enviamos uma confirmação para o seu e-mail. ',{
                duration: 5000
            })
        } catch (error) {
            console.log(error);
            toast.error('Erro!')
        }
        toast.dismiss(loadingToast)
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <button className='btn btn-primary' type="button" onClick={() => setOpen(true)}>Salvar</button>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50" />
                <Dialog.Content className=" fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-96 p-5 rounded-xl bg-white">
                    <Dialog.Close className="absolute right-6 top-6 border-none text-zinc-500 hover:text-zinc-200">
                        <Icon icon="ic:round-close" className="h-6 w-6" />
                    </Dialog.Close>
                    <Dialog.Title className="text-lg font-bold leading-tight text-zinc-800 mt-7">
                        Confirme os dados do projeto antes de enviar
                    </Dialog.Title>
                    <p>Resumo do projeto aqui</p>
                    <p>Resumo do projeto aqui</p>
                    <p>Resumo do projeto aqui</p>
                    <p>Resumo do projeto aqui</p>
                    <p>Resumo do projeto aqui</p>
                    <div className='grid grid-cols-2 gap-3 mt-3'>
                        <button type="submit" className="btn btn-primary mt-3 w-full" onClick={handlePost}>Salvar</button>
                        <button type="button" onClick={() => setOpen(false)} className="btn btn-neutral my-3 w-full">Cancelar</button>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}