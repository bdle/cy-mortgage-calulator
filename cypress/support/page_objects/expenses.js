
export class Expenses {
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