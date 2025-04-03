import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-todolist',
  imports: [CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  job=""

  jobs=[
    "Ăn",
    "Ngủ",
    "Code"
  ]

  handleAddJob(){
    // console.log(this.job);
    this.jobs.push(this.job)
    this.job =""
  }
  handleDelete(i: number){
    // console.log(i);
    // this.jobs.splice(i,1)
    this.jobs = this.jobs.filter((item,index)=> index != i)
    
  }
}
