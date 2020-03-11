import { Task } from './Task';

export interface Project {
    id: number;
    code: string;
    name: string;
    description?: string;
    start: Date;
    end?: Date;
    priority: 'low' | 'medium' | 'high' | number;
    done: boolean;
    tasks?: Array<Task>;
}
