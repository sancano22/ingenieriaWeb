import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SessionPageRoutingModule } from './session-routing.module';
import { SessionPage } from './session.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SessionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SessionPage]
})
export class SessionPageModule {}
