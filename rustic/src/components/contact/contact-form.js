import Cart from '@/components/cart';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineRight } from 'react-icons/ai';
import useOrder from '@/query/order';
function ContactForm() {
    const [quantity, setQuantity] = useState(1);
    const { register, handleSubmit, reset } = useForm();
    const { mutateOrder } = useOrder();
    let { query } = useRouter();

    let onSubmit = async (data) => {
        if (query.order) {
            let item = JSON.parse(query.order)

            data.item = item.item
            data.quantity = Number(quantity)
        }

        await mutateOrder(data).then(() => {
            reset();
        })
    }
    return (
        <div className='contact-area md:pt-[145px] pt-[45px] border-[#595959] border-opacity-30 border-b md:pb-160 pb-[60px]'>
            <div className='container'>
                <div className='lg:grid lg:grid-cols-5'>
                    <div className='contact-info lg:col-span-2 lg:pr-[15px]'>
                        <h2 className='text-[48px] left-[58px] md:pb-[55px] pb-[35px]'>
                            {
                                query.order ? "Order " : "Contact"
                            }
                        </h2>
                        <h3 className='text-3xl font-semibold leading-9'>
                            New York,
                            <span className='text-[#6F6969]'>
                                United States
                            </span>
                        </h3>
                        <ul className='text-[14px] leading-[27px] text-secondary pt-6'>
                            <li className='pb-[15px] max-w-[270px]'>
                                144-11, 97th Avenue, Queens, New York, NY 11435, USA
                            </li>
                            <li className='pb-[15px]'>
                                <Link href='tel:+070-3689-56-56-56'>
                                    <a>+1 (929)328-8276</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='mailto:contact@nordicstudio.co'>
                                    <a>contact@nordicstudio.co</a>
                                </Link>
                            </li>
                        </ul>
                        <div className='button-wrap pt-[95px]'>
                            <Link href='/contact'>
                                <a className='inline-flex items-center text-[14px] leading-[30px] p-[11px_32px] transition duration-[0.4s] border border-[#969696] uppercase hover:border-black hover:bg-black hover:text-white'>
                                    Map Direction
                                    <div className='ml-[5px]'>
                                        <AiOutlineRight />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='contact-form lg:col-span-3 max-md:pt-[50px]'>
                        <h2 className='text-[18px] leading-[22px] uppercase md:mb-[25px] mb-[15px]'>
                            {
                                query.order ? "Please select" : "Message Us"
                            }
                        </h2>
                        {query.order && <Cart order={JSON.parse(query.order)} quantity={quantity} setQuantity={setQuantity} />}


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className='lm:flex'>
                                    <input
                                        className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] lm:mr-[20px]'
                                        placeholder='Name'
                                        type='text'
                                        id='name'
                                        {...register('name', { required: true })}
                                    />
                                    <input
                                        className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px]'
                                        placeholder='Email'
                                        type='email'
                                        id='email'
                                        {...register('email', { required: true })}
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    className='w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] mt-[35px]'
                                    placeholder='Here goes your message'
                                    id='message'
                                    rows='6'
                                    {...register('message', { required: true })}
                                ></textarea>
                            </div>

                            <div className='mt-[55px]'>
                                <button className='boxed-btn text-[14px] leading-[30px]'>
                                    {
                                        query.order ? "Order Now" : "Sent Message"
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
