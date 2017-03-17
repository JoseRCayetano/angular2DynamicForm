import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  styleUrls: ['dynamic-form.component.css'],
  template:
    `<form class="dynamic-form"  [formGroup]="form"> </form>
    `
})
export class DynamicFormComponent implements OnInit {
  @Input() config: any[]= [];
  form: FormGroup;

  constructor(private fb: FormBuilder){
  }

  ngOnInit(){
    this.form = this.createGroup();
  }
  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control(Validators) ));
    return group;
  }
}
