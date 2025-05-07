describe('Login no sistema', () => {
  it('Deve fazer login e verificar links Meus Dados e Logout', () => {
    // Visita o site
    cy.visit('http://52.1.79.163/')

    // Preenche o formulário de login usando os placeholders
    cy.get('input[placeholder="Usuário"]').type('marcos')
    cy.get('input[placeholder="Senha"]').type('root1234')

    // Submete o formulário
    cy.get('form').submit() // ou ajuste conforme o botão se necessário

    // Verifica se os links estão visíveis após login
    cy.contains('Meus Dados').should('be.visible')
    cy.contains('Logout').should('be.visible')
	cy.contains('Agenda').should('be.visible')
	
	 // Clica no botão/link de Logout
    cy.contains('Logout').click()

    // (Opcional) Verifica se voltou para tela de login
    cy.get('input[placeholder="Usuário"]').should('exist')
  })
})
