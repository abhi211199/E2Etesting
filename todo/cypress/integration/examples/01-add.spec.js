beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('add note', () => {
    [0,1,2,3].forEach(()=>{
      cy.get('#add').click()
      cy.get('#note').type('test note')
      cy.get('#summary').type('test summary')
      cy.get('#sendData').click()
  })



    // cy.url().should('match', /fuel-savings$/)
  
    // cy.get('#newMpg').type('30')
    // cy.get('#tradeMpg').type('20')
  
    // cy.get('#newPpg').type('3')
    // cy.get('#tradePpg').type('3')
  
    // cy.get('#milesDriven').type('10000')
    // cy.get('#milesDrivenTimeframe').select('year')
  
    // cy.get('td.savings')
    //   .should('have.length', 3)
    //   .and('be.visible')
    //   .first() // Monthly
    //   .should('contain', '$41.67')
  
    // cy.get('#saveCompleted').should('not.be.visible')
    // cy.get('#save').click()
    // cy.get('#saveCompleted').should('be.visible')
  })