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
  editfield = "";
  filter= "";
  show: boolean = true;
  
  coreTasks: ToDo[] = [
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
  
  addFilter = function(){

    this.tasks.length = [];

    for(let t = 0; t<this.coreTasks.length; t++){
      if(this.coreTasks[t].taskName.includes(`${this.filter}`)){
        this.tasks.push({taskName:`${this.coreTasks[t].taskName}`,completed:this.coreTasks[t].completed});
      };
    };
  }

  changeStatus = function(task: ToDo){
    task.completed=false;
  }

  addTask = function(){
     this.coreTasks.push({taskName:`${this.question}`,completed:true});
     this.tasks.push({taskName:`${this.question}`,completed:true});
  }

  removeTask = function(task: ToDo){
    this.coreTasks.splice(this.coreTasks.indexOf(task),1);
    this.tasks.splice(this.tasks.indexOf(task),1);  
  }
}

interface ToDo{
taskName: string,
completed: boolean
};


