<template>
  <div>
    <ul>
      <TodoItem
          v-for="todo in getAllTodos" :key="todo.id"
          :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TodoItem from './todo.vue'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["getAllTodos"])
  },
  methods: {
    ...mapActions(["getAll"]),
  },
  async mounted() {
    await this.getAll();
  }
}
</script>
