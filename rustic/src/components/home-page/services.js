import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import * as AiIcons from 'react-icons/ai';

function Services({ services }) {
    const [current, setCurrent] = useState({
        image: {
            url: '/images/hero/1.jpg'
        }
    });
    let handleClick = (svs) => {
        // [TODO] : a debounce function is coming soon
        setCurrent(svs)
    }
    let icons = ['AiOutlineHome', 'AiOutlineShoppingCart', 'AiOutlineReload']
    return (
        <div className='service-area md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]'>
            <div className='container max-w-full lg:pl-[70px] lg:pr-0'>
                <div className='lg:grid lg:grid-cols-12 flex flex-col-reverse'>
                    <div className='lg:col-span-6 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]'>
                        <div className='service-content xl:w-[490px] w-full ml-auto'>
                            <span className='sub-title text-secondary text-[18px] leading-[32px] uppercase mb-[25px] block'>
                                Services
                            </span>
                            <h2 className='title text-black lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>
                                Best solutions for <br /> your dream.
                            </h2>
                            <div className='fixed-md:grid fixed-md:grid-cols-2 grid max-md:gap-[25px]'>

                                {services?.map((service, index) => {
                                    const Icon = AiIcons[icons[index]];
                                    return (
                                        <div
                                            onMouseEnter={() => { handleClick(service) }}
                                            className='service-box cursor-pointer transition-all'
                                            key={service?.id}>
                                            <div className='service-box-inner'>
                                                <div className='service-list'>
                                                    <div className='icon'>
                                                        <Icon />
                                                    </div>
                                                    <div className='content'>
                                                        <h3 className='title'>
                                                            <Link href='/projects'>
                                                                <a className='hover:underline'>
                                                                    {
                                                                        service?.name
                                                                    }
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <p className='desc'>
                                                            {service?.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-6'>
                        <div className='service-image flex justify-end w-full lg:h-full h-[679px] relative'>
                            <Image
                                src={current?.image.url || current}
                                loader={() => current?.image.url || null}
                                alt='Service Image'
                                quality={70}
                                layout='fill'
                                objectFit='cover'
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
