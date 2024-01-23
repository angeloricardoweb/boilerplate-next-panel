import React from 'react'

export function Label({ text }: { text: string }) {
    return (
        <div className="label">
            <span className="label-text font-bold">{text}</span>
        </div>
    )
}
