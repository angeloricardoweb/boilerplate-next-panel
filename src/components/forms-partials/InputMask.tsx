import React from 'react'
import { LabelError } from './LabelError'
import { Label } from './Label'
import ReactInputMask from 'react-input-mask'


export function InputMask({
    label,
    name,
    register,
    errors,
    required = false,
    disabled = false,
    placeholder = ' ',
    mask,
}: {
    label: string
    name: string
    register: any
    errors: any
    required?: boolean
    disabled?: boolean
    placeholder?: string
    mask: string
}) {
    return (
        <label className="form-control w-full">
            <Label text={label} />
            <ReactInputMask
                mask={mask}
                id={name}
                placeholder={placeholder}
                style={errors[name] && { border: '1px solid red' }}
                {...register(name)}
                className="input input-bordered"
                disabled={disabled}
                required={required}
            />
            <LabelError
                msg={errors[name]?.message as string}
                hasError={errors[name] as any}
            />
        </label>
    )
}
