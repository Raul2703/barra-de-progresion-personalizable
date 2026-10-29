import { Component, computed, input } from '@angular/core';

export type BsColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.html',
})
export class CustomProgressBarComponent {
  // Inputs obligatorios
  value = input<number, number>(0, { transform: (v: number) => Math.min(100, Math.max(0, v)) });
  color = input<BsColor>('primary');

  // Ampliación
  striped = input(false);
  animated = input(false);
  showLabel = input(false);
  height = input(20); // px

  barClass = computed(() =>
    [
      'progress-bar',
      `bg-${this.color()}`,
      this.striped() || this.animated() ? 'progress-bar-striped' : '',
      this.animated() ? 'progress-bar-animated' : '',
    ].join(' ')
  );
}
