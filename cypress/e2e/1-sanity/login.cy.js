import rental_data from '../../fixtures/rental_data.json'
import { loan_details } from '../../support/page_objects/loan_details';
import {
  estimated_monthly_payments
} from '../../support/page_objects/estimated_monthly_mortgage';
import { pro_forma } from '../../support/page_objects/pro_forma_bar';
import { expenses_and_income } from '../../support/page_objects/expenses';
import { management } from '../../support/page_objects/management';

/**
 * Quick L1 Sanity UI Tests
 * 
 */
describe('Mortgage Calculator E2E Tests-Log in with user', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.loginByFirebaseToken(Cypress.env('user').user_id);
    pro_forma.verifyMortgageProFormaHeader();
    pro_forma.verifySignOutButton();
    pro_forma.verifySaveLoadMortgageProFormaHeader();
    pro_forma.verifyProFormaInputFieldLabel();
    pro_forma.verifyProFormaInputField();
    pro_forma.verifySaveButton();
  });
  afterEach(() => {
    cy.visit('/');
    pro_forma.clickSignOutButton();
    pro_forma.verifySaveLoadMortgageProFormaHeaderNotExist();
    pro_forma.verifyProFormaInputFieldLabelNotExist();
    pro_forma.verifyProFormaInputFieldNotExist();
    pro_forma.verifySaveButtonNotExist();
    pro_forma.verifySignInWithGoogleButton();
    pro_forma.verifySignOutButtonNotExist();
  });
  it('Verify Loan Details block', () => {
    loan_details.verifyLoanDetailsHeader();
    loan_details.verifyPurchasePriceLabel();
    loan_details.verifyDownPaymentLabel();
    loan_details.verifyInterestRateLabel();
    loan_details.verifyLoanTermLabel();
  });
  it('Verify Expenses and Income block', () => {
    expenses_and_income.verifyExpensesIncomeHeader();
    expenses_and_income.verifyPropertyTaxRateLabel();
    expenses_and_income.verifyYearlyPropertyTaxLabel();
    expenses_and_income.verifyYearlyInsuranceLabel();
    expenses_and_income.verifyMonthlyHOAFeeLabel();
    expenses_and_income.verifyYearlyWaterCostLabel();
    expenses_and_income.verifyExpectedMonthlyRentLabel();
  });

  it('Verify Rental Management block', () => {
    management.verifyRentalManagementHeader();
    management.verifyManagementFeeLabel();
    management.verifyMonthlyManagementFeeLabel();
  })
});