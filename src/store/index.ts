import { createStore } from 'vuex';

export default createStore({
  state: {
    todoList: [{ message: 'todo message', checked: false }],
  },
  mutations: {
    addTodoItem(state: any, todoItem: todoList.todoItem) {
      state.todoList.push(todoItem)
    },
    removeTodoItem(state: any, index: number) {
      state.todoList.splice(index, 1)
    },
  },
  actions: {

  },
  modules: {
  },
});
