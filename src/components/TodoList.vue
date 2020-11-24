<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo in getAllTodos"
        :key="todo.id"
        :todo="todo"
        data-qa="todo"
      />
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import TodoItem from './todo.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: {
    todos: Object
  },
  computed: {
    ...mapGetters(['getAllTodos'])
  },
  async mounted() {
    await this.getAll();
  },
  methods: {
    ...mapActions(['getAll']),
  }
}
</script>
