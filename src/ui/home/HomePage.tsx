import React from 'react';
import MarkettingComponent from './MarkettingComponent';
import TeamComponent from './TeamComponent';
import TestimonySection from './TestimonySection';
import CallToAction from './CallToAction';
import PricingComponent from './PricingComponent';

const HomePage = () => {
    return (
        <React.Fragment>
            <CallToAction />

            <div
                className="hero min-h-screen h-full"
                style={{
                    backgroundImage: "url(https://cdn.pixabay.com/photo/2018/03/31/05/06/blockchain-3277335_1280.png)",
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-neutral-content text-center bg-gray-300 px-12 py-12">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-gray-900">Hello there</h1>
                        <p className="mb-5 text-black">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary bg-blue-600 px-8 py-2 text-white">Get Started</button>
                    </div>
                </div>
            </div>

            <MarkettingComponent />
            <PricingComponent />
            <TeamComponent />
            <TestimonySection />

            {/* Count down component */}
            <div className="flex flex-row justify-center items-center py-12">
            </div>

        </React.Fragment>
    );
}

export default HomePage
