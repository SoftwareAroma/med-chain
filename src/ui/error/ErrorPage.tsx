import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <React.Fragment>
            <div className="h-screen w-screen bg-gray-50 flex items-center">
                <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    <div className="w-full lg:w-1/2 mx-8">
                        <div className="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
                        <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                            Sorry we couldn't find the page you're looking for
                        </p>

                        <Link to="/" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back to homepage</Link>
                    </div>
                    <div
                        className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12"
                    // style={{
                    //     backgroundImage: "url(https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg)",
                    // }}
                    >
                        <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" className="" alt="Page not found" />
                    </div>

                </div>
            </div>

            {/* <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Page not found
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                        <a
                            href="#"
                            className="text-sm font-semibold text-gray-900"
                        >
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main> */}
        </React.Fragment>
    );
}

export default ErrorPage;

