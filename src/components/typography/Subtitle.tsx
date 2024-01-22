import React from 'react'

export function Subtitle({text}: {text: string}) {
  return (
    <h2 className='text-xl font-bold border-b'>{text}</h2>
  )
}
