import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: string = 'Jas Task';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    });
  }

  // If want to run some thing when component load then put it here
  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
    // console.log('Toggle');
  }

  hasRoute(route: string) {
    // because refer to header html file route here is '/' so if this.router.url is also '/' then add button component shows up in header component
    return this.router.url === route;
  }
}
