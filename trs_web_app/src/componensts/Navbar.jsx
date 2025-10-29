import React, { useState } from 'react'
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [show, setShow] = useState(true)
    const [isVisble, setIsVisible] = useState(false);

    const handleClick = () => {
        setShow(!show)
        setIsVisible(!isVisble)
    }
    return (
        <>
            {/* Desktop */}
            <div className='hidden sm:flex flex-row justify-around mt-7 text-xl items-center w-full px-10'>
                <div className='w-1/2'><img className='h-15 w-20' src="/trs_logo.jpg" alt="" /> </div>
                <div>
                    <ul className='flex justify-around gap-10 w-1/2'>

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/projects">Projects</Link></li>

                    </ul>
                </div>
            </div>

            <div className='flex flex-row justify-between items-center p-7 sm:hidden bg-slate-400'>
                <div className='items-center'><img className='h-10 w-15' src="/trs_logo.jpg" alt="Brand logo" /></div>
                <div className='text-xl'> {show ? <span onClick={handleClick}><CiMenuBurger /></span> : <span onClick={handleClick}><RxCross1 /></span>}</div>
            </div>
            {/* Mobile */}
            {isVisble ? <div className='relative'>
                <ul className={isVisble ? "flex flex-col bg-slate-400 p-10 gap-10 absolute h-screen translate-x-0 opacity-100" : "transform transition-all duration-700 ease-in-out -translate-x-full opacity-0"}>
                    <li onClick={handleClick}><Link to="/">Home</Link></li>
                    <li onClick={handleClick}><Link to="/about">About</Link></li>
                    <li onClick={handleClick}><Link to="/contact">Contact</Link></li>
                    <li onClick={handleClick}><Link to="/blogs">Blogs</Link></li>
                    <li onClick={handleClick}><Link to="/projects">Projects</Link></li>
                </ul>
            </div> : ""}



        </>
    )
}

export default Navbar
