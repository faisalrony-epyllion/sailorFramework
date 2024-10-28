import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-component',
  standalone: true,
  imports: [],
  templateUrl: './grid-component.component.html',
  styleUrl: './grid-component.component.css'
})
export class GridComponentComponent {
  @Input() item = ''; // decorate the property with @Input()
}

