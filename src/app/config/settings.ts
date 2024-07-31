import { InjectionToken } from "@angular/core";

export const APP_SETTINGS = new InjectionToken<AppSettings>("AppSettings");

export interface AppSettings
{
	readonly BaseIp: string;
}
