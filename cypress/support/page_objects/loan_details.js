import { SHORT_WAIT } from "../common_funcs";
export class LoanDetails {
    verifyLoanDetailsHeader() {
        cy.contains('Loan Details', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifyPurchasePriceLabel() {
        cy.contains('Purchase Price', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifyDownPaymentLabel() {
        cy.contains('Down Payment', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifyInterestRateLabel() {
        cy.contains('Interest Rate', { timeout: SHORT_WAIT }).should('be.visible');
    }
    verifyLoanTermLabel() {
        cy.contains('Loan Term', { timeout: SHORT_WAIT }).should('be.visible');
    }
    enterPurchasePrice(purchase_price) {
        cy.get('[data-cy="purchase-price-input"]').clear().type(purchase_price);
    }

    enterDownPaymentAmount(down_payment_amount) {
        cy.get('[data-cy="down-payment-amount-input"]').clear().type(down_payment_amount);
    }
}
export const loan_details = new LoanDetails();
