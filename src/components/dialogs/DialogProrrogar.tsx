'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Icon } from '@iconify/react';
import { ProrrogarForm } from '../page-forms/ProrrogarForm';

export function DialogProrrogar() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <button className='btn btn-sm btn-primary' onClick={() => setOpen(true)}>Prorrogar</button>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50" />
                <Dialog.Content className=" fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-96 p-5 rounded-xl bg-white">
                    <Dialog.Close className="absolute right-6 top-6 border-none text-zinc-500 hover:text-zinc-200">
                        <Icon icon="ic:round-close" className="h-6 w-6" />
                    </Dialog.Close>
                    <Dialog.Title className="text-lg font-bold leading-tight text-zinc-800">
                        Prorrogar projeto
                    </Dialog.Title>
                    <ProrrogarForm onCloseModal={() => setOpen(false)} />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}