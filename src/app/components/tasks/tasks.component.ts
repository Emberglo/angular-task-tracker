import { OnInit, Component } from '@angular/core';
// import task interface/model
import { Task } from '../../Task';
//import service method
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // assign list of tasks as a property of component
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //subscribe to the observable created in task service
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    //filter out the deleted item from the UI
    this.taskService.deleteTask(task).subscribe(() => {this.tasks = this.tasks.filter(t => t.id !== task.id)});
  }

  toggleReminder(task: Task): void {
    //alter UI to reflect changed reminder status
    task.reminder = !task.reminder;
    //send change to service
    this.taskService.toggleReminder(task).subscribe();
  }
}
