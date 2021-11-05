import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from "@apollo/client";

const link = createHttpLink({
    uri: 'https://api.spacex.land/graphql/',
    credentials: 'include'
});

export function generateClient(name?: string) {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link,
        ssrMode: typeof window === undefined,
        name
    });
    return client
}