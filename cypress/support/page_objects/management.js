import { SHORT_WAIT } from "../common_funcs";
export class PropertyManagement {
    verifyRentalManagementHeader() {
        cy.contains('Rental Management', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifyManagementFeeLabel() {
        cy.contains('Management Fee', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifyMonthlyManagementFeeLabel() {
        cy.contains('Monthly Management Fee', { timeout: SHORT_WAIT }).should('be.visible');
    }
}
export const management = new PropertyManagement();