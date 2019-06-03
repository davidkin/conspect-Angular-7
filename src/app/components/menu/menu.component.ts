import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu = {
    js: 'fab fa-js',
    angular: 'fab fa-angular',
    react: 'fab fa-react',
    nodeJs: 'fab fa-node',
    programming: 'fas fa-desktop'
  };

  constructor() { }

  ngOnInit() {
  }

}
