import { Component, computed, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  

  public name = input.required<string>();
  public educationLevel = input.required<string>();
  public iconPath = computed(() => `icons/${this.educationLevel()}-${this.name()}.png`);
  public size = computed(() => {
    switch (this.educationLevel()) {
        case 'EI':
          return 100;
        case 'EF1':
          return 100;
        case 'EF2':
          return 60;
        case 'EM':
          return 50;
        case 'SUP':
          return 36;
        default:
          return 32;
      }
  });

}
