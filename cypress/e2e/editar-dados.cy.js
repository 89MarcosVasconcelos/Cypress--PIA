describe('Editar dados do usuário', () => {
  it('Deve alterar dados, salvar e sair do sistema', () => {
    // Acessa o sistema
    cy.visit('http://52.1.79.163/')

    // Login
    cy.get('input[placeholder="Usuário"]').type('marcos')
    cy.get('input[placeholder="Senha"]').type('root1234')
    cy.get('form').submit()

    // Acessa a página de Meus Dados
    cy.contains('Meus Dados').should('be.visible').click()

    // Altera o nome
    cy.get('input[name="nome"]').clear().type('Marcos Vasconcelos')

    // Verifica os campos obrigatórios
    cy.get('input[name="cpf"]').should('exist')
    cy.get('input[name="telefone"]').should('exist')
    cy.get('input[name="celular"]').should('exist')
    cy.get('input[name="endereco"]').should('exist')
    cy.get('input[name="preco_hora"]').should('exist')

    // Clica no botão salvar
    cy.contains('Salvar').click()

    // Valida o pop-up de sucesso
    cy.on('window:alert', (texto) => {
      expect(texto).to.eq('Dados atualizados com sucesso!')
    })

    // Simula clicar no botão "ok" (assumindo que é um alert e fecha automaticamente)

    // Aguarda 5 segundos
    cy.wait(5000)

    // Logout
    cy.contains('Logout').click()

    // Verifica que voltou à tela de login
    cy.get('input[placeholder="Usuário"]').should('exist')
  })
})
