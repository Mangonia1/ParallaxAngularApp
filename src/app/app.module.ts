import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CuestionariosModule } from './cuestionarios/cuestionarios.module';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
>>>>>>> 27b6cc01d1b339e651fc6029dffb3b2fae16c12c

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    CuestionariosModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
