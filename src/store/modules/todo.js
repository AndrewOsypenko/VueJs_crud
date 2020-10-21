import axios from "axios";

export default {
    actions: {
        async getAll(ctx) {
            axios.get("http://127.0.0.1:3000")
                .then(response => {
                    ctx.commit('setTodo', response.data)
                });
        },
        async addTodo(ctx, title) {
            axios.post("http://127.0.0.1:3000", {title})
                .then(response => {
                    ctx.dispatch('getAll');
                });
        },
        async updateTodo(ctx, data) {
            console.log(data)
            axios.patch(`http://127.0.0.1:3000/${data.id}`, {title : data.title})
                .then(response => {
                    ctx.dispatch('getAll');
                });
        },
        async removeTodo(ctx, id) {
            axios.delete(`http://127.0.0.1:3000/${id}`)
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