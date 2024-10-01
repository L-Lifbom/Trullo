import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLID, GraphQLNonNull } from "graphql";
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
        password: { type: GraphQLString }
    })
});
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        tasks: {
            type: new GraphQLList(TaskType),
            resolve() {
                return Task.find();
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve() {
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
            resolve(args) {
                const task = new Task({
                    title: args.title,
                    description: args.description,
                    assignedTo: args.assignedTo,
                    createdAt: new Date(),
                });
                return task.save();
            }
        },
        updateTask: {
            type: TaskType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                assignedTo: { type: GraphQLString },
                status: { type: GraphQLString },
            },
            resolve(args) {
                return Task.findByIdAndUpdate(args.id, {
                    $set: {
                        title: args.title,
                        description: args.description,
                        assignedTo: args.assignedTo,
                        status: args.status,
                    },
                }, { new: true });
            }
        },
        deleteTask: {
            type: TaskType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(args) {
                return Task.findByIdAndDelete(args.id);
            }
        },
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(args) {
                const user = new User({
                    name: args.name,
                    email: args.email,
                    password: args.password,
                });
                return user.save();
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(args) {
                return User.findByIdAndUpdate(args.id, {
                    $set: {
                        name: args.name,
                        email: args.email,
                        password: args.password,
                    },
                }, { new: true });
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(args) {
                return User.findByIdAndDelete(args.id);
            }
        },
    }
});
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
