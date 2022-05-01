import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import { OffcanvasData } from './offcanvas-data';
import WhiteLogo from './white-logo';

function HeaderOne() {
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? header.classList.add('is-sticky')
            : header.classList.remove('is-sticky');
    };

    const router = useRouter();
    const headerCss = `flex lg:justify-between justify-end items-center`;
    return (
        <Fragment>
            <header className='absolute z-10 w-full'>
                <div className='sticky-holder header-section sticky-style-1'>
                    <div className='container custom-container'>
                        <div className='grid grid-cols-12 items-center leading-[120px]'>
                            <div className='col-span-6 lg:col-span-2'>
                                <WhiteLogo />
                            </div>
                            <div className='hidden lg:col-span-7 lg:block'>
                                <nav>
                                    <ul className='text-white main-menu'>
                                        <li
                                            className={
                                                router.pathname == '/'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href='/'>
                                                <a>
                                                    <span>Home</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname == '/posts'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href='/posts'>
                                                <a>
                                                    <span>Products</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                router.pathname == '/about'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href='/about'>
                                                <a>
                                                    <span>About</span>
                                                </a>
                                            </Link>
                                        </li>


                                        <li
                                            className={
                                                router.pathname == '/contact'
                                                    ? 'active'
                                                    : ''
                                            }
                                        >
                                            <Link href='/contact'>
                                                <a>
                                                    <span>Contact</span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='col-span-6 lg:col-span-3'>
                                <div className={`outer-box ${headerCss}`}>
                                    {/* incase localize */}
                                    <ul className='text-white language-list'>
                                        {/* <li>
                                            <Link href='/'>END</Link>
                                        </li>
                                        <li>
                                            <Link href='/'>FRA</Link>
                                        </li> */}
                                    </ul>
                                    <div className='offcanvas-area '>
                                        <div className='block offcanvas md:hidden'>
                                            <button
                                                className='menu-bars flex text-white text-[24px]'
                                                aria-label='Right Align'
                                            >
                                                <FaBars
                                                    onClick={showOffcanvas}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={
                    offcanvas
                        ? 'offcanvas-menu-wrap active'
                        : 'offcanvas-menu-wrap'
                }
            >
                <nav className='offcanvas-menu'>
                    <ul
                        className='offcanvas-menu-items'
                        onClick={showOffcanvas}
                    >
                        <li className='navbar-toggle flex justify-between items-center pb-[15px]'>
                            <div className='logo'>
                                <Link href='/'>
                                    <a>
                                        <Image
                                            src='/images/logo/logo-2.png'
                                            alt='Logo'
                                            width={70}
                                            height={70}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <button
                                className='menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all'
                                aria-label='Right Align'
                            >
                                <AiOutlineClose />
                            </button>
                        </li>
                        {OffcanvasData.map((item, index) => {
                            return (
                                <li key={item.path} className={item.cName}>
                                    <Link href={item.path}>
                                        <a>{item.title}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
}

export default HeaderOne;
