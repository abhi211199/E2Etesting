beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('mark note as done', () => {
    cy.get('.markAsDone').each(($el, index, $list)=>{
        cy.wrap($el).click()
    } ).then(($lis)=>{
        console.log($lis);
    })
  })