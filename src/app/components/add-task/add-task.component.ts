import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;

  //add properties for each form field
  text: string | undefined;
  day: string | undefined;
  reminder: boolean = false;
  showAddTask: boolean | undefined;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  onSubmit(): void {
    // add some verification to ensure there's a task being submitted
    if(!this.text) {
      alert('Please Add A Task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    //clear form after submitting
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
