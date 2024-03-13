//button.component.ts
import { Component , OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent{
@Input() text: string = ''; // Ensure text is properly typed as string
@Output() buttonClicked = new EventEmitter<void>();

  constructor() {}

  lstLocations!: Location[];

  onClick() {
    this.buttonClicked.emit(); // Emit an event when the button is clicked
  }


}

