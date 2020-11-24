import {updateTodo, createTodo, createOneTodo} from '../fixtures/todos';

context('Actions', () => {
    it('loads the app', () => {
        cy.intercept('GET', '/tasks', createTodo(['FirstTodo', 'SecondTodo', 'ThirdTodo'])).as('getTodo');
        cy.visit('/');
        cy.wait('@getTodo');
    })

    it('Get tasks data', () => {
        cy.get('[data-qa="product"]').find('[data-qa="todo"]').should('have.length', 3);
    });

    it('Click add and type new task.', () => {
        cy.intercept('POST', '/tasks', (req) => {
            req.reply(createOneTodo(req.body.title));
        }).as('addTask');

        cy.get('[data-qa="message"').type('addTask');
        cy.get('[data-qa="save"').click();

        cy.wait(['@addTask']);
        cy.get('[data-qa="product"]').find('li').should('have.length', 4);
    });

    it('Click update type updated task', () => {
        cy.intercept('PATCH', '/tasks', (req) => {
            req.reply(updateTodo({
                url: req.url,
                title: req.body.title
            }));
        }).as('updateTask')

        cy.get('[data-qa="product"]').find('[data-qa="todo"]').eq(0).find('[data-qa="newTaskName"]').type('updated task');
        cy.get('[data-qa="product"]').find('[data-qa="todo"]').eq(0).find('[data-qa="updateTask"]').click();
        cy.wait(['@updateTask']);
        cy.get('[data-qa="product"]').find('[data-qa="todo"]').eq(0);
    });

    it('Click remove task', () => {
        cy.intercept('DELETE', '/tasks', {}).as('removeTask');
        cy.get('[data-qa="product"]').find('[data-qa="todo"]').eq(2).find('[data-qa="removeTask"]').click();
        cy.wait('@removeTask');
        cy.get('[data-qa="product"]').find('li').should('have.length', 3);
    });
});