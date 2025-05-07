describe('Deletar usuário pago - DELETE /api/v1/usuariopago/:idPessoa', () => {
  it('Deve deletar o usuário pago com idPessoa 174', () => {
    const idPessoa = 174

    cy.request({
      method: 'DELETE',
      url: `http://52.54.221.143:8000/api/v1/usuariopago/${idPessoa}/`,
      headers: {
        Authorization: 'Bearer P7u41EjSmO1eRVylJk8jrlU3BOj9qm',
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 204]) // 204 geralmente usado em deleção sem retorno
      cy.log(`Usuário com idPessoa ${idPessoa} deletado com sucesso.`)
    })
  })
})
