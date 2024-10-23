import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSource = new BehaviorSubject<string>(''); // Valor inicial vazio
  currentSearchTerm = this.searchTermSource.asObservable(); // Expor o termo como um observable

  constructor() {}

  // Método para atualizar o termo de busca
  updateSearchTerm(term: string) {
    this.searchTermSource.next(term);
  }
}