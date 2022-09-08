import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

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


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // use subscribe to define a callback function then use the return value in TaskService to assgin tasks array of TasksComponent class
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

}
