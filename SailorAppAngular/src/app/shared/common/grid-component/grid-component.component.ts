import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-component.component.html',
  styleUrl: './grid-component.component.css'
})
export class GridComponentComponent {
  @Input() items: any = [];
  @Input() header: string = '';
}

