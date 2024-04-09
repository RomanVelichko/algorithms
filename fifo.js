// Структура данных 'стэк'
class Stack {
  constructor(){
    this.stack = new Array();
  }

  // Метод добавления данных в конец стэка
  push(data) {
    this.stack.push(data);
  }

  // Метод удаления данных из конца стэка
  pop(data) {
    if (!this.stack.length) return;

    this.stack.pop(data);
    return true;
  }

  // Метод очистки стэка/обнуление 
  clear() {
    this.stack = new Array();
  }

  // Метод проверки на пустую очередь
  isEmpty() {
    return this.stack.length === 0;
  }

  // Метод вывода массива очереди стэка
  toArray() {
    return this.stack;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("STACK", stack.toArray());
stack.pop();
console.log("STACK", stack.toArray());
