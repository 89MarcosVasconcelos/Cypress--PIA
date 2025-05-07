describe('Criar usuário pago - POST /api/v1/usuariopago/', () => {
  it('Deve criar um novo usuário pago com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'http://52.54.221.143:8000/api/v1/register/',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        nome: 'thales',
        cpf: 'root1234'
      },
      failOnStatusCode: false // opcional: evita falha automática se o status for 4xx ou 5xx
    }).then((response) => {
      // Verifica que o status foi 201 (Created) ou outro esperado
      expect(response.status).to.be.oneOf([200, 201])
      cy.log('Resposta da API:', JSON.stringify(response.body, null, 2))
    })
  })
})
