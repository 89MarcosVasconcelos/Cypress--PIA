describe('Verificar registro de usuário pago - GET /api/v1/usuariopagocheckregister/:id_pessoa', () => {
  it('Deve retornar os dados do usuário com id_pessoa informado', () => {
    const idPessoa = 174

    cy.request({
      method: 'GET',
      url: `http://52.54.221.143:8000/api/v1/usuariopagocheckregister/${idPessoa}/`,
      headers: {
        Authorization: 'Bearer P7u41EjSmO1eRVylJk8jrlU3BOj9qm',
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      cy.log('Resposta da API (usuário pago):', JSON.stringify(response.body, null, 2))
    })
  })
})
