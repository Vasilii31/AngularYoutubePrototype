import { Component,input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-card',
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  task = input<Task>();
  @Output() done = new EventEmitter<Task>();

  markAsDone() {
    const currentTask = this.task();
    if (currentTask) {
      this.done.emit(currentTask);
    }
  }

}
