import Head from "next/head";
import { Fragment } from "react";
import HeaderOne from "../../components/header/header-1";
import PostContent from "../../components/posts/post-detail/post-content";
import DisqusForm from "../../components/posts/disqus-form";
import Link from "next/link";
import { useProductNames, useProductDetail } from "@/query/products";
function PostDetailPage(props) {
  const { prevPost, nextPost } = props;
  let { name, description, } = props.product;
  return (
    <Fragment>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <HeaderOne />
      <PostContent
        post={props.product}
        categories={props.categories}
        tags={props.tags}
      />
      {/*  <DisqusForm />
      <div className="post-pagination pt-[60px]">
        <div className="image-layer relative">
          <div className="grid grid-cols-2 relative text-[18px] leading-6 uppercase font-semibold tracking-[10px] z-[1]">
            <Link href={`/posts/${prevPost.slug}`}>
              <a
                className={`prev py-[50px] mr-[30px] flex justify-center bg-cover bg-no-repeat bg-center relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${!prevPost?.slug
                  ? "text-dark pointer-events-none opacity-40"
                  : "text-white"
                  }`}
                style={{
                  backgroundImage: `url('/images/posts/${prevPost?.slug + "/" + prevPost?.image
                    }')`,
                }}
              >
                Prev
              </a>
            </Link>
            <Link href={`/posts/${nextPost?.slug}`}>
              <a
                className={`next py-[50px] flex justify-center bg-cover bg-no-repeat bg-center text-right relative z-[1] before:z-[-1] before:bg-black before:opacity-60 before:absolute before:w-full before:h-full before:top-0 before:left-0 ${!nextPost?.slug
                  ? "text-dark pointer-events-none opacity-40"
                  : "text-white"
                  }`}
                style={{
                  backgroundImage: `url('/images/posts/${nextPost?.slug + "/" + nextPost?.image
                    }')`,
                }}
              >
                Next
              </a>
            </Link>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = await useProductDetail(params.id);
  return {
    props: {
      ...data
    },
  };
}

export async function getStaticPaths() {
  const { products } = await useProductNames()
  let slugs = products.map((tex) => ({ params: { id: tex.id } }))
  return {
    paths: products.map((tex) => ({ params: { id: tex.id } })),
    fallback: false,
  };
}

export default PostDetailPage;
