import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './icons'
import { motion } from 'framer-motion'

const CustomLink = ({href, title, className=``}) => {
    const router = useRouter();
    
    return(
        <Link href={href} className={`${className} relative group`}>
    {title}

    <span  className={`h-[1px] inline-block bg-dark 
    absolute left-0 -bottom-0.5 
    group-hover:w-full transition-[width] ease duration-100
    ${router.asPath === href ? 'w-full' : 'w-0'}
    `}
    >&nbsp;</span>
    </Link>
    )
}
const Navbar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4'/>
            <CustomLink href='About' title='About' className='mx-4'/>
            <CustomLink href='Projects' title='Projects' className='mx-4'/>
            <CustomLink href='Articles' title='Articles' className='ml-4'/>
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href='https://twitter.com/iLoveBRESS/' target={'_blank'}
        whileHover={{y:-6}}
        whileTap={{scale:0.9}}
        className='w-6 mr-3'
        ><TwitterIcon/></motion.a>
        <motion.a href='https://github.com/eseoghene94/' target={'_blank'}
        whileHover={{y:-6}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        ><GithubIcon/></motion.a>
        <motion.a href='https:// www.linkedin.com/in/eseoghene-ojiyovwi-ab4179189' target={'_blank'}
        whileHover={{y:-6}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        ><LinkedInIcon/></motion.a>
        <motion.a href='https://dribble.com' target={'_blank'}
        whileHover={{y:-6}}
        whileTap={{scale:0.9}}
        className='w-6 mx-3'
        ><DribbbleIcon/></motion.a>
        <motion.a href='https://pinterest.com' target={'_blank'}
        whileHover={{y:-6}}
        whileTap={{scale:0.9}}
        className='w-6 ml-3'
        ><PinterestIcon/></motion.a>
        </nav>
        <div className='absolute left-[50%] translate-x-[-50%]'>
        <Logo/>
        </div>
        </header>
  )
}

export default Navbar