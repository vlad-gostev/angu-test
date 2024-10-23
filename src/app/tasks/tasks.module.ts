import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TasksComponent } from './tasks.component';



@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
  ]
})
export class TasksModule { }
