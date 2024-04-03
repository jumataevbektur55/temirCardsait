import React from 'react';
import card from "../../assets/img/image 34.png"
import iphone from "../../assets/img/iPhone 14 Pro.png"
import Order from './Order';
import Works from './Works';
import Interfac from './Interfac';
import ContactUs from './ContactUs';
import Mall from './Mall';
const Hero = () => {
    return (
    <>
        <div id='hero' className="p-10">
            <div className="container">
                <div className="flex items-center justify-center flex-col gap-5 ">
                    <h1 className='text-white text-[70px]'>Smart interface</h1>
                    <div className=" flex items-center gap-20">
                    <h3 className='text-white text-2xl'>• High quality products</h3>
                    <h3 className='text-white text-2xl'>• Convenient to use</h3>
                    </div>
                    <div className="">
                        <img src={card} alt="img" className=' mb-[-45px]'/>
                        <img src={iphone} alt="img" className=' mb-[65px]' />
                    </div>
                </div>
            </div>
            <Order/>
            <Works/>
            <Interfac/>
            <ContactUs/>
            <Mall/>
        </div></>
    );
};

export default Hero;