const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const divisionRemainder = (x, y) => x % y;

class Command {
  constructor(execute, value, current) {
    this.execute = execute;
    this.value = value;
    this.current = current;
  }
}

const AddCommand = '+',
  SubCommand = '-',
  MulCommand = '*',
  DivCommand = '/',
  DivRemCommand = '%';

const Commands = {
  AddCommand: function (value, current) {
    return new Command(add, value, current);
  },
  SubCommand: function (value, current) {
    return new Command(subtract, value, current);
  },
  MulCommand: function (value, current) {
    return new Command(multiply, value, current);
  },
  DivCommand: function (value, current) {
    return new Command(divide, value, current);
  },
  DivRemCommand: function (value, current) {
    return new Command(divisionRemainder, value, current);
  },
};

function Calculator() {
  let current = 0;

  return {
    execute: function (command) {
      current = +command.execute(command.current, command.value);
      return current;
    },

    getCurrentValue: function () {
      return current;
    },
  };
}

const operations = (value, operator, currentValue) => {
  switch (operator) {
    case AddCommand:
      return new Commands.AddCommand(value, currentValue);
    case SubCommand:
      return new Commands.SubCommand(value, currentValue);
    case MulCommand:
      return new Commands.MulCommand(value, currentValue);
    case DivCommand:
      return new Commands.DivCommand(value, currentValue);
    case DivRemCommand:
      return new Commands.DivRemCommand(value, currentValue);
    default:
      return 0;
  }
};

export const calculatorCore = (value, operator, currentValue) => {
  const calculator = new Calculator();
  calculator.execute(operations(parseFloat(currentValue), operator, parseFloat(value)));
  const result = +calculator.getCurrentValue().toFixed(3);
  return result.toString();
};
