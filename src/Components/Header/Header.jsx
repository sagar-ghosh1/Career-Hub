import React, { useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3BottomRightIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [seen, setSeen] = useState(false)

    return (
        <div className='Header py-6 lg:px-0 px-3 relative'>
            <div className="Main-container relative">
                <div className="logo">
                    <h1>ApplyJob Club</h1>
                </div>
                <div className={seen ? "sidebar active" : " sidebar"}>
                    <nav>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/statistics">Statistics</NavLink>
                            <NavLink to="/applying-job">Applied Jobs</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                        </ul>
                    </nav>
                    <div className="buttons">
                        <Link to=""><button className='btn-apply'>Star Applying</button></Link>
                    </div>
                </div>
                <div className='' onClick={() => setSeen(!seen)}>
                    {
                        seen === true ? <XMarkIcon className="h-6 w-6 text-blue-500 lg:hidden" /> :
                            <Bars3BottomRightIcon className="h-6 w-6 text-blue-500 lg:hidden" />
                    }
                </div>

            </div>
        </div>
    );
};

export default Header;