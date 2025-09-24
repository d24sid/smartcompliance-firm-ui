import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { provideServerRouting } from '@angular/ssr';
import { AppComponent } from './app/app.component';

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideServerRouting(
         []
      ),
    ],
  }, context);
}