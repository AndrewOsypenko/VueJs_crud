<template>
  <li style="
    justify-content: space-around;
    display: flex;
    border: 1px solid #ccc;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
">
    <span>
      {{ todo.title }}
    </span>
    <input type="text" v-model="newTitle" placeholder="New title name">
    <button @click="updateItem">Edit</button>
    <button @click="removeTodo(todo._id)">&times;</button>
  </li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      newTitle: ''
    }
  },
  name: 'TodoItem',
  props: ['todo'],
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
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}
</style>