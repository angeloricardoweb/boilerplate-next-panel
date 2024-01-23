'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InputText } from '../forms-partials/InputText';

export function LoginForm() {
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
        try {
            router.push('/dashboard/coordenador/projetos')
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlePost)}>
                <InputText label={'E-mail'} name={'email'} register={register} errors={errors} />
                <InputText type="password" label={'senha'} name={'password'} register={register} errors={errors} />
                <button type="submit" className="btn btn-primary mt-3 w-full">Entrar</button>
                <button type="button" onClick={() => router.push("/auth/criar-conta")} className="btn btn-neutral my-3 w-full">Criar conta</button>
                <Link href="/auth/recuperar-senha" className='text-primary hover:underline'>
                    Recuperar senha
                </Link>
            </form>
        </div>
    )
}
