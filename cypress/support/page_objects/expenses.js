
import { SHORT_WAIT } from "../common_funcs";
export class Expenses {
    verifyExpensesIncomeHeader() {
        cy.contains('Expenses and Income', { timeout: SHORT_WAIT }).should('be.visible')
    }
    verifyPropertyTaxRateLabel() {
        cy.contains('Property Tax Rate', { timeout: SHORT_WAIT }).should('be.visible')
    }
    verifyYearlyPropertyTaxLabel() {
        cy.contains('Yearly Property Tax', { timeout: SHORT_WAIT }).should('be.visible')
    }
    verifyYearlyInsuranceLabel() {
        cy.contains('Yearly Insurance', { timeout: SHORT_WAIT }).should('be.visible')
    }
    verifyMonthlyHOAFeeLabel() {
        cy.contains('Monthly HOA Fee', { timeout: SHORT_WAIT }).should('be.visible')
    }
    verifyYearlyWaterCostLabel() {
        cy.contains('Yearly Water Cost', { timeout: SHORT_WAIT }).should('be.visible')
    }
    verifyExpectedMonthlyRentLabel() {
        cy.contains('Expected Monthly Rent', { timeout: SHORT_WAIT }).should('be.visible')
    }
    enterYearlyHomeInsuranceCost(home_insurance) {
        cy.get('[data-cy="yearly-insurance-input"]').clear().type(home_insurance);
    }

    enterYearlyWaterCost(water_cost_yearly) {
        cy.get('[data-cy="yearly-water-cost-input"]').clear().type(water_cost_yearly);
    }

    enterMonthlyRentRoll(monthly_rent_income) {
        cy.get('[data-cy="rent-roll-input"]').clear().type(monthly_rent_income);
    }
}
export const expenses_and_income = new Expenses();