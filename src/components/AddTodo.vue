<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="title"
      type="text"
      data-qa="message"
      placeholder="Todo name"
    >
    <button
      type="submit"
      data-qa="save"
    >
      Add
    </button>
  </form>
</template>

<script>
import {mapActions} from 'vuex';

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