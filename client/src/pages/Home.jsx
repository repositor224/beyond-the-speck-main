import React from 'react';


const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12 pt-14">
                <h1 className="text-4xl font-bold">Welcome to the Architexture</h1>
                <p className="text-xl text-gray-600">Architexture is a Smart Material Selector Intelligent System (SMSIS). Discover and select the best materials for your projects.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">Search Materials</h2>
                    <p>Access a wide range of innovative and sustainable building materials.</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">AI Recommendations</h2>
                    <p>Get personalized material suggestions based on your project needs.</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">Learn and Explore</h2>
                    <p>Enhance your knowledge with our learning resources and community support.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
