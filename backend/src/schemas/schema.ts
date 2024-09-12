import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
} from "graphql";

const graphqlSchema = new GraphQLSchema({
  query: RootQuery,
});

export default graphqlSchema;