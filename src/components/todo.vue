<template>
  <li>
    <span>
      {{ todo.title }}
    </span>
    <input
      v-model="newTitle"
      type="text"
      placeholder="New title name"
    >
    <button
      @click="updateItem"
    >
      Edit
    </button>
    <button
      @click="removeTodo(todo._id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'TodoItem',
  props: {
    todo: Object
  },
  data() {
    return {
      newTitle: ''
    }
  },
  methods: {
    updateItem() {
      this.updateTodo({ id: this.todo._id, title: this.newTitle})
      this.newTitle = ''
    },
    ...mapActions(['removeTodo', 'updateTodo']),
  }
}
</script>

<style scoped>
  li {
    justify-content: space-around;
    display: flex;
    border: 1px solid #ccc;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}
</style>