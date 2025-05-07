describe('Teste de API - POST /o/token/', () => {
  it('Deve obter um token com as credenciais corretas', () => {
    cy.request({
      method: 'POST',
      url: 'http://52.54.221.143:8000/o/token/',
      form: true, // envia como application/x-www-form-urlencoded
      body: {
        client_id: 'sIiB299a7Jv6WyDPfqUvu6ZdbJshtkj5Ax1cioyQ',
        client_secret: 't82J0uzLByoXqT2bTL4MEck0O38mWF5uzJJl1yD0vPvofZzIYdnugp2zN46MA4mXFX1iZQRk376V7dUFZX59aZTYqfN9sYEjhCp9gXTM4en6N812jLQLP0teN7yJGicC',
        username: 'marcos',
        password: 'root1234',
        grant_type: 'password'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('access_token')
      
      // Exibe o token no log do Cypress
      cy.log('Token de acesso:', response.body.access_token)
    })
  })
})
