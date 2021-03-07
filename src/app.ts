import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql';

const app = express();

app.set('port', process.env.PORT || 3000)

const server = new ApolloServer({
    schema: schema,
    playground: true,
    introspection: true,
});

server.applyMiddleware({app});

app.listen(app.get('port'),() => {
    console.log(`http://localhost:${app.get('port')}/graphql`);
})