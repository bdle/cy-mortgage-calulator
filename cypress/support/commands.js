// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Custom command to allow login using Firebase Admin configuration and authenticate on the client
//This require an expose of auth instance to the window in src/firebase.js in react application
Cypress.Commands.add('loginByFirebaseToken', (uid = 'cypress-test-user') => {
    cy.task('getAuthToken', uid).then((customToken) => {
        cy.window().then(async (win) => {
            if (win.auth && win.signInWithCustomToken) {
                // Pass win.auth as the first argument
                await win.signInWithCustomToken(win.auth, customToken);
            }
        });
    });
});