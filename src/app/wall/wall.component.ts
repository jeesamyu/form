import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  title ="";
  a1="";
  css ="background-color:green";
  getName = "";
  getName1= "" ;
  a2="";
  age1="";
  a3="";
  class1="";
  a4="";
  ch1="";
  a5="";
  pnumber="";
  a6="";
  emails="";
  a7="";
  add="";
 

  changeName(){
    this.title=this.getName
    this.a1=this.getName1
    this.a2=this.age1
    this.a3=this.class1
    this.a4=this.ch1
    this.a5=this.pnumber
    this.a6=this.emails
    this.a7=this.add
  }
  

  
  constructor() { }

  ngOnInit(): void {
  }

}
