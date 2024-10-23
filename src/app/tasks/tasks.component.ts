import { Component } from '@angular/core';
import { TasksModule } from './tasks.module';
import { TaskService } from './task.service';
import { Observable } from 'rxjs';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks$: Observable<any> | null = null;

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAll();
  }

  addTask() {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      height: '200px',
      width: '100px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result)
      if (result !== undefined) {
        const test = this.taskService.add(result, 'TO_DO');

        test.subscribe((res) => {
          console.log('Added', res)

          this.tasks$ = this.taskService.getAll();
        })
      }
    })
  }

  dropTask(event: CdkDragDrop<any[]>) {
    if (event.previousContainer !== event.container) {
      console.log(event.previousContainer.data[event.previousIndex])
      // transferArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex,
      // );

      const task = event.previousContainer.data[event.previousIndex]

      this.taskService.edit(task.id, task.name, task.status === 'TO_DO' ? 'DONE' : 'TO_DO').subscribe((res) => {
        console.log('Updated', res)

        this.tasks$ = this.taskService.getAll();
      })
    }
  }
}
