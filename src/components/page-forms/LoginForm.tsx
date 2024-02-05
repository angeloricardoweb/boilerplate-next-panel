'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InputText } from '../forms-partials/InputText';
import toast from 'react-hot-toast';
import axios from 'axios';

interface IFormInput {
    email: string
    password: string
}

export function LoginForm() {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        control,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<IFormInput>();

    async function handlePost(data: IFormInput) {
        const loadingToast = toast.loading('Realizando login...')
        await new Promise(resolve => setTimeout(resolve, 1000))
        try {
            // const response = await axios.post('/api/auth/login', data)
            // localStorage.setItem('token', response.data.results.token)
            // toast.success(response.data.message)
            router.push('/dashboard')

        } catch (error: any) {
            console.log(error);
            toast.error(error?.response?.data?.message ?? "Erro interno")
        }
        
        toast.dismiss(loadingToast)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handlePost)}>
                <InputText
                    label={'E-mail'}
                    name={'email'}
                    register={register}
                    errors={errors}
                />
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
