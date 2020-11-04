import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:3000';

export default {
    actions: {
        async getAll({commit}) {
            axios.get("/tasks")
                .then(response => {
                    commit('setTodo', response.data)
                });
        },
        async addTodo({dispatch }, title) {
            axios.post("/tasks", {title})
                .then(response => {
                    dispatch('getAll');
                });
        },
        async updateTodo(ctx, data) {
            axios.patch(`/tasks/${data.id}`, {title : data.title})
                .then(response => {
                    ctx.dispatch('getAll');
                });
        },
        async removeTodo(ctx, id) {
            axios.delete(`/tasks/${id}`)
                .then(response => {
                    ctx.dispatch('getAll');
                });
        }
    },
    mutations: {
        setTodo: (state, todos) => state.todos = todos
    },
    state: {
        todos: []
    },
    getters: {
        getAllTodos: state => state.todos
    }
}