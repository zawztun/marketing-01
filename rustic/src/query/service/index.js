import { gql } from 'graphql-request'
import client from '@/query/client'

const GET_SERVICES = gql`query ServiceQuery {
        services {
            id
            name
            description
            image {
                url
            }
        }
    }
`;

const useService = async () => {
    const data = await client.request(GET_SERVICES);
    return {
        data
    }
}

export default useService;