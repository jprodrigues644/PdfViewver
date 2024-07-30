import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/configs/routes';

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
}); 