'use client'
import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Icon } from '@iconify/react';
import { faker } from '@faker-js/faker';

export function DialogPareceres() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <button onClick={() => setOpen(true)}>
                <Icon icon="material-symbols-light:comment" className="h-6 w-6" />
            </button>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50" />
                <Dialog.Content className=" fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-96 p-5 rounded-xl bg-white">
                    <Dialog.Close className="absolute right-6 top-6 border-none text-zinc-500 hover:text-zinc-200">
                        <Icon icon="ic:round-close" className="h-6 w-6" />
                    </Dialog.Close>
                    <Dialog.Title className="text-lg font-bold leading-tight text-zinc-800">
                        Pareceres deste projeto
                    </Dialog.Title>
                    <section className='mt-3'>
                        {
                            Array.from({ length: 2 }, (_, i) => (
                                <div className='border bg-zinc-100 rounded-xl p-5 mt-2' key={i}>
                                    <p>
                                        <small>{faker.date.recent().toLocaleDateString()}</small>
                                        <div>
                                            <strong>{faker.person.firstName()}: </strong>
                                        </div>
                                        <div>
                                            {faker.lorem.paragraph()}
                                        </div>
                                    </p>
                                </div>
                            ))
                        }
                    </section>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}