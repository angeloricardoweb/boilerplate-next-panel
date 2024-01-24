'use client'
import { DialogConfirmProjectDetails } from '@/components/dialogs/DialogConfirmProjectDetails';
import { InputText } from '@/components/forms-partials/InputText';
import { Label } from '@/components/forms-partials/Label';
import { LabelError } from '@/components/forms-partials/LabelError';
import { Subtitle } from '@/components/typography/Subtitle'
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Page() {
  const params = useParams<{ id: string }>()

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isComCargaHoraria, setIsComCargaHoraria] = useState(false)
  const [typeNatureza, setTypeNatureza] = useState<"pesquisa" | "ensino" | "extensao" | "">('')
  const [periodoVigencia, setPeriodoVigencia] = useState<"1" | "2" | "">('1')
  const [financiamento, setFinanciamento] = useState(false)

  return (
    <div>
      <Subtitle text={`Visualizar projeto`} />
      <small>{params.id}</small>

      <form className='max-w-xl'>
        <fieldset>
          <InputText label={'Titulo do projeto'} name={'titulo_projeto'} register={register} errors={errors} />
        </fieldset>
        <fieldset>
          <Label text='Com carga horária' />
          <div className='grid grid-cols-3 gap-3'>
            <button type="button" className={` btn btn-sm
               ${isComCargaHoraria && 'btn-neutral'}`}
              onClick={() => setIsComCargaHoraria(true)}
            >
              Com carga horária
            </button>
            <button type="button" className={` btn btn-sm
               ${!isComCargaHoraria && 'btn-neutral'}`}

              onClick={() => setIsComCargaHoraria(false)}>
              Sem carga horária
            </button>
          </div>
          <div>
            {isComCargaHoraria &&
              <InputText type="number" label={'Carga horária (Horas)'} name={'carga_horaria'} register={register} errors={errors} />}
          </div>
        </fieldset>
        <fieldset>
          <Label text='Natureza' />
          <div className='grid grid-cols-3 gap-3'>
            <button type="button" className={` btn btn-sm
              ${typeNatureza === "pesquisa" && 'btn-neutral'}`}
              onClick={() => setTypeNatureza("pesquisa")}
            >
              Pesquisa
            </button>
            <button type="button" className={` btn btn-sm
              ${typeNatureza === "ensino" && 'btn-neutral'}`}
              onClick={() => setTypeNatureza("ensino")}>
              Ensino
            </button>
            <button type="button" className={` btn btn-sm
              ${typeNatureza === "extensao" && 'btn-neutral'}`}
              onClick={() => setTypeNatureza("extensao")}>
              Extensão
            </button>
          </div>
        </fieldset>
        <div className='grid grid-cols-2 gap-3'>

          <fieldset>
            <InputText type="date" label={'Vigência início'} name={'data_inicio_vigencia'} register={register} errors={errors} />
          </fieldset>
          <fieldset>
            <Label text='Período vigência' />
            <div className='grid grid-cols-3 gap-3'>
              <button type="button" className={` btn btn-sm
              ${periodoVigencia === "1" && 'btn-neutral'}`}
                onClick={() => setPeriodoVigencia("1")}
              >
                1 ano
              </button>
              <button type="button" className={` btn btn-sm
              ${periodoVigencia === "2" && 'btn-neutral'}`}
                onClick={() => setPeriodoVigencia("2")}>
                2 anos
              </button>
            </div>
          </fieldset>
        </div>
        <fieldset>
          <Label text='Financiamento' />
          <div className='grid grid-cols-3 gap-3'>
            <button type="button" className={` btn btn-sm
              ${financiamento && 'btn-neutral'}`}
              onClick={() => setFinanciamento(true)}
            >
              Com financiamento
            </button>
            <button type="button" className={` btn btn-sm
              ${!financiamento && 'btn-neutral'}`}
              onClick={() => setFinanciamento(false)}>
              Sem financiamento
            </button>
          </div>
          <div>
            {financiamento &&
              <InputText type="text" label={'Descrição do financiamento'} name={'financiamento'} register={register} errors={errors} />}
            {financiamento &&
              <InputText type="number" label={'Valor do financiamento (R$)'} name={'valor_financiamento'} register={register} errors={errors} />}
            {financiamento &&
              <div className='form-control w-full max-w-xs'>
                <Label text='Comprovante de financiamento' />
                <input type="file" {
                  ...register("comprovante_financiamento", {
                    required: "Comprovante de financiamento é obrigatório",
                  })
                } className="file-input file-input-bordered w-full max-w-xs" />
                <LabelError
                  msg={errors["comprovante_financiamento"]?.message as string}
                  hasError={errors["comprovante_financiamento"] as any}
                />
              </div>
            }
            {financiamento &&
              <label className="form-control w-full max-w-xs">
                <Label text='Área' />
                <select className="select select-bordered">
                  <option disabled selected>Pick one</option>
                  <option>Científica</option>
                  <option>Cultural</option>
                  <option>Desportiva</option>
                  <option>Artística</option>
                </select>
                <LabelError
                  msg={errors["area"]?.message as string}
                  hasError={errors["area"] as any}
                />
              </label>}
            {
              !financiamento && (
                <fieldset className='mt-3'>
                  <p>
                    Declaro que o projeto não possui financiamento externo. Assim como não possui vínculo com empresas privadas ou públicas.
                  </p>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox" />
                      <strong>Confirmo que lí e estou de acordo</strong>
                    </label>
                  </div>
                </fieldset>
              )
            }
            <div className='form-control w-full max-w-xs'>
              <Label text='Projeto completo' />
              <input type="file" {
                ...register("projeto_completo", {
                  required: "Comprovante de financiamento é obrigatório",
                })
              } className="file-input file-input-bordered w-full max-w-xs" />
              <LabelError
                msg={errors["projeto_completo"]?.message as string}
                hasError={errors["projeto_completo"] as any}
              />
            </div>
          </div>
        </fieldset>
        <div className='grid grid-cols-2 gap-3 mt-5'>
          <DialogConfirmProjectDetails />
        </div>
      </form >
    </div >
  )
}
