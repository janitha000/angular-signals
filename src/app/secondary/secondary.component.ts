import { Component } from '@angular/core';
import { sharedSignal } from '../signals';

@Component({
  selector: 'app-secondary',
  standalone: true,
  imports: [],
  templateUrl: './secondary.component.html',
  styleUrl: './secondary.component.css',
})
export class SecondaryComponent {
  sharedSignal = sharedSignal;
}
