import rental_data from '../../fixtures/rental_data.json'
import { loan_details } from '../../support/page_objects/loan_details';
import {
  estimated_monthly_payments
} from '../../support/page_objects/estimated_monthly_mortgage';

import { expenses_and_income } from '../../support/page_objects/expenses';
import { management } from '../../support/page_objects/management';
/**
 * Quick L1 Sanity UI Tests
 * 
 */
describe('UI Sanity Testsuite', () => {
  it('Verify Loan Details block', () => {
    cy.visit('/');
    loan_details.verifyLoanDetailsHeader();
    loan_details.verifyPurchasePriceLabel();
    loan_details.verifyDownPaymentLabel();
    loan_details.verifyInterestRateLabel();
    loan_details.verifyLoanTermLabel();
  });
  it('Verify Expenses and Income block', () => {
    cy.visit('/');
    expenses_and_income.verifyExpensesIncomeHeader();
    expenses_and_income.verifyPropertyTaxRateLabel();
    expenses_and_income.verifyYearlyPropertyTaxLabel();
    expenses_and_income.verifyYearlyInsuranceLabel();
    expenses_and_income.verifyMonthlyHOAFeeLabel();
    expenses_and_income.verifyYearlyWaterCostLabel();
    expenses_and_income.verifyExpectedMonthlyRentLabel();
  });

  it('Verify Rental Management block', () => {
    cy.visit('/')
    management.verifyRentalManagementHeader();
    management.verifyManagementFeeLabel();
    management.verifyMonthlyManagementFeeLabel();
  })
});