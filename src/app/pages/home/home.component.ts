import { Component, inject, OnInit, signal } from '@angular/core';
import { CardItemComponent } from '../../shared/components/card-item/card-item.component';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private menuService = inject(MenuService);


  public menu = signal([
    { title: 'Disciplinas', path: '/', icon: 'discipline', suportText: 'Veja as disciplinas disponíveis', animation: true },
    { title: 'Boletim', path: '/', icon: 'notes', suportText: 'Acompanhe seu desempenho', animation: true },
    { title: 'Tarefas', path: '/', icon: 'exercise', suportText: 'Gerencie suas tarefas', animation: true },
  ]);

  public educationalLevel = signal('EF2');

  changeEducationalLevel(level: string) {
    this.educationalLevel.set(level);
    this.getMenu(level);
  }

  ngOnInit(): void {
    this.getMenu(this.educationalLevel());
  }

  getMenu(level: string): void {
      this.menuService.getMenu(level).subscribe(menu => {
      this.menu.set(menu);
      console.log(menu);
    });
  }

}
