import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/Models/post';


@Component({
  selector: 'app-genric',
  templateUrl: './genric.component.html',
  styleUrls: ['./genric.component.css']
})
export class GenricComponent implements OnInit {
  customers: posts[] = [];

  constructor() { }

  ngOnInit() {}


 






}
