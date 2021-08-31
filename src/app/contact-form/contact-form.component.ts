import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  model: any = {};

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
