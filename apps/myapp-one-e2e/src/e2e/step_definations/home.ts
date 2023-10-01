import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit duckduckgo.com', () => {
  cy.visit('/');
});

Then('I see a welcome message', () => {
  cy.get('div[id="welcome"] h1').contains("Welcome myapp-one");
});
