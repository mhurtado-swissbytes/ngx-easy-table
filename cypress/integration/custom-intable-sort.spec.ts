/// <reference types="Cypress" />

context('Custom intable sort', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/custom-intable-sort');
    },
  );

  it('gets sorted results by surname', () => {
    cy.get('#table > thead > tr > th:nth-child(4)')
      .click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(4) > div')
      .contains('Kristen Whitehead')
      .get('#table > thead > tr > th:nth-child(4)')
      .click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(4) > div')
      .contains('Merrill Allen');
  });
  it('gets sorted results by level', () => {
    cy.get('#table > thead > tr > th:nth-child(6)')
      .click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(6) > div')
      .contains('High')
      .get('#table > thead > tr > th:nth-child(6)')
      .click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(6) > div')
      .contains('Low');
  });
});
