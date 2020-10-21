<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Todo name">
    <button type="submit">Add</button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit() {
      this.addTodo(this.title)
      this.title = ''
    }
  }
}
</script>