import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema.js';
import './config/database.js';

const app = express();

const port = process.env.PORT || 5000;

app.use("/graphql", 
    graphqlHTTP({
    schema: schema,
    graphiql: true
    })
);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
