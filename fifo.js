// Структура данных 'стэк'
class Stack {
  stack = new Array();

  // Метод добавления данных в конец стэка
  add(data) {
    this.stack.push(data);
  }

  // Метод удаления данных из конца стэка
  remove(data) {
    if (!this.stack.length) return;

    this.stack.pop(data);
    return true;
  }

  // Метод очистки стэка/обнуление 
  clear() {
    this.stack = new Array();
  }

  // Метод вывода массива очереди стэка
  print() {
    return this.stack;
  }
}

const stack = new Stack();

stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);

console.log("STACK", stack.print());
stack.remove();
console.log("STACK", stack.print());
stack.clear();
console.log("STACK", stack.print());
