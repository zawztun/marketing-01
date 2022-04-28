import * as AiIcons from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='footer-area md:pt-[120px] pt-[60px]'>
            <div className='footer-top'>
                <div className='custom-container'>
                    <div className='lm:grid xl:grid-cols-5 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px]'>
                        <div className='max-lg:col-span-12'>
                            <div className='footer-logo'>
                                <Image
                                    src='/images/logo/mlogo(white).png'
                                    alt='Logo'
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className='fixed-lg:col-span-3 fixed-md:col-span-4 fixed-lm:col-span-6 max-sm:pt-[35px]'>
                            <div className='footer-widget-item'>
                                <h2 className='title text-slate-800 font-sans'>Contact</h2>
                                <ul className='contact-info mt-[25px]'>
                                    <li>
                                        144-11, 97th Avenue, Queens,<br /> New York, NY 11435
                                    </li>
                                    <li>
                                        <Link href='mailto:hello@Rusticstudio.co'>
                                            <a className='hover:text-black transition-all'>
                                                megapower.dev@gmail.com
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='tel:+0084-912-3548-073'>
                                            <a className='hover:text-black transition-all'>
                                                +1 (929)328-8276
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]'>
                            <div className='footer-widget-item'>
                                <h2 className='title text-slate-800 font-sans'>Categories</h2>
                                <ul className='footer-list mt-[25px]'>
                                    <li>
                                        <Link href='/contact'>Supplement</Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Beauty</Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Healthy Origins</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>Cosmetics</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='fixed-lg:col-span-3 fixed-md:col-span-2 fixed-lm:col-span-6 max-sm:pt-[30px]'>
                            <div className='footer-widget-item'>
                                <h2 className='title text-slate-800 font-sans'>Information</h2>
                                <ul className='footer-list mt-[25px]'>
                                    <li>
                                        <Link href='/about'>About</Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>Career</Link>
                                    </li>
                                    <li>
                                        <Link href='/posts'>Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]'>
                            <div className='footer-widget-item'>
                                <h2 className='title text-slate-800'>Help Center</h2>
                                <ul className='footer-list mt-[25px]'>
                                    <li>
                                        <Link href='/about'>FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>Help</Link>
                                    </li>
                                    <li>
                                        <Link href='/about'>Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='custom-container'>
                    <div className='inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9'>
                        <div className='md:grid md:grid-cols-12 flex flex-col'>
                            <div className='md:col-span-4 max-lm:order-last max-lm:pt-[10px]'>
                                <div className='copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]'>
                                    © 2022 <span className='mx-1'>MegaPower</span>
                                    Made with © by
                                    <div className='text-[#f53400] mx-1'>
                                        <AiIcons.AiFillHeart />
                                    </div>
                                    <Link href='https://themeforest.net/user/codecarnival/portfolio'>
                                        <a target='_blank'>
                                            <span> megapower</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='md:col-span-6'>
                                <ul className='footer-social-link md:mb-0 mb-[10px]'>
                                    <li>
                                        <Link href='https://twitter.com/'>
                                            <a>
                                                <FaTwitter />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://facebook.com/'>
                                            <a>
                                                <FaFacebook />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://instagram.com/'>
                                            <a>
                                                <FaInstagram />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='md:col-span-2'>
                                <ul className='footer-language flex md:justify-end justify-center'>
                                    <li className='mr-8'>
                                        <Link href='/about'>
                                            <a className='text-[#30373E] text-[14px] leading-6 uppercase transition-all hover:text-[#263a4f]'>
                                                Eng
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
