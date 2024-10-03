import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-950 text-white flex flex-col justify-center items-center  w-full '>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-800'> &lt;</span>

                <span className='text-green-800'>Cipher</span><span className='text-purple-800'>Lock/&gt;</span>


            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2 invert-[3]' src="public/icons/coding.png"  alt="" /> 
            <a target='_blank' href="https://www.instagram.com/shbhm.exe/"><div className='text-green-700 border border-green-800 rounded-lg '>by Shbhmexe 👈.</div></a> </div>
        </div>
    )
}

export default Footer
