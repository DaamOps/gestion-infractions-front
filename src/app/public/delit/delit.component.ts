import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delit',
  templateUrl: './delit.component.html',
  styleUrls: ['./delit.component.css']
})
export class DelitComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
