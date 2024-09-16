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

import Task from '../models/task.js';
import User from '../models/user.js';

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    assignedTo: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    finishedBy: { type: GraphQLString },
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      resolve(parent, args) {
        return Task.find();
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTask: {
      type: TaskType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        assignedTo: { type: GraphQLString },
      },
      resolve(parent, args) {
        const task = new Task({
          title: args.title,
          description: args.description,
          assignedTo: args.assignedTo,
          createdAt: new Date(),
        });
        return task.save();
      }
    },
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
        });
        return user.save();
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});