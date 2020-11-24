const store = [];

function updateTodo(params = {}) {
    const url = params.url.split('/');
    const updTodo = {
        _id: parseInt(url[4]),
        title: params.title
    };
    const item = store.find(todo => todo._id === updTodo._id);
    return Object.assign(item, updTodo);
}

function createTodo(titles = []) {
    for (const  [key, title] of titles.entries()) {
        store.push({
            _id: Date.now() + key,
            title
        })
    }
    return store
}

function createOneTodo(title = 'default') {
    return {
        _id: Date.now(),
        title
    }
}

export {updateTodo, createTodo, createOneTodo};
