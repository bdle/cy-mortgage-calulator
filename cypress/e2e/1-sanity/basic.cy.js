import rental_data from '../../fixtures/rental_data.json'

/**
 * Basic test for the mortgage
 * Given Mortgage Calculator takes a few of these inputs from user:
 * 1. Purchase Price
 * 2. Down Payment
 * 3. Home Insurance
 * 4. Yearly Water Cost
 * 5. Rent Income
 * When user makes such input
 * Then the Mortgage Calculator reflect the following calculation correctly:
 * 1. Loan Amount
 * 2. Monthly home insurance expense
 * 3. Monthly Water expense
 * 4. Monthly Rent Income
 */
describe('Mortgage Calculator E2E Tests', () => {
  it('calculates accurately as data are entered', () => {
    cy.visit('/');
    const purchase_price = rental_data.purchase_price;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    cy.get('[data-cy="purchase-price-input"]').clear().type(purchase_price);

    const down_payment_amount = rental_data.down_payment_amount;
    cy.get('[data-cy="down-payment-amount-input"]').clear().type(down_payment_amount);

    const loan_amount = purchase_price - down_payment_amount;
    const loan_amount_formatted = 'Total Loan Amount:' + formatter.format(loan_amount);
    console.log(loan_amount_formatted); // "$123,456.78"
    cy.get('[data-cy="loan-amount-items"]').should('have.text', loan_amount_formatted);

    const home_insurance = rental_data.home_insurance;
    cy.get('[data-cy="yearly-insurance-input"]').clear().type(home_insurance);
    const home_insurance_monthly = parseFloat(home_insurance) / 12;
    const home_insurance_monthly_formatted = 'Insurance:' + formatter.format(home_insurance_monthly);
    cy.get('[data-cy="insurance-items"]').should('have.text', home_insurance_monthly_formatted);


    const water_cost_yearly = rental_data.yearly_water_cost;
    cy.get('[data-cy="yearly-water-cost-input"]').clear().type(water_cost_yearly);
    const water_cost_monthly = parseFloat(water_cost_yearly) / 12;
    const water_cost_monthly_formatted = 'Water Utility (Monthly):' + formatter.format(water_cost_monthly);
    cy.get('[data-cy="water-util-items"]').should('have.text', water_cost_monthly_formatted);

    const monthly_rent_income = rental_data.monthly_rent_income;
    cy.get('[data-cy="rent-roll-input"]').clear().type(monthly_rent_income);

    const rent_amount_formatted = 'Monthly Rent Income:' + formatter.format(monthly_rent_income);
    cy.get('[data-cy="rent-roll-income-items"]').should('have.text', rent_amount_formatted);


  });
});