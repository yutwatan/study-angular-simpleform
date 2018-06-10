import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-better-form',
  templateUrl: './better-form.component.html',
  styleUrls: ['./better-form.component.css']
})
export class BetterFormComponent implements OnInit {
  calcForm: FormGroup;
  result = '足し算しましょう';

  constructor() { }

  ngOnInit() {
    this.calcForm = new FormGroup({
      'fieldOne': new FormControl('0', Validators.required),
      'fieldTwo': new FormControl('0', [Validators.required, Validators.maxLength(5)])
    });
  }

  get fieldOne() {
    return this.calcForm.get('fieldOne');
  }
  get fieldTwo() {
    return this.calcForm.get('fieldTwo');
  }

  addAnyway() {
    const text1: string = this.fieldOne.value;
    const text2: string = this.fieldTwo.value;
    let resultStr = '';

    if (Number.isNaN(Number(text1)) || Number.isNaN(Number(text2))) {
      resultStr = text1 + text2;
    } else {
      resultStr = `${text1} + ${text2} = ${Number(text1) + Number(text2)}`
    }
    this.result = resultStr;
  }

  clearResult() {
    this.result = '';
  }
}
