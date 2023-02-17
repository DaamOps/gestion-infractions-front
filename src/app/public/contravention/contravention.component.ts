import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contravention',
  templateUrl: './contravention.component.html',
  styleUrls: ['./contravention.component.css']
})
export class ContraventionComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
