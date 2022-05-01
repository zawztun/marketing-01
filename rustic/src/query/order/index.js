import client from '@/query/client';
import fetcher from '../fetcher';
import { gql } from 'graphql-request';
import { useSWRConfig } from 'swr'
const test = {
  name: 'Inception',
  email: 'arkarkaungmyat@gmail.com',
  message: "lorem is cool",
  quantity: 1,
  item: 'hello world'
}
const useOrder = () => {
  const { mutate } = useSWRConfig();
  const MUTATE_ORDER = gql`mutation MyMutation($name:String!,$email:String!,$message:String!,$quantity:Int!,$item:String!) {
    createCustomerOrder(
      data: {name: $name, email:$email, message: $message, 
      item: {create: {quantity: $quantity, item: $item}}}
    )  { id }
  }`;

  const MUTATE_MESSAGE = gql`mutation MyMutation($name:String!,$email:String!,$message:String!) {
    createCustomerOrder(
      data: {name: $name, email:$email, message: $message, }
    ) { id }
  }`


  let mutateOrder = async (data) => {
    let query = () => data.item ? MUTATE_ORDER : MUTATE_MESSAGE
    console.log(query())

    const res = await mutate('/orders', () => fetcher(query(), data))
    return res
  }

  return {
    mutateOrder
  }
}

export default useOrder;