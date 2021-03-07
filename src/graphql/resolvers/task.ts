import { IResolvers } from 'graphql-tools';
import data from '../../data.json';

const taskResolver: IResolvers = {
    Query: {
        hello(): string {
            return "Works!"
        },
        getTasks(): Array<Object> {
            return data.tasks;
        },
        getTask(root: void, args: any): Object {
            return data.tasks.filter(item => item.id == args.id)[0]
        }
    },
    Mutation: {
        createTask(root: void, args: any): string {
            args.task.id = data.tasks.length + 1;
            args.task.done = false;
            data.tasks.push(args.task)
            return "Task Created Successfully"
        },
        deleteTask(root: void, args: any): string {
            data.tasks = data.tasks.filter(item => item.id != args.id)
            return "Task Deleted!"
        }
    },
    Task: {
        categories(root: any): Array<Object> {
            const categories: Array<any> = []

            root.categories.map((id: any) => {
                categories.push(...data.categories.filter(item => item.id == id))
            });

            return categories;
        }
    }
} 

export default taskResolver;