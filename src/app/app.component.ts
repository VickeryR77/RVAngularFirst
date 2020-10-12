import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  question = "";
  editfield = "";
  filter= "";
  show: boolean = true;
  

//Emulates a database by having a core library and a view list that pulls from it.

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

  swap: ToDo[] = [
    {taskName: "", completed: false, editmode: false},
  ];
  
  addFilter = function(){

    //Clear view list on refilter
    this.tasks.length = [];

    //If search is contained in the names, add it to view list.
    for(let t = 0; t<this.coreTasks.length; t++){
      if(this.coreTasks[t].taskName.toLowerCase().includes(`${this.filter.toLowerCase()}`)){
        this.tasks.push({taskName:`${this.coreTasks[t].taskName}`,completed:this.coreTasks[t].completed,editmode:false});
      };
    };
  }

  //Changes complete status to library after change is made to view.
  changeStatus = function(task: ToDo){
    task.completed=false;
    var name = task.taskName;
    for(let t of this.coreTasks){
      if(t.taskName == name){
        t.completed = false;
      };
    };
  }

  //Toggles edit mode on and off.
  toggleEdit = function(task: ToDo){
    if(task.editmode==true){
    task.editmode=false;
    }
    else{
    task.editmode=true;
    }
  }

  //Adds the task by pulling in the input field to both libraries
  addTask = function(){
     this.coreTasks.push({taskName:`${this.question}`,completed:true, editmode:false});
     this.tasks.push({taskName:`${this.question}`,completed:true, editmode:false});
  }

  //Removes task
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


