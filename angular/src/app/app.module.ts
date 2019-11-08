import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {AccordionModule} from 'primeng/accordion';
import { NodeService } from './project.services';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component'
import { MaterialModule } from './shared/material.module';
import { ResourceComponent } from './resource/resource.component';
import { ProjectComponent } from './project/project.component';
import { FormulaComponent } from './formula/formula.component';
import { PopupWindowComponent } from './header/popupwindow/popupwindow.component';
import { AngularMaterialModule } from './angular-material.module'; 
import { AuthInterceptor } from "./auth/auth-interceptor";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { ResourceService } from './services/resource.service';
import { ReactiveFormsModule } from '@angular/forms';

import { TemplateComponent } from './template/template.component';
import { Data } from './data.model';
import { Project } from './project.model';
import { ProjTableComponent } from './project/proj-table/proj-table.component';
import { ProjService } from './project/project.service'
import { TitleService } from './title.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ResourceComponent,
    ProjectComponent,
    FormulaComponent,
    PopupWindowComponent,
    ErrorComponent,
    TemplateComponent,
    ProjTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatDialogModule,
    AngularMaterialModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
  
    HttpClientModule,
    AccordionModule,
    OverlayPanelModule,
    FormsModule,


  ],
  entryComponents:[ResourceComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ResourceService, ProjService, TitleService,
    {provide: NodeService}

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
