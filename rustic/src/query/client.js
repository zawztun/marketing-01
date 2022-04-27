import { GraphQLClient, gql } from 'graphql-request'

const endpoint = process.env.GCMS_ENDPOINT;

const graphQLClient = new GraphQLClient(endpoint)

export default graphQLClient;