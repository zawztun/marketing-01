import ReactMarkdown from 'react-markdown';
import PostBanner from './post-banner';


function PostContent(props) {
    const { post } = props;

    return (
        <article>
            <PostBanner title={post.name} image={post.image[0].url} date={new Date()} />
            <ReactMarkdown className='prose mx-auto my-4 p-4'>
                {post.content}
            </ReactMarkdown>
        </article>
    );
}

export default PostContent;
