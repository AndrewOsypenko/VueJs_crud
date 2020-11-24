import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:3000';

export default {
    actions: {
        async getAll({commit}) {
            axios.get("/tasks")
                .then(response => {
                    commit('setTodo', response.data);
                });
        },
        async addTodo({commit}, title) {
            axios.post("/tasks", {title})
                .then(response => {
                    commit('addTodo', response.data);
                });
        },
        async updateTodo({commit}, data) {
            axios.patch(`/tasks/${data.id}`, {title: data.title})
                .then(response => {
                    commit('updateTodo', response.data);
                });
        },
        async removeTodo({commit}, id) {
            axios.delete(`/tasks/${id}`)
                .then(() => {
                    commit('removeTodo', id);
                });
        }
    },
    mutations: {
        setTodo: (state, todos) => state.todos = todos,
        addTodo: (state, todo) => state.todos.push(todo),
        removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo._id !== id),
        updateTodo: (state, updTodo) => {
            const item = state.todos.find(todo => todo._id === updTodo._id);
            Object.assign(item, updTodo);
        }
    },
    state: {
        todos: []
    },
    getters: {
        getAllTodos: state => state.todos
    }
};