import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu: string[] = ['fab fa-js', 'fab fa-angular', 'fab fa-react', 'fab fa-node', 'fas fa-desktop'];

  constructor() { }

  ngOnInit() {
  }

}
