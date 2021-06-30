import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/*Components*/
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MiDirectivaDirective } from './directives/mi-directiva.directive';
import { PaisesComponent } from './components/paises/paises.component';
import { MydashComponent } from './components/mydash/mydash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatePipe } from './pipes/paginate.pipe';
import { UpercasePipe } from './pipes/upercase.pipe';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

@NgModule({
  /*Componentes y pipes*/
  declarations: [
    AppComponent,
    UserComponent,
    MiDirectivaDirective,
    PaisesComponent,
    MydashComponent,
    NavComponent,
    PaginatePipe,
    UpercasePipe,
    EmpleadosComponent,
    EmpleadoComponent,
 
  ],
  /*Módulos*/
  imports: [
    BrowserModule,FormsModule,MatPaginatorModule, BrowserAnimationsModule,HttpClientModule,ReactiveFormsModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule
  ],
  /*Servicios*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
