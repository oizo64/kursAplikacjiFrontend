import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullpageadmin',
  templateUrl: './fullpageadmin.component.html',
  styleUrls: ['./fullpageadmin.component.scss']
})
export class FullpageadminComponent implements OnInit {

  constructor() { }

  categories = ['Kat1', 'Kat2', 'Kat3', 'Kat4', 'Kat5']
  title: any = "Shop";
  ngOnInit(): void {
  }

}
