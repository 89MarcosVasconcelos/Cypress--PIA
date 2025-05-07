describe('Atualizar agendamento - PATCH /api/v1/agendausuariopago/:idUsuarioPago', () => {
  it('Deve deletar o agendamento do usuário pago com ID 174', () => {
    const idUsuarioPago = 174

    cy.request({
      method: 'DELETE',
      url: `http://52.54.221.143:8000/api/v1/agendausuariopago/${idUsuarioPago}/`,
      headers: {
        Authorization: 'Bearer P7u41EjSmO1eRVylJk8jrlU3BOj9qm',
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 202])
      cy.log('Agendamento atualizado com sucesso:', JSON.stringify(response.body, null, 2))
    })
  })
})
