import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorDetalleComponent } from './proveedor-detalle/proveedor-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    ProveedorDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
