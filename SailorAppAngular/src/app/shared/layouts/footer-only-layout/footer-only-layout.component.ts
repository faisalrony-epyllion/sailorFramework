import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer-only-layout',
  standalone: true,
  imports: [FooterComponent,RouterOutlet],
  templateUrl: './footer-only-layout.component.html',
  styleUrl: './footer-only-layout.component.css'
})
export class FooterOnlyLayoutComponent {

}
