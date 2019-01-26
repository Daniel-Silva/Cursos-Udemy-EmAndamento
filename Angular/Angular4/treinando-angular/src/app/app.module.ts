import { InputPropertyModule } from './input-property/input-property.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReusandoComponentesComponent } from './reusando-componentes/reusando-componentes.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusandoComponentesComponent,
    OutputPropertyComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    InputPropertyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
