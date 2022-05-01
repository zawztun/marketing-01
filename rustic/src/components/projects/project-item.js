import Link from 'next/link';
import Image from 'next/image';

function ProjectItem({ posts, isValidating }) {
    const { id, name, description, image } = posts;
    let category = ['Hello World']
    return (
        <div className={`project-item gallery-item group ${category}`}>
            <Link href={`/posts/${id}`}>
                <a>
                    <div className='project-img relative before:absolute before:bg-black before:opacity-20 before:w-full before:h-full before:z-[1]'>
                        <Image
                            src={image[0].url}
                            alt={name}
                            width={472}
                            height={665}
                            layout='responsive'
                            objectFit='cover'
                            quality={60}
                            priority
                        />
                    </div>
                    <div className='project-content'>
                        <span className='project-category '>{description}</span>
                        <h2 className='project-title'>{name}</h2>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default ProjectItem;
