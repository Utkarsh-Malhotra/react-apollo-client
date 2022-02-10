import { ApolloClient, InMemoryCache } from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const cache = new InMemoryCache()


const persistApolloCache = async () => {
    await persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
    })   
}

persistApolloCache();

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: cache,
});



export default client;