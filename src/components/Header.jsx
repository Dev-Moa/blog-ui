import React from 'react'
import { Link } from 'react-router-dom'
import { ModeToggle } from "@/components/mode-toggle"
function Header() {
    return (
        <div className='flex justify-between  '>
            <h1 className='font-bold text-xl'><Link to='/'>Blog App</Link> </h1>
            <ul className='flex gap-5 items-center '>
                <ModeToggle />
                <Link to='signup'>Sign Up</Link>
            </ul>
        </div>
    )
}

export default Header