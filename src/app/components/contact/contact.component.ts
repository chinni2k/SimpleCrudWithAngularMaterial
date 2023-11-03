import { Component, OnInit, inject } from '@angular/core';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  result = inject(PersonService);
  dataSource!: EmployeeModel[];

  constructor() {}

  ngOnInit() {
   this.result.getAll().subscribe((data)=>{
    this.dataSource=data;
   })
  }
}
