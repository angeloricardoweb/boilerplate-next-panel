'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { InputText } from '../forms-partials/InputText';

export function ProrrogarForm() {
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
        const loadingToast = toast.loading('Realizando login...')
        try {
            router.push('/dashboard/coordenador/projetos')
            toast.success('Login realizado com sucesso!')
        } catch (error) {
            console.log(error);
            toast.error('Erro ao realizar login!')
        }
        toast.dismiss(loadingToast)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlePost)}>
                <InputText type="date" label={'Nova anterior'} name={'null'} register={register} errors={errors} disabled />
                <InputText type="date" label={'Nova data'} name={'nova_data'} register={register} errors={errors} />
                <div className='grid grid-cols-2 gap-3'>
                    <button type="submit" className="btn btn-primary mt-3 w-full">Prorrogar</button>
                    <button type="button" onClick={() => router.push("/auth/criar-conta")} className="btn btn-neutral my-3 w-full">Cancelar prorrogação</button>
                </div>
            </form>
        </div>
    )
}
