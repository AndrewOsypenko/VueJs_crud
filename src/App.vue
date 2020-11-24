<template>
  <div>
    <h1>Todo List</h1>
    <AddTodo
    />
    <hr>
    <todoList data-qa="product" />
  </div>
</template>
<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto;
  width: 400px;
}
</style>