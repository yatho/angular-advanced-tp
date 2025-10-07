import { provideHttpClient } from "@angular/common/http";
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./routes";

export const config = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideRouter(routes)
    ]
}