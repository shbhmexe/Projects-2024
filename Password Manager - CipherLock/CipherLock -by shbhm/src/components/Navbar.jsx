import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-gray-950 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-700'> &lt;</span>

                    <span className='text-green-700'>Cipher</span><span className='text-purple-700'>Lock/&gt;</span>


                </div>
                {/* <ul>
                    <li className='flex gap-4 '>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>
                    </li>
                </ul> */}
                <a href="https://github.com/shbhmexe" target="_blank" rel="noopener noreferrer">
                    <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1'>
                        <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
                        <span className='font-bold px-2 text-white'>GitHub</span>
                    </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
