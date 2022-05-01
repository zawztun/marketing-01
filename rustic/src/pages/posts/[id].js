import { useProductDetail, useProductNames } from "@/query/products";
import Head from "next/head";
import { Fragment } from "react";
import HeaderOne from "../../components/header/header-1";
import PostContent from "../../components/posts/post-detail/post-content";
function PostDetailPage(props) {
  let { name, description, categories, tags } = props.product;
  return (
    <Fragment>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <HeaderOne />
      <PostContent
        post={props.product}
        categories={categories}
        tags={tags}
      />
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
  return {
    paths: products.map((tex) => ({ params: { id: tex.id } })),
    fallback: false,
  };
}

export default PostDetailPage;
