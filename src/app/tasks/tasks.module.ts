import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { CdkDropList, CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    RouterLink,
    CdkDropList,
    CdkDrag,
    // DragDropModule
  ],
  exports: [
  ]
})
export class TasksModule { }
