import rental_data from '../../fixtures/rental_data.json'
import { loan_details } from '../../support/page_objects/loan_details';
import {
  estimated_monthly_payments
} from '../../support/page_objects/estimated_monthly_mortgage';

import { expenses_and_income } from '../../support/page_objects/expenses';
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
  it('Calculates accurately basic data are entered', () => {
    cy.visit('/');
    const purchase_price = rental_data.purchase_price;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    loan_details.enterPurchasePrice(purchase_price);

    const down_payment_amount = rental_data.down_payment_amount;
    loan_details.enterDownPaymentAmount(down_payment_amount);
    const loan_amount = purchase_price - down_payment_amount;
    estimated_monthly_payments.verifyTotalLoanAmount(loan_amount);

    const home_insurance = rental_data.home_insurance;
    expenses_and_income.enterYearlyHomeInsuranceCost(home_insurance);
    const home_insurance_monthly = parseFloat(home_insurance) / 12;
    estimated_monthly_payments.verifyMonthlyInsurance(home_insurance_monthly);


    const water_cost_yearly = rental_data.yearly_water_cost;
    expenses_and_income.enterYearlyWaterCost(water_cost_yearly);
    const water_cost_monthly = parseFloat(water_cost_yearly) / 12;
    estimated_monthly_payments.verifyMonthlyWaterCost(water_cost_monthly);

    const monthly_rent_income = rental_data.monthly_rent_income;
    expenses_and_income.enterMonthlyRentRoll(monthly_rent_income);
    estimated_monthly_payments.verifyMonthlyRentRollIncome(monthly_rent_income);
  });
});