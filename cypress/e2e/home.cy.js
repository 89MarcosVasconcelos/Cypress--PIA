// cypress/e2e/home.cy.js
describe('Página inicial', () => {
  it('deve carregar corretamente', () => {
    cy.visit('http://52.1.79.163')
    cy.contains('Login').should('be.visible')
  })
})
