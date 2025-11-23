describe('preverjanja', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('preveri url products', () => {
    cy.pause()
    cy.get('[href="/products"] button').click()
    cy.pause()
    cy.url().should('include', '/products')
  })
})