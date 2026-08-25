import rental_data from '../../fixtures/550_E3rd_st.json'
import { loan_details } from '../../support/page_objects/loan_details';
import {
  estimated_monthly_payments
} from '../../support/page_objects/estimated_monthly_mortgage';

import { expenses_and_income } from '../../support/page_objects/expenses';
import { pro_forma } from '../../support/page_objects/pro_forma_bar';
import { getRandomQuarterUpInterestRate, getRandomNearestMultipleOf25 } from '../../support/common_funcs';
import { generateMersenne32Randomizer } from '@faker-js/faker';
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
    // pro_forma.clickSignOutButton();
    pro_forma.verifySaveLoadMortgageProFormaHeaderNotExist();
    pro_forma.verifyProFormaInputFieldLabelNotExist();
    pro_forma.verifyProFormaInputFieldNotExist();
    pro_forma.verifySaveButtonNotExist();
    pro_forma.verifySignInWithGoogleButton();
    pro_forma.verifySignOutButtonNotExist();
  });
  it('Calculates accurately basic data are entered', () => {
    cy.visit('/');

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const negotiated_discount = getRandomNearestMultipleOf25() * 1000;
    const purchase_price = String(parseInt(rental_data.purchase_price, 10) - parseInt(negotiated_discount))
    loan_details.enterPurchasePrice(purchase_price);

    const down_payment_amount = rental_data.down_payment_amount;
    loan_details.enterDownPaymentAmount(down_payment_amount);
    const rate = getRandomQuarterUpInterestRate(6.0, 7.0);
    loan_details.enterInterestRate(rate);

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

    let name = rental_data.pro_forma + " pay " + purchase_price + " with " + rental_data.down_payment_amount + " down payment and " + rate + "%"
    pro_forma.enterProFormaName(name);
    pro_forma.clickSaveButton();
  });
});