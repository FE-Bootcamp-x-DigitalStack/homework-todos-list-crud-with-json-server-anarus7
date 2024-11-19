(async function init() {
    const todos = await server.getTodos();
    ui.renderTodos(todos);

    const form = document.forms['todoForm'];
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const titleInput = form.elements['new-todo-title'];
        const title = titleInput.value.trim();

        if (title) {
            const newTodo = { title, done: false };

            const addedTodo = await server.addTodo(newTodo);
            if (response.ok) {
                titleInput.value = ''; 

                
                const todos = await server.getTodos();
                ui.renderTodos(todos);
            } else {
                console.error('Failed to add new todo');
            }
        } else {
            alert('Please enter a todo title');
        }
    });

    document.querySelector('#todos-list').addEventListener('change', async (event) => {
        if (event.target.type === 'checkbox') {

            const checkboxId = event.target.id;
            const done = event.target.checked;

            await server.updateTodo({ done }, checkboxId);
            const todos = await server.getTodos();

            ui.renderTodos(todos);
        }
    });

    document.querySelector('#todos-list').addEventListener('click', async (event) => {
        if (event.target.classList.contains('delete-btn')) {

            const id = event.target.dataset.id;
            
            await server.deleteTodo(id);
        }
    });
})();
