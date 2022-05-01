import { gql } from 'graphql-request'
import client from '@/query/client'

const GET_ABOUT = gql`query HeroQuery {
     abouts(last: 1) {
                id
                motto
                description
                experience
    }
    companies {
        id
        name
        image{
            url
        }
    }
    services {
        id
        name
        description
        image {
            url
        }
    }
    testimonials {
        id
        name
        message
        position
    }
}`;

const useAbout = async () => {
    const data = await client.request(GET_ABOUT);
    return {
        ...data
    }
}

export default useAbout;