describe('Atualizar agendamento - PATCH /api/v1/agendausuariopago/:idUsuarioPago', () => {
  it('Deve atualizar o agendamento do usuário pago com ID 174', () => {
    const idUsuarioPago = 174

    cy.request({
      method: 'PATCH',
      url: `http://52.54.221.143:8000/api/v1/agendausuariopago/${idUsuarioPago}/`,
      headers: {
        Authorization: 'Bearer P7u41EjSmO1eRVylJk8jrlU3BOj9qm',
        'Content-Type': 'application/json'
      },
      body: {
        data_hora_inicio: '2025-06-11 21:00',
        data_hora_fim: '2025-06-11 23:30',
        compromisso: 'Futsal atualizado - Rua 124 - Responsável Carlos Silva'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 202])
      cy.log('Agendamento atualizado com sucesso:', JSON.stringify(response.body, null, 2))
    })
  })
})
