import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <React.Fragment>
            <div className="navbar bg-white dark:bg-gray-950">
                <div className="flex-1">
                    <Link
                        to='/'
                        className="btn btn-ghost text-blue-700 dark:text-black uppercase text-xl"
                    >
                        Med-Chain
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input bg-gray-100 input-bordered w-24 md:w-auto"
                        />
                    </div>
                    <div className="form-control">
                        <ul className="menu text-black hidden lg:menu-horizontal">
                            <li className='hover:bg-blue-500 hover:text-white cursor-pointer duration-150 transition-all'>
                                <Link to='/dashbaord'>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end bg-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content white bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to='/profile' className="justify-between">
                                    Profile
                                    <span className="badge rounded-md border-none text-gray-50 bg-green-500">New</span>
                                </Link>
                            </li>
                            <li><Link to='/login'>Login</Link></li>
                            {/* <li><Link to='/register'>Register</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainHeader;
