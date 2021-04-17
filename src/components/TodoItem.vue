<template>
  <div class="todo-item-wrapper">
    <div class="message">
      <input type="checkbox" v-model="item.checked" />
      <span
        :class="{ completed: item.checked }"
        v-show="!isEdit"
        @click="onChange"
      >
        {{ item.message }}
      </span>
      <input
        v-show="isEdit && !item.checked"
        type="text"
        v-model="item.message"
        @blur="isEdit = false"
        @keyup.enter="isEdit = false"
      />
    </div>
    <div class="delete" @click="onDelete">删除</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    onChange() {
      if (this.item.checked) {
        return;
      }
      this.isEdit = true;
    },
    onDelete() {
      this.$emit('delete', this.index);
    },
  },
});
</script>

<style scoped lang="less">
.todo-item-wrapper {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  .completed {
    color: #ccc;
    text-decoration: line-through;
  }

  .delete {
    cursor: pointer;
  }
}
</style>
