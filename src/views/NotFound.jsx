import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className='container mt-3 text-center'>
      <h1>404 Not Found</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <p>Vous pouvez retourner à la <Link to="/">liste des étudiants</Link>.</p>
    </main>
  )
}
