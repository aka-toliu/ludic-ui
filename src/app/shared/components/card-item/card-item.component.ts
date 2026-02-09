import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [IconComponent, ButtonComponent, NgClass],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {

  public educationLevel = input.required<string>();
  public title = input.required<string>();
  public icon = input<string>();
  public animation = input<boolean>(false);
  public suportText = input<string>();

}
