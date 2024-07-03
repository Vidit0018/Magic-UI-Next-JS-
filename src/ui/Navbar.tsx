import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center w-full bg-opacity-0 sm:hidden p-6'>
            <div className="text-3xl">

                <span className="uppercase text-[#7F56D9]">n</span>
                <span className="uppercase">av</span>
               
            </div>

            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20H29M11 14H29M11 26H29" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </nav>
    )
}

export default Navbar
