import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Rules = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-10 justify-center p-5 text-xl font-extralight underline'>
                <Link to={'/Rules/BRRules'}>BrowserRouter Rules</Link>
                <Link to={'/Rules/MRRules'}>MemoryRouter Rules</Link>
                <Link to={'/Rules/HRRules'}>HashRouter Rules</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Rules