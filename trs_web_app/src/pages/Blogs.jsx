import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>There is not Any Blogs</h1><br />

      <button className='bg-blue-400  border-2 rouded-2xl border-black p-1'>   <Link to="/">Return to Home Page </Link></button>
    </div>
  )
}

export default Blogs
