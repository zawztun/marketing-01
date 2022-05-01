import { gql } from 'graphql-request'
import client from '@/query/client'

const GET_HEROS = gql`query HeroQuery {
            heroes {
                id
                title
                description
                images {
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
            companies {
                id
                name
                image{
                    url
                }
            }
            abouts(last: 1) {
                id
                motto
                description
                experience
                banner{
                    url
                }
            }
        }`;

const useHero = async () => {
    const data = await client.request(GET_HEROS);
    return {
        ...data
    }
}

export default useHero;