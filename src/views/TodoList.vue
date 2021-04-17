<template>
  <div class="todo-wrapper">
    <h1>Todo List</h1>
    <div class="todo-input">
      <input type="text" v-model="message" @keyup.enter="onMsgAdd" />
    </div>
    <div class="todo-info" v-for="(item, idx) in todoList" :key="idx">
      <todo-item :item="item" :index="idx" @delete="onDelete" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import TodoItem from '../components/TodoItem.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TodoItem,
  },
  data() {
    return {
      message: '',
    };
  },
  setup() {
    const store: any = useStore();
    const addTodoItem = (message: todoList.todoItem) => {
      store.commit('addTodoItem', message);
    };
    const removeTodoItem = (index: number) => {
      store.commit('removeTodoItem', index);
    };
    return {
      addTodoItem,
      removeTodoItem,
      todoList: store.state.todoList,
    };
  },
  methods: {
    onMsgAdd() {
      if (!this.message) {
        return;
      }
      const message: todoList.todoItem = {
        message: this.message,
        checked: false,
      };
      this.addTodoItem(message);
      this.message = '';
    },
    onDelete(index: number) {
      this.removeTodoItem(index);
    },
  },
});
</script>
<style lang="less" scoped>
.todo-wrapper {
  width: 400px;
  margin: 0 auto;
}
</style>
