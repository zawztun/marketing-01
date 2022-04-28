import Head from "next/head";
import React from 'react'
import { Fragment } from "react";
import Breadcrumb from "../../components/breadcrumb";
import HeaderTwo from "../../components/header/header-2";
import useProducts, { useProductQueries } from "@/query/products";
import AllItems from "@/components/posts/all-items";
function allItemsPage({ tags, categories }) {
  const [limit, setLimit] = React.useState(6)
  const data = useProducts(limit);
  let loadMore = () => {
    setLimit(limit + 6)
  }
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="Rustic posts!" />
      </Head>
      <HeaderTwo />
      <Breadcrumb activePage={"Posts"} pageTitle={"Our Posts"} />
      <AllItems
        load={loadMore}
        posts={data}
        categories={categories}
        tags={tags}
      />

    </Fragment>
  );
}

export async function getStaticProps() {
  const filter = await useProductQueries()
  return {
    props: {
      ...filter
    },
  };
}

export default allItemsPage;
