import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchService = inject(SearchService);

  // Chame este método ao digitar no input
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement; // "Type assertion" para garantir que é um input
    this.searchService.updateSearchTerm(input.value); // Agora o TypeScript reconhece o .value
  }
}
