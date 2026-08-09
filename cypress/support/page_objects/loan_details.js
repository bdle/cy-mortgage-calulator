export class LoanDetails {
    enterPurchasePrice(purchase_price) {
        cy.get('[data-cy="purchase-price-input"]').clear().type(purchase_price);
    }

    enterDownPaymentAmount(down_payment_amount) {
        cy.get('[data-cy="down-payment-amount-input"]').clear().type(down_payment_amount);
    }
}
export const loan_details = new LoanDetails();
