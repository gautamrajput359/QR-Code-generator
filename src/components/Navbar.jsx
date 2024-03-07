import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex bg-[#3a0ca3] py-2 justify-between font-serif text-white'>
        <div className="logo ml-10 cursor-pointer">QrGenerator</div>
            <ul className='list flex gap-4 mr-10'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact Us</li>
            </ul>
      </nav>
    </div>
  )
}

export default Navbar
