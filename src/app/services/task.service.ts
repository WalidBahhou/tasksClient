import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {Task} from '../Task'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private apiURL = 'https://localhost:44383/api/Tasks'
  private apiURL = 'https://localhost:5001/api/Tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task) : Observable<Task> {
    return this.http.post<Task>(this.apiURL, task, httpOptions)
  }
}
