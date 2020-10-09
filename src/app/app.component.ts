import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'The Task Master';
  question = "";
  show: boolean = true;

  tasks: ToDo[] = [
    {taskName: "Walk the Dog", completed: false},
    {taskName: "Walk the Cat", completed: true},
    {taskName: "Walk the Bird", completed: false},
    {taskName: "Have lunch", completed: false},
    {taskName: "Have dinner", completed: true},
    {taskName: "Be good at design", completed: true},
    {taskName: "Prefer front-end", completed: true},
    {taskName: "Learning Angular", completed: false},
    {taskName: "Jam Session", completed: false},
    {taskName: "Another Jam Session", completed: true}
  ];
  

  changeStatus = function(task: ToDo){
    task.completed=false;
  }

  addTask = function(){
     this.tasks.push({taskName:`${this.question}`,completed:true});
  }

  removeTask = function(task: ToDo){
    this.tasks.splice(this.tasks.indexOf(task),1);
  }
}

interface ToDo{
taskName: string,
completed: boolean
};


