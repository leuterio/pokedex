import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { PokemonFilterPipe } from './pipes/pokemon-filter.pipe'; // Importe o pipe

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideHttpClient(), 
    { provide: PokemonService }, 
    { provide: BrowserAnimationsModule },
    { provide: NoopAnimationsModule },
    { provide: PokemonFilterPipe },
    provideAnimations(),
  ],
};
