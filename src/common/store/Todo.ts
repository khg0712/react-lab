// import { observable, reaction, computed, action } from "mobx";

// interface Counter {
//   count: number;
// }

// class TodoStore {
//   @observable counter: Counter = [];

//   constructor() {
//     reaction(
//       () => this.counter.filter(todo => !todo.isComplete),
//       incompletedTasks => {
//       }
//     );
//   }

//   @computed
//   get completedTasks(): number {
//     return this.todoList.filter(todo => todo.isComplete).length;
//   }

//   @action
//   addTodo(task: string) {
//     this.todoList.push({ task, isComplete: false })
//   }

//   @action
//   completeTodo(completedTodo: Counter) {
//     this.todoList.find(todo => todo === completedTodo)!.isComplete = true
//   }
// }

// export default TodoStore;
