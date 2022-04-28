import { request } from 'graphql-request'

const fetcher = (query, variables) => request('https://api-ap-northeast-1.graphcms.com/v2/cl2agken52e1801z89p8j098l/master', query, variables)


export default fetcher