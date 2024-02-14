import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sharedSignal } from './signals';
import { SecondaryComponent } from './secondary/secondary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter = signal(0);
  derivedCounter = computed(() => {
    return this.counter() * 10;
  });
  signalObject = signal({
    name: 'Janitha',
    age: '30',
  });
  renderVal = signal('test123');
  sharedSignal = sharedSignal;

  constructor() {
    effect(() => {
      const currentCount = this.counter();
      console.log('counter is changed to ' + currentCount);
    });
  }

  increment() {
    console.log('incrementing counter ...');
    this.counter.set(this.counter() + 1);
  }
  incrementShared() {
    this.sharedSignal.set(this.sharedSignal() + 1);
  }

  updateByFive() {
    console.log('updating counter ...');
    this.counter.update((counter) => counter + 5);
  }

  updateObject() {
    this.signalObject.set({
      name: 'Vindya',
      age: '32',
    });
  }
}
