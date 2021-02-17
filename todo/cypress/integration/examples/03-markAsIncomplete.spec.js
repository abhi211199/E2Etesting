beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('mark note as incomplete', () => {
    cy.get('.markAsIncomplete').each(($el, index, $list)=>{
        cy.wrap($el).click()
    } ).then(($lis)=>{
        console.log($lis);
    })
  })