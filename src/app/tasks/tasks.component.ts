import { Component } from '@angular/core';
import { TasksModule } from './tasks.module';
import { TaskService } from './task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks$: Observable<any> | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAll();
  }
}
