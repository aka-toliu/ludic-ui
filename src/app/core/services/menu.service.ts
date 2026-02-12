import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private readonly apiURL = 'assets/menu-data.json';
  private http = inject(HttpClient);

  getMenu(nivel: string): Observable<any[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map(data => data[nivel] || [])
    );
  }

}