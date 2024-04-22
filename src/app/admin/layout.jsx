import { NavLink } from '../../components/nav'
import React from 'react'

export const dynamic = "force-dynamic"

function Adminlayout({ children }) {
    return (
        <>
            <nav>
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/products">Products</NavLink>
                <NavLink href="/admin/users">Customers</NavLink>
                <NavLink href="/admin/orders">Sales</NavLink>
            </nav>
            <div className='container my-6'>{children}  </div>
        </>
    )
}

export default Adminlayout

