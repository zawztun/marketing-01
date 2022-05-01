import Image from 'next/image';
import { useRouter } from 'next/router'
function PostBanner(props) {
    const { title, image } = props;
    let order = JSON.stringify({
        item: title
    })
    const router = useRouter();
    return (
        <div className='post-banner relative'>
            <div className='image relative w-full lg:h-[980px] h-[550px] before:absolute before:bg-black before:opacity-40 before:w-full before:h-full before:z-[1]'>
                <Image
                    src={image}
                    alt={title}
                    layout='fill'
                    objectFit='contain'
                    priority
                />
            </div>
            <div className='container'>
                <div className='content absolute top-1/2 transform -translate-y-1/2 z-[1]'>
                    <div className='inner-content relative z-[1] '>
                        <h2 className='lg:text-[70px] lm:text-[40px] text-[20px] lg:leading-[80px] text-white max-w-[770px] mb-8'>
                            {title}
                        </h2>
                        <button className="boxed-btn text-[18px] leading-[30px] my-4" onClick={() => {
                            router.push(
                                {
                                    pathname: '/contact',
                                    query: {
                                        order: order
                                    }
                                }
                            )
                        }}>
                            ORDER NOW
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostBanner;
