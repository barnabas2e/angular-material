import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


const materials = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule
]

@NgModule({
  imports: [ materials ],
  exports: [ materials ]
})
export class MaterialModule { }
