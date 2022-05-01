import ProjectItem from '../projects/project-item';
function PostsGrid(props) {
    const { posts: { data, isValidating }, } = props;
    return (
        <div className='lg:col-span-8 flex flex-col'>
            <div className='grid lm:grid-cols-2 gap-x-[25px] gap-y-[55px]'>
                {
                    !isValidating && data?.products?.map((posts) => (
                        <ProjectItem key={posts.slug} posts={posts} isValidating={isValidating} />
                    ))
                }

            </div>
            <a onClick={() => props.load()} className="boxed-btn text-[15px] leading-[30px] ml-auto my-4 cursor-pointer">
                Load More
            </a>
        </div>
    );
}

export default PostsGrid;
