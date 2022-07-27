import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfounf',
  templateUrl: './notfounf.component.html',
  styleUrls: ['./notfounf.component.css']
})
export class NotfounfComponent implements OnInit {

  constructor() { }
  title: any;
  ngOnInit(): void {
    this.title = "404 Not Found"
  }

}
