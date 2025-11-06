import React from 'react';
import Coverimg1 from '../Components/common/Coverimg1';

const page = () => {
    return (
        <div className='px-15'>
            <div className="w-screen relative left-1/2 -ml-[51vw] mb-20">
                <Coverimg1
                    imagePath="/images/OlightAllImage/4ProductPage/7.jpg"
                    title={
                        <>
                            Introducing <br />
                            The New Era of Olight
                        </>
                    }
                    breadcrumb="Olight is building the world’s most progressive jewellery platform – a place connecting the dots between old school craftsmanship and new ways of thinking. Through our online platform, we connect you with the most creative independent jewellers from around the globe."
                />
            </div>
            <div className='md:flex'>
                <div className='mr-5'>
                    <img className='rounded-2xl md:h-[60vh] md:w-[30vw]' src="/images/OlightAllImage/4ProductPage/15.jpg" alt="" />
                </div>
                <div className='mr-10'>
                    <img className='rounded-2xl md:h-[60vh] md:w-[30vw]' src="/images/OlightAllImage/4ProductPage/13.jpg" alt="" />
                </div>
                <div className='md:w-[60vw]'>
                    <p className='text-3xl font-semibold mb-5'>Our Story</p>
                    <p>Jewelry is a form of personal adornment that has been worn by humans for thousands of years. It is typically made from precious metals such as gold, silver, and platinum, as well as precious stones such as diamonds, rubies, emeralds, and sapphires. Jewelry can be worn for a variety of reasons, including as a form of self-expression, as a symbol of wealth or status, as a religious or cultural symbol, or as a way to commemorate a special occasion or relationship. When buying jewelry, it’s important to consider factors such as the quality of the materials used, the design and style of the piece, and the reputation of the jeweler. It’s also important to care for your jewelry properly to keep it looking its best, such as by storing it in a safe place, avoiding exposure to chemicals and moisture, and cleaning it regularly. Jewelry has been used throughout history for a variety of purposes, including as a symbol of wealth and social status, as a form of religious or cultural expression, and as a way to enhance one’s personal appearance. In many cultures, jewelry is also used as a form of protection against evil or harmful forces.</p>
                </div>
            </div>
            <div className='min-h-screen'></div>
        </div>
    );
};

export default page;