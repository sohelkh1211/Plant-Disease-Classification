import React from 'react'

const Navbar = () => {
  return (
    <nav className='relative flex w-full'>
      <div className='relaive flex lg:py-3 xs:py-2 lg:flex-row xs:flex-col top-0 w-full border border-green-400 bg-green-300'>
        <h1 className='xs:mx-auto bg-Leaf2 bg-clip-text text-transparent font-bold bg-cover bg1'><span className='lg:pl-0 xs:pl-2 lg:text-[34px] xs:text-[27px]'>Plant Disease</span> <br className='lg:hidden' /><span className='lg:text-[34px] xs:text-[30px]'>Classification</span></h1>
      </div>
    </nav>
  )
}

export default Navbar
