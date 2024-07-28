import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <React.Fragment>
            <div className="hero bg-white dark:bg-gray-950 text-black min-h-screen">
                <div className="hero-content flex-col space-x-2 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">
                            Login to Continue
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-white dark:bg-gray-950 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered bg-white dark:bg-gray-700"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered bg-white dark:bg-gray-700"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt text-blue-400 link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-blue-600 hover:bg-blue-500 text-white uppercase">
                                    Login
                                </button>
                            </div>
                            <div className='flex flex-row justify-center  items-center pt-2'>
                                <span className='text-black dark:text-gray-50'>
                                    Don't have an account?
                                </span>
                                <Link
                                    to='/register'
                                    className="text-green-500 underline text-center mx-2"
                                >
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginPage;
