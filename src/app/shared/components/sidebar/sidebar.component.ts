import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories = ['Kat1', 'Kat2', 'Kat3', 'Kat4', 'Kat5']

  constructor() { }

  ngOnInit(): void {
  }

}
