import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="navbar-page bg-dark d-flex justify-content-center align-items-center">
               <Link to="/login" className='btn btn-light m-2 px-4'>login</Link>
               <Link to="/signup" className='btn btn-light m-2 px-3'>signup</Link>
            </div>
        </>
    )
}
