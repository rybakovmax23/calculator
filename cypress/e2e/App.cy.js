describe('App tests', () => {
  it('navigation check', () => {
    cy.visit('/');
    cy.get('[data-cy="calculateCC"]').click();
    cy.location('pathname').should('eq', '/calculatorCC');
    cy.get('[data-cy="settings"]').click();
    cy.location('pathname').should('eq', '/settings');
    cy.get('[data-cy="home"]').click();
    cy.location('pathname').should('eq', '/');
  });
  it('display check', () => {
    cy.visit('/');
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="4"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="display"]').should('have.text', '12345');
  });
  it('arithmetic operation check', () => {
    cy.visit('/');
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display"]').should('have.text', '4');
  });
  it('history check', () => {
    cy.visit('/');
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display"]').should('have.text', '4');
    cy.get('[data-cy="controlPanel"]').click();
    cy.get('[data-cy="history"]').contains('2+2');
  });
  it('theme check', () => {
    cy.visit('/settings');
    cy.get('[data-cy="themeHandler"]').click();
    cy.get('[data-cy="dark"]').click();
    cy.get('header').should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('[data-cy="themeHandler"]').click();
    cy.get('[data-cy="color"]').click();
    cy.get('header').should('have.css', 'background-color', 'rgb(100, 149, 237)');
    cy.get('[data-cy="themeHandler"]').click();
    cy.get('[data-cy="light"]').click();
    cy.get('header').should('have.css', 'background-color', 'rgb(67, 67, 67)');

  });
});
