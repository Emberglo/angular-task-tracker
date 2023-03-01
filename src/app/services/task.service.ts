import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //setting up rxjs observable of tasks so they are monitored
  getTasks(): Observable<Task[]> {
    //http client returns an obervable so the of() isn't required when making an actual request
    const tasks = of(TASKS);
    return tasks;
  }
}
