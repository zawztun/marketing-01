import ReactMarkdown from 'react-markdown';
import PostBanner from './post-banner';
import ProductSlider from '@/components/posts/product-slider';
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from 'react-share'
function PostContent(props) {
    const { post, } = props;
    // get current url

    return (
        <article>
            <PostBanner title={post.name} image={post.image[0].url} date={new Date()} />
            <ProductSlider images={post.image} />
            <ReactMarkdown className='prose mx-auto my-4 p-4 ml-auto '>
                {post.content}
            </ReactMarkdown>
            <div className='prose mx-auto flex my-4 items-center justify-end gap-2 '>
                <FacebookShareButton
                    url={'https://www.facebook.com/'}
                    quote={post.name}
                    description={post.description}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                    title={"test"}
                    url={"https://twitter.com/"}
                >
                    <TwitterIcon size={32} round />

                </TwitterShareButton>
            </div>

        </article>
    );
}

export default PostContent;
