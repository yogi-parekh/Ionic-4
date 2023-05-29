import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
    MatDividerModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
