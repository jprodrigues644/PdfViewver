import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/configs/routes';
import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { SettingsService } from './app/config/settings.service';

bootstrapApplication(AppComponent, {
	
     providers:  [ {
		provide: APP_INITIALIZER,
		useFactory: (settingsService: SettingsService) => () => settingsService.initialize(),
		deps: [ SettingsService ],
		multi: true,
	}, provideRouter(routes), provideHttpClient() ]   
}); 