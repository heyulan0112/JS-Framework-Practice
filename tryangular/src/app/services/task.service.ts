import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from '../Task';
import { TasksComponent } from '../components/tasks/tasks.component';

// Set an http header for updating data
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Delete data in back-end
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  // Update data in back-end
  updateTaskReminder(task: Task):Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task, httpOptions);
  }

  // Insert Task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
