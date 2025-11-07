import React from 'react';
import Coverimg1 from '../Components/common/Coverimg1';
import Coverimg2 from '../Components/common/Coverimg2';
import Footer from '../Components/layout/Footer';
import AllJewellery from '../Components/sections/allJewellery/AllJewellery';
import SideImage from '../Components/sections/CollectionBanner/Components/SideImage';
import ClientSection from '../Components/sections/ClientsSection/ClientSection';

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
            <div className='md:flex mb-20'>
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
            <div>
                <div className="w-screen relative left-1/2 -ml-[51vw] mb-20">
                    <Coverimg2
                        imagePath="/images/OlightAllImage/4ProductPage/1.jpg"
                        breadcrumb={<>Olight Collection</>}
                        title={
                            <>
                                Discover Your Signature <br />
                                Sparkle with New Collection
                            </>
                        }
                        breadcrumb2={<>Exceptional Handcrafted Design to Enhance The Magnificent <br /> Glow</>}
                    />
                </div>
            </div>
            <div className='text-center mb-20'>
                <p className='font-semibold text-3xl'>The Finishing Touch</p>
                <p>Our collections represent an assemblage of diverse jewelry pieces united by a common theme.</p>
            </div>
            <div className='w-screen relative left-1/2 -ml-[51vw]'>
                <SideImage></SideImage>
            </div>
            <div className='w-screen relative left-1/2 -ml-[51vw] mb-20'>
                <AllJewellery></AllJewellery>
            </div>
            <div className='text-center mb-20'>
                <p className='font-semibold text-3xl mb-10'>Our Team</p>
                <div className='md:flex gap-6 justify-center items-center'>
                    <div className='mb-5'><img src="/images/OlightAllImage/Rectangle 34625783.png" alt="" /></div>
                    <div className='mb-5'><img src="/images/OlightAllImage/Rectangle 34625784.png" alt="" /></div>
                    <div className='mb-5'><img src="/images/OlightAllImage/Rectangle 34625785.png" alt="" /></div>
                    <div className='mb-5'><img src="/images/OlightAllImage/Rectangle 34625786.png" alt="" /></div>
                </div>
            </div>
            <div>
                <ClientSection></ClientSection>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;