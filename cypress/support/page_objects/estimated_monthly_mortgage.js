export class MonthlyMortgage {

    verifyTotalLoanAmount(loan_amount) {
        const loan_amount_formatted = 'Total Loan Amount:' + formatter.format(loan_amount);
        console.log(loan_amount_formatted); // "$123,456.78"
        cy.get('[data-cy="loan-amount-items"]').should('have.text', loan_amount_formatted);
    }

    verifyMonthlyInsurance(home_insurance_monthly) {
        const home_insurance_monthly_formatted = 'Insurance:' + formatter.format(home_insurance_monthly);
        cy.get('[data-cy="insurance-items"]').should('have.text', home_insurance_monthly_formatted);
    }

    verifyMonthlyWaterCost(water_cost_monthly) {
        const water_cost_monthly_formatted = 'Water Utility (Monthly):' + formatter.format(water_cost_monthly);
        cy.get('[data-cy="water-util-items"]').should('have.text', water_cost_monthly_formatted);
    }

    verifyMonthlyRentRollIncome(monthly_rent_income) {
        const rent_amount_formatted = 'Monthly Rent Income:' + formatter.format(monthly_rent_income);
        cy.get('[data-cy="rent-roll-income-items"]').should('have.text', rent_amount_formatted);
    }
}
export const estimated_monthly_payments = new MonthlyMortgage();
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});