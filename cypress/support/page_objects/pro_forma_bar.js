import { SHORT_WAIT } from "../common_funcs";
export class ProForma {
    verifyMortgageProFormaHeader() {
        cy.contains('Mortgage Pro Forma', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifySignInWithGoogleButton() {
        cy.contains('button[data-cy="google-login-btn"]', 'Sign in with Google', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifySignOutButton() {
        cy.contains('button', "Sign Out", { timeout: SHORT_WAIT }).should('be.visible');
    }
    clickSignInWithGoogleButton() {
        cy.get('button[data-cy="google-login-btn"]').click();
        this.verifySignOutButton();
    }
    clickSignOutButton() {
        cy.contains('button', "Sign Out", { timeout: SHORT_WAIT }).click();
        this.verifySignInWithGoogleButton();
    }
    verifySaveLoadMortgageProFormaHeader() {
        cy.contains('h3', 'Save / Load Mortgage Pro Forma', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifyProFormaInputFieldLabel() {
        cy.contains('label[data-cy="proforma-label"]', 'Name of Mortgage Pro Forma', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifyProFormaInputField() {
        cy.get('input[data-cy="proforma-input"]', { timeout: SHORT_WAIT }).should('be.visible');
    }
    enterProFormaName(name) {
        cy.get('input[data-cy="proforma-input"]', { timeout: SHORT_WAIT }).should('be.visible').type(name)
    }
    verifySaveButton() {
        cy.get('button[data-cy="save-proforma-btn"]', { timeout: SHORT_WAIT }).should('be.visible');
    }
    clickSaveButton() {
        cy.get('button[data-cy="save-proforma-btn"]', { timeout: SHORT_WAIT }).should('be.visible').click();
    }
    verifySignOutButtonNotExist() {
        cy.contains('button', "Sign Out", { timeout: SHORT_WAIT }).should('not.exist');
    }
    verifySaveButtonNotExist() {
        cy.get('button[data-cy="save-proforma-btn"]', { timeout: SHORT_WAIT }).should('not.exist');
    }
    verifyProFormaInputFieldNotExist() {
        cy.get('input[data-cy="proforma-input"]', { timeout: SHORT_WAIT }).should('not.exist');
    }
    verifyProFormaInputFieldLabelNotExist() {
        cy.contains('label[data-cy="proforma-label"]', 'Name of Mortgage Pro Forma', { timeout: SHORT_WAIT }).should('not.exist');
    }
    verifySaveLoadMortgageProFormaHeaderNotExist() {
        cy.contains('Save / Load Mortgage Pro Forma', { timeout: SHORT_WAIT }).should('not.exist');
    }
}
export const pro_forma = new ProForma();