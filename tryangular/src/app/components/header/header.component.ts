import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'tryangular';
  constructor() { }

  // If want to run some thing when component load then put it here
  ngOnInit(): void {
  }
  toggleAddTask() {
    console.log('Toggle');
  }
}
