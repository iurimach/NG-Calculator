import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression = '';
  isResultDisplayed = false;

  appendToExpression(value: string) {
    if (this.isResultDisplayed) {
      this.expression = value;
      this.isResultDisplayed = false;
    } else {
      this.expression += value;
    }
  }

  clearExpression() {
    this.expression = '';
    this.isResultDisplayed = false;
  }

  calculateResult() {
    try {
      this.expression = eval(this.expression);
      this.isResultDisplayed = true;
    } catch (error) {
      this.expression = 'Error';
      this.isResultDisplayed = true;
    }
  }
}
