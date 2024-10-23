import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`http://localhost:3000/tasks`);
  }

  add(name: string, status: string) {
    return this.http.post(`http://localhost:3000/tasks/add`, { name, status });
  }

  edit(id: string, name: string, status: string) {
    return this.http.put(`http://localhost:3000/tasks/edit`, { id, name, status });
  }
}
