import { lazy, Suspense, useState, useEffect } from "react";
import heroImg from '../assets/hero.png'

const Home = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Trigger animation when the component mounts
        setTimeout(() => setIsAnimated(true), 600)
    }, []);


    return (
        <>
            <div className="relative mx-auto px-10">
            {/* Suspense to show a fallback while the image is being lazy-loaded */}
            <div 
                className={`absolute top-36 inset-0 flex flex-col justify-start items-center text-white transition-all duration-1000 ease-in-out h-full
                    ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
            >
                <h1 className="font-epilogue text-6xl font-semibold">SWIKRITI MAJUMDER</h1>
                <p className="font-epilogue text-2xl font-light mt-2">Actor, Model & Dancer</p>
            </div>
            <Suspense fallback={<div className="bg-gray-400" style={{ width: '100%', height: '100%' }}></div>}>
                <img 
                    src={heroImg} 
                    alt="swikriti-portrait" 
                    loading="lazy"
                    width="1480" // Set the width of the image
                    height="auto"
                    className="mx-auto w-full max-w-[1480px] h-auto object-cover aspect-[4/3]"
                />
            </Suspense>
        </div>
        </>
    );
};

export default Home;