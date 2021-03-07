import { IResolvers } from 'graphql-tools';
import data from '../../data.json';

const CategoryResolver: IResolvers = {
    Mutation: {
        createCategory(root: void, args: any): string {
            args.cat.id = data.categories.length + 1;
            data.categories.push(args.cat)
            return "Category Created Successfully"
        },
    }
} 

export default CategoryResolver;