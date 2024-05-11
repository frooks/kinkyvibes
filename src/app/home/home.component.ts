import { Component, AfterViewInit } from '@angular/core';
 @Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  a: Set<string> = new Set;

  
 constructor() {
  this.a.add('aa')
  this.a.add('aa')
  this.a.add('aa')

  console.log(this.a);
 }
 }




