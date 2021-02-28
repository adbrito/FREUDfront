import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReunionRoutingModule } from './reunion-routing.module';
import { RoomComponent } from './room/room.component';


@NgModule({
  declarations: [RoomComponent],
  imports: [
    CommonModule,
    ReunionRoutingModule
  ]
})
export class ReunionModule { }
