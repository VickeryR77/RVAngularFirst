import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Task List';
  question = "";

  tasks: ToDo[] = [
    {taskName: "Walk the Dog", completed: true},
    {taskName: "Walk the Cat", completed: false},
    {taskName: "Walk the Bird", completed: true},
    {taskName: "Have lunch", completed: true},
    {taskName: "Have dinner", completed: false},
    {taskName: "Be good at design", completed: false},
    {taskName: "Prefer front-end", completed: false},
    {taskName: "Learning Angular", completed: true},
    {taskName: "Jam Session", completed: true},
    {taskName: "Another Jam Session", completed: false}
  ];

  changeStatus = function(task: ToDo){
    task.completed=false;
  }

  addTask = function(){

     this.tasks.push({taskName:`${this.question}`,completed:true});
  }
}

interface ToDo{
taskName: string,
completed: boolean
};


