import { Component, OnInit } from '@angular/core';
import { Messages } from '../messages';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  messages:Messages[] = [
    new Messages(0, 'Kuenik','Hope', '“type and scrambled it to make a type specimen book”'),
    new Messages(0, 'Talee Ban','Growth', '“Contrary to popular belief, Lorem Ipsum is not simply random text.”'),
    new Messages(0, 'Van Vider','Hype', '“There are many variations of passages of Lorem Ipsum available”')
  ]
  


  constructor() { }

  ngOnInit(): void {
  }

}
