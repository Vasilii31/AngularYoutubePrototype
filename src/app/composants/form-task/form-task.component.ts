import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/Task';
import { TaskCardComponent } from '../../cards/task-card/task-card.component';

@Component({
  selector: 'app-form-task',
  imports: [FormsModule, TaskCardComponent],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.scss'
})
export class FormTaskComponent {
  //taskCreate = input<Task>();

  taskCreate: Task = {
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(), 
    criticity: 1, 
    comment: "",
    done: false
  }

  TodoList: Task[] = [];

  AddTaskToList(): void{
    this.TodoList.push({ ...this.taskCreate });
    this.taskCreate = {                          // Réinitialiser le formulaire
      name: "",
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
      criticity: 1,
      comment: "",
      done: false
    };
  }

  onTaskDone(task: Task) {
    task.done = true;
  }
}
