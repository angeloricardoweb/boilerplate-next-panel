import React from 'react'
import { LabelError } from './LabelError'
import { Label } from './Label'


type InputTextProps = {

}


export function InputText({
    label,
    name,
    register,
    errors,
    required = false,
    disabled = false,
    placeholder = ' ',
    type = 'text',
}: {
    label: string
    name: string
    register: any
    errors: any
    required?: boolean
    disabled?: boolean
    placeholder?: string
    type?: string
}) {
    return (
        <label className="form-control w-full">
            <Label text={label} />
            <input type={type}
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
