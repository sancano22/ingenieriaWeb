import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  Fotos=["1.jpg","2.jpg","3.jpg"];

  constructor() { }
  

  ngOnInit(): void {
  }

}
