describe('Editar usuário pago - PATCH /api/v1/usuariopago/:id', () => {
  it('Deve atualizar os dados do usuário pago com ID 174', () => {
    const idPessoa = 174
	
	cy.request({
      method: 'PATCH',
      url: 'http://52.54.221.143:8000/api/v1/usuariopago/${idPessoa}/',
      headers: {
        Authorization: 'Bearer P7u41EjSmO1eRVylJk8jrlU3BOj9qm',
        'Content-Type': 'application/json'
      },
      body: {
        nome: 'Thiago Silva',
        preco_hora: 60.00, // novo valor atualizado
        endereco: 'Rua atualizada 456'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 202])
      cy.log('Resposta da API (PATCH):', JSON.stringify(response.body, null, 2))
    })
  })
})
