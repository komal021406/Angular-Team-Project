import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule,
        MatIconModule,
        MatCheckboxModule,
        MatPaginatorModule, 
        MatTableModule,
        MatMenuModule
        } 
                    from '@angular/material';

@NgModule({
  declarations: [],

  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    //MatSidenavContent,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule, 
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule
      ],
})
export class MaterialModule { }
