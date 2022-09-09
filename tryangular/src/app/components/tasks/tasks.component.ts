import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { takeLast } from 'rxjs';

// import {TASKS} from '../../mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // task data is in mock-task.ts file with Task interface so just import it and assign it to task var
  // define tasks as an empty array to begin with then import the task sevice to init the tasks content in mock-task file
  tasks: Task[] = [];

  // If want to subscribe service then should set private ... in constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // use subscribe to define a callback function then use the return value in TaskService to assgin tasks array of TasksComponent class
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // Delete task in front-end and it should goes to back-end delete the data and then use a callback function goes back to delete it in front-end
  deleteTask(task: Task) {
    // to delete this task from server so need to call server(like back end) and then filter it out from the UI(like front end)
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }

  // Update task data, update task and then subscribe backend func to update data in back end
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  // Insert task data in back-end using subscribe function and use call back function to insert it in UI
  addTask(task: Task){
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    });
  }
}
