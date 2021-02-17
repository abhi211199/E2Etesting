beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('edit note', () => {
    cy.get('.Edit').each(($el, index, $list)=>{
        cy.wrap($el).click()
        cy.get('#note').type(' edited test note')
        cy.get('#summary').type(' edited test summary')
        cy.get('#sendData').click()
    } ).then(($lis)=>{
        console.log($lis);
    })
  })