import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

function PostSidebar({ categories, tags, suggests }) {
    return (
        <div className='post-sidebar border-[#eee] border p-[20px_29px_66px]'>
            {/* <div className='post-searchbar'>
                <h2 className='text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]'>
                    Browse
                </h2>
                <form className='relative flex'>
                    <input
                        className='w-full border-[#ddd] border-opacity-40 border text-[14px] focus-visible:outline-0 py-[15px] pl-[20px] pr-[50px]'
                        placeholder='Search...'
                        type='text'
                        id='search'
                    />
                    <button
                        className='absolute text-[#595959] top-1/2 translate-y-[-50%] right-[30px]'
                        type='submit'
                    >
                        <FaSearch />
                    </button>
                </form>
            </div> */}
            <div className='post-sidebar-item '>
                <h2 className='text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]'>
                    Recommended products
                </h2>
                <ul className='post-list'>
                    {
                        suggests.map((item) => <li key={item.id} className='mb-[15px]' >
                            <Link href={`/posts/${item.id}`}>
                                <a className='hover:underline'>
                                    {item.name}
                                </a>
                            </Link>
                        </li>)
                    }


                </ul>
            </div>
            <div className='post-sidebar-item post-sidebar-item mt-[50px]'>
                <h2 className='text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]'>
                    Categories
                </h2>
                <ul className='post-list'>
                    {categories.map((category) => (
                        <li className='mb-[15px] last:mb-0' key={category.name}>
                            <Link href={`/category/${category.name}`}>
                                <a className='capitalize hover:underline'>
                                    {category.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='post-sidebar-item post-sidebar-item mt-[50px]'>
                <h2 className='text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]'>
                    Popular tags
                </h2>
                <ul className='flex flex-wrap post-tags'>
                    {tags.map((popularTag) => (
                        <li className=' mr-[10px] mb-[5px]' key={popularTag.name}>
                            <Link href={`/tag/${popularTag}`}>
                                <a className='hover:underline'>{popularTag.name},</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PostSidebar;
