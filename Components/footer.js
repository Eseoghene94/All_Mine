import Link from 'next/link'
import React from 'react'
import layout from './layout'

const footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg px-32'>
        <layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center '>
            Built with <span className='text-primary text-2xl px-1'>&#9825;</span> by &nbsp;<Link href='https://www.github.com/eseoghene94/' target={'_blank'} className='underline underline-offset-2'>CODEwithESE</Link>
            </div>
            <Link href='https://www.github.com/eseoghene94/' target={'_blank'} className='underline underline-offset-2'>Say Hello!</Link>
        </layout>
    </footer>
  )
}

export default footer