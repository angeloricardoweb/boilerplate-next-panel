'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { InputText } from '../forms-partials/InputText';
import { Textarea } from '../forms-partials/Textarea';

export function ProrrogarForm({ onCloseModal }: { onCloseModal: any }) {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        control,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    async function handlePost(data: any) {
        const loadingToast = toast.loading('Salvando...')
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            toast.success('Prorrogação enviada, enviamos um resumo para seu e-mail!')
            onCloseModal()
        } catch (error) {
            console.log(error);
            toast.error('Ops, corroeu um erro')
        }
        toast.dismiss(loadingToast)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlePost)}>
                <InputText type="date" label={'Data atual'} name={'null'} register={register} errors={errors} disabled />
                <InputText type="date" label={'Nova data'} name={'nova_data'} register={register} errors={errors} />
                <Textarea label={'Motivo'} name={'motivo'} register={register} errors={errors} />
                <div className='grid grid-cols-2 gap-3 mt-3'>
                    <button type="submit" className="btn btn-primary mt-3 w-full">Prorrogar</button>
                    <button type="button" onClick={onCloseModal} className="btn btn-neutral my-3 w-full">Cancelar prorrogação</button>
                </div>
            </form>
        </div>
    )
}
