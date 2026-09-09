import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="bg-white text-white flex items-center px-30 py-8 ">
     <section className="w-full h-80 max-w-7xl mx-auto flex flex-col gap-8 bg-gray-800 px-30 py-8 rounded-b-[50px]">
        <div className="flex justify-between items-center gap-90">
            <div><img src="min.png" alt="Logo" className="h-10 w-26 " /></div>
            <div>
            <ul className="flex gap-12 text-sm ">
            <li> <NavLink to="/pricing">Pricing</NavLink></li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li> <NavLink to="/faq">FAQ</NavLink></li>
            <li> <NavLink to="/features">Features</NavLink></li>
            <li> <NavLink to="/leaderboard">Leaderboard</NavLink></li>
            </ul>
            </div>
        </div>

        <div className='border-orange-100 border-t mt-8'/>

        <div className="flex justify-between items-center gap-90 mt-8">
        <p>&copy; 2026 Otha Technologies Limited. All Right Reserved.</p>
        </div>
     </section>
    </div>
  )
}
