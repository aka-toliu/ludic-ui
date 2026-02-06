import { Component, signal } from '@angular/core';
import { CardItemComponent } from '../../shared/components/card-item/card-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public menu = signal([
    { title: 'Disciplinas', path: '/', icon: 'book', suportText: 'Veja as disciplinas disponíveis', animation: true },
    { title: 'Boletim', path: '/', icon: 'clipboard-list', suportText: 'Acompanhe seu desempenho', animation: true },
    { title: 'Tarefas', path: '/', icon: 'check', suportText: 'Gerencie suas tarefas', animation: true },
  ]);

  public educationalLevel = signal('EF1');

  changeEducationalLevel(level: string) {
    this.educationalLevel.set(level);
  }

}
