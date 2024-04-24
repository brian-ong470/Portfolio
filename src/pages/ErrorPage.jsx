import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <Link to='/' classname="btn primary">Click to understand my journey</Link>
        <h2>WELCOME TO BRIAN PORTFOLIO</h2>
      </div>
    </section>
  )
}

export default ErrorPage
