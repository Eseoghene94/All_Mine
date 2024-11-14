import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer
        py-3 px-8 absolute'
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}>
            {name}
        </motion.div> 
    )
}

const Skills = () => {
  return (
<>
<h2 className='font-bold text-8xl mt-64 w-full text-center text-red-500'>Skills</h2>
<div className='w-full h-screen relative flex items-center justify-center bg-circularLight'>
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
    '
    whileHover={{scale:1.05}}>
        Web
    </motion.div>
    
    <Skill name='HTML' x='-25vw' y='2vw'/> 
    <Skill name='CSS' x='-5vw' y='-10vw'/> 
    <Skill name='Javascript' x='20vw' y='-2vw'/> 
    <Skill name='React.JS' x='0vw' y='12vw'/> 
    <Skill name='Next.JS' x='-20vw' y='-15vw'/> 
    <Skill name='Python' x='15vw' y='-12vw'/> 
    <Skill name='Express' x='32vw' y='-15vw'/> 
    <Skill name='Figma' x='0vw' y='-20vw'/> 
    <Skill name='Tailwind CSS' x='-25vw' y='18vw'/> 
    <Skill name='Databases' x='18vw' y='18vw'/> 
    <Skill name='Typescript' x='20vw' y='25vw'/>
    <Skill name='Nuxt.JS' x='-20vw' y='-23vw'/>
    <Skill name='Nest.JS' x='15vw' y='-25vw'/>
    <Skill name='Angular' x='-10vw' y='25vw'/> 
    <Skill name='Django' x='30vw' y='8vw'/> 

</div>
</>    
)
}

export default Skills