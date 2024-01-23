import React from 'react'
import { LabelError } from './LabelError'
import { Label } from './Label'

export function InputText({
    label,
    name,
    register,
    errors,
    required = false,
    disabled = false,
    placeholder = ' ',
}: {
    label: string
    name: string
    register: any
    errors: any
    required?: boolean
    disabled?: boolean
    placeholder?: string
}) {
    return (
        <label className="form-control w-full">
            <Label text={label} />
            <textarea 
                id={name}
                placeholder={placeholder}
                style={errors[name] && { border: '1px solid red' }}
                {...register(name)}
                className="textarea textarea-bordered h-24"
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
