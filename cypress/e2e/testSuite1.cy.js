describe('upravljanje izdelka', () => {
  const product = 'Tartufi'


  beforeEach(() => {
    cy.visit('http://localhost:3000/products')
  })

  it('dodaj-izdelek', () => {

    // cy.get('[href="/products"] button').click()
    const minTemp = 1
    const maxTemp = 4
    cy.get('tbody tr').children('[id^="productsTableBodyName"]').contains(product).should('not.exist') // [] iskanje po atributih značk, ^= delno ujemanje
    cy.get('#addNewProductButton').click()
    cy.get('#addProductNameInput').type(product)
    cy.get('#addProductMaxInput').type(`${minTemp}`) // Za uporabo spremenljivk ${} mora bit string deklariran z ` (AltGr + 7), njihove komande {enter} etc. delajo tudi z navadnim '
    cy.get('#addProductMinInput').type(`${maxTemp}`)
    cy.get('#addProductButton').click()
    cy.get('tbody tr').children('[id^="productsTableBodyName"]').contains(product).should('exist')
  })
})