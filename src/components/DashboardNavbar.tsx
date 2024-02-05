'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import Link from 'next/link'

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
]

export default function DashboardNavbar({ areaName }: { areaName: string }) {
  const [theme, setTheme] = React.useState('light')

  function saveThemeOnCookie(theme: string) {
    Cookies.set('theme', theme)
    setTheme(theme)
  }

  useEffect(() => {
    const themeCookie = Cookies.get('theme')
    if (themeCookie) {
      const htmlEl = document.querySelector('html')
      htmlEl?.setAttribute('data-theme', themeCookie)
    }

  }, [theme])

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Boilerplate Next Panel <small className='text-sm'>v1.0.0</small></a>
        <h2 className='bg-neutral p-2 rounded text-white mx-auto'>
          <strong>
            Área do {areaName}
          </strong>
        </h2>
      </div>

      <div className="flex-none gap-2">
        <h3 className='font-bold'>Angelo Ricardo</h3>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <select className="select select-sm select-bordered w-full max-w-xs"
                onChange={(e) => {
                  const theme = e.target.value
                  saveThemeOnCookie(theme)
                }}
              >
                <option disabled selected>Tema</option>
                {themes.map((theme) => (
                  <option key={theme} value={theme} >{theme}</option>
                ))}
              </select>
            </li>
            {/* <li>
              <a className="justify-between">
                Meu Perfil
              </a>
            </li> */}
            {/* <li><a>Configurações</a></li> */}
            <li><Link
              href="/auth/login"
            >Sair da conta</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
