import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [    
    provideRouter(routes), // Configura as rotas
    provideHttpClient(),   // Configura o HttpClientModule
  ],
}).catch((err) => console.error(err));
