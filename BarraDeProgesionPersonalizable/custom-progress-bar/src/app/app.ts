import { Component, signal } from '@angular/core';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar';

@Component({
  imports: [CustomProgressBarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly progreso = signal(40);

  sumar(n: number) {
    this.progreso.update(v => Math.min(100, Math.max(0, v + n)));
  }
}
