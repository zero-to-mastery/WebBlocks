import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'simple-calculator',
  styleUrl: 'simple-calculator.css',
  shadow: true,
})
export class SimpleCalculator {
  @State() value: number;
  @State() value2: number;
  @State() result: number;
  @State() selectValue: string = 'addition';
  @State() zeroDivisionError: boolean = false;

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.value);
    console.log(this.value2);
    console.log(this.selectValue);
    this.zeroDivisionError = false;

    if (this.selectValue === 'addition') {
      this.result = +this.value + +this.value2;
    } else if (this.selectValue === 'subtraction') {
      this.result = +this.value - +this.value2;
    } else if (this.selectValue === 'multiplication') {
      this.result = +this.value * +this.value2;
    } else if (this.selectValue === 'division') {
      if (+this.value2 === 0) {
        this.zeroDivisionError = true;
      }
      this.result = +this.value / +this.value2;
    }
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  handleSecondChange(event) {
    this.value2 = event.target.value;
  }

  handleSelect(event) {
    this.selectValue = event.target.value;
  }

  render() {
    return [
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="firstNumber">Enter First Number: </label>
        <input id="firstNumber" type="number" step="any" value={this.value} onInput={event => this.handleChange(event)} />

        <label htmlFor="secondNumber"> Enter Second Number: </label>
        <input id="secondNumber" type="number" step="any" value={this.value2} onInput={event => this.handleSecondChange(event)} />

        <label htmlFor="select"> Select Operaton to Perform</label>
        <select id="select" onInput={event => this.handleSelect(event)}>
          <option value="addition" selected={this.selectValue === 'addition'}>
            Addition
          </option>
          <option value="subtraction" selected={this.selectValue === 'subtraction'}>
            Subtraction
          </option>
          <option value="multiplication" selected={this.selectValue === 'multiplication'}>
            Multiplication
          </option>
          <option value="division" selected={this.selectValue === 'division'}>
            Division
          </option>
        </select>
        <input type="submit" value="Submit" />

        <p>Result: {this.result}</p>
        <p>{this.zeroDivisionError ? 'Zero Division Error' : ' '} </p>
      </form>,
    ];
  }
}
