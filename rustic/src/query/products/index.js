import client from '@/query/client';
import fetcher from "@/query/fetcher";
import { gql } from "graphql-request";
import useSWR from "swr";


const GET_FILTERS = gql`query Queries {
    tags {
        name
    }
    categories{
        name
    }
    suggests : products(last: 3) {
        id
        name
    }
}`
export const useProductQueries = async (id) => {
    const data = await client.request(GET_FILTERS, { id: id });
    return {
        ...data
    }
}

const GET_PRODUCT_DETAIL = gql`query DetailProduct($id : ID!) {
    product(where: {id: $id}) {
        name
        content
        description
        tags {
            id
        }
        categories {
            id
        }
        image{
            url
        }
    }
}`

export const useProductDetail = async (id) => {
    const data = await client.request(GET_PRODUCT_DETAIL, { id: id });
    return {
        ...data
    }
}


const useProducts = (limit) => {

    const { data, error, isValidating } = useSWR(
        [`query GET_PRODUCTS($limit:Int!){
            products(first: $limit) {
                id
                name
                description
                image {
                  url
                }
            }
        }`, { limit: limit }],
        fetcher
    )
    return {
        data, error, isValidating
    }
};



const GET_NAMES = gql`query MyQuery {
    products {
      id
    }
  }`;

// for SSG Paths
export const useProductNames = async () => {
    const data = await client.request(GET_NAMES);
    return {
        ...data
    }
}

export default useProducts;


