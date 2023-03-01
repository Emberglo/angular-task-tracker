import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';

  // function that's triggered by the event emitter from the button
  toggleAddTask(): void {
    console.log('Toggle')
  }
}
