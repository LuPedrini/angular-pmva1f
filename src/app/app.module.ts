import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { BarrasskillsComponent } from './componentes/barrasskills/barrasskills.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContactoComponent,
    ExperienciaComponent,
    BarrasskillsComponent,
    FooterComponent,
    FormacionComponent,
    HabilidadesComponent,
    HeaderComponent,
    NavbarComponent,
    ProyectosComponent,
    SobreMiComponent
    

  ],
  imports: [
    BrowserModule,
  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }