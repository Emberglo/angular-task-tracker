import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean | undefined;
  subscription: Subscription | undefined;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  // function that's triggered by the event emitter from the button
  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }
}
