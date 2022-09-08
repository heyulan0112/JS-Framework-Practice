// Create a task typescript interface to ensure all tasks in this project has the same shape
export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}