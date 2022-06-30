import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache()
})

