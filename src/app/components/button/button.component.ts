import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // using props being passed to the component
  @Input() text: string | undefined;
  @Input() color: string | undefined;

  @Output() btnClick = new EventEmitter();


  onClick(): void {
    // using an event emitter so the button click can be reusable for different functions
    this.btnClick.emit();
  }
}
