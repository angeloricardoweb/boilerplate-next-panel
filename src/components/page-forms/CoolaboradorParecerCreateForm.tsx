'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Textarea } from '../forms-partials/Textarea';
import { Label } from '../forms-partials/Label';
import { LabelError } from '../forms-partials/LabelError';

export function CoolaboradorParecerCreateForm({ onCloseModal }: { onCloseModal: any }) {
    const [financiamento, setFinanciamento] = useState<0 | 1 | 2>(2)
    const [cronograma, setCronograma] = useState<0 | 1 | 2>(2)
    const [producao, setProducao] = useState<0 | 1 | 2>(2)

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
            toast.success('Relatório gerado, enviamos um resumo para seu e-mail!')
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
                <fieldset>
                    <Label text='Financiamento' />
                    <div className='grid md:grid-cols-5 gap-3'>
                        <button
                            type="button"
                            className={` btn btn-sm ${financiamento === 1 && 'btn-neutral'}`}
                            onClick={() => setFinanciamento(1)}>
                            Aprovado
                        </button>
                        <button
                            type="button"
                            className={` btn btn-sm ${financiamento === 0 && 'btn-neutral'}`}
                            onClick={() => setFinanciamento(0)}>
                            Não
                        </button>
                    </div>
                    {
                        financiamento === 0 &&
                        <Textarea label={'Justificativa'} name={'justificativa_financiamento'} register={register} errors={errors} />
                    }
                </fieldset>
                <fieldset>
                    <Label text='Cronograma' />
                    <div className='grid md:grid-cols-5 gap-3'>
                        <button
                            type="button"
                            className={` btn btn-sm ${cronograma === 1 && 'btn-neutral'}`}
                            onClick={() => setCronograma(1)}>
                            Aprovado
                        </button>
                        <button
                            type="button"
                            className={` btn btn-sm ${cronograma === 0 && 'btn-neutral'}`}
                            onClick={() => setCronograma(0)}>
                            Não
                        </button>
                    </div>
                    {
                        cronograma === 0 &&
                        <Textarea label={'Justificativa'} name={'justificativa_cronograma'} register={register} errors={errors} />
                    }
                </fieldset>
                <fieldset>
                    <Label text='Produção científica' />
                    <div className='grid md:grid-cols-5 gap-3'>
                        <button
                            type="button"
                            className={` btn btn-sm ${producao === 1 && 'btn-neutral'}`}
                            onClick={() => setProducao(1)}>
                            Aprovado
                        </button>
                        <button
                            type="button"
                            className={` btn btn-sm ${producao === 0 && 'btn-neutral'}`}
                            onClick={() => setProducao(0)}>
                            Em desacordo
                        </button>
                    </div>
                    {
                        producao === 0 &&
                        <Textarea label={'Justificativa'} name={'justificativa_cronograma'} register={register} errors={errors} />
                    }
                    <Textarea label={'Observação'} name={'producao_cientifica_observacao'} register={register} errors={errors} />

                </fieldset>


                <div className='grid grid-cols-2 gap-3 mt-3'>
                    <button type="submit" onClick={onCloseModal} className="btn btn-neutral my-3 w-full">Enviar Parecer</button>
                    <button type="button" onClick={onCloseModal} className="btn btn-neutral my-3 w-full">Fechar</button>
                </div>
            </form>
        </div>
    )
}
