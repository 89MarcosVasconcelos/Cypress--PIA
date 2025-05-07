describe('Criar agendamento para usuário pago - POST /api/v1/agendausuariopago/', () => {
  it('Deve criar um agendamento com sucesso para o usuário 174', () => {
    cy.request({
      method: 'POST',
      url: 'http://52.54.221.143:8000/api/v1/agendausuariopago/',
      headers: {
        Authorization: 'Bearer P7u41EjSmO1eRVylJk8jrlU3BOj9qm',
        'Content-Type': 'application/json'
      },
      body: {
        id_usuario_pago: 174,
        data_hora_inicio: '2025-06-11 20:00',
        data_hora_fim: '2025-06-11 23:00',
        compromisso: 'Futsal - Rua 124 -Responsável Carlos'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201])
      expect(response.body).to.have.property('id') // ou qualquer outro campo esperado
      cy.log('Agendamento criado com sucesso:', JSON.stringify(response.body, null, 2))
    })
  })
})
