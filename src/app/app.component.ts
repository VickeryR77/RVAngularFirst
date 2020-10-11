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
    {taskName: "Walk the Dog", completed: false, editmode: false},
    {taskName: "Walk the Cat", completed: true, editmode: false},
    {taskName: "Walk the Bird", completed: false, editmode: false},
    {taskName: "Have lunch", completed: false, editmode: false},
    {taskName: "Have dinner", completed: true, editmode: false},
    {taskName: "Be good at design", completed: true, editmode: false},
    {taskName: "Prefer front-end", completed: true, editmode: false},
    {taskName: "Learning Angular", completed: false, editmode: false},
    {taskName: "Jam Session", completed: false, editmode: false},
    {taskName: "Another Jam Session", completed: true, editmode: false}
  ];

  tasks: ToDo[] = [
    {taskName: "Walk the Dog", completed: false, editmode: false},
    {taskName: "Walk the Cat", completed: true, editmode: false},
    {taskName: "Walk the Bird", completed: false, editmode: false},
    {taskName: "Have lunch", completed: false, editmode: false},
    {taskName: "Have dinner", completed: true, editmode: false},
    {taskName: "Be good at design", completed: true, editmode: false},
    {taskName: "Prefer front-end", completed: true, editmode: false},
    {taskName: "Learning Angular", completed: false, editmode: false},
    {taskName: "Jam Session", completed: false, editmode: false},
    {taskName: "Another Jam Session", completed: true, editmode: false}
  ];
  
  addFilter = function(){

    this.tasks.length = [];

    for(let t = 0; t<this.coreTasks.length; t++){
      if(this.coreTasks[t].taskName.includes(`${this.filter}`)){
        this.tasks.push({taskName:`${this.coreTasks[t].taskName}`,completed:this.coreTasks[t].completed,editmode:false});
      };
    };
  }

  changeStatus = function(task: ToDo){
    task.completed=false;
  }

  toggleEdit = function(task: ToDo){
    if(task.editmode==true){
    task.editmode=false;
    }
    else{
    task.editmode=true;
    }
  }

  addTask = function(){
     this.coreTasks.push({taskName:`${this.question}`,completed:true, editmode:false});
     this.tasks.push({taskName:`${this.question}`,completed:true, editmode:false});
  }

  removeTask = function(task: ToDo){
    this.coreTasks.splice(this.coreTasks.indexOf(task),1);
    this.tasks.splice(this.tasks.indexOf(task),1);  
  }
}



interface ToDo{
taskName: string,
completed: boolean,
editmode: boolean
};


