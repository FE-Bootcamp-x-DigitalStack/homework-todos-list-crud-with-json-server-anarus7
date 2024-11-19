const dom = {
    todosList: document.querySelector('#todos-list'),
};

const ui = {
    renderTodos(todos) {
        dom.todosList.innerHTML = '';
        todos.forEach((todo) => {
            dom.todosList.insertAdjacentHTML(
                'beforeend',
                `<li style="display: flex; justify-content: space-between; align-items: center; padding: 5px 0;">
                    <div>
                        <input type="checkbox" ${todo.done ? 'checked' : ''} id="${todo.id}" />
                        <label for="${todo.id}">${todo.title}</label>
                    </div>
                    <button class="delete-btn" data-id="${todo.id}">Delete</button>
                </li>`
            );
        });
    },
};
